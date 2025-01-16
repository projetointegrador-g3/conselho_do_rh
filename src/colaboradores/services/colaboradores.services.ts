import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from '../entities/colaboradores.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';

@Injectable()
export class ColaboradoresService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find({});
  }

  async findById(id: number): Promise<Colaborador> {
    let colaborador = await this.colaboradorRepository.findOne({
      where: {
        id,
      },
    });

    if (!colaborador)
      throw new HttpException(
        'Colaborador não encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return colaborador;
  }

  async findByCargo(cargo: string): Promise<Colaborador[]> {
    return this.colaboradorRepository.find({
      where: {
        cargo: ILike(`%${cargo}%`),
      },
    });
  }

  async create(colaborador: Colaborador): Promise<Colaborador> {
    return await this.colaboradorRepository.save(colaborador);
  }

  async update(colaborador: Colaborador): Promise<Colaborador> {
    await this.findById(colaborador.id);
    return await this.colaboradorRepository.save(colaborador);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.colaboradorRepository.delete(id);
  }
}
