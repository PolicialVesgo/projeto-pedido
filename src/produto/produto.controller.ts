import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.schema';

@Controller('produtos') // Rota base
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  @Get()
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() produto: Produto) {
    return this.produtoService.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
}
