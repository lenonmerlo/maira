import { useLanguage } from "../../context/LanguageContext";

const options = [
  { value: "pt", label: "PT" },
  { value: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="langSwitch" role="group" aria-label="Selecionar idioma">
      {options.map(option => (
        <button
          key={option.value}
          type="button"
          className={`langSwitch__btn${
            option.value === lang ? " is-active" : ""
          }`}
          onClick={() => setLang(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
