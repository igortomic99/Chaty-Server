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
exports.Conversation = void 0;
const type_graphql_1 = require("type-graphql");
const Message_1 = require("./Message");
const UsersInConversations_1 = require("../generated/typegraphql-prisma/models/UsersInConversations");
let Conversation = class Conversation {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Conversation.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => Date, {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Conversation.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Message_1.Message], { nullable: true }),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [UsersInConversations_1.UsersInConversations]),
    __metadata("design:type", Array)
], Conversation.prototype, "participants", void 0);
Conversation = __decorate([
    (0, type_graphql_1.ObjectType)()
], Conversation);
exports.Conversation = Conversation;
//# sourceMappingURL=Conversation.js.map