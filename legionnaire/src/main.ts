import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Get application Configuration Service
    const configuration = app.get(ConfigService);

    // Get Config Variables
    const defaultPort: number = 8090;
    const port = configuration.get<string>('PORT') || defaultPort;
    await app.listen(port);
}
bootstrap();
