"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProdutoController_1 = __importDefault(require("./controllers/ProdutoController"));
const CategoriaController_1 = __importDefault(require("./controllers/CategoriaController"));
const routes = (0, express_1.Router)();
routes.get('/produtos', ProdutoController_1.default.list);
routes.get('/produtos/:id_product', ProdutoController_1.default.find);
routes.get('/categorias', CategoriaController_1.default.list);
routes.get('/categorias/:id_category', CategoriaController_1.default.findByCategory);
exports.default = routes;
