import Link from "next/link";
import "./AppNav.scss";

interface Props {
  className?: string;
}

export default function AppNav(props: Props) {
  const { className } = props;

  return (
    <nav className={`app-nav ${className}`}>
      <ul>
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/about">О нас</Link>
        </li>
        <li>
          <Link href="/spl">СПЛ</Link>
        </li>
      </ul>
    </nav>
  );
}
