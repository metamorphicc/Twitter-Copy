import LeftMenu from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
import Image from "next/image";
import Link from "next/link";
export function Notification(props: any) {
  return (
    <>
      <div className="w-full flex justify-center">
        <LeftMenu />
        <div className=" flex flex-col justify-center items-center">
          <div className="border border-zinc-700 min-w-70 w-145 h-full flex justify-center flex-col gap-2 items-center">
            <div className="h-1/7 w-full bg-zinc-950 flex flex-col">
              <div className="flex justify-between p-3 items-center">
                <h1 className="font-bold tracking-wide text-[22px] pl-2">
                  Notifications
                </h1>
                <Link
                  href={"/"}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-9 h-9 cursor-pointer flex justify-center"
                >
                  <Image
                    src={"/house.svg"}
                    alt="asdf"
                    width={18}
                    height={18}
                  ></Image>
                </Link>
              </div>
              <div className="flex h-full justify-around items-center border-b-1 border-zinc-700">
                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link href={""} className="w-full h-full flex justify-center items-center">
                   All
                  </Link>
                </div>

                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link href={""} className="w-full h-full flex justify-center items-center">
                   Verified
                  </Link>
                </div>

                <div className="w-1/3 h-full justify-center items-center flex">
                  <Link href={""} className="w-full h-full flex justify-center items-center">
                   Mentions
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-full w-full"></div>
          </div>
        </div>
        <RightMenu />
      </div>
    </>
  );
}

export default Notification;
