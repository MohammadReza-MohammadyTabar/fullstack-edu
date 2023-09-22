"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use('*', (req, res, next) => {
        console.log(req.method, req.originalUrl);
        next();
    });
    await app.listen(3200);
}
bootstrap();
//# sourceMappingURL=main.js.map