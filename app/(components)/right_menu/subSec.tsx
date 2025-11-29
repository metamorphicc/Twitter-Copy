"use client"
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"

export function SubSec() {
    const path = usePathname()
    let value = "flex justify-center";
    if (path != "/") value = "flex justify-center hidden"
    
    return (
        
        <div className={value}>
            <div className="w-[90%] justify-center flex">
            <div className="min-w-[90%] bg-black border border-zinc-700 h-35 rounded-[20px] flex justify-center">
                <div className="flex flex-col w-[90%] py-2 justify-around px-2">
                    <h3 className="font-bold text-[20px]">Subscribe to Premium</h3>
                    <p className="text-[15px]">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
                    <button className="w-25 cursor-pointer min-h-[22px] text-sm bg-white text-black rounded-[40px] py-1.5 font-semibold transition duration-200 hover:bg-zinc-300">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default SubSec