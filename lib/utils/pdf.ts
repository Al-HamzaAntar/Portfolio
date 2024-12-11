import { jsPDF } from 'jspdf';
import { CVData } from '../../types/cv';

export async function generatePDF(data: CVData): Promise<Blob> {
  const doc = new jsPDF();
  
  // Set initial position
  let y = 20;
  const margin = 20;
  const lineHeight = 7;
  
  // Helper function to add text and manage page breaks
  const addText = (text: string, fontSize: number = 12, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    
    doc.text(text, margin, y);
    y += lineHeight;
  };
  
  // Header
  addText(data.name, 24, true);
  addText(data.title, 16);
  y += lineHeight;
  
  // Contact Information
  addText('Contact Information', 14, true);
  addText(`Email: ${data.contact.email}`);
  addText(`Phone: ${data.contact.phone}`);
  addText(`Location: ${data.contact.location}`);
  addText(`LinkedIn: ${data.contact.linkedin}`);
  addText(`GitHub: ${data.contact.github}`);
  y += lineHeight;
  
  // Summary
  addText('Professional Summary', 14, true);
  const summaryLines = doc.splitTextToSize(data.summary, 170);
  summaryLines.forEach((line: string) => addText(line));
  y += lineHeight;
  
  // Experience
  addText('Professional Experience', 14, true);
  data.experience.forEach(exp => {
    addText(`${exp.position} at ${exp.company}`, 12, true);
    addText(exp.period);
    exp.description.forEach(desc => {
      const bulletPoints = doc.splitTextToSize(`• ${desc}`, 160);
      bulletPoints.forEach((line: string) => addText(line));
    });
    y += lineHeight/2;
  });
  
  // Education
  addText('Education', 14, true);
  data.education.forEach(edu => {
    addText(edu.institution, 12, true);
    addText(edu.degree);
    addText(edu.period);
    addText(edu.description);
    y += lineHeight/2;
  });
  
  // Skills
  addText('Skills', 14, true);
  data.skills.forEach(skill => {
    addText(`${skill.category}:`, 12, true);
    const skillText = doc.splitTextToSize(skill.items.join(', '), 160);
    skillText.forEach((line: string) => addText(line));
    y += lineHeight/2;
  });
  
  return doc.output('blob');
}