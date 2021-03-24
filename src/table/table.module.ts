import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.service';

@Module({
  imports:  [InMemoryDBModule.forFeature('table')],
  controllers: [TableController],
  //providers: [TableService]
})
export class TableModule {}
