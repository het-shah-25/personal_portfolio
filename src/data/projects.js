const data = [
  {
    id: '1',
    title: 'ChatGPT-Clone',
    description:
      'Introducing our Node.js-based chatbot clone website. Built using the power of Node.js and OpenAI API, our platform enables you to create intelligent chatbots. Seamlessly integrate them into your website or application to automate interactions and enhance customer support. Experience the future of conversational AI today!',
    image: {
      src: 'https://blogs.swarthmore.edu/its/wp-content/uploads/2022/05/openai.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
  },
  {
    id: '2',
    title: 'Resume Builder',
    description:
      'Our web application is a resume builder built with Next.js, React.js, HTML, and CSS. It provides users with a simple and intuitive interface to create professional resumes. With a combination of cutting-edge technologies, our app streamlines the resume creation process, making it efficient and user-friendly.',
    image: {
      src: 'https://imgv3.fotor.com/images/videoImage/Make-a-resume-with-Fotor-easily.jpg',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
  },
  {
    id: '3',
    title: 'ECommerce Web App',
    description:
      'All the basic functionality is involved, such as sales, purchases, stock management, and reporting. It’s a website, so it can be accessed anytime, anywhere and also provides realtime data. It is very easy to manage data in a database with the help of PHP server-side language, so we can easily analyse data rather than spending more time doing it manually.',
    image: {
      src: 'https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
    },
  },
  // {
  //   id: '4',
  //   title: 'Apiko Marketplace',
  //   description:
  //     'An online marketplace made with React. The project was developed on 8th Apiko Intensive.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348072/portfolio/projects/react-marketplace/apiko-marketplace-lg_xppe9n.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://apiko-marketplace-app-snaichuk.herokuapp.com/',
  //     repo: 'https://github.com/vsnaichuk/apiko-marketplace-app-snaichuk',
  //   },
  //   technologies: [
  //     '#react',
  //     '#redux',
  //     '#socket.io',
  //     '#scss',
  //     '#formik',
  //     '#react-window',
  //     '#restapi',
  //   ],
  // },
  // {
  //   id: '5',
  //   title: 'Places App',
  //   description:
  //     'A MERN app to let users share their experience of places along with Details. It is user friendly and can be useful to many others.',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348070/portfolio/projects/mern-places/mern-places-lg_xf6zom.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://yourplaces-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/MERN-places',
  //   },
  //   technologies: [
  //     '#react',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //     '#react-query',
  //     '#react-transition-group',
  //     '#mongoose',
  //     '#jwt',
  //     '#aws',
  //   ],
  // },
  // {
  //   id: '6',
  //   title: 'eCommerce Mobile App',
  //   description:
  //     'A Mobile eCommerce application built with React Native that includes cart functionality, push notifications, user authentication and user orders',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-shop/rn-shop-lg_fofglf.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/online-shop-app',
  //     repo: 'https://github.com/vsnaichuk/RN-shop',
  //   },
  //   technologies: [
  //     '#react-native',
  //     'expo',
  //     '#redux',
  //     '#redux-toolkit',
  //     '#react-navigation',
  //     '#nodejs',
  //     '#express',
  //     '#mongodb',
  //   ],
  // },
  // {
  //   id: '7',
  //   title: 'Places Mobile App',
  //   description:
  //     'A Mobile application for sharing places that people visit from all over the world. Uses React Native, TypeScript, MobX and Native Device Features',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/rn-places/rn-places-lg_ljyikm.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://expo.dev/@v_snaichuk/rn-places',
  //     repo: 'https://github.com/vsnaichuk/RN-places',
  //   },
  //   technologies: [
  //     '#react-native',
  //     '#typescript',
  //     '#expo',
  //     '#mobx',
  //     '#sqlite',
  //     '#react-native-maps',
  //     '#expo-location',
  //   ],
  // },
  // {
  //   id: '8',
  //   title: 'Shopping Cart',
  //   description:
  //     'Simple eCommerce cart application built with React and TypeScript. Uses SWR hook to fetch the data from the API and Styled Components',
  //   image: {
  //     src: 'https://res.cloudinary.com/dx6tl6aa2/image/upload/v1628348073/portfolio/projects/react-shop-cart/rn-shop-cart-lg_w3qxn6.jpg',
  //     placeholderSrc:
  //       'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg==',
  //   },
  //   links: {
  //     site: 'https://shopping-cart-sv.netlify.app/',
  //     repo: 'https://github.com/vsnaichuk/React-ShoppingCart',
  //   },
  //   technologies: [
  //     '#react',
  //     '#typescript',
  //     '#material-ui',
  //     '#styled-components',
  //     '#swr',
  //     '#fakestoreapi',
  //   ],
  // },
];

export default data;
