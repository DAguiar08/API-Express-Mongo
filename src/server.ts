import App from "./app";
import logger from "./app/loggers/Logger";

const app = new App();

app.init().listen(process.env.PORT, () => {
  logger.info(`App starting at http://localhost:${process.env.PORT}`);
  logger.info(`Envs: ${process.env.TARGET}`);
});
