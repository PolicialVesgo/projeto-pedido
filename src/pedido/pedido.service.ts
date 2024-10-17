import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido } from './pedido.schema';

@Injectable()
export class PedidoService {
  constructor(@InjectModel('Pedido') private pedidoModel: Model<Pedido>) {}

  async create(pedido: Pedido): Promise<Pedido> {
    const newPedido = new this.pedidoModel(pedido);
    return newPedido.save();
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoModel.find().exec();
  }

  async findOne(id: string): Promise<Pedido> {
    return this.pedidoModel.findById(id).exec();
  }

  async update(id: string, pedido: Pedido): Promise<Pedido> {
    return this.pedidoModel.findByIdAndUpdate(id, pedido, { new: true }).exec();
  }

  async remove(id: string): Promise<Pedido> {
    return this.pedidoModel.findByIdAndDelete(id).exec();
  }
}
