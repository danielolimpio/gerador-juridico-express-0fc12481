export interface ContractType {
  id: string;
  title: string;
  description: string;
  category: 'sale' | 'rental' | 'service' | 'donation' | 'loan' | 'other';
  fields: FormField[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'select' | 'textarea' | 'date' | 'cpf' | 'cnpj' | 'currency';
  required: boolean;
  options?: string[];
  placeholder?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export const contractTypes: ContractType[] = [
  {
    id: 'compra-venda',
    title: 'Contrato de Compra e Venda',
    description: 'Transferência de bens (imóveis, veículos, móveis, etc.)',
    category: 'sale',
    fields: [
      { name: 'vendedor_nome', label: 'Nome do Vendedor', type: 'text', required: true },
      { name: 'vendedor_cpf', label: 'CPF do Vendedor', type: 'cpf', required: true },
      { name: 'vendedor_estado_civil', label: 'Estado Civil do Vendedor', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] },
      { name: 'vendedor_endereco', label: 'Endereço do Vendedor', type: 'textarea', required: true },
      { name: 'comprador_nome', label: 'Nome do Comprador', type: 'text', required: true },
      { name: 'comprador_cpf', label: 'CPF do Comprador', type: 'cpf', required: true },
      { name: 'comprador_estado_civil', label: 'Estado Civil do Comprador', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] },
      { name: 'comprador_endereco', label: 'Endereço do Comprador', type: 'textarea', required: true },
      { name: 'bem_descricao', label: 'Descrição do Bem', type: 'textarea', required: true, placeholder: 'Ex: Apartamento localizado na Rua..., Veículo modelo...' },
      { name: 'valor_venda', label: 'Valor da Venda', type: 'currency', required: true },
      { name: 'forma_pagamento', label: 'Forma de Pagamento', type: 'select', required: true, options: ['À vista', 'Parcelado em 2x', 'Parcelado em 3x', 'Parcelado em 6x', 'Parcelado em 12x', 'Financiamento bancário'] },
      { name: 'data_entrega', label: 'Data de Entrega do Bem', type: 'date', required: true },
    ]
  },
  {
    id: 'locacao-residencial',
    title: 'Contrato de Locação Residencial',
    description: 'Aluguel de casa, apartamento, quitinete',
    category: 'rental',
    fields: [
      { name: 'locador_nome', label: 'Nome do Locador', type: 'text', required: true },
      { name: 'locador_cpf', label: 'CPF do Locador', type: 'cpf', required: true },
      { name: 'locador_endereco', label: 'Endereço do Locador', type: 'textarea', required: true },
      { name: 'locatario_nome', label: 'Nome do Locatário', type: 'text', required: true },
      { name: 'locatario_cpf', label: 'CPF do Locatário', type: 'cpf', required: true },
      { name: 'locatario_endereco', label: 'Endereço do Locatário', type: 'textarea', required: true },
      { name: 'imovel_endereco', label: 'Endereço do Imóvel', type: 'textarea', required: true },
      { name: 'valor_aluguel', label: 'Valor do Aluguel', type: 'currency', required: true },
      { name: 'prazo_contrato', label: 'Prazo do Contrato (meses)', type: 'number', required: true, validation: { min: 1, max: 60 } },
      { name: 'reajuste', label: 'Índice de Reajuste', type: 'select', required: true, options: ['IGP-M', 'IPCA', 'INCC', 'Sem reajuste'] },
      { name: 'caucao', label: 'Valor da Caução', type: 'currency', required: false },
      { name: 'fiador_nome', label: 'Nome do Fiador (opcional)', type: 'text', required: false },
      { name: 'fiador_cpf', label: 'CPF do Fiador (opcional)', type: 'cpf', required: false },
    ]
  },
  {
    id: 'locacao-comercial',
    title: 'Contrato de Locação Comercial',
    description: 'Aluguel de imóvel para atividade empresarial',
    category: 'rental',
    fields: [
      { name: 'locador_nome', label: 'Nome/Razão Social do Locador', type: 'text', required: true },
      { name: 'locador_documento', label: 'CPF/CNPJ do Locador', type: 'text', required: true },
      { name: 'locatario_nome', label: 'Nome/Razão Social do Locatário', type: 'text', required: true },
      { name: 'locatario_documento', label: 'CPF/CNPJ do Locatário', type: 'text', required: true },
      { name: 'imovel_endereco', label: 'Endereço do Imóvel', type: 'textarea', required: true },
      { name: 'finalidade_uso', label: 'Finalidade do Uso', type: 'select', required: true, options: ['Comércio', 'Escritório', 'Consultório', 'Salão', 'Loja', 'Outro'] },
      { name: 'valor_aluguel', label: 'Valor do Aluguel', type: 'currency', required: true },
      { name: 'prazo_contrato', label: 'Prazo do Contrato (meses)', type: 'number', required: true },
      { name: 'iptu_responsavel', label: 'IPTU por conta de', type: 'select', required: true, options: ['Locador', 'Locatário'] },
      { name: 'condominio_responsavel', label: 'Condomínio por conta de', type: 'select', required: true, options: ['Locador', 'Locatário'] },
    ]
  },
  {
    id: 'prestacao-servicos',
    title: 'Contrato de Prestação de Serviços',
    description: 'Contratação de profissionais autônomos',
    category: 'service',
    fields: [
      { name: 'contratante_nome', label: 'Nome do Contratante', type: 'text', required: true },
      { name: 'contratante_documento', label: 'CPF/CNPJ do Contratante', type: 'text', required: true },
      { name: 'prestador_nome', label: 'Nome do Prestador', type: 'text', required: true },
      { name: 'prestador_cpf', label: 'CPF do Prestador', type: 'cpf', required: true },
      { name: 'servicos_descricao', label: 'Descrição dos Serviços', type: 'textarea', required: true },
      { name: 'prazo_execucao', label: 'Prazo de Execução', type: 'text', required: true, placeholder: 'Ex: 30 dias, 2 semanas' },
      { name: 'valor_servico', label: 'Valor do Serviço', type: 'currency', required: true },
      { name: 'forma_pagamento', label: 'Forma de Pagamento', type: 'select', required: true, options: ['À vista', 'Parcelado', '50% início + 50% final', 'Mensal'] },
      { name: 'confidencialidade', label: 'Cláusula de Confidencialidade', type: 'select', required: false, options: ['Sim', 'Não'] },
    ]
  },
  {
    id: 'doacao',
    title: 'Contrato de Doação',
    description: 'Transferência gratuita de bens entre pessoas',
    category: 'donation',
    fields: [
      { name: 'doador_nome', label: 'Nome do Doador', type: 'text', required: true },
      { name: 'doador_cpf', label: 'CPF do Doador', type: 'cpf', required: true },
      { name: 'doador_estado_civil', label: 'Estado Civil do Doador', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] },
      { name: 'donatario_nome', label: 'Nome do Donatário', type: 'text', required: true },
      { name: 'donatario_cpf', label: 'CPF do Donatário', type: 'cpf', required: true },
      { name: 'donatario_estado_civil', label: 'Estado Civil do Donatário', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] },
      { name: 'bem_descricao', label: 'Descrição do Bem Doado', type: 'textarea', required: true },
      { name: 'reserva_usufruto', label: 'Reservar Usufruto', type: 'select', required: false, options: ['Sim', 'Não'] },
    ]
  },
  {
    id: 'emprestimo',
    title: 'Contrato de Empréstimo entre Pessoas',
    description: 'Empréstimo de dinheiro entre amigos, familiares ou terceiros',
    category: 'loan',
    fields: [
      { name: 'credor_nome', label: 'Nome do Credor', type: 'text', required: true },
      { name: 'credor_cpf', label: 'CPF do Credor', type: 'cpf', required: true },
      { name: 'credor_endereco', label: 'Endereço do Credor', type: 'textarea', required: true },
      { name: 'devedor_nome', label: 'Nome do Devedor', type: 'text', required: true },
      { name: 'devedor_cpf', label: 'CPF do Devedor', type: 'cpf', required: true },
      { name: 'devedor_endereco', label: 'Endereço do Devedor', type: 'textarea', required: true },
      { name: 'valor_emprestimo', label: 'Valor do Empréstimo', type: 'currency', required: true },
      { name: 'juros', label: 'Taxa de Juros (% ao mês)', type: 'number', required: false, validation: { min: 0, max: 12 } },
      { name: 'prazo_pagamento', label: 'Prazo Final para Pagamento', type: 'date', required: true },
      { name: 'forma_pagamento', label: 'Forma de Pagamento', type: 'select', required: true, options: ['À vista', 'Parcelado mensal', 'Parcela única no final'] },
    ]
  },
  {
    id: 'comodato',
    title: 'Contrato de Comodato',
    description: 'Empréstimo gratuito de bem para uso',
    category: 'loan',
    fields: [
      { name: 'comodante_nome', label: 'Nome do Comodante', type: 'text', required: true },
      { name: 'comodante_cpf', label: 'CPF do Comodante', type: 'cpf', required: true },
      { name: 'comodatario_nome', label: 'Nome do Comodatário', type: 'text', required: true },
      { name: 'comodatario_cpf', label: 'CPF do Comodatário', type: 'cpf', required: true },
      { name: 'bem_descricao', label: 'Descrição do Bem Emprestado', type: 'textarea', required: true },
      { name: 'prazo_uso', label: 'Prazo de Uso', type: 'text', required: true, placeholder: 'Ex: 6 meses, 1 ano' },
      { name: 'finalidade_uso', label: 'Finalidade do Uso', type: 'text', required: true },
    ]
  }
];