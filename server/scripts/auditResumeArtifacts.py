import os
import sys
import re
import zipfile
import xml.etree.ElementTree as ET

try:
    import pypdf
except ImportError:
    print("Error: pypdf is required. Install via pip install pypdf")
    sys.exit(1)

# Set UTF-8 output encoding for Windows terminals
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Sourced portably via repository-relative paths
script_dir = os.path.dirname(os.path.abspath(__file__))
repo_root = os.path.abspath(os.path.join(script_dir, '..', '..'))
pdf_path = os.path.join(repo_root, 'server', 'public', 'resumes', 'madhav-garg-resume.pdf')
docx_path = os.path.join(repo_root, 'server', 'public', 'resumes', 'madhav-garg-resume.docx')

print("====================================================")
print("   PORTABLE RESUME ARTIFACTS AUDIT (PDF & DOCX)")
print("====================================================")
print(f"Repository Root: {repo_root}")
print(f"PDF Path:        {pdf_path}")
print(f"DOCX Path:       {docx_path}\n")

failed_checks = 0
passed_checks = 0

def record_pass(desc):
    global passed_checks
    print(f"[PASS] {desc}")
    passed_checks += 1

def record_fail(desc, reason):
    global failed_checks
    print(f"[FAIL] {desc} -> {reason}")
    failed_checks += 1

# ==========================================================
# 1. PDF STRUCTURAL & TEXT PARSING
# ==========================================================
print("--- 1. PDF Structural & Parsing Checks ---")
if not os.path.exists(pdf_path):
    record_fail("PDF existence check", f"File not found at {pdf_path}")
    sys.exit(1)

reader = pypdf.PdfReader(pdf_path)
page_count = len(reader.pages)
if page_count == 2:
    record_pass(f"PDF contains exactly 2 pages (actual: {page_count})")
else:
    record_fail("PDF page count check", f"Expected 2 pages, found {page_count}")

pdf_text_per_page = []
full_pdf_text = ""
for i, page in enumerate(reader.pages):
    t = page.extract_text() or ""
    pdf_text_per_page.append(t)
    full_pdf_text += f"\n=== PAGE {i+1} ===\n" + t

# Extract PDF Links
pdf_links = []
for page in reader.pages:
    if "/Annots" in page:
        for annot in page["/Annots"]:
            obj = annot.get_object()
            if obj.get("/Subtype") == "/Link" and "/A" in obj and "/URI" in obj["/A"]:
                pdf_links.append(obj["/A"]["/URI"])

record_pass(f"PDF links parsed successfully ({len(pdf_links)} total links found)")

# ==========================================================
# 2. DOCX OPENXML STRUCTURAL & TEXT PARSING
# ==========================================================
print("\n--- 2. DOCX OpenXML Structural & Parsing Checks ---")
if not os.path.exists(docx_path):
    record_fail("DOCX existence check", f"File not found at {docx_path}")
    sys.exit(1)

# Check Magic Bytes
with open(docx_path, 'rb') as f:
    magic = f.read(4)
    if magic == b'PK\x03\x04':
        record_pass("DOCX magic bytes verified (PK\\x03\\x04 - Valid ZIP container)")
    else:
        record_fail("DOCX magic bytes check", f"Invalid magic bytes: {magic.hex()}")

with zipfile.ZipFile(docx_path, 'r') as z:
    file_list = z.namelist()
    core_parts = [
        '[Content_Types].xml',
        '_rels/.rels',
        'word/document.xml',
        'word/styles.xml',
        'word/numbering.xml',
        'word/_rels/document.xml.rels'
    ]
    all_parts_present = True
    for part in core_parts:
        if part in file_list:
            record_pass(f"DOCX contains OPC part: {part}")
        else:
            record_fail(f"DOCX missing part: {part}", "Not found in ZIP directory")
            all_parts_present = False

    # Extract text runs from word/document.xml
    xml_content = z.read('word/document.xml').decode('utf-8')
    tree = ET.fromstring(xml_content)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    texts = [node.text for node in tree.iterfind('.//w:t', namespaces) if node.text]
    full_docx_text = ' '.join(texts)

    # Extract hyperlinks from word/_rels/document.xml.rels
    rels_xml = z.read('word/_rels/document.xml.rels').decode('utf-8')
    rels_tree = ET.fromstring(rels_xml)
    docx_hyperlinks = [r.attrib.get('Target') for r in rels_tree if r.attrib.get('Target') and r.attrib.get('Target').startswith(('http', 'mailto'))]

record_pass(f"DOCX extracted text length: {len(full_docx_text)} chars")
record_pass(f"DOCX external hyperlinks: {len(docx_hyperlinks)} links found")

# ==========================================================
# 3. FACTUAL VERIFICATION MATRIX
# ==========================================================
print("\n--- 3. Factual Verification Across PDF & DOCX ---")

# Normalize text helper for robust comparison across dash styles
def normalize(text):
    return re.sub(r'[\u2013\u2014\-]+', '-', text.lower())

normalized_pdf = normalize(full_pdf_text)
normalized_docx = normalize(full_docx_text)

facts = [
    # (Label, Search Phrases, Required)
    ("Candidate Identity", ["Madhav Garg"], True),
    ("University Affiliation", ["JK Lakshmipat University"], True),
    ("Academic Degree", ["Bachelor of Technology in Computer Science and Engineering", "B.Tech in Computer Science and Engineering"], True),
    ("Academic CGPA", ["8.6 / 10.0", "8.6"], True),
    ("Expected Graduation", ["2028 (Expected)", "Expected 2028", "2028"], True),
    ("Public Email", ["madhavgarg.agra@gmail.com"], True),
    ("LinkedIn Link", ["linkedin.com/in/madhav-garg-agra"], True),
    ("GitHub Profile Link", ["github.com/madhavgargagra"], True),
    ("Infosys Internship Title", ["Full-Stack Developer Intern"], True),
    ("Infosys Private Project Status", ["Confidential", "private", "access restricted"], True),
    ("Infosys Certificate Status", ["Certificate awaited"], True),
    ("India Space Academy Title", ["Remote Sensing & GIS Intern"], True),
    ("India Space Academy Dates", ["19 May 2026 - 2 July 2026", "19 May 2026 — 2 July 2026"], True),
    ("EcoSort Project Title", ["EcoSort — Waste Sorting & Environmental Learning Platform", "EcoSort - Waste Sorting & Environmental Learning Platform"], True),
    ("EcoSort Technologies", ["TensorFlow.js", "MobileNet v2", "PWA"], True),
    ("EcoSort Live Demo Link", ["madhavgargagra.github.io/ecosort"], True),
    ("Lung Cancer Prediction Title", ["Lung Cancer Prediction & Web Application"], True),
    ("Lung Cancer Tech Stack", ["Flask", "XGBoost", "Scikit-learn", "Logistic Regression"], True),
    ("Lung Cancer Non-Clinical Disclaimer", ["not clinically validated", "educational machine-learning project"], True),
    ("Insider Threat Detection Title", ["AI-Powered Insider Threat Detection System"], True),
    ("Festival Event Management Title", ["Festival Event Management System"], True),
    ("Festival Event Management Stack", ["React", "Express.js", "MySQL", "Sequelize ORM"], True),
    ("Festival Event Public GitHub Repo", ["github.com/madhavgargagra/festival-event-management"], True),
    ("Drama Club Leadership", ["Chair, Student Drama Club", "25+ members"], True),
    ("Cultural Accolade (Sabrang)", ["Second Position in Nukkad Natak", "Nukkad Natak (Street Play)"], True),
    ("Athletic Accolade", ["Runner-up in University Football", "Football Championship"], True),
    ("Red Hat RH124 Attendance Status", ["Certificate of Attendance"], True),
    ("Red Hat RH124 Credly Badge", ["d1dba5c4-2c37-467d-9f71-8638217ee398"], True),
]

for label, phrases, required in facts:
    # Check in visible body text OR in hyperlink targets (since PDF/Word links have anchor text like [Live Demo] with target URI in annotations)
    pdf_text_match = any(normalize(p) in normalized_pdf for p in phrases)
    pdf_link_match = any(any(normalize(p) in normalize(l) for p in phrases) for l in pdf_links)
    pdf_match = pdf_text_match or pdf_link_match

    docx_text_match = any(normalize(p) in normalized_docx for p in phrases)
    docx_link_match = any(any(normalize(p) in normalize(l) for p in phrases) for l in docx_hyperlinks)
    docx_match = docx_text_match or docx_link_match

    if pdf_match and docx_match:
        context = " (via hyperlink annotation)" if (pdf_link_match and not pdf_text_match) else ""
        record_pass(f"{label} verified in both PDF and DOCX{context}")
    else:
        # Check formatting/wording detail
        details = []
        if not pdf_match:
            details.append(f"PDF missing phrases: {phrases}")
        if not docx_match:
            details.append(f"DOCX missing phrases: {phrases}")
        record_fail(f"{label} verification", " | ".join(details))

# ==========================================================
# 4. PROHIBITED CONTENT CHECKS
# ==========================================================
print("\n--- 4. Prohibited Content Audits ---")

prohibited_patterns = [
    (r"\b\d{3}[-.\s]??\d{3}[-.\s]??\d{4}\b", "10-Digit Phone Number Pattern (e.g., 555-123-4567)"),
    (r"\+91[-.\s]??\d{5}[-.\s]??\d{5}\b", "Indian +91 Mobile Number Pattern"),
    (r"\b\d{10}\b", "Raw 10-Digit Integer (potential phone/ID)"),
    (r"Software Engineer Intern", "Outdated / Unapproved 'Software Engineer Intern' title"),
    (r"Space Systems Intern", "Outdated / Unapproved 'Space Systems Intern' title"),
    (r"Winner.*Nukkad", "Unapproved 'Winner' claim for Nukkad Natak"),
    (r"attendee tracking", "Unverified 'attendee tracking' claim"),
    (r"budget logging", "Unverified 'budget logging' claim"),
    (r"github\.com[^\s]+insider", "Private repository URL exposure for Insider Threat"),
]

for pattern, desc in prohibited_patterns:
    pdf_hits = re.findall(pattern, full_pdf_text, re.IGNORECASE)
    docx_hits = re.findall(pattern, full_docx_text, re.IGNORECASE)

    # Filter false positives: 10-digit dates or legit timestamps if any
    filtered_pdf_hits = [h for h in pdf_hits if not h.startswith('202') and not h.startswith('201')]
    filtered_docx_hits = [h for h in docx_hits if not h.startswith('202') and not h.startswith('201')]

    if len(filtered_pdf_hits) == 0 and len(filtered_docx_hits) == 0:
        record_pass(f"Zero prohibited content found for: {desc}")
    else:
        record_fail(
            f"Prohibited content check: {desc}",
            f"PDF hits: {filtered_pdf_hits}, DOCX hits: {filtered_docx_hits}"
        )

# ==========================================================
# 5. AUDIT SUMMARY
# ==========================================================
total_checks = passed_checks + failed_checks
print("\n====================================================")
print(f"AUDIT SUMMARY: {total_checks} CHECKS RUN | {passed_checks} PASSED | {failed_checks} FAILED")
print("====================================================")

if failed_checks > 0:
    sys.exit(1)
else:
    print("ALL ARTIFACT CHECKS PASSED WITH ZERO DISCREPANCIES.")
    sys.exit(0)
