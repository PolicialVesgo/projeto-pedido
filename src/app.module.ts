import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoModule } from './pedido/pedido.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/seu_banco_de_dados'),
    PedidoModule,
    ProdutoModule,
  ],
})
export class AppModule {}
