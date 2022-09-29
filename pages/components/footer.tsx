import Link from "next/link";
import Terms from '../terms';

export default function Footer() {
    return (
        <div className="py-10 bg-gradient-to-b from-dark-blue to-black" id="contact">
            <div className="justify-center gap-3 px-10 space-x-0 md:flex md:space-x-10 lg:space-x-0">
                <div className="text-center text-white md:1/2 lg:w-2/5">
                    <p className="mb-3 text-xl text-center font-acme">Colabarate</p>
                    <div className="flex items-center justify-around lg:px-3 md:space-x-5 lg:space-x-3">
                        <a href="">
                            <img src="/images/Logo Pundi.png" alt="" className="mx-auto transition ease-in-out w-28 lg:w-36 hover:scale-110" />
                        </a>
                        <a href="">
                            <img src="/images/logo_nusapay.png" alt="" className="h-8 mx-auto transition ease-in-out lg:h-11 hover:scale-110" />
                        </a>
                    </div>
                </div>
                <div className="mt-5 text-white md:1/2 lg:w-1/5 md:mt-0 ">
                    <p className="mb-3 text-xl font-acme md:text-center lg:text-start">Social Media</p>
                    <Link href="https://instagram.com/pundi.tv?igshid=YmMyMTA2M2Y=">
                        <a className="flex space-x-3 transition ease-in-out lg:h-8 hover:translate-x-3 hover:text-yellow1 item-center">
                            <img src="/images/icon_ig.png" alt="" className="h-8 " />
                            <p>PundiTV</p>
                        </a>
                    </Link>

                </div>
                <div className="mt-5 text-white md:w-1/5 md:mt-0 md:hidden lg:block">
                    <p className="mb-3 text-xl font-acme">Support</p>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">Stige IT Solution</a>
                    </div>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">Nusapay</a>
                    </div>
                </div>
                <div className="mt-5 text-white md:w-1/5 md:mt-0 md:hidden lg:block">
                    <p className="mb-3 text-xl font-acme">Contact Us</p>
                    <div className="group">
                        <Link href="https://wa.me/6281362064410">
                            <a className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">+62813-6206-4410</a>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="mailto:sarupapundiindonesia@punditv.com">
                            <a className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">sarupapundiindonesia@punditv.com</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:hidden">
                <div className="flex justify-center px-10 mt-10 space-x-10 text-center">
                    <div className="w-1/2 text-white ">
                        <p className="mb-3 text-xl font-acme">Support</p>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">Stige IT Solution</a>
                        </div>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">Nusapay</a>
                        </div>
                    </div>
                    <div className="w-1/2 text-white ">
                        <p className="mb-3 text-xl font-acme">Contact Us</p>
                        <div className="group">
                            <Link href="https://wa.me/6281362064410">
                                <a className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">+62813-6206-4410</a>
                            </Link>
                        </div>
                        <div className="group">
                            <Link href="mailto:sarupapundiindonesia@punditv.com">
                                <a className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">sarupapundiindonesia@punditv.com</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-center">
                <Link href="/terms">
                    <a className="block transition ease-in-out hover:text-yellow1 group-hover:translate-x-3">Terms & Condition</a>
                </Link>
            </div>
        </div>
    );
}
