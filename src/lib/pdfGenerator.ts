import jsPDF from 'jspdf';

export const generatePDF = (contractText: string, contractTitle: string): void => {
  const doc = new jsPDF();
  
  // Set font to support Portuguese characters
  doc.setFont("helvetica", "normal");
  
  // Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(contractTitle.toUpperCase(), 20, 20);
  
  // Content
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  
  // Split text into lines that fit the page width
  const splitText = doc.splitTextToSize(contractText, 170);
  doc.text(splitText, 20, 35);
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text(`Página ${i} de ${pageCount}`, 20, 285);
    doc.text('Documento gerado automaticamente - Confira todos os dados antes de assinar', 20, 290);
  }
  
  // Generate filename with current date
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `${contractTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;
  
  // Download the PDF
  doc.save(filename);
};