import Image from "next/image"
export default function Services({services}) {
  return (
    <section className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white lg:mx-24 my-24">
    <div className="items-center lg:mt-12 not-sr-only lg:sr-only">
    <h1  className="text-2xl text-center md:text-3xl font-bold md:font-sans  md:pt-0 md:mt-12 md:ml-12 lg:ml-12 text-white text-gray-800 antialiased">SERVICES</h1>
    </div>
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 gap-1 ">
     <div className="lg:row-span-2 lg:col-span-1 lg:row-start-1 lg:col-start-1 lg:bg-pink-50 sr-only lg:not-sr-only">
     <div className="xl:w-full xl:h-full md:w-full lg:w-3/4 md:h-3/4 ">
    <div className="md:flex md:flex-col md:w-full md:h-full space-y-2">
    <div className="xl:ml-24 xl:mt-28 lg:ml-12 lg:mt-12 lg:p-4 xl:p-0">
    <h1  className="text-lg md:text-3xl text-left md:font-bold md:font-sans md:mt-10  text-white md:text-gray-800 antialiased">SERVICES</h1>
    </div>
    <div className="md:w-full md:h-full lg:p-4 lg:ml-6 xl:-ml-2 xl:p-0">
    <p className="leading-relaxed text-md lg:text-center text-gray-800">
       "Team LMNAs have built custom pre-sales enquiry and offer management solution for us, now we are 45% more efficient interms of offer closure"
      </p> 
      </div>
    </div> 
    </div> 
    </div>   
     <div className="row-span-1 col-span-1 md:col-span-2 row-start-1 md:col-start-1 lg:col-start-2 md:border-b-2 md:mt-12 lg:mt-1 bg-white mt-12">
     <div className="flex flex-row">
         <div className=" mt-10">
                <Image width="160" height="160" src="/money-bag.gif" />
            </div>
            <div className="flex flex-col mt-12 p-2">
                <div>
                    <h1 className="text-lg font-bold font-sans text-gray-800">
                       FINANCE
                    </h1>
                </div>
                <div>
                    <p className="text-md font-normal font-sans text-gray-800">
                    We help ecommerce businesses grow their revenue 
                    </p>
                </div>
                <div>
                    <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2">Explore</button>
                </div>
                </div>
                </div>
    </div>
    <div className="row-span-1 col-span-1 row-start-2 col-start-1 lg:col-start-2 w-full items-center justify-center">
     <div className="flex flex-row">
     <div className=" mt-10">
            <Image width="160" height="160" src="/social-care.gif" />
        </div>
        <div className="flex flex-col mt-12 p-2">
            <div>
                <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                   HR
                </h1>
            </div>
            <div>
                <p className="text-md font-normal font-sans text-gray-800 ml-4">
                We help ecommerce businesses grow their revenue 
                </p>
            </div>
            <div>
                <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
            </div>
            </div>
            </div>
    </div>
    <div className="row-span-1 col-span-1 row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:col-start-3 w-full md:border-l-2">
     <div className="flex flex-row md:ml-2">
     <div className=" mt-10">
            <Image width="160" height="160" src="/calculator.gif" />
        </div>
        <div className="flex flex-col mt-12 p-2">
            <div>
                <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                PAYROLL
                </h1>
            </div>
            <div>
                <p className="text-md text-gray-800 ml-4">
                We help businesses Scaling & Maintaining Growth Systems.
                </p>
            </div>
            <div>
                <button className="text-md border-2 text-purple-500 px-4 py-1 mt-2 ml-4">Explore</button>
            </div>
            </div>
            </div>
    </div>
</div>
   {/**  <section className="lg:bg-gradient-to-r from-pink-50 via-white to-white bg-gradient-to-b from-pink-50 via-white to-white mt-44">
         
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-1 ">
    <div className="row-span-1 col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 row-start-1 md:col-start-1 lg:col-start-1 bg-pink-50 sr-only lg:not-sr-only">
    <div className="w-full h-full" >
        <h1 className="text-2xl md:text-3xl text-center font-bold font-sans text-gray-800">
                   SERVICES
                </h1>
        </div>
    </div>
       
     <div className="row-span-1 col-span-1 md:col-span-2 lg:col-span-1 row-start-1 md:col-start-1 lg:col-start-2 md:border-b-2 lg:border-r-  ">
     <div className="flex flex-row md:ml-32 lg:ml-4">
     <div className="mt-10 " >
            <Image alt="services-icon" width="160" height="160"  src="/calculator.gif" />
        </div>
        <div className="flex flex-col mt-12 p-2">
            <div>
                <h1 className="text-lg font-bold font-sans text-gray-800 ml-4 lg:ml-0">
                   PAYROLL
                </h1>
            </div>
            <div>
                <p className="text-md text-gray-800 ml-4 lg:ml-0">
                We help ecommerce businesses grow their revenue
                </p>
            </div>
            <div>
                <button className="text-md bg-blue-400 font-semibold rounded-sm shadow-md px-4 py-1 mt-2 ml-4 lg:ml-0">Explore</button>
            </div>
            </div>
            </div>
    </div>
    <div className="row-span-1 col-span-1 row-start-2 col-start-1 lg:col-start-3  w-full items-center justify-center lg:-mt-20 lg:ml-4">
     <div className="flex flex-row lg:border-b-2 ">
     <div className="mt-10 " >
            <Image alt="services-icon" width="160" height="160"  src="/money-bag.gif" />
        </div>
        <div className="flex flex-col mt-12 p-2">
            <div>
                <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                   FINANCE
                </h1>
            </div>
            <div>
                <p className="text-md font-normal font-sans text-gray-800 ml-4">
                We help ecommerce businesses grow their revenue
                </p>
            </div>
            <div>
                <button className="text-md bg-blue-400 font-semibold rounded-sm shadow-md px-4 py-1 mt-2 ml-4">Explore</button>
            </div>
            </div>
            </div>
    </div>
    <div className="row-span-1 col-span-1 row-start-3 col-start-1 md:row-start-2 md:col-start-2 lg:col-start-4 lg:border-b-2  w-full  lg:mb-8 md:border-l-2 lg:border-l-0">
     <div className="flex flex-row md:ml-2 lg:ml-8">
     <div className="mt-10 " >
            <Image alt="services-icon" width="160" height="160"  src="/social-care.gif" />
        </div>
        <div className="flex flex-col mt-12 p-2">
            <div>
                <h1 className="text-lg font-bold font-sans text-gray-800 ml-4">
                   HR
                </h1>
            </div>
            <div>
                <p className="text-md text-gray-800 ml-4">
                We help ecommerce businesses grow their revenue
                </p>
            </div>
            <div>
                <button className="text-md bg-blue-400 font-semibold rounded-sm shadow-md px-4 py-1 mt-2 ml-4">Explore</button>
            </div>
            </div>
            </div>
    </div>
</div>
    {/** <section className="bg-gradient-to-br from-pink-50 via-white to-white my-24">
    <div className=" mt-24 py-12 xl:ml-8">
        <h1 className="text-3xl text-gray-800 text-center font-bold tracking-tight"></h1>
    <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-2 md:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 gap-4">
    <div className="row-span-1 col-span-1 md:ml-8 lg:ml-4 xl:-ml-24">
    <div className="md:mx-auto container flex justify-center py-16 px-4">
    <div className="flex flex-col space-y-8 w-full lg:px-8 xl:px-16 md:max-w-xl">
        <div className="bg-gray-200 text-white h-56 md:w-72 lg:w-96 rounded-xl shadow-md border-4 border-gray-200">
            <img className="block object-cover object-center w-full h-full rounded-xl" src="/services/account-assets-audit-bank-bookkeeping-finance-concept.jpg" />
        </div>
        <div className="relative ">
            <div
                className="absolute md:right-20 lg:right-28 xl:right-24 2xl:right-44 flex space-x-2 items-start bg-pink-50  text-gray-900 border-gray-200 shadow-2xl  -mt-4 md:-mt-16 w-48 h-12 md:w-60 rounded-lg">
                <div className="flex-initial">
                    <div
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
                        
                    </div>
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl mt-2 md:mt-2 lg:mt-2 font-bold tracking-tight">Payroll As a Services</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div className="row-span-1 col-span-1 md:-ml-4 md:-ml-12 lg:-ml-8 xl:-ml-20 ">
    <div className="md:mx-auto container flex justify-center py-16 px-4">
    <div className="flex flex-col space-y-8 w-full lg:px-16 md:max-w-xl">
        <div className="bg-gradient-to-tl from-gray-200 to-gray-200 text-white h-56 md:w-72 lg:w-96 rounded-xl shadow-md">
        <div className="bg-gray-200 text-white h-56 md:w-72 lg:w-96 rounded-xl shadow-md border-4 border-gray-200">
            <img className="block object-cover object-center w-full h-full rounded-xl" src="/services/wepik-photo-mode-2022620-121223.png" />
        </div>
        </div>
        <div className="relative">
            <div
                className="absolute md:right-28 lg:right-24 xl:left-20 flex space-x-2 items-start bg-pink-50  text-gray-900 border-gray-200 shadow-2xl -mt-4 md:-mt-16 w-48 h-12 md:w-60 px-2 py-3 rounded-lg">
                <div className="flex-initial">
                   
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl font-bold tracking-tight">HR As a Services</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div className="row-span-1 col-span-1 md:ml-20 lg:ml-48 md:-mt-24 xl:-mt-0 xl:-ml-16">
    <div className="md:mx-auto container flex justify-center py-16 px-4">
    <div className="flex flex-col space-y-8 w-full md:px-16 md:max-w-xl ">
        <div className="bg-gradient-to-tl from-gray-200 to-gray-200 text-white h-56 md:w-96 rounded-xl shadow-md">
        <div className="bg-gray-200 text-white h-56 md:w-72 lg:w-96 rounded-xl shadow-md border-4 border-gray-200">
            <img className="block object-cover object-center w-full h-full rounded-xl" src="/services/account-assets-audit-bank-bookkeeping-finance-concept (2).jpg" />
        </div>
        </div>
        <div className="relative">
            <div
                className="absolute md:left-12 xl:ml-44 flex space-x-2 items-start bg-pink-50  text-gray-900 border-gray-200 shadow-2xl -mt-4 md:-mt-16 w-48 h-14 md:w-60 rounded-lg">
                <div className="flex-initial">
                   
                </div>

                <div className="flex-1 inline-flex items-start justify-between">
                    <div>
                        <h2 className="text-lg md:text-xl mt-4 md:mt-2 font-bold tracking-tight">Finance As a Services</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
  </div>
</section> **/}
</section>
  )
}