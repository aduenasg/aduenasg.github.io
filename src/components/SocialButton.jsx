import { FaGithub, FaLinkedin } from 'react-icons/fa';
import socialLinks from './../config/socialLinks';
import './../static/css/social.css';


const SocialButtons = () => {
  const gitStyle = {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "8px 12px",
    backgroundColor: "#f4a261",
    color: "white",
    borderRadius: "40%",
    textDecoration: "none",
  };

  return (
    <div className="social-buttons">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={link.variant}   
            style={gitStyle}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialButtons;

