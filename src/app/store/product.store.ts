import { create } from 'zustand';

export type ProductType = 'credito' | 'debito' | 'ahorro' | 'inversion' | 'prestamo';

export type Product = {
  id: string;
  tipo: ProductType;
  nombre: string;
  numeroCuenta: string;
  estado: 'activo' | 'bloqueado' | 'suspendido' ;
};

type ProductState = {
  products: Product[];
  selectedProduct: Product | null;
  setProducts: (products: Product[]) => void;
  selectProduct: (productId: string) => void;
  clear: () => void;
};

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  selectedProduct: null,
  setProducts: (products) => {
    const selected = products.length > 0 ? products[0] : null;
    set({ products, selectedProduct: selected });
  },
  selectProduct: (productId) =>
    set((state) => ({
      selectedProduct: state.products.find((p) => p.id === productId) || null,
    })),
  clear: () => set({ products: [], selectedProduct: null }),
}));
