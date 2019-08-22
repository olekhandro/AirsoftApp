"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var TrainingService = /** @class */ (function () {
    function TrainingService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
    }
    TrainingService.prototype.GetAllTrainings = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'api/Training/Trainings', { headers: this.headers }).pipe(operators_1.tap(function (data) {
            _this.trainings = data;
        }), operators_1.catchError(this.handleError));
    };
    TrainingService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.  
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.  
            // The response body may contain clues as to what went wrong,  
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        // return an observable with a user-facing error message  
        return rxjs_1.throwError('Something bad happened; please try again later.');
    };
    ;
    TrainingService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], TrainingService);
    return TrainingService;
}());
exports.TrainingService = TrainingService;
//# sourceMappingURL=TrainingService.js.map