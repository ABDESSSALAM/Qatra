import React from 'react'

function Login() {
  const inputStyle='text-lg outline-none rounded-md px-2 py-1';
  return (
    <div className='w-screen h-screen bg-green-500 flex flex-col justify-center items-center'>
      <div className='bg-primary w-2/5 h-1/3 rounded-md shadow-xl cursor-pointer'>
        <form className='w-full h-full flex flex-col items-stretch justify-around px-4'>
          <input className={inputStyle} type="text" name='password' placeholder='votre adress email' />
          <input className={inputStyle} type="password" name="password" placeholder='mot de pass' />
          <input className='bg-green-600 text-white font-semibold text-2xl rounded-3xl cursor-pointer py-1' type="submit" value="connecter" />
        </form>
      </div>
    </div>
  )
}

export default Login