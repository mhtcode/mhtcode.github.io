"""Generate separate engineering and academic PDFs from the portfolio content.

Run from the repository with Python 3 and reportlab installed.
"""

import json
from pathlib import Path
import subprocess
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, Table, TableStyle,
    HRFlowable,
)

ROOT = Path(__file__).resolve().parents[1]
source = subprocess.check_output([
    "node", "--input-type=module", "-e",
    "import {siteConfig,portfolioProfiles} from './src/config.ts';"
    "import {resumeSections} from './src/portfolio.ts';"
    "console.log(JSON.stringify({siteConfig,portfolioProfiles,resumeSections}));",
], cwd=ROOT, encoding="utf-8")
data = json.loads(source)
config = data["siteConfig"]
sections = {section["slug"]: section for section in data["resumeSections"]}
BLUE = colors.HexColor("#075a9c")
INK = colors.HexColor("#182230")
MUTED = colors.HexColor("#536174")

def plain(value):
    return str(value).replace("—", "-").replace("–", "-").replace("’", "'").replace("·", "|")

def text(value):
    return escape(plain(value))

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=BLUE, spaceAfter=5),
    "label": ParagraphStyle("label", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=INK, spaceAfter=5),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.4, leading=12.4, textColor=INK, spaceAfter=3),
    "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8.8, leading=11.5, textColor=MUTED, spaceAfter=4),
    "heading": ParagraphStyle("heading", fontName="Helvetica-Bold", fontSize=10.8, leading=13, textColor=BLUE, spaceBefore=9, spaceAfter=3, keepWithNext=True),
    "entry": ParagraphStyle("entry", fontName="Helvetica-Bold", fontSize=9.7, leading=12.5, textColor=INK, keepWithNext=True),
    "date": ParagraphStyle("date", fontName="Helvetica", fontSize=8.8, leading=12.5, textColor=MUTED, alignment=2),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.4, leading=12.4, textColor=INK, leftIndent=10, firstLineIndent=0, bulletIndent=0, spaceAfter=2),
}

def para(value, style="body", markup=False):
    return Paragraph(value if markup else text(value), styles[style])

def item(section, slug):
    return next(entry for entry in sections[section]["items"] if entry["slug"] == slug)

def heading(story, value):
    story.extend([para(value, "heading"), HRFlowable(width="100%", thickness=.5, color=colors.HexColor("#cbd5e1"), spaceAfter=4)])

def bullets(story, values):
    story.extend(Paragraph(text(value), styles["bullet"], bulletText="•") for value in values)

def entry(story, entry, values=None):
    title = text(entry["title"])
    if entry.get("link"):
        title = f'<link href="{escape(entry["link"])}" color="#075a9c">{title}</link>'
    period = " - ".join(plain(entry[key]) for key in ("start", "end") if entry.get(key))
    row = Table([[para(title, "entry", True), para(period, "date")]], colWidths=[414, 126])
    row.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
    block = [row]
    if entry.get("organization"):
        block.append(para(entry["organization"], "small"))
    story.append(KeepTogether(block))
    bullets(story, values if values is not None else entry.get("bullets", []))
    story.append(Spacer(1, 4))

def header(story, profile, continued=False):
    content = data["portfolioProfiles"][profile]
    story.append(para(config["name"], "name"))
    story.append(para(content["title"] + (" | Continued" if continued else ""), "label"))
    links = (
        f'{text(config["location"])} | <link href="mailto:{config["social"]["email"]}" color="#075a9c">{text(config["social"]["email"])}</link><br/>'
        f'<link href="{config["url"]}{"academic/" if profile == "academic" else ""}" color="#075a9c">mhtcode.github.io{"/academic" if profile == "academic" else ""}</link>'
        f' | <link href="{config["social"]["github"]}" color="#075a9c">github.com/mhtcode</link>'
        f' | <link href="{config["social"]["linkedin"]}" color="#075a9c">LinkedIn</link>'
    )
    story.append(para(links, "small", True))

def skill_lines(story, slugs):
    for slug in slugs:
        skill = item("skills", slug)
        story.append(para(f'<b>{text(skill["title"])}:</b> {text(skill["description"])}', markup=True))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#d9e0e8"))
    canvas.line(36, 31, 576, 31)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(36, 19, "Masih Tanoursaz | mhtcode.github.io")
    canvas.drawRightString(576, 19, str(doc.page))
    canvas.restoreState()

def build(profile, story, filename):
    path = ROOT / "public" / filename
    doc = SimpleDocTemplate(str(path), pagesize=letter, leftMargin=36, rightMargin=36, topMargin=32, bottomMargin=42, title=f'Masih Tanoursaz - {data["portfolioProfiles"][profile]["title"]}', author=config["name"])
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(path)

engineering = []
header(engineering, "engineering")
heading(engineering, "Profile")
engineering.append(para(data["portfolioProfiles"]["engineering"]["summary"]))
heading(engineering, "Technical Skills")
skill_lines(engineering, ["cloud-and-delivery", "mlops", "observability", "networking", "programming-and-databases"])
heading(engineering, "Engineering Experience")
entry(engineering, item("experience", "cloud-devops-mlops-home-lab"))
entry(engineering, item("experience", "devops-intern"), item("experience", "devops-intern")["bullets"][:4])
heading(engineering, "Certifications")
for cert in sections["certifications"]["items"]:
    engineering.append(para(f'<link href="{cert["link"]}" color="#075a9c"><b>{text(cert["title"])}</b></link> | {text(cert["start"])}', markup=True))
engineering.append(PageBreak())
header(engineering, "engineering", True)
heading(engineering, "Selected Projects")
for slug, selected in [
    ("manisa", [0, 1, 2]),
    ("local-ai-inference", [0, 2]),
    ("career", [1, 2]),
    ("duocardsdict", [0, 1, 2]),
    ("dockerized-secrets-service", [0, 2]),
]:
    project = item("projects", slug)
    entry(engineering, project, [project["bullets"][index] for index in selected])
heading(engineering, "Education & Teaching")
education = item("education", "computer-engineering")
entry(engineering, education, ["GPA: 89/100. Coursework in networks, operating systems, databases, software engineering, and IT project management."])
ta = item("teaching-assistant", "computer-engineering-ta")
entry(engineering, ta, ["Supported networking, IT management, technical presentation, and embedded-systems courses; guided Cisco labs and reviewed student assignments and projects."])
build("engineering", engineering, "Masih_Tanoursaz_Resume_DevOps.pdf")

academic = []
header(academic, "academic")
heading(academic, "Research Profile")
academic.append(para(data["portfolioProfiles"]["academic"]["summary"]))
heading(academic, "Research Interests")
academic.append(para("Cloud and edge computing; resource allocation and scheduling; sustainable data centers; reinforcement learning and LLM agents for infrastructure control; applied AI and data-driven decision support."))
heading(academic, "Education")
entry(academic, education, ["GPA: 89/100.", "Bachelor's final project: evaluating LLM-based and reinforcement learning agents for sustainable data center optimization.", "Relevant study: networks, operating systems, databases, artificial intelligence, software engineering, and IT project management."])
heading(academic, "Research Experience")
entry(academic, item("research", "sustainable-data-center-agents"))
academic.append(para("Research output: undergraduate project and report.", "small"))
heading(academic, "Research & Technical Skills")
skill_lines(academic, ["ai-research", "programming-and-databases", "data-and-analytics", "cloud-and-delivery"])
academic.append(PageBreak())
header(academic, "academic", True)
heading(academic, "Teaching Experience")
entry(academic, ta, [
    "Supported IT Project Management, Fundamentals of IT, Computer Networks, Network Laboratory, Scientific and Technical Presentation, Microprocessor, and Digital Systems Design Laboratory.",
    "Head Teaching Assistant for Scientific and Technical Presentation: coordinated course workflows and reviewed technical documents and presentations.",
    "Guided Cisco networking labs covering VLANs, routing, switching, connectivity testing, and troubleshooting.",
    "Supported project planning, documentation, scheduling and risk analysis; assisted AVR ATmega32 and Proteus exercises, grading, mentoring, and student project evaluation.",
])
heading(academic, "Selected Technical Projects")
warehouse = item("projects", "flight-reservation-data-warehouse")
entry(academic, warehouse, [warehouse["bullets"][0], warehouse["bullets"][2]])
inference = item("projects", "local-ai-inference")
entry(academic, inference, [inference["bullets"][0], inference["bullets"][2]])
heading(academic, "Industry & Product Experience")
entry(academic, item("experience", "devops-intern"), ["Developed and tested containerized Go services; worked with HashiCorp Vault, MOSN, Linux, and service-to-service communication in the Sadra Cloud R&D team."])
entry(academic, item("experience", "med-x-product-innovation"), ["Co-developed an early-stage digital health concept addressing antibiotic resistance; contributed user and market analysis, value-proposition and business-model work, and a final pitch to judges and mentors."])
heading(academic, "Academic Service & Leadership")
for slug, description in [
    ("iut-cessa", "Public relations, outreach, and sponsorship coordination for university technical events."),
    ("sisoog-registration", "Managed registration and check-in for 870+ participants."),
    ("apachee-club", "Coordinated cybersecurity events and CTF activities; secured 35+ million Tomans in sponsorship."),
    ("aicup", "Led branding and promotion and built a Telegram bot for event messages."),
    ("iut-acm", "Supported promotion of a programming competition with 300+ participants."),
]:
    service = item("community", slug)
    period = " - ".join(service[key] for key in ("start", "end") if service.get(key))
    academic.append(para(f'<b>{text(service["title"])} ({text(period)}):</b> {text(description)}', markup=True))
academic.append(para("Languages: Persian and English.", "small"))
build("academic", academic, "Masih_Tanoursaz_Academic_CV.pdf")
