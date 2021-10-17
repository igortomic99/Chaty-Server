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
exports.UserUpdateManyWithoutFriendsRelationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UserCreateOrConnectWithoutFriendsRelationInput_1 = require("../inputs/UserCreateOrConnectWithoutFriendsRelationInput");
const UserCreateWithoutFriendsRelationInput_1 = require("../inputs/UserCreateWithoutFriendsRelationInput");
const UserScalarWhereInput_1 = require("../inputs/UserScalarWhereInput");
const UserUpdateManyWithWhereWithoutFriendsRelationInput_1 = require("../inputs/UserUpdateManyWithWhereWithoutFriendsRelationInput");
const UserUpdateWithWhereUniqueWithoutFriendsRelationInput_1 = require("../inputs/UserUpdateWithWhereUniqueWithoutFriendsRelationInput");
const UserUpsertWithWhereUniqueWithoutFriendsRelationInput_1 = require("../inputs/UserUpsertWithWhereUniqueWithoutFriendsRelationInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateManyWithoutFriendsRelationInput = class UserUpdateManyWithoutFriendsRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserCreateWithoutFriendsRelationInput_1.UserCreateWithoutFriendsRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFriendsRelationInput_1.UserCreateOrConnectWithoutFriendsRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutFriendsRelationInput_1.UserUpsertWithWhereUniqueWithoutFriendsRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserWhereUniqueInput_1.UserWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutFriendsRelationInput_1.UserUpdateWithWhereUniqueWithoutFriendsRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutFriendsRelationInput_1.UserUpdateManyWithWhereWithoutFriendsRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserScalarWhereInput_1.UserScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UserUpdateManyWithoutFriendsRelationInput.prototype, "deleteMany", void 0);
UserUpdateManyWithoutFriendsRelationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateManyWithoutFriendsRelationInput);
exports.UserUpdateManyWithoutFriendsRelationInput = UserUpdateManyWithoutFriendsRelationInput;
//# sourceMappingURL=UserUpdateManyWithoutFriendsRelationInput.js.map