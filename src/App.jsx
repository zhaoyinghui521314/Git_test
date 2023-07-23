import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import RcResizeObserver from "rc-resize-observer";
import FileUploader from "./Preview";

function App() {
  // const [count, setCount] = useState(0);
  // const appRef = useRef(null);
  // const handleClick = () => {
  //   if (appRef.current) {
  //     console.log("appRef");
  //     Array.from(appRef.current.children).map((item) => {
  //       if (item.dataset.suffix) {
  //         if (item.style.display == "none") {
  //           item.style.display = "block";
  //         } else {
  //           item.style.display = "none";
  //         }
  //       }
  //     });
  //   }
  // };
  // const test = {
  //   a: 1,
  //   b: 2,
  // };
  // useEffect(() => {
  //   if (appRef) {
  //     console.log("appRef");
  //     Array.from(appRef.current.children).map((item) => {
  //       console.log("item", item, item.dataset, item.className);
  //     });
  //   }
  //   delete test["a"];
  //   console.log("test", test);
  // }, []);

  return (
    <FileUploader />

    // <RcResizeObserver
    //   onResize={(rect) => {
    //     console.log("rect", rect);
    //   }}
    // >
    //   <div className="App" ref={appRef}>
    //     <div data-suffix className="nice">
    //       1
    //     </div>
    //     <div>2</div>
    //     <div dangerouslySetInnerHTML={{ __html: "<h1>nice</h1>" }}></div>
    //     <button onClick={handleClick}>切换</button>
    //   </div>
    // </RcResizeObserver>
  );
}

export default App;
