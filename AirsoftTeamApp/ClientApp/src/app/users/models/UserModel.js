"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRole;
(function (UserRole) {
    UserRole[UserRole["\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440"] = 1] = "\u041A\u043E\u043C\u0430\u043D\u0434\u0438\u0440";
    UserRole[UserRole["\u0411\u043E\u0435\u0446"] = 2] = "\u0411\u043E\u0435\u0446";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
;
(function (UserRole) {
    function values() {
        return Object.keys(UserRole).filter(function (type) { return isNaN(type) && type !== 'values'; });
    }
    UserRole.values = values;
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var UserState;
(function (UserState) {
    UserState[UserState["Active"] = 0] = "Active";
    UserState[UserState["Deleted"] = 1] = "Deleted";
    UserState[UserState["Reserve"] = 2] = "Reserve";
})(UserState = exports.UserState || (exports.UserState = {}));
(function (UserState) {
    function values() {
        return Object.keys(UserState).filter(function (type) { return isNaN(type) && type !== 'values'; });
    }
    UserState.values = values;
})(UserState = exports.UserState || (exports.UserState = {}));
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map