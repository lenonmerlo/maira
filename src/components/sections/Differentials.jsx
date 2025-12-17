import { useLanguage } from "../../context/LanguageContext";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Differentials() {
  const { lang } = useLanguage();

  const copy = {
    pt: {
      title: "Propósito e Diferenciais",
      bullets: [
        {
          bold: "Autoridade Internacional",
          text: "experiência no Brasil e no Canadá.",
        },
        {
          bold: "Abordagem humanizada + Psicologia Financeira",
          text: "para desbloquear crenças e transformar a relação com o dinheiro.",
        },
        {
          bold: "Estratégia + Ação",
          text: "do diagnóstico a execução com acompanhamento.",
        },
      ],
    },
    en: {
      title: "Purpose and Differentials",
      bullets: [
        {
          bold: "International Authority",
          text: "experience in Brazil and Canada.",
        },
        {
          bold: "Human-centered approach + Financial Psychology",
          text: "to unblock beliefs and transform the relationship with money.",
        },
        {
          bold: "Strategy + Action",
          text: "from diagnosis to execution with close support.",
        },
      ],
    },
  };

  const { title, bullets } = copy[lang];

  return (
    <section className="diff" id="diferenciais">
      <Container className="diff__grid">
        <div className="diff__left">
          <SectionTitle className="diff__title">{title}</SectionTitle>
        </div>

        <ul className="diff__list">
          {bullets.map(item => (
            <li key={item.bold + item.text}>
              <strong>{`${item.bold}: `}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
