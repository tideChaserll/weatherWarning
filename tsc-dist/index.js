"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile("not-found-txt.txt", (err, data) => {
    console.log(err);
});
console.log("hello world!");
//# sourceMappingURL=index.js.map