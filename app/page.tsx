import Image from "next/image";
import Posts from "./(components)/Posts";
import "tailwindcss";
import tweets from "./shared/data/tweets.data";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-310 h-full flex justify-center relative">
        <div className="border flex w-180 h-full justify-center flex-col gap-2">
          {tweets.map((tweet) => (
            <Posts
              key={tweet.id}
              message={tweet.text}
              user={tweet.user}
            ></Posts>
          ))}
        </div>
      </div>
    </div>
  );
}
