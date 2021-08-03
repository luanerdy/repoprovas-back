import { customExpress } from "./config/customExpress";
import { routes } from "./routes/routes";

const app = customExpress();
routes(app);

export default app;
