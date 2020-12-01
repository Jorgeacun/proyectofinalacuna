"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AbogadoComponent = void 0;
var core_1 = require("@angular/core");
var abogado_model_1 = require("../../model/abogado.model");
var AbogadoComponent = /** @class */ (function () {
    function AbogadoComponent(abogadoServicio) {
        this.abogadoServicio = abogadoServicio;
        this.abogado = new abogado_model_1.abogadoModel();
        this.abogadolist = [];
        this.getabogados();
    }
    AbogadoComponent.prototype.ngOnInit = function () {
    };
    AbogadoComponent.prototype.getabogados = function () {
        var _this = this;
        this.abogadoServicio.getabogado().subscribe(function (data) {
            _this.abogadolist = data[1];
            console.log(data);
        });
    };
    AbogadoComponent.prototype.crearAbogado = function (form) {
        var _this = this;
        if (form.invalid) {
            console.log('Formulario invalido');
            return;
        }
        if (this.abogado._id) {
            console.log("actualizar");
            this.abogadoServicio.putabogado(this.abogado).
                subscribe(function (resp) {
                console.log(resp);
                _this.getabogados();
            });
        }
        else {
            this.abogadoServicio.postabogado(this.abogado).
                subscribe(function (resp) {
                console.log(resp);
                //  this.abogado = resp;
                _this.getabogados();
            });
        }
        form.reset();
    };
    AbogadoComponent.prototype.borrarAbogodado = function (abogado, i) {
        this.abogadoServicio.Deleteabogado(abogado._id).subscribe();
        this.abogadolist.splice(i, 1);
    };
    AbogadoComponent.prototype.actualizar = function (abogado) {
        this.abogado = abogado;
    };
    AbogadoComponent = __decorate([
        core_1.Component({
            selector: 'app-abogado',
            templateUrl: './abogado.component.html',
            styleUrls: ['./abogado.component.css']
        })
    ], AbogadoComponent);
    return AbogadoComponent;
}());
exports.AbogadoComponent = AbogadoComponent;
