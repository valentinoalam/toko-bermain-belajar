import GameCreateLand from "@/components/sections/game-create-land";
import SocialShareSidebar from "@/components/social-share-sidebar";

export default function Page() {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi4Fg7JD215FtmDnc9afZj8kmy8OWRBymFmcn1Eu2IhjA4_gBiHYwiaebgfIokvZXqW_7NhtYrqHPd_AUE7bNgohTYpHBj6l1zsKQxXGeO2n-QBvx_QDhqPBAMfk0uhpYWlG4QGYZd1WypwReSye2UAgaumbM-dBJLDS3XMUc6bc2tyCLeYJIOTpEz3jq4psJXlS519Z8SMLYp2YSpX2jnp8kECQHtpkHEpm3zJBJ1VkjZ3HDL3oF_3EJvJNuMECqFj5cbEoWUyJqE")' }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Build Your Own Mini Island
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Unleash creativity with our sensory toy set. Mold, shape, and create unique mini islands with playdough, slime, and miniature objects.
              </h2>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#c3e5b2] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Product Highlights</h2>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1
            className="text-[#131810] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            What&apos;s Included
          </h1>
          <p className="text-[#131810] text-base font-normal leading-normal max-w-[720px]">Our toy set comes with everything you need to create your own mini islands.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCz62FKmirJGEtl5NVzBXaM3kPrDQ7dKL92gTMiSCcAbA4P9Gmf-EqZM-H7K6sp3PMK02YdCp43RxhEfxKzh3q_k2xdvxE0w9aIzUuB1qQJ5Av_7AjgzJs_Rnuf44EejoqOWuioTJ3xytuNi15PwzLh5KMRTahKuOxLCxTPEEf7qgzRsMlvb1iy17hOmpM8mf5K_DifayVzcnuezRjrrr1q9A4uoQ2Uap-8B9fiP3ghPFgbnIQacupxcCwFBcx52L864zs7Gh3JXcSa")' }}
            ></div>
            <div>
              <p className="text-[#131810] text-base font-medium leading-normal">Earth-Toned Playdough</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">Three colors of playdough to represent earth, sand, and vegetation.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw_0xcjDRrR4cyIF-kU3afF6ZMIlG9kVf_7ALwWc-h-2K2ywy-V46a21EF8Td5IPUVRj5Y0jLXbn2IwQjfGP-2tgv_BxUIwIGMlNoy-gGp2h6TTud0Baa9rKuepiRWf6fb0AOHXF4S7gv2OSG7RYlzWzILz6G40t-mVeg-NPIPSL1yKkTYkDquEs_L8mhXGASySMAbWCNoSpKswYP9cw_Wd0TZ6vDIAOlYe8ac1uqiS0nSvFiI9awUixkBV_yIm4EdeUV2f-uJPGlA")' }}
            ></div>
            <div>
              <p className="text-[#131810] text-base font-medium leading-normal">Ocean Blue Slime</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">Blue slime to simulate the ocean surrounding your island.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzbLNgIBAHp7veYI7qor2hBxxldS_7QEcSJVrrTk9C-ZuOYlOYrlTN57I4phluFk-OK62BqyEzRsvLczHBtoIwBI-wO8Je0KIq8yobotijnKspkxAw6qeoZSyfWvfeEAtSXpaLUEks5sjfqNZu79OokYJwt2pL8aAl6lJ8F8FP34Nucw6gKVZUAdCiIDoeouCGz6yiMO5O1H5GGWfteow1BCSems1ev0NrlLOu43yutbZPllX6q4d8e7lkEI-isb5fTJ6WsqKwOPg8")' }}
            ></div>
            <div>
              <p className="text-[#131810] text-base font-medium leading-normal">Miniature Island Objects</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">A variety of miniature objects like trees, rocks, and animals to decorate your island.</p>
            </div>
          </div>
        </div>
      </div>
      <SocialShareSidebar />
      <GameCreateLand />
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Benefits</h2>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1
            className="text-[#131810] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Why Choose Island Builders?
          </h1>
          <p className="text-[#131810] text-base font-normal leading-normal max-w-[720px]">
            Our toy set is designed to stimulate creativity and enhance sensory skills in children.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#d9e2d4] bg-[#fafbf9] p-4 flex-col">
            <div className="text-[#131810]" data-icon="PuzzlePiece" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M220.27,158.54a8,8,0,0,0-7.7-.46,20,20,0,1,1,0-36.16A8,8,0,0,0,224,114.69V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36.11,36.11,0,0,0-11.36-26.24,36,36,0,0,0-60.55,23.62,36.56,36.56,0,0,0,.14,6.62H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36.12,36.12,0,0,0-26.24,11.36,35.7,35.7,0,0,0-9.69,27,36.08,36.08,0,0,0,33.31,33.6,35.68,35.68,0,0,0,6.62-.14V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V165.31A8,8,0,0,0,220.27,158.54ZM208,208H64V165.31a8,8,0,0,0-11.43-7.23,20,20,0,1,1,0-36.16A8,8,0,0,0,64,114.69V72h46.69a8,8,0,0,0,7.23-11.43,20,20,0,1,1,36.16,0A8,8,0,0,0,161.31,72H208v32.23a35.68,35.68,0,0,0-6.62-.14A36,36,0,0,0,204,176a35.36,35.36,0,0,0,4-.22Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#131810] text-base font-bold leading-tight">Enhances Sensory Skills</h2>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">Working with playdough and slime helps develop tactile and sensory skills.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#d9e2d4] bg-[#fafbf9] p-4 flex-col">
            <div className="text-[#131810]" data-icon="PaintBrush" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#131810] text-base font-bold leading-tight">Promotes Creativity</h2>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">The open-ended nature of the toy encourages imaginative play and creativity.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#d9e2d4] bg-[#fafbf9] p-4 flex-col">
            <div className="text-[#131810]" data-icon="HandWaving" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#131810] text-base font-bold leading-tight">Fun and Engaging</h2>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">Children will have hours of fun building and customizing their mini islands.</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tutorial</h2>
      <div className="p-4 @container">
        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtT69QNXCJqMXLmlO4bdz-Holjukt1wVjUGMD3I-3yJlbWqLvCUZWSUnGeHFbOYjU5cOb0VVhSNYy4pMjtZW5X556miFJOVtGoG_HRzU9CwmQfdhmFYBTghiJJsI2OMAjTSKd6KwkLLwHLxaSVWI4L58bRb-wd4kDq9jrZ-ZU1EDl3YhWgnmI8Y0jjjp2VdZMAOB_f6I6_BeVDl3FNUpVehvFEgvvf0Ck-s8TXqCii5wUCF2_UBWQ-PJffqjYU7LKfCphnlvMiR8qN")' }}
          ></div>
          <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p className="text-[#6b8a5c] text-sm font-normal leading-normal">Step-by-Step Guide</p>
            <p className="text-[#131810] text-lg font-bold leading-tight tracking-[-0.015em]">How to Build Your Mini Island</p>
            <div className="flex items-end gap-3 justify-between">
              <p className="text-[#6b8a5c] text-base font-normal leading-normal">
                Follow our simple tutorial to create your first mini island. Start with a base of playdough, add the blue slime for the ocean, and decorate with miniature
                objects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Reviews</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg7nkDRrfBmzmdwnnebyzWX9KDO7GwYcSwJu6o5FdEXUW5qACrQcHkVgNBQmLbhWaQaBaCTMwVSkzBcI7_IPjqqICUI1Cy1CQXDurp6kUvkKOUC7aRw5AT_-eB0XA4mN2ps9GSytd58I5gBDa6-ZS1lqr_b43TAscgU9Tr9rdJgfTNz-kN-3Zqrvah51PSmpUeqPT9v34crmT6jAmPzLgFEs6GwJNvUDPw7CtWqSm9rNlBe8dsxnlHuijccT2iWCuSKzVkaEB6Gfmq")' }}
          ></div>
          <div>
            <p className="text-[#131810] text-base font-medium leading-normal">Review by Sophia Carter</p>
            <p className="text-[#6b8a5c] text-sm font-normal leading-normal">My kids absolutely love this toy set!</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAojWTqCY-LUVw5vlR_uzcaeFY9ih-UVLc2hkfmCeqcBHCw9SbABGge_MT8Y4TNdVccF7o9keV4lT9rc3K8Ry8VEQ4mzf7m8zsho2uO1K4qEGAHb2Kewt5zYp5pG3vE4pZQ54wXtkJ9P41Z1CIFaW7yUacnNA_xJQeZi64oeBKah0g9YNaUcoU1SBEGmqvHd1B1s1cvP7sdc1wlJuQ0K-e8grjM5NJF9mqKxfw63JXUHNNgZYU-8ki318cPp7TGisKN2h9Hkw8GlGhM")' }}
          ></div>
          <div>
            <p className="text-[#131810] text-base font-medium leading-normal">Review by Noah Patel</p>
            <p className="text-[#6b8a5c] text-sm font-normal leading-normal">The Island Builders set is a fun and creative toy.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDC8y7A4spWt3ucVSiEP6rUWyjow5aQABhVgN2L9jaF4bS_tYuPoHJob7wAxxpx5OVk5U6jU_up0hMFlhrlg2bG8PkU-pIPO3OPKoUrFnz-h8t2pPe0-Y4mY9o93H8NslY9Qm4zkve5cHlFtswJ2ow6eA8qcxLUZH1VRfc4vQy8tSEscoem-FHLuKtCtshmUY0xOhRcyZzke-bWO0W7Blz4wf-QVLPJfrzkVa-Dy6nDGQLHPu--Nmd1ZlfBC6TFg4tm2MPmHQX5LB_z")' }}
          ></div>
          <div>
            <p className="text-[#131810] text-base font-medium leading-normal">Review by Olivia Reyes</p>
            <p className="text-[#6b8a5c] text-sm font-normal leading-normal">This toy set is amazing!</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-[#fafbf9] p-4">
        <div className="flex flex-col gap-3 bg-[#fafbf9]">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlb95OtExMG3A7MgvI82hH9frtqNng8LM-Yd6AMWlh7CBNxupXDSOG91M6SMqfWT3mZwxGOrdIHS6yDJ7e8PUmOyausNzkGN5BypbN1N03C1k5JjRcm7ZDkTqU2CrhnIDWWmcpCcn4QqW0ZQaD4sPFA9CR7YwjN6Nt4WPr1gn1-hOZ20d5gABMa8P6KT9atJh8uhN-EGbbvR3ITXdtb6dPJJV__Xo_4KwmMmcrinvS7ywgAePFoCb7EcBLLiwb6dwWfJSvJbGkxaaU")' }}
            ></div>
            <div className="flex-1">
              <p className="text-[#131810] text-base font-medium leading-normal">Sophia Carter</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">June 15, 2024</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="text-[#131810] text-base font-normal leading-normal">
            My kids absolutely love this toy set! It&apos;s been a fantastic way to keep them entertained and engaged. The quality of the playdough and slime is excellent, and the
            miniature objects are a great addition. Highly recommend!
          </p>
          <div className="flex gap-9 text-[#6b8a5c]">
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                  ></path>
                </svg>
              </div>
              <p className="text-inherit">12</p>
            </button>
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                  ></path>
                </svg>
              </div>
              <p className="text-inherit">2</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#fafbf9]">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB48XZFQoL2x2PGy2hIf7Sy1-7FjUI6zUpLd1o-Cheo5Z9ZW1Ygwnu91zaQwGX0ZhH_KlgWPZxnuhj3MZBPfsLVFii7BNhapbnAoa8-tT60PJ7wLnLyz1JfIYrnWd3i9cWXZUAonaLqW7sm0uFHLmJta5c7Csg9tDsDaT4ebJn6s-jMB2sUscLTWl61mcaU2TB_XCoe0_vLS3vCqDJi4GWWzW8yNlkDwMFHtefkvc4xZV_ThXrt6fWzNE9exONKPM4CLKjOsQRPJD2C")' }}
            ></div>
            <div className="flex-1">
              <p className="text-[#131810] text-base font-medium leading-normal">Noah Patel</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">May 22, 2024</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#beceb6]" data-icon="Star" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="text-[#131810] text-base font-normal leading-normal">
            The Island Builders set is a fun and creative toy. My son enjoys building different islands and decorating them. The only reason I didn&apos;t give it 5 stars is that
            the slime can be a bit sticky, but overall, it&apos;s a great product.
          </p>
          <div className="flex gap-9 text-[#6b8a5c]">
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                  ></path>
                </svg>
              </div>
              <p className="text-inherit">8</p>
            </button>
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                  ></path>
                </svg>
              </div>
              <p className="text-inherit">1</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[#fafbf9]">
          <div className="flex items-center gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCw93J_rmy0s9l2zkWDIV_oReaYY2mpn3SOmqnyBMLdDp-yI9rTIim8eqTKBHPQRDp66-BygSoyNQTSsFkQaw6SWFPgK0-ZEZ_nRAUgedFTp_I_LKX7zURrtceVf_hxCR4MqAdKBFohqsN8FJOscV2BLVho5KUoLaQb0k1TAGPcQ4oLXBsz-AIBIUf1RTPyZlw3f69dJgiCwJDKCRhvMgE5F7PY9s77JKuhpEVt2xkVVpvJAXmLBLvgx0Y5cDRrsoqQ3__lZNeb4X7x")' }}
            ></div>
            <div className="flex-1">
              <p className="text-[#131810] text-base font-medium leading-normal">Olivia Reyes</p>
              <p className="text-[#6b8a5c] text-sm font-normal leading-normal">April 10, 2024</p>
            </div>
          </div>
          <div className="flex gap-0.5">
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
            <div className="text-[#c3e5b2]" data-icon="Star" data-size="20px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="text-[#131810] text-base font-normal leading-normal">
            This toy set is amazing! My daughter has spent hours playing with it, and it&apos;s helped her develop her creativity and fine motor skills. The variety of objects
            included is impressive, and the instructions are easy to follow. We&apos;re very happy with our purchase.
          </p>
          <div className="flex gap-9 text-[#6b8a5c]">
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsUp" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"
                  ></path>
                </svg>
              </div>
              <p className="text-inherit">15</p>
            </button>
            <button className="flex items-center gap-2">
              <div className="text-inherit" data-icon="ThumbsDown" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Zm150,21.29a7.88,7.88,0,0,1-6,2.71H152a8,8,0,0,0-8,8v24a24,24,0,0,1-19.29,23.54L88,150.11V56H204a8,8,0,0,1,7.94,7l12,96A7.87,7.87,0,0,1,222,165.29Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Submit Your Review</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="Write your review here"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131810] focus:outline-0 focus:ring-0 border border-[#d9e2d4] bg-[#fafbf9] focus:border-[#d9e2d4] min-h-36 placeholder:text-[#6b8a5c] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <select
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131810] focus:outline-0 focus:ring-0 border border-[#d9e2d4] bg-[#fafbf9] focus:border-[#d9e2d4] h-14 bg-[image:--select-button-svg] placeholder:text-[#6b8a5c] p-[15px] text-base font-normal leading-normal"
          >
            <option value="one">Select a rating</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#d9e2d4] px-6 py-14">
          <div className="flex max-w-[480px] flex-col items-center gap-2">
            <p className="text-[#131810] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Upload Photo</p>
            <p className="text-[#131810] text-sm font-normal leading-normal max-w-[480px] text-center">Share a photo of your mini island</p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ecf1ea] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Choose File</span>
          </button>
        </div>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c3e5b2] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Submit Review</span>
        </button>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Pricing &amp; Shipping</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d9e2d4] bg-[#fafbf9] p-6 max-w-[480px]">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#131810] text-base font-bold leading-tight">Island Builders Set</h1>
            <p className="flex items-baseline gap-1 text-[#131810]">
              <span className="text-[#131810] text-4xl font-black leading-tight tracking-[-0.033em]">$29.99</span>
              <span className="text-[#131810] text-base font-bold leading-tight">per set</span>
            </p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#ecf1ea] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Buy Now</span>
          </button>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#131810]">
              <div className="text-[#131810]" data-icon="Check" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Includes playdough, slime, and miniature objects
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#131810]">
              <div className="text-[#131810]" data-icon="Check" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Free shipping on orders over $50
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#131810] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently Asked Questions</h2>
      <div className="flex flex-col p-4 gap-3">
        <details className="flex flex-col rounded-xl border border-[#d9e2d4] bg-[#fafbf9] px-[15px] py-[7px] group" open={ true }>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#131810] text-sm font-medium leading-normal">What is the recommended age for the Mini Island Toy Set?</p>
            <div className="text-[#131810] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#6b8a5c] text-sm font-normal leading-normal pb-2">
            The Mini Island Toy Set is recommended for children ages 4 and up. It contains small parts that may not be suitable for younger children.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#d9e2d4] bg-[#fafbf9] px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#131810] text-sm font-medium leading-normal">Are the materials used in the toy set safe for children?</p>
            <div className="text-[#131810] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#6b8a5c] text-sm font-normal leading-normal pb-2">
            The Mini Island Toy Set is recommended for children ages 4 and up. It contains small parts that may not be suitable for younger children.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#d9e2d4] bg-[#fafbf9] px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#131810] text-sm font-medium leading-normal">How do I clean up after playing with the toy set?</p>
            <div className="text-[#131810] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#6b8a5c] text-sm font-normal leading-normal pb-2">
            The Mini Island Toy Set is recommended for children ages 4 and up. It contains small parts that may not be suitable for younger children.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#d9e2d4] bg-[#fafbf9] px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#131810] text-sm font-medium leading-normal">What are the shipping details for the Mini Island Toy Set?</p>
            <div className="text-[#131810] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#6b8a5c] text-sm font-normal leading-normal pb-2">
            The Mini Island Toy Set is recommended for children ages 4 and up. It contains small parts that may not be suitable for younger children.
          </p>
        </details>
        <details className="flex flex-col rounded-xl border border-[#d9e2d4] bg-[#fafbf9] px-[15px] py-[7px] group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-[#131810] text-sm font-medium leading-normal">What is your return policy for the Mini Island Toy Set?</p>
            <div className="text-[#131810] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </summary>
          <p className="text-[#6b8a5c] text-sm font-normal leading-normal pb-2">
            The Mini Island Toy Set is recommended for children ages 4 and up. It contains small parts that may not be suitable for younger children.
          </p>
        </details>
      </div>
      <div className="@container">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
          <div className="flex flex-col gap-2 text-center">
            <h1
              className="text-[#131810] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
            >
              Ready to Start Building?
            </h1>
            <p className="text-[#131810] text-base font-normal leading-normal max-w-[720px">Order your Island Builders set today and let the creativity begin!</p>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="flex justify-center">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#c3e5b2] text-[#131810] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
              >
                <span className="truncate">Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
