import React from 'react';

const Cards = () => {
  return (
    <div className='flex gap-4 p-4'>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>User</p>
          <p className='text-gray-600'>20</p>
        </div>
       
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>Course</p>
          <p className='text-gray-600'>WMA</p>
        </div>
        
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>Present</p>
          <p className='text-gray-600'>20</p>
        </div>
       
      </div>
    </div>
  );
}

export default Cards;
