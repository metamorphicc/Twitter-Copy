import LeftMenu from "../left_menu/LeftMenu";
import RightMenu from "../right_menu/RightMenu";
export function Communities() {
    return (
        <div className="w-full flex justify-center">
          <LeftMenu />
          <div className=" flex flex-col justify-center items-center">
            <div className="border min-w-70 w-145 flex justify-center flex-col gap-2 h-full"></div>
          </div>
          <RightMenu />
        </div>
      );
}

export default Communities