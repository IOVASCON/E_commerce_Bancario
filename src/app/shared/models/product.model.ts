export interface Product {
    id: number;                 // ID do produto
    sku: string;                // SKU do produto
    name: string;               // Nome do produto (exemplo: "Seguro de Vida Completo")
    description: string;        // Descrição do produto bancário
    unitPrice: number;          // Preço ou taxa do produto
    imageUrl: string;           // URL da imagem do produto
    active: boolean;            // Indica se o produto está ativo
    unitsInStock: number;       // Quantidade em estoque (caso aplicável)
    dateCreated: Date;          // Data de criação do produto
    lastUpdate: Date;           // Data da última atualização do produto
    productType: 'Seguro de Vida' | 'Seguro de Carro' | 'Seguro Residencial' | 'Plano de Previdência Privada'; // Tipo do produto
  }
  