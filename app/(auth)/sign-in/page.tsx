import React from 'react'
import AuthForm from '@/components/AuthForm'

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg shadow-lg">
        <AuthForm type="sign-in" />
      </div>
    </div>
  )
}

export default Page
