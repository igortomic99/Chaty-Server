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
exports.UserUpdateWithoutUpvotesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FollowsUpdateManyWithoutFollowerInput_1 = require("../inputs/FollowsUpdateManyWithoutFollowerInput");
const FollowsUpdateManyWithoutFollowingInput_1 = require("../inputs/FollowsUpdateManyWithoutFollowingInput");
const MessageUpdateManyWithoutAuthorInput_1 = require("../inputs/MessageUpdateManyWithoutAuthorInput");
const PostUpdateManyWithoutAuthorInput_1 = require("../inputs/PostUpdateManyWithoutAuthorInput");
const ProfileUpdateOneWithoutUserInput_1 = require("../inputs/ProfileUpdateOneWithoutUserInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UsersInConversationsUpdateManyWithoutUserInput_1 = require("../inputs/UsersInConversationsUpdateManyWithoutUserInput");
let UserUpdateWithoutUpvotesInput = class UserUpdateWithoutUpvotesInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "password", void 0);
__decorate([
    TypeGraphQL.Field(_type => UsersInConversationsUpdateManyWithoutUserInput_1.UsersInConversationsUpdateManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "conversations", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageUpdateManyWithoutAuthorInput_1.MessageUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "Message", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyWithoutAuthorInput_1.PostUpdateManyWithoutAuthorInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "posts", void 0);
__decorate([
    TypeGraphQL.Field(_type => ProfileUpdateOneWithoutUserInput_1.ProfileUpdateOneWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "profile", void 0);
__decorate([
    TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowerInput_1.FollowsUpdateManyWithoutFollowerInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "followedBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => FollowsUpdateManyWithoutFollowingInput_1.FollowsUpdateManyWithoutFollowingInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateWithoutUpvotesInput.prototype, "following", void 0);
UserUpdateWithoutUpvotesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateWithoutUpvotesInput);
exports.UserUpdateWithoutUpvotesInput = UserUpdateWithoutUpvotesInput;
//# sourceMappingURL=UserUpdateWithoutUpvotesInput.js.map