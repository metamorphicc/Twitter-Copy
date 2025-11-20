import "../../page";
import Image from "next/image";
import {profilesInfo} from "../../shared/data/tweets.data"

export default function Profile() {
  return (
    <div className="flex h-screen justify-center">
      <div className="border w-180 h-full flex-col gap-2">
        <div className="w-full border h-2/3 flex-col">
          {/* ДИВ ДЛЯ ШАПКИ */}
          <div className="w-full h-1/2"></div>
          {/* ДИВ ДЛЯ ШАПКИ */}

          <div className="w-full h-1/2 ">
            <div className="break-words m-10">
              <p>{(profilesInfo[0].tag)}</p>
              <p>{(profilesInfo[0].description)}</p>
              <p>Дата регистрации: {profilesInfo[0].created_at}</p>
            </div>
          </div>
        </div>
        <div className="border w-full"></div>
      </div>
    </div>
  );
}
