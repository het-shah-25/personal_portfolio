import s from './Projects.module.scss';
import Services from '../../data/services';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          My <strong className={s.purple}>Services</strong>
        </h1>
        <ul className={s.Services}>
          {Services.map((props) => (
            <ServiceCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Service;
