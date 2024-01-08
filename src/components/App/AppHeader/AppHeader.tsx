import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { NIQuestionButton } from "@/components/UI/NIQuestionButton";
import { AppNav } from "../AppNav";
import "./AppHeader.scss";

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const SPLText = (
    <span>
      <strong>СПЛ</strong> - Список полезной литературы
    </span>
  );

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="app-header">
        <div className="app-header__container">
          <div className="app-header__logo">
            <Link href="/">NILearn</Link>
          </div>
          <nav className="app-header__nav">
            <ul>
              <li>
                <Link href="/">Главная</Link>
              </li>
              <li>
                <Link href="/about">О нас</Link>
              </li>
              <li>
                <Link className="app-header__literature" href="/spl">
                  СПЛ
                  <NIQuestionButton text={SPLText} />
                </Link>
              </li>
            </ul>
          </nav>
          <div className="app-header__icon" onClick={handleMenuToggle}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {isMenuOpen && <AppNav className="app-header__mobile-nav" />}
      </header>
    </>
  );
}
