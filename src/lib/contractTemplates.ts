export interface ContractData {
  [key: string]: string | number | boolean;
}

export const generateContractText = (contractId: string, data: ContractData): string => {
  const templates: { [key: string]: (data: ContractData) => string } = {
    'compra-venda': (data) => `
CONTRATO DE COMPRA E VENDA

Por este instrumento particular de contrato de compra e venda, as partes abaixo qualificadas:

VENDEDOR: ${data.vendedor_nome}, portador do CPF nº ${data.vendedor_cpf}, ${data.vendedor_estado_civil}, residente e domiciliado em ${data.vendedor_endereco};

COMPRADOR: ${data.comprador_nome}, portador do CPF nº ${data.comprador_cpf}, ${data.comprador_estado_civil}, residente e domiciliado em ${data.comprador_endereco};

Têm entre si justo e acordado o seguinte:

CLÁUSULA PRIMEIRA - DO OBJETO
O VENDEDOR vende ao COMPRADOR o seguinte bem: ${data.bem_descricao}.

CLÁUSULA SEGUNDA - DO PREÇO
O preço total da venda é de ${data.valor_venda}, que será pago da seguinte forma: ${data.forma_pagamento}.

CLÁUSULA TERCEIRA - DA ENTREGA
O bem objeto deste contrato será entregue na data de ${data.data_entrega}.

CLÁUSULA QUARTA - DAS RESPONSABILIDADES
O VENDEDOR garante que o bem está livre de qualquer ônus, gravame ou impedimento legal.

CLÁUSULA QUINTA - DO FORO
Fica eleito o foro da comarca de residência do COMPRADOR para dirimir quaisquer questões oriundas deste contrato.

E por estarem assim justos e contratados, assinam o presente instrumento em duas vias de igual teor.

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.vendedor_nome}                  ${data.comprador_nome}
VENDEDOR                               COMPRADOR

Testemunhas:
1. _____________________________
2. _____________________________
    `,

    'locacao-residencial': (data) => `
CONTRATO DE LOCAÇÃO RESIDENCIAL

LOCADOR: ${data.locador_nome}, portador do CPF nº ${data.locador_cpf}, residente em ${data.locador_endereco};

LOCATÁRIO: ${data.locatario_nome}, portador do CPF nº ${data.locatario_cpf}, residente em ${data.locatario_endereco};

CLÁUSULA PRIMEIRA - DO OBJETO
O LOCADOR loca ao LOCATÁRIO o imóvel residencial situado em: ${data.imovel_endereco}.

CLÁUSULA SEGUNDA - DO PRAZO
O prazo da locação é de ${data.prazo_contrato} meses, com início em ___/___/___ e término em ___/___/___.

CLÁUSULA TERCEIRA - DO ALUGUEL
O valor mensal do aluguel é de ${data.valor_aluguel}, a ser pago até o dia 10 de cada mês.

CLÁUSULA QUARTA - DO REAJUSTE
O aluguel será reajustado anualmente pelo índice ${data.reajuste}.

${data.caucao ? `CLÁUSULA QUINTA - DA CAUÇÃO\nO LOCATÁRIO depositará a título de caução o valor de ${data.caucao}.` : ''}

${data.fiador_nome ? `CLÁUSULA SEXTA - DO FIADOR\n${data.fiador_nome}, CPF ${data.fiador_cpf}, assume a responsabilidade solidária pelas obrigações do LOCATÁRIO.` : ''}

CLÁUSULA FINAL - DO FORO
Fica eleito o foro da situação do imóvel para dirimir questões deste contrato.

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.locador_nome}                   ${data.locatario_nome}
LOCADOR                                LOCATÁRIO

${data.fiador_nome ? `_____________________________\n${data.fiador_nome}\nFIADOR` : ''}
    `,

    'prestacao-servicos': (data) => `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS

CONTRATANTE: ${data.contratante_nome}, portador do documento nº ${data.contratante_documento};

PRESTADOR: ${data.prestador_nome}, portador do CPF nº ${data.prestador_cpf};

CLÁUSULA PRIMEIRA - DOS SERVIÇOS
O PRESTADOR se compromete a executar os seguintes serviços: ${data.servicos_descricao}.

CLÁUSULA SEGUNDA - DO PRAZO
Os serviços deverão ser executados no prazo de ${data.prazo_execucao}.

CLÁUSULA TERCEIRA - DO VALOR
O valor total dos serviços é de ${data.valor_servico}, que será pago da seguinte forma: ${data.forma_pagamento}.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES
O PRESTADOR executará os serviços com autonomia técnica, não havendo vínculo empregatício.

${data.confidencialidade === 'Sim' ? `CLÁUSULA QUINTA - CONFIDENCIALIDADE\nO PRESTADOR se compromete a manter sigilo sobre informações confidenciais.` : ''}

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.contratante_nome}               ${data.prestador_nome}
CONTRATANTE                            PRESTADOR
    `,

    'doacao': (data) => `
CONTRATO DE DOAÇÃO

DOADOR: ${data.doador_nome}, CPF ${data.doador_cpf}, ${data.doador_estado_civil};

DONATÁRIO: ${data.donatario_nome}, CPF ${data.donatario_cpf}, ${data.donatario_estado_civil};

CLÁUSULA PRIMEIRA - DA DOAÇÃO
O DOADOR, por mera liberalidade, doa ao DONATÁRIO o seguinte bem: ${data.bem_descricao}.

CLÁUSULA SEGUNDA - DA ACEITAÇÃO
O DONATÁRIO aceita a presente doação em todos os seus termos.

${data.reserva_usufruto === 'Sim' ? `CLÁUSULA TERCEIRA - DO USUFRUTO\nO DOADOR reserva para si o usufruto vitalício do bem doado.` : ''}

CLÁUSULA FINAL
Esta doação é feita de forma pura e simples, sem encargos.

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.doador_nome}                    ${data.donatario_nome}
DOADOR                                 DONATÁRIO
    `,

    'emprestimo': (data) => `
CONTRATO DE EMPRÉSTIMO

CREDOR: ${data.credor_nome}, CPF ${data.credor_cpf}, residente em ${data.credor_endereco};

DEVEDOR: ${data.devedor_nome}, CPF ${data.devedor_cpf}, residente em ${data.devedor_endereco};

CLÁUSULA PRIMEIRA - DO EMPRÉSTIMO
O CREDOR empresta ao DEVEDOR a quantia de ${data.valor_emprestimo}.

${data.juros ? `CLÁUSULA SEGUNDA - DOS JUROS\nSobre o valor emprestado incidirão juros de ${data.juros}% ao mês.` : ''}

CLÁUSULA TERCEIRA - DO PAGAMENTO
O pagamento será efetuado da seguinte forma: ${data.forma_pagamento}, com vencimento final em ${data.prazo_pagamento}.

CLÁUSULA QUARTA - DA MORA
Em caso de atraso, será aplicada multa de 2% sobre o valor em aberto.

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.credor_nome}                    ${data.devedor_nome}
CREDOR                                 DEVEDOR
    `,

    'comodato': (data) => `
CONTRATO DE COMODATO

COMODANTE: ${data.comodante_nome}, CPF ${data.comodante_cpf};

COMODATÁRIO: ${data.comodatario_nome}, CPF ${data.comodatario_cpf};

CLÁUSULA PRIMEIRA - DO OBJETO
O COMODANTE empresta gratuitamente ao COMODATÁRIO o seguinte bem: ${data.bem_descricao}.

CLÁUSULA SEGUNDA - DA FINALIDADE
O bem destina-se ao seguinte uso: ${data.finalidade_uso}.

CLÁUSULA TERCEIRA - DO PRAZO
O prazo do comodato é de ${data.prazo_uso}.

CLÁUSULA QUARTA - DAS OBRIGAÇÕES
O COMODATÁRIO deve conservar o bem em boas condições e restituí-lo quando solicitado.

_________________, ___ de _______ de 2024.

_____________________________          _____________________________
${data.comodante_nome}                 ${data.comodatario_nome}
COMODANTE                              COMODATÁRIO
    `
  };

  return templates[contractId]?.(data) || 'Modelo de contrato não encontrado.';
};