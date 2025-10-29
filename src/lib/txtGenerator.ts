export const generateTxt = (contractText: string, contractTitle: string): void => {
  const content = `${contractTitle.toUpperCase()}\n\n${contractText}\n\nDocumento gerado automaticamente por https://modelodecontrato.org - Confira todos os dados antes de assinar`;
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  
  const currentDate = new Date().toISOString().split('T')[0];
  const filename = `${contractTitle.toLowerCase().replace(/\s+/g, '-')}-${currentDate}.txt`;
  
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};