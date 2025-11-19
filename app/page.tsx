import Image from "next/image";
import Posts from "./components/Posts"
import "tailwindcss"
import tweets from "./shared/data/tweets.data";

export default function Home() {
    return <div className="w-full flex justify-center items-center">
      <div className="border w-310 h-full flex justify-center relative">
        <div className="absolute w-40 h-30 bg-blue-700 left-0 flex justify-center items-center">
          <h3>
            Twitter
          </h3>
        </div>
        <div className="border flex w-130 h-full justify-center flex-col gap-2">
          {
            tweets.map(tweet => (
              <Posts 
              key={tweet.id}
              message={tweet.text} user={tweet.user}>

              </Posts>
            ))
          }
        </div>    
      </div>
    </div>
}
