"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __importDefault(require("uuid")); // <- 追加
var User_1 = require("./User");
var user = new User_1.User('海老原', '賢次', 44);
var contentsElem = document.getElementById('contents');
if (!!contentsElem) {
    contentsElem.innerText = user.familyName + " " + user.givenName;
}
// <- 追加 ここから
// HTMLエレメントを取得 キャストすることで、入力補完が効く
var saibanButton = document.getElementById('saiban');
var uuidSpan = document.getElementById('uuid');
// ボタンのクリックイベントを追加
saibanButton.onclick = function (e) {
    uuidSpan.innerText = uuid_1.default.v4();
};
