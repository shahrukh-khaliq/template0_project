import Navbar from "../components/Navbar/page";
import Image from "next/image";
import Link from "next/link";

export default function contact() {
    return (
        <div>
            <Navbar />
            <div className="relative">
                <Image src="/Rectangle 1.png" width={1440} height={316} alt="Navimg" />
                <div className="absolute inset-8 flex items-center justify-center pb-20">
                    <Image src="/Logo-05.png" width={77} height={77} alt="Logo-05" />

                </div>
                <div className="absolute inset-0 flex items-center pt-9 justify-center text-black text-5xl font-bold">

                    Contact

                </div>
                <div className="absolute inset-0 flex items-center pt-32 justify-center gap-3 text-black ">
                    <p className="font-bold">Home </p>
                    <div className="h-[8] w-[14]"><Image src="/Vector.png" width={14} height={8} alt="Arrow" /></div>
                    <p> Contact</p>
                </div>
            </div>
            {/* <---------------- Body --------->*/}
            <div className="w-[1440] h-[1144] font-poppins">
                <h1 className="text-3xl font-semibold  flex justify-center">Get In Touch With Us</h1>
                <p className="font-normal text-[16]  flex justify-center text-[#9F9F9F] pr-96 pl-96">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="w-[1058] h-[923] flex">
                    <div className="w-[393] h-[537] m-36 pl-24 pr-24">

                        <div><div className="flex"><Image src="/Vector 1.png" width={22} height={21.18} alt="Address" />
                            <h1 className="font-medium text-2xl pl-3">Address</h1>
                        </div>
                            <p className="text-[16] font-normal pl-9">236 5th SE Avenue, New<br /> York NY10000, United States</p>
                        </div>


                        <div className="pt-12"><div className="flex"><Image src="/bxs_phone.png" width={30} height={30} alt="Address" />
                            <h1 className="font-medium text-2xl pl-3">Phone</h1>
                        </div>
                            <p className="text-[16] font-normal pl-9">Mobile: +(84) 546-6789 <br />
                                Hotline: +(84) 456-6789</p>
                        </div>


                        <div className="pt-12"><div className="flex"><Image src="/bi_clock-fill.png" width={23} height={23} alt="Address" />
                            <h1 className="font-medium text-2xl pl-3">Working Time</h1>
                        </div>
                            <p className="text-[16] font-normal pl-9">Monday-Friday: 9:00 -<br /> 22:00<br />
                                Saturday-Sunday: 9:00 -<br /> 21:00</p>
                        </div>

                    </div>
                    {/* <---------------- Form --------->*/}
                    <div className="w-[635] h-[923] font-poppins">
                        <form>
                            <fieldset className="mt-28">
                                <legend className="text-base text-medium pb-2 pt-4">Your Name</legend>
                                <input className="w-[528.75] h-[75] pr-60 pb-2 pt-2 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type=" text" name="Name" placeholder="Abc" required />

                                <legend className="text-base text-medium pb-2 pt-4">Email Address</legend>
                                <input className="w-[528.75] h-[75] pr-60 pb-2 pt-2 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type=" Email" name="Email" placeholder="Abc@def.com" required />

                                <legend className="text-base text-medium pb-2 pt-4">Subject</legend>
                                <input className="w-[528.75] h-[75] pr-60 pb-2 pt-2 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type=" text" name="Subject" placeholder="This is an optional" required />

                                <legend className="text-base text-medium pb-2 pt-4">Message</legend>
                                <textarea className="w-[528.75] h-[75] pr-64 pb-2 pt-2 border border-[#9F9F9F] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" name="Message" id="Message" rows={6} placeholder="Hi! i’d like to ask about" required></textarea>
                            </fieldset>

                            <button className="w-[237] bg-white border-black border text-black py-3 px-11 mt-4 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring--500 transition duration-300 " type="submit">Submit</button>
                        </form>

                    </div>




                </div>
            </div>


            {/* <---------------- Footer 1 --------->*/}
            <div className="h-[300] w-1[1440] flex p-10 m-5 mx-auto text-black bg-[#FAF4F4] font-poppins">
                <div className="h-[108] w-[376 ] pr-9 pl-9">
                    <h1 className="text-3xl">Free Delivery</h1>
                    <p className="text-xl text-[#9F9F9F] ">For all orders over $50 consectetur adipim scing elit.</p>
                </div>
                <div className="h-[108] w-[376 ] pr-9 pl-9">
                    <h1 className="text-3xl">90 Days Return</h1>
                    <p className="text-xl text-[#9F9F9F] ">If goods have problems, consectetur adipim scing elit.</p>
                </div>
                <div className="h-[108] w-[376 ] pr-9 pl-9">
                    <h1 className="text-3xl">Secure Payment</h1>
                    <p className="text-xl text-[#9F9F9F] ">100% secure payment, consectetur adipim scing elit.</p>
                </div>
            </div>
            {/* <---------------- Footer 2 --------->*/}
            <footer className="bg-[#FFFFFF]] text-white py-6 w-full h-[555]">
                <div className="flex pt-14">
                    <div className=" pl-20 mr-60 mt-36 mx-auto">
                        <p className="text-base font-semibold text-[#9F9F9F] w-80">400 University Drive Suite 200 Coral Gables,
                            FL 33134 USA</p>
                        <p className="text-base text-black pt-32">2022 Meubel House. All rights reverved</p>
                    </div>  

                    <div className=" w-full">
                            <p className="text-gray-400 pb-10">Link</p>
                            <p className="text-black pb-10"><Link href={"/"}>Home</Link></p>
                            <p className="text-black pb-10"><Link href={"/shop"}>Shop</Link></p>
                            <p className="text-black pb-10"><Link href={"About"}>About</Link></p>
                            <p className="text-black pb-10"><Link href={"contct"}>Contact</Link></p>
                        
                    </div>
                    <div className=" w-full">
                   
                            <p className="text-gray-400 pb-10">Help</p>
                            <p className="text-black pb-10"><Link href={"#"}>Payment Option</Link></p>
                            <p className="text-black pb-10"><Link href={"#"}>Return</Link></p>
                            <p className="text-black pb-10"><Link href={"#"}>Privacy policy</Link></p>
                        
                        
                    </div>
                    <div className=" w-full">
                        
                            <p className="text-gray-400 pb-10">Newletter</p>
                            <p className="text-black pb-10"><input className="border" type="email" placeholder="Enter Your Email address " /></p>
                            <button className="w-[237] bg-white border-black border text-black py-3 px-11 mt-4 rounded-2xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring--500 transition duration-300 " type="submit">Subscribe</button>   
                        
                    
                    </div>

                </div>
            </footer>

        </div>

    );

};