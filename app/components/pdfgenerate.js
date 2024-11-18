import { jsPDF } from 'jspdf';

export function GeneratePDF() {
  const handlePDF = async () => {
    const doc = new jsPDF('p', 'pt', 'a4', false);
    // do whatever you want in your pdf and finally save your pdf
    await doc.save('mypdf.pdf');
  };

  return <button onClick={handlePDF}>Generate PDF</button>;
}
