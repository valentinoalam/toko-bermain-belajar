import React from 'react'

function Login() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfcf8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 lg:max-w-[960px] flex-1">
            <h2 className="text-[#1b1b0d] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome Back!</h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Username"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b1b0d] focus:outline-0 focus:ring-0 border-none bg-[#f3f3e7] focus:border-none h-14 placeholder:text-[#9a984c] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Password"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1b1b0d] focus:outline-0 focus:ring-0 border-none bg-[#f3f3e7] focus:border-none h-14 placeholder:text-[#9a984c] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <p className="text-[#9a984c] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">Forgot Password?</p>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#edea2a] text-[#1b1b0d] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Login</span>
              </button>
            </div>
            <p className="text-[#9a984c] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">Don&apos;t have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login