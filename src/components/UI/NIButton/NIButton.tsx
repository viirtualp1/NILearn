import "./NIButton.scss";

type NIButtonThemeType = "primary" | "secondary";

interface Props {
  className?: string;
  body?: React.ReactNode | string;
  theme?: NIButtonThemeType;
  append?: React.ReactNode;
  icon?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function NIButton(props: Props) {
  const { body, className, theme, append, icon, onMouseEnter, onMouseLeave } =
    props;

  function buttonClasses() {
    let classes = "nibutton ";

    if (className) {
      classes += className;
    }

    if (theme) {
      classes += theme;
    }

    if (icon) {
      classes += "icon";
    }

    return classes;
  }

  return (
    <button
      className={buttonClasses()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {body}

      {append && <div className="nibutton__append">{append}</div>}
    </button>
  );
}
