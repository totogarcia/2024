webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.titulo = 'Web Midas';
        this.descripcion = 'Parseo de mercados';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/vistas/index.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_home__ = __webpack_require__("../../../../../src/app/componentes/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_api__ = __webpack_require__("../../../../../src/app/componentes/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_recomendadas__ = __webpack_require__("../../../../../src/app/componentes/recomendadas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_apiRobot__ = __webpack_require__("../../../../../src/app/componentes/apiRobot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_espana__ = __webpack_require__("../../../../../src/app/componentes/espana.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_alemania__ = __webpack_require__("../../../../../src/app/componentes/alemania.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_australia__ = __webpack_require__("../../../../../src/app/componentes/australia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_austria__ = __webpack_require__("../../../../../src/app/componentes/austria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_belgica__ = __webpack_require__("../../../../../src/app/componentes/belgica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_brasil__ = __webpack_require__("../../../../../src/app/componentes/brasil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_canada__ = __webpack_require__("../../../../../src/app/componentes/canada.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_china__ = __webpack_require__("../../../../../src/app/componentes/china.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_dinamarca__ = __webpack_require__("../../../../../src/app/componentes/dinamarca.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_eeuu__ = __webpack_require__("../../../../../src/app/componentes/eeuu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_api2023__ = __webpack_require__("../../../../../src/app/componentes/api2023.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_francia__ = __webpack_require__("../../../../../src/app/componentes/francia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_holanda__ = __webpack_require__("../../../../../src/app/componentes/holanda.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_india__ = __webpack_require__("../../../../../src/app/componentes/india.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_italia__ = __webpack_require__("../../../../../src/app/componentes/italia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_mexico__ = __webpack_require__("../../../../../src/app/componentes/mexico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_noruega__ = __webpack_require__("../../../../../src/app/componentes/noruega.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_portugal__ = __webpack_require__("../../../../../src/app/componentes/portugal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_rusia__ = __webpack_require__("../../../../../src/app/componentes/rusia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_suecia__ = __webpack_require__("../../../../../src/app/componentes/suecia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__componentes_suiza__ = __webpack_require__("../../../../../src/app/componentes/suiza.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_uk__ = __webpack_require__("../../../../../src/app/componentes/uk.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// ssh root@207.154.253.101 // pass: Duplex6969
/*
LOS CAMBIOS PARA TODOS LOS TS SON EN APIROBOT, ES LA QUE VALE
- para producción cambiaríamos la ip de localhost en el servicio api.ts
- cambiaríamos en package.json lo que hay cambiado // ocean: "start": "nodemon index.js", local: "start": "node index.js",
- En client_dev haríamos ng build --prod y crearía el client en la carpeta dist

npm run ng build --prod

- ahora dist lo sustituiremos por client poniéndole ese nombre
- Subimos a github todo menos node_modules y client_dev (se explica abajo como)
*/
// borramos en github via web el repositorio midasTop2
// lo creamos de nuevo y subimos
// al subir una nueva version al ssh lo haremos así: creamos nueva carpeta, paramos el proceso:
// pm2 kill para parar el proceso en marcha
// Borramos la carpeta: rm -r 2024/
// clonamos lo de github a la nueva carpeta
// git clone https://github.com/totogarcia/2024.git
// cd 2024 
// npm install
// pm2 start index.js
// si hay algún fallo probamos a iniciar 
// si nos equivocáramos con cotrol Z en vez de ctrol c = sudo lsof -t -i tcp:3678 | xargs kill -9
// importamos componentes




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__componentes_api__["a" /* Api */],
            __WEBPACK_IMPORTED_MODULE_9__componentes_recomendadas__["a" /* Recomendadas */],
            __WEBPACK_IMPORTED_MODULE_10__componentes_apiRobot__["a" /* ApiRobot */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_pipe__["a" /* Pipi */],
            __WEBPACK_IMPORTED_MODULE_7__componentes_home__["a" /* Home */],
            __WEBPACK_IMPORTED_MODULE_11__componentes_espana__["a" /* Espana */],
            __WEBPACK_IMPORTED_MODULE_12__componentes_alemania__["a" /* Alemania */],
            __WEBPACK_IMPORTED_MODULE_13__componentes_australia__["a" /* Australia */],
            __WEBPACK_IMPORTED_MODULE_14__componentes_austria__["a" /* Austria */],
            __WEBPACK_IMPORTED_MODULE_15__componentes_belgica__["a" /* Belgica */],
            __WEBPACK_IMPORTED_MODULE_16__componentes_brasil__["a" /* Brasil */],
            __WEBPACK_IMPORTED_MODULE_17__componentes_canada__["a" /* Canada */],
            __WEBPACK_IMPORTED_MODULE_18__componentes_china__["a" /* China */],
            __WEBPACK_IMPORTED_MODULE_19__componentes_dinamarca__["a" /* Dinamarca */],
            __WEBPACK_IMPORTED_MODULE_20__componentes_eeuu__["a" /* EEUU */],
            __WEBPACK_IMPORTED_MODULE_21__componentes_api2023__["a" /* api2023 */],
            __WEBPACK_IMPORTED_MODULE_22__componentes_francia__["a" /* Francia */],
            __WEBPACK_IMPORTED_MODULE_23__componentes_holanda__["a" /* Holanda */],
            __WEBPACK_IMPORTED_MODULE_24__componentes_india__["a" /* India */],
            __WEBPACK_IMPORTED_MODULE_25__componentes_italia__["a" /* Italia */],
            __WEBPACK_IMPORTED_MODULE_26__componentes_mexico__["a" /* Mexico */],
            __WEBPACK_IMPORTED_MODULE_27__componentes_noruega__["a" /* Noruega */],
            __WEBPACK_IMPORTED_MODULE_28__componentes_portugal__["a" /* Portugal */],
            __WEBPACK_IMPORTED_MODULE_29__componentes_rusia__["a" /* Rusia */],
            __WEBPACK_IMPORTED_MODULE_30__componentes_suecia__["a" /* Suecia */],
            __WEBPACK_IMPORTED_MODULE_31__componentes_suiza__["a" /* Suiza */],
            __WEBPACK_IMPORTED_MODULE_32__componentes_uk__["a" /* UK */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__app_routing__["b" /* appRoutingProviders */],
            { provide: __WEBPACK_IMPORTED_MODULE_33__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_33__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_home__ = __webpack_require__("../../../../../src/app/componentes/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_api__ = __webpack_require__("../../../../../src/app/componentes/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_recomendadas__ = __webpack_require__("../../../../../src/app/componentes/recomendadas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_apiRobot__ = __webpack_require__("../../../../../src/app/componentes/apiRobot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_espana__ = __webpack_require__("../../../../../src/app/componentes/espana.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_alemania__ = __webpack_require__("../../../../../src/app/componentes/alemania.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_australia__ = __webpack_require__("../../../../../src/app/componentes/australia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_austria__ = __webpack_require__("../../../../../src/app/componentes/austria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_belgica__ = __webpack_require__("../../../../../src/app/componentes/belgica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_brasil__ = __webpack_require__("../../../../../src/app/componentes/brasil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_canada__ = __webpack_require__("../../../../../src/app/componentes/canada.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_china__ = __webpack_require__("../../../../../src/app/componentes/china.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_dinamarca__ = __webpack_require__("../../../../../src/app/componentes/dinamarca.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_eeuu__ = __webpack_require__("../../../../../src/app/componentes/eeuu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_api2023__ = __webpack_require__("../../../../../src/app/componentes/api2023.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_francia__ = __webpack_require__("../../../../../src/app/componentes/francia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_holanda__ = __webpack_require__("../../../../../src/app/componentes/holanda.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_india__ = __webpack_require__("../../../../../src/app/componentes/india.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_italia__ = __webpack_require__("../../../../../src/app/componentes/italia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_mexico__ = __webpack_require__("../../../../../src/app/componentes/mexico.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_noruega__ = __webpack_require__("../../../../../src/app/componentes/noruega.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_portugal__ = __webpack_require__("../../../../../src/app/componentes/portugal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_rusia__ = __webpack_require__("../../../../../src/app/componentes/rusia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_suecia__ = __webpack_require__("../../../../../src/app/componentes/suecia.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_suiza__ = __webpack_require__("../../../../../src/app/componentes/suiza.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_uk__ = __webpack_require__("../../../../../src/app/componentes/uk.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__componentes_home__["a" /* Home */] },
    { path: 'api', component: __WEBPACK_IMPORTED_MODULE_2__componentes_api__["a" /* Api */] },
    { path: 'recomendadas', component: __WEBPACK_IMPORTED_MODULE_3__componentes_recomendadas__["a" /* Recomendadas */] },
    { path: 'apiRobot', component: __WEBPACK_IMPORTED_MODULE_4__componentes_apiRobot__["a" /* ApiRobot */] },
    { path: 'espana', component: __WEBPACK_IMPORTED_MODULE_5__componentes_espana__["a" /* Espana */] },
    { path: 'alemania', component: __WEBPACK_IMPORTED_MODULE_6__componentes_alemania__["a" /* Alemania */] },
    { path: 'australia', component: __WEBPACK_IMPORTED_MODULE_7__componentes_australia__["a" /* Australia */] },
    { path: 'austria', component: __WEBPACK_IMPORTED_MODULE_8__componentes_austria__["a" /* Austria */] },
    { path: 'belgica', component: __WEBPACK_IMPORTED_MODULE_9__componentes_belgica__["a" /* Belgica */] },
    { path: 'brasil', component: __WEBPACK_IMPORTED_MODULE_10__componentes_brasil__["a" /* Brasil */] },
    { path: 'canada', component: __WEBPACK_IMPORTED_MODULE_11__componentes_canada__["a" /* Canada */] },
    { path: 'china', component: __WEBPACK_IMPORTED_MODULE_12__componentes_china__["a" /* China */] },
    { path: 'dinamarca', component: __WEBPACK_IMPORTED_MODULE_13__componentes_dinamarca__["a" /* Dinamarca */] },
    { path: 'eeuu', component: __WEBPACK_IMPORTED_MODULE_14__componentes_eeuu__["a" /* EEUU */] },
    { path: 'api2023', component: __WEBPACK_IMPORTED_MODULE_15__componentes_api2023__["a" /* api2023 */] },
    { path: 'francia', component: __WEBPACK_IMPORTED_MODULE_16__componentes_francia__["a" /* Francia */] },
    { path: 'holanda', component: __WEBPACK_IMPORTED_MODULE_17__componentes_holanda__["a" /* Holanda */] },
    { path: 'india', component: __WEBPACK_IMPORTED_MODULE_18__componentes_india__["a" /* India */] },
    { path: 'italia', component: __WEBPACK_IMPORTED_MODULE_19__componentes_italia__["a" /* Italia */] },
    { path: 'mexico', component: __WEBPACK_IMPORTED_MODULE_20__componentes_mexico__["a" /* Mexico */] },
    { path: 'noruega', component: __WEBPACK_IMPORTED_MODULE_21__componentes_noruega__["a" /* Noruega */] },
    { path: 'portugal', component: __WEBPACK_IMPORTED_MODULE_22__componentes_portugal__["a" /* Portugal */] },
    { path: 'rusia', component: __WEBPACK_IMPORTED_MODULE_23__componentes_rusia__["a" /* Rusia */] },
    { path: 'suecia', component: __WEBPACK_IMPORTED_MODULE_24__componentes_suecia__["a" /* Suecia */] },
    { path: 'suiza', component: __WEBPACK_IMPORTED_MODULE_25__componentes_suiza__["a" /* Suiza */] },
    { path: 'uk', component: __WEBPACK_IMPORTED_MODULE_26__componentes_uk__["a" /* UK */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__componentes_home__["a" /* Home */] },
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/alemania.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alemania; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router
// Importamos servicio y modelo


var Alemania = (function () {
    function Alemania(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Alemania';
        this.arrayVisible = false;
    }
    Alemania.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('alemania')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Alemania borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('XETRA').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(270000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'alemania').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Alemania agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Alemania.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Alemania.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Alemania.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 2).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Alemania.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer_1 = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer_1) {
                    var cuentaResultado = hoy - ayer_1;
                    var comparacion = cuentaResultado / ayer_1;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi_1 = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi_1) {
                                    var cuentaResultado_1 = hoyBi - ayerBi_1;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi_1;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual_1 = resultado;
                                    if (biAnual_1 > 150 && biAnual_1 > anual_1) {
                                        _this._servicio1.getriAnual(tickerRecibido).subscribe(function (result) {
                                            if (!result) {
                                                alert('No obtenemos resultado en el parseo BiAnual');
                                            }
                                            else {
                                                var hoytri = parseFloat(result[0].adjusted_close);
                                                var ayertri = parseFloat(result[result.length - 1].adjusted_close);
                                                if (hoytri > ayertri) {
                                                    var cuentaResultado_2 = hoytri - ayertri;
                                                    var comparacion_2 = cuentaResultado_2 / ayertri;
                                                    total = comparacion_2 * 100;
                                                    resultado = parseInt(total);
                                                    var triAnual = resultado;
                                                    if (triAnual > 200 && triAnual > biAnual_1 && ayertri <= ayerBi_1 && ayertri < ayer_1) {
                                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                                            if (!response) {
                                                                console.log('error al recibir confirmacion de guardado');
                                                            }
                                                            else {
                                                                console.log('Información de Topmundo agregada a base de datos');
                                                            }
                                                        }, function (error) {
                                                            console.log('Error al guardar datos');
                                                        });
                                                    }
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                    // Aquí termina el nuevo código del bianual
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer_1) {
                    var cuentaResultado = ayer_1 - hoy;
                    var comparacion = cuentaResultado / ayer_1;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer_1) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Alemania.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Alemania.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Alemania.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Alemania.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = '';
            if (stock.Name.split(' ').slice(0, 1).join(' ') === 'Deutsche') {
                nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
                if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                    arrayComprueba.push(nombreComprobar);
                    console.log('Recopilamos datos del mercado Aleman');
                    var nombre_1 = stock.Name;
                    var ticker_1 = stock.Code + '.' + stock.Country;
                    var moneda_1 = stock.Currency;
                    this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                        if (!result) {
                            alert('No obtenemos resultados de acciones');
                        }
                        else {
                            var hoy = parseFloat(result.close); //[0] 
                            if (hoy > 3) {
                                _this.datosFinales.push({
                                    "nombre": nombre_1,
                                    "ticker": ticker_1,
                                    "moneda": moneda_1,
                                    "valor": hoy
                                });
                            }
                        }
                    });
                }
            }
            else {
                nombreComprobar = stock.Name.split(' ').slice(0, 1).join(' ');
                if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                    arrayComprueba.push(nombreComprobar);
                    console.log('Recopilamos datos del mercado Aleman');
                    var nombre_2 = stock.Name;
                    var ticker_2 = stock.Code + '.' + stock.Exchange;
                    var moneda_2 = stock.Currency;
                    var icono_1 = 'ios-star-outline';
                    this_1._servicio1.seleccionarMas3(ticker_2).subscribe(function (result) {
                        if (!result) {
                            alert('No obtenemos resultados de acciones');
                        }
                        else {
                            var hoy = parseFloat(result.close); //[0] 
                            if (hoy > 3) {
                                _this.datosFinales.push({
                                    "nombre": nombre_2,
                                    "ticker": ticker_2,
                                    "moneda": moneda_2,
                                    "valor": hoy,
                                    "icono": icono_1
                                });
                            }
                        }
                    });
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Alemania.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Alemania.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Alemania.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Alemania;
}());
Alemania = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-alemania',
        template: __webpack_require__("../../../../../src/app/vistas/alemania.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Alemania);

var _a, _b, _c, _d;
/* export class Alemania implements OnInit {

    //para pipe
    isDesc : boolean = false;
    column : String = 'anual';
    direction : number;
    public favorito : Modelo1;

    public titulo : string;
    reverse : boolean = false;
    order : String = 'anual';
    public errorMen;
    public mercadoAcciones : any[] = [
        {nombre: 'Adidas',ticker: 'ADS.XETRA'}, {nombre: 'Aixtron',ticker: 'AIXA.XETRA'},
        {nombre: 'Allianz',ticker: 'ALV.XETRA'}, {nombre: 'Basf',ticker: 'BAS.XETRA'},
        {nombre: 'BMW',ticker: 'BMW.XETRA'}, {nombre: 'Bayer',ticker: 'BAYN.XETRA'},
        {nombre: 'Beiersdorf',ticker: 'BEI.XETRA'}, {nombre: 'Commerzbank',ticker: 'CBK.XETRA'},
        {nombre: 'Continental',ticker: 'CON.XETRA'}, {nombre: 'Covestro',ticker: '1COV.XETRA'},
        {nombre: 'Daimler',ticker: 'DAI.XETRA'}, {nombre: 'Deutsche Bank',ticker: 'DBK.XETRA'},
        {nombre: 'Deutsche Bank',ticker: 'DB1.XETRA'}, {nombre: 'Deutsche Post',ticker: 'DPW.XETRA'},
        {nombre: 'Deutsche Wohnen',ticker: 'DWNI.XETRA'}, {nombre: 'Dialog Semicond.',ticker: 'DLG.XETRA'},
        {nombre: 'Drillisch',ticker: 'DRI.XETRA'}, {nombre: 'DT. Telekom',ticker: 'DTE.XETRA'},
        {nombre: 'E.ON',ticker: 'EOAN.XETRA'}, {nombre: 'Evotec',ticker: 'EVT.XETRA'},
        {nombre: 'Fresen. Med. Care',ticker: 'FME.XETRA'}, {nombre: 'Fresenius',ticker: 'FRE.XETRA'},
        {nombre: 'Heidelbergcement',ticker: 'HEI.XETRA'}, {nombre: 'Henkel',ticker: 'HEN.XETRA'},
        {nombre: 'Infineon',ticker: 'IFX.XETRA'}, {nombre: 'K+S',ticker: 'SDF.XETRA'},
        {nombre: 'Kion Group',ticker: 'KGX.XETRA'}, {nombre: 'Lanxess',ticker: 'LXS.XETRA'}, {nombre: 'Linde',ticker: 'LIN.XETRA'},
        {nombre: 'Lufthansa',ticker: 'LHA.XETRA'}, {nombre: 'Merck',ticker: 'MRK.XETRA'},
        {nombre: 'Mtu Aero Engines',ticker: 'MTX.XETRA'}, {nombre: 'Muench Rueckvers',ticker: 'MUV2.XETRA'},
        {nombre: 'Osram Licht',ticker: 'OSR.XETRA'}, {nombre: 'Porsche',ticker: 'PAH3.XETRA'},
        {nombre: 'Prosiebensat',ticker: 'PSM.XETRA'}, {nombre: 'Rwe',ticker: 'RWE.XETRA'},
        {nombre: 'Sap',ticker: 'SAP.XETRA'}, {nombre: 'Siemens',ticker: 'SIE.XETRA'},
        {nombre: 'Siltronic',ticker: 'WAF.XETRA'},{nombre: 'Stabilus',ticker: 'STM.XETRA'}, {nombre: 'Symrise',ticker: 'SY1.XETRA'},
        {nombre: 'ThyssenKrupp',ticker: 'TKA.XETRA'}, {nombre: 'Uniper Sena',ticker: 'UN01.XETRA'},
        {nombre: 'Utd. Internet',ticker: 'UTDI.XETRA'}, {nombre: 'Volkswagen',ticker: 'VOW.XETRA'},
        {nombre: 'Vonovia',ticker: 'VNA.XETRA'}, {nombre: 'Wirecard',ticker: 'WDI.XETRA'}
    ]

    constructor(private _servicio1 : Servicio1, private _favoritoService : ApiServicio, private _route : ActivatedRoute, private _router : Router
    // método: this._servicio1.agregarAApi(this.favorito);
    ) {
        this.titulo = 'Top Alemania';
    }

    ngOnInit() {
        this
        ._favoritoService
        .deletePais('alemania')
        .subscribe(result => {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        },);;
        console.log('API de Alemania borrada');

        // Recopilamos datos anual, semestral y mensual
        for (let stock of this.mercadoAcciones) {
            this
                .sleep(10000)
                .then(() => {
                    this.valor(stock.ticker);
                });
            this
                .sleep(40000)
                .then(() => {
                    this.mensual(stock.ticker);
                });
            this
                .sleep(60000)
                .then(() => {
                    this.semestral(stock.ticker);
                });
            this
                .sleep(80000)
                .then(() => {
                    this.anual(stock.ticker);
                });

            this
                .sleep(100000)
                .then(() => {
                    console.log(stock);
                    this
                        ._favoritoService
                        .addPais(stock, 'alemania')
                        .subscribe(response => {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            } else {
                                console.log('Información de Alemania agregada a base de datos');
                            }
                        }, error => {
                            console.log('Error al guardar datos')
                        });
                });
        }
        console.log(this.mercadoAcciones);
    }

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    ordenar(value : string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }

    // Miramos el Anual
    anual(tickerRecibido) {
        let resultado;
        let total;
        this
            ._servicio1
            .getAnual(tickerRecibido)
            .subscribe(result => {
                if (!result) {
                    alert('No obtenemos resultado en el parseo Anual')
                } else {
                    let hoy = parseFloat(result[0].adjusted_close);
                    let ayer = parseFloat(result[result.length - 1].adjusted_close);
                    if (hoy > ayer) {
                        let cuentaResultado = hoy - ayer;
                        let comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.anual = anual;
                        datoAnual.anualD = 'sube';
                        if(anual > 80 && anual < 300){
                            let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                            this._favoritoService.addPais(stock,'topmundo').subscribe(
                                response =>{
                                    if(!response){
                                        console.log('error al recibir confirmacion de guardado');
                                    }
                                    else{
                                        console.log('Información de Topmundo agregada a base de datos');
                                    }
                                },
                                error =>{
                                    console.log('Error al guardar datos')
                                }
                            );
                        }

                    } else if (hoy < ayer) {
                        let cuentaResultado = ayer - hoy;
                        let comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.anual = anual;
                        datoAnual.anualD = 'baja';

                    } else if (hoy == ayer) {
                        resultado = 0;
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.anual = anual;
                        datoAnual.anualD = 'sube';
                    }
                }
            },);
    }

    // Miramos el Semestral
    semestral(tickerRecibido) { //base,mercado
        let resultado;
        let total;
        this
            ._servicio1
            .getSemestral(tickerRecibido)
            .subscribe(result => {
                if (!result) {
                    alert('No obtenemos resultado en el parseo Anual')
                } else {
                    let hoy = parseFloat(result[0].adjusted_close);
                    let ayer = parseFloat(result[result.length - 1].adjusted_close);

                    if (hoy > ayer) {
                        let cuentaResultado = hoy - ayer;
                        let comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.semestral = anual;
                        datoAnual.semestralD = 'sube';

                    } else if (hoy < ayer) {
                        let cuentaResultado = ayer - hoy;
                        let comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.semestral = anual;
                        datoAnual.semestralD = 'baja';

                    } else if (hoy == ayer) {
                        resultado = 0;
                        let anual = resultado;

                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === tickerRecibido;
                            });
                        datoAnual.semestral = anual;
                        datoAnual.semestralD = 'sube';
                    }
                }
            },);
    }

    // Miramos el Anual
    mensual(tickerRecibido) { //base,mercado
        let resultado;
        let total;
        this
            ._servicio1
            .getMensual(tickerRecibido)
            .subscribe(result => {
                if (!result) {
                    alert('No obtenemos resultado en el parseo Anual')
                } else {
                    let hoy = parseFloat(result[0].adjusted_close);
                    let ayer = parseFloat(result[result.length - 1].adjusted_close);
                    if (hoy > 2 && ayer > 2) {
                        if (hoy > ayer) {
                            let cuentaResultado = hoy - ayer;
                            let comparacion = cuentaResultado / ayer;
                            total = comparacion * 100;
                            resultado = parseInt(total);
                            let anual = resultado;

                            let datoAnual = this
                                .mercadoAcciones
                                .find((p) => {
                                    return p.ticker === tickerRecibido;
                                });
                            datoAnual.mensual = anual;
                            datoAnual.mensualD = 'sube';

                        } else if (hoy < ayer) {
                            let cuentaResultado = ayer - hoy;
                            let comparacion = cuentaResultado / ayer;
                            total = comparacion * 100;
                            resultado = -(parseInt(total));
                            let anual = resultado;

                            let datoAnual = this
                                .mercadoAcciones
                                .find((p) => {
                                    return p.ticker === tickerRecibido;
                                });
                            datoAnual.mensual = anual;
                            datoAnual.mensualD = 'baja';

                        } else if (hoy == ayer) {
                            resultado = 0;
                            let anual = resultado;

                            let datoAnual = this
                                .mercadoAcciones
                                .find((p) => {
                                    return p.ticker === tickerRecibido;
                                });
                            datoAnual.mensual = anual;
                            datoAnual.mensualD = 'sube';
                        }
                    }
                }
            },);
    }
    /* Valor anterior con la eliminación de lo que hay en el array valor(ticker) {
        this
            ._servicio1
            .seleccionarMas3(ticker)
            .subscribe(result => {
                if (!result) {
                    alert('No obtenemos resultados de acciones')
                } else {
                    let hoy = parseFloat(result.close);

                    if (hoy < 3) {
                        for (let i = this.mercadoAcciones.length - 1; i >= 0; i--) {
                            if (ticker === this.mercadoAcciones[i].ticker) {
                                this
                                    .mercadoAcciones
                                    .splice(i, 1); //this is the part where I 'delete' the object
                            }
                        }
                    } else {
                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === ticker;
                            });
                        datoAnual.valor = hoy;
                    }
                    //if(hoy > 3){}
                }
            },);
    } */
/*
valor(ticker) {
    this
        ._servicio1
        .seleccionarMas3(ticker)
        .subscribe(result => {
            if (!result) {
                alert('No obtenemos resultados de acciones')
            } else {
                let hoy = parseFloat(result.close);

                if (hoy < 3) {
                    for (let i = this.mercadoAcciones.length - 1; i >= 0; i--) {
                        if (ticker === this.mercadoAcciones[i].ticker) {
                            this
                                .mercadoAcciones
                                .splice(i, 1); //this is the part where I 'delete' the object
                        }
                    }
                } else if (hoy > 3) {
                    let datoAnual = this
                        .mercadoAcciones
                        .find((p) => {
                            return p.ticker === ticker;
                        });
                    datoAnual.valor = hoy;
                }
                //if(hoy > 3){}
            }
        },);
}

// Aquí creamos el array de objetos final que luego leemos en el html

parseFloat(value) {
    let decimales = parseFloat(value).toFixed(1);
    return decimales;
}
} */ 
//# sourceMappingURL=alemania.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importamos servicio y modelo


var Api = (function () {
    function Api(_servicio1, _apiServicio) {
        this._servicio1 = _servicio1;
        this._apiServicio = _apiServicio;
        this.reverse = true;
        this.order = 'col6';
        this.title = 'Listado de lo que hay en nuestro API';
    }
    Api.prototype.ngOnInit = function () {
        var _this = this;
        // ----------------- ALEMANIA ---------------------
        this._apiServicio.getPais('crypto').subscribe(function (result) {
            console.log(result);
            _this.crypto = result.acciones;
            console.log('Crypto: ');
            console.log(_this.crypto);
            if (!_this.crypto) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- ALEMANIA ---------------------
        this._apiServicio.getPais('alemania').subscribe(function (result) {
            console.log(result);
            _this.alemania = result.acciones;
            console.log('Alemania: ');
            console.log(_this.alemania);
            if (!_this.alemania) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- JAPON ---------------------
        this._apiServicio.getPais('japon').subscribe(function (result) {
            console.log(result);
            _this.japon = result.acciones;
            console.log('Japon: ');
            console.log(_this.japon);
            if (!_this.japon) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- AUSTRALIA ---------------------
        this._apiServicio.getPais('australia').subscribe(function (result) {
            console.log(result);
            _this.australia = result.acciones;
            console.log('Australia: ');
            console.log(_this.australia);
            if (!_this.australia) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- AUSTRIA ---------------------
        this._apiServicio.getPais('austria').subscribe(function (result) {
            console.log(result);
            _this.austria = result.acciones;
            console.log('Austria: ');
            console.log(_this.austria);
            if (!_this.austria) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- BÉLGICA ---------------------
        this._apiServicio.getPais('belgica').subscribe(function (result) {
            console.log(result);
            _this.belgica = result.acciones;
            console.log('belgica: ');
            console.log(_this.belgica);
            if (!_this.belgica) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- BRASIL ---------------------
        this._apiServicio.getPais('brasil').subscribe(function (result) {
            console.log(result);
            _this.brasil = result.acciones;
            console.log('brasil: ');
            console.log(_this.brasil);
            if (!_this.brasil) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- CANADÁ ---------------------
        this._apiServicio.getPais('canada').subscribe(function (result) {
            console.log(result);
            _this.canada = result.acciones;
            console.log('canada: ');
            console.log(_this.canada);
            if (!_this.canada) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- CHINA ---------------------
        this._apiServicio.getPais('china').subscribe(function (result) {
            console.log(result);
            _this.china = result.acciones;
            console.log('china: ');
            console.log(_this.china);
            if (!_this.china) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- DINAMARCA ---------------------
        this._apiServicio.getPais('dinamarca').subscribe(function (result) {
            console.log(result);
            _this.dinamarca = result.acciones;
            console.log('dinamarca: ');
            console.log(_this.dinamarca);
            if (!_this.dinamarca) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- EEUU ---------------------
        this._apiServicio.getPais('eeuu').subscribe(function (result) {
            console.log(result);
            _this.eeuu = result.acciones;
            console.log('eeuu: ');
            console.log(_this.eeuu);
            if (!_this.eeuu) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- ESPAÑA ---------------------
        this._apiServicio.getPais('espana').subscribe(function (result) {
            console.log(result);
            _this.espana = result.acciones;
            console.log('España: ');
            console.log(_this.espana);
            if (!_this.espana) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- FRANCIA ---------------------
        this._apiServicio.getPais('francia').subscribe(function (result) {
            console.log(result);
            _this.francia = result.acciones;
            console.log('francia: ');
            console.log(_this.francia);
            if (!_this.francia) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- HOLANDA ---------------------
        this._apiServicio.getPais('holanda').subscribe(function (result) {
            console.log(result);
            _this.holanda = result.acciones;
            console.log('holanda: ');
            console.log(_this.holanda);
            if (!_this.holanda) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- INDIA ---------------------
        this._apiServicio.getPais('india').subscribe(function (result) {
            console.log(result);
            _this.india = result.acciones;
            console.log('india: ');
            console.log(_this.india);
            if (!_this.india) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- ITALIA ---------------------
        this._apiServicio.getPais('italia').subscribe(function (result) {
            console.log(result);
            _this.italia = result.acciones;
            console.log('Italia: ');
            console.log(_this.italia);
            if (!_this.italia) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- MEXICO ---------------------
        this._apiServicio.getPais('mexico').subscribe(function (result) {
            console.log(result);
            _this.mexico = result.acciones;
            console.log('mexico: ');
            console.log(_this.mexico);
            if (!_this.mexico) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- NORUEGA ---------------------
        this._apiServicio.getPais('noruega').subscribe(function (result) {
            console.log(result);
            _this.noruega = result.acciones;
            console.log('noruega: ');
            console.log(_this.noruega);
            if (!_this.noruega) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- PORTUGAL ---------------------
        this._apiServicio.getPais('portugal').subscribe(function (result) {
            console.log(result);
            _this.portugal = result.acciones;
            console.log('portugal: ');
            console.log(_this.portugal);
            if (!_this.portugal) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- RUSIA ---------------------
        this._apiServicio.getPais('rusia').subscribe(function (result) {
            console.log(result);
            _this.rusia = result.acciones;
            console.log('rusia: ');
            console.log(_this.rusia);
            if (!_this.rusia) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- SUECIA ---------------------
        this._apiServicio.getPais('suecia').subscribe(function (result) {
            console.log(result);
            _this.suecia = result.acciones;
            console.log('suecia: ');
            console.log(_this.suecia);
            if (!_this.suecia) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- SUIZA ---------------------
        this._apiServicio.getPais('suiza').subscribe(function (result) {
            console.log(result);
            _this.suiza = result.acciones;
            console.log('suiza: ');
            console.log(_this.suiza);
            if (!_this.suiza) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- UK ---------------------
        this._apiServicio.getPais('uk').subscribe(function (result) {
            console.log(result);
            _this.uk = result.acciones;
            console.log('uk: ');
            console.log(_this.uk);
            if (!_this.uk) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        // ----------------- TOPMUNDO ---------------------
        this._apiServicio.getPais('topmundo').subscribe(function (result) {
            console.log(result);
            _this.topmundo = result.acciones;
            console.log('Top Mundo: ');
            console.log(_this.topmundo);
            if (!_this.topmundo) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        this._apiServicio.getAcciones().subscribe(function (result) {
            console.log(result);
            _this.acciones = result.acciones;
            console.log(_this.acciones);
            if (!_this.acciones) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
        console.log('topmundo ' + this.topmundo);
    };
    Api.prototype.borrarPais = function (pais) {
        this._apiServicio.deletePais(pais).subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
            else {
                alert('Borrado TopMundo');
            }
        });
    };
    Api.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Api.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 3).join(' ');
        return nombreBien;
    };
    return Api;
}());
Api = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-api',
        template: __webpack_require__("../../../../../src/app/vistas/api.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */], __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__["a" /* Pipi */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object])
], Api);

var _a, _b;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/api2023.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api2023; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importamos servicio y modelo


var api2023 = (function () {
    function api2023(_servicio1, _apiServicio) {
        this._servicio1 = _servicio1;
        this._apiServicio = _apiServicio;
        this.reverse = true;
        this.order = 'col8';
        this.title = 'Listado de lo que hay en nuestro API';
    }
    api2023.prototype.ngOnInit = function () {
        var _this = this;
        // ----------------- TOPMUNDO ---------------------
        this._apiServicio.getPais('topmundo').subscribe(function (result) {
            console.log(result);
            _this.topmundo = result.acciones;
            console.log('Top Mundo: ');
            console.log(_this.topmundo);
            if (!_this.topmundo) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log('Error en la petición');
            }
        });
        this._apiServicio.getAcciones().subscribe(function (result) {
            console.log(result);
            _this.acciones = result.acciones;
            console.log(_this.acciones);
            if (!_this.acciones) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert('Error en la petición');
            }
        });
        console.log('topmundo ' + this.topmundo);
    };
    api2023.prototype.borrarPais = function (pais) {
        this._apiServicio.deletePais(pais).subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
            else {
                alert('Borrado TopMundo');
            }
        });
    };
    api2023.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    api2023.prototype.sumarUnoAlUltimoNumero = function (num) {
        var numStr = num.toString(); // Convertir el número en una cadena de caracteres
        var ultimoChar = numStr.charAt(numStr.length - 1); // Obtener el último carácter
        var ultimoNumero = parseInt(ultimoChar, 10); // Convertir el último carácter en un número entero
        if (isNaN(ultimoNumero)) {
            return num;
        }
        var restoNumStr = numStr.slice(0, numStr.length - 1); // Obtener la cadena de caracteres que representa el número sin el último carácter
        var nuevoUltimoNumero = ultimoNumero + 1; // Sumar 1 al último número
        var nuevoNumStr = restoNumStr + nuevoUltimoNumero.toString(); // Unir la cadena de caracteres que representa el número sin el último carácter con el nuevo último número
        var nuevoNum = parseFloat(nuevoNumStr); // Convertir la cadena de caracteres en un número de punto flotante
        return nuevoNum;
    };
    api2023.prototype.float2int = function (value) {
        return value | 0;
    };
    api2023.prototype.calcular = function () {
        var maximo = this.replaceCommaWithDot(this.num1);
        var minimo = this.replaceCommaWithDot(this.num2);
        var precioFinal = this.sumarUnoAlUltimoNumero(maximo);
        var stopLoss = (minimo * 0.97);
        var numAcciones = this.float2int(this.num3 / (maximo - stopLoss));
        var pasta = this.float2int((numAcciones * precioFinal));
        this.resultado = "\n        Compra " + numAcciones + " ACCIONES cuando el precio sea " + precioFinal.toFixed(3) + " \u20AC/$.\n         STOPLOSS en " + stopLoss.toFixed(3) + " \u20AC/$.\n          VALOR TOTAL de la operaci\u00F3n: " + pasta + " \u20AC/$.\n        ";
    };
    api2023.prototype.replaceCommaWithDot = function (num) {
        var numStr = num.toString();
        if (numStr.indexOf(',') !== -1) {
            num = parseFloat(numStr.replace(',', '.'));
            return num;
        }
        else {
            num = parseFloat(numStr);
            return num;
        }
    };
    api2023.prototype.bandera = function (texto) {
        if (texto.includes(".MC")) {
            return "https://www.banderas-mundo.es/data/flags/h80/es.png";
        }
        else if (texto.includes(".US")) {
            return "https://www.banderas-mundo.es/data/flags/h80/us.png";
        }
        else if (texto.includes(".PA")) {
            return "https://www.banderas-mundo.es/data/flags/h80/fr.png";
        }
        else if (texto.includes(".MI")) {
            return "https://www.banderas-mundo.es/data/flags/h80/it.png";
        }
        else if (texto.includes(".AU")) {
            return "https://www.banderas-mundo.es/data/flags/h80/au.png";
        }
        else if (texto.includes(".XETRA")) {
            return "https://www.banderas-mundo.es/data/flags/h80/de.png";
        }
        else if (texto.includes(".UK")) {
            return "https://www.banderas-mundo.es/data/flags/h80/gb.png";
        }
        else if (texto.includes(".IR")) {
            return "https://www.banderas-mundo.es/data/flags/h80/ie.png";
        }
    };
    api2023.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 3).join(' ');
        return nombreBien;
    };
    return api2023;
}());
api2023 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-api2023',
        template: __webpack_require__("../../../../../src/app/vistas/api2023.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */], __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__["a" /* Pipi */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object])
], api2023);

var _a, _b;
//# sourceMappingURL=api2023.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/apiRobot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRobot; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importamos servicio y modelo


var ApiRobot = (function () {
    function ApiRobot(_servicio1, _favoritoService) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this.arrayAustralia = [];
        this.arrayCrypto = [];
        this.arrayEspana = [];
        this.arrayFrancia = [];
        this.arrayJapon = [];
        this.arrayAlemania = [];
        this.arrayDinamarca = [];
        this.arrayAustria = [];
        this.arrayBelgica = [];
        this.arraySuecia = [];
        this.arraySuiza = [];
        this.arrayUk = [];
        this.arrayMexico = [];
        this.arrayPortugal = [];
        this.arrayHolanda = [];
        this.arrayItalia = [];
        this.arrayNoruega = [];
        this.arrayRusia = [];
        this.arrayBrasil = [];
        this.arrayCanada = [];
        this.arrayChina = [];
        this.arrayIndia = [];
        this.arrayEEUU = [];
        /*public acciones: Modelo1[];
        public alemania: Modelo1[];
        public austria: Modelo1[];
        public belgica: Modelo1[];
        public brasil: Modelo1[];
        public canada: Modelo1[];
        public china: Modelo1[];
        public dinamarca: Modelo1[];
        public eeuu: Modelo1[];
        public francia: Modelo1[];
        public holanda: Modelo1[];
        public india: Modelo1[];
        public mexico: Modelo1[];
        public noruega: Modelo1[];
        public portugal: Modelo1[];
        public rusia: Modelo1[];
        public suecia: Modelo1[];
        public suiza: Modelo1[];
        public uk: Modelo1[];
        public italia: Modelo1[];
        public topmundo: Modelo1[];*/
        this.mercadoAcciones = [
            { icono: 'star-outline', nombre: 'Celsius Holding', ticker: 'CELH.US' }, { icono: 'star-outline', nombre: 'Weatherford International', ticker: 'WFRD.US' },
            // Primero las que sacamos de Barchart
            { icono: 'star-outline', nombre: 'Ranger Oil Corp', ticker: 'ROCC.US' }, { icono: 'star-outline', nombre: 'Destination XL Group', ticker: 'DXLG.US' },
            { icono: 'star-outline', nombre: 'Kura Sushi USA Inc Cl A', ticker: 'KRUS.US' }, { icono: 'star-outline', nombre: 'Lantheus Holdings', ticker: 'LNTH.US' },
            { icono: 'star-outline', nombre: 'Obsidian Energy Ltd', ticker: 'OBE.US' }, { icono: 'star-outline', nombre: 'Merrimack Pharmaceuticals Inc', ticker: 'MACK.US' },
            { icono: 'star-outline', nombre: 'CVD Equipment Corp', ticker: 'CVV.US' }, { icono: 'star-outline', nombre: 'Impinj Inc', ticker: 'PI.US' },
            { icono: 'star-outline', nombre: 'Cvr Partners LP', ticker: 'UAN.US' }, { icono: 'star-outline', nombre: 'Nextier Oilfield Solutions Inc', ticker: 'NEX.US' },
            { icono: 'star-outline', nombre: 'Targa Resources', ticker: 'TRGP.US' }, { icono: 'star-outline', nombre: 'Murphy Oil Corp', ticker: 'MUR.US' },
            { icono: 'star-outline', nombre: 'Hallador Energy Company', ticker: 'HNRG.US' }, { icono: 'star-outline', nombre: 'Enerplus Corp', ticker: 'ERF.US' },
            { icono: 'star-outline', nombre: 'Kosmos Energy Ltd', ticker: 'KOS.US' }, { icono: 'star-outline', nombre: 'Atkore Inc', ticker: 'ATKR.US' },
            { icono: 'star-outline', nombre: 'Climb Global Solutions Inc', ticker: 'CLMB.US' }, { icono: 'star-outline', nombre: 'Prothena Corp', ticker: 'PRTA.US' },
            { icono: 'star-outline', nombre: 'Amplify Energy Corp', ticker: 'AMPY.US' }, { icono: 'star-outline', nombre: 'L.S. Starrett Company', ticker: 'SCX.US' },
            { icono: 'star-outline', nombre: 'Builders Firstsource', ticker: 'BLDR.US' }, { icono: 'star-outline', nombre: 'Ryerson Holding Corp', ticker: 'RYI.US' },
            { icono: 'star-outline', nombre: 'Wesco International', ticker: 'WCC.US' }, { icono: 'star-outline', nombre: 'Euroseas Ltd', ticker: 'ESEA.US' },
            { icono: 'star-outline', nombre: 'R C M Tech Inc', ticker: 'RCMT.US' }, { icono: 'star-outline', nombre: 'Civitas Resources Inc', ticker: 'CIVI.US' },
            { icono: 'star-outline', nombre: 'Calumet Specialty Pr', ticker: 'CLMT.US' }, { icono: 'star-outline', nombre: 'Axcelis Tech Inc', ticker: 'ACLS.US' },
            { icono: 'star-outline', nombre: 'Marathon Digital Hldgs Inc', ticker: 'MARA.US' }, { icono: 'star-outline', nombre: 'Dicks Sporting Goods Inc', ticker: 'DKS.US' },
            { icono: 'star-outline', nombre: 'Atlas Lithium Corp', ticker: 'ATLX.US' }, { icono: 'star-outline', nombre: 'Perion Network Ltd', ticker: 'PERI.US' },
            { icono: 'star-outline', nombre: 'CPI Card Group', ticker: 'PMTS.US' }, { icono: 'star-outline', nombre: 'Extreme Networks', ticker: 'EXTR.US' },
            { icono: 'star-outline', nombre: 'Lattice Semicond', ticker: 'LSCC.US' }, { icono: 'star-outline', nombre: 'Peabody Energy Corp', ticker: 'BTU.US' },
            { icono: 'star-outline', nombre: 'Build-A-Bear Workshop', ticker: 'BBW.US' }, { icono: 'star-outline', nombre: '374Water Inc', ticker: 'SCWO.US' },
            { icono: 'star-outline', nombre: 'Tidewater Inc', ticker: 'TDW.US' }, { icono: 'star-outline', nombre: 'Teekay Tankers Ltd', ticker: 'TNK.US' },
            { icono: 'star-outline', nombre: 'Intest Corp', ticker: 'INTT.US' }, { icono: 'star-outline', nombre: 'Olympic Steel Inc', ticker: 'ZEUS.US' },
            { icono: 'star-outline', nombre: 'Hovnanian Enterprises Inc', ticker: 'HOV.US' }, { icono: 'star-outline', nombre: 'Iveric Bio Inc', ticker: 'ISEE.US' },
            { icono: 'star-outline', nombre: 'Allegro Microsystems Inc', ticker: 'ALGM.US' }, { icono: 'star-outline', nombre: 'Moonlake Immunotherapeutics', ticker: 'MLTX.US' },
            { icono: 'star-outline', nombre: 'Birks Group Inc', ticker: 'BGI.US' }, { icono: 'star-outline', nombre: 'Aehr Test Systems', ticker: 'AEHR.US' },
            { icono: 'star-outline', nombre: 'Travelcenters of America Llc', ticker: 'TA.US' }, { icono: 'star-outline', nombre: 'Precision Drilling Corp', ticker: 'PDS.US' },
            { icono: 'star-outline', nombre: 'Verona Pharma Plc ADR', ticker: 'VRNA.US' }, { icono: 'star-outline', nombre: 'Matador Resources Company', ticker: 'MTDR.US' },
            { icono: 'star-outline', nombre: 'Dillard', ticker: 'DDS.US' }, { icono: 'star-outline', nombre: 'Frontline Plc', ticker: 'FRO.US' },
            { icono: 'star-outline', nombre: 'Transmedics Group Inc', ticker: 'TMDX.US' }, { icono: 'star-outline', nombre: 'Silverbow Resources Inc', ticker: 'SBOW.US' },
            { icono: 'star-outline', nombre: 'Lsb Industries Inc', ticker: 'LXU.US' }, { icono: 'star-outline', nombre: 'Innodata Inc', ticker: 'INOD.US' },
            { icono: 'star-outline', nombre: 'Richardson Electrncs', ticker: 'RELL.US' }, { icono: 'star-outline', nombre: 'Lightwave Logic Inc', ticker: 'LWLG.US' },
            { icono: 'star-outline', nombre: 'Vertex Energy', ticker: 'VTNR.US' }, { icono: 'star-outline', nombre: 'Tecnoglass Inc', ticker: 'TGLS.US' },
            { icono: 'star-outline', nombre: 'Permian Basin Royalty Trust', ticker: 'PBT.US' }, { icono: 'star-outline', nombre: 'Veritiv Corp', ticker: 'VRTV.US' },
            { icono: 'star-outline', nombre: 'Nine Energy Service Inc', ticker: 'NINE.US' }, { icono: 'star-outline', nombre: 'MYR Group Inc', ticker: 'MYRG.US' },
            { icono: 'star-outline', nombre: 'Permian Resources Corp', ticker: 'PR.US' }, { icono: 'star-outline', nombre: 'Cenovus Energy Inc', ticker: 'CVE.US' },
            { icono: 'star-outline', nombre: 'Hudson Tech Inc', ticker: 'HDSN.US' }, { icono: 'star-outline', nombre: 'Antero Resources Corp', ticker: 'AR.US' },
            { icono: 'star-outline', nombre: 'Borr Drilling Ltd', ticker: 'BORR.US' }, { icono: 'star-outline', nombre: 'San Juan Basin Royalty Trust', ticker: 'SJT.US' },
            { icono: 'ios-star-oustline', nombre: 'Enlink Midstream Llc', ticker: 'ENLC.US' }, { icono: 'star-outline', nombre: 'Natural Resource Partners LP', ticker: 'NRP.US' },
            { icono: 'star-outline', nombre: 'J. Jill Inc', ticker: 'JILL.US' }, { icono: 'star-outline', nombre: 'Sandridge Energy Inc', ticker: 'SD.US' },
            { icono: 'star-outline', nombre: 'Sandridge Energy Inc', ticker: 'SD.US' },
            { icono: 'star-outline', nombre: 'Cadre Holdings', ticker: 'CDRE.US' }, { icono: 'star-outline', nombre: 'Sterling Infrastructure', ticker: 'STRL.US' },
            { icono: 'star-outline', nombre: 'Super Micro', ticker: 'SMCI.US' }, { icono: 'star-outline', nombre: 'UFP Technologies', ticker: 'UFPT.US' },
            // las que metemos del parseo
            { icono: 'star-outline', nombre: 'Modine Manufacturing', ticker: 'MOD.US' },
            // Ahora las demas
            { icono: 'star-outline', nombre: 'Alteryx', ticker: 'AYX.US' },
            { icono: 'star-outline', nombre: '3m Company', ticker: 'MMM.US' },
            { icono: 'star-outline', nombre: 'Abiomed Inc.', ticker: 'ABMD.US' },
            { icono: 'star-outline', nombre: 'Liberty Tripadv', ticker: 'LTRPA.US' },
            { icono: 'star-outline', nombre: '51Job', ticker: 'JOBS.US' },
            { icono: 'star-outline', nombre: 'Acorn International', ticker: 'ATV.US' },
            { icono: 'star-outline', nombre: 'Abbott Laboratories', ticker: 'ABT.US' },
            { icono: 'star-outline', nombre: 'ABBVIE', ticker: 'ABBV.US' },
            { icono: 'star-outline', nombre: 'Accenture PLC', ticker: 'ACN.US' },
            { icono: 'star-outline', nombre: 'Activision Blizzard', ticker: 'ATVI.US' },
            { icono: 'star-outline', nombre: 'Adobe Systems', ticker: 'ADBE.US' },
            { icono: 'star-outline', nombre: 'Advanced Micro Devices', ticker: 'AMD.US' },
            { icono: 'star-outline', nombre: 'AES Corp.', ticker: 'AES.US' },
            { icono: 'star-outline', nombre: 'Aetna', ticker: 'AET.US' },
            { icono: 'star-outline', nombre: 'Affiliated Managers Group', ticker: 'AMG.US' },
            { icono: 'star-outline', nombre: 'AFLAC', ticker: 'AFL.US' },
            { icono: 'star-outline', nombre: 'Agnc Investment', ticker: 'AGNC.US' },
            { icono: 'star-outline', nombre: 'Agilent Technologies', ticker: 'A.US' },
            { icono: 'star-outline', nombre: 'Akamai Technologies', ticker: 'AKAM.US' },
            { icono: 'star-outline', nombre: 'Air Products & Chemicals', ticker: 'APD.US' },
            { icono: 'star-outline', nombre: 'Alcoa', ticker: 'AA.US' },
            { icono: 'star-outline', nombre: 'Alexion Pharmaceuticals', ticker: 'ALXN.US' },
            { icono: 'star-outline', nombre: 'Alibaba Group Holding', ticker: 'BABA.US' },
            { icono: 'star-outline', nombre: 'Allergan PLC', ticker: 'AGN.US' },
            { icono: 'star-outline', nombre: 'Align Technology', ticker: 'ALGN.US' },
            { icono: 'star-outline', nombre: 'Alnylam Pharmaceuticals', ticker: 'ALNY.US' },
            { icono: 'star-outline', nombre: 'Allstate Corp.', ticker: 'ALL.US' },
            { icono: 'star-outline', nombre: 'Allegion', ticker: 'ALLE.US' },
            { icono: 'star-outline', nombre: 'Allergan', ticker: 'AGN.US' },
            { icono: 'star-outline', nombre: 'Altria Group', ticker: 'MO.US' },
            { icono: 'star-outline', nombre: 'Alliance Data Systems', ticker: 'ADS.US' },
            { icono: 'star-outline', nombre: 'Alliant Energy', ticker: 'LNT.US' },
            { icono: 'star-outline', nombre: 'Allstate', ticker: 'ALL.US' },
            { icono: 'star-outline', nombre: 'Alphabet (Google)', ticker: 'GOOGL.US' },
            { icono: 'star-outline', nombre: 'Advansix', ticker: 'ASIX.US' },
            { icono: 'star-outline', nombre: 'Altaba', ticker: 'AABA.US' },
            { icono: 'star-outline', nombre: 'Amazon', ticker: 'AMZN.US' },
            { icono: 'star-outline', nombre: 'Flex LNG', ticker: 'FLNG.US' },
            { icono: 'star-outline', nombre: 'Ameren', ticker: 'AEE.US' },
            { icono: 'star-outline', nombre: 'Ametek', ticker: 'AME.US' },
            { icono: 'star-outline', nombre: 'Amphenol', ticker: 'APH.US' },
            { icono: 'star-outline', nombre: 'Cambium Learning', ticker: 'ABCD.US' },
            { icono: 'star-outline', nombre: 'American Airlines Group', ticker: 'AAL.US' },
            { icono: 'star-outline', nombre: 'American Water Works Company', ticker: 'AWK.US' },
            { icono: 'star-outline', nombre: 'American Electric Power', ticker: 'AEP.US' },
            { icono: 'star-outline', nombre: 'American Express', ticker: 'AXP.US' },
            { icono: 'star-outline', nombre: 'American International Group', ticker: 'AIG.US' },
            { icono: 'star-outline', nombre: 'American Tower', ticker: 'AMT.US' },
            { icono: 'star-outline', nombre: 'Ameriprise Financial', ticker: 'AMP.US' },
            { icono: 'star-outline', nombre: 'AmerisourceBergen', ticker: 'ABC.US' },
            { icono: 'star-outline', nombre: 'Amgen', ticker: 'AMGN.US' },
            { icono: 'star-outline', nombre: 'Analog Devices', ticker: 'ADI.US' },
            { icono: 'star-outline', nombre: 'Anadarko Petroleum', ticker: 'APC.US' },
            { icono: 'star-outline', nombre: 'Analog Devices', ticker: 'ADI.US' },
            { icono: 'star-outline', nombre: 'Andeavor', ticker: 'ANDV.US' },
            { icono: 'star-outline', nombre: 'Anheuser-BUsch Inbev', ticker: 'BUD.US' },
            { icono: 'star-outline', nombre: 'Anthem', ticker: 'ANTM.US' },
            { icono: 'star-outline', nombre: 'ANSYS', ticker: 'ANSS.US' },
            { icono: 'star-outline', nombre: 'Aon plc', ticker: 'AON.US' },
            { icono: 'star-outline', nombre: 'Apache Corporation', ticker: 'APA.US' },
            { icono: 'star-outline', nombre: 'Apple', ticker: 'AAPL.US' },
            { icono: 'star-outline', nombre: 'Applied Materials', ticker: 'AMAT.US' },
            { icono: 'star-outline', nombre: 'Arconic', ticker: 'ARNC.US' },
            { icono: 'star-outline', nombre: 'Assurant', ticker: 'AIZ.US' },
            { icono: 'star-outline', nombre: 'Arista Networks', ticker: 'ANET.US' },
            { icono: 'star-outline', nombre: 'AT&T', ticker: 'T.US' },
            { icono: 'star-outline', nombre: 'Asml Holding N.V.', ticker: 'ASML.US' },
            { icono: 'star-outline', nombre: 'Autodesk', ticker: 'ADSK.US' },
            { icono: 'star-outline', nombre: 'Automatic Data Processing', ticker: 'ADP.US' },
            { icono: 'star-outline', nombre: 'Autozone', ticker: 'AZO.US' },
            { icono: 'star-outline', nombre: 'Avis Budget Group', ticker: 'CAR.US' },
            { icono: 'star-outline', nombre: 'AvalonBay Communities', ticker: 'AVB.US' },
            { icono: 'star-outline', nombre: 'Autohome', ticker: 'ATHM.US' },
            { icono: 'star-outline', nombre: 'Mazor Robotics', ticker: 'MZOR.US' },
            { icono: 'star-outline', nombre: 'G1 Therapeutics', ticker: 'GTHX.US' },
            { icono: 'star-outline', nombre: 'Amag Pharmaceuticals', ticker: 'AMAG.US' },
            { icono: 'star-outline', nombre: 'Lonestar Resources', ticker: 'LONE.US' },
            { icono: 'star-outline', nombre: 'Sharpspring', ticker: 'SHSP.US' },
            { icono: 'star-outline', nombre: 'Ultragenyx Pharmaceu', ticker: 'RARE.US' },
            { icono: 'star-outline', nombre: 'Alpha Metallurgical', ticker: 'AMR.US' },
            { icono: 'star-outline', nombre: 'Altium Limited', ticker: 'ALU.US' },
            { icono: 'star-outline', nombre: 'Ambrx Biopharm', ticker: 'AMAM.US' },
            { icono: 'star-outline', nombre: 'Asp Isotopes', ticker: 'ASPI.US' },
            // BBBBBBBBBBBBBBBBBB
            { icono: 'star-outline', nombre: 'Ball', ticker: 'BLL.US' },
            { icono: 'star-outline', nombre: 'Baidu', ticker: 'BIDU.US' },
            { icono: 'star-outline', nombre: 'Baker Hughes', ticker: 'BHGE.US' },
            { icono: 'star-outline', nombre: 'Bank of America', ticker: 'BAC.US' },
            { icono: 'star-outline', nombre: 'Bank of New York Mellon', ticker: 'BK.US' },
            { icono: 'star-outline', nombre: 'Baozun', ticker: 'BZUN.US' },
            { icono: 'star-outline', nombre: 'Bard', ticker: 'BCR.US' },
            { icono: 'star-outline', nombre: 'Baxter International', ticker: 'BAX.US' },
            { icono: 'star-outline', nombre: 'BB&T', ticker: 'BBT.US' },
            { icono: 'star-outline', nombre: 'Bed Bath & Beyond', ticker: 'BBBY.US' },
            { icono: 'star-outline', nombre: 'Becton Dickinson', ticker: 'BDX.US' },
            { icono: 'star-outline', nombre: 'Berkshire Hathaway', ticker: 'BRK.B.US' },
            { icono: 'star-outline', nombre: 'Best Buy.', ticker: 'BBY.US' },
            { icono: 'star-outline', nombre: 'Biogen', ticker: 'BIIB.US' },
            { icono: 'star-outline', nombre: 'Biomarin Pharmaceutical', ticker: 'BMRN.US' },
            { icono: 'star-outline', nombre: 'Boeing Company', ticker: 'BA.US' },
            { icono: 'star-outline', nombre: 'Blucora', ticker: 'BCOR.US' },
            { icono: 'star-outline', nombre: 'Blackrock', ticker: 'BLK.US' },
            { icono: 'star-outline', nombre: 'Bluebird Bio', ticker: 'BLUE.US' },
            { icono: 'star-outline', nombre: 'Boston Scientific', ticker: 'BSX.US' },
            { icono: 'star-outline', nombre: 'BP P.L.C.', ticker: 'BP.US' },
            { icono: 'star-outline', nombre: 'Bristol-Myers Squibb', ticker: 'BMY.US' },
            { icono: 'star-outline', nombre: 'Brinks Company', ticker: 'BCO.US' },
            { icono: 'star-outline', nombre: 'Broadcom LTD.', ticker: 'AVGO.US' },
            { icono: 'star-outline', nombre: 'Broadsoft', ticker: 'BSFT.US' },
            { icono: 'star-outline', nombre: 'Buffalo Wild Wings', ticker: 'BWLD.US' },
            { icono: 'star-outline', nombre: 'BWX Technologies', ticker: 'BWXT.US' },
            { icono: 'star-outline', nombre: 'Avexis', ticker: 'AVXS.US' },
            { icono: 'star-outline', nombre: 'Beigene', ticker: 'BGNE.US' },
            { icono: 'star-outline', nombre: 'Blueprint Medicines', ticker: 'BPMC.US' },
            { icono: 'star-outline', nombre: 'Caredx', ticker: 'CDNA.US' },
            { icono: 'star-outline', nombre: 'Chegg Inc.', ticker: 'CHGG.US' },
            { icono: 'star-outline', nombre: 'Stamps.com', ticker: 'STMP.US' },
            { icono: 'star-outline', nombre: 'Biontech Se.', ticker: 'BNTX.US' },
            // CCCCCCCCCCCCCCCCCC
            { icono: 'star-outline', nombre: 'Comfort Systems', ticker: 'FIX.US' },
            { icono: 'star-outline', nombre: 'Cabaletta Bio', ticker: 'CABA.US' },
            { icono: 'star-outline', nombre: 'C.H. Robinson Worldwide', ticker: 'CHRW.US' },
            { icono: 'star-outline', nombre: 'C.R. Bard', ticker: 'BCR.US' },
            { icono: 'star-outline', nombre: 'Transglobe Energy', ticker: 'TGA.US' },
            { icono: 'star-outline', nombre: 'Catalyst Bio', ticker: 'CBIO.US' },
            { icono: 'star-outline', nombre: 'Cadence Design Systems', ticker: 'CDNS.US' },
            { icono: 'star-outline', nombre: 'Capital One Financial', ticker: 'COF.US' },
            { icono: 'star-outline', nombre: 'Caesars Entertainment', ticker: 'CZR.US' },
            { icono: 'star-outline', nombre: 'Cardinal Health', ticker: 'CAH.US' },
            { icono: 'star-outline', nombre: 'Carnival', ticker: 'CCL.US' },
            { icono: 'star-outline', nombre: 'Caterpillar', ticker: 'CAT.US' },
            { icono: 'star-outline', nombre: 'Cavium', ticker: 'CAVM.US' },
            { icono: 'star-outline', nombre: 'Htg Molecular Dia', ticker: 'HTGM.US' },
            { icono: 'star-outline', nombre: 'Cboe Global Markets', ticker: 'CBOE.US' },
            { icono: 'star-outline', nombre: 'CBS', ticker: 'CBS.US' },
            { icono: 'star-outline', nombre: 'Karyopharm Therapeut', ticker: 'KPTI.US' },
            { icono: 'star-outline', nombre: 'CDK Global', ticker: 'CDK.US' },
            { icono: 'star-outline', nombre: 'Celgene', ticker: 'CELG.US' },
            { icono: 'star-outline', nombre: 'Centurylink', ticker: 'CTL.US' },
            { icono: 'star-outline', nombre: 'Charles Schwab', ticker: 'SCHW.US' },
            { icono: 'star-outline', nombre: 'Cerner', ticker: 'CERN.US' },
            { icono: 'star-outline', nombre: 'Charter Communications', ticker: 'CHTR.US' },
            { icono: 'star-outline', nombre: 'Check Point Software Technologies', ticker: 'CHKP.US' },
            { icono: 'star-outline', nombre: 'Chevron', ticker: 'CVX.US' },
            { icono: 'star-outline', nombre: 'Chipotle Mexican Grill', ticker: 'CMG.US' },
            { icono: 'star-outline', nombre: 'China Lodging Group', ticker: 'HTHT.US' },
            { icono: 'star-outline', nombre: 'Chubb LTD.', ticker: 'CB.US' },
            { icono: 'star-outline', nombre: 'Verastem', ticker: 'VSTM.US' },
            { icono: 'star-outline', nombre: 'Cigna', ticker: 'CI.US' },
            { icono: 'star-outline', nombre: 'Cintas', ticker: 'CTAS.US' },
            { icono: 'star-outline', nombre: 'Kingtone Wirelessinf', ticker: 'KONE.US' },
            { icono: 'star-outline', nombre: 'Cisco Systems', ticker: 'CSCO.US' },
            { icono: 'star-outline', nombre: 'Citigroup', ticker: 'C.US' },
            { icono: 'star-outline', nombre: 'Citizens Financial Group', ticker: 'CFG.US' },
            { icono: 'star-outline', nombre: 'Citrix Systems', ticker: 'CTXS.US' },
            { icono: 'star-outline', nombre: 'Clovis Oncology', ticker: 'CLVS.US' },
            { icono: 'star-outline', nombre: 'CME Group', ticker: 'CME.US' },
            { icono: 'star-outline', nombre: 'Coca-Cola', ticker: 'KO.US' },
            { icono: 'star-outline', nombre: 'Colgate-Palmolive', ticker: 'CL.US' },
            { icono: 'star-outline', nombre: 'Cognex', ticker: 'CGNX.US' },
            { icono: 'star-outline', nombre: 'Cognizant Technology Solutions', ticker: 'CTSH.US' },
            { icono: 'star-outline', nombre: 'Conocophillips', ticker: 'COP.US' },
            { icono: 'star-outline', nombre: 'Comerica', ticker: 'CMA.US' },
            { icono: 'star-outline', nombre: 'Conagra brands', ticker: 'CAG.US' },
            { icono: 'star-outline', nombre: 'Concho Resources', ticker: 'CXO.US' },
            { icono: 'star-outline', nombre: 'Cooper Companies', ticker: 'COO.US' },
            { icono: 'star-outline', nombre: 'Coty', ticker: 'COTY.US' },
            { icono: 'star-outline', nombre: 'CSRA', ticker: 'CSRA.US' },
            { icono: 'star-outline', nombre: 'Coherent', ticker: 'COHR.US' },
            { icono: 'star-outline', nombre: 'Comcast', ticker: 'CMCSA.US' },
            { icono: 'star-outline', nombre: 'Commscope Holding', ticker: 'COMM.US' },
            { icono: 'star-outline', nombre: 'Constellation Brands', ticker: 'STZ.US' },
            { icono: 'star-outline', nombre: 'Costar Group', ticker: 'CSGP.US' },
            { icono: 'star-outline', nombre: 'Costco Wholesale', ticker: 'COST.US' },
            { icono: 'star-outline', nombre: 'Credit Acceptance', ticker: 'CACC.US' },
            { icono: 'star-outline', nombre: 'Crown Castle International', ticker: 'CCI.US' },
            { icono: 'star-outline', nombre: 'CSX', ticker: 'CSX.US' },
            { icono: 'star-outline', nombre: 'Ctrip.com International', ticker: 'CTRP.US' },
            { icono: 'star-outline', nombre: 'Cummins', ticker: 'CMI.US' },
            { icono: 'star-outline', nombre: 'CVS Health', ticker: 'CVS.US' },
            { icono: 'star-outline', nombre: 'Crispr Therapeutics', ticker: 'CRSP.US' },
            { icono: 'star-outline', nombre: 'E.L.F. Beauty', ticker: 'ELF.US' },
            { icono: 'star-outline', nombre: 'Cypress Semiconductor', ticker: 'CY.US' },
            { icono: 'star-outline', nombre: 'Mimecast', ticker: 'MIME.US' },
            { icono: 'star-outline', nombre: 'Smart Global Holdings', ticker: 'SGH.US' },
            { icono: 'star-outline', nombre: 'Turtle Beach Corp', ticker: 'HEAR.US' },
            { icono: 'star-outline', nombre: 'Ptc Therapeutics', ticker: 'PTCT.US' },
            { icono: 'star-outline', nombre: 'Consol Energy', ticker: 'CEIX.US' },
            { icono: 'star-outline', nombre: 'Crowstrikes Holdings', ticker: 'CRWD.US' },
            { icono: 'star-outline', nombre: 'Chesapeake Energy', ticker: 'CHKEZ.US' },
            { icono: 'star-outline', nombre: 'Constellation Energy', ticker: 'CEG.US' },
            // DDDDDDDDDDDDDDDDDDDDD
            { icono: 'star-outline', nombre: 'Dream Finders', ticker: 'DFH.US' },
            { icono: 'star-outline', nombre: 'Dianthus Therapeutics', ticker: 'DNTH.US' },
            { icono: 'star-outline', nombre: 'D.R. Horton', ticker: 'DHI.US' },
            { icono: 'star-outline', nombre: 'Okta', ticker: 'OKTA.US' },
            { icono: 'star-outline', nombre: 'Danaher', ticker: 'DHR.US' },
            { icono: 'star-outline', nombre: 'Davita', ticker: 'DVA.US' },
            { icono: 'star-outline', nombre: 'Dave & Busters Entertainment', ticker: 'PLAY.US' },
            { icono: 'star-outline', nombre: 'Darden Restaurants', ticker: 'DRI.US' },
            { icono: 'star-outline', nombre: 'Digital Realty Trust', ticker: 'DLR.US' },
            { icono: 'star-outline', nombre: 'Deere & Company', ticker: 'DE.US' },
            { icono: 'star-outline', nombre: 'Dentsply Sirona', ticker: 'XRAY.US' },
            { icono: 'star-outline', nombre: 'Delphi Technologies', ticker: 'DLPH.US' },
            { icono: 'star-outline', nombre: 'Delta Air Lines', ticker: 'DAL.US' },
            { icono: 'star-outline', nombre: 'Devon Energy', ticker: 'DVN.US' },
            { icono: 'star-outline', nombre: 'Dexcom', ticker: 'DXCM.US' },
            { icono: 'star-outline', nombre: 'Discover Financial Services', ticker: 'DFS.US' },
            { icono: 'star-outline', nombre: 'Diamondback Energy', ticker: 'FANG.US' },
            { icono: 'star-outline', nombre: 'Discovery Communications', ticker: 'DISCA.US' },
            { icono: 'star-outline', nombre: 'Dish Network', ticker: 'DISH.US' },
            { icono: 'star-outline', nombre: 'Dollar General', ticker: 'DG.US' },
            { icono: 'star-outline', nombre: 'Dominion Energy', ticker: 'D.US' },
            { icono: 'star-outline', nombre: 'Dominos Pizza', ticker: 'DPZ.US' },
            { icono: 'star-outline', nombre: 'Downdupont', ticker: 'DWDP.US' },
            { icono: 'star-outline', nombre: 'Aptose Bioscns', ticker: 'APTO.US' },
            { icono: 'star-outline', nombre: 'Dover', ticker: 'DOV.US' },
            { icono: 'star-outline', nombre: 'Dr Pepper Snapple Group', ticker: 'DPS.US' },
            { icono: 'star-outline', nombre: 'Dollar Tree', ticker: 'DLTR.US' },
            { icono: 'star-outline', nombre: 'Duke Energy', ticker: 'DUK.US' },
            { icono: 'star-outline', nombre: 'Rafael Holdings', ticker: 'RFL.US' },
            { icono: 'star-outline', nombre: 'Dxc Technology Company', ticker: 'DXC.US' },
            { icono: 'star-outline', nombre: 'Tactile Systems Technology', ticker: 'TCMD.US' },
            { icono: 'star-outline', nombre: 'Anaptysbio Inc.', ticker: 'ANAB.US' },
            { icono: 'star-outline', nombre: 'Axogen', ticker: 'AXGN.US' },
            { icono: 'star-outline', nombre: 'Xoxo Group', ticker: 'XOXO.US' },
            { icono: 'star-outline', nombre: 'Liveperson', ticker: 'LPSN.US' },
            { icono: 'star-outline', nombre: 'Five9 Inc.', ticker: 'FIVN.US' },
            { icono: 'star-outline', nombre: 'Galectin Therapeutic', ticker: 'GALT.US' },
            { icono: 'star-outline', nombre: 'Ingevity Corp.', ticker: 'NGVT.US' },
            { icono: 'star-outline', nombre: 'The Trade Desk', ticker: 'TTD.US' },
            { icono: 'star-outline', nombre: 'Loxo Oncology', ticker: 'LOXO.US' },
            { icono: 'star-outline', nombre: 'Madrigal Pharmaceuticals', ticker: 'MDGL.US' },
            { icono: 'star-outline', nombre: 'MGP Ingredients', ticker: 'MGPI.US' },
            { icono: 'star-outline', nombre: 'Ringcentral', ticker: 'RNG.US' },
            { icono: 'star-outline', nombre: 'Copart', ticker: 'CPRT.US' },
            { icono: 'star-outline', nombre: 'Iqiyi Inc.', ticker: 'IQ.US' },
            { icono: 'star-outline', nombre: 'PTC', ticker: 'PTC.US' },
            { icono: 'star-outline', nombre: 'Shutterfly', ticker: 'SFLY.US' },
            { icono: 'star-outline', nombre: 'Tandem Diabetes Care', ticker: 'TNDM.US' },
            { icono: 'star-outline', nombre: 'NII Holdings', ticker: 'NIHD.US' },
            { icono: 'star-outline', nombre: 'Intelsat S.A.', ticker: 'I.US' },
            { icono: 'star-outline', nombre: 'Bluelinx Holdings', ticker: 'BXC.US' },
            { icono: 'star-outline', nombre: 'NF Energy Saving Cor', ticker: 'NFEC.US' },
            { icono: 'star-outline', nombre: 'Legacy Reserves LP', ticker: 'LGCY.US' },
            { icono: 'star-outline', nombre: 'Fossil Group', ticker: 'FOSL.US' },
            { icono: 'star-outline', nombre: 'Vaalco Energy', ticker: 'EGY.US' },
            { icono: 'star-outline', nombre: 'Whiting Petroleum', ticker: 'WLL.US' },
            { icono: 'star-outline', nombre: 'Arqule', ticker: 'ARQL.US' },
            { icono: 'star-outline', nombre: 'Endocyte', ticker: 'ECYT.US' },
            { icono: 'star-outline', nombre: 'Sesen Bio', ticker: 'SESN.US' },
            { icono: 'star-outline', nombre: 'Arrowhead Pharma', ticker: 'ARWR.US' },
            { icono: 'star-outline', nombre: 'Nucana', ticker: 'NCNA.US' },
            { icono: 'star-outline', nombre: 'Techtarget', ticker: 'TTGT.US' },
            { icono: 'star-outline', nombre: 'Travelzoo', ticker: 'TZOO.US' },
            { icono: 'star-outline', nombre: 'Chinanet Online', ticker: 'CNET.US' },
            { icono: 'star-outline', nombre: 'Shotspotter', ticker: 'SSTI.US' },
            { icono: 'star-outline', nombre: 'Nuvectra', ticker: 'NVTR.US' },
            { icono: 'star-outline', nombre: 'Skyline', ticker: 'SKY.US' },
            { icono: 'star-outline', nombre: 'Egain', ticker: 'EGAN.US' },
            { icono: 'star-outline', nombre: 'Xencor', ticker: 'XNCR.US' },
            { icono: 'star-outline', nombre: 'Stein Mart', ticker: 'SMRT.US' },
            { icono: 'star-outline', nombre: 'Mirati Therapeutics', ticker: 'MRTX.US' },
            { icono: 'star-outline', nombre: 'Atara Biotherap', ticker: 'ATRA.US' },
            { icono: 'star-outline', nombre: 'Axon', ticker: 'AAXN.US' },
            { icono: 'star-outline', nombre: 'Twilio', ticker: 'TWLO.US' },
            { icono: 'star-outline', nombre: 'Comstock Hldgs', ticker: 'CHCI.US' },
            { icono: 'star-outline', nombre: 'Tenet Healthcare', ticker: 'THC.US' },
            { icono: 'star-outline', nombre: 'Viking Thera', ticker: 'VKTX.US' },
            { icono: 'star-outline', nombre: 'Casi Phrmactcls', ticker: 'CASI.US' },
            { icono: 'star-outline', nombre: 'Odyssey Marine', ticker: 'OMEX.US' },
            { icono: 'star-outline', nombre: 'Mei Pharma', ticker: 'MEIP.US' },
            { icono: 'star-outline', nombre: 'Zymeworks', ticker: 'ZYME.US' },
            { icono: 'star-outline', nombre: 'RF Industries', ticker: 'RFIL.US' },
            { icono: 'star-outline', nombre: 'Enova International', ticker: 'ENVA.US' },
            { icono: 'star-outline', nombre: 'Profire Energy', ticker: 'PFIE.US' },
            { icono: 'star-outline', nombre: 'Immersion', ticker: 'IMMR.US' },
            { icono: 'star-outline', nombre: 'Tapimmune', ticker: 'TPIV.US' },
            { icono: 'star-outline', nombre: 'T2 Biosystems', ticker: 'TTOO.US' },
            { icono: 'star-outline', nombre: 'Durect', ticker: 'DRRX.US' },
            { icono: 'star-outline', nombre: 'Pfenex', ticker: 'PFNX.US' },
            { icono: 'star-outline', nombre: 'Medifast', ticker: 'MED.US' },
            { icono: 'star-outline', nombre: 'Penn Va', ticker: 'PVAC.US' },
            { icono: 'star-outline', nombre: 'Penumbra', ticker: 'PEN.US' },
            { icono: 'star-outline', nombre: 'Town Sports Internat', ticker: 'CLUB.US' },
            { icono: 'star-outline', nombre: 'Rocket Pharmaceuticals', ticker: 'RCKT.US' },
            { icono: 'star-outline', nombre: 'World Wrestling Entertainment', ticker: 'WWE.US' },
            { icono: 'star-outline', nombre: 'Denbury Resources', ticker: 'DNR.US' },
            // EEEEEEEEEEEEEEEEEEEEEE 
            { icono: 'star-outline', nombre: 'Freshpet', ticker: 'FRPT.US' },
            { icono: 'star-outline', nombre: 'Etsy', ticker: 'ETSY.US' },
            { icono: 'star-outline', nombre: 'Eaton', ticker: 'ETN.US' },
            { icono: 'star-outline', nombre: 'Everbridge', ticker: 'EVBG.US' },
            { icono: 'star-outline', nombre: 'Staar Surgical', ticker: 'STAA.US' },
            { icono: 'star-outline', nombre: 'Euro Tech Hldg', ticker: 'CLWT.US' },
            { icono: 'star-outline', nombre: 'Juniper Pharm', ticker: 'JNP.US' },
            { icono: 'star-outline', nombre: 'Vince Holding', ticker: 'VNCE.US' },
            { icono: 'star-outline', nombre: 'Chemocentryx', ticker: 'CCXI.US' },
            { icono: 'star-outline', nombre: 'Vicor', ticker: 'VICR.US' },
            { icono: 'star-outline', nombre: 'China Hgs Real Est', ticker: 'HGSH.US' },
            { icono: 'star-outline', nombre: 'Pain Therapeutics', ticker: 'PTIE.US' },
            { icono: 'star-outline', nombre: 'Genesis Healthcare', ticker: 'GEN.US' },
            { icono: 'star-outline', nombre: 'Ebay', ticker: 'EBAY.US' },
            { icono: 'star-outline', nombre: 'Greentree Hospitality Group', ticker: 'GHG.US' },
            { icono: 'star-outline', nombre: 'Ascendis Pharma', ticker: 'ASND.US' },
            { icono: 'star-outline', nombre: 'Coupa Software', ticker: 'COUP.US' },
            { icono: 'star-outline', nombre: 'Ecolab', ticker: 'ECL.US' },
            { icono: 'star-outline', nombre: 'Mammoth Energy Services', ticker: 'TUSK.US' },
            { icono: 'star-outline', nombre: 'Weight Watchers International', ticker: 'WTW.US' },
            { icono: 'star-outline', nombre: 'Ascena Retail', ticker: 'ASNA.US' },
            { icono: 'star-outline', nombre: 'Eyepoint Pharmaceuticals', ticker: 'EYPT.US' },
            { icono: 'star-outline', nombre: 'Fte Networks', ticker: 'FTNW.US' },
            { icono: 'star-outline', nombre: 'Reeds', ticker: 'REED.US' },
            { icono: 'star-outline', nombre: 'Edison International', ticker: 'EIX.US' },
            { icono: 'star-outline', nombre: 'Vericel', ticker: 'VCEL.US' },
            { icono: 'star-outline', nombre: 'Acelrx Pharmaceutica', ticker: 'ACRX.US' },
            { icono: 'star-outline', nombre: 'Adaptimmune Ther Ads', ticker: 'ADAP.US' },
            { icono: 'star-outline', nombre: 'Cerus', ticker: 'CERS.US' },
            { icono: 'star-outline', nombre: 'Fireman B.V.', ticker: 'IFRX.US' },
            { icono: 'star-outline', nombre: 'Hailiang Edu Grp Ads', ticker: 'HLG.US' },
            { icono: 'star-outline', nombre: 'Arcadia Bio', ticker: 'RKDA.US' },
            { icono: 'star-outline', nombre: 'Carvana', ticker: 'CVNA.US' },
            { icono: 'star-outline', nombre: 'Carver Bancorp', ticker: 'CARV.US' },
            { icono: 'star-outline', nombre: 'Edwards Lifesciences', ticker: 'EW.US' },
            { icono: 'star-outline', nombre: 'Cti Biopharm', ticker: 'CTIC.US' },
            { icono: 'star-outline', nombre: 'Regenxbio', ticker: 'RGNX.US' },
            { icono: 'star-outline', nombre: 'Amer Superconductor', ticker: 'AMSC.US' },
            { icono: 'star-outline', nombre: 'Electronic Arts', ticker: 'EA.US' },
            { icono: 'star-outline', nombre: 'Nanostring Tech', ticker: 'NSTG.US' },
            { icono: 'star-outline', nombre: 'Atlassian Corp.', ticker: 'TEAM.US' },
            { icono: 'star-outline', nombre: 'Intricon', ticker: 'IIN.US' },
            { icono: 'star-outline', nombre: 'Dynamic Materials', ticker: 'BOOM.US' },
            { icono: 'star-outline', nombre: 'Funko', ticker: 'FNKO.US' },
            { icono: 'star-outline', nombre: 'Sailpoint Technologies', ticker: 'SAIL.US' },
            { icono: 'star-outline', nombre: 'Xenon Pharmace', ticker: 'XENE.US' },
            { icono: 'star-outline', nombre: 'Catasys', ticker: 'CATS.US' },
            { icono: 'star-outline', nombre: 'The Container Store Group', ticker: 'TCS.US' },
            { icono: 'star-outline', nombre: 'Acm Research', ticker: 'ACMR.US' },
            { icono: 'star-outline', nombre: 'Momenta Pharma', ticker: 'MNTA.US' },
            { icono: 'star-outline', nombre: 'Proqr Therapeutics', ticker: 'PRQR.US' },
            { icono: 'star-outline', nombre: 'Genprex', ticker: 'GNPX.US' },
            { icono: 'star-outline', nombre: 'Myovant Sciences', ticker: 'MYOV.US' },
            { icono: 'star-outline', nombre: '500Wan.Com', ticker: 'WBAI.US' },
            { icono: 'star-outline', nombre: 'Codexis', ticker: 'CDXS.US' },
            { icono: 'star-outline', nombre: 'Geopark Hldgs', ticker: 'GPRK.US' },
            { icono: 'star-outline', nombre: 'Ceragon Networks', ticker: 'CRNT.US' },
            { icono: 'star-outline', nombre: 'Transenterix', ticker: 'TRXC.US' },
            { icono: 'star-outline', nombre: 'Seacor Marine Holdings', ticker: 'SMHI.US' },
            { icono: 'star-outline', nombre: 'Enphase Energy', ticker: 'ENPH.US' },
            { icono: 'star-outline', nombre: 'New Relic', ticker: 'NEWR.US' },
            { icono: 'star-outline', nombre: 'Ubiquiti Networks', ticker: 'UBNT.US' },
            { icono: 'star-outline', nombre: 'Coherus Bio', ticker: 'CHRS.US' },
            { icono: 'star-outline', nombre: 'Enanta Pharmaceutica', ticker: 'ENTA.US' },
            { icono: 'star-outline', nombre: 'Mongodb', ticker: 'MDB.US' },
            { icono: 'star-outline', nombre: 'Eloxx Pharmaceuticals', ticker: 'ELOX.US' },
            { icono: 'star-outline', nombre: 'Adverum Biotechnlgs', ticker: 'ADVM.US' },
            { icono: 'star-outline', nombre: 'Evolus', ticker: 'EOLS.US' },
            { icono: 'star-outline', nombre: 'Workiva', ticker: 'WK.US' },
            { icono: 'star-outline', nombre: 'Biolife Solutions', ticker: 'BLFS.US' },
            { icono: 'star-outline', nombre: 'Pioneer Energy Services', ticker: 'PES.US' },
            { icono: 'star-outline', nombre: 'American Pub.', ticker: 'APEI.US' },
            { icono: 'star-outline', nombre: 'Sorrento Therpt', ticker: 'SRNE.US' },
            { icono: 'star-outline', nombre: 'Surmodics', ticker: 'SRDX.US' },
            { icono: 'star-outline', nombre: 'Healthequity', ticker: 'HQY.US' },
            { icono: 'star-outline', nombre: 'W&T Offshore', ticker: 'WTI.US' },
            { icono: 'star-outline', nombre: 'Bandwidth', ticker: 'BAND.US' },
            { icono: 'star-outline', nombre: 'R1 Rcm', ticker: 'RCM.US' },
            { icono: 'star-outline', nombre: 'Match Group', ticker: 'MTCH.US' },
            { icono: 'star-outline', nombre: 'Wix.Com', ticker: 'WIX.US' },
            { icono: 'star-outline', nombre: 'Aslan Pharmaceuticals', ticker: 'ASLN.US' },
            { icono: 'star-outline', nombre: 'California Resources', ticker: 'CRC.US' },
            { icono: 'star-outline', nombre: 'Intelligent Systems', ticker: 'INS.US' },
            { icono: 'star-outline', nombre: 'Geron', ticker: 'GERN.US' },
            { icono: 'star-outline', nombre: 'Eastside Distilling', ticker: 'EAST.US' },
            { icono: 'star-outline', nombre: 'Sunrun', ticker: 'RUN.US' },
            { icono: 'star-outline', nombre: 'Fate Therapeutics', ticker: 'FATE.US' },
            { icono: 'star-outline', nombre: 'Ollie S Bargain', ticker: 'OLLI.US' },
            { icono: 'star-outline', nombre: 'Innovate Biopharmaceuticals', ticker: 'INNT.US' },
            { icono: 'star-outline', nombre: 'Exp Realty Internati', ticker: 'EXPI.US' },
            { icono: 'star-outline', nombre: 'Exp Realty Internati', ticker: 'NDLS.US' },
            { icono: 'star-outline', nombre: 'Aeglea Biothera', ticker: 'AGLE.US' },
            { icono: 'star-outline', nombre: 'Cytosorbents Cor', ticker: 'CTSO.US' },
            { icono: 'star-outline', nombre: 'Innovative Industrial', ticker: 'IIPR.US' },
            { icono: 'star-outline', nombre: 'Rapid7', ticker: 'RPD.US' },
            { icono: 'star-outline', nombre: 'Uniqure N.V.', ticker: 'QURE.US' },
            { icono: 'star-outline', nombre: 'Evolent Health', ticker: 'EVH.US' },
            { icono: 'star-outline', nombre: 'Planet Fitness', ticker: 'PLNT.US' },
            { icono: 'star-outline', nombre: 'Tabula Rasa Healthcare', ticker: 'TRHC.US' },
            { icono: 'star-outline', nombre: 'Eli Lilly', ticker: 'LLY.US' }, { icono: 'star-outline', nombre: 'Emerson Electric', ticker: 'EMR.US' },
            { icono: 'star-outline', nombre: 'Entergy', ticker: 'ETR.US' }, { icono: 'star-outline', nombre: 'Envision Healthcare Holdings', ticker: 'EVHC.US' },
            { icono: 'star-outline', nombre: 'Enterprise Products Partners', ticker: 'EPD.US' }, { icono: 'star-outline', nombre: 'Eog Resources', ticker: 'EOG.US' },
            { icono: 'star-outline', nombre: 'EQT', ticker: 'EQT.US' }, { icono: 'star-outline', nombre: 'Equifax', ticker: 'EFX.US' }, { icono: 'star-outline', nombre: 'Equinix', ticker: 'EQIX.US' },
            { icono: 'star-outline', nombre: 'Equity Residential', ticker: 'EQR.US' }, { icono: 'star-outline', nombre: 'Essex Property Trust', ticker: 'ESS.US' },
            { icono: 'star-outline', nombre: 'Estee Lauder Companies', ticker: 'EL.US' }, { icono: 'star-outline', nombre: 'Everest Re Group', ticker: 'RE.US' },
            { icono: 'star-outline', nombre: 'Eversource Energy', ticker: 'ES.US' }, { icono: 'star-outline', nombre: 'Exelon', ticker: 'EXC.US' },
            { icono: 'star-outline', nombre: 'Exact Sciences', ticker: 'EXAS.US' }, { icono: 'star-outline', nombre: 'Expedia', ticker: 'EXPE.US' },
            { icono: 'star-outline', nombre: 'Expeditors International ...', ticker: 'EXPD.US' }, { icono: 'star-outline', nombre: 'Express Scripts Holding', ticker: 'ESRX.US' },
            { icono: 'star-outline', nombre: 'Exxon Mobil', ticker: 'XOM.US' }, { icono: 'star-outline', nombre: 'Extra Space Storage', ticker: 'EXR.US' },
            { icono: 'star-outline', nombre: 'ETrade Financial', ticker: 'ETFC.US' }, { icono: 'star-outline', nombre: 'Eldorado Resorts', ticker: 'ERI.US' },
            { icono: 'star-outline', nombre: 'GDS Holdings', ticker: 'GDS.US' }, { icono: 'star-outline', nombre: 'Inogen', ticker: 'INGN.US' },
            // FFFFFFFFFFFFFFFFFFFFFFF
            { icono: 'star-outline', nombre: 'F5 Networks', ticker: 'FFIV.US' }, { icono: 'star-outline', nombre: 'Facebook', ticker: 'FB.US' },
            { icono: 'star-outline', nombre: 'Fastenal Company', ticker: 'FAST.US' }, { icono: 'star-outline', nombre: 'Fifth Third Bancorp', ticker: 'FITB.US' },
            { icono: 'star-outline', nombre: 'Fedex', ticker: 'FDX.US' }, { icono: 'star-outline', nombre: 'Finisar', ticker: 'FNSR.US' }, { icono: 'star-outline', nombre: 'First Solar', ticker: 'FSLR.US' },
            { icono: 'star-outline', nombre: 'Fiserv', ticker: 'FISV.US' }, { icono: 'star-outline', nombre: 'Five Below', ticker: 'FIVE.US' },
            { icono: 'star-outline', nombre: 'Flir Systems', ticker: 'FLIR.US' }, { icono: 'star-outline', nombre: 'Flowserve', ticker: 'FLS.US' },
            { icono: 'star-outline', nombre: 'Fluor', ticker: 'FLR.US' }, { icono: 'star-outline', nombre: 'FMC', ticker: 'FMC.US' },
            { icono: 'star-outline', nombre: 'Foot Locker', ticker: 'FL.US' }, { icono: 'star-outline', nombre: 'Fortive', ticker: 'FTV.US' },
            { icono: 'star-outline', nombre: 'Ford Motor Company', ticker: 'F.US' }, { icono: 'star-outline', nombre: 'FreePort-Mcmoran', ticker: 'FCX.US' },
            { icono: 'star-outline', nombre: 'Fortune Brands', ticker: 'FBHS.US' }, { icono: 'star-outline', nombre: 'Franklin Resources', ticker: 'BEN.US' },
            // GGGGGGGGGGGGGGGGGGGGGG 
            { icono: 'star-outline', nombre: 'Gap', ticker: 'GPS.US' }, { icono: 'star-outline', nombre: 'Garmin LTD.', ticker: 'GRMN.US' }, { icono: 'star-outline', nombre: 'General Dynamics', ticker: 'GD.US' },
            { icono: 'star-outline', nombre: 'Gartner', ticker: 'IT.US' }, { icono: 'star-outline', nombre: 'Genuine Parts', ticker: 'GPC.US' },
            { icono: 'star-outline', nombre: 'General Electric', ticker: 'GE.US' }, { icono: 'star-outline', nombre: 'General Mills', ticker: 'GIS.US' },
            { icono: 'star-outline', nombre: 'General Motors', ticker: 'GM.US' }, { icono: 'star-outline', nombre: 'Glaxosmithkline PLC', ticker: 'GSK.US' },
            { icono: 'star-outline', nombre: 'Gilead Sciences', ticker: 'GILD.US' }, { icono: 'star-outline', nombre: 'GGP', ticker: 'GGP.US' },
            { icono: 'star-outline', nombre: 'Goldman Sachs', ticker: 'GS.US' }, { icono: 'star-outline', nombre: 'Global Payments', ticker: 'GPN.US' },
            { icono: 'star-outline', nombre: 'Goodyear Tire Rubber', ticker: 'GT.US' }, { icono: 'star-outline', nombre: 'Grubhub Inc.', ticker: 'GRUB.US' },
            // HHHHHHHHHHHHHHHHHHHHHH
            { icono: 'star-outline', nombre: 'Halliburton', ticker: 'HAL.US' }, { icono: 'star-outline', nombre: 'Hca Healthcare', ticker: 'HCA.US' },
            { icono: 'star-outline', nombre: 'Hasbro', ticker: 'HAS.US' }, { icono: 'star-outline', nombre: 'HD Supply Holdings', ticker: 'HDS.US' },
            { icono: 'star-outline', nombre: 'Hanesbrands', ticker: 'HBI.US' }, { icono: 'star-outline', nombre: 'Harley-Davidson', ticker: 'HOG.US' },
            { icono: 'star-outline', nombre: 'Harris', ticker: 'HRS.US' }, { icono: 'star-outline', nombre: 'Hartford Financial Services Group', ticker: 'HIG.US' },
            { icono: 'star-outline', nombre: 'HCP', ticker: 'HCP.US' }, { icono: 'star-outline', nombre: 'Helmerich & Payne', ticker: 'HP.US' },
            { icono: 'star-outline', nombre: 'Henry Schein', ticker: 'HSIC.US' }, { icono: 'star-outline', nombre: 'Himax Technologies', ticker: 'HIMX.US' },
            { icono: 'star-outline', nombre: 'Hess', ticker: 'HES.US' }, { icono: 'star-outline', nombre: 'Hewlett Packard Enterprise', ticker: 'HPE.US' },
            { icono: 'star-outline', nombre: 'Hilton', ticker: 'HLT.US' }, { icono: 'star-outline', nombre: 'Hormel Foods', ticker: 'HRL.US' },
            { icono: 'star-outline', nombre: 'Home Depot', ticker: 'HD.US' }, { icono: 'star-outline', nombre: 'Host Marriott Financial Trust', ticker: 'HST.US' },
            { icono: 'star-outline', nombre: 'Hologic', ticker: 'HOLX.US' }, { icono: 'star-outline', nombre: 'Huntington Bancshares', ticker: 'HBAN.US' },
            { icono: 'star-outline', nombre: 'Honeywell International', ticker: 'HON.US' }, { icono: 'star-outline', nombre: 'HP', ticker: 'HPQ.US' },
            { icono: 'star-outline', nombre: 'Humana', ticker: 'HUM.US' }, { icono: 'star-outline', nombre: 'H&R Block', ticker: 'HRB.US' },
            { icono: 'star-outline', nombre: 'Helia Group', ticker: 'HLI.US' }, { icono: 'star-outline', nombre: 'H&R Block', ticker: 'HRB.US' },
            // IIIIIIIIIIIIIIIIIIIIII
            { icono: 'star-outline', nombre: 'Illinois Tool Works', ticker: 'ITW.US' }, { icono: 'star-outline', nombre: 'Intercontinental Exchange', ticker: 'ICE.US' },
            { icono: 'star-outline', nombre: 'International Business Machines (IBM)', ticker: 'IBM.US' }, { icono: 'star-outline', nombre: 'Iac/Interactivecorp', ticker: 'IAC.US' },
            { icono: 'star-outline', nombre: 'Idexx Laboratories', ticker: 'IDXX.US' }, { icono: 'star-outline', nombre: 'IHS Markit', ticker: 'INFO.US' },
            { icono: 'star-outline', nombre: 'Illumina', ticker: 'ILMN.US' }, { icono: 'star-outline', nombre: 'Incyte', ticker: 'INCY.US' },
            { icono: 'star-outline', nombre: 'Intel', ticker: 'INTC.US' }, { icono: 'star-outline', nombre: 'Intuit', ticker: 'INTU.US' },
            { icono: 'star-outline', nombre: 'Intuitive Surgical', ticker: 'ISRG.US' }, { icono: 'star-outline', nombre: 'IPG Photonics', ticker: 'IPGP.US' },
            { icono: 'star-outline', nombre: 'Irobot', ticker: 'IRBT.US' }, { icono: 'star-outline', nombre: 'Invesco', ticker: 'IVZ.US' },
            { icono: 'star-outline', nombre: 'International Flavors & Fragances', ticker: 'IFF.US' }, { icono: 'star-outline', nombre: 'International Paper Company', ticker: 'IP.US' },
            { icono: 'star-outline', nombre: 'Interpublic Group of Companies', ticker: 'IPG.US' },
            { icono: 'star-outline', nombre: 'Iqvia Holdings', ticker: 'IQV.US' }, { icono: 'star-outline', nombre: 'Iron Mountain', ticker: 'IRM.US' },
            // JJJJJJJJJJJJJJJJJJJJJJ
            { icono: 'star-outline', nombre: 'Johnson & Johnson', ticker: 'JNJ.US' }, { icono: 'star-outline', nombre: 'Johnson Controls International', ticker: 'JCI.US' },
            { icono: 'star-outline', nombre: 'JP Morgan', ticker: 'JPM.US' }, { icono: 'star-outline', nombre: 'J.B. Hunt Transport Services', ticker: 'JBHT.US' },
            { icono: 'star-outline', nombre: 'Jack in the box', ticker: 'JACK.US' }, { icono: 'star-outline', nombre: 'JD.COM', ticker: 'JD.US' },
            { icono: 'star-outline', nombre: 'Jetblue Airways', ticker: 'JBLU.US' }, { icono: 'star-outline', nombre: 'Juno Therapeurtics', ticker: 'JUNO.US' },
            { icono: 'star-outline', nombre: 'Juniper Networks', ticker: 'JNPR.US' }, { icono: 'star-outline', nombre: 'John Bean', ticker: 'JBT.US' },
            // KKKKKKKKKKKKKKKKKKKKK
            { icono: 'star-outline', nombre: 'Kellogg', ticker: 'K.US' }, { icono: 'star-outline', nombre: 'Keycorp', ticker: 'KEY.US' },
            { icono: 'star-outline', nombre: 'Kimberly-Clark', ticker: 'KMB.US' }, { icono: 'star-outline', nombre: 'Kinder Morgan', ticker: 'KMI.US' },
            { icono: 'star-outline', nombre: 'Khol', ticker: 'KSS.US' }, { icono: 'star-outline', nombre: 'Kroger', ticker: 'KR.US' },
            { icono: 'star-outline', nombre: 'Kla-Tencor', ticker: 'KLAC.US' }, { icono: 'star-outline', nombre: 'Kansas City Southern', ticker: 'KSU.US' },
            { icono: 'star-outline', nombre: 'Kimco Realty', ticker: 'KIM.US' }, { icono: 'star-outline', nombre: 'Kraft Heinz', ticker: 'KHC.US' },
            // LLLLLLLLLLLLLLLLLLLLLL
            { icono: 'star-outline', nombre: 'L3 Communications', ticker: 'LLL.US' }, { icono: 'star-outline', nombre: 'Laboratory Corporation of America', ticker: 'LH.US' },
            { icono: 'star-outline', nombre: 'L Brands', ticker: 'LB.US' }, { icono: 'star-outline', nombre: 'Las Vegas Sands', ticker: 'LVS.US' },
            { icono: 'star-outline', nombre: 'Lam Research', ticker: 'LRCX.US' }, { icono: 'star-outline', nombre: 'Lendingtree', ticker: 'TREE.US' },
            { icono: 'star-outline', nombre: 'Leggett & Platt', ticker: 'LEG.US' }, { icono: 'star-outline', nombre: 'Leucadia National', ticker: 'LUK.US' },
            { icono: 'star-outline', nombre: 'Lennar Corp', ticker: 'LEN.US' }, { icono: 'star-outline', nombre: 'Liberty Broadband', ticker: 'LBRDK.US' },
            { icono: 'star-outline', nombre: 'Liberty Global PLC', ticker: 'LBTYK.US' }, { icono: 'star-outline', nombre: 'Liberty Interactive', ticker: 'QVCA.US' },
            { icono: 'star-outline', nombre: 'Lincoln National', ticker: 'LNC.US' }, { icono: 'star-outline', nombre: 'Loews', ticker: 'L.US' },
            { icono: 'star-outline', nombre: 'Lockheed Martin', ticker: 'LMT.US' }, { icono: 'star-outline', nombre: 'Liberty Media', ticker: 'FWONK.US' },
            { icono: 'star-outline', nombre: 'Lowe', ticker: 'LOW.US' }, { icono: 'star-outline', nombre: 'Lyondellbasell Industries', ticker: 'LYB.US' },
            { icono: 'star-outline', nombre: 'LKQ', ticker: 'LKQ.US' }, { icono: 'star-outline', nombre: 'Lululemon Athletica', ticker: 'LULU.US' },
            { icono: 'star-outline', nombre: 'Lumentum Holdings', ticker: 'LITE.US' }, { icono: 'star-outline', nombre: 'Trupanion', ticker: 'TRUP.US' },
            // MMMMMMMMMMMMMMMMMMMMMM
            { icono: 'star-outline', nombre: 'Direxion Daily', ticker: 'MSFU.US' }, { icono: 'star-outline', nombre: 'Meta Platforms', ticker: 'META.US' },
            { icono: 'star-outline', nombre: 'Macys', ticker: 'M.US' }, { icono: 'star-outline', nombre: 'Marathon Oil', ticker: 'MRO.US' },
            { icono: 'star-outline', nombre: 'Marathon Petroleum', ticker: 'MPC.US' }, { icono: 'star-outline', nombre: 'Marsh & Mclennan', ticker: 'MMC.US' },
            { icono: 'star-outline', nombre: 'Marriott', ticker: 'MAR.US' }, { icono: 'star-outline', nombre: 'Marvell Technology Group', ticker: 'MRVL.US' },
            { icono: 'star-outline', nombre: 'Mastercard', ticker: 'MA.US' }, { icono: 'star-outline', nombre: 'McDonalds', ticker: 'MCD.US' },
            { icono: 'star-outline', nombre: 'Mattel', ticker: 'MAT.US' }, { icono: 'star-outline', nombre: 'Maxim Integrated Products', ticker: 'MXIM.US' },
            { icono: 'star-outline', nombre: 'Macerich', ticker: 'MAC.US' }, { icono: 'star-outline', nombre: 'Martin Marietta', ticker: 'MLM.US' }, { icono: 'star-outline', nombre: 'Masco', ticker: 'MAS.US' },
            { icono: 'star-outline', nombre: 'McKesson', ticker: 'MCK.US' }, { icono: 'star-outline', nombre: 'Medtronic', ticker: 'MDT.US' },
            { icono: 'star-outline', nombre: 'Merck & Company', ticker: 'MRK.US' }, { icono: 'star-outline', nombre: 'Metlife', ticker: 'MET.US' },
            { icono: 'star-outline', nombre: 'Melco Resorts', ticker: 'MLCO.US' }, { icono: 'star-outline', nombre: 'Mercadolibre', ticker: 'MELI.US' },
            { icono: 'star-outline', nombre: 'Microchip Technology', ticker: 'MCHP.US' }, { icono: 'star-outline', nombre: 'Micron Technology', ticker: 'MU.US' },
            { icono: 'star-outline', nombre: 'Microsoft', ticker: 'MSFT.US' }, { icono: 'star-outline', nombre: 'Michael Kors', ticker: 'KORS.US' },
            { icono: 'star-outline', nombre: 'Momo', ticker: 'MOMO.US' }, { icono: 'star-outline', nombre: 'Mohawk Industries', ticker: 'MHK.US' },
            { icono: 'star-outline', nombre: 'MGM Resorts', ticker: 'MGM.US' }, { icono: 'star-outline', nombre: 'Monsanto', ticker: 'MON.US' },
            { icono: 'star-outline', nombre: 'Morgan Stanley', ticker: 'MS.US' }, { icono: 'star-outline', nombre: 'Mondelez', ticker: 'MDLZ.US' },
            { icono: 'star-outline', nombre: 'Monster Beverage', ticker: 'MNST.US' }, { icono: 'star-outline', nombre: 'Mylan N.V.', ticker: 'MYL.US' },
            { icono: 'star-outline', nombre: 'Molson Coors', ticker: 'TAP.US' }, { icono: 'star-outline', nombre: 'Moodys', ticker: 'MCO.US' },
            { icono: 'star-outline', nombre: 'Mosaic', ticker: 'MOS.US' }, { icono: 'star-outline', nombre: 'Motorola', ticker: 'MSI.US' }, { icono: 'star-outline', nombre: 'Moderna INC.', ticker: 'MRNA.US' },
            // NNNNNNNNNNNNNNNNNNNNNN
            { icono: 'star-outline', nombre: 'Nasdaq', ticker: 'NDAQ.US' }, { icono: 'star-outline', nombre: 'Nektar Therapeutics', ticker: 'NKTR.US' },
            { icono: 'star-outline', nombre: 'National-Oilwell', ticker: 'NOV.US' }, { icono: 'star-outline', nombre: 'Navient', ticker: 'NAVI.US' },
            { icono: 'star-outline', nombre: 'Netapp', ticker: 'NTAP.US' }, { icono: 'star-outline', nombre: 'Netease', ticker: 'NTES.US' },
            { icono: 'star-outline', nombre: 'Netflix', ticker: 'NFLX.US' }, { icono: 'star-outline', nombre: 'Newell Brands', ticker: 'NWL.US' },
            { icono: 'star-outline', nombre: 'Newmont Mining', ticker: 'NEM.US' }, { icono: 'star-outline', nombre: 'Nextera Energy', ticker: 'NEE.US' },
            { icono: 'star-outline', nombre: 'NiSource', ticker: 'NI.US' }, { icono: 'star-outline', nombre: 'Noble Energy', ticker: 'NBL.US' },
            { icono: 'star-outline', nombre: 'Nike', ticker: 'NKE.US' }, { icono: 'star-outline', nombre: 'Northern Trust', ticker: 'NTRS.US' },
            { icono: 'star-outline', nombre: 'Norfolk Southern', ticker: 'NSC.US' }, { icono: 'star-outline', nombre: 'Northrop Grumman', ticker: 'NOC.US' },
            { icono: 'star-outline', nombre: 'Nordstrom', ticker: 'JWN.US' }, { icono: 'star-outline', nombre: 'NRG Energy', ticker: 'NRG.US' },
            { icono: 'star-outline', nombre: 'Nucor', ticker: 'NUE.US' }, { icono: 'star-outline', nombre: 'Nutanix', ticker: 'NTNX.US' },
            { icono: 'star-outline', nombre: 'Nvidia', ticker: 'NVDA.US' }, { icono: 'star-outline', nombre: 'NXP Semiconductors', ticker: 'NXPI.US' },
            { icono: 'star-outline', nombre: 'Novanta', ticker: 'NOVT.US' }, { icono: 'star-outline', nombre: 'Transunion', ticker: 'TRU.US' },
            // OOOOOOOOOOOOOOOOOOOOOO
            { icono: 'star-outline', nombre: 'O Reilly Automotiv', ticker: 'ORLY.US' }, { icono: 'star-outline', nombre: 'Old Dominion Freight Line', ticker: 'ODFL.US' }, { icono: 'star-outline', nombre: 'On Semiconductor', ticker: 'ON.US' }, { icono: 'star-outline', nombre: 'Overstock.com', ticker: 'OSTK.US' },
            { icono: 'star-outline', nombre: 'Occidental Petroleum', ticker: 'OXY.US' }, { icono: 'star-outline', nombre: 'Omnicom Group', ticker: 'OMC.US' }, { icono: 'star-outline', nombre: 'Oracle', ticker: 'ORCL.US' }, { icono: 'star-outline', nombre: 'Oneok', ticker: 'OKE.US' },
            // PPPPPPPPPPPPPPPPPPPPPP
            { icono: 'star-outline', nombre: 'Paccar', ticker: 'PCAR.US' }, { icono: 'star-outline', nombre: 'Patterson-uti Energy', ticker: 'PTEN.US' }, { icono: 'star-outline', nombre: 'Paychex', ticker: 'PAYX.US' }, { icono: 'star-outline', nombre: 'Paypal Holdings', ticker: 'PYPL.US' },
            { icono: 'star-outline', nombre: 'Pacific Gas & Electric', ticker: 'PCG.US' }, { icono: 'star-outline', nombre: 'Pfizer', ticker: 'PFE.US' }, { icono: 'star-outline', nombre: 'Philip Morris', ticker: 'PM.US' }, { icono: 'star-outline', nombre: 'Phillips 66', ticker: 'PSX.US' },
            { icono: 'star-outline', nombre: 'Pepsico', ticker: 'PEP.US' }, { icono: 'star-outline', nombre: 'Pioneer Natural resources', ticker: 'PXD.US' }, { icono: 'star-outline', nombre: 'PNC Financial Services', ticker: 'PNC.US' },
            { icono: 'star-outline', nombre: 'Pentair', ticker: 'PNR.US' }, { icono: 'star-outline', nombre: 'Perkinelmer', ticker: 'PKI.US' }, { icono: 'star-outline', nombre: 'Perrigo', ticker: 'PRGO.US' }, { icono: 'star-outline', nombre: 'Pinacle West Capital', ticker: 'PNW.US' },
            { icono: 'star-outline', nombre: 'PPL', ticker: 'PPL.US' }, { icono: 'star-outline', nombre: 'Praxair', ticker: 'PX.US' }, { icono: 'star-outline', nombre: 'Procter & Gamble', ticker: 'PG.US' }, { icono: 'star-outline', nombre: 'Prudential Financial', ticker: 'PRU.US' },
            { icono: 'star-outline', nombre: 'Public Service Enterprise Group', ticker: 'PEG.US' }, { icono: 'star-outline', nombre: 'Public Storage', ticker: 'PSA.US' }, { icono: 'star-outline', nombre: 'Puma Biotechnology', ticker: 'PBYI.US' },
            { icono: 'star-outline', nombre: 'Parsons Corp.', ticker: 'PSN.US' }, { icono: 'star-outline', nombre: 'Priceline', ticker: 'PCLN.US' }, { icono: 'star-outline', nombre: 'Pultegroup', ticker: 'PHM.US' },
            // QQQQQQQQQQQQQQQQQQQQQQ
            { icono: 'star-outline', nombre: 'Qorvo', ticker: 'QRVO.US' }, { icono: 'star-outline', nombre: 'Qualcomm', ticker: 'QCOM.US' },
            { icono: 'star-outline', nombre: 'Quanta Services', ticker: 'PWR.US' }, { icono: 'star-outline', nombre: 'Quests Diagnostics', ticker: 'DGX.US' },
            // RRRRRRRRRRRRRRRRRRRRRR
            { icono: 'star-outline', nombre: 'Raytheon', ticker: 'RTN.US' }, { icono: 'star-outline', nombre: 'Ralph Lauren', ticker: 'RL.US' },
            { icono: 'star-outline', nombre: 'Range Resources', ticker: 'RRC.US' }, { icono: 'star-outline', nombre: 'Raymond James Financial', ticker: 'RJF.US' },
            { icono: 'star-outline', nombre: 'Realty Income', ticker: 'O.US' }, { icono: 'star-outline', nombre: 'Republic Services', ticker: 'RSG.US' },
            { icono: 'star-outline', nombre: 'Regeneron Pharmaceuticals', ticker: 'REGN.US' }, { icono: 'star-outline', nombre: 'Riot Blockchain', ticker: 'RIOT.US' },
            { icono: 'star-outline', nombre: 'Roku', ticker: 'ROKU.US' }, { icono: 'star-outline', nombre: 'Ross Stores', ticker: 'ROST.US' },
            { icono: 'star-outline', nombre: 'Red Hat', ticker: 'RHT.US' }, { icono: 'star-outline', nombre: 'Regions Financial', ticker: 'RF.US' },
            { icono: 'star-outline', nombre: 'Resmed', ticker: 'RMD.US' }, { icono: 'star-outline', nombre: 'Robert Half International', ticker: 'RHI.US' },
            { icono: 'star-outline', nombre: 'Royal Caribbean Cruises', ticker: 'RCL.US' }, { icono: 'star-outline', nombre: 'Royal Dutch Shell', ticker: 'RDS.A.US' },
            { icono: 'star-outline', nombre: 'Rockwell Automation', ticker: 'ROK.US' }, { icono: 'star-outline', nombre: 'Rockwell Collins', ticker: 'COL.US' },
            { icono: 'star-outline', nombre: 'Rxsight', ticker: 'RXST.US' }, { icono: 'star-outline', nombre: 'Roper Industries', ticker: 'ROP.US' }, { icono: 'star-outline', nombre: 'Solaredge Technologies', ticker: 'SEDG.US' },
            // SSSSSSSSSSSSSSSSSSSSS
            { icono: 'star-outline', nombre: 'Global Semiconductor', ticker: 'SEMI.US' },
            { icono: 'star-outline', nombre: 'S&P Global', ticker: 'SPGI.US' }, { icono: 'star-outline', nombre: 'Salesforce.com', ticker: 'CRM.US' },
            { icono: 'star-outline', nombre: 'Sage Therapeutics', ticker: 'SAGE.US' }, { icono: 'star-outline', nombre: 'Sanderson Farms', ticker: 'SAFM.US' },
            { icono: 'star-outline', nombre: 'Sarepta Therapeutics', ticker: 'SRPT.US' }, { icono: 'star-outline', nombre: 'SBA Communications', ticker: 'SBAC.US' },
            { icono: 'star-outline', nombre: 'Scripps Networks Interactive', ticker: 'SNI.US' }, { icono: 'star-outline', nombre: 'Seagate Technology', ticker: 'STX.US' },
            { icono: 'star-outline', nombre: 'Schlumberger', ticker: 'SLB.US' }, { icono: 'star-outline', nombre: 'Sempra Energy', ticker: 'SRE.US' },
            { icono: 'star-outline', nombre: 'Servicenow', ticker: 'NOW.US' }, { icono: 'star-outline', nombre: 'Sherwin-Williams', ticker: 'SHW.US' },
            { icono: 'star-outline', nombre: 'Shire PLC', ticker: 'SHPG.US' }, { icono: 'star-outline', nombre: 'Sina', ticker: 'SINA.US' },
            { icono: 'star-outline', nombre: 'Sirius XM Holdings', ticker: 'SIRI.US' }, { icono: 'star-outline', nombre: 'Skyworks Solutions', ticker: 'SWKS.US' },
            { icono: 'star-outline', nombre: 'Splunk', ticker: 'SPLK.US' }, { icono: 'star-outline', nombre: 'Starbucks', ticker: 'SBUX.US' },
            { icono: 'star-outline', nombre: 'Simon Property Group', ticker: 'SPG.US' }, { icono: 'star-outline', nombre: 'Snap', ticker: 'SNAP.US' },
            { icono: 'star-outline', nombre: 'Southern Company', ticker: 'SO.US' }, { icono: 'star-outline', nombre: 'Southwest Airlines', ticker: 'LUV.US' },
            { icono: 'star-outline', nombre: 'Square', ticker: 'SQ.US' }, { icono: 'star-outline', nombre: 'State Street', ticker: 'STT.US' },
            { icono: 'star-outline', nombre: 'Stryker', ticker: 'SYK.US' }, { icono: 'star-outline', nombre: 'Suntrust Banks', ticker: 'STI.US' },
            { icono: 'star-outline', nombre: 'Synchrony Financial', ticker: 'SYF.US' }, { icono: 'star-outline', nombre: 'Sysco', ticker: 'SYY.US' },
            { icono: 'star-outline', nombre: 'Steel Dynamics', ticker: 'STLD.US' }, { icono: 'star-outline', nombre: 'SVB Financial Group', ticker: 'SIVB.US' },
            { icono: 'star-outline', nombre: 'Symantec', ticker: 'SYMC.US' }, { icono: 'star-outline', nombre: 'Synopsys', ticker: 'SNPS.US' },
            { icono: 'star-outline', nombre: 'Scana', ticker: 'SCG.US' }, { icono: 'star-outline', nombre: 'SPX', ticker: 'SPXC.US' }, { icono: 'star-outline', nombre: 'Shopify', ticker: 'SHOP.US' },
            { icono: 'star-outline', nombre: 'Shockwave Medical', ticker: 'SWAV.US' }, { icono: 'star-outline', nombre: 'Sigma Lithium', ticker: 'SGML.US' }, { icono: 'star-outline', nombre: 'SEA LTD.', ticker: 'SE.US' },
            // TTTTTT
            { icono: 'star-outline', nombre: 'Temple & Webster', ticker: 'TPW.US' },
            { icono: 'star-outline', nombre: 'Tapestry', ticker: 'TPR.US' }, { icono: 'star-outline', nombre: 'Taiwan Semiconductor', ticker: 'TSM.US' },
            { icono: 'star-outline', nombre: 'Target', ticker: 'TGT.US' }, { icono: 'star-outline', nombre: 'Te Connectivity', ticker: 'TEL.US' },
            { icono: 'star-outline', nombre: 'Take-Two Interactive Software', ticker: 'TTWO.US' }, { icono: 'star-outline', nombre: 'TD Ameritrade Holding', ticker: 'AMTD.US' },
            { icono: 'star-outline', nombre: 'Technipfmc', ticker: 'FTI.US' }, { icono: 'star-outline', nombre: 'Texas Instruments', ticker: 'TXN.US' },
            { icono: 'star-outline', nombre: 'Textron', ticker: 'TXT.US' }, { icono: 'star-outline', nombre: 'Teva Pharmaceutical', ticker: 'TEVA.US' },
            { icono: 'star-outline', nombre: 'Thermo Fisher Scientific', ticker: 'TMO.US' }, { icono: 'star-outline', nombre: 'Time Warner', ticker: 'TWX.US' },
            { icono: 'star-outline', nombre: 'TJX Companies', ticker: 'TJX.US' }, { icono: 'star-outline', nombre: 'Twitter', ticker: 'TWTR.US' },
            { icono: 'star-outline', nombre: 'Tyson Foods', ticker: 'TSN.US' }, { icono: 'star-outline', nombre: 'T. Rowe Price Group', ticker: 'TROW.US' },
            { icono: 'star-outline', nombre: 'T-Mobile US', ticker: 'TMUS.US' }, { icono: 'star-outline', nombre: 'The goodyear Tire & Rubber', ticker: 'GT.US' },
            { icono: 'star-outline', nombre: 'Tesla', ticker: 'TSLA.US' }, { icono: 'star-outline', nombre: 'The Kraft Heinz', ticker: 'KHC.US' },
            { icono: 'star-outline', nombre: 'The Middleby', ticker: 'MIDD.US' }, { icono: 'star-outline', nombre: 'The Priceline Group', ticker: 'PCLN.US' },
            { icono: 'star-outline', nombre: 'Tractor Supply', ticker: 'TSCO.US' }, { icono: 'star-outline', nombre: 'Tripadvisor', ticker: 'TRIP.US' },
            { icono: 'star-outline', nombre: 'Twenty-First Century Fox', ticker: 'FOX.US' },
            { icono: 'star-outline', nombre: 'The Aes Corp', ticker: 'AES.US' }, { icono: 'star-outline', nombre: 'Tiffany & Co.', ticker: 'TIF.US' },
            { icono: 'star-outline', nombre: 'Torchmark', ticker: 'TMK.US' }, { icono: 'star-outline', nombre: 'Total System Services', ticker: 'TSS.US' },
            { icono: 'star-outline', nombre: '2U Inc.', ticker: 'TWOU.US' }, { icono: 'star-outline', nombre: 'Tal Education Group', ticker: 'TAL.US' },
            { icono: 'star-outline', nombre: 'Topbuild Corp.', ticker: 'BLD.US' }, { icono: 'star-outline', nombre: 'Centene', ticker: 'CNC.US' },
            { icono: 'star-outline', nombre: 'Atlassian Corp.', ticker: 'TEAM.US' }, { icono: 'star-outline', nombre: 'Total System Services', ticker: 'TSS.US' },
            { icono: 'star-outline', nombre: 'Vista Energy', ticker: 'VIST.US' },
            // UUUUUU
            { icono: 'star-outline', nombre: 'U.S. Bancorp', ticker: 'USB.US' }, { icono: 'star-outline', nombre: 'Union Pacific', ticker: 'UNP.US' },
            { icono: 'star-outline', nombre: 'United Continental Holdings', ticker: 'UAL.US' }, { icono: 'star-outline', nombre: 'United Parcel Service', ticker: 'UPS.US' },
            { icono: 'star-outline', nombre: 'United Rentals', ticker: 'URI.US' }, { icono: 'star-outline', nombre: 'United States Steel', ticker: 'X.US' },
            { icono: 'star-outline', nombre: 'United Technologies', ticker: 'UTX.US' }, { icono: 'star-outline', nombre: 'Unitedhealth Group', ticker: 'UNH.US' },
            { icono: 'star-outline', nombre: 'Ulta Beauty', ticker: 'ULTA.US' }, { icono: 'star-outline', nombre: 'Universal Display', ticker: 'OLED.US' },
            { icono: 'star-outline', nombre: 'Urban Outfitters', ticker: 'URBN.US' }, { icono: 'star-outline', nombre: 'Under Armour', ticker: 'UAA.US' },
            // VVVVVV
            { icono: 'star-outline', nombre: 'V.F.', ticker: 'VFC.US' }, { icono: 'star-outline', nombre: 'Vale S.A.', ticker: 'VALE.US' },
            { icono: 'star-outline', nombre: 'Valeant Pharmaceuticals', ticker: 'VRX.US' }, { icono: 'star-outline', nombre: 'Valero Energy', ticker: 'VLO.US' },
            { icono: 'star-outline', nombre: 'Vantiv', ticker: 'VNTV.US' }, { icono: 'star-outline', nombre: 'Verizon Communications', ticker: 'VZ.US' },
            { icono: 'star-outline', nombre: 'Visa', ticker: 'V.US' }, { icono: 'star-outline', nombre: 'Vmware', ticker: 'VMW.US' }, { icono: 'star-outline', nombre: 'Vedanta', ticker: 'VEDL.US' },
            { icono: 'star-outline', nombre: 'Vulcan Materials', ticker: 'VMC.US' }, { icono: 'star-outline', nombre: 'Vertex Pharmaceuticals', ticker: 'VRTX.US' },
            { icono: 'star-outline', nombre: 'Verisign', ticker: 'VRSN.US' }, { icono: 'star-outline', nombre: 'Verisk Analytics', ticker: 'VRSK.US' },
            { icono: 'star-outline', nombre: 'Vertiv HLD', ticker: 'VRT.US' }, { icono: 'star-outline', nombre: 'Viacom', ticker: 'VIAB.US' }, { icono: 'star-outline', nombre: 'Vodafone', ticker: 'VOD.US' },
            // WWWWWW
            { icono: 'star-outline', nombre: 'Wal-Mart Stores', ticker: 'WMT.US' }, { icono: 'star-outline', nombre: 'Walt Disney', ticker: 'DIS.US' },
            { icono: 'star-outline', nombre: 'Wells Fargo', ticker: 'WFC.US' }, { icono: 'star-outline', nombre: 'Walgreens Boots Alliance', ticker: 'WBA.US' },
            { icono: 'star-outline', nombre: 'Wendys', ticker: 'WEN.US' }, { icono: 'star-outline', nombre: 'Western Digital', ticker: 'WDC.US' },
            { icono: 'star-outline', nombre: 'Willis Towers Watson Public', ticker: 'WLTW.US' }, { icono: 'star-outline', nombre: 'Workday', ticker: 'WDAY.US' },
            { icono: 'star-outline', nombre: 'Wynn Resorts', ticker: 'WYNN.US' }, { icono: 'star-outline', nombre: 'Weibo', ticker: 'WB.US' },
            // XXXXXX
            { icono: 'star-outline', nombre: 'Xcel Energy', ticker: 'XEL.US' }, { icono: 'star-outline', nombre: 'Xilinx', ticker: 'XLNX.US' },
            { icono: 'star-outline', nombre: 'Xunlei', ticker: 'XNET.US' }, { icono: 'star-outline', nombre: 'Xerox', ticker: 'XRX.US' },
            { icono: 'star-outline', nombre: 'XL Company Switzerland', ticker: 'XL.US' }, { icono: 'star-outline', nombre: 'Xylem', ticker: 'XYL.US' },
            // ZZZZZZ
            { icono: 'star-outline', nombre: 'Zimmer Biomet Holdings', ticker: 'ZBH.US' }, { icono: 'star-outline', nombre: 'Zions Bancorp', ticker: 'ZION.US' },
            { icono: 'star-outline', nombre: 'Yandex', ticker: 'YNDX.US' }, { icono: 'star-outline', nombre: 'YY Inc.', ticker: 'YY.US' },
            { icono: 'star-outline', nombre: 'Yum! brands', ticker: 'YUM.US' }, { icono: 'star-outline', nombre: 'Zoetis', ticker: 'ZTS.US' },
        ];
        this.mercadoCrypto = [
            { icono: 'star-outline', nombre: 'Cardano', ticker: 'ADA-USD.CC' },
            { icono: 'star-outline', nombre: 'AdEx', ticker: 'ADX-USD.CC' },
            { icono: 'star-outline', nombre: 'Aeternity', ticker: 'AE-USD.CC' },
            { icono: 'star-outline', nombre: 'Aragon', ticker: 'ANT-USD.CC' },
            { icono: 'star-outline', nombre: 'Ardor', ticker: 'ARDR-USD.CC' },
            { icono: 'star-outline', nombre: 'Avalanche', ticker: 'AVAX-USD.CC' },
            { icono: 'star-outline', nombre: 'ARK', ticker: 'ARK-USD.CC' },
            { icono: 'star-outline', nombre: 'Aave', ticker: 'AAVE-USD.CC' },
            { icono: 'star-outline', nombre: 'ATB coin', ticker: 'ATB-USD.CC' },
            { icono: 'star-outline', nombre: 'Autumncoin', ticker: 'ATM-USD.CC' },
            { icono: 'star-outline', nombre: 'Basic Attention Token', ticker: 'BAT-USD.CC' },
            { icono: 'star-outline', nombre: 'BitConnect Coin', ticker: 'BCCOIN-USD.CC' },
            { icono: 'star-outline', nombre: 'Bitcoin Cash / BCC', ticker: 'BCH-USD.CC' },
            { icono: 'star-outline', nombre: 'ByteCoin', ticker: 'BCN-USD.CC' },
            { icono: 'star-outline', nombre: 'BlockNet', ticker: 'BLOCK-USD.CC' },
            { icono: 'star-outline', nombre: 'Binance Coin', ticker: 'BNB-USD.CC' },
            { icono: 'star-outline', nombre: 'Bancor Network Token', ticker: 'BNT-USD.CC' },
            { icono: 'star-outline', nombre: 'Bitquence', ticker: 'BQX-USD.CC' },
            { icono: 'star-outline', nombre: 'BitcoinDark', ticker: 'BTCD-USD.CC' },
            { icono: 'star-outline', nombre: 'Bitcoin', ticker: 'BTC-USD.CC' },
            { icono: 'star-outline', nombre: 'Bitcoin Gold', ticker: 'BTG-USD.CC' },
            { icono: 'star-outline', nombre: 'BTM', ticker: 'BTM-USD.CC' },
            { icono: 'star-outline', nombre: 'Bitshares', ticker: 'BTS-USD.CC' },
            { icono: 'star-outline', nombre: 'Civic', ticker: 'CVC-USD.CC' },
            { icono: 'star-outline', nombre: 'DigitalCash', ticker: 'DASH-USD.CC' },
            { icono: 'star-outline', nombre: 'Dentacoin', ticker: 'DCN-USD.CC' },
            { icono: 'star-outline', nombre: 'Decred', ticker: 'DCR-USD.CC' },
            { icono: 'star-outline', nombre: 'DigiByte', ticker: 'DGB-USD.CC' },
            { icono: 'star-outline', nombre: 'Digix DAO', ticker: 'DGD-USD.CC' },
            { icono: 'star-outline', nombre: 'district0x', ticker: 'DNT-USD.CC' },
            { icono: 'star-outline', nombre: 'Dogecoin', ticker: 'DOGE-USD.CC' },
            { icono: 'star-outline', nombre: 'Edgeless', ticker: 'EDG-USD.CC' },
            { icono: 'star-outline', nombre: 'EOS', ticker: 'EOS-USD.CC' },
            { icono: 'star-outline', nombre: 'Ethereum Classic', ticker: 'ETC-USD.CC' },
            { icono: 'star-outline', nombre: 'Ethereum', ticker: 'ETH-USD.CC' },
            { icono: 'star-outline', nombre: 'Metaverse', ticker: 'ETP-USD.CC' },
            { icono: 'star-outline', nombre: 'FairCoin', ticker: 'FAIR-USD.CC' },
            { icono: 'star-outline', nombre: 'Factoids', ticker: 'FCT-USD.CC' },
            { icono: 'star-outline', nombre: 'FirstCoin', ticker: 'FRST-USD.CC' },
            { icono: 'star-outline', nombre: 'FunFair', ticker: 'FUN-USD.CC' },
            { icono: 'star-outline', nombre: 'Gamecredits', ticker: 'GAME-USD.CC' },
            { icono: 'star-outline', nombre: 'Gas', ticker: 'GAS-USD.CC' },
            { icono: 'star-outline', nombre: 'Byteball', ticker: 'GBYTE-USD.CC' },
            { icono: 'star-outline', nombre: 'Gnosis', ticker: 'GNO-USD.CC' },
            { icono: 'star-outline', nombre: 'Golem Network Token', ticker: 'GNT-USD.CC' },
            { icono: 'star-outline', nombre: 'Hshare', ticker: 'HSR-USD.CC' },
            { icono: 'star-outline', nombre: 'Iconomi', ticker: 'ICN-USD.CC' },
            { icono: 'star-outline', nombre: 'ICON Project', ticker: 'ICX-USD.CC' },
            { icono: 'star-outline', nombre: 'IOCoin', ticker: 'IOC-USD.CC' },
            { icono: 'star-outline', nombre: 'IOTA', ticker: 'IOT-USD.CC' },
            { icono: 'star-outline', nombre: 'Kin', ticker: 'KIN-USD.CC' },
            { icono: 'star-outline', nombre: 'Komodo', ticker: 'KMD-USD.CC' },
            { icono: 'star-outline', nombre: 'Kyber Network', ticker: 'KNC-USD.CC' },
            { icono: 'star-outline', nombre: 'ChainLink', ticker: 'LINK-USD.CC' },
            { icono: 'star-outline', nombre: 'Lykke', ticker: 'LKK-USD.CC' },
            { icono: 'star-outline', nombre: 'Loopring', ticker: 'LRC-USD.CC' },
            { icono: 'star-outline', nombre: 'Lisk', ticker: 'LSK-USD.CC' },
            { icono: 'star-outline', nombre: 'Litecoin', ticker: 'LTC-USD.CC' },
            { icono: 'star-outline', nombre: 'MaidSafe Coin', ticker: 'MAID-USD.CC' },
            { icono: 'star-outline', nombre: 'MCAP', ticker: 'MCAP-USD.CC' },
            { icono: 'star-outline', nombre: 'Monaco', ticker: 'MCO-USD.CC' },
            { icono: 'star-outline', nombre: 'MultiversX', ticker: 'EGLD-USD.CC' },
            { icono: 'star-outline', nombre: 'MobileGo', ticker: 'MGO-USD.CC' },
            { icono: 'star-outline', nombre: 'Melon', ticker: 'MLN-USD.CC' },
            { icono: 'star-outline', nombre: 'MonaCoin', ticker: 'MONA-USD.CC' },
            { icono: 'star-outline', nombre: 'Metal', ticker: 'MTL-USD.CC' },
            { icono: 'star-outline', nombre: 'NavCoin', ticker: 'NAV-USD.CC' },
            { icono: 'star-outline', nombre: 'Neblio', ticker: 'NEBL-USD.CC' },
            { icono: 'star-outline', nombre: 'NEO', ticker: 'NEO-USD.CC' },
            { icono: 'star-outline', nombre: 'NoLimitCoin', ticker: 'NLC2-USD.CC' },
            { icono: 'star-outline', nombre: 'Nexus', ticker: 'NXS-USD.CC' },
            { icono: 'star-outline', nombre: 'Nxt', ticker: 'NXT-USD.CC' },
            { icono: 'star-outline', nombre: 'OmiseGo', ticker: 'OMG-USD.CC' },
            { icono: 'star-outline', nombre: 'Particl', ticker: 'PART-USD.CC' },
            { icono: 'star-outline', nombre: 'TenX', ticker: 'PAY-USD.CC' },
            { icono: 'star-outline', nombre: 'Private Instant Verified Transaction', ticker: 'PIVX-USD.CC' },
            { icono: 'star-outline', nombre: 'Populous', ticker: 'PPT-USD.CC' },
            { icono: 'star-outline', nombre: 'Quoine Liquid', ticker: 'QASH-USD.CC' },
            { icono: 'star-outline', nombre: 'Quantum Resistant Ledger', ticker: 'QRL-USD.CC' },
            { icono: 'star-outline', nombre: 'Quant', ticker: 'QNT-USD.CC' },
            { icono: 'star-outline', nombre: 'QTUM', ticker: 'QTUM-USD.CC' },
            { icono: 'star-outline', nombre: 'Augur', ticker: 'REP-USD.CC' },
            { icono: 'star-outline', nombre: 'iExec', ticker: 'RLC-USD.CC' },
            { icono: 'star-outline', nombre: 'Salt Lending', ticker: 'SALT-USD.CC' },
            { icono: 'star-outline', nombre: 'Siacoin', ticker: 'SC-USD.CC' },
            { icono: 'star-outline', nombre: 'SmartCash', ticker: 'SMART-USD.CC' },
            { icono: 'star-outline', nombre: 'Rocket Pool', ticker: 'RETH-USD.CC' },
            { icono: 'star-outline', nombre: 'SingularDTV', ticker: 'SNGLS-USD.CC' },
            { icono: 'star-outline', nombre: 'SONM', ticker: 'SNM-USD.CC' },
            { icono: 'star-outline', nombre: 'Status Network Token', ticker: 'SNT-USD.CC' },
            { icono: 'star-outline', nombre: 'Steem', ticker: 'STEEM-USD.CC' },
            { icono: 'star-outline', nombre: 'Storj', ticker: 'STORJ-USD.CC' },
            { icono: 'star-outline', nombre: 'Stratis', ticker: 'STRAT-USD.CC' },
            { icono: 'star-outline', nombre: 'Substratum Network', ticker: 'SUB-USD.CC' },
            { icono: 'star-outline', nombre: 'SysCoin', ticker: 'SYS-USD.CC' },
            { icono: 'star-outline', nombre: 'Token as a Service', ticker: 'TAAS-USD.CC' },
            { icono: 'star-outline', nombre: 'Tronix', ticker: 'TRX-USD.CC' },
            { icono: 'star-outline', nombre: 'Ubiq', ticker: 'UBQ-USD.CC' },
            { icono: 'star-outline', nombre: 'Tether', ticker: 'USDT-USD.CC' },
            { icono: 'star-outline', nombre: 'Vechain', ticker: 'VEN-USD.CC' },
            { icono: 'star-outline', nombre: 'Veritaseum', ticker: 'VERI-USD.CC' },
            { icono: 'star-outline', nombre: 'VertCoin', ticker: 'VTC-USD.CC' },
            { icono: 'star-outline', nombre: 'Waves', ticker: 'WAVES-USD.CC' },
            { icono: 'star-outline', nombre: 'Wings DAO', ticker: 'WINGS-USD.CC' },
            { icono: 'star-outline', nombre: 'Waltonchain', ticker: 'WTC-USD.CC' },
            { icono: 'star-outline', nombre: 'CounterParty', ticker: 'XCP-USD.CC' },
            { icono: 'star-outline', nombre: 'NEM', ticker: 'XEM-USD.CC' },
            { icono: 'star-outline', nombre: 'Solana', ticker: 'SOL-USD.CC' },
            { icono: 'star-outline', nombre: 'Stellar', ticker: 'XLM-USD.CC' },
            { icono: 'star-outline', nombre: 'Monero', ticker: 'XMR-USD.CC' },
            { icono: 'star-outline', nombre: 'RaiBlocks', ticker: 'XRB-USD.CC' },
            { icono: 'star-outline', nombre: 'Ripple', ticker: 'XRP-USD.CC' },
            { icono: 'star-outline', nombre: 'Exchange Union', ticker: 'XUC-USD.CC' },
            { icono: 'star-outline', nombre: 'Verge', ticker: 'XVG-USD.CC' },
            { icono: 'star-outline', nombre: 'ZCoin', ticker: 'XZC-USD.CC' },
            { icono: 'star-outline', nombre: 'ZCash', ticker: 'ZEC-USD.CC' },
            { icono: 'star-outline', nombre: 'ZenCash', ticker: 'ZEN-USD.CC' },
            { icono: 'star-outline', nombre: '0x', ticker: 'ZRX-USD.CC' },
        ];
        this.title = 'Parseador total de mercados:';
        this.contamoss = 0;
    }
    ApiRobot.prototype.ngOnInit = function () {
        // ----------------- Top Mundo ---------------------
        var _this = this;
        this.sleep(1000).then(function () {
            _this
                ._favoritoService
                .deletePais('topmundo')
                .subscribe(function (result) {
                console.log(result);
                if (!result) {
                    console.log('Error al borrar');
                }
            });
            console.log('API de TopMundo borrado');
            _this.contadorTopmundo = 0;
            //this.crypto();
            _this.espana();
            _this.sleep(300000).then(function () {
                _this.eeuu();
            });
            _this.sleep(1510000).then(function () {
                _this.australia();
            });
            _this.sleep(2800000).then(function () {
                _this.alemania();
            });
            _this.sleep(4020000).then(function () {
                _this.canada();
            });
            _this.sleep(5500000).then(function () {
                _this.italia();
            });
            _this.sleep(6700000).then(function () {
                _this.francia();
            });
            _this.sleep(7980000).then(function () {
                _this.austria(); //Meter Argentina aquí 
            });
            _this.sleep(8180000).then(function () {
                _this.belgica(); // metemos irlanda aquí
            });
            _this.sleep(9390000).then(function () {
                _this.portugal();
            });
            _this.sleep(10000000).then(function () {
                _this.mexico();
            });
            _this.sleep(13500000).then(function () {
                _this.brasil();
            });
            _this.sleep(14700000).then(function () {
                _this.dinamarca();
            });
            _this.sleep(15490000).then(function () {
                _this.holanda();
            });
            /*this.sleep(7200000).then(() => { // 2 horas, 7200000
                this.suecia();
            });
            this.sleep(54390000).then(() => {
                this.uk();
            });
            this.sleep(8200000).then(() => {
                this.suiza();
            });
            
            this.sleep(13390000).then(() => { // 3 horas 13000000
                this.noruega();
            });
            this.sleep(14000000).then(() => {
                this.rusia();
            });
            this.sleep(16610000).then(() => { // 4 horas 16000000
                this.china();
            });
            this.sleep(17910000).then(() => {
                this.india();
            });*/
            /* this.sleep(19000000).then(() => {
                this.japon();
            });
            this.sleep(18490000).then(() => {
                this.crypto();
            });
            */
        });
        //});
    };
    // ------------------------------- EMPIEZAN PAISES
    ApiRobot.prototype.espana = function () {
        var _this = this;
        this.contadorEspana = 0;
        this
            ._favoritoService
            .deletePais('espana')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Espana borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MC').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result, _this.arrayEspana);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(40000).then(function () {
                var _loop_1 = function (stock) {
                    _this.sleep(30000).then(function () {
                        _this.mensual(stock.ticker, _this.arrayEspana, 'Espana');
                    });
                    _this.sleep(130000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayEspana, 'Espana');
                    });
                    _this.sleep(230000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayEspana, 'Espana');
                        _this.datoGrafica2(stock.ticker, _this.arrayEspana, 'Espana');
                        _this.anual(stock.ticker, _this.arrayEspana, 'Espana');
                    });
                    _this.sleep(340000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayEspana, 'Espana');
                    });
                    _this.sleep(450000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayEspana, 'Espana');
                    });
                    _this.sleep(750000).then(function () {
                        console.log(stock, 'Vemos por ejemplo que sube en espana');
                        _this._favoritoService.addPais(stock, 'espana').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de España agregada a base de datos');
                                _this.contadorEspana = _this.contadorEspana + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayEspana; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.arrayEspana);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.australia = function () {
        var _this = this;
        this.contadorAustralia = 0;
        this
            ._favoritoService
            .deletePais('australia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Australia borrada');
        this._servicio1.getModelos('AU').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayAustralia);
            _this.sleep(520000).then(function () {
                var _loop_2 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayAustralia, 'Australia');
                    _this.sleep(190000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayAustralia, 'Australia');
                    });
                    _this.sleep(370000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayAustralia, 'Australia');
                        _this.datoGrafica2(stock.ticker, _this.arrayAustralia, 'Australia');
                        _this.anual(stock.ticker, _this.arrayAustralia, 'Australia');
                    });
                    _this.sleep(440000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayAustralia, 'Australia');
                    });
                    _this.sleep(560000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayAustralia, 'Australia');
                    });
                    _this.sleep(850000).then(function () {
                        _this._favoritoService.addPais(stock, 'australia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Australia agregada a base de datos');
                                _this.contadorAustralia = _this.contadorAustralia + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.arrayAustralia; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_2(stock);
                }
            });
            console.log(_this.arrayAustralia);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    /*
    japon(){
        this.contadorJapon = 0;
        this
        ._favoritoService
        .deletePais('japon')
        .subscribe(result => {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        }
        ,);
        console.log('API de japon borrada');
        this._servicio1.getModelos('TSE').subscribe(
            result => {
                this.recopilarDatos(result,this.arrayJapon);
                this.sleep(520000).then(() => {
                    for (let stock of this.arrayJapon) {
                        this.mensual(stock.ticker, this.arrayJapon, 'Japon');
                    this.sleep(190000).then(() => {
                        this.semestral(stock.ticker, this.arrayJapon, 'Japon');
                    });
                                       
                    this.sleep(370000).then(() => {
                        this.datoGrafica1(stock.ticker, this.arrayJapon, 'Japon');
                        this.datoGrafica2(stock.ticker, this.arrayJapon, 'Japon');
                        this.anual(stock.ticker,this.arrayJapon, 'Japon');
                    });
                    this.sleep(420000).then(() => {
                        this.biAnual(stock.ticker, this.arrayJapon, 'Japon');
                    });
                    this.sleep(540000).then(() => {
                        this.triAnual(stock.ticker, this.arrayJapon, 'Japon');
                    });
                    this.sleep(750000).then(() => {
                        this._favoritoService.addPais(stock,'japon').subscribe(
                        response =>{
                            if(!response){
                                console.log('error al recibir confirmacion de guardado');
                            } else{
                                console.log('Información de Japon agregada a base de datos');
                                this.contadorJapon = this.contadorJapon + 1;
                                }
                            },
                        error =>{
                            console.log('Error al guardar datos')
                        }
                        );
                    });
                }
            });
                console.log(this.arrayJapon);
                
                if(!this.modelos){console.log('Error en la petición de datos de este mercado')}
            },
            error => {
                this.errorMen = <any>error;
                if(this.errorMen != null){
                    console.log(this.errorMen);
                    console.log('Error en la peticion2');
                }
            }
        );
        }*/
    ApiRobot.prototype.francia = function () {
        var _this = this;
        this.contadorFrancia = 0;
        this
            ._favoritoService
            .deletePais('francia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Francia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('PA').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayFrancia);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(350000).then(function () {
                var _loop_3 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayFrancia, 'Francia');
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayFrancia, 'Francia');
                    });
                    _this.sleep(300000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayFrancia, 'Francia');
                        _this.datoGrafica2(stock.ticker, _this.arrayFrancia, 'Francia');
                        _this.anual(stock.ticker, _this.arrayFrancia, 'Francia');
                    });
                    _this.sleep(400000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayFrancia, 'Francia');
                    });
                    _this.sleep(500000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayFrancia, 'Francia');
                    });
                    _this.sleep(800000).then(function () {
                        _this._favoritoService.addPais(stock, 'francia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Francia agregada a base de datos');
                                _this.contadorFrancia = _this.contadorFrancia + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayFrancia; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_3(stock);
                }
            });
            console.log(_this.arrayFrancia);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.alemania = function () {
        var _this = this;
        this.contadorAlemania = 0;
        this
            ._favoritoService
            .deletePais('alemania')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Alemania borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('XETRA').subscribe(function (result) {
            /*let resultado = result.push({Name: 'Siltronic', Code: 'WAF', Exchange: 'XETRA', Currency: 'EUR'},
            {Name: 'Stabilus', Code: 'STM', Exchange: 'XETRA', Currency: 'EUR'}); */
            _this.recopilarDatos(result, _this.arrayAlemania);
            _this.sleep(270000).then(function () {
                var _loop_4 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayAlemania, 'Alemania');
                    //});
                    _this.sleep(230000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayAlemania, 'Alemania');
                    });
                    _this.sleep(420000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayAlemania, 'Alemania');
                        _this.datoGrafica2(stock.ticker, _this.arrayAlemania, 'Alemania');
                        _this.anual(stock.ticker, _this.arrayAlemania, 'Alemania');
                    });
                    _this.sleep(500000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayAlemania, 'Alemania');
                    });
                    _this.sleep(630000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayAlemania, 'Alemania');
                    });
                    _this.sleep(890000).then(function () {
                        _this._favoritoService.addPais(stock, 'alemania').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Alemania agregada a base de datos');
                                _this.contadorAlemania = _this.contadorAlemania + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayAlemania; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_4(stock);
                }
            });
            console.log(_this.arrayAlemania);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.dinamarca = function () {
        var _this = this;
        this.contadorDinamarca = 0;
        this
            ._favoritoService
            .deletePais('dinamarca')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Dinamarca borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('CO').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayDinamarca);
            _this.sleep(70000).then(function () {
                var _loop_5 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                    _this.sleep(100000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                    });
                    _this.sleep(160000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                        _this.datoGrafica2(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                        _this.anual(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                    });
                    _this.sleep(190000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                    });
                    _this.sleep(210000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayDinamarca, 'Dinamarca');
                    });
                    _this.sleep(350000).then(function () {
                        _this._favoritoService.addPais(stock, 'dinamarca').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Dinamarca agregada a base de datos');
                                _this.contadorDinamarca = _this.contadorDinamarca + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.arrayDinamarca; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_5(stock);
                }
            });
            console.log(_this.arrayDinamarca);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.austria = function () {
        var _this = this;
        this.contadorAustria = 0;
        this
            ._favoritoService
            .deletePais('austria')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Austria borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('BA').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayAustria);
            _this.sleep(30000).then(function () {
                var _loop_6 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayAustria, 'Austria');
                    //});
                    _this.sleep(80000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayAustria, 'Austria');
                    });
                    _this.sleep(150000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayAustria, 'Austria');
                        _this.datoGrafica2(stock.ticker, _this.arrayAustria, 'Austria');
                        _this.anual(stock.ticker, _this.arrayAustria, 'Austria');
                    });
                    _this.sleep(180000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayAustria, 'Austria');
                    });
                    _this.sleep(240000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayAustria, 'Austria');
                    });
                    _this.sleep(370000).then(function () {
                        _this._favoritoService.addPais(stock, 'austria').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Austria agregada a base de datos');
                                _this.contadorAustria = _this.contadorAustria + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayAustria; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_6(stock);
                }
            });
            console.log(_this.arrayAustria);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.belgica = function () {
        var _this = this;
        this.contadorBelgica = 0;
        this
            ._favoritoService
            .deletePais('belgica')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Belgica borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('IR').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayBelgica);
            _this.sleep(35000).then(function () {
                var _loop_7 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayBelgica, 'Belgica');
                    _this.sleep(75000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayBelgica, 'Belgica');
                    });
                    _this.sleep(145000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayBelgica, 'Belgica');
                        _this.datoGrafica2(stock.ticker, _this.arrayBelgica, 'Belgica');
                        _this.anual(stock.ticker, _this.arrayBelgica, 'Belgica');
                    });
                    _this.sleep(250000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayBelgica, 'Belgica');
                    });
                    _this.sleep(360000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayBelgica, 'Belgica');
                    });
                    _this.sleep(575000).then(function () {
                        _this._favoritoService.addPais(stock, 'belgica').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Belgica agregada a base de datos');
                                _this.contadorBelgica = _this.contadorBelgica + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayBelgica; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_7(stock);
                }
            });
            console.log(_this.arrayBelgica);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    /*
    suecia(){
        this.contadorSuecia = 0;
        this
        ._favoritoService
        .deletePais('suecia')
        .subscribe(result => {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        }
        ,);
        console.log('API de Suecia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('ST').subscribe(
            result => {
                this.recopilarDatos(result,this.arraySuecia);
                this.sleep(300000).then(() => {
                    for (let stock of this.arraySuecia) {
                        this.mensual(stock.ticker, this.arraySuecia, 'Suecia');
                    this.sleep(225000).then(() => {
                        this.semestral(stock.ticker, this.arraySuecia, 'Suecia');
                    });
                                       
                    this.sleep(425000).then(() => {
                        this.datoGrafica1(stock.ticker, this.arraySuecia, 'Suecia');
                        this.datoGrafica2(stock.ticker, this.arraySuecia, 'Suecia');
                        this.anual(stock.ticker, this.arraySuecia, 'Suecia');
                    });
                    this.sleep(480000).then(() => {
                        this.biAnual(stock.ticker, this.arraySuecia, 'Suecia');
                    });
                    this.sleep(530000).then(() => {
                        this.triAnual(stock.ticker, this.arraySuecia, 'Suecia');
                    });
                    this.sleep(600000).then(() => {
                        this._favoritoService.addPais(stock,'suecia').subscribe(
                        response =>{
                            if(!response){
                                console.log('error al recibir confirmacion de guardado');
                            } else{
                                console.log('Información de Suecia agregada a base de datos');
                                this.contadorSuecia = this.contadorSuecia + 1;
                                }
                            },
                        error =>{
                            console.log('Error al guardar datos')
                        }
                        );
                    });
                }
            });
                console.log(this.arraySuecia);
                
                if(!this.modelos){console.log('Error en la petición de datos de este mercado')}
            },
            error => {
                this.errorMen = <any>error;
                if(this.errorMen != null){
                    console.log(this.errorMen);
                    console.log('Error en la peticion2');
                }
            }
        );
    }
    
    suiza(){
        this.contadorSuiza = 0;
        this
        ._favoritoService
        .deletePais('suiza')
        .subscribe(result => {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        }
        ,);
        console.log('API de Suiza borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SW').subscribe(
            result => {
                this.recopilarDatos(result,this.arraySuiza);
                this.sleep(350000).then(() => {
                    for (let stock of this.arraySuiza) {
                        this.mensual(stock.ticker, this.arraySuiza, 'Suiza');
                    this.sleep(230000).then(() => {
                        this.semestral(stock.ticker, this.arraySuiza, 'Suiza');
                    });
                    this.sleep(430000).then(() => {
                        this.datoGrafica1(stock.ticker, this.arraySuiza, 'Suiza');
                        this.datoGrafica2(stock.ticker, this.arraySuiza, 'Suiza');
                        this.anual(stock.ticker, this.arraySuiza, 'Suiza');
                    });
                    this.sleep(480000).then(() => {
                        this.biAnual(stock.ticker, this.arraySuiza, 'Suiza');
                    });
                    this.sleep(530000).then(() => {
                        this.triAnual(stock.ticker, this.arraySuiza, 'Suiza');
                    });
                    this.sleep(650000).then(() => {
                        this._favoritoService.addPais(stock,'suiza').subscribe(
                        response =>{
                            if(!response){
                                console.log('error al recibir confirmacion de guardado');
                            } else{
                                console.log('Información de Suiza agregada a base de datos');
                                this.contadorSuiza = this.contadorSuiza + 1;
                                }
                            },
                        error =>{
                            console.log('Error al guardar datos')
                        }
                        );
                    });
                }
            });
                console.log(this.arraySuiza);
                
                if(!this.modelos){console.log('Error en la petición de datos de este mercado')}
            },
            error => {
                this.errorMen = <any>error;
                if(this.errorMen != null){
                    console.log(this.errorMen);
                    console.log('Error en la peticion2');
                }
            }
        );
    }
    
    uk(){
        this.contadorUk = 0;
        this
            ._favoritoService
            .deletePais('uk')
            .subscribe(result => {
                console.log(result);
                if (!result) {
                    console.log('Error al borrar');
                }
            }
            ,);
            console.log('API de UK borrada');
            // Aquí le pasamos el mercado que queremos parsear
            this._servicio1.getModelos('LSE').subscribe(
                result => {
                    this.recopilarDatos(result,this.arrayUk);
                    this.sleep(400000).then(() => {
                        for (let stock of this.arrayUk) {
                            this.mensual(stock.ticker, this.arrayUk, 'UK');
                        this.sleep(320000).then(() => {
                            this.semestral(stock.ticker, this.arrayUk, 'UK');
                        });
                                           
                        this.sleep(620000).then(() => {
                            this.datoGrafica1(stock.ticker, this.arrayUk, 'UK');
                            this.datoGrafica2(stock.ticker, this.arrayUk, 'UK');
                            this.anual(stock.ticker, this.arrayUk, 'UK');
                        });
                        this.sleep(700000).then(() => {
                            this.biAnual(stock.ticker, this.arrayUk, 'UK');
                        });
                        this.sleep(800000).then(() => {
                            this.triAnual(stock.ticker, this.arrayUk, 'UK');
                        });
                        this.sleep(920000).then(() => {
                            this._favoritoService.addPais(stock,'uk').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                } else{
                                    console.log('Información de UK agregada a base de datos');
                                    this.contadorUk = this.contadorUk + 1;
                                    }
                                },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                            );
                        });
                    }
                });
                    console.log(this.arrayUk);
                    
                    if(!this.modelos){console.log('Error en la petición de datos de este mercado')}
                },
                error => {
                    this.errorMen = <any>error;
                    if(this.errorMen != null){
                        console.log(this.errorMen);
                        console.log('Error en la peticion2');
                    }
                }
            );
    }*/
    ApiRobot.prototype.mexico = function () {
        var _this = this;
        this.contadorMexico = 0;
        this
            ._favoritoService
            .deletePais('mexico')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Mexico borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MX').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayMexico);
            _this.sleep(400000).then(function () {
                var _loop_8 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayMexico, 'Mexico');
                    //});
                    _this.sleep(330000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayMexico, 'Mexico');
                    });
                    _this.sleep(660000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayMexico, 'Mexico');
                        _this.datoGrafica2(stock.ticker, _this.arrayMexico, 'Mexico');
                        _this.anual(stock.ticker, _this.arrayMexico, 'Mexico');
                    });
                    _this.sleep(700000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayMexico, 'Mexico');
                    });
                    _this.sleep(800000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayMexico, 'Mexico');
                    });
                    _this.sleep(1190000).then(function () {
                        _this._favoritoService.addPais(stock, 'mexico').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Mexico agregada a base de datos');
                                _this.contadorMexico = _this.contadorMexico + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayMexico; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_8(stock);
                }
            });
            console.log(_this.arrayMexico);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.portugal = function () {
        var _this = this;
        this.contadorPortugal = 0;
        this
            ._favoritoService
            .deletePais('portugal')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Portugal borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('LS').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayPortugal);
            _this.sleep(20000).then(function () {
                var _loop_9 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayPortugal, 'Portugal');
                    _this.sleep(20000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayPortugal, 'Portugal');
                    });
                    _this.sleep(55000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayPortugal, 'Portugal');
                        _this.datoGrafica2(stock.ticker, _this.arrayPortugal, 'Portugal');
                        _this.anual(stock.ticker, _this.arrayPortugal, 'Portugal');
                    });
                    _this.sleep(700000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayPortugal, 'Portugal');
                    });
                    _this.sleep(800000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayPortugal, 'Portugal');
                    });
                    _this.sleep(105000).then(function () {
                        _this._favoritoService.addPais(stock, 'portugal').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Portugal agregada a base de datos');
                                _this.contadorPortugal = _this.contadorPortugal + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.arrayPortugal; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_9(stock);
                }
            });
            console.log(_this.arrayPortugal);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.holanda = function () {
        var _this = this;
        this.contadorHolanda = 0;
        this
            ._favoritoService
            .deletePais('holanda')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Holanda borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('AS').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayHolanda);
            _this.sleep(120000).then(function () {
                var _loop_10 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayHolanda, 'Holanda');
                    _this.sleep(180000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayHolanda, 'Holanda');
                    });
                    _this.sleep(350000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayHolanda, 'Holanda');
                        _this.datoGrafica2(stock.ticker, _this.arrayHolanda, 'Holanda');
                        _this.anual(stock.ticker, _this.arrayHolanda, 'Holanda');
                    });
                    _this.sleep(400000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayHolanda, 'Holanda');
                    });
                    _this.sleep(450000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayHolanda, 'Holanda');
                    });
                    _this.sleep(630000).then(function () {
                        _this._favoritoService.addPais(stock, 'holanda').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Holanda agregada a base de datos');
                                _this.contadorHolanda = _this.contadorHolanda + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.arrayHolanda; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_10(stock);
                }
            });
            console.log(_this.arrayHolanda);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.italia = function () {
        var _this = this;
        this.contadorItalia = 0;
        this
            ._favoritoService
            .deletePais('italia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Italia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MI').subscribe(function (result) {
            /*let resultado = result.push({Name: 'Ferrari', Code: 'RACE', Exchange: 'MI', Currency: 'EUR'});*/
            _this.recopilarDatos(result, _this.arrayItalia);
            _this.sleep(300000).then(function () {
                var _loop_11 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayItalia, 'Italia');
                    _this.sleep(300000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayItalia, 'Italia');
                    });
                    _this.sleep(600000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayItalia, 'Italia');
                        _this.datoGrafica2(stock.ticker, _this.arrayItalia, 'Italia');
                        _this.anual(stock.ticker, _this.arrayItalia, 'Italia');
                    });
                    _this.sleep(700000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayItalia, 'Italia');
                    });
                    _this.sleep(800000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayItalia, 'Italia');
                    });
                    _this.sleep(110000).then(function () {
                        _this._favoritoService.addPais(stock, 'italia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Italia agregada a base de datos');
                                _this.contadorItalia = _this.contadorItalia + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayItalia; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_11(stock);
                }
            });
            console.log(_this.arrayItalia);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.noruega = function () {
        var _this = this;
        this.contadorNoruega = 0;
        this
            ._favoritoService
            .deletePais('noruega')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Noruega borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('OL').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayNoruega);
            _this.sleep(100000).then(function () {
                var _loop_12 = function (stock) {
                    _this.mensual(stock.ticker, _this.arrayNoruega, 'Noruega');
                    _this.sleep(110000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayNoruega, 'Noruega');
                    });
                    _this.sleep(210000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayNoruega, 'Noruega');
                        _this.datoGrafica2(stock.ticker, _this.arrayNoruega, 'Noruega');
                        _this.anual(stock.ticker, _this.arrayNoruega, 'Noruega');
                    });
                    _this.sleep(290000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayNoruega, 'Noruega');
                    });
                    _this.sleep(340000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayNoruega, 'Noruega');
                    });
                    _this.sleep(510000).then(function () {
                        _this._favoritoService.addPais(stock, 'noruega').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Noruega agregada a base de datos');
                                _this.contadorNoruega = _this.contadorNoruega + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.arrayNoruega; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_12(stock);
                }
            });
            console.log(_this.arrayNoruega);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.rusia = function () {
        var _this = this;
        this.contadorRusia = 0;
        this
            ._favoritoService
            .deletePais('rusia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Rusia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MCX').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayRusia);
            _this.sleep(200000).then(function () {
                var _loop_13 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayRusia, 'Rusia');
                    //});
                    _this.sleep(210000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayRusia, 'Rusia');
                    });
                    _this.sleep(350000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayRusia, 'Rusia');
                        _this.datoGrafica2(stock.ticker, _this.arrayRusia, 'Rusia');
                        _this.anual(stock.ticker, _this.arrayRusia, 'Rusia');
                    });
                    _this.sleep(400000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayRusia, 'Rusia');
                    });
                    _this.sleep(460000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayRusia, 'Rusia');
                    });
                    _this.sleep(690000).then(function () {
                        _this._favoritoService.addPais(stock, 'rusia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Rusia agregada a base de datos');
                                _this.contadorRusia = _this.contadorRusia + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayRusia; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_13(stock);
                }
            });
            console.log(_this.arrayRusia);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.brasil = function () {
        var _this = this;
        this.contadorBrasil = 0;
        this
            ._favoritoService
            .deletePais('brasil')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Brasil borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SA').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayBrasil);
            _this.sleep(90000).then(function () {
                var _loop_14 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayBrasil, 'Brasil');
                    //});
                    _this.sleep(100000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayBrasil, 'Brasil');
                    });
                    _this.sleep(210000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayBrasil, 'Brasil');
                        _this.datoGrafica2(stock.ticker, _this.arrayBrasil, 'Brasil');
                        _this.anual(stock.ticker, _this.arrayBrasil, 'Brasil');
                    });
                    _this.sleep(260000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayBrasil, 'Brasil');
                    });
                    _this.sleep(310000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayBrasil, 'Brasil');
                    });
                    _this.sleep(680000).then(function () {
                        _this._favoritoService.addPais(stock, 'brasil').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Brasil agregada a base de datos');
                                _this.contadorBrasil = _this.contadorBrasil + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayBrasil; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_14(stock);
                }
            });
            console.log(_this.arrayBrasil);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.canada = function () {
        var _this = this;
        this.contadorCanada = 0;
        this
            ._favoritoService
            .deletePais('canada')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de Canada borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('TO').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayCanada);
            _this.sleep(320000).then(function () {
                var _loop_15 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayCanada, 'Canada');
                    //});
                    _this.sleep(160000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayCanada, 'Canada');
                    });
                    _this.sleep(330000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayCanada, 'Canada');
                        _this.datoGrafica2(stock.ticker, _this.arrayCanada, 'Canada');
                        _this.anual(stock.ticker, _this.arrayCanada, 'Canada');
                    });
                    _this.sleep(400000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayCanada, 'Canada');
                    });
                    _this.sleep(500000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayCanada, 'Canada');
                    });
                    _this.sleep(800000).then(function () {
                        _this._favoritoService.addPais(stock, 'canada').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Canada agregada a base de datos');
                                _this.contadorCanada = _this.contadorCanada + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayCanada; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_15(stock);
                }
            });
            console.log(_this.arrayCanada);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.china = function () {
        var _this = this;
        this.contadorChina = 0;
        this
            ._favoritoService
            .deletePais('china')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de China borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SHG').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayChina);
            _this.sleep(320000).then(function () {
                var _loop_16 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayChina, 'China');
                    //});
                    _this.sleep(170000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayChina, 'China');
                    });
                    _this.sleep(350000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayChina, 'China');
                        _this.datoGrafica2(stock.ticker, _this.arrayChina, 'China');
                        _this.anual(stock.ticker, _this.arrayChina, 'China');
                    });
                    _this.sleep(450000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayChina, 'China');
                    });
                    _this.sleep(550000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayChina, 'China');
                    });
                    _this.sleep(750000).then(function () {
                        _this._favoritoService.addPais(stock, 'china').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de China agregada a base de datos');
                                _this.contadorChina = _this.contadorChina + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayChina; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_16(stock);
                }
            });
            console.log(_this.arrayChina);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.india = function () {
        var _this = this;
        this.contadorIndia = 0;
        this
            ._favoritoService
            .deletePais('india')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de India borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('NSE').subscribe(function (result) {
            _this.recopilarDatos(result, _this.arrayIndia);
            _this.sleep(120000).then(function () {
                var _loop_17 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker, _this.arrayIndia, 'India');
                    //});
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker, _this.arrayIndia, 'India');
                    });
                    _this.sleep(220000).then(function () {
                        _this.datoGrafica1(stock.ticker, _this.arrayIndia, 'India');
                        _this.datoGrafica2(stock.ticker, _this.arrayIndia, 'India');
                        _this.anual(stock.ticker, _this.arrayIndia, 'India');
                    });
                    _this.sleep(320000).then(function () {
                        _this.biAnual(stock.ticker, _this.arrayIndia, 'India');
                    });
                    _this.sleep(420000).then(function () {
                        _this.triAnual(stock.ticker, _this.arrayIndia, 'India');
                    });
                    _this.sleep(600000).then(function () {
                        _this._favoritoService.addPais(stock, 'india').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de India agregada a base de datos');
                                _this.contadorIndia = _this.contadorIndia + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.arrayIndia; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_17(stock);
                }
            });
            console.log(_this.arrayIndia);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    ApiRobot.prototype.eeuu = function () {
        var _this = this;
        this.contadorEEUU = 0;
        this
            ._favoritoService
            .deletePais('eeuu')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        ;
        console.log('API de EEUU borrada');
        var _loop_18 = function (stock) {
            this_1.valor(stock.ticker);
            this_1.sleep(200000)
                .then(function () {
                _this.mensual(stock.ticker, _this.mercadoAcciones, 'EEUU');
            });
            this_1.sleep(400000)
                .then(function () {
                _this.semestral(stock.ticker, _this.mercadoAcciones, 'EEUU');
            });
            this_1.sleep(600000)
                .then(function () {
                _this.datoGrafica1(stock.ticker, _this.mercadoAcciones, 'EEUU');
                _this.datoGrafica2(stock.ticker, _this.mercadoAcciones, 'EEUU');
                _this.anual(stock.ticker, _this.mercadoAcciones, 'EEUU');
            });
            this_1.sleep(800000).then(function () {
                _this.biAnual(stock.ticker, _this.mercadoAcciones, 'EEUU');
            });
            this_1.sleep(1000000).then(function () {
                _this.triAnual(stock.ticker, _this.mercadoAcciones, 'EEUU');
            });
            this_1.sleep(1500000)
                .then(function () {
                console.log(stock);
                _this
                    ._favoritoService
                    .addPais(stock, 'eeuu')
                    .subscribe(function (response) {
                    if (!response) {
                        console.log('error al recibir confirmacion de guardado');
                    }
                    else {
                        console.log('Información de EEUU agregada a base de datos');
                        _this.contadorEEUU = _this.contadorEEUU + 1;
                    }
                }, function (error) {
                    console.log('Error al guardar datos');
                });
            });
        };
        var this_1 = this;
        // Recopilamos datos anual, semestral y mensual
        for (var _i = 0, _a = this.mercadoAcciones; _i < _a.length; _i++) {
            var stock = _a[_i];
            _loop_18(stock);
        }
        console.log(this.mercadoAcciones);
    };
    ApiRobot.prototype.crypto = function () {
        var _this = this;
        this.contadorCrypto = 0;
        this
            ._favoritoService
            .deletePais('crypto')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                console.log('Error al borrar');
            }
        });
        console.log('API de crypto borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('CC').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result, _this.mercadoCrypto);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(40000).then(function () {
                var _loop_19 = function (stock) {
                    _this.sleep(30000).then(function () {
                        _this.mensual(stock.ticker, _this.mercadoCrypto, 'crypto');
                    });
                    _this.sleep(80000).then(function () {
                        _this.semestral(stock.ticker, _this.mercadoCrypto, 'crypto');
                    });
                    _this.sleep(140000).then(function () {
                        _this.datoGrafica2(stock.ticker, _this.mercadoCrypto, 'crypto');
                        _this.datoGrafica1(stock.ticker, _this.mercadoCrypto, 'crypto');
                        _this.anual(stock.ticker, _this.mercadoCrypto, 'crypto');
                    });
                    _this.sleep(160000).then(function () {
                        _this.biAnual(stock.ticker, _this.mercadoCrypto, 'crypto');
                    });
                    _this.sleep(180000).then(function () {
                        _this.triAnual(stock.ticker, _this.mercadoCrypto, 'crypto');
                    });
                    _this.sleep(200000).then(function () {
                        console.log(stock, 'Vemos por ejemplo que sube en espana');
                        _this._favoritoService.addPais(stock, 'crypto').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de criptos agregada a base de datos');
                                _this.contadorCrypto = _this.contadorCrypto + 1;
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.mercadoCrypto; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_19(stock);
                }
            });
            console.log(_this.mercadoCrypto);
            if (!_this.modelos) {
                console.log('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                console.log('Error en la peticion2');
            }
        });
    };
    // -------------------------------------- ACABAN PAISES
    ApiRobot.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    // Miramos el Anual
    ApiRobot.prototype.anual = function (tickerRecibido, array, mercado) {
        var _this = this;
        console.log('Empieza anual de ' + mercado);
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                _this.contamosHoy = 0;
                while (hoy === 0 || hoy === null || hoy === undefined) {
                    _this.contamosHoy = _this.contamosHoy + 1;
                    hoy = parseFloat(result[_this.contamosHoy].adjusted_close);
                }
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                var grafica1 = ayer;
                _this.contamoss = 1;
                while (ayer === 0 || ayer === null || ayer === undefined) {
                    _this.contamoss = _this.contamoss + 1;
                    ayer = parseFloat(result[result.length - _this.contamoss].adjusted_close);
                }
                //if (tickerRecibido.indexOf('XRB-USD.CC') != -1 || tickerRecibido.indexOf('ICX-USD.CC') != -1){
                //console.log('HOYAno',hoy,'AyerAno',ayer,tickerRecibido);
                //}
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    if (anual < 2000) {
                        var grafica6m = void 0;
                        var datoAnual = array.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        grafica6m = datoAnual.grafica6m;
                        datoAnual.anual = anual;
                        datoAnual.anualD = 'sube';
                        datoAnual.grafica1 = grafica1;
                        /*if(tickerRecibido.indexOf('.LS') === -1 && tickerRecibido.indexOf('.BA') === -1 && tickerRecibido.indexOf('.TO') === -1 && tickerRecibido.indexOf('.ST') === -1 && tickerRecibido.indexOf('USD.CC') === -1 && tickerRecibido.indexOf('.VI') === -1 && tickerRecibido.indexOf('.BR') === -1 && tickerRecibido.indexOf('.SW') === -1 && tickerRecibido.indexOf('.CO') === -1 && tickerRecibido.indexOf('.OL') === -1 && tickerRecibido.indexOf('.SHG') === -1 && tickerRecibido.indexOf('.NSE') === -1 && tickerRecibido.indexOf('.SA') === -1 && tickerRecibido.indexOf('.MX') === -1 && tickerRecibido.indexOf('.MCX') === -1){
                        this._servicio1.getbiAnual(tickerRecibido).subscribe(
                            result => {
                                if(!result){
                                    alert('No obtenemos resultado en el parseo BiAnual')
                                } else {
                                let hoyBi = parseFloat(result[0].adjusted_close);
                                let ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                let grafica2 = ayerBi;
                                    if(hoyBi > ayerBi){
                                        let cuentaResultado = hoyBi - ayerBi;
                                        let comparacion = cuentaResultado / ayerBi;
                                        total = comparacion * 100;
                                        resultado = parseInt(total);
                                        let biAnual = resultado;
                                        datoAnual.biAnual=biAnual;

                                        if(biAnual > 150 && biAnual > anual && tickerRecibido != 'ES.PA' && tickerRecibido != 'TDW.US' && tickerRecibido != 'DIS.MI'){

                                            this.datoGrafica1(tickerRecibido, array, mercado);
                                            this.datoGrafica2(tickerRecibido, array, mercado);
                                            this._servicio1.getriAnual(tickerRecibido).subscribe(
                                                result => {
                                                    if(!result){
                                                        alert('No obtenemos resultado en el parseo BiAnual')
                                                    } else {
                                                    let hoytri = parseFloat(result[0].adjusted_close);
                                                    let ayertri = parseFloat(result[result.length - 1].adjusted_close);
                                                    let grafica3 = ayertri;
                                                        if(hoytri > ayertri){
                                                            let cuentaResultado = hoytri - ayertri;
                                                            let comparacion = cuentaResultado / ayertri;
                                                            total = comparacion * 100;
                                                            resultado = parseInt(total);
                                                            let triAnual = resultado;
                                                            datoAnual.triAnual=triAnual;
                                                            let datosGrafica = array.find((p) => {
                                                                return p.ticker === tickerRecibido;
                                                            });
                                                            let grafica18m = datosGrafica.grafica18m;
                                                            let grafica23m = datosGrafica.grafica23m;
                    
                                                            if(triAnual > 350 && triAnual >= biAnual && ayertri <= ayerBi && ayertri < ayer){
                                                                // && tickerRecibido.indexOf('.AS') === -1 && anual > datoAnual.semestral && datoAnual.semestral > datoAnual.mensual && tickerRecibido.indexOf('.LS') === -1 && tickerRecibido.indexOf('.NSE') === -1 && tickerRecibido.indexOf('.SA') === -1 && tickerRecibido.indexOf('.MX') === -1 && tickerRecibido.indexOf('.MCX') === -1
                                                                if(anual > 40 && anual < 400 && datoAnual.semestral < 330 && datoAnual.mensual < 90){
                                                                    let stock = {nombre: datoAnual.nombre, ticker: tickerRecibido, icono: 'star-outline', moneda: 'EUR', valor: datoAnual.valor, grafica18m : grafica18m, grafica23m : grafica23m, grafica6m: grafica6m, grafica3: grafica3, grafica2: grafica2, grafica1: grafica1, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual, biAnual: datoAnual.biAnual, triAnual: datoAnual.triAnual};
                                                                    this._favoritoService.addPais(stock,'topmundo').subscribe(
                                                                        response =>{
                                                                            if(!response){
                                                                                console.log('error al recibir confirmacion de guardado');
                                                                            }
                                                                            else{
                                                                                console.log('Información de '+mercado+' agregada a Top Mundo');
                                                                                this.contadorTopmundo = this.contadorTopmundo + 1;
                                                                                }
                                                                        },
                                                                        error =>{
                                                                            console.log('Error al guardar datos')
                                                                        }
                                                                    );
                                                                }
                                                            }
                                                        }
                                                    }
                                                  }
                                        )}
                                    }
                                }
                            }
                        )}
                    }*/
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                    datoAnual.grafica1 = grafica1;
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                    datoAnual.grafica1 = grafica1;
                }
            }
        });
    };
    ApiRobot.prototype.biAnual = function (tickerRecibido, array, mercado) {
        var _this = this;
        console.log('Empieza biAnual de ' + mercado);
        var resultado;
        var total;
        this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo biAnual');
            }
            else {
                var hoyBi = parseFloat(result[0].adjusted_close);
                _this.contamosHoy = 0;
                while (hoyBi === 0 || hoyBi === null || hoyBi === undefined) {
                    _this.contamosHoy = _this.contamosHoy + 1;
                    hoyBi = parseFloat(result[_this.contamosHoy].adjusted_close);
                }
                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                var grafica2 = ayerBi;
                _this.contamoss = 1;
                while (ayerBi === 0 || ayerBi === null || ayerBi === undefined) {
                    _this.contamoss = _this.contamoss + 1;
                    ayerBi = parseFloat(result[result.length - _this.contamoss].adjusted_close);
                }
                if (hoyBi > ayerBi) {
                    var cuentaResultado = hoyBi - ayerBi;
                    var comparacion = cuentaResultado / ayerBi;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var biAnual = resultado;
                    if (biAnual < 3000) {
                        var datobiAnual = array.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datobiAnual.biAnual = biAnual;
                        datobiAnual.biAnualD = 'sube';
                        datobiAnual.grafica2 = grafica2;
                    }
                }
                else if (hoyBi < ayerBi) {
                    var cuentaResultado = ayerBi - hoyBi;
                    var comparacion = cuentaResultado / ayerBi;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var biAnual = resultado;
                    var datobiAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datobiAnual.biAnual = biAnual;
                    datobiAnual.biAnualD = 'baja';
                    datobiAnual.grafica2 = grafica2;
                }
                else if (hoyBi == ayerBi) {
                    resultado = 0;
                    var biAnual = resultado;
                    var datobiAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datobiAnual.biAnual = biAnual;
                    datobiAnual.biAnualD = 'sube';
                    datobiAnual.grafica2 = grafica2;
                }
            }
        });
    };
    ApiRobot.prototype.triAnual = function (tickerRecibido, array, mercado) {
        var _this = this;
        console.log('Empieza triAnual de ' + mercado);
        var resultado;
        var total;
        this._servicio1.getriAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo biAnual');
            }
            else {
                var hoyTri = parseFloat(result[0].adjusted_close);
                _this.contamosHoy = 0;
                while (hoyTri === 0 || hoyTri === null || hoyTri === undefined) {
                    _this.contamosHoy = _this.contamosHoy + 1;
                    hoyTri = parseFloat(result[_this.contamosHoy].adjusted_close);
                }
                var ayerTri = parseFloat(result[result.length - 1].adjusted_close);
                var grafica3 = ayerTri;
                _this.contamoss = 1;
                while (ayerTri === 0 || ayerTri === null || ayerTri === undefined) {
                    _this.contamoss = _this.contamoss + 1;
                    ayerTri = parseFloat(result[result.length - _this.contamoss].adjusted_close);
                }
                if (hoyTri > ayerTri) {
                    var cuentaResultado = hoyTri - ayerTri;
                    var comparacion = cuentaResultado / ayerTri;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var triAnual = resultado;
                    // Hago aquí el cambio
                    if (triAnual < 20000) {
                        var dameDatos = array.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        dameDatos.triAnual = triAnual;
                        dameDatos.triAnualD = 'sube';
                        dameDatos.grafica3 = grafica3;
                        if (tickerRecibido.indexOf('.LS') === -1 && tickerRecibido.indexOf('.BA') === -1 && tickerRecibido.indexOf('.TO') === -1 && tickerRecibido.indexOf('.ST') === -1 && tickerRecibido.indexOf('USD.CC') === -1 &&
                            tickerRecibido.indexOf('.VI') === -1 && tickerRecibido.indexOf('.BR') === -1 && tickerRecibido.indexOf('.SW') === -1 && tickerRecibido.indexOf('.CO') === -1 && tickerRecibido.indexOf('.OL') === -1 && tickerRecibido.indexOf('.SHG') === -1 &&
                            tickerRecibido.indexOf('.NSE') === -1 && tickerRecibido.indexOf('.SA') === -1 && tickerRecibido.indexOf('.MX') === -1 && tickerRecibido.indexOf('.MCX') === -1 && tickerRecibido != 'ES.PA' && tickerRecibido != 'TDW.US' &&
                            tickerRecibido != 'DIS.MI' && tickerRecibido != '1NVDA.MI' && tickerRecibido != 'NVD.XETRA' && tickerRecibido != '3LMS.PA' && tickerRecibido != 'TNK.US' && tickerRecibido != 'TLX.AU' && tickerRecibido != '3LSA.PA' && tickerRecibido != 'UCG.MI' &&
                            tickerRecibido != 'SLX.AU' && tickerRecibido != 'NRP.US' && tickerRecibido != 'XPBRA.MC' && tickerRecibido != 'HMSB.XETRA' && tickerRecibido != 'LLY.XETRA') {
                            var biAnual = dameDatos.biAnual;
                            var anual = dameDatos.anual;
                            var grafica18m = dameDatos.grafica18m;
                            var grafica23m = dameDatos.grafica23m;
                            var ayerBi = dameDatos.grafica2;
                            var ayer = dameDatos.grafica1;
                            var semestral = dameDatos.semestral;
                            var nombre = dameDatos.nombre;
                            var mensual = dameDatos.mensual;
                            var valor = dameDatos.valor;
                            var grafica6m = dameDatos.grafica6m;
                            if (biAnual > 150 && biAnual >= anual) {
                                if (triAnual > 300 && ayerTri < ayer) {
                                    // && tickerRecibido.indexOf('.AS') === -1 && anual > datoAnual.semestral && datoAnual.semestral > datoAnual.mensual && tickerRecibido.indexOf('.LS') === -1 && tickerRecibido.indexOf('.NSE') === -1 && tickerRecibido.indexOf('.SA') === -1 && tickerRecibido.indexOf('.MX') === -1 && tickerRecibido.indexOf('.MCX') === -1
                                    if (anual > 30 && anual < 600 && semestral < 330 && mensual < 120) {
                                        var stock = { nombre: nombre, ticker: tickerRecibido, icono: 'star-outline', moneda: 'EUR', valor: valor, grafica18m: grafica18m, grafica23m: grafica23m, grafica6m: grafica6m, grafica3: grafica3, grafica2: ayerBi, grafica1: ayer, anual: anual, semestral: semestral, mensual: mensual, biAnual: biAnual, triAnual: triAnual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de ' + mercado + ' agregada a Top Mundo');
                                                _this.contadorTopmundo = _this.contadorTopmundo + 1;
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        }
                    }
                }
                else if (hoyTri < ayerTri) {
                    var cuentaResultado = ayerTri - hoyTri;
                    var comparacion = cuentaResultado / ayerTri;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var triAnual = resultado;
                    var datoTriAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoTriAnual.triAnual = triAnual;
                    datoTriAnual.triAnualD = 'baja';
                    datoTriAnual.grafica3 = grafica3;
                }
                else if (hoyTri == ayerTri) {
                    resultado = 0;
                    var triAnual = resultado;
                    var datoTriAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoTriAnual.triAnual = triAnual;
                    datoTriAnual.triAnualD = 'sube';
                    datoTriAnual.grafica3 = grafica3;
                }
            }
        });
    };
    ApiRobot.prototype.datoGrafica1 = function (tickerRecibido, array, mercado) {
        var caca = mercado;
        this._servicio1.getDatoGrafica1(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo biAnual');
            }
            else {
                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                var grafica1 = ayerBi;
                var datoFalta = array.find(function (p) {
                    return p.ticker === tickerRecibido;
                });
                datoFalta.grafica18m = grafica1;
            }
        });
    };
    ApiRobot.prototype.datoGrafica2 = function (tickerRecibido, array, mercado) {
        var caca = mercado;
        this._servicio1.getDatoGrafica2(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo biAnual');
            }
            else {
                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                var grafica1 = ayerBi;
                var datoFalta = array.find(function (p) {
                    return p.ticker === tickerRecibido;
                });
                datoFalta.grafica23m = grafica1;
            }
        });
    };
    // Miramos el Semestral
    ApiRobot.prototype.semestral = function (tickerRecibido, array, mercado) {
        var _this = this;
        console.log('Empieza Semestral de ' + mercado);
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                _this.contamosHoy = 0;
                while (hoy === 0 || hoy === null || hoy === undefined) {
                    _this.contamosHoy = _this.contamosHoy + 1;
                    hoy = parseFloat(result[_this.contamosHoy].adjusted_close);
                }
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                var grafica6m = ayer;
                _this.contamoss = 1;
                while (ayer === 0 || ayer === null || ayer === undefined) {
                    _this.contamoss = _this.contamoss + 1;
                    ayer = parseFloat(result[result.length - _this.contamoss].adjusted_close);
                }
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    if (anual < 600) {
                        var datoAnual = array.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.semestral = anual;
                        datoAnual.semestralD = 'sube';
                        datoAnual.grafica6m = grafica6m;
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                    datoAnual.grafica6m = grafica6m;
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                    datoAnual.grafica6m = grafica6m;
                }
            }
        });
    };
    // Miramos el Anual
    ApiRobot.prototype.mensual = function (tickerRecibido, array, mercado) {
        var _this = this;
        console.log('Empieza mensual de ' + mercado);
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                console.log('DE DONDE VENDERA', result);
                console.log('No obtenemos resultado en el parseo Anual por lo que le damos valor 0');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                _this.contamosHoy = 0;
                while (hoy === 0 || hoy === null || hoy === undefined) {
                    _this.contamosHoy = _this.contamosHoy + 1;
                    hoy = parseFloat(result[_this.contamosHoy].adjusted_close);
                }
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                _this.contamoss = 1;
                while (ayer === 0 || ayer === null || ayer === undefined) {
                    _this.contamoss = _this.contamoss + 1;
                    ayer = parseFloat(result[result.length - _this.contamoss].adjusted_close);
                }
                //this.contamoss = this.contamoss + 1;
                //console.log('HOY',hoy,'Ayer',ayer,tickerRecibido,this.contamoss);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    if (anual < 300) {
                        var datoAnual = array.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.mensual = anual;
                    datoAnual.mensualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = array.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.mensual = anual;
                    datoAnual.mensualD = 'sube';
                }
            }
        });
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    ApiRobot.prototype.recopilarDatos = function (result, array) {
        var _loop_20 = function (stock) {
            var ticker;
            console.log('Recopilamos datos de este mercado');
            var nombre = stock.Name;
            if (stock.Exchange === 'ASX') {
                ticker = stock.Code + '.AU';
                console.log(ticker);
            }
            else {
                ticker = stock.Code + '.' + stock.Exchange;
            }
            var moneda = stock.Currency;
            var icono = 'star-outline';
            this_2._servicio1.seleccionarMas3(ticker).subscribe(function (result) {
                if (!result) {
                    console.log('No obtenemos resultados de acciones');
                }
                else {
                    var hoy = parseFloat(result.close); //[0] 
                    if (hoy > 3) {
                        array.push({
                            "nombre": nombre,
                            "ticker": ticker,
                            "moneda": moneda,
                            "valor": hoy,
                            "icono": icono,
                        });
                    }
                }
            });
        };
        var this_2 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_20(stock);
        }
    };
    ApiRobot.prototype.valor = function (ticker) {
        var _this = this;
        this
            ._servicio1
            .seleccionarMas3(ticker)
            .subscribe(function (result) {
            if (!result) {
                console.log('No obtenemos resultados de acciones');
            }
            else {
                var hoy = parseFloat(result.previousClose);
                if (ticker.indexOf('USD.CC') === -1) {
                    if (hoy < 3) {
                        for (var i = _this.mercadoAcciones.length - 1; i >= 0; i--) {
                            if (ticker === _this.mercadoAcciones[i].ticker) {
                                _this
                                    .mercadoAcciones
                                    .splice(i, 1); //this is the part where I 'delete' the object
                            }
                        }
                    }
                    else {
                        var datoAnual = _this
                            .mercadoAcciones
                            .find(function (p) {
                            return p.ticker === ticker;
                        });
                        datoAnual.valor = hoy;
                    }
                    // Si no es accion es cryptomoneda y pasamos de su valor monetario
                }
                else {
                    var datoAnual = _this
                        .mercadoCrypto
                        .find(function (p) {
                        return p.ticker === ticker;
                    });
                    datoAnual.valor = hoy;
                }
                //if(hoy > 3){}
            }
        });
    };
    ApiRobot.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    return ApiRobot;
}());
ApiRobot = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-apiRobot',
        template: __webpack_require__("../../../../../src/app/vistas/apiRobot.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */], __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_3__servicios_pipe__["a" /* Pipi */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object])
], ApiRobot);

var _a, _b;
//# sourceMappingURL=apiRobot.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/australia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Australia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Australia = (function () {
    function Australia(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top australia';
        this.arrayVisible = false;
    }
    Australia.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('australia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Australia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('AU').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(520000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(490000).then(function () {
                        _this._favoritoService.addPais(stock, 'australia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Australia agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Australia.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Australia.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Australia.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 3).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Australia.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'AUS', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'AUS', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Australia.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Australia.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Australia.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Australia.prototype.recopilarDatos = function (result) {
        var _this = this;
        var _loop_2 = function (stock) {
            console.log('Recopilamos datos del mercado Australiano');
            var nombre = stock.Name;
            var ticker = stock.Code + '.' + stock.Country;
            var moneda = stock.Currency;
            this_1._servicio1.seleccionarMas3(ticker).subscribe(function (result) {
                if (!result) {
                    alert('No obtenemos resultados de acciones');
                }
                else {
                    var hoy = parseFloat(result.close); //[0] 
                    if (hoy > 3) {
                        _this.datosFinales.push({
                            "nombre": nombre,
                            "ticker": ticker,
                            "moneda": moneda,
                            "valor": hoy
                        });
                    }
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Australia.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Australia.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Australia.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Australia;
}());
Australia = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-australia',
        template: __webpack_require__("../../../../../src/app/vistas/australia.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Australia);

var _a, _b, _c, _d;
//# sourceMappingURL=australia.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/austria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Austria; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Austria = (function () {
    function Austria(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Austria';
        this.arrayVisible = false;
    }
    Austria.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('austria')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Austria borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('VI').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(10000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(10000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(20000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(50000).then(function () {
                        _this._favoritoService.addPais(stock, 'austria').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Austria agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Austria.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Austria.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Austria.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Austria.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Austria.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Austria.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Austria.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Austria.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Austriaco');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Austria.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Austria.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Austria.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Austria;
}());
Austria = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-austria',
        template: __webpack_require__("../../../../../src/app/vistas/austria.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Austria);

var _a, _b, _c, _d;
//# sourceMappingURL=austria.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/belgica.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Belgica; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Belgica = (function () {
    function Belgica(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Belgica';
        this.arrayVisible = false;
    }
    Belgica.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('belgica')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Belgica borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('BR').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(20000).then(function () {
                var _loop_1 = function (stock) {
                    _this.sleep(30000).then(function () {
                        _this.mensual(stock.ticker);
                    });
                    _this.sleep(70000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(130000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(160000).then(function () {
                        _this._favoritoService.addPais(stock, 'belgica').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Belgica agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Belgica.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Belgica.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Belgica.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Belgica.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Belgica.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Belgica.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Belgica.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Belgica.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Belga');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Belgica.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Belgica.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Belgica.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Belgica;
}());
Belgica = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-belgica',
        template: __webpack_require__("../../../../../src/app/vistas/belgica.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Belgica);

var _a, _b, _c, _d;
//# sourceMappingURL=belgica.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/brasil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brasil; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Brasil = (function () {
    function Brasil(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Brasil';
        this.arrayVisible = false;
    }
    Brasil.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('brasil')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Brasil borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SA').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(80000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(80000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(160000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(240000).then(function () {
                        _this._favoritoService.addPais(stock, 'brasil').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Brasil agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Brasil.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Brasil.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Brasil.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Brasil.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                    if (anual > 80 && anual < 300) {
                        var stock = { nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'DolarBrasil', valor: datoAnual.valor, anual: anual, semestral: datoAnual.semestral, mensual: datoAnual.mensual };
                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Topmundo agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Brasil.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Brasil.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Brasil.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Brasil.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Brasileño');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Brasil.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Brasil.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Brasil.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Brasil;
}());
Brasil = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-brasil',
        template: __webpack_require__("../../../../../src/app/vistas/brasil.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Brasil);

var _a, _b, _c, _d;
//# sourceMappingURL=brasil.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/canada.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Canada; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Canada = (function () {
    function Canada(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Canada';
        this.arrayVisible = false;
    }
    Canada.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('canada')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Canada borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('TO').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(320000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'canada').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Canada agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Canada.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Canada.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Canada.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Canada.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'CanadaDOLAR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Canada.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Canada.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Canada.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Canada.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Canadiense');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Canada.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Canada.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Canada.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Canada;
}());
Canada = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-canada',
        template: __webpack_require__("../../../../../src/app/vistas/canada.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Canada);

var _a, _b, _c, _d;
//# sourceMappingURL=canada.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/china.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return China; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var China = (function () {
    function China(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top China';
        this.arrayVisible = false;
    }
    China.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('china')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de China borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SHG').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(320000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'china').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de China agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    China.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    China.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    China.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    China.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'CanadaDOLAR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'CanadaDOLAR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    China.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    China.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    China.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    China.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Chino');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    China.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    China.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    China.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return China;
}());
China = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-china',
        template: __webpack_require__("../../../../../src/app/vistas/china.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], China);

var _a, _b, _c, _d;
//# sourceMappingURL=china.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/dinamarca.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dinamarca; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Dinamarca = (function () {
    function Dinamarca(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Dinamarca';
        this.arrayVisible = false;
    }
    Dinamarca.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('dinamarca')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Dinamarca borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('CO').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(70000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(40000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(80000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(100000).then(function () {
                        _this._favoritoService.addPais(stock, 'dinamarca').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Dinamarca agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Dinamarca.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Dinamarca.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Dinamarca.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Dinamarca.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'CanadaDOLAR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'CanadaDOLAR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Dinamarca.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Dinamarca.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Dinamarca.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Dinamarca.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Danés');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Dinamarca.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Dinamarca.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Dinamarca.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Dinamarca;
}());
Dinamarca = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-dinamarca',
        template: __webpack_require__("../../../../../src/app/vistas/dinamarca.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Dinamarca);

var _a, _b, _c, _d;
//# sourceMappingURL=dinamarca.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/eeuu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EEUU; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var EEUU = (function () {
    function EEUU(_servicio1, _favoritoService, _route, _router
        // método: this._servicio1.agregarAApi(this.favorito);
    ) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.mercadoAcciones = [
            { icono: 'ios-star-outline', nombre: '3m Company', ticker: 'MMM.US' },
            { icono: 'ios-star-outline', nombre: 'Abbott Laboratories', ticker: 'ABT.US' },
            { icono: 'ios-star-outline', nombre: 'ABBVIE', ticker: 'ABBV.US' },
            { icono: 'ios-star-outline', nombre: 'Accenture PLC', ticker: 'ACN.US' },
            { icono: 'ios-star-outline', nombre: 'Activision Blizzard', ticker: 'ATVI.US' },
            { icono: 'ios-star-outline', nombre: 'Adobe Systems', ticker: 'ADBE.US' },
            { icono: 'ios-star-outline', nombre: 'Advanced Micro Devices', ticker: 'AMD.US' },
            { icono: 'ios-star-outline', nombre: 'AES Corp.', ticker: 'AES.US' },
            { icono: 'ios-star-outline', nombre: 'Aetna', ticker: 'AET.US' },
            { icono: 'ios-star-outline', nombre: 'Affiliated Managers Group', ticker: 'AMG.US' },
            { icono: 'ios-star-outline', nombre: 'AFLAC', ticker: 'AFL.US' },
            { icono: 'ios-star-outline', nombre: 'Agnc Investment', ticker: 'AGNC.US' },
            { icono: 'ios-star-outline', nombre: 'Agilent Technologies', ticker: 'A.US' },
            { icono: 'ios-star-outline', nombre: 'Akamai Technologies', ticker: 'AKAM.US' },
            { icono: 'ios-star-outline', nombre: 'Air Products & Chemicals', ticker: 'APD.US' },
            { icono: 'ios-star-outline', nombre: 'Alcoa', ticker: 'AA.US' },
            { icono: 'ios-star-outline', nombre: 'Alexion Pharmaceuticals', ticker: 'ALXN.US' },
            { icono: 'ios-star-outline', nombre: 'Alibaba Group Holding', ticker: 'BABA.US' },
            { icono: 'ios-star-outline', nombre: 'Allergan PLC', ticker: 'AGN.US' },
            { icono: 'ios-star-outline', nombre: 'Align Technology', ticker: 'ALGN.US' },
            { icono: 'ios-star-outline', nombre: 'Alnylam Pharmaceuticals', ticker: 'ALNY.US' },
            { icono: 'ios-star-outline', nombre: 'Allstate Corp.', ticker: 'ALL.US' },
            { icono: 'ios-star-outline', nombre: 'Allegion', ticker: 'ALLE.US' },
            { icono: 'ios-star-outline', nombre: 'Allergan', ticker: 'AGN.US' },
            { icono: 'ios-star-outline', nombre: 'Altria Group', ticker: 'MO.US' },
            { icono: 'ios-star-outline', nombre: 'Alliance Data Systems', ticker: 'ADS.US' },
            { icono: 'ios-star-outline', nombre: 'Alliant Energy', ticker: 'LNT.US' },
            { icono: 'ios-star-outline', nombre: 'Allstate', ticker: 'ALL.US' },
            { icono: 'ios-star-outline', nombre: 'Alphabet (Google)', ticker: 'GOOGL.US' },
            { icono: 'ios-star-outline', nombre: 'Advansix', ticker: 'ASIX.US' },
            { icono: 'ios-star-outline', nombre: 'Altaba', ticker: 'AABA.US' },
            { icono: 'ios-star-outline', nombre: 'Amazon', ticker: 'AMZN.US' },
            { icono: 'ios-star-outline', nombre: 'Ameren', ticker: 'AEE.US' },
            { icono: 'ios-star-outline', nombre: 'Ametek', ticker: 'AME.US' },
            { icono: 'ios-star-outline', nombre: 'Amphenol', ticker: 'APH.US' },
            { icono: 'ios-star-outline', nombre: 'American Airlines Group', ticker: 'AAL.US' },
            { icono: 'ios-star-outline', nombre: 'American Water Works Company', ticker: 'AWK.US' },
            { icono: 'ios-star-outline', nombre: 'American Electric Power', ticker: 'AEP.US' },
            { icono: 'ios-star-outline', nombre: 'American Express', ticker: 'AXP.US' },
            { icono: 'ios-star-outline', nombre: 'American International Group', ticker: 'AIG.US' },
            { icono: 'ios-star-outline', nombre: 'American Tower', ticker: 'AMT.US' },
            { icono: 'ios-star-outline', nombre: 'Ameriprise Financial', ticker: 'AMP.US' },
            { icono: 'ios-star-outline', nombre: 'AmerisourceBergen', ticker: 'ABC.US' },
            { icono: 'ios-star-outline', nombre: 'Amgen', ticker: 'AMGN.US' },
            { icono: 'ios-star-outline', nombre: 'Analog Devices', ticker: 'ADI.US' },
            { icono: 'ios-star-outline', nombre: 'Anadarko Petroleum', ticker: 'APC.US' },
            { icono: 'ios-star-outline', nombre: 'Analog Devices', ticker: 'ADI.US' },
            { icono: 'ios-star-outline', nombre: 'Andeavor', ticker: 'ANDV.US' },
            { icono: 'ios-star-outline', nombre: 'Anheuser-BUsch Inbev', ticker: 'BUD.US' },
            { icono: 'ios-star-outline', nombre: 'Anthem', ticker: 'ANTM.US' },
            { icono: 'ios-star-outline', nombre: 'ANSYS', ticker: 'ANSS.US' },
            { icono: 'ios-star-outline', nombre: 'Aon plc', ticker: 'AON.US' },
            { icono: 'ios-star-outline', nombre: 'Apache Corporation', ticker: 'APA.US' },
            { icono: 'ios-star-outline', nombre: 'Apple', ticker: 'AAPL.US' },
            { icono: 'ios-star-outline', nombre: 'Applied Materials', ticker: 'AMAT.US' },
            { icono: 'ios-star-outline', nombre: 'Arconic', ticker: 'ARNC.US' },
            { icono: 'ios-star-outline', nombre: 'Assurant', ticker: 'AIZ.US' },
            { icono: 'ios-star-outline', nombre: 'Arista Networks', ticker: 'ANET.US' },
            { icono: 'ios-star-outline', nombre: 'AT&T', ticker: 'T.US' },
            { icono: 'ios-star-outline', nombre: 'Asml Holding N.V.', ticker: 'ASML.US' },
            { icono: 'ios-star-outline', nombre: 'Autodesk', ticker: 'ADSK.US' },
            { icono: 'ios-star-outline', nombre: 'Automatic Data Processing', ticker: 'ADP.US' },
            { icono: 'ios-star-outline', nombre: 'Autozone', ticker: 'AZO.US' },
            { icono: 'ios-star-outline', nombre: 'Avis Budget Group', ticker: 'CAR.US' },
            { icono: 'ios-star-outline', nombre: 'AvalonBay Communities', ticker: 'AVB.US' },
            { icono: 'ios-star-outline', nombre: 'Alpha Metallurgical', ticker: 'AMR.US' },
            // BBBBBBBBBBBBBBBBBB
            { icono: 'ios-star-outline', nombre: 'Ball', ticker: 'BLL.US' },
            { icono: 'ios-star-outline', nombre: 'Baidu', ticker: 'BIDU.US' },
            { icono: 'ios-star-outline', nombre: 'Baker Hughes', ticker: 'BHGE.US' },
            { icono: 'ios-star-outline', nombre: 'Bank of America', ticker: 'BAC.US' },
            { icono: 'ios-star-outline', nombre: 'Bank of New York Mellon', ticker: 'BK.US' },
            { icono: 'ios-star-outline', nombre: 'Baozun', ticker: 'BZUN.US' },
            { icono: 'ios-star-outline', nombre: 'Bard', ticker: 'BCR.US' },
            { icono: 'ios-star-outline', nombre: 'Baxter International', ticker: 'BAX.US' },
            { icono: 'ios-star-outline', nombre: 'BB&T', ticker: 'BBT.US' },
            { icono: 'ios-star-outline', nombre: 'Bed Bath & Beyond', ticker: 'BBBY.US' },
            { icono: 'ios-star-outline', nombre: 'Becton Dickinson', ticker: 'BDX.US' },
            { icono: 'ios-star-outline', nombre: 'Berkshire Hathaway', ticker: 'BRK.B.US' },
            { icono: 'ios-star-outline', nombre: 'Best Buy.', ticker: 'BBY.US' },
            { icono: 'ios-star-outline', nombre: 'Biogen', ticker: 'BIIB.US' },
            { icono: 'ios-star-outline', nombre: 'Biomarin Pharmaceutical', ticker: 'BMRN.US' },
            { icono: 'ios-star-outline', nombre: 'Boeing Company', ticker: 'BA.US' },
            { icono: 'ios-star-outline', nombre: 'Blackrock', ticker: 'BLK.US' },
            { icono: 'ios-star-outline', nombre: 'Bluebird Bio', ticker: 'BLUE.US' },
            { icono: 'ios-star-outline', nombre: 'Boston Scientific', ticker: 'BSX.US' },
            { icono: 'ios-star-outline', nombre: 'BP P.L.C.', ticker: 'BP.US' },
            { icono: 'ios-star-outline', nombre: 'Bristol-Myers Squibb', ticker: 'BMY.US' },
            { icono: 'ios-star-outline', nombre: 'Brinks Company', ticker: 'BCO.US' },
            { icono: 'ios-star-outline', nombre: 'Broadcom LTD.', ticker: 'AVGO.US' },
            { icono: 'ios-star-outline', nombre: 'Broadsoft', ticker: 'BSFT.US' },
            { icono: 'ios-star-outline', nombre: 'Buffalo Wild Wings', ticker: 'BWLD.US' },
            { icono: 'ios-star-outline', nombre: 'BWX Technologies', ticker: 'BWXT.US' },
            { icono: 'ios-star-outline', nombre: 'Biontech Se.', ticker: 'BNTX.US' },
            // CCCCCCCCCCCCCCCCCC
            { icono: 'ios-star-outline', nombre: 'C.H. Robinson Worldwide', ticker: 'CHRW.US' },
            { icono: 'ios-star-outline', nombre: 'C.R. Bard', ticker: 'BCR.US' },
            { icono: 'ios-star-outline', nombre: 'Cadence Design Systems', ticker: 'CDNS.US' },
            { icono: 'ios-star-outline', nombre: 'Capital One Financial', ticker: 'COF.US' },
            { icono: 'ios-star-outline', nombre: 'Caesars Entertainment', ticker: 'CZR.US' },
            { icono: 'ios-star-outline', nombre: 'Cardinal Health', ticker: 'CAH.US' },
            { icono: 'ios-star-outline', nombre: 'Carnival', ticker: 'CCL.US' },
            { icono: 'ios-star-outline', nombre: 'Caterpillar', ticker: 'CAT.US' },
            { icono: 'ios-star-outline', nombre: 'Cavium', ticker: 'CAVM.US' },
            { icono: 'ios-star-outline', nombre: 'Cboe Global Markets', ticker: 'CBOE.US' },
            { icono: 'ios-star-outline', nombre: 'CBS', ticker: 'CBS.US' },
            { icono: 'ios-star-outline', nombre: 'CDK Global', ticker: 'CDK.US' },
            { icono: 'ios-star-outline', nombre: 'Celgene', ticker: 'CELG.US' },
            { icono: 'ios-star-outline', nombre: 'Centurylink', ticker: 'CTL.US' },
            { icono: 'ios-star-outline', nombre: 'Charles Schwab', ticker: 'SCHW.US' },
            { icono: 'ios-star-outline', nombre: 'Cerner', ticker: 'CERN.US' },
            { icono: 'ios-star-outline', nombre: 'Charter Communications', ticker: 'CHTR.US' },
            { icono: 'ios-star-outline', nombre: 'Check Point Software Technologies', ticker: 'CHKP.US' },
            { icono: 'ios-star-outline', nombre: 'Chevron', ticker: 'CVX.US' },
            { icono: 'ios-star-outline', nombre: 'Chipotle Mexican Grill', ticker: 'CMG.US' },
            { icono: 'ios-star-outline', nombre: 'China Lodging Group', ticker: 'HTHT.US' },
            { icono: 'ios-star-outline', nombre: 'Chubb LTD.', ticker: 'CB.US' },
            { icono: 'ios-star-outline', nombre: 'Cigna', ticker: 'CI.US' },
            { icono: 'ios-star-outline', nombre: 'Cintas', ticker: 'CTAS.US' },
            { icono: 'ios-star-outline', nombre: 'Cisco Systems', ticker: 'CSCO.US' },
            { icono: 'ios-star-outline', nombre: 'Citigroup', ticker: 'C.US' },
            { icono: 'ios-star-outline', nombre: 'Citizens Financial Group', ticker: 'CFG.US' },
            { icono: 'ios-star-outline', nombre: 'Citrix Systems', ticker: 'CTXS.US' },
            { icono: 'ios-star-outline', nombre: 'Clovis Oncology', ticker: 'CLVS.US' },
            { icono: 'ios-star-outline', nombre: 'CME Group', ticker: 'CME.US' },
            { icono: 'ios-star-outline', nombre: 'Coca-Cola', ticker: 'KO.US' },
            { icono: 'ios-star-outline', nombre: 'Colgate-Palmolive', ticker: 'CL.US' },
            { icono: 'ios-star-outline', nombre: 'Cognex', ticker: 'CGNX.US' },
            { icono: 'ios-star-outline', nombre: 'Cognizant Technology Solutions', ticker: 'CTSH.US' },
            { icono: 'ios-star-outline', nombre: 'Conocophillips', ticker: 'COP.US' },
            { icono: 'ios-star-outline', nombre: 'Comerica', ticker: 'CMA.US' },
            { icono: 'ios-star-outline', nombre: 'Conagra brands', ticker: 'CAG.US' },
            { icono: 'ios-star-outline', nombre: 'Concho Resources', ticker: 'CXO.US' },
            { icono: 'ios-star-outline', nombre: 'Cooper Companies', ticker: 'COO.US' },
            { icono: 'ios-star-outline', nombre: 'Coty', ticker: 'COTY.US' },
            { icono: 'ios-star-outline', nombre: 'CSRA', ticker: 'CSRA.US' },
            { icono: 'ios-star-outline', nombre: 'Coherent', ticker: 'COHR.US' },
            { icono: 'ios-star-outline', nombre: 'Comcast', ticker: 'CMCSA.US' },
            { icono: 'ios-star-outline', nombre: 'Commscope Holding', ticker: 'COMM.US' },
            { icono: 'ios-star-outline', nombre: 'Constellation Brands', ticker: 'STZ.US' },
            { icono: 'ios-star-outline', nombre: 'Costar Group', ticker: 'CSGP.US' },
            { icono: 'ios-star-outline', nombre: 'Costco Wholesale', ticker: 'COST.US' },
            { icono: 'ios-star-outline', nombre: 'Credit Acceptance', ticker: 'CACC.US' },
            { icono: 'ios-star-outline', nombre: 'Crown Castle International', ticker: 'CCI.US' },
            { icono: 'ios-star-outline', nombre: 'CSX', ticker: 'CSX.US' },
            { icono: 'ios-star-outline', nombre: 'Ctrip.com International', ticker: 'CTRP.US' },
            { icono: 'ios-star-outline', nombre: 'Cummins', ticker: 'CMI.US' },
            { icono: 'ios-star-outline', nombre: 'CVS Health', ticker: 'CVS.US' },
            { icono: 'ios-star-outline', nombre: 'Cypress Semiconductor', ticker: 'CY.US' },
            { icono: 'ios-star-outline', nombre: 'Consol Energy', ticker: 'CEIX.US' }, { icono: 'ios-star-outline', nombre: 'Crowstrikes Holdings', ticker: 'CRWD.US' },
            // DDDDDDDDDDDDDDDDDDDDD
            { icono: 'ios-star-outline', nombre: 'D.R. Horton', ticker: 'DHI.US' },
            { icono: 'ios-star-outline', nombre: 'Danaher', ticker: 'DHR.US' },
            { icono: 'ios-star-outline', nombre: 'Davita', ticker: 'DVA.US' },
            { icono: 'ios-star-outline', nombre: 'Dave & Busters Entertainment', ticker: 'PLAY.US' },
            { icono: 'ios-star-outline', nombre: 'Darden Restaurants', ticker: 'DRI.US' },
            { icono: 'ios-star-outline', nombre: 'Digital Realty Trust', ticker: 'DLR.US' },
            { icono: 'ios-star-outline', nombre: 'Deere & Company', ticker: 'DE.US' },
            { icono: 'ios-star-outline', nombre: 'Dentsply Sirona', ticker: 'XRAY.US' },
            { icono: 'ios-star-outline', nombre: 'Delphi Technologies', ticker: 'DLPH.US' },
            { icono: 'ios-star-outline', nombre: 'Delta Air Lines', ticker: 'DAL.US' },
            { icono: 'ios-star-outline', nombre: 'Devon Energy', ticker: 'DVN.US' },
            { icono: 'ios-star-outline', nombre: 'Dexcom', ticker: 'DXCM.US' },
            { icono: 'ios-star-outline', nombre: 'Discover Financial Services', ticker: 'DFS.US' },
            { icono: 'ios-star-outline', nombre: 'Diamondback Energy', ticker: 'FANG.US' },
            { icono: 'ios-star-outline', nombre: 'Discovery Communications', ticker: 'DISCA.US' },
            { icono: 'ios-star-outline', nombre: 'Dish Network', ticker: 'DISH.US' },
            { icono: 'ios-star-outline', nombre: 'Dollar General', ticker: 'DG.US' },
            { icono: 'ios-star-outline', nombre: 'Dominion Energy', ticker: 'D.US' },
            { icono: 'ios-star-outline', nombre: 'Dominos Pizza', ticker: 'DPZ.US' },
            { icono: 'ios-star-outline', nombre: 'Downdupont', ticker: 'DWDP.US' },
            { icono: 'ios-star-outline', nombre: 'Dover', ticker: 'DOV.US' },
            { icono: 'ios-star-outline', nombre: 'Dr Pepper Snapple Group', ticker: 'DPS.US' },
            { icono: 'ios-star-outline', nombre: 'Dollar Tree', ticker: 'DLTR.US' },
            { icono: 'ios-star-outline', nombre: 'Duke Energy', ticker: 'DUK.US' },
            { icono: 'ios-star-outline', nombre: 'Dxc Technology Company', ticker: 'DXC.US' },
            // EEEEEEEEEEEEEEEEEEEEEE 
            { icono: 'ios-star-outline', nombre: 'Eaton', ticker: 'ETN.US' },
            { icono: 'ios-star-outline', nombre: 'Ebay', ticker: 'EBAY.US' },
            { icono: 'ios-star-outline', nombre: 'Ecolab', ticker: 'ECL.US' },
            { icono: 'ios-star-outline', nombre: 'Edison International', ticker: 'EIX.US' },
            { icono: 'ios-star-outline', nombre: 'Edwards Lifesciences', ticker: 'EW.US' },
            { icono: 'ios-star-outline', nombre: 'Electronic Arts', ticker: 'EA.US' },
            { icono: 'ios-star-outline', nombre: 'Eli Lilly and Co.', ticker: 'LLY.US' }, { icono: 'ios-star-outline', nombre: 'Emerson Electric', ticker: 'EMR.US' },
            { icono: 'ios-star-outline', nombre: 'Entergy', ticker: 'ETR.US' }, { icono: 'ios-star-outline', nombre: 'Envision Healthcare Holdings', ticker: 'EVHC.US' },
            { icono: 'ios-star-outline', nombre: 'Enterprise Products Partners', ticker: 'EPD.US' }, { icono: 'ios-star-outline', nombre: 'Eog Resources', ticker: 'EOG.US' },
            { icono: 'ios-star-outline', nombre: 'EQT', ticker: 'EQT.US' }, { icono: 'ios-star-outline', nombre: 'Equifax', ticker: 'EFX.US' }, { icono: 'ios-star-outline', nombre: 'Equinix', ticker: 'EQIX.US' },
            { icono: 'ios-star-outline', nombre: 'Equity Residential', ticker: 'EQR.US' }, { icono: 'ios-star-outline', nombre: 'Essex Property Trust', ticker: 'ESS.US' },
            { icono: 'ios-star-outline', nombre: 'Estee Lauder Companies', ticker: 'EL.US' }, { icono: 'ios-star-outline', nombre: 'Everest Re Group', ticker: 'RE.US' },
            { icono: 'ios-star-outline', nombre: 'Eversource Energy', ticker: 'ES.US' }, { icono: 'ios-star-outline', nombre: 'Exelon', ticker: 'EXC.US' },
            { icono: 'ios-star-outline', nombre: 'Exact Sciences', ticker: 'EXAS.US' }, { icono: 'ios-star-outline', nombre: 'Expedia', ticker: 'EXPE.US' },
            { icono: 'ios-star-outline', nombre: 'Expeditors International ...', ticker: 'EXPD.US' }, { icono: 'ios-star-outline', nombre: 'Express Scripts Holding', ticker: 'ESRX.US' },
            { icono: 'ios-star-outline', nombre: 'Exxon Mobil', ticker: 'XOM.US' }, { icono: 'ios-star-outline', nombre: 'Extra Space Storage', ticker: 'EXR.US' },
            { icono: 'ios-star-outline', nombre: 'ETrade Financial', ticker: 'ETFC.US' },
            // FFFFFFFFFFFFFFFFFFFFFFF
            { icono: 'ios-star-outline', nombre: 'F5 Networks', ticker: 'FFIV.US' }, { icono: 'ios-star-outline', nombre: 'Facebook', ticker: 'FB.US' },
            { icono: 'ios-star-outline', nombre: 'Fastenal Company', ticker: 'FAST.US' }, { icono: 'ios-star-outline', nombre: 'Fifth Third Bancorp', ticker: 'FITB.US' },
            { icono: 'ios-star-outline', nombre: 'Fedex', ticker: 'FDX.US' }, { icono: 'ios-star-outline', nombre: 'Finisar', ticker: 'FNSR.US' }, { icono: 'ios-star-outline', nombre: 'First Solar', ticker: 'FSLR.US' },
            { icono: 'ios-star-outline', nombre: 'Fiserv', ticker: 'FISV.US' }, { icono: 'ios-star-outline', nombre: 'Five Below', ticker: 'FIVE.US' },
            { icono: 'ios-star-outline', nombre: 'Flir Systems', ticker: 'FLIR.US' }, { icono: 'ios-star-outline', nombre: 'Flowserve', ticker: 'FLS.US' },
            { icono: 'ios-star-outline', nombre: 'Fluor', ticker: 'FLR.US' }, { icono: 'ios-star-outline', nombre: 'FMC', ticker: 'FMC.US' },
            { icono: 'ios-star-outline', nombre: 'Foot Locker', ticker: 'FL.US' }, { icono: 'ios-star-outline', nombre: 'Fortive', ticker: 'FTV.US' },
            { icono: 'ios-star-outline', nombre: 'Ford Motor Company', ticker: 'F.US' }, { icono: 'ios-star-outline', nombre: 'FreePort-Mcmoran', ticker: 'FCX.US' },
            { icono: 'ios-star-outline', nombre: 'Fortune Brands', ticker: 'FBHS.US' }, { icono: 'ios-star-outline', nombre: 'Franklin Resources', ticker: 'BEN.US' },
            // GGGGGGGGGGGGGGGGGGGGGG 
            { icono: 'ios-star-outline', nombre: 'Gap', ticker: 'GPS.US' }, { icono: 'ios-star-outline', nombre: 'Garmin LTD.', ticker: 'GRMN.US' }, { icono: 'ios-star-outline', nombre: 'General Dynamics', ticker: 'GD.US' },
            { icono: 'ios-star-outline', nombre: 'Gartner', ticker: 'IT.US' }, { icono: 'ios-star-outline', nombre: 'Genuine Parts', ticker: 'GPC.US' },
            { icono: 'ios-star-outline', nombre: 'General Electric', ticker: 'GE.US' }, { icono: 'ios-star-outline', nombre: 'General Mills', ticker: 'GIS.US' },
            { icono: 'ios-star-outline', nombre: 'General Motors', ticker: 'GM.US' }, { icono: 'ios-star-outline', nombre: 'Glaxosmithkline PLC', ticker: 'GSK.US' },
            { icono: 'ios-star-outline', nombre: 'Gilead Sciences', ticker: 'GILD.US' }, { icono: 'ios-star-outline', nombre: 'GGP', ticker: 'GGP.US' },
            { icono: 'ios-star-outline', nombre: 'Goldman Sachs', ticker: 'GS.US' }, { icono: 'ios-star-outline', nombre: 'Global Payments', ticker: 'GPN.US' },
            { icono: 'ios-star-outline', nombre: 'Goodyear Tire Rubber', ticker: 'GT.US' },
            // HHHHHHHHHHHHHHHHHHHHHH
            { icono: 'ios-star-outline', nombre: 'Halliburton', ticker: 'HAL.US' }, { icono: 'ios-star-outline', nombre: 'Hca Healthcare', ticker: 'HCA.US' },
            { icono: 'ios-star-outline', nombre: 'Hasbro', ticker: 'HAS.US' }, { icono: 'ios-star-outline', nombre: 'HD Supply Holdings', ticker: 'HDS.US' },
            { icono: 'ios-star-outline', nombre: 'Hanesbrands', ticker: 'HBI.US' }, { icono: 'ios-star-outline', nombre: 'Harley-Davidson', ticker: 'HOG.US' },
            { icono: 'ios-star-outline', nombre: 'Harris', ticker: 'HRS.US' }, { icono: 'ios-star-outline', nombre: 'Hartford Financial Services Group', ticker: 'HIG.US' },
            { icono: 'ios-star-outline', nombre: 'HCP', ticker: 'HCP.US' }, { icono: 'ios-star-outline', nombre: 'Helmerich & Payne', ticker: 'HP.US' },
            { icono: 'ios-star-outline', nombre: 'Henry Schein', ticker: 'HSIC.US' }, { icono: 'ios-star-outline', nombre: 'Himax Technologies', ticker: 'HIMX.US' },
            { icono: 'ios-star-outline', nombre: 'Hess', ticker: 'HES.US' }, { icono: 'ios-star-outline', nombre: 'Hewlett Packard Enterprise', ticker: 'HPE.US' },
            { icono: 'ios-star-outline', nombre: 'Hilton', ticker: 'HLT.US' }, { icono: 'ios-star-outline', nombre: 'Hormel Foods', ticker: 'HRL.US' },
            { icono: 'ios-star-outline', nombre: 'Home Depot', ticker: 'HD.US' }, { icono: 'ios-star-outline', nombre: 'Host Marriott Financial Trust', ticker: 'HST.US' },
            { icono: 'ios-star-outline', nombre: 'Hologic', ticker: 'HOLX.US' }, { icono: 'ios-star-outline', nombre: 'Huntington Bancshares', ticker: 'HBAN.US' },
            { icono: 'ios-star-outline', nombre: 'Honeywell International', ticker: 'HON.US' }, { icono: 'ios-star-outline', nombre: 'HP', ticker: 'HPQ.US' },
            { icono: 'ios-star-outline', nombre: 'Humana', ticker: 'HUM.US' }, { icono: 'ios-star-outline', nombre: 'H&R Block', ticker: 'HRB.US' },
            // IIIIIIIIIIIIIIIIIIIIII
            { icono: 'ios-star-outline', nombre: 'Illinois Tool Works', ticker: 'ITW.US' }, { icono: 'ios-star-outline', nombre: 'Intercontinental Exchange', ticker: 'ICE.US' },
            { icono: 'ios-star-outline', nombre: 'International Business Machines (IBM)', ticker: 'IBM.US' }, { icono: 'ios-star-outline', nombre: 'Iac/Interactivecorp', ticker: 'IAC.US' },
            { icono: 'ios-star-outline', nombre: 'Idexx Laboratories', ticker: 'IDXX.US' }, { icono: 'ios-star-outline', nombre: 'IHS Markit', ticker: 'INFO.US' },
            { icono: 'ios-star-outline', nombre: 'Illumina', ticker: 'ILMN.US' }, { icono: 'ios-star-outline', nombre: 'Incyte', ticker: 'INCY.US' },
            { icono: 'ios-star-outline', nombre: 'Intel', ticker: 'INTC.US' }, { icono: 'ios-star-outline', nombre: 'Intuit', ticker: 'INTU.US' },
            { icono: 'ios-star-outline', nombre: 'Intuitive Surgical', ticker: 'ISRG.US' }, { icono: 'ios-star-outline', nombre: 'IPG Photonics', ticker: 'IPGP.US' },
            { icono: 'ios-star-outline', nombre: 'Irobot', ticker: 'IRBT.US' }, { icono: 'ios-star-outline', nombre: 'Invesco', ticker: 'IVZ.US' },
            { icono: 'ios-star-outline', nombre: 'International Flavors & Fragances', ticker: 'IFF.US' }, { icono: 'ios-star-outline', nombre: 'International Paper Company', ticker: 'IP.US' },
            { icono: 'ios-star-outline', nombre: 'Interpublic Group of Companies', ticker: 'IPG.US' },
            { icono: 'ios-star-outline', nombre: 'Iqvia Holdings', ticker: 'IQV.US' }, { icono: 'ios-star-outline', nombre: 'Iron Mountain', ticker: 'IRM.US' },
            // JJJJJJJJJJJJJJJJJJJJJJ
            { icono: 'ios-star-outline', nombre: 'Johnson & Johnson', ticker: 'JNJ.US' }, { icono: 'ios-star-outline', nombre: 'Johnson Controls International', ticker: 'JCI.US' },
            { icono: 'ios-star-outline', nombre: 'JP Morgan', ticker: 'JPM.US' }, { icono: 'ios-star-outline', nombre: 'J.B. Hunt Transport Services', ticker: 'JBHT.US' },
            { icono: 'ios-star-outline', nombre: 'Jack in the box', ticker: 'JACK.US' }, { icono: 'ios-star-outline', nombre: 'JD.COM', ticker: 'JD.US' },
            { icono: 'ios-star-outline', nombre: 'Jetblue Airways', ticker: 'JBLU.US' }, { icono: 'ios-star-outline', nombre: 'Juno Therapeurtics', ticker: 'JUNO.US' },
            { icono: 'ios-star-outline', nombre: 'Juniper Networks', ticker: 'JNPR.US' }, { icono: 'ios-star-outline', nombre: 'John Bean', ticker: 'JBT.US' },
            // KKKKKKKKKKKKKKKKKKKKK
            { icono: 'ios-star-outline', nombre: 'Kellogg', ticker: 'K.US' }, { icono: 'ios-star-outline', nombre: 'Keycorp', ticker: 'KEY.US' },
            { icono: 'ios-star-outline', nombre: 'Kimberly-Clark', ticker: 'KMB.US' }, { icono: 'ios-star-outline', nombre: 'Kinder Morgan', ticker: 'KMI.US' },
            { icono: 'ios-star-outline', nombre: 'Khol', ticker: 'KSS.US' }, { icono: 'ios-star-outline', nombre: 'Kroger', ticker: 'KR.US' },
            { icono: 'ios-star-outline', nombre: 'Kla-Tencor', ticker: 'KLAC.US' }, { icono: 'ios-star-outline', nombre: 'Kansas City Southern', ticker: 'KSU.US' },
            { icono: 'ios-star-outline', nombre: 'Kimco Realty', ticker: 'KIM.US' }, { icono: 'ios-star-outline', nombre: 'Kraft Heinz', ticker: 'KHC.US' },
            // LLLLLLLLLLLLLLLLLLLLLL
            { icono: 'ios-star-outline', nombre: 'L3 Communications', ticker: 'LLL.US' }, { icono: 'ios-star-outline', nombre: 'Laboratory Corporation of America', ticker: 'LH.US' },
            { icono: 'ios-star-outline', nombre: 'L Brands', ticker: 'LB.US' }, { icono: 'ios-star-outline', nombre: 'Las Vegas Sands', ticker: 'LVS.US' },
            { icono: 'ios-star-outline', nombre: 'Lam Research', ticker: 'LRCX.US' }, { icono: 'ios-star-outline', nombre: 'Lendingtree', ticker: 'TREE.US' },
            { icono: 'ios-star-outline', nombre: 'Leggett & Platt', ticker: 'LEG.US' }, { icono: 'ios-star-outline', nombre: 'Leucadia National', ticker: 'LUK.US' },
            { icono: 'ios-star-outline', nombre: 'Lennar Corp', ticker: 'LEN.US' }, { icono: 'ios-star-outline', nombre: 'Liberty Broadband', ticker: 'LBRDK.US' },
            { icono: 'ios-star-outline', nombre: 'Liberty Global PLC', ticker: 'LBTYK.US' }, { icono: 'ios-star-outline', nombre: 'Liberty Interactive', ticker: 'QVCA.US' },
            { icono: 'ios-star-outline', nombre: 'Lincoln National', ticker: 'LNC.US' }, { icono: 'ios-star-outline', nombre: 'Loews', ticker: 'L.US' },
            { icono: 'ios-star-outline', nombre: 'Lockheed Martin', ticker: 'LMT.US' }, { icono: 'ios-star-outline', nombre: 'Liberty Media', ticker: 'FWONK.US' },
            { icono: 'ios-star-outline', nombre: 'Lowe', ticker: 'LOW.US' }, { icono: 'ios-star-outline', nombre: 'Lyondellbasell Industries', ticker: 'LYB.US' },
            { icono: 'ios-star-outline', nombre: 'LKQ', ticker: 'LKQ.US' }, { icono: 'ios-star-outline', nombre: 'Lululemon Athletica', ticker: 'LULU.US' },
            { icono: 'ios-star-outline', nombre: 'Lumentum Holdings', ticker: 'LITE.US' },
            // MMMMMMMMMMMMMMMMMMMMMM
            { icono: 'ios-star-outline', nombre: 'Macys', ticker: 'M.US' }, { icono: 'ios-star-outline', nombre: 'Marathon Oil', ticker: 'MRO.US' },
            { icono: 'ios-star-outline', nombre: 'Marathon Petroleum', ticker: 'MPC.US' }, { icono: 'ios-star-outline', nombre: 'Marsh & Mclennan', ticker: 'MMC.US' },
            { icono: 'ios-star-outline', nombre: 'Marriott', ticker: 'MAR.US' }, { icono: 'ios-star-outline', nombre: 'Marvell Technology Group', ticker: 'MRVL.US' },
            { icono: 'ios-star-outline', nombre: 'Mastercard', ticker: 'MA.US' }, { icono: 'ios-star-outline', nombre: 'McDonalds', ticker: 'MCD.US' },
            { icono: 'ios-star-outline', nombre: 'Mattel', ticker: 'MAT.US' }, { icono: 'ios-star-outline', nombre: 'Maxim Integrated Products', ticker: 'MXIM.US' },
            { icono: 'ios-star-outline', nombre: 'Macerich', ticker: 'MAC.US' }, { icono: 'ios-star-outline', nombre: 'Martin Marietta', ticker: 'MLM.US' }, { icono: 'ios-star-outline', nombre: 'Masco', ticker: 'MAS.US' },
            { icono: 'ios-star-outline', nombre: 'McKesson', ticker: 'MCK.US' }, { icono: 'ios-star-outline', nombre: 'Medtronic', ticker: 'MDT.US' },
            { icono: 'ios-star-outline', nombre: 'Merck & Company', ticker: 'MRK.US' }, { icono: 'ios-star-outline', nombre: 'Metlife', ticker: 'MET.US' },
            { icono: 'ios-star-outline', nombre: 'Melco Resorts', ticker: 'MLCO.US' }, { icono: 'ios-star-outline', nombre: 'Mercadolibre', ticker: 'MELI.US' },
            { icono: 'ios-star-outline', nombre: 'Microchip Technology', ticker: 'MCHP.US' }, { icono: 'ios-star-outline', nombre: 'Micron Technology', ticker: 'MU.US' },
            { icono: 'ios-star-outline', nombre: 'Microsoft', ticker: 'MSFT.US' }, { icono: 'ios-star-outline', nombre: 'Michael Kors', ticker: 'KORS.US' },
            { icono: 'ios-star-outline', nombre: 'Momo', ticker: 'MOMO.US' }, { icono: 'ios-star-outline', nombre: 'Mohawk Industries', ticker: 'MHK.US' },
            { icono: 'ios-star-outline', nombre: 'MGM Resorts', ticker: 'MGM.US' }, { icono: 'ios-star-outline', nombre: 'Monsanto', ticker: 'MON.US' },
            { icono: 'ios-star-outline', nombre: 'Morgan Stanley', ticker: 'MS.US' }, { icono: 'ios-star-outline', nombre: 'Mondelez', ticker: 'MDLZ.US' },
            { icono: 'ios-star-outline', nombre: 'Monster Beverage', ticker: 'MNST.US' }, { icono: 'ios-star-outline', nombre: 'Mylan N.V.', ticker: 'MYL.US' },
            { icono: 'ios-star-outline', nombre: 'Molson Coors', ticker: 'TAP.US' }, { icono: 'ios-star-outline', nombre: 'Moodys', ticker: 'MCO.US' },
            { icono: 'ios-star-outline', nombre: 'Mosaic', ticker: 'MOS.US' }, { icono: 'ios-star-outline', nombre: 'Motorola', ticker: 'MSI.US' }, { icono: 'ios-star-outline', nombre: 'Moderna INC.', ticker: 'MRNA.US' },
            // NNNNNNNNNNNNNNNNNNNNNN
            { icono: 'ios-star-outline', nombre: 'Nasdaq', ticker: 'NDAQ.US' }, { icono: 'ios-star-outline', nombre: 'Nektar Therapeutics', ticker: 'NKTR.US' },
            { icono: 'ios-star-outline', nombre: 'National-Oilwell', ticker: 'NOV.US' }, { icono: 'ios-star-outline', nombre: 'Navient', ticker: 'NAVI.US' },
            { icono: 'ios-star-outline', nombre: 'Netapp', ticker: 'NTAP.US' }, { icono: 'ios-star-outline', nombre: 'Netease', ticker: 'NTES.US' },
            { icono: 'ios-star-outline', nombre: 'Netflix', ticker: 'NFLX.US' }, { icono: 'ios-star-outline', nombre: 'Newell Brands', ticker: 'NWL.US' },
            { icono: 'ios-star-outline', nombre: 'Newmont Mining', ticker: 'NEM.US' }, { icono: 'ios-star-outline', nombre: 'Nextera Energy', ticker: 'NEE.US' },
            { icono: 'ios-star-outline', nombre: 'NiSource', ticker: 'NI.US' }, { icono: 'ios-star-outline', nombre: 'Noble Energy', ticker: 'NBL.US' },
            { icono: 'ios-star-outline', nombre: 'Nike', ticker: 'NKE.US' }, { icono: 'ios-star-outline', nombre: 'Northern Trust', ticker: 'NTRS.US' },
            { icono: 'ios-star-outline', nombre: 'Norfolk Southern', ticker: 'NSC.US' }, { icono: 'ios-star-outline', nombre: 'Northrop Grumman', ticker: 'NOC.US' },
            { icono: 'ios-star-outline', nombre: 'Nordstrom', ticker: 'JWN.US' }, { icono: 'ios-star-outline', nombre: 'NRG Energy', ticker: 'NRG.US' },
            { icono: 'ios-star-outline', nombre: 'Nucor', ticker: 'NUE.US' }, { icono: 'ios-star-outline', nombre: 'Nutanix', ticker: 'NTNX.US' },
            { icono: 'ios-star-outline', nombre: 'Nvidia', ticker: 'NVDA.US' }, { icono: 'ios-star-outline', nombre: 'NXP Semiconductors', ticker: 'NXPI.US' },
            // OOOOOOOOOOOOOOOOOOOOOO
            { icono: 'ios-star-outline', nombre: 'O Reilly Automotiv', ticker: 'ORLY.US' }, { icono: 'ios-star-outline', nombre: 'Old Dominion Freight Line', ticker: 'ODFL.US' }, { icono: 'ios-star-outline', nombre: 'On Semiconductor', ticker: 'ON.US' }, { icono: 'ios-star-outline', nombre: 'Overstock.com', ticker: 'OSTK.US' },
            { icono: 'ios-star-outline', nombre: 'Occidental Petroleum', ticker: 'OXY.US' }, { icono: 'ios-star-outline', nombre: 'Omnicom Group', ticker: 'OMC.US' }, { icono: 'ios-star-outline', nombre: 'Oracle', ticker: 'ORCL.US' }, { icono: 'ios-star-outline', nombre: 'Oneok', ticker: 'OKE.US' },
            // PPPPPPPPPPPPPPPPPPPPPP
            { icono: 'ios-star-outline', nombre: 'Paccar', ticker: 'PCAR.US' }, { icono: 'ios-star-outline', nombre: 'Patterson-uti Energy', ticker: 'PTEN.US' }, { icono: 'ios-star-outline', nombre: 'Paychex', ticker: 'PAYX.US' }, { icono: 'ios-star-outline', nombre: 'Paypal Holdings', ticker: 'PYPL.US' },
            { icono: 'ios-star-outline', nombre: 'Pacific Gas & Electric', ticker: 'PCG.US' }, { icono: 'ios-star-outline', nombre: 'Pfizer', ticker: 'PFE.US' }, { icono: 'ios-star-outline', nombre: 'Philip Morris', ticker: 'PM.US' }, { icono: 'ios-star-outline', nombre: 'Phillips 66', ticker: 'PSX.US' },
            { icono: 'ios-star-outline', nombre: 'Pepsico', ticker: 'PEP.US' }, { icono: 'ios-star-outline', nombre: 'Pioneer Natural resources', ticker: 'PXD.US' }, { icono: 'ios-star-outline', nombre: 'PNC Financial Services', ticker: 'PNC.US' },
            { icono: 'ios-star-outline', nombre: 'Pentair', ticker: 'PNR.US' }, { icono: 'ios-star-outline', nombre: 'Perkinelmer', ticker: 'PKI.US' }, { icono: 'ios-star-outline', nombre: 'Perrigo', ticker: 'PRGO.US' }, { icono: 'ios-star-outline', nombre: 'Pinacle West Capital', ticker: 'PNW.US' },
            { icono: 'ios-star-outline', nombre: 'PPL', ticker: 'PPL.US' }, { icono: 'ios-star-outline', nombre: 'Praxair', ticker: 'PX.US' }, { icono: 'ios-star-outline', nombre: 'Procter & Gamble', ticker: 'PG.US' }, { icono: 'ios-star-outline', nombre: 'Prudential Financial', ticker: 'PRU.US' },
            { icono: 'ios-star-outline', nombre: 'Public Service Enterprise Group', ticker: 'PEG.US' }, { icono: 'ios-star-outline', nombre: 'Public Storage', ticker: 'PSA.US' }, { icono: 'ios-star-outline', nombre: 'Puma Biotechnology', ticker: 'PBYI.US' },
            { icono: 'ios-star-outline', nombre: 'Priceline', ticker: 'PCLN.US' }, { icono: 'ios-star-outline', nombre: 'Pultegroup', ticker: 'PHM.US' },
            // QQQQQQQQQQQQQQQQQQQQQQ
            { icono: 'ios-star-outline', nombre: 'Qorvo', ticker: 'QRVO.US' }, { icono: 'ios-star-outline', nombre: 'Qualcomm', ticker: 'QCOM.US' },
            { icono: 'ios-star-outline', nombre: 'Quanta Services', ticker: 'PWR.US' }, { icono: 'ios-star-outline', nombre: 'Quests Diagnostics', ticker: 'DGX.US' },
            // RRRRRRRRRRRRRRRRRRRRRR
            { icono: 'ios-star-outline', nombre: 'Raytheon', ticker: 'RTN.US' }, { icono: 'ios-star-outline', nombre: 'Ralph Lauren', ticker: 'RL.US' },
            { icono: 'ios-star-outline', nombre: 'Range Resources', ticker: 'RRC.US' }, { icono: 'ios-star-outline', nombre: 'Raymond James Financial', ticker: 'RJF.US' },
            { icono: 'ios-star-outline', nombre: 'Realty Income', ticker: 'O.US' }, { icono: 'ios-star-outline', nombre: 'Republic Services', ticker: 'RSG.US' },
            { icono: 'ios-star-outline', nombre: 'Regeneron Pharmaceuticals', ticker: 'REGN.US' }, { icono: 'ios-star-outline', nombre: 'Riot Blockchain', ticker: 'RIOT.US' },
            { icono: 'ios-star-outline', nombre: 'Roku', ticker: 'ROKU.US' }, { icono: 'ios-star-outline', nombre: 'Ross Stores', ticker: 'ROST.US' },
            { icono: 'ios-star-outline', nombre: 'Red Hat', ticker: 'RHT.US' }, { icono: 'ios-star-outline', nombre: 'Regions Financial', ticker: 'RF.US' },
            { icono: 'ios-star-outline', nombre: 'Resmed', ticker: 'RMD.US' }, { icono: 'ios-star-outline', nombre: 'Robert Half International', ticker: 'RHI.US' },
            { icono: 'ios-star-outline', nombre: 'Royal Caribbean Cruises', ticker: 'RCL.US' }, { icono: 'ios-star-outline', nombre: 'Royal Dutch Shell', ticker: 'RDS.A.US' },
            { icono: 'ios-star-outline', nombre: 'Rockwell Automation', ticker: 'ROK.US' }, { icono: 'ios-star-outline', nombre: 'Rockwell Collins', ticker: 'COL.US' },
            { icono: 'ios-star-outline', nombre: 'Roper Industries', ticker: 'ROP.US' },
            // SSSSSSSSSSSSSSSSSSSSS
            { icono: 'ios-star-outline', nombre: 'S&P Global', ticker: 'SPGI.US' }, { icono: 'ios-star-outline', nombre: 'Salesforce.com', ticker: 'CRM.US' },
            { icono: 'ios-star-outline', nombre: 'Sage Therapeutics', ticker: 'SAGE.US' }, { icono: 'ios-star-outline', nombre: 'Sanderson Farms', ticker: 'SAFM.US' },
            { icono: 'ios-star-outline', nombre: 'Sarepta Therapeutics', ticker: 'SRPT.US' }, { icono: 'ios-star-outline', nombre: 'SBA Communications', ticker: 'SBAC.US' },
            { icono: 'ios-star-outline', nombre: 'Scripps Networks Interactive', ticker: 'SNI.US' }, { icono: 'ios-star-outline', nombre: 'Seagate Technology', ticker: 'STX.US' },
            { icono: 'ios-star-outline', nombre: 'Schlumberger', ticker: 'SLB.US' }, { icono: 'ios-star-outline', nombre: 'Sempra Energy', ticker: 'SRE.US' },
            { icono: 'ios-star-outline', nombre: 'Servicenow', ticker: 'NOW.US' }, { icono: 'ios-star-outline', nombre: 'Sherwin-Williams', ticker: 'SHW.US' },
            { icono: 'ios-star-outline', nombre: 'Shire PLC', ticker: 'SHPG.US' }, { icono: 'ios-star-outline', nombre: 'Sina', ticker: 'SINA.US' },
            { icono: 'ios-star-outline', nombre: 'Sirius XM Holdings', ticker: 'SIRI.US' }, { icono: 'ios-star-outline', nombre: 'Skyworks Solutions', ticker: 'SWKS.US' },
            { icono: 'ios-star-outline', nombre: 'Splunk', ticker: 'SPLK.US' }, { icono: 'ios-star-outline', nombre: 'Starbucks', ticker: 'SBUX.US' },
            { icono: 'ios-star-outline', nombre: 'Simon Property Group', ticker: 'SPG.US' }, { icono: 'ios-star-outline', nombre: 'Snap', ticker: 'SNAP.US' },
            { icono: 'ios-star-outline', nombre: 'Southern Company', ticker: 'SO.US' }, { icono: 'ios-star-outline', nombre: 'Southwest Airlines', ticker: 'LUV.US' },
            { icono: 'ios-star-outline', nombre: 'Square', ticker: 'SQ.US' }, { icono: 'ios-star-outline', nombre: 'State Street', ticker: 'STT.US' },
            { icono: 'ios-star-outline', nombre: 'Stryker', ticker: 'SYK.US' }, { icono: 'ios-star-outline', nombre: 'Suntrust Banks', ticker: 'STI.US' },
            { icono: 'ios-star-outline', nombre: 'Synchrony Financial', ticker: 'SYF.US' }, { icono: 'ios-star-outline', nombre: 'Sysco', ticker: 'SYY.US' },
            { icono: 'ios-star-outline', nombre: 'Steel Dynamics', ticker: 'STLD.US' }, { icono: 'ios-star-outline', nombre: 'SVB Financial Group', ticker: 'SIVB.US' },
            { icono: 'ios-star-outline', nombre: 'Symantec', ticker: 'SYMC.US' }, { icono: 'ios-star-outline', nombre: 'Synopsys', ticker: 'SNPS.US' },
            { icono: 'ios-star-outline', nombre: 'Scana', ticker: 'SCG.US' }, { icono: 'ios-star-outline', nombre: 'SPX', ticker: 'SPXC.US' }, { icono: 'ios-star-outline', nombre: 'Shopify', ticker: 'SHOP.US' },
            { icono: 'ios-star-outline', nombre: 'Shockwave Medical', ticker: 'SWAV.US' }, { icono: 'ios-star-outline', nombre: 'Sigma Lithium', ticker: 'SGML.US' }, { icono: 'ios-star-outline', nombre: 'SEA LTD.', ticker: 'SE.US' },
            // TTTTTT
            { icono: 'ios-star-outline', nombre: 'Tapestry', ticker: 'TPR.US' }, { icono: 'ios-star-outline', nombre: 'Taiwan Semiconductor', ticker: 'TSM.US' },
            { icono: 'ios-star-outline', nombre: 'Target', ticker: 'TGT.US' }, { icono: 'ios-star-outline', nombre: 'Te Connectivity', ticker: 'TEL.US' },
            { icono: 'ios-star-outline', nombre: 'Take-Two Interactive Software', ticker: 'TTWO.US' }, { icono: 'ios-star-outline', nombre: 'TD Ameritrade Holding', ticker: 'AMTD.US' },
            { icono: 'ios-star-outline', nombre: 'Technipfmc', ticker: 'FTI.US' }, { icono: 'ios-star-outline', nombre: 'Texas Instruments', ticker: 'TXN.US' },
            { icono: 'ios-star-outline', nombre: 'Textron', ticker: 'TXT.US' }, { icono: 'ios-star-outline', nombre: 'Teva Pharmaceutical', ticker: 'TEVA.US' },
            { icono: 'ios-star-outline', nombre: 'Thermo Fisher Scientific', ticker: 'TMO.US' }, { icono: 'ios-star-outline', nombre: 'Time Warner', ticker: 'TWX.US' },
            { icono: 'ios-star-outline', nombre: 'TJX Companies', ticker: 'TJX.US' }, { icono: 'ios-star-outline', nombre: 'Twitter', ticker: 'TWTR.US' },
            { icono: 'ios-star-outline', nombre: 'Tyson Foods', ticker: 'TSN.US' }, { icono: 'ios-star-outline', nombre: 'T. Rowe Price Group', ticker: 'TROW.US' },
            { icono: 'ios-star-outline', nombre: 'T-Mobile US', ticker: 'TMUS.US' }, { icono: 'ios-star-outline', nombre: 'The goodyear Tire & Rubber', ticker: 'GT.US' },
            { icono: 'ios-star-outline', nombre: 'Tesla', ticker: 'TSLA.US' }, { icono: 'ios-star-outline', nombre: 'The Kraft Heinz', ticker: 'KHC.US' },
            { icono: 'ios-star-outline', nombre: 'The Middleby', ticker: 'MIDD.US' }, { icono: 'ios-star-outline', nombre: 'The Priceline Group', ticker: 'PCLN.US' },
            { icono: 'ios-star-outline', nombre: 'Tractor Supply', ticker: 'TSCO.US' }, { icono: 'ios-star-outline', nombre: 'Tripadvisor', ticker: 'TRIP.US' },
            { icono: 'ios-star-outline', nombre: 'Twenty-First Century Fox', ticker: 'FOX.US' },
            { icono: 'ios-star-outline', nombre: 'The Aes Corp', ticker: 'AES.US' }, { icono: 'ios-star-outline', nombre: 'Tiffany & Co.', ticker: 'TIF.US' },
            { icono: 'ios-star-outline', nombre: 'Torchmark', ticker: 'TMK.US' }, { icono: 'ios-star-outline', nombre: 'Total System Services', ticker: 'TSS.US' },
            // UUUUUU
            { icono: 'ios-star-outline', nombre: 'U.S. Bancorp', ticker: 'USB.US' }, { icono: 'ios-star-outline', nombre: 'Union Pacific', ticker: 'UNP.US' },
            { icono: 'ios-star-outline', nombre: 'United Continental Holdings', ticker: 'UAL.US' }, { icono: 'ios-star-outline', nombre: 'United Parcel Service', ticker: 'UPS.US' },
            { icono: 'ios-star-outline', nombre: 'United Rentals', ticker: 'URI.US' }, { icono: 'ios-star-outline', nombre: 'United States Steel', ticker: 'X.US' },
            { icono: 'ios-star-outline', nombre: 'United Technologies', ticker: 'UTX.US' }, { icono: 'ios-star-outline', nombre: 'Unitedhealth Group', ticker: 'UNH.US' },
            { icono: 'ios-star-outline', nombre: 'Ulta Beauty', ticker: 'ULTA.US' }, { icono: 'ios-star-outline', nombre: 'Universal Display', ticker: 'OLED.US' },
            { icono: 'ios-star-outline', nombre: 'Urban Outfitters', ticker: 'URBN.US' }, { icono: 'ios-star-outline', nombre: 'Under Armour', ticker: 'UAA.US' },
            // VVVVVV
            { icono: 'ios-star-outline', nombre: 'V.F.', ticker: 'VFC.US' }, { icono: 'ios-star-outline', nombre: 'Vale S.A.', ticker: 'VALE.US' },
            { icono: 'ios-star-outline', nombre: 'Valeant Pharmaceuticals', ticker: 'VRX.US' }, { icono: 'ios-star-outline', nombre: 'Valero Energy', ticker: 'VLO.US' },
            { icono: 'ios-star-outline', nombre: 'Vantiv', ticker: 'VNTV.US' }, { icono: 'ios-star-outline', nombre: 'Verizon Communications', ticker: 'VZ.US' },
            { icono: 'ios-star-outline', nombre: 'Visa', ticker: 'V.US' }, { icono: 'ios-star-outline', nombre: 'Vmware', ticker: 'VMW.US' }, { icono: 'ios-star-outline', nombre: 'Vedanta', ticker: 'VEDL.US' },
            { icono: 'ios-star-outline', nombre: 'Vulcan Materials', ticker: 'VMC.US' }, { icono: 'ios-star-outline', nombre: 'Vertex Pharmaceuticals', ticker: 'VRTX.US' },
            { icono: 'ios-star-outline', nombre: 'Verisign', ticker: 'VRSN.US' }, { icono: 'ios-star-outline', nombre: 'Verisk Analytics', ticker: 'VRSK.US' },
            { icono: 'ios-star-outline', nombre: 'Viacom', ticker: 'VIAB.US' }, { icono: 'ios-star-outline', nombre: 'Vodafone', ticker: 'VOD.US' },
            // WWWWWW
            { icono: 'ios-star-outline', nombre: 'Wal-Mart Stores', ticker: 'WMT.US' }, { icono: 'ios-star-outline', nombre: 'Walt Disney', ticker: 'DIS.US' },
            { icono: 'ios-star-outline', nombre: 'Wells Fargo', ticker: 'WFC.US' }, { icono: 'ios-star-outline', nombre: 'Walgreens Boots Alliance', ticker: 'WBA.US' },
            { icono: 'ios-star-outline', nombre: 'Wendys', ticker: 'WEN.US' }, { icono: 'ios-star-outline', nombre: 'Western Digital', ticker: 'WDC.US' },
            { icono: 'ios-star-outline', nombre: 'Willis Towers Watson Public', ticker: 'WLTW.US' }, { icono: 'ios-star-outline', nombre: 'Workday', ticker: 'WDAY.US' },
            { icono: 'ios-star-outline', nombre: 'Wynn Resorts', ticker: 'WYNN.US' }, { icono: 'ios-star-outline', nombre: 'Weibo', ticker: 'WB.US' },
            // XXXXXX
            { icono: 'ios-star-outline', nombre: 'Xcel Energy', ticker: 'XEL.US' }, { icono: 'ios-star-outline', nombre: 'Xilinx', ticker: 'XLNX.US' },
            { icono: 'ios-star-outline', nombre: 'Xunlei', ticker: 'XNET.US' }, { icono: 'ios-star-outline', nombre: 'Xerox', ticker: 'XRX.US' },
            { icono: 'ios-star-outline', nombre: 'XL Company Switzerland', ticker: 'XL.US' }, { icono: 'ios-star-outline', nombre: 'Xylem', ticker: 'XYL.US' },
            // ZZZZZZ
            { icono: 'ios-star-outline', nombre: 'Zimmer Biomet Holdings', ticker: 'ZBH.US' }, { icono: 'ios-star-outline', nombre: 'Zions Bancorp', ticker: 'ZION.US' },
            { icono: 'ios-star-outline', nombre: 'Yandex', ticker: 'YNDX.US' }, { icono: 'ios-star-outline', nombre: 'YY Inc.', ticker: 'YY.US' },
            { icono: 'ios-star-outline', nombre: 'Yum! brands', ticker: 'YUM.US' }, { icono: 'ios-star-outline', nombre: 'Zoetis', ticker: 'ZTS.US' },
        ];
        this.titulo = 'Top EEUU';
    }
    EEUU.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('eeuu')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        ;
        console.log('API de EEUU borrada');
        var _loop_1 = function (stock) {
            this_1.sleep(5000)
                .then(function () {
                _this.valor(stock.ticker);
            });
            this_1.sleep(150000)
                .then(function () {
                _this.mensual(stock.ticker);
            });
            this_1.sleep(300000)
                .then(function () {
                _this.semestral(stock.ticker);
            });
            this_1.sleep(450000)
                .then(function () {
                _this.anual(stock.ticker);
            });
            this_1.sleep(600000)
                .then(function () {
                console.log(stock);
                _this
                    ._favoritoService
                    .addPais(stock, 'eeuu')
                    .subscribe(function (response) {
                    if (!response) {
                        console.log('error al recibir confirmacion de guardado');
                    }
                    else {
                        console.log('Información de EEUU agregada a base de datos');
                    }
                }, function (error) {
                    console.log('Error al guardar datos');
                });
            });
        };
        var this_1 = this;
        // Recopilamos datos anual, semestral y mensual
        for (var _i = 0, _a = this.mercadoAcciones; _i < _a.length; _i++) {
            var stock = _a[_i];
            _loop_1(stock);
        }
        console.log(this.mercadoAcciones);
    };
    EEUU.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    EEUU.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    // Miramos el Anual
    EEUU.prototype.anual = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this
            ._servicio1
            .getAnual(tickerRecibido)
            .subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    console.log(datoAnual_1.nombre);
                    /*if(datoAnual.nombre.indexOf('Square') != -1){
                    console.log(anual);
                    console.log(datoAnual.semestral);
                    console.log(datoAnual.mensual);
                    if (anual > datoAnual.semestral){
                        console.log('anual mayor que semestral si')
                    }
                    if (datoAnual.semestral > datoAnual.mensual){
                        console.log('semestral mayor que mensual si')
                    }
                    if (anual > 70){
                        console.log('cumple anual si')
                    }
                    if (anual < 300){
                        console.log('cumple anual si')
                    }
                    if (anual < 300){
                        console.log('cumple semestral si')
                    }
                    }
                    
                    if(anual > 70 && anual < 500 && datoAnual.semestral < 300 && datoAnual.mensual < 70 && anual > datoAnual.semestral && datoAnual.semestral > datoAnual.mensual){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                    if (anual_1 > 70 && anual_1 < 500 && datoAnual_1.semestral < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    EEUU.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this
            ._servicio1
            .getSemestral(tickerRecibido)
            .subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    EEUU.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this
            ._servicio1
            .getMensual(tickerRecibido)
            .subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this
                            .mercadoAcciones
                            .find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this
                            .mercadoAcciones
                            .find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this
                            .mercadoAcciones
                            .find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    EEUU.prototype.valor = function (ticker) {
        var _this = this;
        this
            ._servicio1
            .seleccionarMas3(ticker)
            .subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultados de acciones');
            }
            else {
                var hoy = parseFloat(result.previousClose);
                if (hoy < 3) {
                    for (var i = _this.mercadoAcciones.length - 1; i >= 0; i--) {
                        if (ticker === _this.mercadoAcciones[i].ticker) {
                            _this
                                .mercadoAcciones
                                .splice(i, 1); //this is the part where I 'delete' the object
                        }
                    }
                }
                else {
                    var datoAnual = _this
                        .mercadoAcciones
                        .find(function (p) {
                        return p.ticker === ticker;
                    });
                    datoAnual.valor = hoy;
                }
                //if(hoy > 3){}
            }
        });
    };
    /*
    valor(ticker) {
        this
            ._servicio1
            .seleccionarMas3(ticker)
            .subscribe(result => {
                if (!result) {
                    alert('No obtenemos resultados de acciones')
                } else {
                    let hoy = parseFloat(result.close);

                    if (hoy < 3) {
                        for (let i = this.mercadoAcciones.length - 1; i >= 0; i--) {
                            if (ticker === this.mercadoAcciones[i].ticker) {
                                this
                                    .mercadoAcciones
                                    .splice(i, 1); //this is the part where I 'delete' the object
                            }
                        }
                    } else if (hoy > 3) {
                        let datoAnual = this
                            .mercadoAcciones
                            .find((p) => {
                                return p.ticker === ticker;
                            });
                        datoAnual.valor = hoy;
                    }
                    //if(hoy > 3){}
                }
            },);
    } */
    // Aquí creamos el array de objetos final que luego leemos en el html
    EEUU.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    return EEUU;
}());
EEUU = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-eeuu',
        template: __webpack_require__("../../../../../src/app/vistas/eeuu.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], EEUU);

var _a, _b, _c, _d;
//# sourceMappingURL=eeuu.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/espana.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Espana; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router
// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Espana = (function () {
    function Espana(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.titulo = 'Top España';
        this.arrayVisible = false;
    }
    Espana.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('espana')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Espana borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MC').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            console.log(_this.datosFinales);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(20000).then(function () {
                var _loop_1 = function (stock) {
                    _this.sleep(30000).then(function () {
                        _this.mensual(stock.ticker);
                    });
                    _this.sleep(70000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(130000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(160000).then(function () {
                        console.log(stock, 'Esto es lo que sube');
                        _this._favoritoService.addPais(stock, 'espana').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de España agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Espana.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Espana.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    // Miramos el Anual
    Espana.prototype.anual = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        console.log(stock);
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Espana.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Espana.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Espana.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Espana.prototype.recopilarDatos = function (result) {
        var _this = this;
        var _loop_2 = function (stock) {
            console.log(stock);
            console.log('Recopilamos datos del mercado Español');
            var nombre = stock.Name;
            var ticker = stock.Code + '.' + stock.Exchange;
            // aquí cambio la plataforma Country por Exchange
            var moneda = stock.Currency;
            var icono = 'ios-star-outline';
            this_1._servicio1.seleccionarMas3(ticker).subscribe(function (result) {
                if (!result) {
                    alert('No obtenemos resultados de acciones');
                }
                else {
                    var hoy = parseFloat(result.close); //[0] 
                    if (hoy > 3) {
                        _this.datosFinales.push({
                            "nombre": nombre,
                            "ticker": ticker,
                            "moneda": moneda,
                            "valor": hoy,
                            "icono": icono
                        });
                    }
                    else { }
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Espana.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Espana.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Espana.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Espana;
}());
Espana = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-espana',
        template: __webpack_require__("../../../../../src/app/vistas/espana.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_3__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Espana);

var _a, _b, _c, _d;
//# sourceMappingURL=espana.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/francia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Francia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Francia = (function () {
    function Francia(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Francia';
        this.arrayVisible = false;
    }
    Francia.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('francia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Francia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('PA').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(350000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'francia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Francia agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Francia.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Francia.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Francia.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Francia.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Francia.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Francia.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Francia.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Francia.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Francés');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Francia.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Francia.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Francia.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Francia;
}());
Francia = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-francia',
        template: __webpack_require__("../../../../../src/app/vistas/francia.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Francia);

var _a, _b, _c, _d;
//# sourceMappingURL=francia.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/holanda.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holanda; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Holanda = (function () {
    function Holanda(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Holanda';
        this.arrayVisible = false;
    }
    Holanda.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('holanda')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Holanda borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('AS').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            _this.sleep(120000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(200000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this._favoritoService.addPais(stock, 'holanda').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Holanda agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Holanda.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Holanda.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Holanda.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Holanda.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Holanda.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Holanda.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Holanda.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Holanda.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Holandés');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Holanda.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Holanda.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Holanda.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Holanda;
}());
Holanda = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-holanda',
        template: __webpack_require__("../../../../../src/app/vistas/holanda.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Holanda);

var _a, _b, _c, _d;
//# sourceMappingURL=holanda.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importamos servicio y modelo

/* barchart
import * as fs from 'fs';
import * as csvParser from 'csv-parser'; */
var Home = (function () {
    function Home(_servicio1, _apiServicio) {
        this._servicio1 = _servicio1;
        this._apiServicio = _apiServicio;
        this.title = 'Aplicación Parseadora de Bolsa';
        /* Actúa como programador. Trabajando en entorno Angular/CLI:1.4 y escribiendo el código en TYPESCRIPT. Quiero que el código lea datos contenidos en 3 archivos CSV. Datos que se distribuyen acumulados en una sola celda por cada fila con esta estructura "","","","","". Primero leemos el primer archivo CSV y creamos un array que contenga los tres primeros datos "","","" de cada celda de este CSV. Si en el siguiente CSV leído encontramos la misma coincidencia en el primer parámetro que en el primer parámetro de cada registro de nuestro array le agregamos el tercer parámetro de la celda de este CSV como un cuarto parámetro al registro del array en la cuarta posición: "","","","". Luego leemos el tercer CSV y si encontramos coincidencia en el primer parámetro del CSV con cada primer parámetro del registro de nuestro array, le agregamos un quinto parámetro al array con el tercer parámetro de la celda del CSV leído: "","","","","". Finalmente los registros en el array que hayan recibido datos de los 3 CSV los imprimimos con un CONSOLE.LOG()
        interface Record {
            firstParam: string;
            secondParam: string;
            thirdParam: string;
            fourthParam?: string;
            fifthParam?: string;
          }
          
          let records: Record[] = [];
          
          // Leemos el primer archivo CSV y creamos el array
          fs.createReadStream('archivo1.csv')
            .pipe(csvParser())
            .on('data', (data: any) => {
              // Obtenemos los tres primeros parámetros de cada celda
              let firstParam : string = data['']?.split(',')[0].trim();
              let secondParam : string = data['']?.split(',')[1].trim();
              let thirdParam : string = data['']?.split(',')[2].trim();
              records.push({ firstParam, secondParam, thirdParam });
            })
            .on('end', () => {
              // Leemos el segundo archivo CSV y agregamos el cuarto parámetro al array
              fs.createReadStream('archivo2.csv')
                .pipe(csvParser())
                .on('data', (data: any) => {
                  let firstParam : string = data['']?.split(',')[0].trim();
                  let thirdParam : string = data['']?.split(',')[2].trim();
                  records.forEach((record) => {
                    if (record.firstParam === firstParam) {
                      record.fourthParam = thirdParam;
                    }
                  });
                })
                .on('end', () => {
                  // Leemos el tercer archivo CSV y agregamos el quinto parámetro al array
                  fs.createReadStream('archivo3.csv')
                    .pipe(csvParser())
                    .on('data', (data: any) => {
                      let firstParam : string = data['']?.split(',')[0].trim();
                      let thirdParam : string= data['']?.split(',')[2].trim();
                      records.forEach((record) => {
                        if (record.firstParam === firstParam) {
                          record.fifthParam = thirdParam;
                        }
                      });
                    })
                    .on('end', () => {
                      // Imprimimos los registros que tienen los 5 parámetros
                      records
                        .filter(
                          (record) =>
                            record.fourthParam !== undefined && record.fifthParam !== undefined
                        )
                        .forEach((record) => {
                          console.log(record);
                        });
                    });
                });
            });*/
    }
    Home.prototype.ngOnInit = function () {
    };
    return Home;
}());
Home = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-home',
        template: __webpack_require__("../../../../../src/app/vistas/home.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */], __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object])
], Home);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/india.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return India; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var India = (function () {
    function India(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top India';
        this.arrayVisible = false;
    }
    India.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('india')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de India borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('NSE').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(120000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(200000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this._favoritoService.addPais(stock, 'india').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de India agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    India.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    India.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    India.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    India.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'DolarIndio', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    India.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    India.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    India.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    India.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado indio');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    India.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    India.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    India.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return India;
}());
India = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-india',
        template: __webpack_require__("../../../../../src/app/vistas/india.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], India);

var _a, _b, _c, _d;
//# sourceMappingURL=india.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/italia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Italia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


/* // Busca en el array y borra el resultado
for (let i = this.datosFinales.length - 1; i >= 0; i--) {
   if (ticker === this.datosFinales[i].ticker) {
       this.datosFinales.splice(i, 1);   //this is the part where I 'delete' the object
   }
 } */
var Italia = (function () {
    function Italia(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        //para pipe
        // para contador de bucle
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Italia';
        this.arrayVisible = false;
    }
    Italia.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('italia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Italia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MI').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(210000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'italia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Italia agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Italia.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Italia.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Italia.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Italia.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Italia.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Italia.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Italia.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Italia.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado Italiano');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Italia.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Italia.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Italia.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Italia;
}());
Italia = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-italia',
        template: __webpack_require__("../../../../../src/app/vistas/italia.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Italia);

var _a, _b, _c, _d;
//# sourceMappingURL=italia.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/mexico.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mexico; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Mexico = (function () {
    function Mexico(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Mexico';
        this.arrayVisible = false;
    }
    Mexico.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('mexico')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Mexico borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MX').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(300000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(450000).then(function () {
                        _this._favoritoService.addPais(stock, 'mexico').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Mexico agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Mexico.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Mexico.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Mexico.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Mexico.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'DolarMexicano', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'DolarMexicano', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Mexico.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Mexico.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Mexico.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Mexico.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado mexicano');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Mexico.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Mexico.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Mexico.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Mexico;
}());
Mexico = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-mexico',
        template: __webpack_require__("../../../../../src/app/vistas/mexico.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Mexico);

var _a, _b, _c, _d;
//# sourceMappingURL=mexico.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/noruega.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noruega; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Noruega = (function () {
    function Noruega(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Noruega';
        this.arrayVisible = false;
    }
    Noruega.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('noruega')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Noruega borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('OL').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            _this.sleep(80000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(80000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(160000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(230000).then(function () {
                        _this._favoritoService.addPais(stock, 'noruega').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Noruega agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Noruega.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Noruega.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Noruega.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Noruega.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Noruega.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Noruega.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Noruega.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Noruega.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado noruego');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Noruega.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Noruega.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Noruega.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Noruega;
}());
Noruega = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-noruega',
        template: __webpack_require__("../../../../../src/app/vistas/noruega.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Noruega);

var _a, _b, _c, _d;
//# sourceMappingURL=noruega.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/portugal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portugal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Portugal = (function () {
    function Portugal(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Portugal';
        this.arrayVisible = false;
    }
    Portugal.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('portugal')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Portugal borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('LS').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            _this.sleep(10000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(10000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(20000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(30000).then(function () {
                        _this._favoritoService.addPais(stock, 'portugal').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Portugal agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Portugal.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Portugal.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Portugal.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Portugal.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Portugal.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Portugal.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Portugal.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Portugal.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado portugués');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Portugal.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Portugal.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Portugal.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Portugal;
}());
Portugal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-portugal',
        template: __webpack_require__("../../../../../src/app/vistas/portugal.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Portugal);

var _a, _b, _c, _d;
//# sourceMappingURL=portugal.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/recomendadas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modelos_recomendadas__ = __webpack_require__("../../../../../src/app/modelos/recomendadas.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recomendadas; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 



var Recomendadas = (function () {
    function Recomendadas(_favoritoService, _route, _router) {
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.titulo = 'Recomendadas';
        this.getAcciones();
    }
    Recomendadas.prototype.ngOnInit = function () {
        this.favorito = new __WEBPACK_IMPORTED_MODULE_6__modelos_recomendadas__["a" /* RecomendadasModelo */]("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    };
    Recomendadas.prototype.getAcciones = function () {
        var _this = this;
        this._favoritoService.getAcciones().subscribe(function (result) {
            console.log(result);
            _this.accionesTraidas = result.acciones;
            console.log('Recomendadas: ');
            console.log(_this.accionesTraidas);
            if (!_this.accionesTraidas) {
                alert('Error en el servidor');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log('Error en la petición');
            }
        });
    };
    Recomendadas.prototype.onBorraraccion = function (id) {
        var _this = this;
        this._favoritoService.deleteAccion(id).subscribe(function (result) {
            if (!result.message) {
                alert('Error en la petición');
            }
            _this.getAcciones();
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error borrando accion');
            }
        });
    };
    Recomendadas.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.favorito);
        this._favoritoService.addAcciones(this.favorito).subscribe(function (response) {
            if (!response) {
                alert('Error en el servidor');
            }
            else {
                _this.favorito = response;
                console.log(response);
                _this._router.navigate(['/recomendadas']);
                alert('Nueva acción añadida, actualice el navegador para verla');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error guardando datos en base de datos');
            }
        });
    };
    return Recomendadas;
}());
Recomendadas = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-recomendadas',
        template: __webpack_require__("../../../../../src/app/vistas/recomendadas.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], Recomendadas);

var _a, _b, _c;
//# sourceMappingURL=recomendadas.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/rusia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rusia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Rusia = (function () {
    function Rusia(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Rusia';
        this.arrayVisible = false;
    }
    Rusia.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('rusia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Rusia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('MCX').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(200000).then(function () {
                var _loop_1 = function (stock) {
                    //this.sleep(100000).then(() => {
                    _this.mensual(stock.ticker);
                    //});
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(240000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(360000).then(function () {
                        _this._favoritoService.addPais(stock, 'rusia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Rusia agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                // Recopilamos datos anual, semetral y mensual
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Rusia.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Rusia.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Rusia.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Rusia.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'ZAR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'ZAR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Rusia.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Rusia.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Rusia.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Rusia.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado ruso');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Rusia.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Rusia.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Rusia.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Rusia;
}());
Rusia = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-rusia',
        template: __webpack_require__("../../../../../src/app/vistas/rusia.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Rusia);

var _a, _b, _c, _d;
//# sourceMappingURL=rusia.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/suecia.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Suecia; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Suecia = (function () {
    function Suecia(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Suecia';
        this.arrayVisible = false;
    }
    Suecia.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('suecia')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Suecia borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('ST').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            _this.sleep(300000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(150000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(300000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(450000).then(function () {
                        _this._favoritoService.addPais(stock, 'suecia').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Suecia agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Suecia.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Suecia.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Suecia.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Suecia.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Suecia.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Suecia.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Suecia.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Suecia.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado sueco');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Suecia.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Suecia.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Suecia.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Suecia;
}());
Suecia = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-suecia',
        template: __webpack_require__("../../../../../src/app/vistas/suecia.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Suecia);

var _a, _b, _c, _d;
//# sourceMappingURL=suecia.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/suiza.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Suiza; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var Suiza = (function () {
    function Suiza(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top Suiza';
        this.arrayVisible = false;
    }
    Suiza.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('suiza')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de Suiza borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('SW').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(350000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(120000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(240000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(360000).then(function () {
                        _this._favoritoService.addPais(stock, 'suiza').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de Suiza agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    Suiza.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    Suiza.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    Suiza.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 4).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    Suiza.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    Suiza.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    Suiza.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    Suiza.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    Suiza.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 2).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado suizo');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    Suiza.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    Suiza.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    Suiza.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return Suiza;
}());
Suiza = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-suiza',
        template: __webpack_require__("../../../../../src/app/vistas/suiza.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], Suiza);

var _a, _b, _c, _d;
//# sourceMappingURL=suiza.js.map

/***/ }),

/***/ "../../../../../src/app/componentes/uk.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__ = __webpack_require__("../../../../../src/app/servicios/pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_api__ = __webpack_require__("../../../../../src/app/servicios/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__ = __webpack_require__("../../../../../src/app/servicios/servicio1.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UK; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // fundamental para funcionar con router

// Importamos servicio y modelo 


var UK = (function () {
    function UK(_servicio1, _favoritoService, _route, _router) {
        this._servicio1 = _servicio1;
        this._favoritoService = _favoritoService;
        this._route = _route;
        this._router = _router;
        this.isDesc = false;
        this.column = 'anual';
        this.reverse = false;
        this.order = 'anual';
        this.datosFinales = [];
        this.terminoMensual = false;
        this.terminoAnual = false;
        this.terminoSemestral = false;
        this.titulo = 'Top UK';
        this.arrayVisible = false;
    }
    UK.prototype.ngOnInit = function () {
        var _this = this;
        this
            ._favoritoService
            .deletePais('uk')
            .subscribe(function (result) {
            console.log(result);
            if (!result) {
                alert('Error al borrar');
            }
        });
        console.log('API de UK borrada');
        // Aquí le pasamos el mercado que queremos parsear
        this._servicio1.getModelos('LSE').subscribe(function (result) {
            _this.modelos = result;
            _this.recopilarDatos(result);
            // Esperamos que seleccione los mayores de 3
            _this.sleep(450000).then(function () {
                var _loop_1 = function (stock) {
                    _this.mensual(stock.ticker);
                    _this.sleep(170000).then(function () {
                        _this.semestral(stock.ticker);
                    });
                    _this.sleep(340000).then(function () {
                        _this.anual(stock.ticker);
                    });
                    _this.sleep(500000).then(function () {
                        _this._favoritoService.addPais(stock, 'uk').subscribe(function (response) {
                            if (!response) {
                                console.log('error al recibir confirmacion de guardado');
                            }
                            else {
                                console.log('Información de UK agregada a base de datos');
                            }
                        }, function (error) {
                            console.log('Error al guardar datos');
                        });
                    });
                };
                for (var _i = 0, _a = _this.datosFinales; _i < _a.length; _i++) {
                    var stock = _a[_i];
                    _loop_1(stock);
                }
            });
            console.log(_this.datosFinales);
            if (!_this.modelos) {
                alert('Error en la petición de datos de este mercado');
            }
        }, function (error) {
            _this.errorMen = error;
            if (_this.errorMen != null) {
                console.log(_this.errorMen);
                alert('Error en la peticion2');
            }
        });
    };
    UK.prototype.sleep = function (time) {
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    UK.prototype.ordenar = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    UK.prototype.formatearNombre = function (valor) {
        var nombreBien;
        nombreBien = valor.split(' ').slice(0, 3).join(' ');
        return nombreBien;
    };
    // Miramos el Anual
    UK.prototype.anual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza anual');
        var resultado;
        var total;
        this._servicio1.getAnual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual_1 = resultado;
                    var datoAnual_1 = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual_1.anual = anual_1;
                    datoAnual_1.anualD = 'sube';
                    if (anual_1 > 70 && anual_1 < 400) {
                        // Aquí metemos el nuevo código del biAnual
                        _this._servicio1.getbiAnual(tickerRecibido).subscribe(function (result) {
                            if (!result) {
                                alert('No obtenemos resultado en el parseo BiAnual');
                            }
                            else {
                                var hoyBi = parseFloat(result[0].adjusted_close);
                                var ayerBi = parseFloat(result[result.length - 1].adjusted_close);
                                if (hoyBi > ayerBi) {
                                    var cuentaResultado_1 = hoyBi - ayerBi;
                                    var comparacion_1 = cuentaResultado_1 / ayerBi;
                                    total = comparacion_1 * 100;
                                    resultado = parseInt(total);
                                    var biAnual = resultado;
                                    if (biAnual > 150 && biAnual > anual_1) {
                                        var stock = { nombre: datoAnual_1.nombre, ticker: tickerRecibido, moneda: 'EUR', valor: datoAnual_1.valor, anual: anual_1, semestral: datoAnual_1.semestral, mensual: datoAnual_1.mensual };
                                        _this._favoritoService.addPais(stock, 'topmundo').subscribe(function (response) {
                                            if (!response) {
                                                console.log('error al recibir confirmacion de guardado');
                                            }
                                            else {
                                                console.log('Información de Topmundo agregada a base de datos');
                                            }
                                        }, function (error) {
                                            console.log('Error al guardar datos');
                                        });
                                    }
                                }
                            }
                        });
                        // Aquí termina el nuevo código del bianual
                    }
                    /*if(anual > 80 && anual < 300){
                        let stock ={nombre: datoAnual.nombre, ticker: tickerRecibido, moneda: 'LIBRAS', valor: datoAnual.valor, anual: anual,semestral: datoAnual.semestral,mensual: datoAnual.mensual};
                        this._favoritoService.addPais(stock,'topmundo').subscribe(
                            response =>{
                                if(!response){
                                    console.log('error al recibir confirmacion de guardado');
                                }
                                else{
                                    console.log('Información de Topmundo agregada a base de datos');
                                }
                            },
                            error =>{
                                console.log('Error al guardar datos')
                            }
                        );
                    }*/
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.anual = anual;
                    datoAnual.anualD = 'sube';
                }
            }
        });
    };
    // Miramos el Semestral
    UK.prototype.semestral = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza Semestral');
        var resultado;
        var total;
        this._servicio1.getSemestral(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > ayer) {
                    var cuentaResultado = hoy - ayer;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = parseInt(total);
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
                else if (hoy < ayer) {
                    var cuentaResultado = ayer - hoy;
                    var comparacion = cuentaResultado / ayer;
                    total = comparacion * 100;
                    resultado = -(parseInt(total));
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'baja';
                }
                else if (hoy == ayer) {
                    resultado = 0;
                    var anual = resultado;
                    var datoAnual = _this.datosFinales.find(function (p) {
                        return p.ticker === tickerRecibido;
                    });
                    datoAnual.semestral = anual;
                    datoAnual.semestralD = 'sube';
                }
            }
        });
    };
    // Miramos el Anual
    UK.prototype.mensual = function (tickerRecibido) {
        var _this = this;
        console.log('Empieza mensual');
        var resultado;
        var total;
        this._servicio1.getMensual(tickerRecibido).subscribe(function (result) {
            if (!result) {
                alert('No obtenemos resultado en el parseo Anual');
            }
            else {
                var hoy = parseFloat(result[0].adjusted_close);
                var ayer = parseFloat(result[result.length - 1].adjusted_close);
                if (hoy > 2 && ayer > 2) {
                    if (hoy > ayer) {
                        var cuentaResultado = hoy - ayer;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = parseInt(total);
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                    else if (hoy < ayer) {
                        var cuentaResultado = ayer - hoy;
                        var comparacion = cuentaResultado / ayer;
                        total = comparacion * 100;
                        resultado = -(parseInt(total));
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'baja';
                    }
                    else if (hoy == ayer) {
                        resultado = 0;
                        var anual = resultado;
                        var datoAnual = _this.datosFinales.find(function (p) {
                            return p.ticker === tickerRecibido;
                        });
                        datoAnual.mensual = anual;
                        datoAnual.mensualD = 'sube';
                    }
                }
            }
        });
    };
    UK.prototype.valor = function (ticker) {
    };
    // Aquí creamos el array de objetos final que luego leemos en el html
    UK.prototype.recopilarDatos = function (result) {
        var _this = this;
        var arrayComprueba = [];
        var _loop_2 = function (stock) {
            var nombreComprobar = stock.Name.split(' ').slice(0, 1).join(' ');
            if (arrayComprueba.indexOf(nombreComprobar) === -1) {
                arrayComprueba.push(nombreComprobar);
                console.log('Recopilamos datos del mercado inglés');
                var nombre_1 = stock.Name;
                var ticker_1 = stock.Code + '.' + stock.Country;
                var moneda_1 = stock.Currency;
                this_1._servicio1.seleccionarMas3(ticker_1).subscribe(function (result) {
                    if (!result) {
                        alert('No obtenemos resultados de acciones');
                    }
                    else {
                        var hoy = parseFloat(result.close); //[0] 
                        if (hoy > 3) {
                            _this.datosFinales.push({
                                "nombre": nombre_1,
                                "ticker": ticker_1,
                                "moneda": moneda_1,
                                "valor": hoy
                            });
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var stock = result_1[_i];
            _loop_2(stock);
        }
    };
    UK.prototype.parseFloat = function (value) {
        var decimales = parseFloat(value).toFixed(1);
        return decimales;
    };
    UK.prototype.mostrarArray = function () {
        this.arrayVisible = true;
    };
    UK.prototype.ocultarArray = function () {
        this.arrayVisible = false;
    };
    return UK;
}());
UK = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'etiqueta-uk',
        template: __webpack_require__("../../../../../src/app/vistas/uk.html"),
        styles: [__webpack_require__("../../../../../src/app/css/styles.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */], __WEBPACK_IMPORTED_MODULE_1__servicios_pipe__["a" /* Pipi */], __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__servicios_servicio1__["a" /* Servicio1 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicios_api__["a" /* ApiServicio */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UK);

var _a, _b, _c, _d;
//# sourceMappingURL=uk.js.map

/***/ }),

/***/ "../../../../../src/app/css/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.bordeNegro {\n    border: 5px solid black;\n}\n\n.bordeVerde {\n    border: 5px solid green;\n}\n\n.rojo {\n    color: red;\n}\n\n.verde {\n    color: green;\n}\n\n.izquierda {\n    float: left;\n    width: 48%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 48%;\n    text-transform: uppercase;\n}\n\n.derecha {\n    float: right;\n    text-align: left;\n    width: 49%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: uppercase;\n}\n\n#customers {\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n}\n\n#customers td, #customers th {\n    border: 1px solid #ddd;\n    text-align: left;\n    padding: 8px;\n    width: 49%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: uppercase;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    background-color: #4CAF50;\n    color: white;\n}\n\n.contenedor {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    width: 100%;\n    margin: 0 auto;\n    height: 100%;\n    font-size: 11px;\n}\n\n.pointer {\n    cursor: pointer;\n}\n\n.centrar {\n    width: 50%;\n    margin: 0 auto;\n}\n\n.clearfix {\n    float: none;\n    clear: both;\n    text-decoration: none;\n    list-style: none;\n}\n\n.container {\n    margin: 0 auto;\n    background: #eee;\n}\n\n/* Código según gpt para un div recortarlo en 300px y terminar las letras con ... */\n.accor{\n    font-weight: bold;\n    \n}\n.asesor {\n    width: 100%;\n    float: none;\n    clear: both;\n}\n\n#content {\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n    margin: 0px auto;\n    /*margin-top: 20px;\n    /*border: 1px solid #ccc;\n    border-radius: 5px;\n    box-shadow: 0px 0px 5px #ddd;\n    */\n    background: #eee;\n}\n\nheader {\n    padding: 15px;\n    background: #229138;\n}\n\nheader .title-subtitle {\n    border-bottom: 1px solid white;\n    border-top: 1px solid white;\n    color: white;\n    padding: 7px;\n}\n\nheader h1,\nheader p {\n    margin: 0px;\n    margin-left: 15px;\n    color: white;\n}\n\nheader .title-subtitle a {\n    text-decoration: none;\n    color: white;\n}\n\nheader .title-subtitle a:hover {\n    text-decoration: underline;\n}\n\nheader p {\n    color: #ddd;\n}\n\nheader #logo {\n    width: 50px;\n    display: block;\n    float: left;\n    margin-top: 25px;\n}\n\n.btn {\n    font-size: 13px;\n    border: 1px solid #ccc;\n    border-color: #1976d2;\n    border-radius: 4px;\n    box-shadow: 0px 0px 5px #ddd;\n    padding: 5px;\n    text-decoration: none;\n    color: white;\n    background: #0074d9;\n    cursor: pointer;\n    margin-left: 5px;\n}\n\n.btn-editar {\n    background: #0A0;\n    border-color: #59a600;\n}\n\n.btn-eliminar {\n    background: rgb(170, 0, 0);\n    border-color: #a6001c;\n}\n\n.btn-ver {\n    background: black;\n    border-color: black;\n}\n\n#acciones-list {\n    padding: 0px;\n    margin: 0 px;\n}\n\n.accion-item {\n    list-style: none;\n    width: 31%;\n    border: 1px solid #ddd;\n    float: left;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 5px;\n    color: gray;\n    background: #eee;\n    margin: 10px;\n}\n\n.recomendadas {\n    padding: 1%;\n}\n\n.accion-cabecera {\n    list-style: none;\n    width: 47%;\n    border: 1px solid #ddd;\n    float: left;\n    padding-top: 20px;\n    padding-left: 5px;\n    padding-bottom: 20px;\n    color: gray;\n    background: rgb(212, 244, 204);\n    margin: 10px;\n}\n\n.accion-item .content-data .accion-cabecera {\n    float: left;\n    margin-left: 20px;\n}\n\n.mayusculas {\n    font-weight: bold;\n    text-transform: uppercase;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modelos/recomendadas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendadasModelo; });
var RecomendadasModelo = (function () {
    function RecomendadasModelo(_id, alto, stop, nombre, ticker, imagen, espanol, gallego, catalan, vasco, ingles, chino, arabe, italiano, aleman, frances, portugues, ruso, hindi, japones) {
        this._id = _id;
        this.alto = alto;
        this.stop = stop;
        this.nombre = nombre;
        this.ticker = ticker;
        this.imagen = imagen;
        this.espanol = espanol;
        this.gallego = gallego;
        this.catalan = catalan;
        this.vasco = vasco;
        this.ingles = ingles;
        this.chino = chino;
        this.arabe = arabe;
        this.italiano = italiano;
        this.aleman = aleman;
        this.frances = frances;
        this.portugues = portugues;
        this.ruso = ruso;
        this.hindi = hindi;
        this.japones = japones;
    }
    return RecomendadasModelo;
}());

//# sourceMappingURL=recomendadas.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServicio; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiServicio = (function () {
    function ApiServicio(_http) {
        this._http = _http;
        this.url = 'http://207.154.253.101:3678/api/';
        // si tengo que hacer pruebas en local: this.url = 'http://localhost:3678/api/';
        // para subirlo al ssh de ocean: http://207.154.253.101:3678/api/
    }
    ApiServicio.prototype.getAcciones = function () {
        return this._http.get(this.url + 'acciones').map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.getAccion = function (id) {
        return this._http.get(this.url + 'accion/' + id).map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.deleteAccion = function (id) {
        return this._http.delete(this.url + 'accion/' + id).map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.addAcciones = function (recomendadas) {
        var json = JSON.stringify(recomendadas);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'accion', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.getPais = function (pais) {
        return this._http.get(this.url + pais).map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.addPais = function (acciones, pais) {
        var json = JSON.stringify(acciones);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + pais, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiServicio.prototype.deletePais = function (pais) {
        return this._http.delete(this.url + pais).map(function (res) { return res.json(); });
    };
    return ApiServicio;
}());
ApiServicio = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ApiServicio);

var _a;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pipi; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Pipi = (function () {
    function Pipi() {
    }
    Pipi.prototype.transform = function (value, expression, reverse) {
        if (!value) {
            return value;
        }
        var array = value.sort(function (a, b) { return a[expression] > b[expression] ? 1 : -1; });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    return Pipi;
}());
Pipi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'orderBy'
    })
], Pipi);

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "../../../../../src/app/servicios/servicio1.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__ = __webpack_require__("../../../../rxjs/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retryWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servicio1; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Servicio1 = (function () {
    function Servicio1(_http) {
        this._http = _http;
    }
    Servicio1.prototype.getModelos = function (mercado) {
        return this._http.get('https://eodhistoricaldata.com/api/exchanges/' + mercado + '?api_token=5a307d03efdb0&fmt=json').map(function (res) { return res.json(); });
    };
    Servicio1.prototype.seleccionarMas3 = function (ticker) {
        return this._http.get('https://eodhistoricaldata.com/api/real-time/' + ticker + '?api_token=5a307d03efdb0&fmt=json').map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    Servicio1.prototype.getDiario = function (ticker) {
        return this._http.get('http://eodhistoricaldata.com/api/real-time/' + ticker + '?api_token=5a307d03efdb0&fmt=json').map(function (res) { return res.json(); });
    };
    //Anual
    Servicio1.prototype.getAnual = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -365 * 24 * 3600 * 1000;
        var anoPasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + anoPasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    //2Anual
    Servicio1.prototype.getbiAnual = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -730 * 24 * 3600 * 1000;
        var ano2Pasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + ano2Pasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    Servicio1.prototype.getDatoGrafica1 = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -547 * 24 * 3600 * 1000;
        var ano2Pasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + ano2Pasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    Servicio1.prototype.getDatoGrafica2 = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -912 * 24 * 3600 * 1000;
        var ano2Pasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + ano2Pasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    //3Anual
    Servicio1.prototype.getriAnual = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -1100 * 24 * 3600 * 1000;
        var ano2Pasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + ano2Pasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    Servicio1.prototype.getSemestral = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -180 * 24 * 3600 * 1000;
        var semestrePasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + semestrePasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    Servicio1.prototype.getMensual = function (ticker) {
        var hoy = new Date().toISOString().split('T')[0];
        var calculoAno = Date.now() + -30 * 24 * 3600 * 1000;
        var semestrePasado = new Date(calculoAno).toISOString().split('T')[0];
        return this._http.get('https://eodhistoricaldata.com/api/eod/' + ticker + '?api_token=5a307d03efdb0&period=d&fmt=json&order=d&from=' + semestrePasado + '&to=' + hoy).map(function (res) { return res.json(); }).retryWhen(function (errors) {
            return errors.delay(60000).take(100);
        });
    };
    return Servicio1;
}());
Servicio1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], Servicio1);

var _a;
//# sourceMappingURL=servicio1.js.map

/***/ }),

/***/ "../../../../../src/app/vistas/alemania.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/api.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <!-- --- <button class=\"pointer\" (click)=\"borrarPais('topmundo')\">Borrar datos de la API del Top Mundo</button> --- -->\n        <HR><b>TOP MUNDO</b>   \n        <button (click)=\"ordenar('col8')\">3 años</button>\n        <button class=\"pointer\" (click)=\"ordenar('col7')\">2 años</button>\n        <button class=\"pointer\" (click)=\"ordenar('col6')\">1 año</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        \n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of topmundo | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\">\n                \n                <b>\n                3a:\n                <span *ngIf=\"datos.col8 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col8}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col8 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col8}}%</b></span>\n                \n                </span>\n                / 2a:\n                <span *ngIf=\"datos.col7 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col7}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col7 < 0\">\n                \n                </span>                                                                 <span class=\"rojo\"><b>{{datos.col7}}%</b></span>\n                / 1A:\n                <span *ngIf=\"datos.col6 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / 6m:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / 1m:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                \n                \n                </span>\n            </div>\n        </div>\n        -\n        <HR><b>Cryptomonedas</b> --- <button class=\"pointer\" (click)=\"borrarPais('crypto')\">Borrar datos de la API de Crypto</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of crypto | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>ESPAÑA</b> --- <button class=\"pointer\" (click)=\"borrarPais('espana')\">Borrar datos de la API de España</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of espana | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>ALEMANIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('alemania')\">Borrar datos de la API de Alemania</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of alemania | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                    <span *ngIf=\"datos.col6 > -1\">\n                                                                        <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                        <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                        <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                        <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                        <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                        <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>AUSTRALIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('australia')\">Borrar datos de la API de Australia</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of australia | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                        <span *ngIf=\"datos.col6 > -1\">\n                                                                            <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                            <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                            <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                            <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                            <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                            <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>AUSTRIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('austria')\">Borrar datos de la API de Austria</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of austria | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>BÉLGICA</b> --- <button class=\"pointer\" (click)=\"borrarPais('belgica')\">Borrar datos de la API de Bélgica</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of belgica | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>BRASIL</b> --- <button class=\"pointer\" (click)=\"borrarPais('brasil')\">Borrar datos de la API de Brasil</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of brasil | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                    <span *ngIf=\"datos.col6 > -1\">\n                                                                                        <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                        <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                        <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                        <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                        <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                        <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>CANADÁ</b> --- <button class=\"pointer\" (click)=\"borrarPais('canada')\">Borrar datos de la API de Canadá</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of canada | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                        <span *ngIf=\"datos.col6 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>CHINA</b> --- <button class=\"pointer\" (click)=\"borrarPais('china')\">Borrar datos de la API de China</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of china | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>DINAMARCA</b> --- <button class=\"pointer\" (click)=\"borrarPais('dinamarca')\">Borrar datos de la API de Dinamarca</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of dinamarca | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>EEUU</b> --- <button class=\"pointer\" (click)=\"borrarPais('eeuu')\">Borrar datos de la API de EEUU</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of eeuu | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                    <span *ngIf=\"datos.col6 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>FRANCIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('francia')\">Borrar datos de la API de Francia</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of francia | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>HOLANDA</b> --- <button class=\"pointer\" (click)=\"borrarPais('holanda')\">Borrar datos de la API de Holanda</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of holanda | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>INDIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('india')\">Borrar datos de la API de India</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of india | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n\n\n        -\n        <HR><b>ITALIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('italia')\">Borrar datos de la API de Italia</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of italia | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n\n        -\n        <HR><b>MEXICO</b> --- <button class=\"pointer\" (click)=\"borrarPais('mexico')\">Borrar datos de la API de Mexico</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of mexico | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                        <span *ngIf=\"datos.col6 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                            <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                            <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>NORUEGA</b> --- <button class=\"pointer\" (click)=\"borrarPais('noruega')\">Borrar datos de la API de Noruega</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of noruega | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>PORTUGAL</b> --- <button class=\"pointer\" (click)=\"borrarPais('portugal')\">Borrar datos de la API de Portugal</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of portugal | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>RUSIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('rusia')\">Borrar datos de la API de Rusia</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of rusia | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                    <span *ngIf=\"datos.col6 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                        <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                        <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>SUECIA</b> --- <button class=\"pointer\" (click)=\"borrarPais('suecia')\">Borrar datos de la API de Suecia</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of suecia | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                        <span *ngIf=\"datos.col6 > -1\">\n                                                                                                            <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                            <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                            <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                            <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                            <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                            <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>SUIZA</b> --- <button class=\"pointer\" (click)=\"borrarPais('suiza')\">Borrar datos de la API de Suiza</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of suiza | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>UK</b> --- <button class=\"pointer\" (click)=\"borrarPais('uk')\">Borrar datos de la API de UK</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of uk | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                                <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                    <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                    <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n        -\n        <HR><b>Japon</b> --- <button class=\"pointer\" (click)=\"borrarPais('japon')\">Borrar datos de la API de Japon</button> ---\n        <button (click)=\"ordenar('col6')\">Anual</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of japon | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.col1)}}</span> ({{datos.col0}}) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n            <div class=\"derecha\"><b>Anual:\n                                                                                                            <span *ngIf=\"datos.col6 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col6}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col6 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col6}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.col5 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col5}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col5 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col5}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.col4 > -1\">\n                                                                                                                <span class=\"verde\"><b>+{{datos.col4}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.col4 < 0\">\n                                                                                                                <span class=\"rojo\"><b>{{datos.col4}}%</b></span>\n                </span>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/api2023.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <!-- --- <button class=\"pointer\" (click)=\"borrarPais('topmundo')\">Borrar datos de la API del Top Mundo</button> --- -->\n        <HR><b>TOP MUNDO</b>.<!--<i> (Última actualización: {{datos.col9}})</i>. -->\n        <button (click)=\"ordenar('col8')\">3 años</button>\n        <button class=\"pointer\" (click)=\"ordenar('col7')\">2 años</button>\n        <button class=\"pointer\" (click)=\"ordenar('col6')\">1 año</button>\n        <button class=\"pointer\" (click)=\"ordenar('col5')\">Semestral</button>\n        <button class=\"pointer\" (click)=\"ordenar('col4')\">Mensual</button>\n        <HR>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        \n        <table id=\"customers\">\n            <tr>\n                <th>Nombre, ticker y valor</th>\n                <th>3 años / 2 años / 1 año / 6 meses / 1 mes</th>\n            </tr>\n            <tr *ngFor=\"let datos of topmundo | orderBy:order:reverse; let i = index\">\n                <td>{{i+1}}. <img src=\"{{bandera(datos.col0)}}\" width=\"17\" height=\"12\"> {{formatearNombre(datos.col1)}} (<span class=\"accor\">{{datos.col0}}</span>) - <i>Valor: <b>{{datos.col2}}</b></i></td>\n                <td><b>3a:<span *ngIf=\"datos.col8 > -1\"><span class=\"verde\">+{{datos.col8}}%</span></span>\n                    <span *ngIf=\"datos.col8 < 0\"><span class=\"rojo\">{{datos.col8}}%</span></span>\n              / 2a:<span *ngIf=\"datos.col7 > -1\"><span class=\"verde\">+{{datos.col7}}%</span></span>\n               <span *ngIf=\"datos.col7 < 0\"><span class=\"rojo\">{{datos.col7}}%</span></span>\n              / 1a:<span *ngIf=\"datos.col6 > -1\"><span class=\"verde\">+{{datos.col6}}%</span></span>\n               <span *ngIf=\"datos.col6 < 0\"><span class=\"rojo\">{{datos.col6}}%</span></span></b>\n               \n               <b>/ 6m:</b><span *ngIf=\"datos.col5 > -1\"><span class=\"verde\">+{{datos.col5}}%</span></span>\n              <span *ngIf=\"datos.col5 < 0\"><span class=\"rojo\">{{datos.col5}}%</span></span>\n              <b>/ 1m:</b>\n              <span *ngIf=\"datos.col4 > -1\"><span class=\"verde\">+{{datos.col4}}%</span></span>\n              <span *ngIf=\"datos.col4 < 0\"><span class=\"rojo\">{{datos.col4}}%</span></span></td>\n            </tr>          \n        </table>\n        <!--\n        <div *ngFor=\"let datos of topmundo | orderBy:order:reverse; let i = index\">\n\n                <div class=\"izquierda\">{{i+1}}. <img src=\"{{bandera(datos.col0)}}\" width=\"17\" height=\"12\"> {{formatearNombre(datos.col1)}} (<span class=\"accor\">{{datos.col0}}</span>) - <i>Valor: <b>{{datos.col2}}</b></i></div>\n                <div class=\"derecha\">\n                    <b>3a:<span *ngIf=\"datos.col8 > -1\"><span class=\"verde\">+{{datos.col8}}%</span></span>\n                          <span *ngIf=\"datos.col8 < 0\"><span class=\"rojo\">{{datos.col8}}%</span></span>\n                    / 2a:<span *ngIf=\"datos.col7 > -1\"><span class=\"verde\">+{{datos.col7}}%</span></span>\n                     <span *ngIf=\"datos.col7 < 0\"><span class=\"rojo\">{{datos.col7}}%</span></span>\n                    / 1a:<span *ngIf=\"datos.col6 > -1\"><span class=\"verde\">+{{datos.col6}}%</span></span>\n                     <span *ngIf=\"datos.col6 < 0\"><span class=\"rojo\">{{datos.col6}}%</span></span></b>\n                     \n                     <b>/ 6m:</b><span *ngIf=\"datos.col5 > -1\"><span class=\"verde\">+{{datos.col5}}%</span></span>\n                    <span *ngIf=\"datos.col5 < 0\"><span class=\"rojo\">{{datos.col5}}%</span></span>\n                    <b>/ 1m:</b>\n                    <span *ngIf=\"datos.col4 > -1\"><span class=\"verde\">+{{datos.col4}}%</span></span>\n                    <span *ngIf=\"datos.col4 < 0\"><span class=\"rojo\">{{datos.col4}}%</span></span>\n                </div>    \n        </div>-->\n\n\n\n        <div class=\"asesor\"><br>\n        <HR><b>ASESOR: </b>\n        <HR>\n        \n            <form (submit)=\"calcular()\">\n                <label>Precio máximo:</label>\n                <input type=\"number\" [(ngModel)]=\"num1\" name=\"num1\"><br><br>\n              \n                <label>Precio mínimo:</label>\n                <input type=\"number\" [(ngModel)]=\"num2\" name=\"num2\"><br><br>\n              \n                <label>Riesgo a asumir:</label>\n                <input type=\"number\" [(ngModel)]=\"num3\" name=\"num3\"><br><br>\n              \n                <button type=\"submit\">Calcular</button>\n              </form>\n              \n              <p>{{resultado}}</p></div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/apiRobot.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    {{title}}\n    <div class=\"contenedor\">\n        <HR><b>TOP MUNDO</b> --- <span class=\"verde\">{{contadorTopmundo}}</span> títulos.\n        <HR><b>AUSTRALIA</b> --- <span class=\"verde\">{{contadorAustralia}}</span> títulos.\n        <HR><b>ESPAÑA</b> --- <span class=\"verde\">{{contadorEspana}}</span> títulos.\n        <HR><b>FRANCIA</b> --- <span class=\"verde\">{{contadorFrancia}}</span> títulos.\n        <HR><b>ALEMANIA</b> --- <span class=\"verde\">{{contadorAlemania}}</span> títulos.\n        <HR><b>DINAMARCA</b> --- <span class=\"verde\">{{contadorDinamarca}}</span> títulos.\n        <HR><b>AUSTRIA</b> --- <span class=\"verde\">{{contadorAustria}}</span> títulos.\n        <HR><b>BÉLGICA</b> --- <span class=\"verde\">{{contadorBelgica}}</span> títulos.\n        <HR><b>SUECIA</b> --- <span class=\"verde\">{{contadorSuecia}}</span> títulos.\n        <HR><b>SUIZA</b> --- <span class=\"verde\">{{contadorSuiza}}</span> títulos.\n        <HR><b>UK</b> --- <span class=\"verde\">{{contadorUk}}</span> títulos.\n        <HR><b>MEXICO</b> --- <span class=\"verde\">{{contadorMexico}}</span> títulos.\n        <HR><b>PORTUGAL</b> --- <span class=\"verde\">{{contadorPortugal}}</span> títulos.\n        <HR><b>HOLANDA</b> --- <span class=\"verde\">{{contadorHolanda}}</span> títulos.\n        <HR><b>ITALIA</b> --- <span class=\"verde\">{{contadorItalia}}</span> títulos.\n        <HR><b>NORUEGA</b> --- <span class=\"verde\">{{contadorNoruega}}</span> títulos.\n        <HR><b>RUSIA</b> --- <span class=\"verde\">{{contadorRusia}}</span> títulos.\n        <HR><b>IRLANDA</b> --- <span class=\"verde\">{{contadorBrasil}}</span> títulos.\n        <HR><b>CANADÁ</b> --- <span class=\"verde\">{{contadorCanada}}</span> títulos.\n        <HR><b>CHINA</b> --- <span class=\"verde\">{{contadorChina}}</span> títulos.\n        <HR><b>INDIA</b> --- <span class=\"verde\">{{contadorIndia}}</span> títulos.\n        <HR><b>EEUU</b> --- <span class=\"verde\">{{contadorEEUU}}</span> títulos.\n        <HR><b>CRYPTO</b> --- <span class=\"verde\">{{contadorCrypto}}</span> títulos.\n        <HR><b>JAPON</b> --- <span class=\"verde\">{{contadorJapon}}</span> títulos.\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/australia.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/austria.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/belgica.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/brasil.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/canada.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/china.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/dinamarca.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/eeuu.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of mercadoAcciones | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{datos.nombre}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/espana.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{datos.nombre}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/francia.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/holanda.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/home.html":
/***/ (function(module, exports) {

module.exports = "<!-- mostramos otro componente -->\n<!-- <etiqueta-espana></etiqueta-espana> -->\n\n\n<!--<link rel=\"stylesheet\" href=\"../css/styles.css\" />-->\n\n<strong>{{title}}</strong>\n\n\n<ul>\n    <li class=\"accion-cabecera\">\n        <div class=\"content-data\">\n            <h4>API</h4>\n            <p>Ver lo que hay en la API</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/api']\" target=\"_blank\" class=\"btn btn-editar\">\n                                    Ver datos en API\n                        </a>\n                <a [routerLink]=\"['/apiRobot']\" target=\"_blank\" class=\"btn btn-default\">\n                    Cargar API y Robot Parseador de Mercados\n                                </a><a [routerLink]=\"['/api2023']\" target=\"_blank\" class=\"btn btn-default\">\n                                    Top Mundo y Calculadora\n                                                </a>\n                <!-- <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-ver\">\n                                        Coger datos\n                                    </a>\n                                    <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-editar\">\n                                            Editar de Api\n                                        </a>\n                                    <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-eliminar\">\n                                                Eliminar datos en API\n                                            </a> -->\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-cabecera\">\n        <div class=\"content-data\">\n            <h4>RECOMENDADAS</h4>\n            <p>Gestión de recomendadas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/recomendadas']\" target=\"_blank\" class=\"btn btn-default\">\n                            Gestionar recomendadas\n                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>España</h4>\n            <p>API y parseo de acciones españolas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/espana']\" target=\"_blank\" class=\"btn btn-default\">\n                            Cargar API y Robot Parseador\n                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Alemania</h4>\n            <p>API y parseo de acciones alemanas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/alemania']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n                <!-- <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-ver\">\n                                    Coger datos\n                                </a>\n                                <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-editar\">\n                                        Editar de Api\n                                    </a>\n                                <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-eliminar\">\n                                            Eliminar datos en API\n                                        </a> -->\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Australia</h4>\n            <p>API y parseo de acciones australianas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/australia']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Austria</h4>\n            <p>API y parseo de acciones austriacas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/austria']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Belgica</h4>\n            <p>API y parseo de acciones belgas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/belgica']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Brasil</h4>\n            <p>API y parseo de acciones brasileñas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/brasil']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Canadá</h4>\n            <p>API y parseo de acciones canadienses</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/canada']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>China</h4>\n            <p>API y parseo de acciones chinas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/china']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Dinamarca</h4>\n            <p>API y parseo de acciones danesas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/dinamarca']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>EEUU</h4>\n            <p>API y parseo de acciones americanas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/eeuu']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Francia</h4>\n            <p>API y parseo de acciones francesas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/francia']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Holanda</h4>\n            <p>API y parseo de acciones holandesas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/holanda']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>India</h4>\n            <p>API y parseo de acciones indias</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/india']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Italia</h4>\n            <p>API y parseo de acciones italianas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/italia']\" target=\"_blank\" class=\"btn btn-default\">\n                                    Cargar API y Robot Parseador\n                                    </a>\n                <!-- <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-ver\">\n                                        Coger datos\n                                    </a>\n                                    <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-editar\">\n                                            Editar de Api\n                                        </a>\n                                    <a href=\"{{accion.col0}}\" target=\"_blank\" class=\"btn btn-eliminar\">\n                                                Eliminar datos en API\n                                            </a> -->\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>México</h4>\n            <p>API y parseo de acciones mexicanas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/mexico']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Noruega</h4>\n            <p>API y parseo de acciones noruegas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/noruega']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Portugal</h4>\n            <p>API y parseo de acciones portuguesas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/portugal']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Rusia</h4>\n            <p>API y parseo de acciones rusas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/rusia']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Suecia</h4>\n            <p>API y parseo de acciones suecas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/suecia']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Suiza</h4>\n            <p>API y parseo de acciones suizas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/suiza']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>UK</h4>\n            <p>API y parseo de acciones inglesas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/uk']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n    <li class=\"accion-item\">\n        <div class=\"content-data\">\n            <h4>Crypto</h4>\n            <p>API y parseo de cryptomonedas</p>\n            <p class=\"buttons\">\n                <a [routerLink]=\"['/crypto']\" target=\"_blank\" class=\"btn btn-default\">\n                                Cargar API y Robot Parseador\n                                </a>\n            </p>\n        </div>\n    </li>\n\n\n\n</ul>"

/***/ }),

/***/ "../../../../../src/app/vistas/index.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <header>\n        <div class=\"title-subtitle\">\n            <a href=\"#\">\n                <h1>{{titulo}}</h1>\n            </a>\n            <p>{{descripcion}}</p>\n        </div>\n    </header>\n\n\n\n    <!-- mostramos otro componente -->\n    <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/india.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    {{titulo}}\n\n    <div class=\"container\">\n\n        <div class=\"contenedor\">\n            <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n                <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n                <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n            <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n            <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n                <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n                <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                    </span>\n                    <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                    </span>\n                    </b> / - Semestral:\n                    <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                    </span>\n                    <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                    </span>\n                    / - Mensual:\n                    <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                    </span>\n                    <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/vistas/italia.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/mexico.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/noruega.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/portugal.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/recomendadas.html":
/***/ (function(module, exports) {

module.exports = "{{titulo}}\n\n<div class=\"container\">\n\n    <div *ngFor=\"let datos of accionesTraidas; let i = index\">\n        <br>\n        <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{datos.nombre}} ({{datos.ticker}}) </span> Imagen: <b>{{datos.imagen}}</b>, Alto: <b>{{datos.alto}}</b> - <i>Stop Loss: <b>{{datos.stop}}</b></i></div>\n        <div class=\"derecha\"><button (click)=\"onBorraraccion(datos._id)\">Eliminar</button></div>\n\n        - Español: {{datos.espanol}}<br> -- Gallego: {{datos.gallego}}<br> -- Vasco: {{datos.vasco}}<br> -- Catalán: {{datos.catalan}}<br> - Inglés: {{datos.ingles}}<br> - Chino: {{datos.chino}}<br> - Árabe: {{datos.arabe}}<br> - Italiano: {{datos.italiano}}<br>        - Alemán: {{datos.aleman}}<br> - Francés: {{datos.frances}}<br> - Portugués: {{datos.portugues}}<br> - Ruso: {{datos.ruso}}<br> - Indi: {{datos.hindi}}<br> - Japonés: {{datos.japones}}<br>\n        <br>\n    </div>\n\n    <hr>\n    <div class=\"recomendadas\">\n        <form #formFavorito=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <br><b>- DATOS PRINCIPALES</b><br><br>\n            <label>Nombre:</label>\n            <p>\n                <input type=\"text\" name=\"nombre\" #nombre=\"ngModel\" [(ngModel)]=\"favorito.nombre\" required/>\n            </p>\n            <label>Ticker:</label>\n            <p>\n                <input type=\"text\" name=\"ticker\" #ticker=\"ngModel\" [(ngModel)]=\"favorito.ticker\" required/>\n            </p>\n            <label>Imagen: (\"http://www.midastop.com/correcciones/BABA.jpg\")</label>\n            <p>\n                <input type=\"text\" name=\"imagen\" #imagen=\"ngModel\" [(ngModel)]=\"favorito.imagen\" required/>\n            </p>\n            <label>Alto:</label>\n            <p>\n                <input type=\"text\" name=\"alto\" #alto=\"ngModel\" [(ngModel)]=\"favorito.alto\" required/>\n            </p>\n            <label>Stop Loss:</label>\n            <p>\n                <input type=\"text\" name=\"stop\" #stop=\"ngModel\" [(ngModel)]=\"favorito.stop\" required/>\n            </p>\n            <!-- Valores principales arriba, idiomas españoles abajo -->\n            <br><b>- IDIOMAS ESPAÑA</b><br><br>\n            <label>Espanol:</label>\n            <p>\n                <textarea name=\"espanol\" #espanol=\"ngModel\" [(ngModel)]=\"favorito.espanol\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Gallego:</label>\n            <p>\n                <textarea name=\"gallego\" #gallego=\"ngModel\" [(ngModel)]=\"favorito.gallego\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Catalán:</label>\n            <p>\n                <textarea name=\"catalan\" #catalan=\"ngModel\" [(ngModel)]=\"favorito.catalan\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Vasco:</label>\n            <p>\n                <textarea name=\"vasco\" #vasco=\"ngModel\" [(ngModel)]=\"favorito.vasco\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <!-- Idiomas internacionales -->\n            <br><b>- IDIOMAS INTERNACIONALES</b><br><br>\n            <label>Inglés:</label>\n            <p>\n                <textarea name=\"ingles\" #ingles=\"ngModel\" [(ngModel)]=\"favorito.ingles\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Chino:</label>\n            <p>\n                <textarea name=\"chino\" #chino=\"ngModel\" [(ngModel)]=\"favorito.chino\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Árabe:</label>\n            <p>\n                <textarea name=\"arabe\" #arabe=\"ngModel\" [(ngModel)]=\"favorito.arabe\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Italiano:</label>\n            <p>\n                <textarea name=\"italiano\" #italiano=\"ngModel\" [(ngModel)]=\"favorito.italiano\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Alemán:</label>\n            <p>\n                <textarea name=\"aleman\" #aleman=\"ngModel\" [(ngModel)]=\"favorito.aleman\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Francés:</label>\n            <p>\n                <textarea name=\"frances\" #frances=\"ngModel\" [(ngModel)]=\"favorito.frances\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Portugués:</label>\n            <p>\n                <textarea name=\"portugues\" #portugues=\"ngModel\" [(ngModel)]=\"favorito.portugues\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Ruso:</label>\n            <p>\n                <textarea name=\"ruso\" #ruso=\"ngModel\" [(ngModel)]=\"favorito.ruso\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Indi:</label>\n            <p>\n                <textarea name=\"hindi\" #hindi=\"ngModel\" [(ngModel)]=\"favorito.hindi\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n            <label>Japonés:</label>\n            <p>\n                <textarea name=\"japones\" #japones=\"ngModel\" [(ngModel)]=\"favorito.japones\" cols=\"100\" rows=\"5\"></textarea>\n            </p>\n\n            <input type=\"submit\" value=\"Añadir nueva acción recomendada\">\n            <hr>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/rusia.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/suecia.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/suiza.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vistas/uk.html":
/***/ (function(module, exports) {

module.exports = " {{titulo}}\n\n<div class=\"container\">\n\n    <div class=\"contenedor\">\n        <div class=\"centrar\"><button (click)=\"ordenar('anual')\">\n                        Anual\n\n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('semestral')\">\n                        Semestral\n                       \n                    </button>\n            <button class=\"pointer\" (click)=\"ordenar('mensual')\">\n                        Mensual\n                        \n                    </button></div>\n        <!--    Diario: {{datos.mensual}} {{datos.semestral}}{{muestraDiario(modelo.Code,modelo.Country)}} | slice:0:3;-->\n        <div *ngFor=\"let datos of datosFinales | orderBy:order:reverse; let i = index\">\n\n            <div class=\"izquierda\">{{i+1}}. <span class=\"mayusculas\">{{formatearNombre(datos.nombre)}}</span> ({{datos.ticker}}) - <i>Valor: <b>{{datos.valor}}</b></i></div>\n            <div class=\"derecha\"><b>- Anual:\n                                                <span *ngIf=\"datos.anualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.anual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.anualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.anual}}%</b></span>\n                </span>\n                </b> / - Semestral:\n                <span *ngIf=\"datos.semestralD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.semestral}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.semestralD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.semestral}}%</b></span>\n                </span>\n                / - Mensual:\n                <span *ngIf=\"datos.mensualD === 'sube'\">\n                                                    <span class=\"verde\"><b>+{{datos.mensual}}%</b></span>\n                </span>\n                <span *ngIf=\"datos.mensualD === 'baja'\">\n                                                    <span class=\"rojo\"><b>{{datos.mensual}}%</b></span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map