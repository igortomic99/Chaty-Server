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
exports.UserUpdateManyWithoutFriendsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFriendsInput_1 = require("../inputs/UserCreateOrConnectWithoutFriendsInput");
const UserCreateWithoutFriendsInput_1 = require("../inputs/UserCreateWithoutFriendsInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutFriendsInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutFriendsInput");
const UserUpdateWithWhereUniqueWithoutFriendsInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutFriendsInput");
const UserUpsertWithWhereUniqueWithoutFriendsInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutFriendsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutFriendsInput = class UserUpdateManyWithoutFriendsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFriendsInput_1.UserCreateWithoutFriendsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFriendsInput_1.UserCreateOrConnectWithoutFriendsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFriendsInput_1.UserUpsertWithWhereUniqueWithoutFriendsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFriendsInput_1.UserUpdateWithWhereUniqueWithoutFriendsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFriendsInput_1.UserUpdateManyWithWhereWithoutFriendsInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutFriendsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateManyWithoutFriendsInput);
exports.UserUpdateManyWithoutFriendsInput = UserUpdateManyWithoutFriendsInput;
//# sourceMappingURL=UserUpdateManyWithoutFriendsInput.js.map