import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className='flex justify-between bg-white px-5 py-3 items-center'>
        <Link href={"/"}>
            <img src="/assets/logo.svg" alt="logo"/>
        </Link>
        <div className='flex gap-5 font-bold items-center'>
            <Link href={""}>Crypto Taxes</Link>
            <Link href={""}>Free Tools</Link>
            <Link href={""}>Resource center</Link>
            <Link className='getStarted' href={"/getstarted"}>Get Started</Link>
        </div>
    </nav>
  )
}

export default Nav