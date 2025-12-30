import RightMenu from "../../right_menu/RightMenu";
import LeftMenu from "../../left_menu/LeftMenu";
import Link from "next/link";
import Image from "next/image";
export function Messages() {
  return (
    <div className="w-full flex justify-center h-screen">
      <div className=" flex flex-col justify-center items-center">
        <div className="border border-zinc-700 min-w-70 w-210 flex justify-center gap-2 h-full">
          <div className="flex flex-col items-center w-full border border-e-zinc-700 border-y-black border-s-black">
            <div className="flex justify-between w-full p-5">
              <h1 className="text-[19px] font-bold">Messages</h1>

              <div className="flex gap-1">
              <Link
                  href={"/"}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                >
                  <Image
                    src={"/gear.svg"}
                    alt="asdf"
                    width={18}
                    height={18}
                  ></Image>
                </Link>

                <Link
                  href={"/"}
                  className="hover:bg-zinc-700 transition duration-200 rounded-[50px] w-8 h-8 cursor-pointer flex justify-center items-center"
                >
                  <Image
                    src={"/newmessage.svg"}
                    alt="asdf"
                    width={18}
                    height={18}
                  ></Image>
                </Link>
                </div>
              
            </div>
            <div className="w-[90%] border rounded-[50px] border-zinc-700"> {/*search table*/}
            <form action="" className="h-full flex py-2.5 px-3 ">
              <Image src={"/search.svg"}
                    alt="asdfsa"
                    width={17}
                    height={17}>

                    </Image>
                    <input
                      type="text"
                      placeholder={"Search"}
                      name="search"
                      autoComplete="off"
                      className="w-full  placeholder-white placeholder:font-light placeholder:text-sm h-full outline-none ml-2"
                    />
                    
                  </form>
              </div>
          </div>
          <div className="w-full flex justify-center items-center">
            second side
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
