'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import type { FormEventHandler } from 'react';

export const Auth = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
    });
    if (res && !res.error) {
      router.push('/');
    } else {
      console.log('fault');
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 justify-center items-center "
    >
      <input
        type="email"
        name="email"
        className="rounded-md border border-indigo-600 p-2"
      />
      <input
        type="text"
        name="password"
        className="rounded-md border border-indigo-600 p-2"
      />

      <button type="submit" className="border border-indigo-600 p-2 rounded-md">
        Войти
      </button>
    </form>
  );
};
