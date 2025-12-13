'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ 
  label 
}: { 
  label: string 
}) {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.back()}
      className="absolute top-8 left-4 md:left-8 bg-black/30 hover:bg-black/50 backdrop-blur text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
    >
      <ArrowLeft size={16} /> {label}
    </button>
  );
}