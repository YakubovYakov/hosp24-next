import "./MoscowLogo.css";
import moscow_logo from "/public/images2/moscow-medecine/logo-moscow-medecine.svg";
import Link from "next/link";

export default function MoscowLogo() {
  return (
    <section className="moscow-logo">
      <div className="moscow-logo__container">
        <Link
          href="/"
					target="_blank"
          className="moscow-logo__logo"
          alt="Логотип московской медицины"
        />
        <div className="moscow-logo__button-container">
          <Link
            href="http://vsn.24gkb.ru"
            className="moscow-logo__button-version"
          >
            Версия для слабовидящих
          </Link>
          <Link href="http://www.24gkb.ru" className="moscow-logo__button-old-site">
            Старая версия сайта
          </Link>
        </div>
      </div>
    </section>
  );
}

