import Link from 'next/link'
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa6";

const Copyright = () => {
    return ( 
        <div className='pb-10 px-8 xl:w-3/4 mx-auto 2xl:w-[55%] flex flex-row justify-between items-center bottom-0'>
            <div className='pb-2 md:pb-0'>
                <p className='text-sm text-muted-foreground'>
                    coriscus &copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className='flex justify-center space-x-8'>
                <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
                <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
                <Link href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
                <Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-2xl text-muted-foreground hover:text-gray-600" />
                </Link>
            </div>
        </div>
    );
}
 
export default Copyright;