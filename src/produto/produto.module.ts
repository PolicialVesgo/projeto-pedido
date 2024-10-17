import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';
import { ProdutoSchema } from './produto.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Produto', schema: ProdutoSchema }])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
