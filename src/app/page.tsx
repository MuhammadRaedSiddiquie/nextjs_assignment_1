import Link from 'next/link'
import about from './about/page';
import contact from './contact/page';

export default function Home() {
  return (
    <div>
      <section className="flex items-center justify-center h-screen w-full bg-green-400 flex-col">
        <h2 className="text-white text-4xl">Home Section</h2>
      </section>
      <section className="flex items-center justify-center h-screen w-full bg-green-300 flex-col gap-6">
        <h2 className="text-white text-4xl">About Section</h2>
        <button className="bg-green-600 border-2 border-white flex items-center justify-center py-4 px-6 rounded-[10px] text-xl text-white"><Link href={'./about'}>About Page</Link></button>
      </section>
      <section className="flex items-center justify-center h-screen w-full bg-green-200 flex-col gap-6">
        <h2 className="text-white text-4xl">Services Section</h2>
        <button className="bg-green-600 border-2 border-white flex items-center justify-center py-4 px-6 rounded-[10px] text-xl text-white"><Link href={'./service'}>Services Page</Link></button>
      </section>
      <section className="flex items-center justify-center h-screen w-full bg-green-100 flex-col gap-6">
        <h2 className="text-white text-4xl">Contact Section</h2>
        <button className="bg-green-600 border-2 border-white flex items-center justify-center py-4 px-6 rounded-[10px] text-xl text-white"><Link href={'./contact'}>Contact Page</Link></button>
      </section>
    </div>
  ); 
}
