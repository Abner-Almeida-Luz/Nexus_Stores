import type {
  Cart,
  Category,
  Order,
  Product,
  User,
} from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Notebook Gamer',
    description: 'Alto desempenho para jogos e trabalho.',
    price: 4599.9,
    stock: 12,
    categoryId: 1,
    categoryName: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
  },
  {
    id: 2,
    name: 'Smartphone Pro',
    description: 'Câmera de alta resolução e tela AMOLED.',
    price: 2999,
    stock: 20,
    categoryId: 1,
    categoryName: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    id: 3,
    name: 'Headset Bluetooth',
    description: 'Cancelamento de ruído ativo.',
    price: 399.9,
    stock: 35,
    categoryId: 1,
    categoryName: 'Eletrônicos',
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Eletrônicos',
    description: 'Produtos eletrônicos e tecnologia.',
  },
  {
    id: 2,
    name: 'Informática',
    description: 'Computadores, periféricos e acessórios.',
  },
];

export const users: User[] = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@nexora.com',
    password: 'admin123',
    role: 'ADMIN',
  },
  {
    id: 2,
    name: 'Cliente',
    email: 'user@nexora.com',
    password: 'user123',
    role: 'USER',
  },
];

export const carts: Cart[] = [];

export const orders: Order[] = [];