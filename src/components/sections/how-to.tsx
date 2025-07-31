import React from 'react'

function HowTo() {
  return (
    <div className="layout-container flex h-full grow flex-col">
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
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f4f3e7] text-[#131810] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#131810]" data-icon="X" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
                ></path>
              </svg>
            </div>
          </button>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 lg:max-w-[960px] flex-1">
            <h2 className="text-[#131810] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">How to Build Your Island</h2>
            <div className="flex items-center gap-4 bg-[#fcfcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#131810] flex items-center justify-center rounded-lg bg-[#f4f3e7] shrink-0 size-12" data-icon="PaintBrush" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131810] text-base font-medium leading-normal line-clamp-1">Select and Apply Materials</p>
                <p className="text-[#9c9b49] text-sm font-normal leading-normal line-clamp-2">
                  Tap the material icons at the bottom to select. Drag your finger on the island to apply.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fcfcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#131810] flex items-center justify-center rounded-lg bg-[#f4f3e7] shrink-0 size-12" data-icon="Palette" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131810] text-base font-medium leading-normal line-clamp-1">Material Options</p>
                <p className="text-[#9c9b49] text-sm font-normal leading-normal line-clamp-2">
                  Choose from grass, sand, earth, and slime for water. Experiment with different combinations!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fcfcf8] px-4 min-h-[72px] py-2">
              <div className="text-[#131810] flex items-center justify-center rounded-lg bg-[#f4f3e7] shrink-0 size-12" data-icon="Tree" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M198.1,62.6a76,76,0,0,0-140.2,0A72.27,72.27,0,0,0,16,127.8C15.89,166.62,47.36,199,86.14,200A71.68,71.68,0,0,0,120,192.49V232a8,8,0,0,0,16,0V192.49A71.45,71.45,0,0,0,168,200l1.86,0c38.78-1,70.25-33.36,70.14-72.18A72.26,72.26,0,0,0,198.1,62.6ZM169.45,184a55.61,55.61,0,0,1-32.52-9.4q-.47-.3-.93-.57V132.94l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94V174q-.47.27-.93.57A55.7,55.7,0,0,1,86.55,184a56,56,0,0,1-22-106.86,15.9,15.9,0,0,0,8.05-8.33,60,60,0,0,1,110.7,0,15.9,15.9,0,0,0,8.05,8.33,56,56,0,0,1-22,106.86Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131810] text-base font-medium leading-normal line-clamp-1">Adding Objects</p>
                <p className="text-[#9c9b49] text-sm font-normal leading-normal line-clamp-2">Tap the object icons to add animals, stones, and trees to your island.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#fcfcf8] px-4 min-h-[72px] py-2">
              <div
                className="text-[#131810] flex items-center justify-center rounded-lg bg-[#f4f3e7] shrink-0 size-12"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131810] text-base font-medium leading-normal line-clamp-1">Zoom and Rotate</p>
                <p className="text-[#9c9b49] text-sm font-normal leading-normal line-clamp-2">Use the zoom and rotate controls to get the perfect view of your island.</p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f4f13d] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Start Building</span>
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HowTo