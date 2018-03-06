import { OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

export class PeekABoo implements OnInit {

    static nextId: number = 1;

    constructor(private logger: LoggerService) { }

    ngOnInit() {
        this.logIt('OnInit');
    }

    logIt(msg: string) {
        this.logger.log(`#${PeekABoo.nextId++} ${msg}`);
    }
}