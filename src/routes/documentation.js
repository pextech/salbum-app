import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const router = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Salbum app Api-documentation',
      version: '0.1.0',
      description:
            'This api helps you to keep track of your several songs in several albums, incase of management',
      contact: {
        name: 'Mupenzi cedrick',
        url: 'https://pextech.github.io/MyRezume/html/',
        email: 'mcstain1639@gmail.com',
      },
    },
    servers: [
      {
        url: 'https://salbum-api.herokuapp.com/',
      },
    ],
    produces: ['application/json'],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
router.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true }),
);

export default router;
