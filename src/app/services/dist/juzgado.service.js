"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JuzgadoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var JuzgadoService = /** @class */ (function () {
    function JuzgadoService(http) {
        this.http = http;
    }
    JuzgadoService.prototype.getJuzgado = function () {
        var url = "https://proyectacuna.herokuapp.com/api/juzgados";
        var headers = new http_1.HttpHeaders({
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3MDQxNTcsImV4cCI6MTYwNjc0NzM1N30.jqfCPqdGC4m67Ffx2gn5oWODaFiuuLHEXvRZ7oYHu-0'
        });
        return this.http.get(url, { headers: headers })
            .pipe(operators_1.map(function (data) {
            return Object.values(data);
        }));
    };
    JuzgadoService.prototype.postaJuzgado = function (model) {
        var url = "https://proyectacuna.herokuapp.com/api/juzgados";
        var headers = new http_1.HttpHeaders({
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3MDQxNTcsImV4cCI6MTYwNjc0NzM1N30.jqfCPqdGC4m67Ffx2gn5oWODaFiuuLHEXvRZ7oYHu-0'
        });
        var juzgadoTem = __assign({}, model);
        delete juzgadoTem._id;
        return this.http.post(url, juzgadoTem, { headers: headers })
            .pipe(operators_1.map(function (res) {
            model._id = res.name;
            return model;
        }));
    };
    JuzgadoService.prototype.putJuzgado = function (model) {
        var url = "https://proyectacuna.herokuapp.com/api/juzgados";
        var headers = new http_1.HttpHeaders({
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3MDQxNTcsImV4cCI6MTYwNjc0NzM1N30.jqfCPqdGC4m67Ffx2gn5oWODaFiuuLHEXvRZ7oYHu-0'
        });
        var juzgadoTem = __assign({}, model);
        delete juzgadoTem._id;
        return this.http.put("https://proyectacuna.herokuapp.com/api/juzgados/" + model._id, model, { headers: headers });
    };
    JuzgadoService.prototype.DeleteJuzgado = function (id) {
        var headers = new http_1.HttpHeaders({
            'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3MDQxNTcsImV4cCI6MTYwNjc0NzM1N30.jqfCPqdGC4m67Ffx2gn5oWODaFiuuLHEXvRZ7oYHu-0'
        });
        return this.http["delete"]("https://proyectacuna.herokuapp.com/api/juzgados/" + id, { headers: headers });
    };
    JuzgadoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], JuzgadoService);
    return JuzgadoService;
}());
exports.JuzgadoService = JuzgadoService;
