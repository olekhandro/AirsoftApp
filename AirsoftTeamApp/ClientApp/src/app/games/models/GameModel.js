"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameType;
(function (GameType) {
    GameType[GameType["\u0414\u043D\u0435\u0432\u043D\u0430\u044F"] = 1] = "\u0414\u043D\u0435\u0432\u043D\u0430\u044F";
    GameType[GameType["\u041D\u043E\u0447\u043D\u0430\u044F"] = 2] = "\u041D\u043E\u0447\u043D\u0430\u044F";
    GameType[GameType["\u0421\u0443\u0442\u043E\u0447\u043D\u0430\u044F"] = 3] = "\u0421\u0443\u0442\u043E\u0447\u043D\u0430\u044F";
})(GameType = exports.GameType || (exports.GameType = {}));
;
(function (GameType) {
    function values() {
        return Object.keys(GameType).filter(function (type) { return isNaN(type) && type !== 'values'; });
    }
    GameType.values = values;
})(GameType = exports.GameType || (exports.GameType = {}));
var GameModel = /** @class */ (function () {
    function GameModel() {
    }
    return GameModel;
}());
exports.GameModel = GameModel;
//# sourceMappingURL=GameModel.js.map