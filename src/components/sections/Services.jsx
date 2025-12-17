import { useLanguage } from "../../context/LanguageContext";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

import r1 from "../../assets/Rectangle1.png";
import r2 from "../../assets/Rectangle2.png";
import r3 from "../../assets/Rectangle3.png";
import logo from "../../assets/logo2.png";

export default function Services() {
  const { lang } = useLanguage();

  const copy = {
    pt: {
      title: "Como posso te ajudar?",
      services: [
        {
          img: r1,
          title: "Consultoria Financeira\nPersonalizada",
          desc: "Diagnóstico e plano estratégico para reorganizar dívidas, estruturar investimentos e conquistar autonomia financeira.",
        },
        {
          img: r2,
          title: "Mentoria Individual\ne em Grupo",
          desc: "Transforme sua relação com o dinheiro e conquiste estabilidade emocional e financeira.",
        },
        {
          img: r3,
          title:
            "Consultoria Estratégica\npara Profissionais da Área Financeira",
          desc: "Formação e mentoria para consultores e planejadores que buscam ampliar resultados, autoridade e lucratividade no mercado.",
        },
      ],
    },
    en: {
      title: "How can I help you?",
      services: [
        {
          img: r1,
          title: "Personalized Financial\nConsulting",
          desc: "Diagnosis and strategic plan to reorganize debt, structure investments, and achieve financial autonomy.",
        },
        {
          img: r2,
          title: "One-on-One and\nGroup Mentoring",
          desc: "Transform your relationship with money and achieve emotional and financial stability.",
        },
        {
          img: r3,
          title: "Strategic Consulting\nfor Finance Professionals",
          desc: "Training and mentorship for consultants and planners seeking to increase results, authority, and profitability in the market.",
        },
      ],
    },
  };

  const { title, services } = copy[lang];

  return (
    <section className="services" id="servicos">
      <Container>
        <div className="services__header">
          <img className="services__miniLogo" src={logo} alt="" aria-hidden />
          <SectionTitle>{title}</SectionTitle>
        </div>

        <div className="services__grid">
          {services.map(s => (
            <div key={s.title} className="serviceCard">
              <div className="serviceCard__image">
                <img src={s.img} alt={s.title.replaceAll("\n", " ")} />
              </div>

              <h3 className="serviceCard__title">{s.title}</h3>
              <p className="serviceCard__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
