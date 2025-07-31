import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4f3e7] px-10 py-3">
      <div className="flex items-center gap-4 text-[#131810]">
        <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
            ></path>
            </svg>
        </div>
        <h2 className="text-[#131810] text-lg font-bold leading-tight tracking-[-0.015em]">Island Builder</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-[#131810] text-sm font-medium leading-normal" href="#">Home</a>
          <a className="text-[#131810] text-sm font-medium leading-normal" href="#">Products</a>
          <a className="text-[#131810] text-sm font-medium leading-normal" href="#">Tutorial</a>
          <a className="text-[#131810] text-sm font-medium leading-normal" href="#">About</a>
          <a className="text-[#131810] text-sm font-medium leading-normal" href="#">Contact</a>
        </div>
        <div className="flex gap-0">
          <button
            className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-s-full rounded-e-xl h-10 px-4 bg-[#c3e5b2] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Join</span>
          </button>
          <button
            className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-s-xl rounded-e-full h-10 px-4 bg-[#f4f3e7] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Login</span>
          </button>
        </div>
        
      </div>
  </header>
  )
}

export default Header