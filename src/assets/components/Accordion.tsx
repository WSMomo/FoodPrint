import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
  const [isHidden, setIsHidden] = useState(true);
  function handleClick() {
    setIsHidden(!isHidden);
  }
  return (
    <div
      className={`
      w-4/5 p-2 m-2
    ${
      isHidden
        ? "bg-secondary-color text-main-color"
        : "border border-secondary-color"
    }`}
    >
      <h2
        onClick={handleClick}
        className="font-semibold m-2 cursor-pointer text-center"
      >
        {title}
      </h2>
      <p className={`${isHidden ? "hidden" : ""} p-2`}>{children}</p>
    </div>
  );
}
