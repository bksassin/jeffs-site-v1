import React from 'react'
import paintService from '../assets/paint.JPEG'
import './Services.css'

function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Services Offered</h2>
      <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg className='h-8 w-8' height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,7V9a3,3,0,0,1-3,3H14a1,1,0,0,0-1,1h1a1,1,0,0,1,1,1v7a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h1a3,3,0,0,1,3-3h5a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H17.816A2.99,2.99,0,0,1,15,8H5A3,3,0,0,1,5,2H15a2.99,2.99,0,0,1,2.816,2H19A3,3,0,0,1,22,7ZM3.7,16h.6A1.891,1.891,0,0,0,6,13.963a2.324,2.324,0,0,0-.325-1.2L4,10,2.325,12.764A2.324,2.324,0,0,0,2,13.963,1.891,1.891,0,0,0,3.7,16Z"/></svg>
            </div>
            Paint
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">Transform any room in your home with our professional painting services. Our experts can help you choose the perfect colors and finishes to match your personal style.</dd>
        </div>

        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg className='h-8 w-8' version="1.1" id="Icons" 
	 viewBox="0 0 32 32">

<g>
	<path d="M14,3H4C3.4,3,3,3.4,3,4v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C15,3.4,14.6,3,14,3z"/>
	<path d="M14,17H4c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V18C15,17.4,14.6,17,14,17z"/>
	<path d="M28,3H18c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C29,3.4,28.6,3,28,3z"/>
	<path d="M26.5,19.5c-0.4-0.4-1-0.4-1.4,0L23,21.6l-2.1-2.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2.1,2.1l-2.1,2.1
		c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1l2.1,2.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3
		c0.4-0.4,0.4-1,0-1.4L24.4,23l2.1-2.1C26.9,20.5,26.9,19.9,26.5,19.5z"/>
</g>
</svg>
            </div>
            Flooring
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">Upgrade your home with our expert flooring services. We offer a range of flooring options, including hardwood, tile, and laminate, to help you achieve the perfect look and feel for your space.</dd>
        </div>

        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg className='h-8 w-8' viewBox="0 0 16 16" version="1.1">
  <rect width="16" height="16" id="icon-bound" fill="none" />
  <path d="M14,0l-2,2v2h-2V2L8,0L6,2v2H4V2L2,0L0,2v14h4v-2h2v2h4v-2h2v2h4V2L14,0z M4,12V6h2v6H4z M10,12V6h2v6H10z" />
</svg>
            </div>
            Fence/Patio
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">Make the most of your outdoor living space with our custom fence and patio services. We can design and install a beautiful fence or patio to meet your unique needs and preferences.</dd>
        </div>

        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg fill="#000000" version="1.1" id="Layer_1"  
	 className='h-8 w-8' viewBox="0 0 245 256" enableBackground="new 0 0 245 256">
<path d="M190,63.24V7h-31v27.73L122.97,1.82L1.94,110.15l18.4,20.74L39,114.04V254h167V115.08l18.36,16.85l18.89-20.22L190,63.24z
	 M144.43,193.08c1.25-0.41,2.46-0.7,3.71-0.7c3.7-0.13,6.86,1,9.57,3.45c2.7,2.41,4.16,5.41,4.24,9.2c0.13,1.12,0,2.45-0.29,3.7
	l-10.61-9.78l-9.57,10.45l10.73,9.73c-1.24,0.42-2.45,0.71-3.7,0.71c-3.7,0.13-6.87-1-9.57-3.45c-2.7-2.58-4.16-5.58-4.29-9.28
	c0-1.29,0.13-2.75,0.42-4l-2.58-2.45l-15.44-14.11l-26.13,28.8c-1.58,2.12-4.04,3.58-6.87,3.58c-4.57,0-8.28-3.71-8.28-8.29
	c0-2.45,0.96-4.7,2.83-6.28l27.13-28.13l-16.39-15.02c-1.29,0.58-2.75,0.87-4,0.87c-3.7,0.13-6.86-1-9.57-3.45
	c-2.7-2.46-4.16-5.45-4.28-9.15c-0.13-1.13,0-2.46,0.29-3.71l10.73,9.74l9.49-10.4l-10.73-9.74c1.12-0.42,2.45-0.71,3.7-0.71
	c3.7-0.12,6.87,1,9.57,3.46c2.7,2.41,4.16,5.57,4.29,9.27c0.12,1.25,0,2.46-0.3,3.71l16.9,15.48l12.36-13.36l-18.48-16.27
	l16.77-19.1l47.48,41.78l-16.77,19.1L137.82,162l-11.95,14.11L144.43,193.08z"/>
</svg>
            </div>
            Rehab
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">From minor updates to major renovations, our rehab services can help breathe new life into your home. Our experts can handle everything from electrical and plumbing to drywall and insulation, ensuring a seamless and stress-free process.</dd>
        </div>
        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg className='h-8 w-8' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<rect x="0" fill="none" width="24" height="24"/>

<g>

<path d="M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zM6 6h5v5H6V6zm4.5 13C9.12 19 8 17.88 8 16.5S9.12 14 10.5 14s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3-6l3-5 3 5h-6z"/>

</g>

</svg>
            </div>
            Custom Jobs
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">Have a unique project in mind? Our team specializes in custom jobs and can help bring your vision to life, no matter how big or small.</dd>
        </div>
        <div>
          <dt className="text-base font-semibold leading-7 text-gray-900">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-[#eca400]">
            <svg fill="#000000" className='h-8 w-8' viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 27.5898 33.0508 C 26.3007 33.0508 25.6210 32.3945 25.6210 31.1289 L 25.6210 30.8008 C 25.6210 28.3867 26.9335 27.0742 28.6913 25.8555 C 30.8710 24.3789 31.8788 23.5352 31.8788 21.8477 C 31.8788 19.9961 30.4257 18.7305 28.1992 18.7305 C 26.5585 18.7305 25.3163 19.5508 24.5663 20.8867 C 23.7695 21.8242 23.5351 22.5508 22.1523 22.5508 C 21.3320 22.5508 20.4648 21.9649 20.4648 20.8633 C 20.4648 20.4414 20.5351 20.0430 20.6523 19.6445 C 21.2851 17.3711 24.1210 15.4023 28.3398 15.4023 C 32.5351 15.4023 36.1679 17.5820 36.1679 21.6602 C 36.1679 24.6133 34.4570 26.0196 32.0663 27.6367 C 30.3788 28.7852 29.5585 29.6289 29.5585 31.0118 L 29.5585 31.3164 C 29.5585 32.2774 28.8085 33.0508 27.5898 33.0508 Z M 27.6601 40.1055 C 26.3241 40.1055 25.0351 39.0274 25.0351 37.5742 C 25.0351 36.1211 26.3007 35.0430 27.6601 35.0430 C 29.0429 35.0430 30.2851 36.0977 30.2851 37.5742 C 30.2851 39.0508 29.0195 40.1055 27.6601 40.1055 Z"/></svg>
            </div>
            Other
          </dt>
          <dd className="mt-1 text-base leading-7 text-gray-600">This category includes a range of additional services that we offer, such as pressure washing, gutter cleaning, and small handyman repairs. Contact us to see how we can help with your specific needs.</dd>
        </div>
      </dl>
    </div>
  </div>
</div>

  )
}

export default Services
