
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
      <>
        <Link href='/' className='mx-6 my-4'>
          <span className='text-black text-md italic font-bold mx-1 my-0' style={{ fontFamily:'Gill Sans, sans-serif' }}>CORISCUS</span>
          <span className='text-black text-sm mx-1 my-0 text-center'>workspace</span>
        </Link>
      </> 
    );
}
 
export default Logo;