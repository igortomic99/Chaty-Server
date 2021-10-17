"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ConversationCreateNestedOneWithoutMessagesInput_1 = require("../inputs/ConversationCreateNestedOneWithoutMessagesInput");
const UserCreateNestedOneWithoutMessageInput_1 = require("../inputs/UserCreateNestedOneWithoutMessageInput");
let MessageCreateInput = class MessageCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MessageCreateInput.prototype, "text", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MessageCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageCreateInput.prototype, "read", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutMessageInput_1.UserCreateNestedOneWithoutMessageInput)
], MessageCreateInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutMessagesInput_1.ConversationCreateNestedOneWithoutMessagesInput, {
        nullable: false
    }),
    __metadata("design:type", ConversationCreateNestedOneWithoutMessagesInput_1.ConversationCreateNestedOneWithoutMessagesInput)
], MessageCreateInput.prototype, "conversation", void 0);
MessageCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], MessageCreateInput);
exports.MessageCreateInput = MessageCreateInput;
//# sourceMappingURL=MessageCreateInput.js.map