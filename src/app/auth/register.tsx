import React from 'react'

const Register = () => {
  return (
    <>
      <h2 className="text-[#131810] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create Your Island Adventure</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#131810] text-base font-medium leading-normal pb-2">Username</p>
          <input
            placeholder="Choose a unique name"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131810] focus:outline-0 focus:ring-0 border-none bg-[#f4f3e7] focus:border-none h-14 placeholder:text-[#9c9b49] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#131810] text-base font-medium leading-normal pb-2">Email</p>
          <input
            placeholder="Your email address"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131810] focus:outline-0 focus:ring-0 border-none bg-[#f4f3e7] focus:border-none h-14 placeholder:text-[#9c9b49] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#131810] text-base font-medium leading-normal pb-2">Password</p>
          <input
            placeholder="Create a secure password"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131810] focus:outline-0 focus:ring-0 border-none bg-[#f4f3e7] focus:border-none h-14 placeholder:text-[#9c9b49] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex px-4 py-3">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#f4f13d] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Register</span>
        </button>
      </div>
    </>
  )
}

export default Register