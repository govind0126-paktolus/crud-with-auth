import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProtectedModule } from './protected/protected.module';
import config from 'config';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.database,
      synchronize: config.database.synchronize,
      logging: config.database.logging,
      entities: [UserEntity],
    }),
    AuthModule,
    ProtectedModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
