import App from "./App"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


/* eslint-disable react/prop-types */
// const Input = ({handleChange, hint}) => {
//   return (
//     <div className="input">
//       <label htmlFor="input" >
//         {hint}
//       </label>
//       <input
//         type="text"
//         id="input"
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
// export default Input;
