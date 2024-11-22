// src/app/components/Header.js
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import logo from "/public/images2/Logotype.png"; // путь к статичным файлам
import map from "/public/images2/svg/Map.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <Link href="/" className="header__logo">
            <Image className="header__logo-img" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu-button">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
          <div className="header__buttons-bar">
            <Link href="/our-doctors" className="header__button">
              Врачи
            </Link>
            <Link href="/departments" className="header__button">
              Отделения
            </Link>
            <Link href="/paid-services" className="header__button">
              Услуги
            </Link>
            <Link href="/contacts" className="header__button">
              Контакты
            </Link>
            <Link href="/about-hospital" className="header__button">
              О больнице
            </Link>
          </div>
        </div>
        <div className="header__date-content">
          <div className="header__numbers-phone">
            <span className="header__number">+ 7 495 685-17-94</span>
            <span className="header__number">+ 7 495 613-63-10</span>
          </div>
          <div className="header__address-container">
            <Image
              className="header__address-img"
              src={map}
              alt="Указатель времени работы больницы"
            />
            <p className="header__address">ул. Писцовая 10</p>
          </div>
        </div>
      </div>
    </header>
  );
}
