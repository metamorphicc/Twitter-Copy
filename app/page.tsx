import Image from "next/image";
import Posts from "./components/Posts";
import "tailwindcss";
import tweets from "./shared/data/tweets.data";
import name from "./server/fetchInput";
import { LeftMenu } from "./components/left_menu/LeftMenu";
import RightMenu from "./components/right_menu/RightMenu";
export default function Home() {
  return (
    <div className="w-full flex justify-center">
      <LeftMenu />
      <div className=" flex flex-col justify-center items-center">
        <form action={name}>
          <div className=" border h-full justify-center">
            <input
              type="text"
              placeholder="What's new?"
              name="mainpageInput"
              id="mPageInput"
              className="border bg-gray-700 min-w-145 min-h-25 outline-none p-4 text-lg pl-10 text-[21px]"
            />
          </div>
        </form>
        <div className="border min-w-70 w-145 flex justify-center flex-col gap-2">
          {tweets.map((tweet) => (
            <Posts
              key={tweet.id}
              message={tweet.text}
              user={tweet.user}
            ></Posts>
          ))}
        </div>
      </div>
      <RightMenu />
    </div>
  );
}
