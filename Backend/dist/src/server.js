"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://angry-pasteur-83335a.netlify.app'],
//     methods: 'Access-Control-Allow-Methods'
// }));
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};
app.use(allowCrossDomain);
const PORT = 3333;
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT || PORT, () => console.log(`Server is running at port ${PORT}...`));
