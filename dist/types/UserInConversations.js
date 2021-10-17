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
exports.UsersInConversations = void 0;
const typegraphql_prisma_1 = require("src/generated/typegraphql-prisma");
const type_graphql_1 = require("type-graphql");
let UsersInConversations = class UsersInConversations {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsersInConversations.prototype, "conversationId", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => typegraphql_prisma_1.User),
    __metadata("design:type", typegraphql_prisma_1.User)
], UsersInConversations.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], UsersInConversations.prototype, "userId", void 0);
UsersInConversations = __decorate([
    (0, type_graphql_1.ObjectType)()
], UsersInConversations);
exports.UsersInConversations = UsersInConversations;
//# sourceMappingURL=UserInConversations.js.map