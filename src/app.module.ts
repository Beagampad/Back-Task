import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { WSService } from "./table/table.gateway";

@Module({
  imports: [TableModule, InMemoryDBModule.forRoot({})],
  controllers: [AppController],
  providers: [AppService, WSService],
})
export class AppModule {}
