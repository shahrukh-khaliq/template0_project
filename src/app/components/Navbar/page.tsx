import next from "next";
import Link from "next/link";
import Image from "next/image";

export default function navbar(){
    return(
    <div className="font-puppins">
       <div className="flex">
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
        {/* <div className="relative">
            <Image src="/Rectangle 1.png" width={1440} height={316} alt="Navimg"/>
            <div className="absolute inset-8 flex items-center justify-center pb-20">
                <Image src="/Logo-05.png" width={77} height={77} alt="Logo-05"/>
            
            </div>
            <div className="absolute inset-0 flex items-center pt-9 justify-center text-black text-5xl font-bold">
            
            Home
            
            </div>  
        </div> */}
        
    </div>
);

};