export type FoodItem = {
  id: string;
  catId: string;
  name: string;
  brand?: string;
  stockGrams: number;
  targetGrams: number;
};

export type ShoppingListItem = {
  id: string;
  label: string;
  done: boolean;
};

export type BudgetEntry = {
  id: string;
  catId: string;
  amount: number;
  currency: 'EUR' | 'USD';
  category: 'food' | 'vet' | 'accessories' | 'other';
  spentAt: string;
};
