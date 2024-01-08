import { useState } from "react";
import { NIButton } from "@/components/UI/NIButton";
import "./NIDropdown.scss";

interface Props {
  className?: string;
  button?: React.ReactNode;
  children?: React.ReactNode | string;
}

export default function NIDropdown(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { button, children, className } = props;

  const onMouseEnter = () => {
    setIsOpen(true);
  };

  const onMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NIButton
        body={button}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        icon
      />

      <div onMouseEnter={onMouseEnter} className="nidropdown">
        <div
          className={`nidropdown__body ${
            isOpen ? "open" : "close"
          } ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
