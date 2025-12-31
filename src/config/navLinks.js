import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from "../i18n/LanguageContext";

const navLinks = () => {
  const { t } = useLanguage();

  return [
    { path: "/", label: t("navbar.home"), icon: FaHome },
    { path: "/about-me", label: t("navbar.about"), icon: FaUser },
    { path: "/experience", label: t("navbar.experience"), icon: FaBriefcase },
    { path: "/projects", label: t("navbar.projects"), icon: FaProjectDiagram },
    { path: "/technologies", label: t("navbar.technologies"), icon: FaTools }
  ];
};

export default navLinks;