import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center 
  justify-between w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-red-600 w-full">
        <div className=" flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold text-black italic underline">
              (00){' '}
            </h1>
            <p className="text-black text-x1 italic">(00)</p>
          </div>
        </div>

        <div className="bg-green-300 flex items-center justify-center ">
          <div className="text-white text-center">
            <h1 className="text-3xl font-bold text-black italic underline">
              Crazy Seite
            </h1>
            <p className="text-black text-xl italic ">
              Dies ist die Crazy Seite.
            </p>
            {/* Bild Hinzufügen */}
            
          </div>
        </div>
      </div>
    </main>
  );
}
