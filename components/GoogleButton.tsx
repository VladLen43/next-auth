'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callBackUrl = searchParams.get('callBackUrl') || '/signin'
  return (
    <button onClick={() => signIn('google',{callBackUrl})}>GoogleButton</button>
  )
}
