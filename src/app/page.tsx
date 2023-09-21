import Infopage from './components/Infopage';
import Navbar from './components/Navbar';
import products from '../app/utils/api-beer.json';
import Image from 'next/image';

interface Product {
  name: string,
  price: number,
  image: string
}

export default function Home() {
  return (
    <main className='bg-[#F7F5F5] w-full h-screen text-black flex flex-col'>
      <Navbar />
      <Infopage />
      <div className='w-full'>
        <ul className='m-auto max-w-6xl grid grid-cols-4 gap-5 p-10'>
          {products.map((product: Product, index: number) => (
            <li
              className='w-full flex flex-col gap-4'
              key={index || null}>
              <span className='w-full h-60 bg-white flex justify-center items-center rounded-md'>
                <Image src={product.image} alt={product.name} width={100} height={100} className='p-4' />
              </span>
              <span>{product.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
