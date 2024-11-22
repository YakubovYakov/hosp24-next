import Link from "next/link";
import Image from "next/image";
import "./Footer.css";
import tgIcon from "/public/images2/footer-img/tg.svg";
import vkIcon from "/public/images2/footer-img/vk.svg";
import logo from "/public/images2/Logotype.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <div className="footer__content">
            <Image className="footer__logo" src={logo} alt="Логотип больницы" />
            <div className="footer__text-container">
              <p className="footer__address">+7 (495) 685-17-94</p>
              <p className="footer__address">г.Москва, ул.Писцовая, д.10</p>
            </div>
            <div className="footer__social-links">
              <Link
                className="footer__social-link tg"
                href="https://t.me/gkb24dzm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={tgIcon}
                  alt="Telegram"
                  className="footer__social-icon"
                />
              </Link>

              <Link
                className="footer__social-link vk"
                href="https://vk.com/gkb24dzm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={vkIcon} alt="VK" className="footer__social-icon" />
              </Link>
            </div>
          </div>
          <p className="footer__copyright">«ГБУЗ ГКБ 24 ДЗМ» сайт 2024</p>
        </div>

        <div className="footer__container footer__text-container">
          <Link className="footer__link" href="/our-doctors">
            Врачи
          </Link>
          <Link className="footer__link" href="/departments">
            Отделения
          </Link>
          <Link href="/paid-services" className="footer__link">
            Услуги
          </Link>
          <Link href="/contacts" className="footer__link">Контакты</Link>
          <Link href="/about-hospital" className="footer__link">
            О больнице
          </Link>
        </div>
        <div className="footer__container footer__text-container">
          <Link href="/general-information" className="footer__link">
            Общая информация
          </Link>
          <Link href="/regulatory-documents" className="footer__link">
            Нормативные документы
          </Link>
          <Link href="/education" className="footer__link">
            Образование
          </Link>
          <Link href="/vacancies" className="footer__link">
            Вакансии
          </Link>
          <Link href="/privacy-policy" className="footer__link">
            Политика обработки
            <br /> персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
