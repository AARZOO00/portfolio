import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume():
    output_path = os.path.join(os.getcwd(), "public", "resume.pdf")
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=40,
        rightMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.HexColor('#111827'),
        alignment=TA_CENTER
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor('#D97706'),
        alignment=TA_CENTER
    )
    
    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#4B5563'),
        alignment=TA_CENTER
    )
    
    section_title = ParagraphStyle(
        'SectionTitle',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#1F2937'),
        spaceAfter=4
    )
    
    item_header = ParagraphStyle(
        'ItemHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#111827')
    )
    
    item_sub = ParagraphStyle(
        'ItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#6B7280')
    )
    
    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#374151')
    )

    story = []

    # Header
    story.append(Paragraph("AARZOO", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Software Developer | AI/ML Enthusiast | Full-Stack Developer", subtitle_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Email: rmishra.connect@gmail.com &nbsp;|&nbsp; LinkedIn: linkedin.com/in/aarzoo00 &nbsp;|&nbsp; GitHub: github.com/AARZOO00", contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=colors.HexColor('#F59E0B'), spaceBefore=2, spaceAfter=10))

    # Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_title))
    story.append(Paragraph("Computer Science graduate with a B.Tech degree (CGPA: 8.47/10, expected May 2026). Passionate about developing full-stack web applications and exploring Artificial Intelligence, Machine Learning, and Natural Language Processing. Dedicated to building efficient, user-centric software solutions that solve real-world problems.", body_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E5E7EB'), spaceBefore=2, spaceAfter=8))

    # Education
    story.append(Paragraph("EDUCATION", section_title))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Technology (B.Tech) in Computer Science & Engineering</b>", item_header),
            Paragraph("<b>Expected: May 2026</b>", ParagraphStyle('RightText', parent=item_header, alignment=TA_RIGHT))
        ],
        [
            Paragraph("<i>[College / University Name - Add Institution]</i>", item_sub),
            Paragraph("<b>CGPA: 8.47 / 10.0</b>", ParagraphStyle('RightSub', parent=body_style, alignment=TA_RIGHT))
        ]
    ]
    t_edu = Table(edu_data, colWidths=[380, 150])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E5E7EB'), spaceBefore=2, spaceAfter=8))

    # Technical Skills
    story.append(Paragraph("TECHNICAL SKILLS", section_title))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", body_style), Paragraph("Python, JavaScript, SQL", body_style)],
        [Paragraph("<b>Frontend Development:</b>", body_style), Paragraph("React.js, HTML5, CSS3, Modern UI/UX", body_style)],
        [Paragraph("<b>Backend & APIs:</b>", body_style), Paragraph("Node.js, FastAPI, RESTful APIs", body_style)],
        [Paragraph("<b>AI, ML & NLP:</b>", body_style), Paragraph("Natural Language Processing, VADER, TextBlob, Transformer Models, OpenRouter API", body_style)],
        [Paragraph("<b>Tools & Platforms:</b>", body_style), Paragraph("Git, GitHub, Render, Vercel, VS Code", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[140, 390])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor('#E5E7EB'), spaceBefore=2, spaceAfter=8))

    # Projects
    story.append(Paragraph("KEY PROJECTS", section_title))
    
    projects = [
        (
            "WhatsApp Chat Sentiment Analyzer",
            "Python, FastAPI, React, NLP, VADER, Transformer Models",
            "github.com/AARZOO00/whatsapp-sentiment-analyzer",
            "• Built an end-to-end NLP application analyzing exported WhatsApp chats to extract message-level sentiment and emotional valence.<br/>• Integrated VADER and Transformer-based models for emotional trend visualization and interactive reporting."
        ),
        (
            "AI Counsellor",
            "React, Node.js, REST APIs, OpenRouter API",
            "Frontend: ai-counsellor-pink.vercel.app | Backend: ai-counsellor-vosd.onrender.com",
            "• Engineered a conversational full-stack AI guidance platform providing contextual academic and university advisory assistance.<br/>• Integrated OpenRouter LLM endpoints with responsive chat interfaces and reliable RESTful service endpoints."
        ),
        (
            "MH Resilience Pro – Mental Health Resilience Dashboard",
            "React.js, JavaScript, AI/ML APIs, Data Visualization, Vercel",
            "Deployed on Vercel",
            "• Designed an interactive analytical dashboard assessing mental health resilience factors using social determinants of health.<br/>• Created comprehensive visual data insights and dynamic exploratory resilience indicators."
        ),
        (
            "Real-Time Voice Translator",
            "Python, FastAPI, SpeechRecognition, Deep Translator, gTTS",
            "github.com/AARZOO00/real-time-voice-translator",
            "• Implemented a voice translation pipeline featuring low-latency speech recognition, multi-language translation, and speech synthesis.<br/>• Developed a modular FastAPI backend delivering synchronized audio processing."
        )
    ]

    for title, tech, link, bullets in projects:
        p_table = [
            [
                Paragraph(f"<b>{title}</b> | <font color='#D97706'><i>{tech}</i></font>", item_header),
                Paragraph(f"<font color='#4B5563' size=8>{link}</font>", ParagraphStyle('PRight', parent=body_style, alignment=TA_RIGHT))
            ]
        ]
        t = Table(p_table, colWidths=[360, 170])
        t.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'TOP'),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 1),
        ]))
        story.append(t)
        story.append(Paragraph(bullets, body_style))
        story.append(Spacer(1, 5))

    doc.build(story)
    print("Resume PDF successfully generated at:", output_path)

if __name__ == '__main__':
    create_resume()
