import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am <span className={s.purple}>Het Shah</span>
        <br />
        <br />
        As a professional graphic designer and software developer, I
        am dedicated to providing exceptional and innovative design
        solutions for all of your business needs. With a completed BCA
        from Gujarat University and ongoing studies in MSCIT at
        DAIICT, I am committed to staying up-to-date with the latest
        trends and technologies in the field.
        <br />
        <br />
        I am committed to providing exceptional customer service and
        working closely with you to understand your needs and
        objectives. Together, we can bring your vision to life and
        help your business stand out in today's competitive market.
        <br />
        <br />
        I am committed to providing exceptional customer service and
        working closely with you to understand your needs and
        objectives. Together, we can bring your vision to life and
        help your business stand out in today's competitive market.
        <br />
        <br />
      </p>
    </div>
  );
};

export default AboutTextCard;
