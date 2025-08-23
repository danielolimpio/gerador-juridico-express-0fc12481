import { Document, Packer, Paragraph, TextRun, PageBreak } from 'docx';

export const generateWord = async (contractText: string, contractTitle: string): Promise<void> => {
  const paragraphs: Paragraph[] = [];
  
  // Title
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: contractTitle.toUpperCase(),
          bold: true,
          size: 32,
        }),
      ],
      spacing: {
        after: 400,
      },
    })
  );
  
  // Process contract text line by line
  const lines = contractText.split('\n');
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '') {
      // Empty line - add space
      paragraphs.push(
        new Paragraph({
          children: [new TextRun({ text: '' })],
          spacing: { after: 200 },
        })
      );
      continue;
    }
    
    // Check if line is a title or subtitle
    const isTitle = line === line.toUpperCase() && line.length > 3 && !line.includes('€') && !line.includes('R$');
    const isSubtitle = line.endsWith(':') && line.length < 100;
    
    if (isTitle) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              bold: true,
              size: 28,
            }),
          ],
          spacing: {
            before: 400,
            after: 300,
          },
        })
      );
    } else if (isSubtitle) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              bold: true,
              size: 26,
            }),
          ],
          spacing: {
            before: 300,
            after: 200,
          },
        })
      );
    } else {
      // Regular paragraph
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              size: 24,
            }),
          ],
          spacing: {
            line: 360,
            after: 120,
          },
        })
      );
    }
  }
  
  // Add spacing before footer
  paragraphs.push(
    new Paragraph({
      children: [new TextRun({ text: '' })],
      spacing: { before: 600, after: 200 },
    })
  );
  
  // Footer signature
  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "Documento gerado automaticamente por https://modelosdecontratos.com.br - Confira todos os dados antes de assinar",
          italics: true,
          size: 20,
        }),
      ],
      spacing: {
        before: 400,
      },
    })
  );
  
  const doc = new Document({
    sections: [{
      properties: {},
      children: paragraphs,
    }],
  });

  try {
    const blob = await Packer.toBlob(doc);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    const currentDate = new Date().toISOString().split('T')[0];
    const filename = `${contractTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.docx`;
    
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Erro ao gerar documento Word:', error);
    throw error;
  }
};