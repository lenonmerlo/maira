export default function Button({ children, href = "#", variant = "outline" }) {
  return (
    <a className={`btn btn--${variant}`} href={href}>
      {children}
    </a>
  );
}
