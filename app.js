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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongodb_1 = __importDefault(require("./db/mongodb"));
var Character_1 = __importDefault(require("./Character"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (_, res) {
    res.send('hello'); // should ideally send them directions for how to use the API
});
// errorPacket has:
//   message: 'failure in ____'
//   payload: error
function createErrorPacket(failureMessage, error) {
    return {
        message: failureMessage,
        payload: error,
    };
}
app.get('/api/characters', function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    var characters, error_1, errorPacket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Character_1.default.find({})];
            case 1:
                characters = _a.sent();
                res.json({ message: 'success', payload: characters });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                errorPacket = createErrorPacket('failure in all character', error_1);
                console.log(errorPacket);
                res.json(errorPacket);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post('/api/characters', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newCharacter, error_2, errorPacket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newCharacter = req.body;
                return [4 /*yield*/, Character_1.default.create(newCharacter)];
            case 1:
                _a.sent();
                res.json(newCharacter);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                errorPacket = createErrorPacket('failure in character creation', error_2);
                console.log(errorPacket);
                res.json(errorPacket);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put('/api/characters/changeName/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newName, id, character, updatedCharacter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newName = req.body.name;
                id = req.params.id;
                return [4 /*yield*/, Character_1.default.findOne({ _id: id })];
            case 1:
                character = _a.sent();
                updatedCharacter = {
                    name: newName,
                    debutYear: character.debutYear,
                    debutFilm: character.debutFilm,
                };
                return [4 /*yield*/, Character_1.default.updateOne({ _id: id }, updatedCharacter)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Listening on port: ".concat(PORT));
    (0, mongodb_1.default)();
});
//# sourceMappingURL=app.js.map