import Image from "next/image";
import Link from 'next/link'
import { FaXTwitter, FaInstagram, FaLinkedin, FaYoutube, FaDiscord, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="lg:items-center md:items-center pb-10 px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] flex flex-col">
            <div className="lg:flex lg:space-x-32 md:flex md:space-x-16 sm:px-0">
            <div className="flex-col space-y-6 flex">
                    <div className="pt-10 font-medium">Company</div>
                    <div className="font-light space-y-4 text-sm">
                        <div><Link href="https://coriscus.com/about-us">About us</Link></div>
                        <div><Link href="https://coriscus.com/teams">Teams</Link></div>
                        <div><Link href="https://coriscus.com/mission">Mission</Link></div>
                        <div><Link href="https://coriscus.com/careers">Careers</Link></div>
                    </div>
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="pt-10 font-medium">Our services</div>
                    <div className="font-light space-y-4 text-sm">
                        <div><Link href="https://craft.coriscus.com">Craft</Link></div>
                        <div><Link href="https://workspace.coriscus.com">Workspace</Link></div>
                        <div><Link href="https://myfoodstats.com">MyFoodStats</Link></div>
                    </div>
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="pt-10 font-medium">Explore more</div>
                    <div className="font-light space-y-4 text-sm">
                        <div><Link href="https://coriscus.com/news">What&apos;s new</Link></div>
                        <div><Link href="https://coriscus.com/standards">Overview & standards</Link></div>
                        <div><Link href="https://coriscus.com/research">Our research</Link></div>
                        <div><Link href="https://coriscus.com/news/stories">Stories</Link></div>
                    </div>
                </div>
                <div className="flex-col space-y-6 flex">
                    <div className="pt-10 font-medium">Terms & policies</div>
                    <div className="font-light space-y-4 text-sm">
                        <div><Link href="https://coriscus.com/policies/terms-of-use">Terms of use</Link></div>
                        <div><Link href="https://coriscus.com/policy/privacy">Privacy policy</Link></div>
                        <div><Link href="https://coriscus.com/policies/guidelines">Brand guidelines</Link></div>
                        <div><Link href="https://coriscus.com/policies">Other policies</Link></div>
                    </div>
                </div>
            </div>  
        </div> 
    );
}
 
export default Footer;