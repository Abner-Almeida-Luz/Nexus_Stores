import {
  carts,
  categories,
  orders,
  products,
  users,
} from './database';

const DB_KEY = 'nexora_mock_db';

export interface MockDatabase {
  products: typeof products;
  categories: typeof categories;
  users: typeof users;
  carts: typeof carts;
  orders: typeof orders;
}

export function loadDatabase(): MockDatabase {
  const stored = localStorage.getItem(DB_KEY);

  if (stored) {
    return JSON.parse(stored);
  }

  const initialDatabase: MockDatabase = {
    products,
    categories,
    users,
    carts,
    orders,
  };

  localStorage.setItem(
    DB_KEY,
    JSON.stringify(initialDatabase)
  );

  return structuredClone(initialDatabase);
}

export function saveDatabase(db: MockDatabase) {
  localStorage.setItem(
    DB_KEY,
    JSON.stringify(db)
  );
}