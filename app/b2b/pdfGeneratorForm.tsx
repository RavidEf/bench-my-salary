'use client';
import { jsPDF } from 'jspdf';
import Logo from '../../public/images/bench-my-salary-logo.png';
import Junior from '../../public/images/juniorFullStackIndustryGraph.png';
import Lead from '../../public/images/LeadFullStackIndustyGRaph.png';
import MidLevel from '../../public/images/MidLevelFullStackIndustryGRaph.png';
import Principal from '../../public/images/PrincipalFullStackIndustryGraph.png';
import Senior from '../../public/images/SeniorFullStackIndustryGRaph.png';

export default function PDForm() {
  const handlePDF = async () => {
    const doc = new jsPDF('p', 'pt', 'a4');
    const margin = 40;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = margin;

    // Add the logo
    doc.addImage(Logo.src, 'PNG', margin, yPosition, 75, 50);
    yPosition += 80; // Add spacing below the logo

    // Add the title
    doc.setFontSize(24); // Title font size
    const title = 'The Developer Benchmark\nby Bench My Salary';
    const titleLines: string = doc.splitTextToSize(
      title,
      pageWidth - margin * 2,
    );
    const titleHeight = titleLines.length * (24 * 1.5); // Title line height
    doc.text(titleLines, margin, yPosition, {
      maxWidth: pageWidth - margin * 2,
    });
    yPosition += titleHeight + 20; // Add spacing below the title

    // Add the introduction
    doc.setFontSize(12); // Font size for introduction text
    const introduction =
      "This report provides a comprehensive analysis of salary trends within the software development industry, segmented by seniority levels ranging from Junior to Lead positions. By presenting detailed breakdowns of salaries across various industries, it offers valuable insights to help HR professionals make informed decisions. Designed for HR recruiters and managers, this report serves as a reliable resource to evaluate market benchmarks and set competitive salary ranges for employees. Whether you're hiring top talent or ensuring your current workforce is compensated equitably, this data will help align your organization with industry standards while fostering employee satisfaction and retention.";
    const introLines: string = doc.splitTextToSize(
      introduction,
      pageWidth - margin * 2,
    );
    const introHeight = introLines.length * (12 * 1.5); // Intro line height
    doc.text(introLines, margin, yPosition, {
      maxWidth: pageWidth - margin * 2,
    });
    yPosition += introHeight + 20; // Add spacing below the introduction

    // Helper function to add images with page checks
    const addImageWithCheck = (imageSrc: string, imageHeight = 275) => {
      if (yPosition + imageHeight > pageHeight - margin) {
        doc.addPage(); // Add a new page if there's not enough space
        yPosition = margin; // Reset yPosition for the new page
      }
      doc.addImage(
        imageSrc,
        'PNG',
        margin,
        yPosition,
        pageWidth - margin * 2,
        imageHeight,
      );
      yPosition += imageHeight + 20; // Update yPosition after adding the image
    };

    // Add images in sequence
    addImageWithCheck(Junior.src, 275); // Add Junior image
    addImageWithCheck(MidLevel.src, 275); // Add MidLevel image
    addImageWithCheck(Senior.src, 275); // Add Senior image
    addImageWithCheck(Principal.src, 275); // Add Principal image
    addImageWithCheck(Lead.src, 275); // Add Lead image

    // Save the PDF
    await doc.save('Developer_Benchmark_Report.pdf');
  };

  return (
    <div className="pdf-div">
      <button className="pdf-btn" onClick={handlePDF}>
        Download Report
      </button>
    </div>
  );
}
