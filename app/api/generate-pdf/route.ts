import { NextResponse } from 'next/server';
import { CVData } from '@/types/cv';
import PDFDocument from 'pdfkit';

export async function POST(request: Request) {
  try {
    const data: CVData = await request.json();
    
    // Create a PDF document
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    // Collect PDF data chunks
    doc.on('data', (chunk: any) => chunks.push(chunk));
    
    // Header
    doc.fontSize(24).text(data.name, { align: 'center' });
    doc.fontSize(16).text(data.title, { align: 'center' });
    doc.moveDown();
    
    // Contact Information
    doc.fontSize(12).text('Contact Information:', { underline: true });
    doc.text(`Email: ${data.contact.email}`);
    doc.text(`Phone: ${data.contact.phone}`);
    doc.text(`Location: ${data.contact.location}`);
    doc.text(`LinkedIn: ${data.contact.linkedin}`);
    doc.text(`GitHub: ${data.contact.github}`);
    doc.moveDown();
    
    // Summary
    doc.fontSize(12).text('Professional Summary:', { underline: true });
    doc.text(data.summary);
    doc.moveDown();
    
    // Experience
    doc.fontSize(12).text('Professional Experience:', { underline: true });
    data.experience.forEach(exp => {
      doc.text(`${exp.position} at ${exp.company}`);
      doc.fontSize(10).text(exp.period);
      exp.description.forEach(desc => {
        doc.text(`• ${desc}`);
      });
      doc.moveDown();
    });
    
    // Education
    doc.fontSize(12).text('Education:', { underline: true });
    data.education.forEach(edu => {
      doc.text(edu.institution);
      doc.text(edu.degree);
      doc.fontSize(10).text(edu.period);
      doc.text(edu.description);
      doc.moveDown();
    });
    
    // Skills
    doc.fontSize(12).text('Skills:', { underline: true });
    data.skills.forEach(skill => {
      doc.text(`${skill.category}:`);
      doc.text(skill.items.join(', '));
      doc.moveDown();
    });
    
    // End the document
    doc.end();
    
    // Combine chunks into a single buffer
    const pdfBuffer = Buffer.concat(chunks);
    
    // Return the PDF as a response
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}