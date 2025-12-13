'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButtonNoArticle({ 
  label 
}: { 
  label: string 
}) {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.back()}
      className='bg-hyper-800 hover:bg-hyper-700 text-white px-6 py-2 rounded-lg transition-colors border border-gray-700 flex items-center gap-2'
     >
      <ArrowLeft size={16} /> {label}
    </button>
  );
}