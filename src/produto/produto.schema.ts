import { Schema, Document } from 'mongoose';

export const ProdutoSchema = new Schema({
  nome: { type: String, required: true },
});

export interface Produto extends Document {
  nome: string;
}
