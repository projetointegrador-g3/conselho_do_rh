import { TypeOrmModule } from "@nestjs/typeorm";
import { Colaborador } from "./entities/colaboradores.entity";
import { Module } from "@nestjs/common";
import { ColaboradoresController } from "./controllers/colaboradores.controller";
import { ColaboradoresService } from "./services/colaboradores.services";

@Module({
    imports:[TypeOrmModule.forFeature([Colaborador])],
    controllers:[ColaboradoresController],
    providers:[ColaboradoresService],
    exports:[TypeOrmModule],
    
})

export class ColaboradorModule{}