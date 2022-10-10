import { Router } from 'express'
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "../app/docs/swagger.json"

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default router;