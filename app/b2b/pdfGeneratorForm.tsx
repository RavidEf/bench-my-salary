'use client';
import { jsPDF } from 'jspdf';
import { useState } from 'react';
import Amazon from '../../public/images/amazon.png';
import Logo from '../../public/images/bench-my-salary-logo.png';
import Junior from '../../public/images/juniorFullStackIndustryGraph.png';
import MidLevel from '../../public/images/MidLevelFullStackIndustryGRaph.png';

export default async function PDForm({ juniorSDFood }) {
  const [seniorityReport, setSeniorityReport] = useState([]);
  // create the array that will hold the seniority vars

  const seniorityArray = [juniorSDFood];

  const handlePDF = async () => {
    const doc = new jsPDF('p', 'pt', 'a4', false);
    // Constants for layout
    const margin = 40;
    let yPosition = margin;
    const pageWidth = doc.internal.pageSize.getWidth();

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
    const textHeight = titleLines.length * lineHeight;

    // Move down past the text
    yPosition += textHeight + 50;

    // Add Amazon logo
    doc.addImage(Junior.src, 'PNG', margin, yPosition, 550, 275);
    doc.addImage(MidLevel.src, 'PNG', margin, yPosition, 550, 275);

    await doc.save('mypdf.pdf');
  };
  return <button onClick={handlePDF}>Generate PDF</button>;
}
