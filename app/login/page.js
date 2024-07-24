import React from 'react'

const Login = () => {
  return (
    <div className="flex justify-center items-center pt-28 relative min-h-screen ">
      <Image src="/Grocery.jpg" alt="Grocery background" width={1000} height={1000} className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm"/>
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-45"></div>
      <LoginForm />
    </div>
  )
}

export default Login
