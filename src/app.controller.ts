import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Dataset } from './interfaces/dataset.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private tableService: InMemoryDBService<Dataset>) {}


    @Get()
    getDatasets() {
      return this.tableService.getAll();
    }

    @Get('dataset/:id')
    getDatabyId(@Param() id: string): Dataset {
      return this.tableService.get(id);
    }
  
    @Get('exchange')
    getExchange(){

      const exchange_rate = Math.floor(Math.random() * (12000 - 5000 + 1) + 5000);
      return exchange_rate;

    }
    
    //------ FAKE DATA ------
    @Get('seed')
    GetFakeData() {

      
        const catOptions = ['Credit Player', 'Affiliates'];
        const tagsOptions = ['Test', 'Testing'];
        const updateOptions = ['up', 'down', 'null'];

        const recordTable = (idx: number): Partial<Dataset> => ({
            name: `Test_account_${idx}`, 
            category: catOptions[catOptions.length * Math.random() | 0], 
            tags: tagsOptions[tagsOptions.length * Math.random() | 0], 
            balance: Math.floor(Math.random() * (30000 - 0 + 1) + 0),
            available: Math.floor(Math.random() * (30000 - 0 + 1) + 0),
            id_dataset: idx,
            increment: updateOptions[updateOptions.length * Math.random() | 0],
        });

        this.tableService.seed(recordTable, 15);
        return this.tableService.getAll();
    }
}
