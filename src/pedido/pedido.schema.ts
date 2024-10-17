import { Schema, Document } from 'mongoose';

export const PedidoSchema = new Schema({
  codigo: { type: Number, required: true },
  data_pedido: { type: Date, required: true },
  valor: { type: Number, required: true },
});

export interface Pedido extends Document {
  codigo: number;
  data_pedido: Date;
  valor: number;
}
