// "use client"
// import { menuDropoutIcons } from "../shared/data/MenuButtons.data";
// import { Portal } from "../shared/components/Portal";
// import ModalMore from "../shared/components/modalMore";
// import { useState } from "react";

// export function DropoutMenu() {
//   const [moreOpened, setMoreOpened] = useState(false);
//   return (
//     <Portal id="modal-root">
//       <ModalMore isOpen={!moreOpened}
//                     onClose={() => {
//                       setMoreOpened(false);
//                     }}>
//         <div className="absolute inline-block border bg-blue-300 bottom-0 w-full z-100">
//         {menuDropoutIcons.map((icon) => (
//         <ul key={icon.id}>
//           <li >
//             <span>{icon.name}</span>
//           </li>
//         </ul>
        
//       ))}
//     </div>
//     </ModalMore>
//     </Portal>
    
    
//   );
// }

// export default DropoutMenu;
