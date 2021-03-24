import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Dataset extends InMemoryDBEntity  {

    name: string;
    category: string;
    tags: string;
    balance: number;
    available: number;
    id_dataset: number;
    increment: string;
   
}
