/// <reference types="core-js" />
import { ElementRef, OnInit } from '@angular/core';
import 'jquery';
import 'datatables.net';
export declare class DataTableDirective implements OnInit {
    private el;
    dtOptions: any;
    dtInstance: Promise<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
