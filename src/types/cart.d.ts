export type cartItem = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Cart = cartItem[];

export type cartUpdater = (
  action: 'add' | 'increment' | 'decrement',
  item: { name: string; price: number; image: string }
) => void;
