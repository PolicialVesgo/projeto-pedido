import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Produto } from './produto.schema';

@Injectable()
export class ProdutoService {
  constructor(@InjectModel('Produto') private produtoModel: Model<Produto>) {}

  async create(produto: Produto): Promise<Produto> {
    const newProduto = new this.produtoModel(produto);
    return newProduto.save();
  }

  async findAll(): Promise<Produto[]> {
    return this.produtoModel.find().exec();
  }

  async findOne(id: string): Promise<Produto> {
    return this.produtoModel.findById(id).exec();
  }

  async update(id: string, produto: Produto): Promise<Produto> {
    return this.produtoModel.findByIdAndUpdate(id, produto, { new: true }).exec();
  }

  async remove(id: string): Promise<Produto> {
    return this.produtoModel.findByIdAndDelete(id).exec();
  }
}
