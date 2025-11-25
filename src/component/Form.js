import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("write code here");
  const [dark] = useState(false);
  const [bg, setBg] = useState("white");
  const [color, setColor] = useState("black");
  

  const upper = () => setText(text.toUpperCase());
  const lower = () => setText(text.toLowerCase());
  const changeBg = () => setBg(bg === "white" ? "lightyellow" : "white");
  const textColor = () => setColor(color === "black" ? "red" : "black");
  const countText = () => {
  
  const letters = text.replace(/\s+/g, "").length; 
  alert(`\nLetters: ${letters}`);
};

 const toggleData = () => {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
      newText += text[i].toUpperCase();
    } else {
      newText += text[i].toLowerCase();
    }
  }
  setText(newText);
};

const copyText = () => {
  navigator.clipboard.writeText(text);
  alert("Copied!");
};

  return (
    <div
   
    >
      <h3 style={{ textAlign: "center" }}>Sakshi</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: dark ? "#333" : bg,
          color: dark ? "white" : color,
          border: "1px solid",
        }}
      ></textarea>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="btn btn-primary mx-1" onClick={upper}>
          uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={lower}>
          lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={changeBg}>
          bgcolor
        </button>
        <button className="btn btn-primary mx-1" onClick={textColor}>
          textcolor</button>
       <button className="btn btn-primary mx-1" onClick={countText}>
  count
</button>

      <button className="btn btn-primary mx-1" onClick={toggleData}>
  toggle data
</button>
<button className="btn btn-primary mx-1" onClick={copyText}>
  copy
</button>

      </div>
    </div>
  );
}
