import { FaQuestionCircle } from "react-icons/fa";
import NIDropdown from "../NIDropdown/NIDropdown";

interface Props {
  text?: React.ReactNode | string;
}

export default function NIQuestionButton(props: Props) {
  const { text } = props;

  return <NIDropdown children={text} button={<FaQuestionCircle />} />;
}
