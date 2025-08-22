import { Document, Packer, Paragraph, TextRun } from 'docx';

export const generateWord = async (contractText: string, contractTitle: string): Promise<void> => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
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
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: contractText,
              size: 24,
            }),
          ],
          spacing: {
            line: 360,
          },
        }),
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
        }),
      ],
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