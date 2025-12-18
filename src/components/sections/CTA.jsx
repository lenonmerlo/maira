import { useLanguage } from "../../context/LanguageContext";
import Container from "../layout/Container";
import Button from "../ui/Button";

import ctaBg from "../../assets/img2.png";
import logo from "../../assets/logo3.png";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/558596251111",
    aria: "Abrir conversa no WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2a9.96 9.96 0 0 0-9.96 9.96c0 1.76.46 3.46 1.34 4.97L2 22l5.25-1.35a9.94 9.94 0 0 0 4.79 1.22h.01c5.5 0 9.97-4.47 9.97-9.96A9.92 9.92 0 0 0 12.04 2Zm0 18.01h-.01c-1.57 0-3.11-.4-4.47-1.17l-.32-.18-3.12.8.84-3.05-.2-.31a8.01 8.01 0 0 1-1.23-4.3c0-4.45 3.62-8.07 8.08-8.07 2.16 0 4.19.84 5.72 2.36a8.02 8.02 0 0 1 2.36 5.71c0 4.45-3.63 8.07-8.05 8.07Zm4.42-5.98c-.24-.12-1.41-.7-1.63-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.2-.7-.62-1.17-1.38-1.3-1.62-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.52.58.18 1.1.15 1.5.09.46-.07 1.41-.58 1.61-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/maíragurgel",
    aria: "Abrir perfil no LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.18c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73v5.27H9.63V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm-1.78 13h3.56V9H3.56v11.43ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/maira.gurgel",
    aria: "Abrir perfil no Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 7.34A4.66 4.66 0 1 0 16.66 12 4.66 4.66 0 0 0 12 7.34Zm0 7.67A3.01 3.01 0 1 1 15.01 12 3.02 3.02 0 0 1 12 15.01Zm5.94-7.93a1.09 1.09 0 1 1-1.09-1.09 1.09 1.09 0 0 1 1.09 1.09Z"
        />
        <path
          fill="currentColor"
          d="M21.54 6.4a5.6 5.6 0 0 0-.36-1.85 3.83 3.83 0 0 0-.9-1.38 3.83 3.83 0 0 0-1.38-.9 5.6 5.6 0 0 0-1.85-.36C16.31 1.84 15.99 1.82 12 1.82s-4.31.02-5.05.09a5.6 5.6 0 0 0-1.85.36 3.83 3.83 0 0 0-1.38.9 3.83 3.83 0 0 0-.9 1.38 5.6 5.6 0 0 0-.36 1.85C2.02 7.14 2 7.46 2 11.45s.02 4.31.09 5.05a5.6 5.6 0 0 0 .36 1.85c.2.5.5.96.9 1.38.41.4.88.7 1.38.9.58.22 1.2.34 1.85.36.74.07 1.06.09 5.05.09s4.31-.02 5.05-.09a5.6 5.6 0 0 0 1.85-.36 3.83 3.83 0 0 0 1.38-.9c.4-.42.7-.88.9-1.38.22-.58.34-1.2.36-1.85.07-.74.09-1.06.09-5.05s-.02-4.31-.09-5.05ZM19.7 17.6a3.2 3.2 0 0 1-1.8 1.8c-.35.14-.9.3-1.9.33-.74.04-.96.05-4.99.05-4.03 0-4.24-.01-4.99-.05-1-.04-1.55-.2-1.9-.33a3.2 3.2 0 0 1-1.8-1.8c-.13-.35-.29-.9-.33-1.9-.04-.74-.05-.96-.05-4.99 0-4.03.01-4.24.05-4.99.04-1 .2-1.55.33-1.9a3.2 3.2 0 0 1 1.8-1.8c.35-.13.9-.29 1.9-.33.74-.04.96-.05 4.99-.05 4.03 0 4.24.01 4.99.05 1 .04 1.55.2 1.9.33a3.2 3.2 0 0 1 1.8 1.8c.13.35.29.9.33 1.9.04.74.05.96.05 4.99 0 4.03-.01 4.24-.05 4.99-.04 1-.2 1.55-.33 1.9Z"
        />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: "mailto:mairagmaciel@gmail.com",
    aria: "Enviar um e-mail",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.5 4h-17A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 20.5 4Zm-.21 1.5-8.29 6.2-8.29-6.2h16.58ZM3.5 18.5V7.16l8.08 6.05a.75.75 0 0 0 .84 0l8.08-6.05V18.5h-17Z"
        />
      </svg>
    ),
  },
];

export default function CTA() {
  const { lang } = useLanguage();

  const copy = {
    pt: {
      title: "Quer conhecer soluções completas em serviços financeiros?",
      text: "Acesse também a Virtus Financial e descubra como multiplicar seu patrimônio com segurança e propósito.",
      cta: "Acesse a Virtus Financial",
      contactTitle: "Entre em contato",
    },
    en: {
      title: "Want to explore complete financial services solutions?",
      text: "Visit Virtus Financial and discover how to grow your wealth safely and purposefully.",
      cta: "Visit Virtus Financial",
      contactTitle: "Get in touch",
    },
  };

  const { title, text, cta, contactTitle } = copy[lang];

  return (
    <section
      className="cta"
      id="cta"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="cta__overlay" />

      <Container className="cta__grid">
        <div className="cta__left">
          <img className="cta__logo" src={logo} alt="Maira Gurgel" />
        </div>

        <div className="cta__right">
          <h2 className="cta__title">{title}</h2>

          <p className="cta__text">{text}</p>

          <Button href="https://virtusfinancial.vercel.app/" target="_blank" rel="noopener noreferrer" variant="outline">
            {cta}
          </Button>

          <div className="cta__contacts" aria-label={contactTitle}>
            <p className="cta__contactsTitle">{contactTitle}</p>

            <div className="cta__contactsGrid">
              {contacts.map(item => (
                <a
                  key={item.label}
                  className="contactChip"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.aria}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
