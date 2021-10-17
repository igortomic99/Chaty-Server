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
exports.UserUpdateManyWithoutConversationsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutConversationsInput_1 = require("../inputs/UserCreateOrConnectWithoutConversationsInput");
const UserCreateWithoutConversationsInput_1 = require("../inputs/UserCreateWithoutConversationsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutConversationsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutConversationsInput");
const UserUpdateWithWhereUniqueWithoutConversationsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutConversationsInput");
const UserUpsertWithWhereUniqueWithoutConversationsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutConversationsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutConversationsInput = class UserUpdateManyWithoutConversationsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutConversationsInput_1.UserCreateWithoutConversationsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutConversationsInput_1.UserCreateOrConnectWithoutConversationsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutConversationsInput_1.UserUpsertWithWhereUniqueWithoutConversationsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutConversationsInput_1.UserUpdateWithWhereUniqueWithoutConversationsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutConversationsInput_1.UserUpdateManyWithWhereWithoutConversationsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutConversationsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutConversationsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateManyWithoutConversationsInput);
exports.UserUpdateManyWithoutConversationsInput = UserUpdateManyWithoutConversationsInput;
//# sourceMappingURL=UserUpdateManyWithoutConversationsInput.js.map