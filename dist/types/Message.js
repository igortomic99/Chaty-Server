"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
let Message = class Message {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Message.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Message.prototype, "text", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Message.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Message.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String),
    __metadata("design:type", String)
], Message.prototype, "conversationId", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => User_1.User, {
        nullable: false,
    }),
    __metadata("design:type", User_1.User)
], Message.prototype, "author", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Boolean, {
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], Message.prototype, "read", void 0);
Message = __decorate([
    (0, type_graphql_1.ObjectType)()
], Message);
exports.Message = Message;
//# sourceMappingURL=Message.js.map