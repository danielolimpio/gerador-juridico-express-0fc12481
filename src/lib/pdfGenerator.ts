import jsPDF from 'jspdf';

export const generatePDF = (contractText: string, contractTitle: string): void => {
  const doc = new jsPDF();
  
  // Constants for layout
  const pageHeight = 280; // Usable page height (considering margins)
  const pageWidth = 170; // Usable page width
  const marginTop = 20;
  const marginLeft = 20;
  const lineHeight = 7;
  const footerHeight = 40; // Space reserved for footer
  
  let currentY = marginTop;
  let currentPage = 1;
  
  // Set font to support Portuguese characters
  doc.setFont("helvetica", "normal");
  
  // Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(contractTitle.toUpperCase(), marginLeft, currentY);
  currentY += 20;
  
  // Process contract text line by line
  const lines = contractText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '') {
      // Empty line - add space
      currentY += lineHeight;
      continue;
    }
    
    // Check if line is a title or subtitle (ALL CAPS or ends with :)
    const isTitle = line === line.toUpperCase() && line.length > 3 && !line.includes('€') && !line.includes('R$');
    const isSubtitle = line.endsWith(':') && line.length < 100;
    
    if (isTitle || isSubtitle) {
      // Add extra space before titles
      currentY += lineHeight;
      
      // Check if we need a new page
      if (currentY + lineHeight * 2 > pageHeight - footerHeight) {
        doc.addPage();
        currentPage++;
        currentY = marginTop;
      }
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(isTitle ? 14 : 12);
    } else {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
    }
    
    // Split long lines
    const splitLines = doc.splitTextToSize(line, pageWidth);
    
    for (let j = 0; j < splitLines.length; j++) {
      // Check if we need a new page
      if (currentY + lineHeight > pageHeight - footerHeight) {
        doc.addPage();
        currentPage++;
        currentY = marginTop;
      }
      
      doc.text(splitLines[j], marginLeft, currentY);
      currentY += lineHeight;
    }
    
    // Add extra space after titles
    if (isTitle || isSubtitle) {
      currentY += lineHeight / 2;
    }
  }
  
  // Add footer to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Page number
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Página ${i} de ${totalPages}`, marginLeft, 285);
    
    // Signature line
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    const footerText = 'Documento gerado automaticamente por https://modelosdecontratos.com.br - Confira todos os dados antes de assinar';
    const footerLines = doc.splitTextToSize(footerText, pageWidth);
    
    let footerY = 290;
    for (let line of footerLines) {
      doc.text(line, marginLeft, footerY);
      footerY += 4;
    }
  }
  
  // Generate filename with current date
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `${contractTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.pdf`;
  
  // Download the PDF
  doc.save(filename);
};