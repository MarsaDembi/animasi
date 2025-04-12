'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center mt-20">
      <Image src="/marsa.jpg" width={150} height={150} alt="Marsa Dembi" className="rounded-full shadow-lg"/>
      <h1 className="text-3xl font-bold text-purple-700 mt-4">Marsa Dembi</h1>
      <p className="text-lg text-gray-600">Creative Software Engineer 🚀</p>
    </div>
  );
}
