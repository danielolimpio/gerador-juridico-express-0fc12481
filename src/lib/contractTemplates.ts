export interface ContractData {
  [key: string]: string | number | boolean;
}

export const generateContractText = (contractId: string, data: ContractData): string => {
  const templates: { [key: string]: (data: ContractData) => string } = {
    'compra-venda': (data) => `
CONTRATO PARTICULAR DE COMPRA E VENDA

PREÂMBULO
Pelo presente instrumento particular de contrato de compra e venda, de um lado, como VENDEDOR(A), e de outro lado, como COMPRADOR(A), as partes a seguir qualificadas, têm entre si justo e acordado celebrar o presente contrato, que se regerá pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

VENDEDOR(A): ${data.vendedor_nome}, ${data.vendedor_nacionalidade || 'brasileiro(a)'}, ${data.vendedor_estado_civil}, ${data.vendedor_profissao || 'profissional'}, portador(a) do CPF nº ${data.vendedor_cpf} e RG nº ${data.vendedor_rg || '_____________'}, residente e domiciliado(a) na ${data.vendedor_endereco}, CEP ${data.vendedor_cep || '_____________'}, ${data.vendedor_cidade || '_____________'}, ${data.vendedor_estado || '_____________'}.

COMPRADOR(A): ${data.comprador_nome}, ${data.comprador_nacionalidade || 'brasileiro(a)'}, ${data.comprador_estado_civil}, ${data.comprador_profissao || 'profissional'}, portador(a) do CPF nº ${data.comprador_cpf} e RG nº ${data.comprador_rg || '_____________'}, residente e domiciliado(a) na ${data.comprador_endereco}, CEP ${data.comprador_cep || '_____________'}, ${data.comprador_cidade || '_____________'}, ${data.comprador_estado || '_____________'}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O VENDEDOR vende ao COMPRADOR, de forma irrevogável e irretratável, com todos os direitos e responsabilidades que lhe são inerentes, o seguinte bem: ${data.bem_descricao}.

1.2. O bem objeto deste contrato encontra-se em perfeitas condições de uso e conservação, livre e desembaraçado de quaisquer ônus, gravames, penhoras, hipotecas, alienações fiduciárias, usufrutos, servidões não aparentes ou outros direitos de terceiros.

1.3. Fazem parte integrante da venda todos os acessórios, benfeitorias e melhoramentos incorporados ao bem principal.

CLÁUSULA SEGUNDA - DO PREÇO E FORMA DE PAGAMENTO
2.1. O preço total e definitivo da venda é de R$ ${data.valor_venda} (${data.valor_extenso || 'valor por extenso'}), que será pago pelo COMPRADOR da seguinte forma: ${data.forma_pagamento}.

2.2. O preço foi livremente estipulado e aceito pelas partes, considerando as condições atuais do mercado e as características específicas do bem.

2.3. Caso haja parcelas a vencer, estas deverão ser pagas nas datas estipuladas, incidindo sobre o valor em atraso correção monetária pelo IPCA, juros de mora de 1% ao mês e multa moratória de 2%.

CLÁUSULA TERCEIRA - DA ENTREGA E TRADIÇÃO
3.1. O bem objeto deste contrato será entregue ao COMPRADOR na data de ${data.data_entrega}, no estado em que se encontra.

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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________          _____________________________
${data.vendedor_nome}                  ${data.comprador_nome}
VENDEDOR(A)                            COMPRADOR(A)
CPF: ${data.vendedor_cpf}              CPF: ${data.comprador_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

    'locacao-residencial': (data) => `
CONTRATO DE LOCAÇÃO RESIDENCIAL

PREÂMBULO
Pelo presente instrumento particular de locação residencial, de um lado como LOCADOR(A), e de outro como LOCATÁRIO(A), as partes a seguir qualificadas celebram o presente contrato, que se regerá pela Lei nº 8.245/91 (Lei do Inquilinato) e pelas cláusulas e condições seguintes:

QUALIFICAÇÃO DAS PARTES

LOCADOR(A): ${data.locador_nome}, ${data.locador_nacionalidade || 'brasileiro(a)'}, ${data.locador_estado_civil}, ${data.locador_profissao || 'profissional'}, portador(a) do CPF nº ${data.locador_cpf} e RG nº ${data.locador_rg || '_____________'}, residente e domiciliado(a) na ${data.locador_endereco}, CEP ${data.locador_cep || '_____________'}, ${data.locador_cidade || '_____________'}, ${data.locador_estado || '_____________'}.

LOCATÁRIO(A): ${data.locatario_nome}, ${data.locatario_nacionalidade || 'brasileiro(a)'}, ${data.locatario_estado_civil}, ${data.locatario_profissao || 'profissional'}, portador(a) do CPF nº ${data.locatario_cpf} e RG nº ${data.locatario_rg || '_____________'}, residente e domiciliado(a) na ${data.locatario_endereco}, CEP ${data.locatario_cep || '_____________'}, ${data.locatario_cidade || '_____________'}, ${data.locatario_estado || '_____________'}.

${data.fiador_nome ? `
FIADOR(A): ${data.fiador_nome}, ${data.fiador_nacionalidade || 'brasileiro(a)'}, ${data.fiador_estado_civil}, ${data.fiador_profissao || 'profissional'}, portador(a) do CPF nº ${data.fiador_cpf} e RG nº ${data.fiador_rg || '_____________'}, residente e domiciliado(a) na ${data.fiador_endereco}, CEP ${data.fiador_cep || '_____________'}, proprietário(a) do imóvel situado na ${data.fiador_imovel || '_____________'}.` : ''}

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. O LOCADOR dá em locação ao LOCATÁRIO, que aceita, o imóvel residencial situado na ${data.imovel_endereco}, CEP ${data.imovel_cep || '_____________'}, ${data.imovel_cidade || '_____________'}, ${data.imovel_estado || '_____________'}.

1.2. O imóvel é composto por: ${data.imovel_composicao || 'composição detalhada do imóvel'}.

1.3. Fazem parte integrante da locação: ${data.imovel_acessorios || 'todos os equipamentos e acessórios existentes'}.

1.4. O imóvel destina-se exclusivamente para fins residenciais, sendo vedado o uso comercial ou qualquer atividade que possa perturbar a vizinhança.

CLÁUSULA SEGUNDA - DO PRAZO
2.1. O prazo da locação é de ${data.prazo_contrato} (${data.prazo_extenso || 'prazo por extenso'}) meses, com início em ${data.data_inicio || '___/___/____'} e término em ${data.data_fim || '___/___/____'}.

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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.locador_nome}              ${data.locatario_nome}
LOCADOR(A)                        LOCATÁRIO(A)
CPF: ${data.locador_cpf}          CPF: ${data.locatario_cpf}

${data.fiador_nome ? `_____________________________\n${data.fiador_nome}\nFIADOR(A)\nCPF: ${data.fiador_cpf}` : ''}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'prestacao-servicos': (data) => `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS PROFISSIONAIS

PREÂMBULO
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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.contratante_nome}          ${data.prestador_nome}
CONTRATANTE                       PRESTADOR
${data.contratante_documento_tipo || 'CPF'}: ${data.contratante_documento}     CPF: ${data.prestador_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'locacao-comercial': (data) => `
CONTRATO DE LOCAÇÃO NÃO RESIDENCIAL (COMERCIAL)

PREÂMBULO
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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.locador_nome}              ${data.locatario_nome}
LOCADOR(A)                        LOCATÁRIO(A)
    `,

    'trabalho-autonomo': (data) => `
CONTRATO DE TRABALHO AUTÔNOMO

PREÂMBULO
Pelo presente contrato de trabalho autônomo, as partes abaixo qualificadas estabelecem as condições para prestação de serviços profissionais especializados:

QUALIFICAÇÃO DAS PARTES

CONTRATANTE: ${data.contratante_nome}, ${data.contratante_documento_tipo || 'CPF'} nº ${data.contratante_documento}, com endereço na ${data.contratante_endereco}.

PROFISSIONAL AUTÔNOMO: ${data.autonomo_nome}, CPF nº ${data.autonomo_cpf}, ${data.autonomo_profissao}, residente na ${data.autonomo_endereco}.

CLÁUSULA PRIMEIRA - DOS SERVIÇOS
1.1. O PROFISSIONAL AUTÔNOMO prestará os seguintes serviços: ${data.servicos_descricao}.

1.2. Os serviços serão executados com total autonomia técnica e profissional.

CLÁUSULA SEGUNDA - DO PRAZO
2.1. Prazo de execução: ${data.prazo_execucao}.
2.2. Início dos trabalhos: ${data.data_inicio || '___/___/____'}.

CLÁUSULA TERCEIRA - DA REMUNERAÇÃO
3.1. Valor total: R$ ${data.valor_servico} (${data.valor_extenso || 'valor por extenso'}).
3.2. Forma de pagamento: ${data.forma_pagamento}.

CLÁUSULA QUARTA - DA AUTONOMIA
4.1. Não existe vínculo empregatício entre as partes.
4.2. O PROFISSIONAL AUTÔNOMO tem liberdade de horário e método de trabalho.
4.3. Responsabilidade por tributos e encargos é do PROFISSIONAL AUTÔNOMO.

CLÁUSULA QUINTA - DAS OBRIGAÇÕES
5.1. Executar os serviços com qualidade e pontualidade.
5.2. Manter sigilo profissional.
5.3. Utilizar equipamentos próprios ou fornecidos pelo CONTRATANTE.

CLÁUSULA SEXTA - DO FORO
6.1. Foro da comarca de ${data.foro || 'domicílio do CONTRATANTE'}.

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.contratante_nome}          ${data.autonomo_nome}
CONTRATANTE                       PROFISSIONAL AUTÔNOMO
    `,

    'parceria-comercial': (data) => `
CONTRATO DE PARCERIA COMERCIAL

PREÂMBULO
Pelo presente instrumento, as partes estabelecem parceria comercial para desenvolvimento conjunto de atividades empresariais:

QUALIFICAÇÃO DOS PARCEIROS

PARCEIRO 1: ${data.parceiro1_nome}, ${data.parceiro1_documento_tipo || 'CNPJ'} nº ${data.parceiro1_documento}, com sede na ${data.parceiro1_endereco}.

PARCEIRO 2: ${data.parceiro2_nome}, ${data.parceiro2_documento_tipo || 'CNPJ'} nº ${data.parceiro2_documento}, com sede na ${data.parceiro2_endereco}.

CLÁUSULA PRIMEIRA - DO OBJETO
1.1. As partes estabelecem parceria para: ${data.objeto_parceria}.

1.2. A parceria tem por finalidade: ${data.finalidade_parceria}.

CLÁUSULA SEGUNDA - DAS CONTRIBUIÇÕES
2.1. PARCEIRO 1 contribuirá com: ${data.contribuicao_parceiro1}.
2.2. PARCEIRO 2 contribuirá com: ${data.contribuicao_parceiro2}.

CLÁUSULA TERCEIRA - DA DIVISÃO DE RESULTADOS
3.1. Os resultados serão divididos na proporção de:
- PARCEIRO 1: ${data.percentual_parceiro1 || '50'}%
- PARCEIRO 2: ${data.percentual_parceiro2 || '50'}%

CLÁUSULA QUARTA - DA GESTÃO
4.1. A gestão da parceria será: ${data.tipo_gestao || 'compartilhada entre os parceiros'}.

4.2. Decisões estratégicas requerem consenso entre os parceiros.

CLÁUSULA QUINTA - DO PRAZO
5.1. Prazo da parceria: ${data.prazo_parceria}.
5.2. Renovação: ${data.renovacao || 'mediante acordo entre as partes'}.

CLÁUSULA SEXTA - DA CONFIDENCIALIDADE
6.1. As partes se comprometem a manter sigilo sobre informações confidenciais.

6.2. A quebra de confidencialidade ensejará indenização por perdas e danos.

CLÁUSULA SÉTIMA - DA EXCLUSIVIDADE
7.1. ${data.exclusividade === 'Sim' ? 'A parceria é exclusiva na área de atuação definida.' : 'A parceria é não exclusiva.'}

CLÁUSULA OITAVA - DA RESCISÃO
8.1. A parceria poderá ser rescindida:
a) Por mútuo acordo;
b) Por inadimplemento de qualquer parceiro;
c) Por impossibilidade de continuação dos negócios.

8.2. A rescisão imotivada requer aviso prévio de ${data.aviso_previo || '30'} dias.

CLÁUSULA NONA - DO FORO
9.1. Foro da comarca de ${data.foro || 'sede do PARCEIRO 1'}.

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.parceiro1_nome}            ${data.parceiro2_nome}
PARCEIRO 1                        PARCEIRO 2
    `,

    'comodato': (data) => `
CONTRATO DE COMODATO (EMPRÉSTIMO GRATUITO)

PREÂMBULO
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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.comodante_nome}            ${data.comodatario_nome}
COMODANTE                         COMODATÁRIO
CPF: ${data.comodante_cpf}        CPF: ${data.comodatario_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `,

    'emprestimo': (data) => `
CONTRATO PARTICULAR DE EMPRÉSTIMO

PREÂMBULO
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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.credor_nome}               ${data.devedor_nome}
CREDOR                            DEVEDOR
CPF: ${data.credor_cpf}           CPF: ${data.devedor_cpf}

${data.avalista_nome ? `_____________________________\n${data.avalista_nome}\nAVALISTA\nCPF: ${data.avalista_cpf}` : ''}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
   Nome: _______________________

2. _____________________________       CPF: _____________________
   Nome: _______________________
    `,

    'doacao': (data) => `
CONTRATO PÚBLICO DE DOAÇÃO

PREÂMBULO
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

${data.local_assinatura || '_________________'}, ${data.data_assinatura || '____ de _____________ de 2025'}.

_____________________________     _____________________________
${data.doador_nome}               ${data.donatario_nome}
DOADOR                            DONATÁRIO
CPF: ${data.doador_cpf}           CPF: ${data.donatario_cpf}

TESTEMUNHAS:
1. _____________________________       CPF: _____________________
2. _____________________________       CPF: _____________________
    `
  };

  return templates[contractId]?.(data) || 'Modelo de contrato não encontrado.';
};