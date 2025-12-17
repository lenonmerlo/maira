import { useLanguage } from "../../context/LanguageContext";
import Container from "../layout/Container";
import Button from "../ui/Button";

import heroBg from "../../assets/img1.png";
import logo from "../../assets/logo.png";

export default function Hero() {
  const { lang } = useLanguage();

  const copy = {
    pt: {
      title: "Sua liberdade é o maior patrimônio",
      text: "Fundadora da Virtus financial, Maíra atua entre o Brasil e o Canadá, ajudando pessoas e empresas a conquistarem liberdade financeira e multiplicarem seu patrimônio com leveza, propósito e estratégia.",
      cta: "Conheça a Virtus Financial",
      contact: "Entre em contato",
    },
    en: {
      title: "Your freedom is your greatest asset",
      text: "Founder of Virtus Financial, Maíra works between Brazil and Canada helping people and businesses achieve financial freedom and grow their wealth with ease, purpose, and strategy.",
      cta: "Discover Virtus Financial",
      contact: "Get in touch",
    },
  };

  const { title, text, cta, contact } = copy[lang];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      id="top"
    >
      <div className="hero__overlay" />

      <Container className="hero__grid">
        <div className="hero__left">
          <img className="brand-logo" src={logo} alt="Maira Gurgel" />

          <h1 className="hero__title">{title}</h1>

          <p className="hero__text hero__text--light">{text}</p>

          <div className="hero__actions">
            <Button href="#cta" variant="outline">
              {cta}
            </Button>

            <Button href="#cta" variant="outline">
              {contact}
            </Button>
          </div>
        </div>

        <div className="hero__right" />
      </Container>
    </section>
  );
}
