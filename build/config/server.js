"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(routes_1.router);
app.use("*", (req, res) => {
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});
app.listen(PORT, () => console.log(`hosting @${PORT}`));
