from PyPDF2 import PdfReader
import sys

pdf_path = '/Users/roger/Desktop/my-website/frontend/public/Qiushi_Dai_resume.pdf'

reader = PdfReader(pdf_path)
text = []
for p in reader.pages:
    try:
        text.append(p.extract_text() or '')
    except Exception as e:
        text.append('')

full = '\n\n'.join(text)
# Print to stdout for the caller to capture
print(full)
