"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JuzgadoComponent = void 0;
var core_1 = require("@angular/core");
var juzgado_model_1 = require("../../model/juzgado.model");
var JuzgadoComponent = /** @class */ (function () {
    function JuzgadoComponent(juzgadoServicio) {
        this.juzgadoServicio = juzgadoServicio;
        this.juzgadoList = [];
        this.juzgado = new juzgado_model_1.JuzgadoModel();
        this.getjuzgadp();
    }
    JuzgadoComponent.prototype.ngOnInit = function () {
    };
    JuzgadoComponent.prototype.getjuzgadp = function () {
        var _this = this;
        this.juzgadoServicio.getJuzgado().subscribe(function (data) {
            _this.juzgadoList = data[1];
            console.log(data);
        });
    };
    JuzgadoComponent.prototype.crearjuzgadp = function (form) {
        var _this = this;
        if (form.invalid) {
            console.log('Formulario invalido');
            return;
        }
        if (this.juzgado._id) {
            this.juzgadoServicio.putJuzgado(this.juzgado).
                subscribe(function (resp) {
                console.log(resp);
                _this.getjuzgadp();
            });
        }
        else {
            this.juzgadoServicio.postaJuzgado(this.juzgado).
                subscribe(function (resp) {
                console.log(resp);
                _this.getjuzgadp();
            });
        }
        form.reset();
    };
    JuzgadoComponent.prototype.borrarJuzgado = function (juzgado, i) {
        this.juzgadoServicio.DeleteJuzgado(juzgado._id).subscribe();
        this.juzgadoList.splice(i, 1);
    };
    JuzgadoComponent.prototype.actualizar = function (juzgado) {
        this.juzgado = juzgado;
    };
    JuzgadoComponent = __decorate([
        core_1.Component({
            selector: 'app-juzgado',
            templateUrl: './juzgado.component.html',
            styleUrls: ['./juzgado.component.css']
        })
    ], JuzgadoComponent);
    return JuzgadoComponent;
}());
exports.JuzgadoComponent = JuzgadoComponent;
