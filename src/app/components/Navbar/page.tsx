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
       
        
    </div>
);

};