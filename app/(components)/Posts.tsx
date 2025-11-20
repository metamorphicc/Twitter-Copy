import Link from "next/link";
import styles from "./stylePosts.module.css"
import "tailwindcss"
import Image from "next/image";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
interface PostProps {
  message: string;
  user: string;
}

export default function Posts({ message, user }: PostProps) {
  return (
    <header className={styles.header}>
      <div className="border w-[90%] overflow-visible p-2 break-words">
        <div className="flex gap-2">
        <Image src={"./globe.svg"}
        alt="random logo"
        width={28}
        height={28}>
        </Image>
        <Link href={`/u/${encodeURIComponent(user)}`}>
          <p className=" mt-1">{user}</p>
        </Link>
          </div>
        <p>{message}</p>
      </div>
    </header>
  );
}
