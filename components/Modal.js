import { useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, openText, confirmText, action }) {
  const mount = document?.getElementById("modal");
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    action();
    setShow(!show);
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>{openText}</button>
      {show &&
        createPortal(
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000e3] z-[99] flex flex-col justify-center items-center text-white p-2">
            <button className="absolute top-[25px] right-[25px] h-[15px] w-[15px] text-white text-2xl" onClick={() => setShow(!show)}>x</button>
              {children}
            <button className="p-1 mt-3 border border-white" onClick={clickHandler}>
              {confirmText}
            </button>
          </div>,
          mount
        )}
    </div>
  );
}
