import { menuDropoutIcons } from "../shared/data/MenuButtons.data";

export function DropoutMenu() {
  return (
    <div className="absolute inline-block border bg-blue-300 bottom-0 w-full z-100">
      {menuDropoutIcons.map((icon) => (
        <li key={icon.id}>
          <span>{icon.name}</span>
        </li>
      ))}
    </div>
  );
}

export default DropoutMenu;
