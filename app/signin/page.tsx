import { Auth } from '@/components/Auth';
import { GoogleButton } from '@/components/GoogleButton';
import React from 'react';

export default async function SignIn() {
    
  return (
    <div className="flex w-full h-full justify-center items-center flex-col">
        <h1 className='text-lg'>Авторизация</h1>
        <GoogleButton/>
      <Auth />

    </div>
  );
}
