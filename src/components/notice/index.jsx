// import React, { useState } from 'react';
// import '../notice/style.css'; 

// const Notice = () => {
//   const [activeFilter, setActiveFilter] = useState("notice");

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   return (
//     <div>
//       <div className="categories">
//         <ul className="controls">
//           {["notice", "announcement"].map((filter) => (
//             <li
//               key={filter}
//               className={`buttons ${activeFilter === filter ? "active" : ""}`}
//               onClick={() => handleFilterClick(filter)}
//             >
//               {filter.charAt(0).toUpperCase() + filter.slice(1)}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className={`container ${activeFilter}-container`}>
//         {activeFilter === "notice" && (
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
//             bibendum interdum velit, nec fermentum mi aliquet a. Suspendisse
//             potenti. Quisque a malesuada risus. Aliquam erat volutpat. Sed
//             vehicula sapien eget libero commodo, at efficitur odio varius.
//             Nullam tristique risus sed purus cursus, nec fringilla lacus
//             ullamcorper. Sed ac varius est. Cras finibus vulputate lacus, a
//             sollicitudin libero consectetur sit amet. Nulla facilisi. Vestibulum
//             euismod eros felis, id rhoncus nisl viverra sit amet. Donec ac
//             fringilla libero. Donec in varius velit. Ut tristique felis at nisl
//             venenatis scelerisque. Duis viverra ex at gravida aliquam. Nulla
//             facilisi. Curabitur bibendum nunc non purus vehicula, at dapibus
//             arcu ultrices. Duis eu mi ac elit suscipit tincidunt.
//           </p>
//         )}
//         {activeFilter === "announcement" && (
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
//             bibendum interdum velit, nec fermentum mi aliquet a. Suspendisse
//             potenti. Quisque a malesuada risus. Aliquam erat volutpat. Sed
//             vehicula sapien eget libero commodo, at efficitur odio varius.
//             Nullam tristique risus sed purus cursus, nec fringilla lacus
//             ullamcorper. Sed ac varius est. Cras finibus vulputate lacus, a
//             sollicitudin libero consectetur sit amet. Nulla facilisi. Vestibulum
//             euismod eros felis, id rhoncus nisl viverra sit amet. Donec ac
//             fringilla libero. Donec in varius velit. Ut tristique felis at nisl
//             venenatis scelerisque. Duis viverra ex at gravida aliquam. Nulla
//             facilisi. Curabitur bibendum nunc non purus vehicula, at dapibus
//             arcu ultrices. Duis eu mi ac elit suscipit tincidunt.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Notice;
