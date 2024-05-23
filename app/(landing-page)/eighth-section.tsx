
import { HiArrowUpRight } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";


const GetStartedFree = () => {
    return ( 
    <>
        <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Turns ambitions into achievements!
        </div>
        <div className="py-4 xl:w-1/3  text-center px-10">
          Get started with Coriscus Workspace for free
        </div>
        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
          <Link href="/signup">Try now</Link> <HiArrowUpRight className="ml-3 text-sm" />          
        </div>
      </div>
    </>
    
    );
}
 
export default GetStartedFree;