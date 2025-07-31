import React from 'react'

const GameCreateLand = () => {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-3">
              <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#fcfcf8] @[480px]:rounded-xl min-h-80"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfVGhZRSDKOZU4ukG78g3GSWJa61iAZAvN-bmer1A_xDuD-FGI_X3CKVs6Vrqa-X5hsusKvB3Mkg_sal7is_Cvtg3kGBSdeEUpp3gLfLGqvvnt9iBiaZp3ItgrXRN0zt7dpIdJJET0HKaq3LmNYDpa2CWjVVPPimFsMNMzq86vM9gchzYEFvbfn_G0Te2f72O0FkiyMv9p3SAw9XkDSM2JBjTUiU_sMuEjcDm9bkW8Oep_KMPuPGqt2Oe5y-z9njB9qe49lMxtAlkv")' }}
              ></div>
            </div>
          </div>
          <h1 className="text-[#1c1c0d] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Island Builder</h1>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f8f406] text-[#1c1c0d] text-base font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Start Game</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#f4f4e6] text-[#1c1c0d] text-base font-bold leading-normal tracking-[0.015em] w-full"
              >
                <span className="truncate">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCreateLand