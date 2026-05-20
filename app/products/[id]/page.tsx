// app/products/[id]/page.tsx
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import ProductCard from '@/components/ui/ProductCard';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return { title: 'Dettagli Prodotto ' + id };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await supabase.from('products').select('*').eq('id', id).single().maybeSingle(); // Esempio

  if (!product) return notFound();

  return (
    <div className="container mx-auto p-4">
       <ProductCard product={product} />
       <div className="mt-4">
         <h1 className="text-3xl font-bold">{product.title}</h1>
         <p className="text-2xl mt-2">{formatCurrency(product.price)}</p>
       </div>
    </div>
  );
}
