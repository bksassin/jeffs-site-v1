import React from 'react'
import headerBg from '../assets/headerbg.jpg'

function Home() {
  return (
<div className="bg-gray-900">
  <div className="relative isolate overflow-hidden pt-14 h-screen">
    <img src={headerBg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" />
    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
  <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fillOpacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
  <defs>
    <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFCC80" />
      <stop offset="1" stopColor="#FFB74D" />
    </linearGradient>
  </defs>
</svg>

    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
      <div className="text-center mx-5">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">JEFF DOES IT ALL</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">From Fixing to Improving: Trust Our Skilled Professional to Get Your Home in Perfect Condition.




</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contact" ><button class="bg-[#ECA400] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Get An Estimate
</button></a>
          <a href="#services" className="text-sm font-semibold leading-6 text-white hover:text-[#ECA400]">What we offer <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
    <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
  <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
  <defs>
    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFCC80" />
      <stop offset="1" stopColor="#FFB74D" />
    </linearGradient>
  </defs>
</svg>

    </div>
  </div>
</div>

  )
}

export default Home

