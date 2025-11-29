import Link from "next/link"

export function WhoToFollow() {
    return (
    <div className="flex justify-center w-[90%] rounded-xl">
            <div className="w-full justify-center rounded-xl border-1 border-zinc-700 bg-black">
            <div className="w-full bg-black justify-center rounded-xl">
                <div className="flex flex-col w-full justify-around">
                    <div>
                        <p className="font-extrabold text-[20px] text-wrap p-4">Who to follow</p>
                    </div>
                    <div className="">

                    </div>
                    <div className="w-full  rounded-xl">
                        <div className="hover:bg-zinc-900 transition duration-300 rounded-b-xl">
                            <Link href="/" className="w-full flex items-center p-4 text-sky-400 text-[15px] font-thin">
                                Show more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhoToFollow
