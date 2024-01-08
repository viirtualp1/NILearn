import { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { NIButton } from "../NIButton";

interface Props {
  title?: string;
  value?: boolean;
  children?: React.ReactNode;
}

export default function NIModal(props: Props) {
  const { title, children, value } = props;

  const [isOpen, setIsOpen] = useState(value || false);

  useEffect(() => {
    if (typeof value === "boolean") {
      setIsOpen(value);
    }
  }, [value]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className="nimodal__header">
        {title}

        <NIButton body={FaTimes} icon />
      </div>

      {children}
    </Modal>
  );
}
