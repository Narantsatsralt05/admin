"use client";

import Image from "next/image";
import "./style.css";
import { useState } from "react";

const products = [
  { title: "Cabbage", id: 1, isFruit: false },
  { title: "Garlic", id: 2, isFruit: false },
  { title: "Apple", id: 3, isFruit: true },
];

export default function Home() {
  let counter = 0;
  const [count, setCount] = useState(0);
  // first approach to render list
  // let productList = [];

  // for (let i = 0; i < products.length; i++) {
  //   productList.push(<li>{products[i].title}</li>)
  // }

  const handleClick = () => {
    // counter negeer nemne
    counter++;
    setCount(count + 1);
  };
  return (
    <div>
      {count}

      <br />
      <button onClick={handleClick}>click</button>
      <br />
      {counter}
    </div>
  );
}
