import { useState } from "react";

import cities from "../../constants/cities.json";
import Input from "../modules/Input";

function HomePage() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    if (text && e.target.value) {
      const filtered = cities.filter((city) => city.startsWith(e.target.value));
      setText(filtered[0]);
      console.log(filtered[0]);
      if(filtered[0] === e.target.value){
        e.target.style.color = "gray";
      }
    } else {
      setText(e.target.value);
    }
  };


  return (
    <div>
      <Input hint={text} handleChange={handleChange} />
    </div>
  );
}

export default HomePage;
