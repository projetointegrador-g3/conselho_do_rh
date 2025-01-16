import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './colaboradores/entities/colaboradores.entity';
import { ColaboradorModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_conselho_rh',
      entities: [Colaborador],
      synchronize: true,
      logging: true,
    }),
    ColaboradorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
