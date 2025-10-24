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

CONTRATANTE: ${data.contratante_nome}, inscrito(a) no ${String(data.contratante_documento).length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.contratante_documento}${data.contratante_rg ? `, RG nº ${data.contratante_rg}` : ''}, com endereço na ${data.contratante_endereco}, nº ${data.contratante_numero}, Bairro: ${data.contratante_bairro}, ${data.contratante_cidade}, ${data.contratante_estado}, CEP ${data.contratante_cep}, e-mail: ${data.contratante_email}, WhatsApp: ${data.contratante_whatsapp}.

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
${String(data.contratante_documento).length > 14 ? 'CNPJ' : 'CPF'}: ${data.contratante_documento}


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

PARCEIRO 1: ${data.parceiro1_nome}, inscrito(a) no ${String(data.parceiro1_documento).length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.parceiro1_documento}${data.parceiro1_rg ? `, RG nº ${data.parceiro1_rg}` : ''}, com sede/endereço na ${data.parceiro1_endereco}, nº ${data.parceiro1_numero}, Bairro: ${data.parceiro1_bairro}, ${data.parceiro1_cidade}, ${data.parceiro1_estado}, CEP ${data.parceiro1_cep}, e-mail: ${data.parceiro1_email}, WhatsApp: ${data.parceiro1_whatsapp}.

PARCEIRO 2: ${data.parceiro2_nome}, inscrito(a) no ${String(data.parceiro2_documento).length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.parceiro2_documento}${data.parceiro2_rg ? `, RG nº ${data.parceiro2_rg}` : ''}, com sede/endereço na ${data.parceiro2_endereco}, nº ${data.parceiro2_numero}, Bairro: ${data.parceiro2_bairro}, ${data.parceiro2_cidade}, ${data.parceiro2_estado}, CEP ${data.parceiro2_cep}, e-mail: ${data.parceiro2_email}, WhatsApp: ${data.parceiro2_whatsapp}.

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
c) Clientes prospectados conjuntamente pertencem à parceria.`}

${data.confidencialidade === 'Sim' ? `
CLÁUSULA OITAVA - DA CONFIDENCIALIDADE
8.1. As partes se comprometem a manter absoluto sigilo sobre todas as informações confidenciais trocadas durante a parceria.

8.2. Consideram-se confidenciais: dados comerciais, estratégias, clientes, fornecedores, processos, tecnologias e qualquer informação não pública.

8.3. A obrigação de confidencialidade permanece por 5 (cinco) anos após o término da parceria.

8.4. A violação da confidencialidade ensejará multa de R$ ${data.multa_confidencialidade || '50.000,00'} e indenização por perdas e danos.` : ''}

${data.nao_concorrencia === 'Sim' ? `
CLÁUSULA NONA - DA NÃO CONCORRÊNCIA
9.1. Durante a vigência da parceria e por ${data.prazo_nao_concorrencia || '12 meses'} após seu término, os parceiros se obrigam a não:
a) Atuar direta ou indiretamente em atividades concorrentes;
b) Solicitar ou aliciar clientes da parceria;
c) Contratar funcionários ou colaboradores da outra parte;
d) Divulgar ou usar informações obtidas na parceria.

9.2. A violação desta cláusula ensejará multa de R$ ${data.multa_nao_concorrencia || '100.000,00'}.` : ''}

CLÁUSULA DÉCIMA - DA RESCISÃO
10.1. A parceria poderá ser rescindida nas seguintes hipóteses:
a) Por mútuo acordo entre os parceiros;
b) Por inadimplemento de qualquer obrigação contratual;
c) Por impossibilidade superveniente de continuação dos negócios;
d) Por falência, recuperação judicial ou insolvência de qualquer parceiro;
e) Unilateralmente, mediante aviso prévio de ${data.aviso_previo || '90'} dias.

10.2. A rescisão por inadimplemento independe de notificação, operando-se de pleno direito.

10.3. A parte que der causa à rescisão pagará multa de ${data.multa_rescisao || '30'}% sobre o valor médio mensal movimentado pela parceria nos últimos 6 (seis) meses.

10.4. Em caso de rescisão:
a) Os resultados até a data da rescisão serão apurados e divididos proporcionalmente;
b) Cada parceiro manterá direitos sobre clientes por ele originalmente trazidos;
c) Propriedade intelectual desenvolvida será compartilhada ou dividida conforme contribuição;
d) Equipamentos e recursos serão devolvidos aos respectivos proprietários.

CLÁUSULA DÉCIMA PRIMEIRA - DA RESOLUÇÃO DE CONFLITOS
11.1. As controvérsias serão preferencialmente resolvidas por negociação direta entre os parceiros.

11.2. Não sendo possível acordo, as partes poderão submeter a questão à:
a) Mediação ou conciliação extrajudicial;
b) Arbitragem, conforme Lei nº 9.307/96;
c) Poder Judiciário.

11.3. Durante a resolução de conflitos, as partes manterão as operações normais da parceria, salvo impossibilidade manifesta.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. Este contrato representa o acordo integral entre as partes sobre a parceria.

12.2. Alterações devem ser formalizadas por escrito e assinadas por ambos os parceiros.

12.3. A invalidade de qualquer cláusula não afeta as demais disposições.

12.4. Este contrato obriga as partes, seus herdeiros e sucessores.

12.5. Todas as comunicações serão feitas por escrito para os endereços constantes na qualificação.

12.6. As partes declaram ter plena capacidade jurídica para celebrar este contrato.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. Fica eleito o foro da comarca de ${data.foro || 'sede do PARCEIRO 1'} para dirimir questões oriundas deste contrato, com renúncia a qualquer outro.

E, por estarem justos e acordados, firmam o presente contrato em 2 (duas) vias de igual teor, na presença de testemunhas.

${data.local_assinatura || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________
${data.parceiro1_nome}
PARCEIRO 1
${String(data.parceiro1_documento).length > 14 ? 'CNPJ' : 'CPF'}: ${data.parceiro1_documento}


_____________________________
${data.parceiro2_nome}
PARCEIRO 2
${String(data.parceiro2_documento).length > 14 ? 'CNPJ' : 'CPF'}: ${data.parceiro2_documento}


TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

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

    'compra-venda-veiculo': (data) => `
CONTRATO PARTICULAR DE COMPRA E VENDA DE VEÍCULO AUTOMOTOR

Pelo presente instrumento particular de contrato de compra e venda de veículo automotor, de um lado como VENDEDOR, e de outro como COMPRADOR, as partes a seguir qualificadas têm entre si justo e acordado celebrar o presente contrato, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

VENDEDOR: ${data.vendedor_nome}, ${data.vendedor_nacionalidade || 'brasileiro(a)'}, ${data.vendedor_estado_civil}, ${data.vendedor_profissao || 'profissional'}, portador(a) do CPF nº ${data.vendedor_cpf} e RG nº ${data.vendedor_rg}, residente e domiciliado(a) na ${data.vendedor_endereco}, nº ${data.vendedor_numero}, Bairro: ${data.vendedor_bairro}, ${data.vendedor_cidade}/${data.vendedor_estado}, CEP: ${data.vendedor_cep}, e-mail: ${data.vendedor_email}, WhatsApp: ${data.vendedor_whatsapp}.

COMPRADOR: ${data.comprador_nome}, ${data.comprador_nacionalidade || 'brasileiro(a)'}, ${data.comprador_estado_civil}, ${data.comprador_profissao || 'profissional'}, portador(a) do CPF nº ${data.comprador_cpf} e RG nº ${data.comprador_rg}, residente e domiciliado(a) na ${data.comprador_endereco}, nº ${data.comprador_numero}, Bairro: ${data.comprador_bairro}, ${data.comprador_cidade}/${data.comprador_estado}, CEP: ${data.comprador_cep}, e-mail: ${data.comprador_email}, WhatsApp: ${data.comprador_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O VENDEDOR vende ao COMPRADOR, de forma irrevogável e irretratável, com todos os direitos e responsabilidades que lhe são inerentes, o veículo automotor abaixo especificado:

ESPECIFICAÇÕES DO VEÍCULO:
• Tipo: ${data.veiculo_tipo}
• Marca/Modelo: ${data.veiculo_marca} ${data.veiculo_modelo}
• Ano de Fabricação: ${data.veiculo_ano_fabricacao}
• Ano do Modelo: ${data.veiculo_ano_modelo}
• Cor: ${data.veiculo_cor}
• Placa: ${data.veiculo_placa}
• Chassi: ${data.veiculo_chassi}
• RENAVAM: ${data.veiculo_renavam}
• Combustível: ${data.veiculo_combustivel}
• Quilometragem: ${String(data.veiculo_km).length > 0 ? data.veiculo_km : '0'} km

1.2. O veículo objeto deste contrato encontra-se em perfeitas condições de uso e funcionamento, no estado em que se encontra (no estado), livre e desembaraçado de quaisquer ônus, gravames, penhoras, alienações fiduciárias, restrições judiciais ou administrativas, ou outros direitos de terceiros.

1.3. ${data.observacoes && String(data.observacoes).length > 0 ? `Observações adicionais: ${data.observacoes}` : 'Não há observações adicionais sobre o veículo.'}

CLÁUSULA SEGUNDA - DO PREÇO E FORMA DE PAGAMENTO
2.1. O preço total e definitivo da venda é de R$ ${data.valor_venda} (${data.valor_extenso || 'valor por extenso'}), que será pago pelo COMPRADOR da seguinte forma: ${data.forma_pagamento}.

2.2. O preço foi livremente estipulado e aceito pelas partes, considerando as condições atuais do veículo, do mercado e as características específicas do bem.

2.3. Caso haja parcelas a vencer, estas deverão ser pagas nas datas estipuladas, incidindo sobre o valor em atraso correção monetária pelo IPCA, juros de mora de 1% (um por cento) ao mês e multa moratória de 2% (dois por cento).

CLÁUSULA TERCEIRA - DA SITUAÇÃO FISCAL E DOCUMENTAL DO VEÍCULO
3.1. O VENDEDOR declara que o veículo possui a seguinte situação fiscal:
a) IPVA: ${data.ipva_quitado === 'Sim' ? 'QUITADO até o exercício corrente' : 'PENDENTE - O VENDEDOR se responsabiliza pela quitação'};
b) Multas de Trânsito: ${data.multas_pendentes === 'Não' ? 'NÃO HÁ multas pendentes' : 'EXISTEM multas pendentes que serão quitadas pelo VENDEDOR'};
c) Licenciamento: Em dia e regular perante o DETRAN.

3.2. O VENDEDOR se compromete a quitar todas as dívidas, multas e encargos incidentes sobre o veículo até a data da transferência, inclusive IPVA, multas de trânsito, taxas de licenciamento e seguro obrigatório (DPVAT).

3.3. Todas as despesas com a transferência de propriedade junto ao DETRAN, incluindo taxas, emolumentos e reconhecimento de firmas, serão de responsabilidade do ${data.responsavel_transferencia || 'COMPRADOR'}.

CLÁUSULA QUARTA - DA TRADIÇÃO E TRANSFERÊNCIA DE PROPRIEDADE
4.1. A posse e a propriedade do veículo transferem-se ao COMPRADOR no ato da assinatura deste contrato e mediante o pagamento integral ou da primeira parcela, conforme estipulado na cláusula segunda.

4.2. O VENDEDOR se compromete a entregar ao COMPRADOR, no ato da assinatura deste contrato, os seguintes documentos:
a) Certificado de Registro e Licenciamento do Veículo (CRLV) original e atualizado;
b) Documento Único de Transferência (DUT) devidamente preenchido e com firma reconhecida;
c) Comprovante de quitação do IPVA do exercício corrente;
d) Certificado de Registro de Veículo (CRV) original;
e) Nota fiscal de compra (se disponível);
f) Manual e chave reserva do veículo (se disponíveis);
g) Comprovante de quitação de eventuais multas.

4.3. O COMPRADOR terá o prazo de 30 (trinta) dias, contados da data da assinatura deste contrato, para realizar a transferência da propriedade do veículo junto ao DETRAN, sob pena de responder pelos danos decorrentes da omissão.

CLÁUSULA QUINTA - DAS GARANTIAS E DECLARAÇÕES DO VENDEDOR
5.1. O VENDEDOR declara e garante que:
a) É legítimo proprietário do veículo vendido, conforme consta no Certificado de Registro de Veículo;
b) Tem plenos poderes para realizar esta venda;
c) O veículo está livre de qualquer ônus, gravame, alienação fiduciária, arrendamento mercantil, reserva de domínio ou impedimento legal;
d) Não há ações judiciais, procedimentos administrativos ou investigações policiais pendentes que possam afetar o veículo;
e) O veículo não foi objeto de roubo, furto, sinistro com perda total, adulteração de chassi ou qualquer outra irregularidade;
f) Todos os dados e informações prestadas sobre o veículo são verdadeiros e completos;
g) O hodômetro do veículo não foi adulterado e a quilometragem informada corresponde à realidade.

5.2. O VENDEDOR responsabiliza-se pela evicção e responde pelos vícios ocultos nos termos dos artigos 441 a 457 do Código Civil Brasileiro (Lei nº 10.406/2002).

CLÁUSULA SEXTA - DAS OBRIGAÇÕES DO VENDEDOR
6.1. São obrigações do VENDEDOR:
a) Entregar o veículo livre, desembaraçado e em perfeito estado de funcionamento;
b) Transferir todos os documentos necessários para a regularização da propriedade;
c) Quitar todos os débitos incidentes sobre o veículo até a data da venda;
d) Prestar todas as informações verdadeiras sobre o histórico e condições do veículo;
e) Garantir a posse mansa e pacífica ao COMPRADOR;
f) Assinar o DUT com firma reconhecida e entregar o CRV original;
g) Comunicar a venda ao DETRAN através do formulário próprio, nos termos do art. 134 do Código de Trânsito Brasileiro.

CLÁUSULA SÉTIMA - DAS OBRIGAÇÕES DO COMPRADOR
7.1. São obrigações do COMPRADOR:
a) Pagar o preço nas condições estabelecidas neste contrato;
b) Receber o veículo no estado em que se encontra;
c) Realizar a transferência de propriedade junto ao DETRAN no prazo de 30 dias;
d) Arcar com todas as despesas, tributos e encargos posteriores à data da venda;
e) Assumir a responsabilidade civil e criminal por infrações de trânsito cometidas após a posse do veículo;
f) Manter o veículo devidamente licenciado e segurado.

CLÁUSULA OITAVA - DA RESPONSABILIDADE POR INFRAÇÕES DE TRÂNSITO
8.1. O COMPRADOR assume total responsabilidade por todas as infrações de trânsito, multas, pontuações na CNH e demais penalidades cometidas a partir da data de assinatura deste contrato.

8.2. O VENDEDOR não será responsabilizado por quaisquer infrações, multas ou pontuações decorrentes do uso do veículo pelo COMPRADOR após a assinatura deste instrumento.

8.3. O VENDEDOR se compromete a realizar a Comunicação de Venda ao DETRAN, nos termos do artigo 134 do Código de Trânsito Brasileiro, no prazo máximo de 10 (dez) dias úteis.

CLÁUSULA NONA - DA GARANTIA LEGAL
9.1. O veículo é vendido no estado em que se encontra, tendo o COMPRADOR pleno conhecimento de suas condições gerais, mecânicas e estéticas.

9.2. Não obstante a venda no estado, o VENDEDOR responde pelos vícios redibitórios ocultos nos termos dos artigos 441 a 446 do Código Civil, pelo prazo decadencial de 30 (trinta) dias para bens móveis.

9.3. Considera-se vício redibitório aquele que torna o veículo impróprio ao uso a que se destina ou lhe diminui consideravelmente o valor, e que não era perceptível no momento da venda.

CLÁUSULA DÉCIMA - DO INADIMPLEMENTO E PENALIDADES
10.1. O não cumprimento de qualquer obrigação contratual ensejará a aplicação de multa de 10% (dez por cento) sobre o valor do contrato, sem prejuízo das perdas e danos e da possibilidade de rescisão contratual.

10.2. Em caso de mora no pagamento de qualquer parcela, será aplicada multa de 2% (dois por cento) sobre o valor em atraso, juros moratórios de 1% (um por cento) ao mês e correção monetária pelo IPCA.

10.3. O atraso superior a 30 (trinta) dias no pagamento de qualquer parcela facultará ao VENDEDOR considerar rescindido o contrato, com a reintegração imediata da posse do veículo, sem prejuízo da retenção de 20% do valor pago a título de perdas e danos e multa contratual.

CLÁUSULA DÉCIMA PRIMEIRA - DA RESCISÃO
11.1. O presente contrato poderá ser rescindido nas seguintes hipóteses:
a) Inadimplemento de qualquer das partes;
b) Descumprimento de cláusula contratual;
c) Descoberta de vício oculto insanável;
d) Falsa declaração ou omissão de informação relevante sobre o veículo;
e) Existência de ônus, gravame ou restrição não informada pelo VENDEDOR.

11.2. A parte inadimplente ou que der causa à rescisão responderá por perdas e danos causados à parte inocente, incluindo lucros cessantes e danos morais, se houver.

CLÁUSULA DÉCIMA SEGUNDA - DA EVICÇÃO
12.1. O VENDEDOR garante ao COMPRADOR a legitimidade da venda e a plena propriedade do veículo.

12.2. Na hipótese de evicção, o VENDEDOR responderá pela restituição integral do preço pago, perdas e danos e honorários advocatícios, nos termos dos artigos 447 a 457 do Código Civil.

CLÁUSULA DÉCIMA TERCEIRA - DAS DISPOSIÇÕES GERAIS
13.1. Este contrato é celebrado em caráter irrevogável e irretratável, obrigando as partes e seus sucessores.

13.2. As partes declaram que não houve erro, dolo, coação, simulação ou fraude na celebração deste contrato.

13.3. Qualquer alteração ou aditamento a este contrato deverá ser feito por escrito e assinado por ambas as partes.

13.4. A tolerância de uma parte quanto ao descumprimento de cláusula contratual pela outra não constituirá novação nem renúncia de direitos.

13.5. Este contrato é regido pelas leis da República Federativa do Brasil, especialmente pelo Código Civil (Lei nº 10.406/2002) e pelo Código de Trânsito Brasileiro (Lei nº 9.503/1997).

CLÁUSULA DÉCIMA QUARTA - DO FORO
14.1. Fica eleito o foro da comarca de ${data.foro || data.vendedor_cidade || 'domicílio do VENDEDOR'} para dirimir quaisquer controvérsias oriundas deste contrato, com expressa renúncia a qualquer outro, por mais privilegiado que seja.

E por estarem assim justos e contratados, firmam o presente instrumento em 02 (duas) vias de igual teor e forma, na presença de 02 (duas) testemunhas, para que produza seus jurídicos e legais efeitos.

${data.local_assinatura || data.vendedor_cidade || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________________________
${data.vendedor_nome}
VENDEDOR
CPF: ${data.vendedor_cpf}
RG: ${data.vendedor_rg}


_____________________________________________
${data.comprador_nome}
COMPRADOR
CPF: ${data.comprador_cpf}
RG: ${data.comprador_rg}


TESTEMUNHAS:

1. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________

2. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________
    `,

    'doacao': (data) => `
CONTRATO PARTICULAR DE DOAÇÃO

Pelo presente instrumento particular de doação, de um lado como DOADOR, e de outro como DONATÁRIO, as partes a seguir qualificadas têm entre si justo e acordado celebrar o presente contrato de doação, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

DOADOR: ${data.doador_nome}, ${data.doador_nacionalidade || 'brasileiro(a)'}, ${data.doador_estado_civil}, ${data.doador_profissao || 'profissional'}, portador(a) do CPF nº ${data.doador_cpf} e RG nº ${data.doador_rg}, residente e domiciliado(a) na ${data.doador_endereco}, nº ${data.doador_numero}, Bairro: ${data.doador_bairro}, ${data.doador_cidade}/${data.doador_estado}, CEP: ${data.doador_cep}, e-mail: ${data.doador_email}, WhatsApp: ${data.doador_whatsapp}.

DONATÁRIO: ${data.donatario_nome}, ${data.donatario_nacionalidade || 'brasileiro(a)'}, ${data.donatario_estado_civil}, ${data.donatario_profissao || 'profissional'}, portador(a) do CPF nº ${data.donatario_cpf} e RG nº ${data.donatario_rg}, residente e domiciliado(a) na ${data.donatario_endereco}, nº ${data.donatario_numero}, Bairro: ${data.donatario_bairro}, ${data.donatario_cidade}/${data.donatario_estado}, CEP: ${data.donatario_cep}, e-mail: ${data.donatario_email}, WhatsApp: ${data.donatario_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO DA DOAÇÃO
1.1. O DOADOR, por mera liberalidade e sem qualquer constrangimento, em pleno gozo de suas faculdades mentais e no livre exercício de sua vontade, DOA ao DONATÁRIO, que aceita expressamente, o seguinte bem:

DESCRIÇÃO DO BEM:
• Tipo: ${data.bem_tipo}
• Descrição completa: ${data.bem_descricao}
• Valor estimado: R$ ${data.valor_estimado}

1.2. O bem doado encontra-se livre e desembaraçado de quaisquer ônus, gravames, penhoras, hipotecas, alienações, usufrutos ou impedimentos legais, sendo o DOADOR seu legítimo proprietário.

1.3. Fazem parte integrante da doação todos os acessórios, benfeitorias, frutos e melhoramentos incorporados ao bem principal.

CLÁUSULA SEGUNDA - DA NATUREZA E MODALIDADE DA DOAÇÃO
2.1. A presente doação é feita de forma ${data.tipo_doacao || 'pura e simples'}, nos termos dos artigos 538 a 564 do Código Civil Brasileiro (Lei nº 10.406/2002).

${data.tipo_doacao === 'Com Encargo' && data.encargos && String(data.encargos).length > 0 ? `
2.2. A doação está sujeita aos seguintes ENCARGOS que o DONATÁRIO se obriga a cumprir:
${data.encargos}

2.3. O descumprimento dos encargos estabelecidos ensejará a revogação da doação, nos termos do artigo 555 do Código Civil, devendo o DONATÁRIO restituir o bem doado ou seu valor, sem direito a indenização pelas benfeitorias realizadas.` : ''}

${data.tipo_doacao === 'Condicional' && data.condicoes && String(data.condicoes).length > 0 ? `
2.4. A presente doação está subordinada às seguintes CONDIÇÕES:
${data.condicoes}

2.5. O implemento das condições é essencial para a eficácia e validade da doação, sendo que seu descumprimento implicará na automática revogação do ato de liberalidade.` : ''}

CLÁUSULA TERCEIRA - DA ACEITAÇÃO
3.1. O DONATÁRIO, por este instrumento, aceita expressa, pura e simplesmente a presente doação em todos os seus termos e condições.

3.2. A aceitação pode ser feita pessoalmente pelo DONATÁRIO ou por meio de procurador com poderes especiais.

3.3. Declara o DONATÁRIO estar ciente de todas as cláusulas, condições e encargos estabelecidos neste contrato.

${data.reserva_usufruto === 'Sim' ? `
CLÁUSULA QUARTA - DA RESERVA DE USUFRUTO
4.1. O DOADOR RESERVA para si o USUFRUTO VITALÍCIO do bem doado, nos termos dos artigos 1.390 a 1.411 do Código Civil.

4.2. O usufruto vitalício compreende o direito do DOADOR de usar, gozar, administrar e perceber todos os frutos e rendimentos do bem doado, sem prejuízo de sua substância.

4.3. O DONATÁRIO, na condição de nu-proprietário, não poderá alienar, onerar ou dispor do bem sem expressa anuência do DOADOR usufrutuário.

4.4. As despesas ordinárias de conservação e os tributos incidentes sobre o bem serão de responsabilidade do DOADOR usufrutuário, nos termos do artigo 1.403 do Código Civil.

4.5. Com o falecimento do DOADOR usufrutuário, consolida-se automaticamente a propriedade plena em favor do DONATÁRIO, extinguindo-se o usufruto.

4.6. O usufruto é intransmissível e inalienável, extinguindo-se com a morte do usufrutuário.` : ''}

${data.clausula_reversao === 'Sim' ? `
CLÁUSULA QUINTA - DA CLÁUSULA DE REVERSÃO
5.1. Fica estipulada CLÁUSULA DE REVERSÃO, nos termos do artigo 547 do Código Civil, pela qual o bem doado reverterá ao patrimônio do DOADOR caso o DONATÁRIO faleça antes dele.

5.2. A reversão opera-se de pleno direito, independentemente de qualquer formalidade ou manifestação de vontade dos herdeiros do DONATÁRIO.

5.3. Esta cláusula não se estende aos herdeiros ou sucessores do DOADOR, extinguindo-se com sua morte.` : ''}

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'SEXTA' : 'QUARTA'} - DA TRADIÇÃO E TRANSFERÊNCIA
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '6' : '4'}.1. A propriedade ${data.reserva_usufruto === 'Sim' ? '(nua-propriedade)' : ''} do bem transfere-se ao DONATÁRIO na data da assinatura deste contrato, operando-se a tradição de forma ${data.bem_tipo === 'Imóvel' ? 'solene' : 'simbólica'}.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '6' : '4'}.2. ${data.reserva_usufruto === 'Sim' ? 'A posse direta permanece com o DOADOR usufrutuário, transferindo-se ao DONATÁRIO somente a nua-propriedade.' : 'A posse plena e definitiva do bem é transferida ao DONATÁRIO neste ato.'}

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '6' : '4'}.3. Todas as despesas com a transferência de propriedade, registros, emolumentos cartorários e tributos incidentes sobre a doação serão de responsabilidade do ${data.responsavel_despesas || 'DONATÁRIO'}.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'SÉTIMA' : 'QUINTA'} - DAS DECLARAÇÕES E GARANTIAS DO DOADOR
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '7' : '5'}.1. O DOADOR declara e garante que:
a) É legítimo proprietário e possuidor do bem doado;
b) Tem plenos poderes para realizar esta doação;
c) O bem está livre de qualquer ônus, gravame, penhora, hipoteca, alienação fiduciária ou impedimento legal;
d) Não há ações judiciais, procedimentos administrativos ou disputas pendentes que possam afetar o bem;
e) Todos os tributos e encargos incidentes sobre o bem estão quitados até a presente data;
f) Não está em processo de falência, recuperação judicial ou insolvência civil;
g) A doação não prejudica suas obrigações alimentares ou a legítima de herdeiros necessários.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '7' : '5'}.2. O DOADOR responsabiliza-se pela evicção, nos termos dos artigos 447 a 457 do Código Civil, garantindo ao DONATÁRIO a legitimidade da doação.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'OITAVA' : 'SEXTA'} - DAS OBRIGAÇÕES DO DONATÁRIO
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '8' : '6'}.1. São obrigações do DONATÁRIO:
a) Aceitar o bem no estado em que se encontra;
b) Cumprir rigorosamente os encargos e condições estabelecidos neste contrato, se houver;
c) Arcar com todas as despesas de transferência, registros e tributos incidentes sobre a doação;
d) ${data.reserva_usufruto === 'Sim' ? 'Respeitar o direito de usufruto do DOADOR;' : 'Zelar pela conservação e boa utilização do bem doado;'}
e) Promover as transferências e registros necessários junto aos órgãos competentes;
f) Não alienar, onerar ou dispor do bem em desacordo com as cláusulas deste contrato.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'NONA' : 'SÉTIMA'} - DA REVOGAÇÃO DA DOAÇÃO
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '9' : '7'}.1. A presente doação poderá ser REVOGADA nas seguintes hipóteses previstas nos artigos 555 a 564 do Código Civil:
a) Por INGRATIDÃO do DONATÁRIO, caso este:
   - Atente contra a vida do DOADOR ou cometa crime de homicídio doloso contra ele;
   - Cometa contra o DOADOR ofensa física;
   - Injurie gravemente ou calunie o DOADOR;
   - Recuse prestar alimentos ao DOADOR quando este necessitar.
b) Por INEXECUÇÃO DOS ENCARGOS, caso o DONATÁRIO deixe de cumprir os encargos estabelecidos neste contrato;
c) Por SUPERVENIÊNCIA DE FILHOS, caso o DOADOR não tivesse filhos ou descendentes quando fez a doação e posteriormente venha a tê-los.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '9' : '7'}.2. A revogação por ingratidão deve ser pleiteada pelo DOADOR no prazo decadencial de 01 (um) ano, contado da data em que o DOADOR teve conhecimento do fato.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '9' : '7'}.3. Revogada a doação, o DONATÁRIO deverá restituir o bem doado ou seu equivalente em dinheiro, descontadas as benfeitorias necessárias, nos termos do artigo 563 do Código Civil.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'DÉCIMA' : 'OITAVA'} - DA IRREVOGABILIDADE POR CONSENSO
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '10' : '8'}.1. Ressalvadas as hipóteses legais de revogação previstas na cláusula anterior, a presente doação é IRREVOGÁVEL e IRRETRATÁVEL, não podendo ser desfeita por arrependimento ou mudança de vontade do DOADOR.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '10' : '8'}.2. O DOADOR declara que pratica este ato de liberalidade de forma livre, consciente e espontânea, sem coação, erro, dolo ou qualquer vício de consentimento.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'DÉCIMA PRIMEIRA' : 'NONA'} - DA COLAÇÃO E LEGÍTIMA DOS HERDEIROS
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '11' : '9'}.1. Caso o DONATÁRIO seja herdeiro necessário do DOADOR (descendente, ascendente ou cônjuge), a presente doação será considerada como ADIANTAMENTO DA LEGÍTIMA, nos termos do artigo 544 do Código Civil.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '11' : '9'}.2. O valor do bem doado deverá ser COLACIONADO ao monte-mor por ocasião da abertura da sucessão do DOADOR, para fins de igualdade entre os herdeiros.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '11' : '9'}.3. O DOADOR declara que a presente doação não excede a parte disponível de seu patrimônio, respeitando a legítima dos herdeiros necessários (artigo 549 do Código Civil).

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'DÉCIMA SEGUNDA' : 'DÉCIMA'} - DOS TRIBUTOS
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '12' : '10'}.1. O DONATÁRIO é responsável pelo recolhimento do Imposto sobre Transmissão Causa Mortis e Doação (ITCMD) incidente sobre a doação, de acordo com a legislação estadual aplicável.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '12' : '10'}.2. Todas as demais despesas, taxas, emolumentos e tributos decorrentes da transferência e registro do bem são de responsabilidade do DONATÁRIO.

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'DÉCIMA TERCEIRA' : 'DÉCIMA PRIMEIRA'} - DAS DISPOSIÇÕES GERAIS
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '13' : '11'}.1. Este contrato é celebrado em caráter irrevogável e irretratável, obrigando as partes, seus herdeiros e sucessores.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '13' : '11'}.2. As partes declaram que não houve erro, dolo, coação, simulação, fraude ou qualquer vício de consentimento na celebração deste contrato.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '13' : '11'}.3. Qualquer alteração, aditamento ou distrato deste contrato deverá ser feito por escrito e assinado por ambas as partes.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '13' : '11'}.4. A tolerância de uma parte quanto ao descumprimento de cláusula contratual pela outra não constituirá novação nem renúncia de direitos.

${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '13' : '11'}.5. Este contrato é regido pelas leis da República Federativa do Brasil, especialmente pelo Código Civil (Lei nº 10.406/2002).

CLÁUSULA ${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? 'DÉCIMA QUARTA' : 'DÉCIMA SEGUNDA'} - DO FORO
${data.reserva_usufruto === 'Sim' || data.clausula_reversao === 'Sim' ? '14' : '12'}.1. Fica eleito o foro da comarca de ${data.foro || data.doador_cidade || 'domicílio do DOADOR'} para dirimir quaisquer controvérsias oriundas deste contrato, com expressa renúncia a qualquer outro, por mais privilegiado que seja.

E por estarem assim justos e contratados, firmam o presente instrumento em 02 (duas) vias de igual teor e forma, na presença de 02 (duas) testemunhas, para que produza seus jurídicos e legais efeitos.

${data.local_assinatura || data.doador_cidade || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________________________
${data.doador_nome}
DOADOR
CPF: ${data.doador_cpf}
RG: ${data.doador_rg}


_____________________________________________
${data.donatario_nome}
DONATÁRIO
CPF: ${data.donatario_cpf}
RG: ${data.donatario_rg}


TESTEMUNHAS:

1. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________

2. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________
    `,

    'mandato': (data) => `
CONTRATO DE MANDATO

Pelo presente instrumento particular de CONTRATO DE MANDATO, as partes abaixo qualificadas têm entre si justo e contratado o que segue, de acordo com as cláusulas e condições adiante estipuladas:

QUALIFICAÇÃO DAS PARTES

OUTORGANTE (MANDANTE): ${data.outorgante_nome}, ${data.outorgante_nacionalidade || 'brasileiro(a)'}, ${data.outorgante_estado_civil}, ${data.outorgante_profissao}, portador(a) do CPF nº ${data.outorgante_cpf} e RG nº ${data.outorgante_rg}, residente e domiciliado(a) na ${data.outorgante_endereco}, nº ${data.outorgante_numero}, Bairro: ${data.outorgante_bairro}, ${data.outorgante_cidade}, ${data.outorgante_estado}, CEP ${data.outorgante_cep}, e-mail: ${data.outorgante_email}, WhatsApp: ${data.outorgante_whatsapp}.

OUTORGADO (MANDATÁRIO): ${data.outorgado_nome}, ${data.outorgado_nacionalidade || 'brasileiro(a)'}, ${data.outorgado_estado_civil}, ${data.outorgado_profissao}, portador(a) do CPF nº ${data.outorgado_cpf} e RG nº ${data.outorgado_rg}, residente e domiciliado(a) na ${data.outorgado_endereco}, nº ${data.outorgado_numero}, Bairro: ${data.outorgado_bairro}, ${data.outorgado_cidade}, ${data.outorgado_estado}, CEP ${data.outorgado_cep}, e-mail: ${data.outorgado_email}, WhatsApp: ${data.outorgado_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O OUTORGANTE, por meio do presente instrumento, constitui o OUTORGADO como seu bastante procurador e mandatário, conferindo-lhe poderes para que, em seu nome e por sua conta, possa ${data.tipo_mandato === 'Geral' ? 'praticar todos os atos necessários à administração de seus interesses' : 'praticar os atos específicos abaixo descritos'}.

1.2. Finalidade específica: ${data.finalidade_especifica || 'Conforme poderes descritos na cláusula segunda.'}.

CLÁUSULA SEGUNDA - DOS PODERES OUTORGADOS
2.1. O OUTORGANTE confere ao OUTORGADO os seguintes poderes:
${data.poderes_descricao}

2.2. Os poderes aqui outorgados são ${data.tipo_mandato === 'Geral' ? 'amplos e gerais' : 'específicos e limitados às finalidades descritas'}, devendo o MANDATÁRIO exercê-los com toda diligência e boa-fé, respeitando os limites estabelecidos neste contrato e na legislação vigente.

CLÁUSULA TERCEIRA - DO PRAZO
3.1. O presente mandato terá prazo de validade de ${data.prazo_mandato}, contado a partir da data de assinatura deste instrumento.

3.2. O prazo poderá ser prorrogado mediante acordo expresso e por escrito entre as partes, antes do seu vencimento.

CLÁUSULA QUARTA - DA REMUNERAÇÃO
4.1. O presente mandato é ${data.remuneracao === 'Não (Gratuito)' ? 'GRATUITO, não havendo qualquer pagamento ao MANDATÁRIO pelos serviços prestados' : `ONEROSO, sendo devido ao MANDATÁRIO o valor de R$ ${data.valor_remuneracao || '_____________'} pela execução dos serviços`}.

${data.remuneracao === 'Sim (Oneroso)' ? `4.2. O pagamento da remuneração será realizado conforme acordado entre as partes, sendo devido independentemente do resultado obtido na execução do mandato.

4.3. As despesas necessárias à execução do mandato (custas, taxas, emolumentos, etc.) serão de responsabilidade do MANDANTE, devendo ser ressarcidas ao MANDATÁRIO mediante comprovação.` : ''}

CLÁUSULA QUINTA - DO SUBSTABELECIMENTO
5.1. ${data.substabelecimento === 'Sim' ? 'O MANDATÁRIO poderá substabelecer os poderes ora conferidos, total ou parcialmente, com ou sem reservas, devendo comunicar previamente o MANDANTE sobre tal substabelecimento.' : 'O MANDATÁRIO NÃO poderá substabelecer os poderes ora conferidos, devendo exercê-los pessoalmente.'}

5.2. Em caso de substabelecimento autorizado, o MANDATÁRIO permanece responsável pelos atos do substabelecido.

CLÁUSULA SEXTA - DA PRESTAÇÃO DE CONTAS
6.1. ${data.prestacao_contas === 'Sim' ? 'O MANDATÁRIO obriga-se a prestar contas detalhadas de sua gestão ao MANDANTE, sempre que solicitado e, obrigatoriamente, ao término do mandato.' : 'O MANDATÁRIO fica dispensado da obrigação de prestar contas detalhadas, devendo apenas informar sobre os atos praticados quando solicitado.'}

6.2. A prestação de contas deverá conter todos os documentos comprobatórios dos atos praticados e das despesas realizadas.

CLÁUSULA SÉTIMA - DAS OBRIGAÇÕES DO MANDATÁRIO
7.1. Agir com diligência, probidade e boa-fé na execução do mandato;
7.2. Seguir rigorosamente as instruções do MANDANTE;
7.3. Prestar todas as informações solicitadas sobre o andamento dos atos;
7.4. Não exceder os poderes conferidos;
7.5. Comunicar imediatamente ao MANDANTE qualquer fato relevante;
7.6. Devolver todos os documentos ao término do mandato;
7.7. Manter sigilo absoluto sobre todas as informações e documentos a que tiver acesso.

CLÁUSULA OITAVA - DAS OBRIGAÇÕES DO MANDANTE
8.1. Fornecer ao MANDATÁRIO todos os documentos e informações necessários;
8.2. Ressarcir as despesas realizadas pelo MANDATÁRIO;
8.3. Pagar a remuneração acordada, se houver;
8.4. Ratificar os atos praticados dentro dos limites do mandato;
8.5. Cooperar com o MANDATÁRIO na execução das tarefas.

CLÁUSULA NONA - DA REVOGAÇÃO E RENÚNCIA
9.1. ${data.revogacao === 'Pode revogar a qualquer momento' ? 'O MANDANTE poderá revogar o presente mandato a qualquer tempo, mediante notificação prévia ao MANDATÁRIO, com antecedência mínima de 15 (quinze) dias.' : 'O presente mandato é IRREVOGÁVEL durante todo o prazo estabelecido, salvo por justa causa devidamente comprovada.'}

9.2. O MANDATÁRIO poderá renunciar ao mandato, devendo comunicar o MANDANTE com antecedência mínima de 30 (trinta) dias, sob pena de responder por perdas e danos.

9.3. A revogação ou renúncia não exime as partes das obrigações já assumidas perante terceiros.

CLÁUSULA DÉCIMA - DA RESPONSABILIDADE
10.1. O MANDATÁRIO responde por dolo ou culpa na execução do mandato.

10.2. O MANDANTE responde pelos atos praticados pelo MANDATÁRIO dentro dos limites dos poderes conferidos.

10.3. O MANDATÁRIO não responde por caso fortuito ou força maior que impossibilitem a execução do mandato.

CLÁUSULA DÉCIMA PRIMEIRA - DA CONFIDENCIALIDADE
11.1. O MANDATÁRIO obriga-se a manter sigilo absoluto sobre todas as informações, documentos e dados a que tiver acesso em razão deste mandato.

11.2. A obrigação de confidencialidade permanece mesmo após o término do mandato, por prazo indeterminado.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. O presente mandato é regido pelas disposições do Código Civil Brasileiro (artigos 653 a 692) e demais legislações aplicáveis.

12.2. Qualquer alteração deste contrato deverá ser feita por escrito e assinada por ambas as partes.

12.3. O presente instrumento é celebrado em caráter irrevogável e irretratável, obrigando as partes e seus sucessores.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. As partes elegem o foro da comarca de ${data.outorgante_cidade}, Estado de ${data.outorgante_estado}, para dirimir quaisquer questões oriundas deste contrato, renunciando a qualquer outro, por mais privilegiado que seja.

E por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, na presença de 02 (duas) testemunhas.

${data.local_assinatura || data.outorgante_cidade || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________________________
${data.outorgante_nome}
OUTORGANTE (MANDANTE)
CPF: ${data.outorgante_cpf}
RG: ${data.outorgante_rg}


_____________________________________________
${data.outorgado_nome}
OUTORGADO (MANDATÁRIO)
CPF: ${data.outorgado_cpf}
RG: ${data.outorgado_rg}


TESTEMUNHAS:

1. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________

2. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________
    `,

    'alienacao-fiduciaria': (data) => `
CONTRATO DE ALIENAÇÃO FIDUCIÁRIA EM GARANTIA

Pelo presente instrumento particular de CONTRATO DE ALIENAÇÃO FIDUCIÁRIA EM GARANTIA, as partes abaixo qualificadas têm entre si justo e contratado o que segue:

QUALIFICAÇÃO DAS PARTES

CREDOR FIDUCIÁRIO: ${data.credor_fiduciario_nome}, ${data.credor_fiduciario_nacionalidade || 'brasileiro(a)'}, inscrito(a) no ${String(data.credor_fiduciario_documento).length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.credor_fiduciario_documento}${data.credor_fiduciario_rg ? `, RG nº ${data.credor_fiduciario_rg}` : ''}, com sede/residência na ${data.credor_fiduciario_endereco}, nº ${data.credor_fiduciario_numero}, Bairro: ${data.credor_fiduciario_bairro}, ${data.credor_fiduciario_cidade}, ${data.credor_fiduciario_estado}, CEP ${data.credor_fiduciario_cep}, e-mail: ${data.credor_fiduciario_email}, WhatsApp: ${data.credor_fiduciario_whatsapp}.

DEVEDOR FIDUCIANTE: ${data.devedor_fiduciante_nome}, ${data.devedor_fiduciante_nacionalidade || 'brasileiro(a)'}, ${data.devedor_fiduciante_estado_civil}, ${data.devedor_fiduciante_profissao}, inscrito(a) no ${String(data.devedor_fiduciante_documento).length > 14 ? 'CNPJ' : 'CPF'} sob o nº ${data.devedor_fiduciante_documento}${data.devedor_fiduciante_rg ? `, RG nº ${data.devedor_fiduciante_rg}` : ''}, residente e domiciliado(a) na ${data.devedor_fiduciante_endereco}, nº ${data.devedor_fiduciante_numero}, Bairro: ${data.devedor_fiduciante_bairro}, ${data.devedor_fiduciante_cidade}, ${data.devedor_fiduciante_estado}, CEP ${data.devedor_fiduciante_cep}, e-mail: ${data.devedor_fiduciante_email}, WhatsApp: ${data.devedor_fiduciante_whatsapp}.

CLÁUSULA PRIMEIRA - DO OBJETO E FINALIDADE
1.1. O presente contrato tem por objeto a alienação fiduciária em garantia do seguinte bem:

TIPO DO BEM: ${data.tipo_bem}
DESCRIÇÃO: ${data.bem_descricao}
${data.veiculo_placa ? `PLACA: ${data.veiculo_placa}` : ''}
${data.veiculo_chassi ? `CHASSI: ${data.veiculo_chassi}` : ''}
${data.veiculo_renavam ? `RENAVAM: ${data.veiculo_renavam}` : ''}
${data.imovel_matricula ? `MATRÍCULA: ${data.imovel_matricula}` : ''}
${data.imovel_cartorio ? `CARTÓRIO: ${data.imovel_cartorio}` : ''}
VALOR DO BEM: R$ ${data.valor_bem}

1.2. A alienação fiduciária é constituída em garantia do financiamento concedido pelo CREDOR FIDUCIÁRIO ao DEVEDOR FIDUCIANTE, conforme condições estabelecidas neste contrato.

1.3. Durante a vigência deste contrato, a propriedade resolúvel e a posse indireta do bem pertencem ao CREDOR FIDUCIÁRIO, permanecendo o DEVEDOR FIDUCIANTE com a posse direta do bem para uso conforme sua destinação.

CLÁUSULA SEGUNDA - DO FINANCIAMENTO
2.1. O CREDOR FIDUCIÁRIO financia ao DEVEDOR FIDUCIANTE o valor de R$ ${data.valor_financiado}.

2.2. ${data.valor_entrada ? `O DEVEDOR FIDUCIANTE deu como entrada o valor de R$ ${data.valor_entrada}, restando financiar o saldo de R$ ${data.valor_financiado}.` : 'O financiamento corresponde ao valor total do bem.'}

2.3. O valor financiado será pago em ${data.numero_parcelas} parcelas mensais, iguais e consecutivas de R$ ${data.valor_parcela}.

2.4. A primeira parcela vencerá em ${formatDateToBrazilian(String(data.vencimento_primeira_parcela))}, e as demais no mesmo dia dos meses subsequentes.

CLÁUSULA TERCEIRA - DOS ENCARGOS FINANCEIROS
3.1. Sobre o valor financiado incidirão os seguintes encargos:
a) Taxa de juros: ${data.taxa_juros}% ao mês;
b) Custo Efetivo Total (CET): ${data.cet}% ao ano;
c) IOF e demais tributos conforme legislação vigente.

3.2. Todos os encargos financeiros estão claramente discriminados e foram previamente informados e aceitos pelo DEVEDOR FIDUCIANTE.

3.3. O valor das parcelas já inclui os juros e demais encargos contratados.

CLÁUSULA QUARTA - DO PAGAMENTO
4.1. Os pagamentos deverão ser efetuados conforme a seguinte forma: ${data.local_pagamento}.

4.2. O pagamento realizado após a data de vencimento sujeitará o DEVEDOR FIDUCIANTE aos encargos moratórios previstos na cláusula quinta.

4.3. O pagamento antecipado de parcelas ou a liquidação antecipada do saldo devedor implicará redução proporcional dos juros contratados.

CLÁUSULA QUINTA - DA MORA E INADIMPLÊNCIA
5.1. O não pagamento de qualquer parcela na data do vencimento sujeitará o DEVEDOR FIDUCIANTE aos seguintes encargos moratórios:
a) Multa de ${data.multa_inadimplencia}% sobre o valor da parcela em atraso;
b) Juros de mora de ${data.mora_diaria}% ao dia;
c) Correção monetária pelo IPCA;
d) Honorários advocatícios de 20% sobre o valor total da dívida, em caso de cobrança judicial.

5.2. A mora superior a 30 (trinta) dias autoriza o CREDOR FIDUCIÁRIO a considerar vencidas todas as parcelas vincendas.

CLÁUSULA SEXTA - DAS OBRIGAÇÕES DO DEVEDOR FIDUCIANTE
6.1. Pagar as parcelas nas datas estipuladas;
6.2. Manter o bem em perfeito estado de conservação;
6.3. Não alienar, emprestar, alugar, dar em garantia ou onerar o bem de qualquer forma;
6.4. ${data.seguro_obrigatorio === 'Sim' ? 'Manter o bem devidamente segurado contra roubo, furto, colisão e outros riscos, indicando o CREDOR FIDUCIÁRIO como beneficiário;' : 'Zelar pela integridade do bem;'}
6.5. Pagar todos os tributos, taxas, multas e encargos incidentes sobre o bem;
6.6. Permitir a vistoria do bem sempre que solicitado pelo CREDOR;
6.7. Comunicar imediatamente ao CREDOR qualquer sinistro ou dano ao bem;
6.8. Não modificar as características originais do bem sem autorização prévia.

CLÁUSULA SÉTIMA - DAS OBRIGAÇÕES DO CREDOR FIDUCIÁRIO
7.1. Providenciar o registro da alienação fiduciária junto ao órgão competente;
7.2. Consolidar a propriedade do bem no momento oportuno, caso haja inadimplemento;
7.3. Fornecer comprovante de quitação ao final do pagamento integral;
7.4. Proceder à baixa do gravame após a quitação.

CLÁUSULA OITAVA - DO VENCIMENTO ANTECIPADO
8.1. ${data.vencimento_antecipado === 'Sim' ? `Constituem causas de vencimento antecipado da dívida:
a) Inadimplemento de 3 (três) ou mais parcelas consecutivas;
b) Alienação ou oneração do bem sem autorização do CREDOR;
c) Deterioração do bem por culpa do DEVEDOR;
d) Não pagamento de tributos e seguros obrigatórios;
e) Falência, recuperação judicial ou insolvência do DEVEDOR;
f) Mudança de endereço sem comunicação ao CREDOR;
g) Uso do bem para fins ilícitos.

8.2. Ocorrendo qualquer das hipóteses acima, o saldo devedor torna-se imediatamente exigível.` : 'Não há previsão de vencimento antecipado da dívida, salvo nas hipóteses legais.'}

CLÁUSULA NONA - DA CONSOLIDAÇÃO DA PROPRIEDADE
9.1. Na hipótese de inadimplemento, o CREDOR FIDUCIÁRIO poderá consolidar a propriedade do bem em seu nome conforme ${data.consolidacao_propriedade === 'Conforme Código Civil' ? 'procedimento previsto no Código Civil' : 'procedimento de Busca e Apreensão estabelecido no Decreto-Lei nº 911/69'}.

9.2. ${data.consolidacao_propriedade === 'Busca e Apreensão (DL 911/69)' ? `Comprovada a mora, o CREDOR FIDUCIÁRIO poderá requerer a busca e apreensão do bem, nos termos do Decreto-Lei nº 911/69.

9.3. Apreendido o bem, o DEVEDOR FIDUCIANTE poderá purgá-la mora no prazo de 5 (cinco) dias, pagando a integralidade da dívida pendente, acrescida dos encargos e despesas.

9.4. Não purgada a mora, será consolidada a propriedade do bem em nome do CREDOR FIDUCIÁRIO.` : `Após regular notificação e decorrido o prazo legal, a propriedade do bem será consolidada em nome do CREDOR FIDUCIÁRIO.

9.3. O DEVEDOR FIDUCIANTE será notificado por meio do endereço indicado neste contrato.`}

9.5. Consolidada a propriedade, o CREDOR promoverá a venda do bem, aplicando o produto da venda da seguinte forma:
a) Pagamento das despesas com busca, apreensão, depósito e venda;
b) Pagamento do saldo devedor, acrescido de todos os encargos;
c) Eventual saldo remanescente será devolvido ao DEVEDOR FIDUCIANTE.

CLÁUSULA DÉCIMA - DO SEGURO
10.1. ${data.seguro_obrigatorio === 'Sim' ? `O DEVEDOR FIDUCIANTE obriga-se a contratar e manter, durante toda a vigência deste contrato, seguro do bem contra roubo, furto, colisão, incêndio e outros riscos.

10.2. O CREDOR FIDUCIÁRIO deverá ser indicado como beneficiário do seguro no limite do saldo devedor.

10.3. Em caso de sinistro, a indenização securitária será utilizada para quitação do saldo devedor.

10.4. O não pagamento do seguro autoriza o CREDOR a contratar o seguro e debitar o valor nas parcelas vincendas.` : 'O DEVEDOR FIDUCIANTE fica responsável por eventuais danos ou perdas do bem, independentemente de contratação de seguro.'}

CLÁUSULA DÉCIMA PRIMEIRA - DA QUITAÇÃO
11.1. Quitado integralmente o débito, o CREDOR FIDUCIÁRIO fornecerá ao DEVEDOR FIDUCIANTE, no prazo de 30 (trinta) dias:
a) Carta de quitação do financiamento;
b) Autorização para baixa do gravame junto ao órgão competente;
c) Documentos necessários à transferência da propriedade plena.

11.2. Todas as despesas com transferência e baixa do gravame serão de responsabilidade do DEVEDOR FIDUCIANTE.

CLÁUSULA DÉCIMA SEGUNDA - DAS DISPOSIÇÕES GERAIS
12.1. O presente contrato é regido pelas disposições do Código Civil (artigos 1.361 a 1.368-F), Lei nº 9.514/97, Lei nº 10.931/2004, Decreto-Lei nº 911/69 e demais legislações aplicáveis.

12.2. O DEVEDOR FIDUCIANTE declara ter recebido cópia deste contrato, com todos os termos e condições claramente especificados.

12.3. O DEVEDOR FIDUCIANTE foi informado sobre o Custo Efetivo Total (CET) da operação e teve acesso a todas as informações sobre encargos financeiros.

12.4. Qualquer tolerância não importará em novação ou renúncia de direitos.

CLÁUSULA DÉCIMA TERCEIRA - DO FORO
13.1. As partes elegem o foro da comarca de ${data.credor_fiduciario_cidade}, Estado de ${data.credor_fiduciario_estado}, para dirimir quaisquer questões oriundas deste contrato, renunciando a qualquer outro, por mais privilegiado que seja.

E por estarem assim justas e contratadas, as partes assinam o presente instrumento em 02 (duas) vias de igual teor e forma, na presença de 02 (duas) testemunhas.

${data.local_assinatura || data.credor_fiduciario_cidade || '_________________'}, ${data.data_assinatura ? formatDateToBrazilian(String(data.data_assinatura)) : getCurrentDateBrazilian()}.


_____________________________________________
${data.credor_fiduciario_nome}
CREDOR FIDUCIÁRIO
${String(data.credor_fiduciario_documento).length > 14 ? 'CNPJ' : 'CPF'}: ${data.credor_fiduciario_documento}


_____________________________________________
${data.devedor_fiduciante_nome}
DEVEDOR FIDUCIANTE
${String(data.devedor_fiduciante_documento).length > 14 ? 'CNPJ' : 'CPF'}: ${data.devedor_fiduciante_documento}
${data.devedor_fiduciante_rg ? `RG: ${data.devedor_fiduciante_rg}` : ''}


TESTEMUNHAS:

1. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________

2. _____________________________________________
   Nome: ________________________________________
   CPF: __________________________________________
   RG: ___________________________________________
    `
  };

  return templates[contractId]?.(data) || 'Modelo de contrato não encontrado.';
};