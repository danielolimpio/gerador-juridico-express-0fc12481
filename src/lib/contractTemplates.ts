export interface ContractData {
  [key: string]: string | number | boolean;
}

// Função utilitária para formatar data no formato brasileiro
const formatDateToBrazilian = (dateString: string): string => {
  if (!dateString) return '___/___/____';
  
  // Se já está no formato brasileiro, retorna como está
  if (dateString.includes('/')) return dateString;
  
  // Se está no formato YYYY-MM-DD, converte para DD/MM/YYYY
  const dateParts = dateString.split('-');
  if (dateParts.length === 3) {
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }
  
  return dateString;
};

// Função para obter a data atual no formato brasileiro
const getCurrentDateBrazilian = (): string => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString();
  return `${day}/${month}/${year}`;
};

// Função para obter o ano atual
const getCurrentYear = (): string => {
  return new Date().getFullYear().toString();
};

export const generateContractText = (contractId: string, data: ContractData): string => {
  const templates: { [key: string]: (data: ContractData) => string } = {
    'compra-venda': (data) => `
CONTRATO PARTICULAR DE COMPRA E VENDA

Pelo presente instrumento particular de contrato de compra e venda, de um lado, como VENDEDOR(A), e de outro lado, como COMPRADOR(A), as partes a seguir qualificadas, têm entre si justo e acordado celebrar o presente contrato, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

VENDEDOR(A): ${data.vendedor_nome}, ${data.vendedor_nacionalidade || 'brasileiro(a)'}, ${data.vendedor_estado_civil}, ${data.vendedor_profissao || 'profissional'}, portador(a) do CPF nº ${data.vendedor_cpf} e RG nº ${data.vendedor_rg || '_____________'}, residente e domiciliado(a) na ${data.vendedor_endereco}, nº ${data.vendedor_numero}, Bairro: ${data.vendedor_bairro}, ${data.vendedor_cidade}, ${data.vendedor_estado}, CEP ${data.vendedor_cep}, e-mail: ${data.vendedor_email}, WhatsApp: ${data.vendedor_whatsapp}.

COMPRADOR(A): ${data.comprador_nome}, ${data.comprador_nacionalidade || 'brasileiro(a)'}, ${data.comprador_estado_civil}, ${data.comprador_profissao || 'profissional'}, portador(a) do CPF nº ${data.comprador_cpf} e RG nº ${data.comprador_rg || '_____________'}, residente e domiciliado(a) na ${data.comprador_endereco}, nº ${data.comprador_numero}, Bairro: ${data.comprador_bairro}, ${data.comprador_cidade}, ${data.comprador_estado}, CEP ${data.comprador_cep}, e-mail: ${data.comprador_email}, WhatsApp: ${data.comprador_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O VENDEDOR vende ao COMPRADOR, de forma irrevogável e irretratável, com todos os direitos e responsabilidades que lhe são inerentes, o seguinte bem: ${data.bem_descricao}.

1.2. O bem objeto deste contrato encontra-se em perfeitas condições de uso e conservação, livre e desembaraçado de quaisquer ônus, gravames, penhoras, hipotecas, alienações fiduciárias, usufrutos, servidões não aparentes ou outros direitos de terceiros.

1.3. Fazem parte integrante da venda todos os acessórios, benfeitorias e melhoramentos incorporados ao bem principal.

CLÁUSULA SEGUNDA - DO PREÇO E FORMA DE PAGAMENTO
2.1. O preço total e definitivo da venda é de R$ ${data.valor_venda} (${data.valor_extenso || 'valor por extenso'}), que será pago pelo COMPRADOR da seguinte forma: ${data.forma_pagamento}.

2.2. O preço foi livremente estipulado e aceito pelas partes, considerando as condições atuais do mercado e as características específicas do bem.

2.3. Caso haja parcelas a vencer, estas deverão ser pagas nas datas estipuladas, incidindo sobre o valor em atraso correção monetária pelo IPCA, juros de mora de 1% ao mês e multa moratória de 2%.

CLÁUSULA TERCEIRA - DA ENTREGA E TRADIÇÃO
3.1. O bem objeto deste contrato será entregue ao COMPRADOR na data de ${formatDateToBrazilian(String(data.data_entrega))}, no estado em que se encontra.

3.2. A posse e propriedade do bem transferem-se ao COMPRADOR no ato da assinatura deste contrato e mediante o pagamento integral do preço, conforme estipulado na cláusula segunda.

3.3. A partir da data da entrega, todas as responsabilidades, riscos e ônus relacionados ao bem passam a ser de responsabilidade exclusiva do COMPRADOR.

CLÁUSULA QUARTA - DAS GARANTIAS E DECLARAÇÕES
4.1. O VENDEDOR declara e garante que:
a) É legítimo proprietário do bem vendido;
b) Tem plenos poderes para realizar esta venda;
c) O bem está livre de qualquer ônus, gravame ou impedimento legal;
d) Não há ações judiciais pendentes que possam afetar o bem;
e) Todos os tributos incidentes sobre o bem estão em dia até a data da venda.

4.2. O VENDEDOR responsabiliza-se pela evicção e responde pelos vícios ocultos nos termos da legislação civil vigente.

CLÁUSULA QUINTA - DAS OBRIGAÇÕES DO VENDEDOR
5.1. Entregar o bem livre e desembaraçado;
5.2. Transferir todos os documentos necessários;
5.3. Prestar todas as informações sobre o bem;
5.4. Garantir a posse mansa e pacífica ao COMPRADOR.

CLÁUSULA SEXTA - DAS OBRIGAÇÕES DO COMPRADOR
6.1. Pagar o preço nas condições estabelecidas;
6.2. Receber o bem no estado em que se encontra;
6.3. Arcar com todas as despesas posteriores à venda;
6.4. Promover as transferências necessárias junto aos órgãos competentes.

CLÁUSULA SÉTIMA - DO INADIMPLEMENTO
7.1. O não cumprimento de qualquer obrigação contratual ensejará a aplicação de multa de 10% sobre o valor do contrato, sem prejuízo das perdas e danos.

7.2. Em caso de mora no pagamento, será aplicada multa de 2% sobre o valor em atraso, juros de 1% ao mês e correção monetária.

CLÁUSULA OITAVA - DA RESCISÃO
8.1. O presente contrato poderá ser rescindido por inadimplemento de qualquer das partes.

8.2. A parte inadimplente responderá por perdas e danos causados à parte inocente.

CLÁUSULA NONA - DAS DISPOSIÇÕES GERAIS
9.1. Este contrato obriga as partes e seus sucessores a qualquer título.

9.2. Qualquer alteração deve ser feita por escrito e com a concordância de ambas as partes.

9.3. Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor.

CLÁUSULA DÉCIMA - DO FORO
10.1. Fica eleito o foro da comarca de ${data.foro || 'residência do COMPRADOR'} para dirimir quaisquer questões oriundas deste contrato, renunciando as partes a qualquer outro, por mais privilegiado que seja.

E por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor e forma, na presença de duas testemunhas.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.vendedor_nome}
VENDEDOR(A)
CPF: ${data.vendedor_cpf}

_____________________________
${data.comprador_nome}
COMPRADOR(A)
CPF: ${data.comprador_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

    'locacao-residencial': (data) => `
CONTRATO DE LOCAÇÃO RESIDENCIAL

Pelo presente instrumento particular de locação residencial, de um lado como LOCADOR(A), e de outro como LOCATÁRIO(A), as partes a seguir qualificadas celebram o presente contrato, que se regerá pela Lei nº 8.245/91 (Lei do Inquilinato) e pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

LOCADOR(A): ${data.locador_nome}, ${data.locador_nacionalidade || 'brasileiro(a)'}, ${data.locador_estado_civil}, ${data.locador_profissao || 'profissional'}, portador(a) do CPF nº ${data.locador_cpf} e RG nº ${data.locador_rg || '_____________'}, residente e domiciliado(a) na ${data.locador_endereco}, nº ${data.locador_numero}, Bairro: ${data.locador_bairro}, ${data.locador_cidade}, ${data.locador_estado}, CEP ${data.locador_cep}, e-mail: ${data.locador_email}, WhatsApp: ${data.locador_whatsapp}.

LOCATÁRIO(A): ${data.locatario_nome}, ${data.locatario_nacionalidade || 'brasileiro(a)'}, ${data.locatario_estado_civil}, ${data.locatario_profissao || 'profissional'}, portador(a) do CPF nº ${data.locatario_cpf} e RG nº ${data.locatario_rg || '_____________'}, residente e domiciliado(a) na ${data.locatario_endereco}, nº ${data.locatario_numero}, Bairro: ${data.locatario_bairro}, ${data.locatario_cidade}, ${data.locatario_estado}, CEP ${data.locatario_cep}, e-mail: ${data.locatario_email}, WhatsApp: ${data.locatario_whatsapp}.

${data.fiador_nome ? `
FIADOR(A): ${data.fiador_nome}, ${data.fiador_nacionalidade || 'brasileiro(a)'}, ${data.fiador_estado_civil}, ${data.fiador_profissao || 'profissional'}, portador(a) do CPF nº ${data.fiador_cpf} e RG nº ${data.fiador_rg || '_____________'}, residente e domiciliado(a) na ${data.fiador_endereco}, CEP ${data.fiador_cep || '_____________'}, proprietário(a) do imóvel situado na ${data.fiador_imovel || '_____________'}.` : ''}

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O LOCADOR dá em locação ao LOCATÁRIO, que aceita, o imóvel residencial situado na ${data.imovel_endereco}, nº ${data.imovel_numero}, Bairro: ${data.imovel_bairro}, ${data.imovel_cidade}, ${data.imovel_estado}, CEP ${data.imovel_cep}.

1.2. O imóvel é composto por: ${data.imovel_composicao || 'composição detalhada do imóvel'}.

1.3. Fazem parte integrante da locação: ${data.imovel_acessorios || 'todos os equipamentos e acessórios existentes'}.

1.4. O imóvel destina-se exclusivamente para fins residenciais, sendo vedado o uso comercial ou qualquer atividade que possa perturbar a vizinhança.

CLÁUSULA SEGUNDA - DO PRAZO
2.1. O prazo da locação é de ${data.prazo_contrato} (${data.prazo_extenso || 'prazo por extenso'}) meses, com início em ${formatDateToBrazilian(String(data.data_inicio || ''))} e término em ${formatDateToBrazilian(String(data.data_fim || ''))}.

2.2. Findo o prazo estipulado, se o LOCATÁRIO permanecer no imóvel sem oposição do LOCADOR, a locação será prorrogada por prazo indeterminado.

2.3. Durante os primeiros 12 (doze) meses, nenhuma das partes poderá resilir o contrato, salvo pagamento de multa proporcional.

CLÁUSULA TERCEIRA - DO ALUGUEL E FORMA DE PAGAMENTO
3.1. O aluguel mensal é de R$ ${data.valor_aluguel} (${data.aluguel_extenso || 'valor por extenso'}), que deverá ser pago até o dia ${data.vencimento_aluguel || '10'} de cada mês.

3.2. O pagamento deverá ser efetuado mediante depósito bancário, PIX ou transferência na conta indicada pelo LOCADOR.

3.3. O não pagamento até a data do vencimento implicará incidência de multa de 10% sobre o valor devido, juros de mora de 1% ao mês e correção monetária pelo IPCA.

CLÁUSULA QUARTA - DO REAJUSTE
4.1. O aluguel será reajustado anualmente pela variação do ${data.indice_reajuste || 'IGP-M'} ou, na falta deste, pelo índice que legalmente o substituir.

4.2. O primeiro reajuste ocorrerá após 12 (doze) meses do início da locação.

CLÁUSULA QUINTA - DOS ENCARGOS
5.1. São de responsabilidade do LOCATÁRIO:
a) Pagamento de contas de água, energia elétrica, gás, telefone e internet;
b) Taxa de condomínio, quando houver;
c) IPTU do exercício e taxas municipais;
d) Todas as despesas ordinárias de uso e conservação.

5.2. São de responsabilidade do LOCADOR as obras de reforma ou reparos necessários para conservação do imóvel.

${data.caucao ? `
CLÁUSULA SEXTA - DA CAUÇÃO
6.1. O LOCATÁRIO depositará, a título de garantia, a importância de R$ ${data.valor_caucao} (${data.caucao_extenso || 'valor por extenso'}), correspondente a ${data.meses_caucao || '1'} mês(es) de aluguel.

6.2. A caução será devolvida no final do contrato, corrigida monetariamente, após deduzidas eventuais despesas e danos.` : ''}

${data.fiador_nome ? `
CLÁUSULA SÉTIMA - DA FIANÇA
7.1. ${data.fiador_nome} intervém no presente contrato como FIADOR solidário do LOCATÁRIO, responsabilizando-se por todas as obrigações contratuais.

7.2. A fiança perdurará até a efetiva entrega das chaves e desocupação do imóvel.

7.3. O FIADOR renuncia expressamente aos benefícios dos artigos 827, 835 e 838 do Código Civil.` : ''}

CLÁUSULA OITAVA - DAS OBRIGAÇÕES DO LOCADOR
8.1. Entregar o imóvel em perfeitas condições de habitabilidade;
8.2. Garantir o uso pacífico da coisa locada;
8.3. Manter o imóvel em estado de servir ao uso convencionado;
8.4. Responder pelos vícios ou defeitos anteriores à locação.

CLÁUSULA NONA - DAS OBRIGAÇÕES DO LOCATÁRIO
9.1. Pagar pontualmente o aluguel e encargos;
9.2. Usar o imóvel para fim residencial, com cuidado de bom pai de família;
9.3. Permitir vistorias quando necessárias;
9.4. Restituir o imóvel no estado em que o recebeu;
9.5. Não sublocar ou ceder o imóvel sem autorização expressa.

CLÁUSULA DÉCIMA - DAS PENALIDADES
10.1. O descumprimento de qualquer cláusula contratual ensejará multa de 3 (três) aluguéis vigentes.

10.2. A infração contratual autoriza a rescisão, independentemente de aviso ou interpelação judicial.

CLÁUSULA DÉCIMA PRIMEIRA - DA RESCISÃO ANTECIPADA
11.1. Nos primeiros 12 meses, a rescisão antecipada por qualquer das partes ensejará multa equivalente a 3 (três) meses de aluguel.

11.2. Após 12 meses, qualquer das partes poderá rescindir mediante aviso prévio de 30 dias.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. É vedada a cessão ou sublocação, total ou parcial, sem anuência expressa do LOCADOR.

12.2. Benfeitorias realizadas sem autorização não serão indenizadas.

12.3. Em caso de venda do imóvel, o LOCATÁRIO terá direito de preferência.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. Fica eleito o foro da situação do imóvel para dirimir questões oriundas deste contrato.

E por estarem de acordo, firmam o presente contrato em três vias de igual teor.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.locador_nome}
LOCADOR(A)
CPF: ${data.locador_cpf}

_____________________________
${data.locatario_nome}
LOCATÁRIO(A)
CPF: ${data.locatario_cpf}

${data.fiador_nome ? `_____________________________
${data.fiador_nome}
FIADOR(A)
CPF: ${data.fiador_cpf}` : ''}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'prestacao-servicos': (data) => `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS PROFISSIONAIS

Pelo presente instrumento particular de contrato de prestação de serviços, de um lado como CONTRATANTE, e de outro como PRESTADOR, as partes qualificadas celebram o presente contrato, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

CONTRATANTE: ${data.contratante_nome}, ${data.contratante_tipo || 'pessoa física'}, ${data.contratante_nacionalidade || 'brasileiro(a)'}, portador(a) do ${data.contratante_documento_tipo || 'CPF'} nº ${data.contratante_documento}, ${data.contratante_inscricao ? `inscrição estadual nº ${data.contratante_inscricao},` : ''} com endereço na ${data.contratante_endereco}, CEP ${data.contratante_cep || '_____________'}.

PRESTADOR: ${data.prestador_nome}, ${data.prestador_nacionalidade || 'brasileiro(a)'}, ${data.prestador_estado_civil}, ${data.prestador_profissao || 'prestador de serviços'}, portador(a) do CPF nº ${data.prestador_cpf} e RG nº ${data.prestador_rg || '_____________'}, ${data.prestador_inscricao_mei ? `MEI nº ${data.prestador_inscricao_mei},` : ''} residente e domiciliado(a) na ${data.prestador_endereco}, CEP ${data.prestador_cep || '_____________'}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O PRESTADOR se obriga a executar para o CONTRATANTE os seguintes serviços: ${data.servicos_descricao}.

1.2. Os serviços serão executados de acordo com as especificações técnicas e padrões de qualidade estabelecidos, observando-se as normas aplicáveis e melhores práticas do mercado.

1.3. O PRESTADOR declara possuir toda a capacidade técnica, profissional e operacional necessária para a execução dos serviços contratados.

CLÁUSULA SEGUNDA - DO PRAZO E LOCAL DE EXECUÇÃO
2.1. Os serviços deverão ser iniciados em ${data.data_inicio || '___/___/____'} e concluídos até ${data.prazo_execucao}.

2.2. Os serviços serão executados no seguinte local: ${data.local_execucao || 'conforme especificado pelo CONTRATANTE'}.

2.3. O cronograma de execução poderá ser ajustado mediante acordo entre as partes, sem prejuízo da qualidade dos serviços.

CLÁUSULA TERCEIRA - DO VALOR E FORMA DE PAGAMENTO
3.1. O valor total dos serviços é de R$ ${data.valor_servico} (${data.valor_extenso || 'valor por extenso'}).

3.2. O pagamento será efetuado da seguinte forma: ${data.forma_pagamento}.

3.3. Os valores acima são finais e definitivos, já incluindo todos os tributos, encargos e despesas.

3.4. O atraso no pagamento implicará incidência de multa de 2% sobre o valor devido, juros de mora de 1% ao mês e correção monetária pelo IPCA.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DO PRESTADOR
4.1. Executar os serviços com qualidade, pontualidade e eficiência;
4.2. Manter sigilo absoluto sobre informações confidenciais;
4.3. Utilizar equipamentos e materiais adequados;
4.4. Cumprir prazos estabelecidos;
4.5. Responsabilizar-se por danos causados por negligência ou imperícia;
4.6. Manter regularidade fiscal e previdenciária;
4.7. Observar normas de segurança do trabalho.

CLÁUSULA QUINTA - DAS OBRIGAÇÕES DO CONTRATANTE
5.1. Pagar os valores nas condições estabelecidas;
5.2. Fornecer informações necessárias à execução dos serviços;
5.3. Disponibilizar local e condições adequadas de trabalho;
5.4. Comunicar eventuais alterações ou problemas;
5.5. Prestar colaboração necessária.

CLÁUSULA SEXTA - DA NATUREZA DA RELAÇÃO
6.1. O PRESTADOR executará os serviços com total autonomia técnica e profissional, sem subordinação hierárquica.

6.2. Não se estabelece qualquer vínculo empregatício entre as partes, aplicando-se o disposto na Lei nº 8.666/93 e legislação correlata.

6.3. O PRESTADOR é responsável por todos os encargos tributários, previdenciários e fiscais decorrentes da execução dos serviços.

${data.confidencialidade === 'Sim' ? `
CLÁUSULA SÉTIMA - DA CONFIDENCIALIDADE
7.1. O PRESTADOR se compromete a manter absoluto sigilo sobre todas as informações confidenciais do CONTRATANTE.

7.2. A obrigação de confidencialidade perdurará mesmo após o término do contrato.

7.3. O descumprimento desta cláusula ensejará multa de R$ ${data.multa_confidencialidade || '10.000,00'} e indenização por perdas e danos.` : ''}

CLÁUSULA OITAVA - DA PROPRIEDADE INTELECTUAL
8.1. Todos os direitos de propriedade intelectual sobre os resultados dos serviços pertencerão ao CONTRATANTE.

8.2. O PRESTADOR cede, de forma definitiva e irrevogável, todos os direitos autorais e conexos.

CLÁUSULA NONA - DAS PENALIDADES
9.1. O descumprimento de qualquer obrigação contratual ensejará multa de 10% sobre o valor total dos serviços.

9.2. O atraso na execução dos serviços implicará multa de 1% por dia de atraso, limitada a 10% do valor do contrato.

9.3. As multas não excluem o direito de indenização por perdas e danos.

CLÁUSULA DÉCIMA - DA RESCISÃO
10.1. O contrato poderá ser rescindido:
a) Por mútuo acordo;
b) Por inadimplemento de qualquer das partes;
c) Por impossibilidade superveniente de execução;
d) Por falência ou insolvência civil.

10.2. A rescisão por inadimplemento ensejará o pagamento de multa de 20% sobre o valor total dos serviços.

CLÁUSULA DÉCIMA PRIMEIRA - DA FORÇA MAIOR
11.1. Nenhuma das partes será responsabilizada por atraso ou inadimplemento decorrente de caso fortuito ou força maior.

11.2. A parte afetada deverá comunicar imediatamente a ocorrência à outra parte.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. Este contrato representa o acordo integral entre as partes.

12.2. Alterações devem ser feitas por escrito e com concordância de ambas as partes.

12.3. A invalidade de qualquer cláusula não afetará as demais.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. Fica eleito o foro da comarca de ${data.foro || 'domicílio do CONTRATANTE'} para dirimir questões oriundas deste contrato.

E por estarem acordes, firmam o presente contrato em duas vias de igual teor.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.contratante_nome}
CONTRATANTE
${data.contratante_documento_tipo || 'CPF'}: ${data.contratante_documento}

_____________________________
${data.prestador_nome}
PRESTADOR
CPF: ${data.prestador_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'locacao-comercial': (data) => `
CONTRATO DE LOCAÇÃO NÃO RESIDENCIAL (COMERCIAL)

Pelo presente instrumento particular de locação não residencial, de um lado como LOCADOR(A), e de outro como LOCATÁRIO(A), as partes qualificadas celebram o presente contrato, que se regerá pela Lei nº 8.245/91 e pelas cláusulas seguintes:

QUALIFICAÇÃO DAS PARTES

LOCADOR(A): ${data.locador_nome}, ${data.locador_nacionalidade || 'brasileiro(a)'}, ${data.locador_estado_civil}, portador(a) do CPF nº ${data.locador_cpf} e RG nº ${data.locador_rg || '_____________'}, residente na ${data.locador_endereco}.

LOCATÁRIO(A): ${data.locatario_nome}, ${data.locatario_cnpj ? `CNPJ nº ${data.locatario_cnpj}` : `CPF nº ${data.locatario_cpf}`}, com sede/endereço na ${data.locatario_endereco}, representada por ${data.representante_legal || 'seu representante legal'}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O LOCADOR loca ao LOCATÁRIO o imóvel não residencial situado na ${data.imovel_endereco}, com área de ${data.area_imovel || '___'} metros quadrados.

1.2. O imóvel destina-se exclusivamente ao ramo de: ${data.atividade_comercial}.

1.3. É vedado o uso do imóvel para atividades diversas das especificadas sem autorização expressa do LOCADOR.

CLÁUSULA SEGUNDA - DO PRAZO
2.1. O prazo da locação é de ${data.prazo_contrato} anos, com início em ${data.data_inicio || '___/___/____'} e término em ${data.data_fim || '___/___/____'}.

2.2. O contrato poderá ser renovado mediante acordo entre as partes.

CLÁUSULA TERCEIRA - DO ALUGUEL
3.1. O aluguel mensal é de R$ ${data.valor_aluguel} (${data.aluguel_extenso || 'valor por extenso'}), pagável até o dia ${data.vencimento_aluguel || '10'} de cada mês.

3.2. O atraso no pagamento implicará multa de 10%, juros de 1% ao mês e correção monetária.

CLÁUSULA QUARTA - DO REAJUSTE
4.1. O aluguel será reajustado anualmente pelo ${data.indice_reajuste || 'IPCA'}.

CLÁUSULA QUINTA - DAS GARANTIAS
${data.tipo_garantia === 'Fiança' ? `5.1. Fica prestada fiança por ${data.fiador_nome}, CPF ${data.fiador_cpf}.` : ''}
${data.tipo_garantia === 'Caução' ? `5.1. O LOCATÁRIO deposita caução de R$ ${data.valor_caucao}.` : ''}
${data.tipo_garantia === 'Seguro Fiança' ? `5.1. A garantia será prestada através de seguro fiança.` : ''}

CLÁUSULA SEXTA - DAS OBRIGAÇÕES
6.1. São obrigações do LOCATÁRIO: pagamento pontual do aluguel, conservação do imóvel, cumprimento das normas municipais.

6.2. São obrigações do LOCADOR: garantir o uso pacífico, manter a estrutura em condições adequadas.

CLÁUSULA SÉTIMA - DO FORO
7.1. Fica eleito o foro da situação do imóvel.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.locador_nome}
LOCADOR(A)

_____________________________
${data.locatario_nome}
LOCATÁRIO(A)
    `,

    'trabalho-autonomo': (data) => `
CONTRATO DE TRABALHO AUTÔNOMO

Pelo presente instrumento particular de contrato de trabalho autônomo, as partes abaixo qualificadas, em conformidade com a legislação civil e trabalhista vigente, especialmente os artigos 593 a 609 do Código Civil de 2002, celebram o presente contrato, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

CONTRATANTE: ${data.contratante_nome}, inscrito(a) no ${data.contratante_documento.length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.contratante_documento}${data.contratante_rg ? `, RG nº ${data.contratante_rg}` : ''}, com endereço na ${data.contratante_endereco}, nº ${data.contratante_numero}, Bairro: ${data.contratante_bairro}, ${data.contratante_cidade}, ${data.contratante_estado}, CEP ${data.contratante_cep}, e-mail: ${data.contratante_email}, WhatsApp: ${data.contratante_whatsapp}.

PROFISSIONAL AUTÔNOMO: ${data.autonomo_nome}, ${data.autonomo_nacionalidade || 'brasileiro(a)'}, ${data.autonomo_estado_civil || 'estado civil'}, ${data.autonomo_profissao}, portador(a) do CPF nº ${data.autonomo_cpf} e RG nº ${data.autonomo_rg}, residente e domiciliado(a) na ${data.autonomo_endereco}, nº ${data.autonomo_numero}, Bairro: ${data.autonomo_bairro}, ${data.autonomo_cidade}, ${data.autonomo_estado}, CEP ${data.autonomo_cep}, e-mail: ${data.autonomo_email}, WhatsApp: ${data.autonomo_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O PROFISSIONAL AUTÔNOMO se obriga a prestar ao CONTRATANTE, de forma autônoma e sem subordinação hierárquica, os seguintes serviços profissionais: ${data.servicos_descricao}.

1.2. Os serviços serão executados com total autonomia técnica, profissional e operacional, cabendo ao PROFISSIONAL AUTÔNOMO determinar os métodos, processos e técnicas de trabalho.

1.3. O PROFISSIONAL AUTÔNOMO declara possuir plena capacidade técnica, conhecimento especializado e experiência profissional necessária para a execução dos serviços contratados.

1.4. Os serviços deverão ser executados com observância das normas técnicas aplicáveis, legislação vigente e melhores práticas profissionais.

CLÁUSULA SEGUNDA - DA NATUREZA JURÍDICA DA RELAÇÃO
2.1. O presente contrato constitui relação jurídica de natureza civil, não gerando qualquer vínculo empregatício entre as partes, nos termos dos artigos 2º e 3º da CLT.

2.2. O PROFISSIONAL AUTÔNOMO atuará com total independência e autonomia, inexistindo:
a) Subordinação hierárquica ou disciplinar;
b) Habitualidade ou pessoalidade obrigatória;
c) Horário fixo de trabalho ou controle de jornada;
d) Exclusividade na prestação de serviços;
e) Direito a férias, 13º salário ou aviso prévio.

2.3. O PROFISSIONAL AUTÔNOMO poderá prestar serviços a outros contratantes, salvo se houver disposição expressa em contrário neste instrumento.

2.4. O PROFISSIONAL AUTÔNOMO é responsável por todos os encargos tributários, previdenciários, fiscais e trabalhistas decorrentes da execução dos serviços, incluindo INSS, IRPF, ISS e demais tributos aplicáveis.

CLÁUSULA TERCEIRA - DO PRAZO E LOCAL DE EXECUÇÃO
3.1. Os serviços deverão ser iniciados em ${data.data_inicio ? formatDateToBrazilian(String(data.data_inicio)) : getCurrentDateBrazilian()} e concluídos no prazo de ${data.prazo_execucao}.

3.2. O local de execução dos serviços será: ${data.local_execucao}.

3.3. O PROFISSIONAL AUTÔNOMO poderá executar os serviços remotamente ou presencialmente, conforme a natureza das atividades e acordo entre as partes.

3.4. O prazo poderá ser prorrogado mediante acordo entre as partes, formalizado por escrito através de termo aditivo.

3.5. Prorrogações não alteram a natureza autônoma da relação contratual.

CLÁUSULA QUARTA - DA REMUNERAÇÃO E FORMA DE PAGAMENTO
4.1. Pela execução dos serviços descritos na Cláusula Primeira, o CONTRATANTE pagará ao PROFISSIONAL AUTÔNOMO o valor total de R$ ${data.valor_servico} (${data.valor_extenso || 'valor por extenso'}).

4.2. A forma de pagamento será: ${data.forma_pagamento}.

4.3. ${data.periodicidade_pagamento ? `Os pagamentos serão realizados ${data.periodicidade_pagamento}.` : 'Os pagamentos serão realizados conforme cronograma acordado entre as partes.'}

4.4. O pagamento será efetuado mediante:
a) Apresentação de Recibo de Pagamento de Autônomo (RPA) ou Nota Fiscal;
b) Transferência bancária ou PIX para conta indicada pelo PROFISSIONAL AUTÔNOMO;
c) Comprovação da execução dos serviços, quando aplicável.

4.5. Do valor dos pagamentos serão retidos na fonte os tributos exigidos pela legislação vigente, especialmente INSS e IRRF.

4.6. O atraso no pagamento superior a 30 (trinta) dias suspende automaticamente a obrigação do PROFISSIONAL AUTÔNOMO de executar os serviços.

4.7. Os valores em atraso serão corrigidos monetariamente pelo IPCA, acrescidos de juros de mora de 1% ao mês e multa moratória de 2%.

${data.reajuste && data.reajuste !== 'Sem reajuste' ? `
4.8. Os valores serão reajustados anualmente pela variação do ${data.reajuste}, ou índice que vier a substituí-lo, a partir de 12 (doze) meses da data de assinatura deste contrato.` : ''}

CLÁUSULA QUINTA - DOS MATERIAIS E EQUIPAMENTOS
5.1. ${data.materiais === 'Pelo Autônomo' ? 'O PROFISSIONAL AUTÔNOMO será responsável pelo fornecimento de todos os materiais, ferramentas, equipamentos e insumos necessários à execução dos serviços.' : ''}${data.materiais === 'Pelo Contratante' ? 'O CONTRATANTE fornecerá todos os materiais, ferramentas, equipamentos e insumos necessários à execução dos serviços.' : ''}${data.materiais === 'Compartilhado' ? 'Os materiais, ferramentas, equipamentos e insumos serão fornecidos de forma compartilhada, conforme especificação acordada entre as partes.' : ''}

5.2. Os equipamentos e materiais fornecidos pelo CONTRATANTE permanecerão sob sua propriedade, devendo ser devolvidos ao término do contrato.

5.3. O PROFISSIONAL AUTÔNOMO responsabiliza-se pela guarda e conservação dos materiais que lhe forem confiados.

CLÁUSULA SEXTA - DAS OBRIGAÇÕES DO PROFISSIONAL AUTÔNOMO
6.1. Executar os serviços com qualidade técnica, profissionalismo, diligência e pontualidade;

6.2. Observar as especificações técnicas, prazos e padrões de qualidade estabelecidos;

6.3. Manter o CONTRATANTE informado sobre o andamento dos trabalhos;

6.4. Comunicar imediatamente qualquer problema, impedimento ou necessidade de alteração no escopo;

6.5. Responder pela qualidade e correção dos serviços executados;

6.6. Manter regularidade fiscal, tributária e previdenciária;

6.7. Fornecer RPA (Recibo de Pagamento de Autônomo) ou Nota Fiscal dos serviços prestados;

6.8. Responsabilizar-se por danos causados ao CONTRATANTE ou a terceiros por negligência, imperícia ou imprudência;

6.9. Observar normas de segurança, higiene e medicina do trabalho aplicáveis;

6.10. Zelar pela imagem, reputação e interesses do CONTRATANTE;

6.11. Não divulgar informações confidenciais obtidas durante a execução dos serviços.

CLÁUSULA SÉTIMA - DAS OBRIGAÇÕES DO CONTRATANTE
7.1. Pagar a remuneração nas condições estabelecidas;

7.2. Fornecer todas as informações, documentos e dados necessários à execução dos serviços;

7.3. Disponibilizar acesso às instalações, sistemas e recursos necessários, quando aplicável;

7.4. Prestar esclarecimentos e apoio técnico quando solicitado;

7.5. Comunicar eventuais alterações de escopo ou especificações;

7.6. Respeitar a autonomia técnica e profissional do PROFISSIONAL AUTÔNOMO;

7.7. Proporcionar condições adequadas e seguras para execução dos serviços.

${data.confidencialidade === 'Sim' ? `
CLÁUSULA OITAVA - DA CONFIDENCIALIDADE E SIGILO
8.1. O PROFISSIONAL AUTÔNOMO se compromete a manter absoluto e total sigilo sobre todas as informações confidenciais, dados, documentos, processos, know-how, segredos industriais ou comerciais do CONTRATANTE aos quais tenha acesso em razão da execução dos serviços.

8.2. Consideram-se informações confidenciais:
a) Dados financeiros, contábeis e comerciais;
b) Estratégias de negócio, planos e projetos;
c) Listas de clientes, fornecedores e parceiros;
d) Tecnologias, métodos e processos proprietários;
e) Informações sobre produtos, serviços e precificação;
f) Qualquer informação não pública relacionada ao CONTRATANTE.

8.3. A obrigação de confidencialidade:
a) Permanece em vigor durante toda a vigência do contrato;
b) Perdura por 5 (cinco) anos após o término do contrato;
c) Sobrevive à rescisão ou término do contrato por qualquer motivo.

8.4. O PROFISSIONAL AUTÔNOMO não poderá:
a) Divulgar, revelar, comunicar ou transferir informações confidenciais a terceiros;
b) Utilizar informações confidenciais para benefício próprio ou de terceiros;
c) Reproduzir, copiar ou reter documentos ou dados confidenciais após o término do contrato.

8.5. Excetuam-se da obrigação de sigilo:
a) Informações já públicas ou de domínio público;
b) Informações cuja divulgação seja legalmente exigida;
c) Informações autorizadas por escrito pelo CONTRATANTE.

8.6. O descumprimento desta cláusula ensejará:
a) Multa de R$ ${data.multa_confidencialidade || '10.000,00'} (dez mil reais);
b) Rescisão imediata do contrato;
c) Indenização por perdas e danos causados;
d) Responsabilização civil e criminal, nos termos da legislação vigente.` : ''}

CLÁUSULA NONA - DA PROPRIEDADE INTELECTUAL
9.1. Todos os direitos de propriedade intelectual sobre os resultados, produtos, criações, desenvolvimentos, invenções, obras e trabalhos decorrentes da execução dos serviços pertencem exclusivamente ao CONTRATANTE.

9.2. O PROFISSIONAL AUTÔNOMO cede, de forma definitiva, total, irrevogável e irretratável, todos os direitos autorais, patrimoniais e conexos, em caráter universal, ao CONTRATANTE.

9.3. A cessão abrange:
a) Direitos de reprodução, distribuição e divulgação;
b) Direitos de adaptação, modificação e transformação;
c) Direitos de exploração comercial;
d) Direitos de uso em qualquer meio ou formato.

9.4. A cessão é válida para todo o território nacional e internacional, pelo prazo máximo previsto na legislação de direitos autorais.

9.5. A remuneração prevista na Cláusula Quarta já contempla a cessão de direitos autorais, não sendo devida qualquer remuneração adicional.

CLÁUSULA DÉCIMA - DAS PENALIDADES
10.1. O descumprimento de qualquer obrigação contratual ensejará a aplicação de multa compensatória de 20% (vinte por cento) sobre o valor total dos serviços, sem prejuízo do direito à indenização por perdas e danos.

10.2. O atraso injustificado na execução dos serviços implicará multa de 1% (um por cento) sobre o valor total por dia de atraso, limitada a 10% (dez por cento) do valor do contrato.

10.3. A reincidência no atraso ou descumprimento autoriza a rescisão imediata do contrato.

10.4. As multas são independentes e cumulativas com o direito à indenização por perdas e danos efetivamente comprovados.

10.5. A parte que der causa à rescisão contratual responderá pelas multas e perdas e danos causados à parte inocente.

CLÁUSULA DÉCIMA PRIMEIRA - DA RESCISÃO
11.1. O presente contrato poderá ser rescindido:

a) Por mútuo acordo entre as partes, mediante distrato;
b) Por inadimplemento de qualquer das partes;
c) Por impossibilidade superveniente de execução dos serviços;
d) Por caso fortuito ou força maior;
e) Por falência, recuperação judicial ou insolvência civil;
f) Unilateralmente, mediante aviso prévio de 30 (trinta) dias.

11.2. A rescisão por inadimplemento independe de notificação ou interpelação judicial ou extrajudicial, operando-se de pleno direito.

11.3. Em caso de rescisão sem justa causa:
a) Pelo CONTRATANTE: pagamento integral dos serviços executados até a data da rescisão;
b) Pelo PROFISSIONAL AUTÔNOMO: devolução de valores recebidos antecipadamente, se houver.

11.4. A rescisão por justa causa, por culpa de qualquer das partes, enseja o pagamento de multa de 30% sobre o valor total dos serviços, além de indenização por perdas e danos.

11.5. Em qualquer hipótese de rescisão:
a) O PROFISSIONAL AUTÔNOMO deverá entregar todos os trabalhos realizados;
b) Devolver materiais, equipamentos, documentos e dados do CONTRATANTE;
c) As obrigações de confidencialidade permanecem em vigor.

CLÁUSULA DÉCIMA SEGUNDA - DA FORÇA MAIOR E CASO FORTUITO
12.1. Nenhuma das partes será responsabilizada pelo inadimplemento de suas obrigações decorrente de caso fortuito ou força maior, nos termos do artigo 393 do Código Civil.

12.2. Consideram-se eventos de força maior: catástrofes naturais, guerras, revoluções, epidemias, pandemias, atos governamentais que impossibilitem a execução contratual.

12.3. A parte afetada deverá:
a) Comunicar imediatamente a ocorrência à outra parte;
b) Comprovar a impossibilidade de execução;
c) Tomar todas as medidas para minimizar os efeitos.

12.4. Durante o período de força maior, as obrigações ficam suspensas, sem qualquer ônus para as partes.

12.5. Cessada a causa de força maior, os prazos serão automaticamente prorrogados pelo período correspondente à suspensão.

CLÁUSULA DÉCIMA TERCEIRA - DA INEXISTÊNCIA DE VÍNCULO EMPREGATÍCIO
13.1. Fica expressamente estabelecido que o PROFISSIONAL AUTÔNOMO não mantém qualquer vínculo empregatício com o CONTRATANTE, inexistindo subordinação jurídica, pessoalidade, habitualidade ou onerosidade características da relação de emprego.

13.2. O PROFISSIONAL AUTÔNOMO:
a) Executa os serviços com autonomia e independência;
b) Possui liberdade de horário e local de trabalho;
c) Define seus próprios métodos e processos;
d) Pode prestar serviços a outros contratantes;
e) Não está sujeito a controle de jornada ou disciplina empresarial;
f) É responsável por seus próprios encargos trabalhistas e previdenciários.

13.3. O PROFISSIONAL AUTÔNOMO assume inteira responsabilidade por:
a) Recolhimento de contribuições previdenciárias (INSS);
b) Pagamento de tributos (IRPF, ISS, PIS, COFINS);
c) Seguro de acidentes pessoais, se aplicável;
d) Quaisquer outros encargos fiscais e tributários.

13.4. O PROFISSIONAL AUTÔNOMO deverá comprovar, quando solicitado, a regularidade de suas contribuições previdenciárias.

13.5. Em caso de eventual reclamação trabalhista movida pelo PROFISSIONAL AUTÔNOMO contra o CONTRATANTE:
a) Se reconhecido vínculo empregatício, todos os valores pagos a título de serviços autônomos serão compensados;
b) O PROFISSIONAL AUTÔNOMO indenizará o CONTRATANTE por todas as despesas, custos, honorários e condenações.

CLÁUSULA DÉCIMA QUARTA - DAS DISPOSIÇÕES GERAIS
14.1. Este contrato representa o acordo integral entre as partes, substituindo todas as negociações, entendimentos e acordos anteriores, escritos ou verbais.

14.2. Qualquer alteração, aditamento ou modificação deste contrato deverá ser formalizada por escrito e assinada por ambas as partes.

14.3. A tolerância ou não exercício, por qualquer das partes, de direitos a ela assegurados neste contrato não implicará em novação, renúncia ou alteração das condições pactuadas.

14.4. Se qualquer disposição deste contrato for considerada inválida, ilegal ou inexequível, as demais cláusulas permanecerão em pleno vigor e efeito.

14.5. Este contrato obriga as partes, seus herdeiros e sucessores a qualquer título.

14.6. As partes declaram que:
a) Possuem plena capacidade jurídica para celebrar este contrato;
b) Leram e compreenderam todas as cláusulas;
c) Aceitam integralmente todos os termos e condições.

14.7. Todas as comunicações entre as partes deverão ser feitas por escrito, preferencialmente por e-mail com confirmação de recebimento, para os endereços constantes na qualificação.

14.8. As partes comprometem-se a comunicar eventuais alterações de endereço, telefone ou e-mail, sob pena de se considerarem válidas as comunicações enviadas aos endereços constantes neste contrato.

CLÁUSULA DÉCIMA QUINTA - DO FORO
15.1. Fica eleito o foro da comarca de ${data.foro || 'domicílio do CONTRATANTE'} para dirimir quaisquer controvérsias oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

E, por estarem assim justos e contratados, firmam o presente instrumento em 2 (duas) vias de igual teor e forma, na presença de 2 (duas) testemunhas, para que produza seus jurídicos e legais efeitos.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________
${data.contratante_nome}
CONTRATANTE
${data.contratante_documento.length > 14 ? 'CNPJ' : 'CPF'}: ${data.contratante_documento}


_____________________________
${data.autonomo_nome}
PROFISSIONAL AUTÔNOMO
CPF: ${data.autonomo_cpf}


TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

    'parceria-comercial': (data) => `
CONTRATO DE PARCERIA COMERCIAL

Pelo presente instrumento particular de contrato de parceria comercial, as partes abaixo qualificadas, em conformidade com os princípios da liberdade contratual, boa-fé objetiva e função social do contrato, estabelecem os termos e condições para cooperação empresarial, que se regerá pelas cláusulas seguintes:

QUALIFICAÇÃO DOS PARCEIROS

PARCEIRO 1: ${data.parceiro1_nome}, inscrito(a) no ${data.parceiro1_documento.length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.parceiro1_documento}${data.parceiro1_rg ? `, RG nº ${data.parceiro1_rg}` : ''}, com sede/endereço na ${data.parceiro1_endereco}, nº ${data.parceiro1_numero}, Bairro: ${data.parceiro1_bairro}, ${data.parceiro1_cidade}, ${data.parceiro1_estado}, CEP ${data.parceiro1_cep}, e-mail: ${data.parceiro1_email}, WhatsApp: ${data.parceiro1_whatsapp}.

PARCEIRO 2: ${data.parceiro2_nome}, inscrito(a) no ${data.parceiro2_documento.length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.parceiro2_documento}${data.parceiro2_rg ? `, RG nº ${data.parceiro2_rg}` : ''}, com sede/endereço na ${data.parceiro2_endereco}, nº ${data.parceiro2_numero}, Bairro: ${data.parceiro2_bairro}, ${data.parceiro2_cidade}, ${data.parceiro2_estado}, CEP ${data.parceiro2_cep}, e-mail: ${data.parceiro2_email}, WhatsApp: ${data.parceiro2_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO E FINALIDADE DA PARCERIA
1.1. As partes estabelecem parceria comercial com o seguinte objeto: ${data.objeto_parceria}.

1.2. A parceria tem por finalidade: ${data.finalidade_parceria}.

1.3. O objeto da parceria inclui, de forma não exaustiva:
a) Desenvolvimento conjunto de negócios e oportunidades comerciais;
b) Compartilhamento de recursos, conhecimentos e expertise;
c) Criação de sinergias para maximização de resultados;
d) Cooperação técnica, comercial e operacional;
e) Prospecção e atendimento conjunto de clientes.

1.4. A parceria não constitui pessoa jurídica distinta, mantendo cada parceiro sua autonomia e independência jurídica.

1.5. ${data.territorio ? `A parceria atuará no seguinte território: ${data.territorio}.` : 'A parceria poderá atuar em todo território nacional.'}

CLÁUSULA SEGUNDA - DAS CONTRIBUIÇÕES DOS PARCEIROS
2.1. PARCEIRO 1 contribuirá com: ${data.contribuicao_parceiro1}.

2.2. PARCEIRO 2 contribuirá com: ${data.contribuicao_parceiro2}.

2.3. As contribuições acima especificadas são essenciais e indispensáveis para o sucesso da parceria.

2.4. Cada parceiro se compromete a disponibilizar suas contribuições de forma tempestiva e adequada.

${data.investimento_inicial ? `
2.5. O investimento inicial total estimado para implementação da parceria é de R$ ${data.investimento_inicial}, que será dividido conforme os percentuais de participação estabelecidos neste contrato.` : ''}

2.6. Contribuições adicionais não previstas neste contrato dependerão de aprovação expressa de ambos os parceiros.

2.7. O não cumprimento das obrigações de contribuição constitui inadimplemento contratual passível de rescisão.

CLÁUSULA TERCEIRA - DA PARTICIPAÇÃO E DIVISÃO DE RESULTADOS
3.1. A participação de cada parceiro nos resultados da parceria será:
- PARCEIRO 1: ${data.percentual_parceiro1}% (${data.percentual_parceiro1_extenso || 'percentual por extenso'})
- PARCEIRO 2: ${data.percentual_parceiro2}% (${data.percentual_parceiro2_extenso || 'percentual por extenso'})

3.2. Consideram-se resultados da parceria:
a) Lucros, receitas e ganhos de capital;
b) Propriedade intelectual desenvolvida;
c) Carteira de clientes conquistados;
d) Ativos e recursos adquiridos.

3.3. A divisão de resultados ocorrerá ${data.periodicidade_distribuicao || 'conforme acordo entre os parceiros'}.

3.4. Os resultados apurados serão distribuídos após dedução de:
a) Custos operacionais da parceria;
b) Investimentos necessários ao negócio;
c) Reserva para contingências (mínimo 10%);
d) Tributos e encargos aplicáveis.

3.5. A distribuição de resultados não poderá comprometer a capacidade operacional da parceria.

3.6. Havendo prejuízos, estes serão divididos na mesma proporção da participação nos resultados.

CLÁUSULA QUARTA - DA GESTÃO E ADMINISTRAÇÃO
4.1. A gestão da parceria será: ${data.tipo_gestao}.

4.2. Decisões estratégicas que afetam substancialmente a parceria requerem aprovação unânime dos parceiros, incluindo:
a) Alteração do objeto ou finalidade da parceria;
b) Admissão de novos parceiros;
c) Investimentos superiores a R$ ${data.limite_investimento || '10.000,00'};
d) Contratação de financiamentos ou assunção de dívidas;
e) Alienação de ativos relevantes;
f) Alteração dos percentuais de participação;
g) Rescisão ou suspensão da parceria.

4.3. Decisões operacionais do dia a dia podem ser tomadas individualmente, dentro dos limites estabelecidos.

4.4. Os parceiros se reunirão ${data.periodicidade_reunioes || 'mensalmente'} para:
a) Avaliar o desempenho da parceria;
b) Planejar ações futuras;
c) Deliberar sobre questões pendentes;
d) Aprovar investimentos e despesas.

4.5. Das reuniões serão lavradas atas, assinadas por todos os presentes.

4.6. Cada parceiro tem direito a voto proporcional à sua participação nos resultados.

4.7. Em caso de empate nas deliberações, prevalecerá a decisão que mantém o status quo, salvo acordo posterior.

CLÁUSULA QUINTA - DOS CUSTOS E DESPESAS OPERACIONAIS
5.1. Os custos operacionais da parceria serão divididos: ${data.divisao_custos}.

5.2. Consideram-se custos operacionais:
a) Despesas administrativas e operacionais;
b) Investimentos em infraestrutura e equipamentos;
c) Custos com pessoal, quando aplicável;
d) Despesas com marketing e publicidade;
e) Tributos, taxas e contribuições;
f) Seguros e garantias necessárias;
g) Honorários profissionais (contábeis, jurídicos, técnicos).

5.3. Cada parceiro deverá arcar com suas próprias despesas estruturais (sede, pessoal próprio, etc.), salvo acordo expresso.

5.4. Despesas extraordinárias ou não previstas dependerão de aprovação prévia de ambos os parceiros.

5.5. Os parceiros manterão controles financeiros e contábeis transparentes da parceria.

5.6. Trimestralmente, os parceiros apresentarão relatório de custos e investimentos realizados.

CLÁUSULA SEXTA - DO PRAZO E RENOVAÇÃO
6.1. O prazo de duração da parceria é de ${data.prazo_parceria}, com início em ${data.data_inicio ? formatDateToBrazilian(String(data.data_inicio)) : getCurrentDateBrazilian()}.

6.2. ${data.renovacao_automatica === 'Sim' ? 'A parceria será automaticamente renovada por iguais períodos, salvo manifestação contrária de qualquer parceiro com antecedência mínima de 90 (noventa) dias.' : 'Ao término do prazo, a parceria será extinta, salvo renovação expressa mediante aditivo contratual.'}

6.3. A renovação da parceria poderá incluir revisão de termos, percentuais e condições.

6.4. Durante o prazo da parceria, nenhum parceiro poderá retirar-se unilateralmente, salvo nas hipóteses de rescisão previstas neste contrato.

CLÁUSULA SÉTIMA - DA EXCLUSIVIDADE${data.exclusividade === 'Sim' ? `
7.1. A presente parceria é EXCLUSIVA na área de atuação, objeto e território definidos neste contrato.

7.2. Durante a vigência desta parceria, os parceiros se comprometem a:
a) Não estabelecer parcerias ou negócios similares com terceiros no mesmo ramo;
b) Não atuar individualmente em atividades que concorram com a parceria;
c) Encaminhar à parceria todas as oportunidades de negócio relacionadas ao objeto;
d) Não desviar clientes ou oportunidades da parceria.

7.3. A violação da exclusividade constitui inadimplemento grave, ensejando rescisão e indenização.

7.4. ${data.prazo_exclusividade_pos ? `A obrigação de exclusividade permanecerá por ${data.prazo_exclusividade_pos} após o término do contrato.` : 'A exclusividade cessa automaticamente com o término do contrato.'}` : `
7.1. A presente parceria é NÃO EXCLUSIVA.

7.2. Os parceiros mantêm liberdade para:
a) Estabelecer outras parcerias comerciais;
b) Desenvolver negócios próprios, mesmo em áreas similares;
c) Atender clientes individualmente.

7.3. Não obstante a não exclusividade:
a) Os parceiros devem respeitar os compromissos assumidos nesta parceria;
b) Informações e recursos compartilhados não podem ser usados em outras parcerias sem autorização;
c) Clientes prospecta...

[Content truncated. Use `lov-view` to read the complete file with different line ranges if needed.]

    'comodato': (data) => `
CONTRATO DE COMODATO (EMPRÉSTIMO GRATUITO)

Pelo presente instrumento particular de comodato, as partes abaixo qualificadas estabelecem as condições para empréstimo gratuito de bem:

QUALIFICAÇÃO DAS PARTES

COMODANTE: ${data.comodante_nome}, ${data.comodante_nacionalidade || 'brasileiro(a)'}, ${data.comodante_estado_civil}, ${data.comodante_profissao || 'profissional'}, portador(a) do CPF nº ${data.comodante_cpf} e RG nº ${data.comodante_rg || '_____________'}, residente na ${data.comodante_endereco}.

COMODATÁRIO: ${data.comodatario_nome}, ${data.comodatario_nacionalidade || 'brasileiro(a)'}, ${data.comodatario_estado_civil}, ${data.comodatario_profissao || 'profissional'}, portador(a) do CPF nº ${data.comodatario_cpf} e RG nº ${data.comodatario_rg || '_____________'}, residente na ${data.comodatario_endereco}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O COMODANTE empresta gratuitamente ao COMODATÁRIO o seguinte bem: ${data.bem_descricao}.

1.2. O bem encontra-se em perfeitas condições de uso e funcionamento.

1.3. Estado de conservação atual: ${data.estado_conservacao || 'bom estado de conservação'}.

CLÁUSULA SEGUNDA - DA FINALIDADE
2.1. O bem destina-se exclusivamente ao seguinte uso: ${data.finalidade_uso}.

2.2. É vedado o uso do bem para finalidades diversas das especificadas.

2.3. É proibida a cessão ou subempréstimo sem autorização expressa do COMODANTE.

CLÁUSULA TERCEIRA - DO PRAZO
3.1. ${data.prazo_determinado === 'Sim' ? `O prazo do comodato é de ${data.prazo_uso}, com início em ${data.data_inicio || '___/___/____'} e término em ${data.data_fim || '___/___/____'}.` : 'O comodato é por prazo indeterminado.'}

3.2. ${data.prazo_determinado === 'Não' ? 'O COMODANTE poderá solicitar a restituição do bem a qualquer tempo, mediante aviso prévio de 30 (trinta) dias.' : 'Findo o prazo, o bem deverá ser restituído imediatamente.'}

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DO COMODATÁRIO
4.1. Conservar o bem como se seu fosse, zelando por sua integridade;
4.2. Usar o bem apenas para a finalidade especificada;
4.3. Não modificar, alterar ou danificar o bem;
4.4. Restituir o bem nas mesmas condições em que o recebeu;
4.5. Comunicar imediatamente qualquer dano ou problema;
4.6. Arcar com despesas ordinárias de manutenção e conservação;
4.7. Não dar o bem em garantia ou penhorá-lo.

CLÁUSULA QUINTA - DAS OBRIGAÇÕES DO COMODANTE
5.1. Entregar o bem em perfeitas condições de uso;
5.2. Garantir que o bem está livre de vícios ocultos;
5.3. Não perturbar o uso regular do bem pelo COMODATÁRIO;
5.4. Arcar com reparos extraordinários necessários à conservação.

CLÁUSULA SEXTA - DAS DESPESAS
6.1. São de responsabilidade do COMODATÁRIO:
a) Despesas ordinárias de uso e conservação;
b) Seguros, se aplicável;
c) Tributos incidentes sobre o uso do bem.

6.2. São de responsabilidade do COMODANTE:
a) Reparos estruturais e extraordinários;
b) Vícios ocultos preexistentes.

CLÁUSULA SÉTIMA - DA RESTITUIÇÃO
7.1. O bem deverá ser restituído:
a) No término do prazo estipulado;
b) Quando solicitado pelo COMODANTE, se prazo indeterminado;
c) Se o COMODATÁRIO descumprir qualquer obrigação contratual.

7.2. A restituição deve ocorrer no mesmo local onde o bem foi entregue.

7.3. O COMODATÁRIO responde pela deterioração ou perda do bem, salvo se decorrente de caso fortuito ou força maior.

CLÁUSULA OITAVA - DAS PENALIDADES
8.1. O uso indevido do bem ensejará multa de R$ ${data.multa_uso_indevido || '1.000,00'} e restituição imediata.

8.2. A não restituição no prazo devido implicará:
a) Multa de R$ ${data.multa_nao_restituicao || '100,00'} por dia de atraso;
b) Pagamento de aluguel pelo uso indevido;
c) Indenização por perdas e danos.

8.3. Em caso de perda ou dano, o COMODATÁRIO indenizará o valor atual do bem.

CLÁUSULA NONA - DA RESCISÃO
9.1. O contrato será rescindido automaticamente:
a) Pelo término do prazo, se determinado;
b) Pela morte de qualquer das partes;
c) Por inadimplemento de qualquer obrigação;
d) Por insolvência ou falência do COMODATÁRIO.

9.2. A rescisão não exime o COMODATÁRIO das obrigações vencidas.

CLÁUSULA DÉCIMA - DAS DISPOSIÇÕES GERAIS
10.1. Este contrato é gratuito, não gerando qualquer despesa para o COMODANTE.

10.2. O comodato não se presume, devendo ser provado por escrito.

10.3. Alterações devem ser feitas por escrito e com concordância de ambas as partes.

CLÁUSULA DÉCIMA PRIMEIRA - DO FORO
11.1. Fica eleito o foro da comarca de ${data.foro || 'domicílio do COMODANTE'} para dirimir questões oriundas deste contrato.

E por estarem de acordo, firmam o presente contrato em duas vias de igual teor.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.comodante_nome}
COMODANTE
CPF: ${data.comodante_cpf}

_____________________________
${data.comodatario_nome}
COMODATÁRIO
CPF: ${data.comodatario_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'emprestimo': (data) => `
CONTRATO PARTICULAR DE EMPRÉSTIMO

Pelo presente instrumento particular de contrato de empréstimo, de um lado como CREDOR, e de outro como DEVEDOR, as partes qualificadas estabelecem as condições seguintes:

QUALIFICAÇÃO DAS PARTES

CREDOR: ${data.credor_nome}, ${data.credor_nacionalidade || 'brasileiro(a)'}, ${data.credor_estado_civil}, ${data.credor_profissao || 'profissional'}, portador(a) do CPF nº ${data.credor_cpf} e RG nº ${data.credor_rg || '_____________'}, residente na ${data.credor_endereco}, CEP ${data.credor_cep || '_____________'}.

DEVEDOR: ${data.devedor_nome}, ${data.devedor_nacionalidade || 'brasileiro(a)'}, ${data.devedor_estado_civil}, ${data.devedor_profissao || 'profissional'}, portador(a) do CPF nº ${data.devedor_cpf} e RG nº ${data.devedor_rg || '_____________'}, residente na ${data.devedor_endereco}, CEP ${data.devedor_cep || '_____________'}.

${data.avalista_nome ? `
AVALISTA: ${data.avalista_nome}, ${data.avalista_nacionalidade || 'brasileiro(a)'}, ${data.avalista_estado_civil}, ${data.avalista_profissao || 'profissional'}, portador(a) do CPF nº ${data.avalista_cpf} e RG nº ${data.avalista_rg || '_____________'}, residente na ${data.avalista_endereco}.` : ''}

CLÁUSULA PRIMEIRA - DO EMPRÉSTIMO
1.1. O CREDOR empresta ao DEVEDOR, que aceita, a quantia líquida e certa de R$ ${data.valor_emprestimo} (${data.valor_extenso || 'valor por extenso'}).

1.2. O empréstimo será entregue na data da assinatura deste contrato, mediante ${data.forma_entrega || 'transferência bancária'}.

1.3. O DEVEDOR declara ter recebido a referida quantia, dando plena e geral quitação.

CLÁUSULA SEGUNDA - DA FINALIDADE
2.1. O empréstimo destina-se a: ${data.finalidade_emprestimo || 'livre aplicação pelo DEVEDOR'}.

2.2. O DEVEDOR se compromete a aplicar os recursos exclusivamente na finalidade declarada.

${data.juros && parseFloat(String(data.juros)) > 0 ? `
CLÁUSULA TERCEIRA - DOS JUROS E ENCARGOS
3.1. Sobre o valor emprestado incidirão juros remuneratórios de ${data.juros}% ao ${data.periodicidade_juros || 'mês'}.

3.2. Os juros são calculados de forma ${data.tipo_juros || 'simples'} sobre o saldo devedor.

3.3. O valor total a ser restituído, incluindo juros, é de R$ ${data.valor_total || 'a calcular'}.` : `
CLÁUSULA TERCEIRA - DA GRATUIDADE
3.1. O presente empréstimo é concedido a título gratuito, sem incidência de juros.

3.2. O valor a ser restituído é exatamente o valor emprestado.`}

CLÁUSULA QUARTA - DO PAGAMENTO
4.1. O pagamento será efetuado da seguinte forma: ${data.forma_pagamento}.

4.2. ${data.data_vencimento ? `Data de vencimento: ${data.data_vencimento}.` : `Prazo para pagamento: ${data.prazo_pagamento}.`}

4.3. O pagamento deverá ser efetuado mediante ${data.meio_pagamento || 'depósito bancário, PIX ou transferência'} na conta indicada pelo CREDOR.

4.4. Caso o pagamento seja feito em parcelas, estas terão vencimento todo dia ${data.dia_vencimento || '10'} de cada mês.

CLÁUSULA QUINTA - DA MORA E INADIMPLEMENTO
5.1. Constitui-se em mora o DEVEDOR que não efetuar o pagamento na data aprazada.

5.2. Em caso de atraso no pagamento, serão aplicados:
a) Multa moratória de ${data.multa_atraso || '2'}% sobre o valor em atraso;
b) Juros de mora de ${data.juros_mora || '1'}% ao mês;
c) Correção monetária pelo IPCA ou índice que o substitua;
d) Honorários advocatícios de 20% sobre o valor da dívida.

5.3. O não pagamento de qualquer parcela na data devida importará no vencimento antecipado de toda a dívida.

CLÁUSULA SEXTA - DAS GARANTIAS
${data.tipo_garantia === 'Aval' && data.avalista_nome ? `6.1. ${data.avalista_nome} intervém no presente contrato como AVALISTA, responsabilizando-se solidariamente pelo pagamento da dívida.` : ''}
${data.tipo_garantia === 'Bem' ? `6.1. Fica dado em garantia o seguinte bem: ${data.bem_garantia}.` : ''}
${data.tipo_garantia === 'Nenhuma' || !data.tipo_garantia ? `6.1. O presente empréstimo é concedido sem garantias específicas, confiando-se na idoneidade do DEVEDOR.` : ''}

CLÁUSULA SÉTIMA - DAS OBRIGAÇÕES DO DEVEDOR
7.1. Pagar pontualmente o empréstimo nas condições estabelecidas;
7.2. Comunicar imediatamente qualquer alteração em sua situação financeira;
7.3. Manter atualizados seus dados pessoais e de contato;
7.4. Não contrair outras dívidas que comprometam sua capacidade de pagamento;
7.5. Aplicar os recursos na finalidade declarada.

CLÁUSULA OITAVA - DAS OBRIGAÇÕES DO CREDOR
8.1. Entregar o valor emprestado na forma e prazo estabelecidos;
8.2. Fornecer recibo de pagamento das parcelas quitadas;
8.3. Emitir carta de quitação ao final do pagamento.

CLÁUSULA NONA - DA CESSÃO DE CRÉDITO
9.1. O CREDOR poderá ceder seus direitos creditórios a terceiros, mediante simples notificação ao DEVEDOR.

9.2. A cessão não altera as condições contratuais estabelecidas.

CLÁUSULA DÉCIMA - DA ANTECIPAÇÃO
10.1. O DEVEDOR poderá antecipar o pagamento total ou parcial, com desconto proporcional dos juros futuros.

10.2. A antecipação deve ser comunicada com ${data.aviso_antecipacao || '10'} dias de antecedência.

CLÁUSULA DÉCIMA PRIMEIRA - DA RESCISÃO
11.1. O contrato será rescindido automaticamente:
a) Pelo pagamento integral da dívida;
b) Por falência ou insolvência civil do DEVEDOR;
c) Por morte de qualquer das partes, transmitindo-se a obrigação aos herdeiros.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. Este contrato obriga as partes e seus sucessores a qualquer título.

12.2. Alterações devem ser feitas por escrito e com concordância de ambas as partes.

12.3. A tolerância no cumprimento de qualquer obrigação não representa novação ou renúncia.

12.4. Se qualquer cláusula for considerada inválida, as demais permanecerão em vigor.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. Fica eleito o foro da comarca de ${data.foro || 'domicílio do DEVEDOR'} para dirimir questões oriundas deste contrato, renunciando as partes a qualquer outro, por mais privilegiado que seja.

E por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor, na presença de duas testemunhas.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.credor_nome}
CREDOR
CPF: ${data.credor_cpf}

_____________________________
${data.devedor_nome}
DEVEDOR
CPF: ${data.devedor_cpf}

${data.avalista_nome ? `_____________________________
${data.avalista_nome}
AVALISTA
CPF: ${data.avalista_cpf}` : ''}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

    'doacao': (data) => `
CONTRATO PÚBLICO DE DOAÇÃO

Pelo presente instrumento particular de doação, de um lado como DOADOR, e de outro como DONATÁRIO, as partes qualificadas estabelecem as condições seguintes:

QUALIFICAÇÃO DAS PARTES

DOADOR: ${data.doador_nome}, ${data.doador_nacionalidade || 'brasileiro(a)'}, ${data.doador_estado_civil}, ${data.doador_profissao || 'profissional'}, portador(a) do CPF nº ${data.doador_cpf} e RG nº ${data.doador_rg || '_____________'}, residente na ${data.doador_endereco}.

DONATÁRIO: ${data.donatario_nome}, ${data.donatario_nacionalidade || 'brasileiro(a)'}, ${data.donatario_estado_civil}, ${data.donatario_profissao || 'profissional'}, portador(a) do CPF nº ${data.donatario_cpf} e RG nº ${data.donatario_rg || '_____________'}, residente na ${data.donatario_endereco}.

CLÁUSULA PRIMEIRA - DA DOAÇÃO
1.1. O DOADOR, por mera liberalidade e sem qualquer constrangimento, doa ao DONATÁRIO, que aceita, o seguinte bem: ${data.bem_descricao}.

1.2. O bem doado encontra-se livre e desembaraçado de quaisquer ônus, gravames ou impedimentos legais.

1.3. Valor estimado do bem doado: R$ ${data.valor_estimado || 'valor a definir'}.

CLÁUSULA SEGUNDA - DA ACEITAÇÃO
2.1. O DONATÁRIO aceita expressamente a presente doação em todos os seus termos e condições.

2.2. A aceitação é pura e simples, sem quaisquer restrições ou condições.

${data.tipo_doacao === 'Condicional' ? `
CLÁUSULA TERCEIRA - DAS CONDIÇÕES
3.1. A presente doação está sujeita às seguintes condições: ${data.condicoes_doacao}.

3.2. O descumprimento das condições ensejará a revogação da doação por ingratidão.` : ''}

${data.reserva_usufruto === 'Sim' ? `
CLÁUSULA QUARTA - DA RESERVA DE USUFRUTO
4.1. O DOADOR reserva para si e seu cônjuge, se houver, o usufruto vitalício do bem doado.

4.2. O usufruto compreende o direito de usar, gozar e perceber os frutos do bem.

4.3. Com a morte do usufrutuário, consolida-se a propriedade plena em favor do DONATÁRIO.` : ''}

CLÁUSULA QUINTA - DAS DISPOSIÇÕES GERAIS
5.1. Esta doação é feita de forma ${data.tipo_doacao || 'pura e simples'}, ${data.encargos ? `com os seguintes encargos: ${data.encargos}` : 'sem encargos'}.

5.2. A propriedade e posse do bem transferem-se ao DONATÁRIO na data da assinatura deste contrato.

5.3. Todas as despesas com a transferência correm por conta do ${data.responsavel_despesas || 'DONATÁRIO'}.

CLÁUSULA SEXTA - DA REVOGAÇÃO
6.1. A doação poderá ser revogada por:
a) Ingratidão do donatário;
b) Inexecução dos encargos, se houver;
c) Superveniência de filhos ao doador, se este não os tinha quando fez a doação.

CLÁUSULA SÉTIMA - DO FORO
7.1. Fica eleito o foro da comarca de ${data.foro || 'domicílio do DOADOR'}.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.

_____________________________
${data.doador_nome}
DOADOR
CPF: ${data.doador_cpf}

_____________________________
${data.donatario_nome}
DONATÁRIO
CPF: ${data.donatario_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `
  };

  return templates[contractId]?.(data) || 'Modelo de contrato não encontrado.';
};