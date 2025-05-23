// Updated types to support product variants

export interface Product {
  id: number;
  slug: string;
  name: string;
  category?: string;
  model?: string;
  oldPrice?: number;
  badge?: string;
  shortDescription?: string;
  description: string;
  features: string[];
  specifications: Record<string, any>;
  images: string[];
}

// New type for product groups
export interface ProductGroup {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  primaryImage: string;
  variants: Product[];
}
