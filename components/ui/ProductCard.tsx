'use client';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types/user';
import { formatCurrency } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={product.images[0] || '/placeholder.png'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute top-2 right-2 rounded-full bg-white/80 p-2 transition-opacity hover:opacity-100 focus:opacity-100 opacity-0 group-hover:opacity-100">
          <Heart className="h-5 w-5 text-rose-500 fill-current" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-white font-bold">{product.title}</p>
          <p className="text-white/80 text-sm mt-1">{formatCurrency(product.price)}</p>
        </div>
      </div>
    </Link>
  );
}
