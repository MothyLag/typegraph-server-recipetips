"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const path = __importStar(require("path"));
const main_1 = require("./database/main");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const db = new main_1.DataBase();
        yield db.connect();
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [__dirname + '/resolvers/*/*.resolver.*s'],
            validate: true,
            emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
            container: typedi_1.Container
        });
        const server = new apollo_server_1.ApolloServer({
            schema,
            playground: true,
            context: ctx => ctx
        });
        const { url } = yield server.listen(4000);
        console.log(`running on ${url}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map