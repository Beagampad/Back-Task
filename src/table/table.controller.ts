import { InMemoryDBEntityAsyncController, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Controller } from '@nestjs/common';

import { Dataset } from 'src/interfaces/dataset.interface';

@Controller('table')

export class TableController extends InMemoryDBEntityAsyncController<Dataset> {
    constructor(private tableService: InMemoryDBService<Dataset>) {
        super(tableService);
    }
}
