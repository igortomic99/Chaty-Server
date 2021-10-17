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
exports.UserCreateWithoutFollowedByInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FollowsCreateNestedManyWithoutFollowingInput_1 = require("../inputs/FollowsCreateNestedManyWithoutFollowingInput");
const MessageCreateNestedManyWithoutAuthorInput_1 = require("../inputs/MessageCreateNestedManyWithoutAuthorInput");
const PostCreateNestedManyWithoutAuthorInput_1 = require("../inputs/PostCreateNestedManyWithoutAuthorInput");
const ProfileCreateNestedOneWithoutUserInput_1 = require("../inputs/ProfileCreateNestedOneWithoutUserInput");
const UpvoteCreateNestedManyWithoutUserInput_1 = require("../inputs/UpvoteCreateNestedManyWithoutUserInput");
const UsersInConversationsCreateNestedManyWithoutUserInput_1 = require("../inputs/UsersInConversationsCreateNestedManyWithoutUserInput");
let UserCreateWithoutFollowedByInput = class UserCreateWithoutFollowedByInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutFollowedByInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutFollowedByInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutFollowedByInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => UsersInConversationsCreateNestedManyWithoutUserInput_1.UsersInConversationsCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "conversations", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutAuthorInput_1.MessageCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "Message", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateNestedManyWithoutAuthorInput_1.PostCreateNestedManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileCreateNestedOneWithoutUserInput_1.ProfileCreateNestedOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteCreateNestedManyWithoutUserInput_1.UpvoteCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "upvotes", void 0);
__decorate([
    TypeGraphQL.Field(_type => FollowsCreateNestedManyWithoutFollowingInput_1.FollowsCreateNestedManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserCreateWithoutFollowedByInput.prototype, "following", void 0);
UserCreateWithoutFollowedByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutFollowedByInput);
exports.UserCreateWithoutFollowedByInput = UserCreateWithoutFollowedByInput;
//# sourceMappingURL=UserCreateWithoutFollowedByInput.js.map