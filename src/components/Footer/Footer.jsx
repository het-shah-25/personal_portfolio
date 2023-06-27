import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with by Het Shah</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://wa.me/8200236379"
                target="_blank"
                rel="noreferrer"
                aria-label="whatsapp"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/het-shah-25"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/het-h-shah/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="tel:8200236379"
                target="_blank"
                rel="noreferrer"
                aria-label="phonenumber"
              >
                <FaPhone />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
