import Navbar from "../components/Navbar/page";
import Image from "next/image";

export default function About(){
    return(
    <div>
            <Navbar />
        <div className="relative">
                <Image src="/Rectangle 1.png" width={1440} height={316} alt="Navimg"/>
            <div className="absolute inset-8 flex items-center justify-center pb-20">
                <Image src="/Logo-05.png" width={77} height={77} alt="Logo-05"/>
                
            </div>
            <div className="absolute inset-0 flex items-center pt-9 justify-center text-black text-5xl font-bold">
                
                About

            </div> 
            <div className="absolute inset-0 flex items-center pt-32 justify-center gap-3 text-black  ">
                        <p className="font-bold">Home </p> 
                        <div className="h-[8] w-[14]"><Image src="/Vector.png" width={14} height={8} alt="Arrow"/></div>
                        <p> About</p>
            </div>   
        </div> 
    </div>
    )
}