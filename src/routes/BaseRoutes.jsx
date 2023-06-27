import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Services = lazy(() => import('../scenes/Service/Service'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
  SERVICE: '/service',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
        <Route path={routes.SERVICE} element={<Services />} />
      </Routes>

      {/* {background && (
        <Routes>
          <Route
            path={routes.PROJECT}
            element={<ModalProjectCard />}
          />
        </Routes>
      )} */}
    </>
  );
};

export default BaseRoutes;
