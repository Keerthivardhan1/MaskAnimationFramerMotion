"use client";
import { useState } from "react";
import "./style.css";
export default function PracticeUseState() {
  const [arr, setArr] = useState([]);

  const handleClick = ()=>{
      setArr((preState)=>{
        preState.push(1)
        return preState;
      })
      console.log(arr)
  }

  // const handleClick = () => {
  //   setArr((preState) => [...preState, 1]);
  //   console.log(arr)
  // };

  return (
    <div className="div text-zinc-50">
      <div className="main flex flex-col  justify-center items-center">
        <button onClick={handleClick} className=" bg-zinc-50 text-black rounded-lg">Add 1 to arr</button>
        <div className="arr  ">
            {arr.map((ele, index) => {
            return <span className="text-white" key={index}>{`${ele} `} ,</span>;
            })}
        </div>
      </div>
    </div>
  );
}
