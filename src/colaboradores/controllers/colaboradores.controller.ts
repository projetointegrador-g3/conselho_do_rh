import {  Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ColaboradoresService } from "../services/colaboradores.services";
import { Colaborador } from "../entities/colaboradores.entity";

@Controller("/colaboradores")
export class ColaboradoresController{
    constructor ( private readonly colaboradoresService: ColaboradoresService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll (): Promise<Colaborador[]>{
        return this.colaboradoresService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById (@Param('id', ParseIntPipe)id:number): Promise<Colaborador>{
        return this.colaboradoresService.findById(id);
    }

    @Get('/cargo/:cargo')
    @HttpCode(HttpStatus.OK)
    findByCargo (@Param('cargo')cargo:string): Promise<Colaborador[]>{
        return this.colaboradoresService.findByCargo(cargo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradoresService.create(colaborador);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() colaborador: Colaborador): Promise<Colaborador>{
        return this.colaboradoresService.update(colaborador);
    }
    
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delet(@Param('id', ParseIntPipe) id: number){
        return this.colaboradoresService.delete(id);
    }

}