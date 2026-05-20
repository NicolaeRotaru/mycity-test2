// app/page.tsx
import ProductCard from '@/components/ui/ProductCard';

export default async function Home() {
  // Fetch diretto a Supabase (se non si usa Server Components)
  // Oppure usa una funzione API per recuperare prodotti
  const products = [
    { id: '1', title: 'Vasocino in Gomma', price: 12.50, images: ['/img/1.jpg'] },
    { id: '2', title: 'Scatola per Lattughe', price: 8.00, images: ['/img/2.jpg'] },
    // ... altri dati
  ];

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Piacenza Market</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
