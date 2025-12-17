import logo2 from "../../assets/footer.png";
import Container from "../layout/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer__content">
        <img className="footer__logo" src={logo2} alt="Maira Gurgel" />

        <p className="footer__note">
          Desenvolvido por Lenon Merlo. Todos direitos reservados. {year}.
        </p>
      </Container>
    </footer>
  );
}
