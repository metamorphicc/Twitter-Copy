import LeftMenu from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import Image from "next/image";
import Link from "next/link";
export function Communities() {
  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className="flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex flex-col bg-black items-center">
            <div className="h-1/7 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between items-center h-full">
                <div className="flex w-[50%] gap-8">
                  <Image
                    src={"/left.svg"}
                    alt="fadsf"
                    height={40}
                    width={40}
                    className="pl-4"
                  ></Image>
                  <h2 className="font-bold tracking-wide text-[22px] pl-2">
                    {" "}
                    Communities{" "}
                  </h2>
                </div>
                <div>
                  <div className="flex">
                  <Image
                    src={"/search.svg"}
                    alt="fadsf"
                    height={40}
                    width={40}
                    className="pl-4"
                  ></Image>
                  <Image
                    src={"/left.svg"}
                    alt="fadsf"
                    height={40}
                    width={40}
                    className="pl-4"
                  ></Image>
                  </div>
                </div>
              </div>
              <div className="flex h-full border-b border-zinc-700">
                  
                    <Link href={""} className="w-full flex justify-center items-center">
                      Home
                    </Link>
                      <Link href={""} className="w-full flex justify-center items-center">
                        Explore
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

export default Communities;
