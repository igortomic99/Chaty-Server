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
exports.UserCreateWithoutProfileInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ConversationCreateNestedManyWithoutParticipantsInput_1 = require("../inputs/ConversationCreateNestedManyWithoutParticipantsInput");
const MessageCreateNestedManyWithoutAuthorInput_1 = require("../inputs/MessageCreateNestedManyWithoutAuthorInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const UserCreateNestedManyWithoutFriendsInput_1 = require("../inputs/UserCreateNestedManyWithoutFriendsInput");
const UserCreateNestedManyWithoutFriendsRelationInput_1 = require("../inputs/UserCreateNestedManyWithoutFriendsRelationInput");
const Role_1 = require("../../enums/Role");
let UserCreateWithoutProfileInput = class UserCreateWithoutProfileInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutProfileInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationCreateNestedManyWithoutParticipantsInput_1.ConversationCreateNestedManyWithoutParticipantsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "conversations", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutAuthorInput_1.MessageCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "Message", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFriendsRelationInput_1.UserCreateNestedManyWithoutFriendsRelationInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "friends", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFriendsInput_1.UserCreateNestedManyWithoutFriendsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutProfileInput.prototype, "friendsRelation", void 0);
UserCreateWithoutProfileInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutProfileInput);
exports.UserCreateWithoutProfileInput = UserCreateWithoutProfileInput;
//# sourceMappingURL=UserCreateWithoutProfileInput.js.map