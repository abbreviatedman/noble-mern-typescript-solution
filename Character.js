"use strict";
// we want both a schema for MongoDB
// AND a schema for TypeScript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var characterSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    debutYear: {
        type: Number,
        required: true,
        unique: true,
    },
    debutFilm: {
        type: String,
        required: true,
        unique: true,
    }
});
var Character = mongoose_1.default.model('Character', characterSchema);
exports.default = Character;
//# sourceMappingURL=Character.js.map