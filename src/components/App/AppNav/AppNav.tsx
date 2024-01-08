import Link from "next/link";
import "./AppNav.scss";

export default function AppNav() {
  return (
    <nav className="app-nav">
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
