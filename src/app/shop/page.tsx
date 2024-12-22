import Navbar from "../components/Navbar/page";
import Link from "next/link";
import Image from "next/image";

export default function shop() {
    return (
        <div>

            <Navbar />
            <div className="relative">
                <Image src="/Rectangle 1.png" width={1440} height={316} alt="Navimg" />
                <div className="absolute inset-8 flex items-center justify-center pb-20">
                    <Image src="/Logo-05.png" width={77} height={77} alt="Logo-05" />

                </div>
                <div className="absolute inset-0 flex items-center pt-9 justify-center text-black text-5xl font-bold">

                    Shop

                </div>
                <div className="absolute inset-0 flex items-center pt-32 justify-center gap-3 text-black  ">
                    <p className="font-bold">Home </p>
                    <div className="h-[8] w-[14]"><Image src="/Vector.png" width={14} height={8} alt="Arrow" /></div>
                    <p> Shop</p>
                </div>
            </div>
            {/* <---------------- filter --------->*/}
            <div>
                <Image src={"/Group 63.png"} width={1440} height={100} alt="filter" />

            </div>
            {/* <---------------- cards row 1 --------->*/}
                <div className="flex justify-center items-center">
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Trenton modular sofa_3 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Trenton modular sofa_3 1</h2>
                            <p className="text-2xl mb-4">Rs. 25,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[750] h-[384.46] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Granite dining table with dining chair 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Granite dining table with dining chair</h2>
                            <p className="text-2xl mb-4">Rs. 25,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Outdoor bar table and stool 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Outdoor bar table and stool 1</h2>
                            <p className="text-2xl mb-4">Rs. 25,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Plain console with teak mirror 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Plain console with teak mirror 1</h2>
                            <p className="text-2xl mb-4">Rs. 25,000.00</p>

                        </div>
                    </div>
                    </a>
                
                </div>

             {/* <---------------- cards row 2--->*/}
            
                <div className="flex justify-center items-center">
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Grain coffee table 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Grain coffee table 1</h2>
                            <p className="text-2xl mb-4">Rs. 15,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Kent coffee table 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Kent coffee table 1</h2>
                            <p className="text-2xl mb-4">Rs. 225,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Round coffee table_color 2 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Round coffee table_color 2 1</h2>
                            <p className="text-2xl mb-4">Rs. 251,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Reclaimed teak coffee table 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Reclaimed teak coffee table 1</h2>
                            <p className="text-2xl mb-4">Rs. 25,200.00</p>

                        </div>
                    </div>
                    </a>
                
                </div>

                    {/* <---------------- cards row 3--->*/}
            
                    <div className="flex justify-center items-center">
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Plain console_ 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Plain console_ 1</h2>
                            <p className="text-2xl mb-4">Rs. 258,200.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Reclaimed teak Sideboard 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Reclaimed teak Sideboard 1</h2>
                            <p className="text-2xl mb-4">Rs. 20,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/SJP_0825  1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">SJP_0825  1</h2>
                            <p className="text-2xl mb-4">Rs. 200,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Bella chair and table 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Bella chair and table 1</h2>
                            <p className="text-2xl mb-4">Rs. 100,000.00</p>

                        </div>
                    </div>
                    </a>
                
                </div>
    {/* <---------------- cards row 4--->*/}
            
    <div className="flex justify-center items-center">
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Granite square side table 2.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Granite square side table 2</h2>
                            <p className="text-2xl mb-4">Rs. 258,800.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Asgaard sofa 2.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Asgaard sofa 2</h2>
                            <p className="text-2xl mb-4">Rs. 250,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Maya sofa three seater 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Maya sofa three seater 1</h2>
                            <p className="text-2xl mb-4">Rs. 115,000.00</p>

                        </div>
                    </div>
                    </a>
                    <a href="#"><div className="max-w-sm  w-[287] h-[287] rounded-lg shadow-lg bg-white overflow-hidden hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-grey-500">
                        {/* <!-- Image Section --> */}
                        <Image src="/Outdoor sofa set 1.png" width={287} height={287} alt="Card Image" className="w-[750] h-[384.46]" />

                        {/* <!-- Card Content Section --> */}
                        <div className="p-6">
                            <h2 className="text-base font-semibold text-gray-800 mb-2">Outdoor sofa set 1</h2>
                            <p className="text-2xl mb-4">Rs. 244,000.00</p>

                        </div>
                    </div>
                    </a>
                
                </div>

          {/* <---------------- pages No, Section --------->*/}
          <div className="flex justify-center items-center py-10">
                <Image src={"/Group 72.png"} width={392} height={60} alt="Page No." />

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