import Image from "next/image"
export default function Bom(bom){
    return(
        <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center pb-12">
                    <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                        <div className="py-2 text-color md:-ml-16 lg:-ml-2">
                <div className="flex flex-row">
                <Image width="120" height="100" src="/receipt.gif" /> 
                <h1 className="text-2xl lg:text-3xl font-bold mt-10">BILL OF MATERIALS (BOM)</h1>
                </div>
                            <p className="md:text-md lg:text-lg py-4 md:py-8">A bill of material is at the heart of any cloud manufacturing software, and a well-defined BOM ensures robustness and accuracy. ERPNext's BOM is hierarchical, with the finished product at the top. It also includes product codes, part descriptions, quantities, costs and additional specifications.</p>
                            <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                <h3 className="text-lg  font-semibold underline text-indigo-700">Lets Explore</h3>
                                <div className="pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center border-8">
                        <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="/bill-of-materials.png" alt />
                        <div className="relative z-10 bg-white rounded shadow-lg border-4 transform scale-125 p-6 xl:-mb-20">
                              <img src="/bill-of-materials1.jpg" className="w-full h-full" />
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-strech mx-4 my-12">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                        <div className="flex flex-row xl:-ml-8">
                <Image width="100" height="100" src="/protection.gif" /> 
                <h1 className="text-lg lg:text-3xl lg:w-3/4 font-bold mt-10 uppercase">Total control over your production</h1>
                </div>   
                         <p className="md:w-full lg:w-11/12 xl:w-full mt-4 lg:mt-5 text-md lg:text-lg text-gray-600">Integrate your production planning and shop floor. ERPNext's customer management, sales orders, inventory, purchasing, accounting, and financial reporting make real-time coordination across all your business verticals easier.</p>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-24">
                        <div className="relative w-full h-full border-2">
                            <img src="/production-analytics.png" alt="A lounge sofa" className="w-full h-full relative hidden lg:block" />
                            <img src="/production-analytics.png" alt="A lounge sofa" className="w-full h-full lg:hidden" />
                            
                        </div>
                        
                    </div>
                </div>
                <div className="md:mx-auto md:container px-4">
                <div className="pb-32 pt-16">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                <div className="flex flex-row xl:-ml-20">
                <Image width="120" height="100" src="/warehouse.gif" /> 
                <h1 className="text-lg lg:text-3xl font-bold mt-10 uppercase">SHOP FLOOR management</h1>
                </div>    <p className="text-md lg:text-lg py-8">With ERPNext's job cards, operations and workstations features, you can automatically capture daily activities on your shop floor. View real-time status of the job work being done to manufacture products, the location of every workstation, employee assignments, and each work order's current status and pending steps — all in one screen.</p>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                        <h3 className="text-md lg:text-lg font-bold underline text-indigo-700">Lets Explore</h3>
                                        <div className="pl-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center border-4">
                                <img className="absolute w-full h-full rounded-md" src="/shopfloor-management39c837.png" alt />
                                <div className="relative z-10 p-4 bg-white shadow-xl border-4 rounded mx-auto md:w-3/4 md:h-1/2 -mb-20 ">
                                <img className="absolute w-full h-full inset-0  rounded-md " src="/shopfloor-management39c837.jpg" alt />
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>\
            <div className="2xl:mx-auto 2xl:container mx-4 py-16">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://erpnext.com/files/item-variants.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">ITEMS VARIANT</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                    Suppose you produce t-shirts in different sizes and colors. You'll need to track each type of t-shirt and its variants, known as item variants. In ERPNext, the primary item is stored as an item template, and each of the variations is stored as an item variant. You can store any attribute, such as color or shape, for each item variant.  </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                       </div>
                </div>
            </div>
        </div>
        </div>
        
        
    )
}