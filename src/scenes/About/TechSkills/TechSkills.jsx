import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiPhp,
  DiPython,
  DiJava,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiPhp />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
