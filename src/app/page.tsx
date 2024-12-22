import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
        {/* <---------------- Nav bar --------->*/}
       <div className="flex bg-[#FBEBB5] font-puppins">
                <div className="w-full h-[100] gap-16 p-6 ml-60 flex justify-center font-medium text-1xl">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/shop"}>Shop</Link>
                    <Link href={"/About"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>

                <div className=" w-[247] h-[28] p-6 mr-10">
                    <Image src="/Navicon.png" width={247}  height={28} alt="Picture of the author"/>

                </div>
        </div>

  {/* <---------------- header --------->*/}
      <div className="w-[1440] h-[900] bg-[#FBEBB5] relative">
          <div className="absolute mt-96 pl-16">
          <p className="text-6xl">Rocket single <br /> seater</p>
          <a href=""><p className="text-2xl pt-5">Shop Now</p></a>
          <Image src="/Line 1.png" width={121} height={704} alt="Line"/>
          </div>
          <div className="flex justify-end"> <Image src="/Rocket single seater 1.png" width={853} height={1000} alt="single seater" />
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
}
