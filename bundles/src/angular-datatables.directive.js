import { Directive, ElementRef, Inject, Input } from '@angular/core';
import 'jquery';
import 'datatables.net';
export var DataTableDirective = (function () {
    function DataTableDirective(el) {
        this.el = el;
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                var dt = $(_this.el.nativeElement).DataTable(dtOptions);
                resolve(dt);
            });
        });
    };
    DataTableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[datatable]'
                },] },
    ];
    DataTableDirective.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
    ]; };
    DataTableDirective.propDecorators = {
        'dtOptions': [{ type: Input },],
    };
    return DataTableDirective;
}());
