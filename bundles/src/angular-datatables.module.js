import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableDirective } from './angular-datatables.directive';
export var DataTablesModule = (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [DataTableDirective],
                    exports: [DataTableDirective]
                },] },
    ];
    DataTablesModule.ctorParameters = function () { return []; };
    return DataTablesModule;
}());
