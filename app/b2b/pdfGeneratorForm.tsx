'use client';
import { jsPDF } from 'jspdf';
import { useState } from 'react';
import Amazon from '../../public/images/amazon.png';
import Logo from '../../public/images/bench-my-salary-logo.png';
import Junior from '../../public/images/juniorFullStackIndustryGraph.png';
import Lead from '../../public/images/LeadFullStackIndustyGRaph.png';
import MidLevel from '../../public/images/MidLevelFullStackIndustryGRaph.png';
import Principal from '../../public/images/PrincipalFullStackIndustryGraph.png';
import Senior from '../../public/images/SeniorFullStackIndustryGRaph.png';

export default function PDForm() {
  const handlePDF = async () => {
    const doc = new jsPDF('p', 'pt', 'a4', false);

    // Constants for layout
    const margin = 40;
    let yPosition = margin;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Add the logo
    doc.addImage(Logo.src, 'PNG', margin, yPosition, 75, 50);

    // Move down past the logo
    yPosition += 120;

    // Set font size for title
    doc.setFontSize(30);

    // Add multi-line title using text options
    const title = 'The Developer Benchmark\nby Bench My Salary';
    doc.text(title, margin, yPosition, {
      maxWidth: pageWidth - margin * 2,
      align: 'left',
      lineHeightFactor: 1.5,
    });

    // Calculate height of text to know where to put next element
    const titleLines = doc.splitTextToSize(title, pageWidth - margin * 2);
    const lineHeight = doc.getFontSize() * 1.5;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const textHeight = titleLines.length * lineHeight;

    // Move down past the text
    yPosition += textHeight + 50;

    // Add Junior image
    doc.addImage(Junior.src, 'PNG', margin, yPosition, 550, 275);
    yPosition += 300; // Move down after adding the image

    // Check if there's enough space for the next image, otherwise add a new page
    if (yPosition + 275 > pageHeight - margin) {
      doc.addPage(); // Add a new page
      yPosition = margin; // Reset yPosition for new page
    }

    // Add MidLevel image on the new page
    doc.addImage(MidLevel.src, 'PNG', margin, yPosition, 550, 275);
    doc.addImage(Senior.src, 'PNG', margin, yPosition + 400, 550, 275);

    doc.addPage(); // Add a new page
    yPosition = margin; // Reset yPosition for new page

    // Add MidLevel image on the new page
    doc.addImage(Principal.src, 'PNG', margin, yPosition, 550, 275);
    doc.addImage(Lead.src, 'PNG', margin, yPosition + 400, 550, 275);

    // Save the document
    await doc.save('mypdf.pdf');
  };
  return (
    <button className="pdf-btn" onClick={handlePDF}>
      Generate PDF
    </button>
  );
}
