import Image from "next/image";
export default function Subsection({title, subTitle}){
    return(
        <div className="container mx-auto pt-16">
        <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
            <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">{title}</h1>
            <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">{subTitle}</p>
        </div>
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r  xl:pb-10 pb-16 items-center">
               
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r xl:pb-10 pb-16 items-center">
               
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l xl:pb-10 pb-16 items-center">
                
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r xl:pt-10 items-center">
                
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r xl:pt-10 items-center">
                
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                
            </div>
        </div>
    </div>
    )
}