import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const App = await NestFactory.create(AppModule);
//const config = new DocumentBuilder()
//   .setTitle('Student example')
//   .setDescription('The student API description')
//   .setVersion('1.0')
//   .addTag('students')
//   .build();
// const document = SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api', app, document);
await App.listen(3000);
}
bootstrap();
