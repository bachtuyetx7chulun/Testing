"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = require("body-parser");
const configs_1 = require("./configs");
const routers_1 = __importDefault(require("./routers"));
const error_middlware_1 = require("./middleware/error.middlware");
class App {
    constructor(port) {
        this.port = port;
        this.app = express_1.default();
        this.configure();
    }
    configure() {
        this.app.set('port', this.port || configs_1.PORT || 5000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(body_parser_1.json());
        this.app.use(body_parser_1.urlencoded({ extended: false }));
        this.app.use('/api/v1', routers_1.default);
        this.app.use(error_middlware_1.getError);
        this.app.use(error_middlware_1.handleError);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on port ${this.app.get('port')}`);
            console.log(express_list_endpoints_1.default(this.app));
        });
    }
}
exports.App = App;
