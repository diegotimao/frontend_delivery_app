'use client'
import React, { useState } from 'react';
import products from '../utils/api-beer.json';
import Image from 'next/image';
import { MinusCircle, PlusCircle } from 'lucide-react';

interface Product {
  name: string,
  price: number,
  image: string
}

export default function Products() {
  const [countProducts, setCountProducts] = useState<number[]>(Array(products.length).fill(0));
  const [cartList, setCartList] = useState<{ product: Product, count: number }[]>([]);

  console.log(cartList);
  
  const addToProduct = (index: number) => {
    const updatedProducts = [...countProducts];
    updatedProducts[index] += 1;
  
    if (updatedProducts[index] > 0) {
      const product = products[index];
      const existingCartItemIndex = cartList.findIndex((item) => item.product === product);
  
      if (existingCartItemIndex !== -1) {
        const updatedCartList = [...cartList];
        updatedCartList[existingCartItemIndex].count += 1;
        setCartList(updatedCartList);
      } else {
        const newCartItem = {
          product: product,
          count: 1,
        };
        setCartList([...cartList, newCartItem]);
      }
    }
  
    setCountProducts(updatedProducts);
  };

  const subToProduct = (index: number) => {
    const product = products[index];
    const existingCartItemIndex = cartList.findIndex((item) => item.product === product);

    const updatedProducts = [...countProducts];
    if (updatedProducts[index] == 0) {
      updatedProducts[index] = 0;
    } else {
      updatedProducts[index] -= 1;

      if (existingCartItemIndex !== -1) {
        const updatedCartList = [...cartList];
        updatedCartList[existingCartItemIndex].count = updatedProducts[index];
        setCartList(updatedCartList);
      }

      if (cartList[existingCartItemIndex].count === 0) {
        const newCartList = cartList.filter((item) => item.count > 0);
        setCartList(newCartList);
      }
    }
    return setCountProducts(updatedProducts);
  }

  return (
    <section className='w-full'>
      <ul className='m-auto max-w-6xl grid grid-cols-4 gap-5 p-10'>
        {products.map((product: Product, index: number) => (
          <li
            className='w-full h-96 flex flex-col bg-white gap-2'
            key={index || null}>
            <span className='w-full h-60 bg-white flex justify-center items-center rounded-md'>
              <Image src={product.image} alt={product.name} width={100} height={100} className='p-5' />
            </span>
            <div className='w-full h-20'>
              <h3 className='text-center font-medium text-lg p-2'>{product.name}</h3>
            </div>
            <div className='flex justify-between items-center p-5'>
              <h3 className='text-3xl text-green-400'>{product.price}</h3>
              <div className='flex items-center gap-2'>
                <button onClick={() => subToProduct(index)}>
                  <MinusCircle />
                </button>
                <input type="text" value={countProducts[index]} className='w-10 h-8 border border-gray-400 rounded-md pl-1' />
                <button onClick={() => addToProduct(index)}>
                  <PlusCircle />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
