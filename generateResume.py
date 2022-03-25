import os

abspath = os.path.abspath(__file__)
rootdname = os.path.dirname(abspath)
publicdname = os.path.join(rootdname, "public")

os.chdir(publicdname)
os.system("pdflatex resume.tex")
os.system("inkscape --export-type=\"svg\" --pdf-poppler resume.pdf")
os.chdir(rootdname)