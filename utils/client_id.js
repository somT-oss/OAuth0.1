"use strict";
exports.__esModule = true;
var uuid_1 = require("uuid");
var ClientId = /** @class */ (function () {
    function ClientId() {
    }
    ClientId.prototype.generate_client_id = function () {
        var id = (0, uuid_1.v4)();
        return id;
    };
    return ClientId;
}());
var client_id = new ClientId();
console.log(client_id.generate_client_id());
