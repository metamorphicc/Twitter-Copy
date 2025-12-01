import RightMenu from "../right_menu/RightMenu";
import LeftMenu from "../left_menu/LeftMenu";
import Image from "next/image";
import Link from "next/link";
export function Explore() {
  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className="flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col bg-black items-center">
            <div className="h-1/7 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between p-3 items-center">
                <div
                  className="w-[90%] h-[45px] flex
                                         border border-zinc-700 rounded-[60px] mt-2"
                >
                  <Image
                    src={"/search.svg"}
                    alt="fsadfdsa"
                    width={17}
                    height={17}
                    className="ml-5"
                  ></Image>
                  <form action="" className="h-full flex w-full">
                    <input
                      type="text"
                      placeholder={"Search"}
                      name="search"
                      className="w-full placeholder-white placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
                    />
                  </form>
                </div>
                <button className="cursor-pointer hover:bg-red-700">
                  <Image
                    src={"/gear.svg"}
                    alt="fsadfdsa"
                    width={21}
                    height={21}
                    className="ml-5"
                  ></Image>
                </button>
              </div>
              <div className="flex h-full border-b border-zinc-700">
                <Link
                  href="#"
                  className="flex-1 flex items-center justify-center hover:bg-zinc-700"
                >
                  For you
                </Link>

                <Link
                  href="#"
                  className="flex-1 flex items-center justify-center hover:bg-zinc-700 text-neutral-500"
                >
                  Trending
                </Link>

                <Link
                  href="#"
                  className="flex-1 flex items-center justify-center hover:bg-zinc-700 text-neutral-500"
                >
                  News
                </Link>

                <Link
                  href="#"
                  className="flex-1 flex items-center justify-center hover:bg-zinc-700 text-neutral-500"
                >
                  Sports
                </Link>

                <Link
                  href="#"
                  className="flex-1 flex items-center justify-center hover:bg-zinc-700 text-neutral-500"
                >
                  Entertainment
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <RightMenu />
      </div>
    </>
  );
}

export default Explore;
