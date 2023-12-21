import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io"
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {

  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseProduct, decreaseProduct } = useContext(CartContext);
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`} className="">
          <img className='max-w-[80px]' src={image} />
        </Link>
        <div className="w-full flex flex-col">
          <div className='flex mb-2 justify-between'>
            <Link to={`/product/${id}`} className='text-sm uppercase max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="cursor-pointer text-xl">
              <IoMdClose className='text-gray-500 hover:text-red-500 transition ' />
            </div>
          </div>
          <div className="flex items-center gap-x-2 h-9 text-sm">
            <div className='border flex flex-1 max-w-[100px] rounded shadow items-center h-full text-primary font-medium'>
              <div onClick={()=>decreaseProduct(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div onClick={()=>increaseProduct(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className='flex flex-1 items-center justify-around font-semibold'><b>${price}</b></div>
            <div className='flex flex-1 justify-end items-center font-semibold'>Total: <b>${parseFloat(price * amount).toFixed(2)}</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
