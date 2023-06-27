import s from './IntroSection.module.scss';
import avatar from '../../../assets/het2.jpg';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>Hello! I'm Het Shah.</p>
            <p>
              I graduated with a BCA from Gujarat University in 2022
              and <br></br> I am currently pursuing an MScIT from
              DAIICT.
            </p>
            <p>
              Proficient in various programming languages, such as
              <br></br>
              <b className={s.purple}>
                C++, Java, Python, PHP, and JavaScript,
              </b>
              <br></br>I also possess expertise in frameworks like
              <b className={s.purple}> React, Node, and Laravel.</b>
            </p>
            <p>
              I offer a diverse range of services, including
              <ul>
                <li>web design</li>
                <li>software development</li>
                <li>graphic design</li>
                <li>digital marketing.</li>
              </ul>
              <br></br>
              Join me for outstanding solutions tailored to your
              needs.
            </p>
          </div>
        </div>

        {/* <img src="../../../assets/het2.jpg"></img> */}
        <Tilt trackOnWindow={true}></Tilt>
        <LazyLoadImage alt="avatar" effect="img-fluid" src={avatar} />
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://wa.me/8200236379"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="whatsapp"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="tel:8200236379"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="phone"
            >
              <FaPhone />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://github.com/het-shah-25"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/het-h-shah/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
