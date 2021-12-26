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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
exports.default = {
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            var result = yield (0, connection_1.default)('tb_categories').orderBy('id_category');
            return response.status(200).json({ data: result });
        });
    },
    findByCategory(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_category } = request.params;
            const product = yield (0, connection_1.default)('tb_products').where({ id_category });
            return response.status(200).json({ data: product });
        });
    },
};
