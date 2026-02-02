import React from "react";
import footerCSS from "./../static/css/footer.css";
import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      className="text-light text-center py-5"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        borderTop: "1px solid rgba(255,255,255,0.15)"
      }}
    >
      <div className="container">
        <p className="mb-2 fw-bold fs-5">
          © {year} Amanda Dueñas Gándara
        </p>

        <p className="mb-4 text-secondary fst-italic">
         {t("footer.text")}
        </p>

       
      </div>
    </footer>
  );
}

export default Footer;
