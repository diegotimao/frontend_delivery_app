import Infopage from './components/Infopage';
import Navbar from './components/Navbar';
import Products from './components/Products';

export default function Home() {
  return (
    <main className='bg-[#F7F5F5] w-full text-black flex flex-col'>
      <Navbar />
      <Infopage />
      <Products />
    </main>
  )
}
