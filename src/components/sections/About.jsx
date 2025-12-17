import { useLanguage } from "../../context/LanguageContext";
import Container from "../layout/Container";

import avatar from "../../assets/avatar.png";
import logo2 from "../../assets/logo2.png";
import vector from "../../assets/vector.png";

export default function About() {
  const { lang } = useLanguage();

  const copy = {
    pt: {
      lead: "Com uma trajetória marcada pela experiência internacional e métodos próprios desenvolvidos a partir da Psicologia Financeira e Comportamental, Maíra Gurgel se tornou referência em estratégias que potencializam decisões e resultados financeiros.",
      text: "Sua missão é clara: transformar a forma como as pessoas se relacionam com o dinheiro não apenas para acumular, mas para viver com liberdade e tranquilidade.",
      quote:
        "“Mais do que números, eu acredito que finanças são sobre escolhas inteligentes, clareza emocional e autonomia. E é com essa visão que conduzo os meus clientes rumo a uma vida de sucesso.”",
    },
    en: {
      lead: "With an international background and proprietary methods grounded in Financial and Behavioral Psychology, Maíra Gurgel has become a reference in strategies that amplify financial decisions and results.",
      text: "Her mission is clear: transform how people relate to money not only to accumulate it, but to live with freedom and peace of mind.",
      quote:
        "“More than numbers, I believe finance is about smart choices, emotional clarity, and autonomy. With that vision I guide my clients toward a life of success.”",
    },
  };

  const { lead, text, quote } = copy[lang];

  return (
    <section className="about" id="sobre">
      {/* Vector grandão no fundo (translúcido) */}
      <div className="about__container">
        <img className="about__bgVector" src={vector} alt="" aria-hidden />
      </div>

      <Container className="about__grid">
        <div className="about__imageWrap">
          {/* Logo2 do lado da foto */}
          <img className="about__stamp" src={logo2} alt="" aria-hidden />

          {/* Avatar (invade a sessão de cima) */}

          <img className="about__avatar" src={avatar} alt="Maira Gurgel" />
        </div>

        {/* Container do texto 440x413 */}
        <div className="about__content">
          <p className="about__p about__p--lead">{lead}</p>

          <p className="about__p">{text}</p>

          <p className="about__p about__p--quote">{quote}</p>
        </div>
      </Container>
    </section>
  );
}
