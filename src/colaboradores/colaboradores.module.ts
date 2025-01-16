import { TypeOrmModule } from "@nestjs/typeorm";
import { Colaborador } from "./entities/colaboradores.entity";
import { Module } from "@nestjs/common";

@Module({
    imports:[TypeOrmModule.forFeature([Colaborador])],
    controllers:[],
    providers:[],
    exports:[TypeOrmModule],
    
})

export class ColaboradorModule{}