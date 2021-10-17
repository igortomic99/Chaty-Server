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
exports.UsersInConversationsUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UsersInConversationsCreateManyUserInputEnvelope_1 = require("../inputs/UsersInConversationsCreateManyUserInputEnvelope");
const UsersInConversationsCreateOrConnectWithoutUserInput_1 = require("../inputs/UsersInConversationsCreateOrConnectWithoutUserInput");
const UsersInConversationsCreateWithoutUserInput_1 = require("../inputs/UsersInConversationsCreateWithoutUserInput");
const UsersInConversationsScalarWhereInput_1 = require("../inputs/UsersInConversationsScalarWhereInput");
const UsersInConversationsUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/UsersInConversationsUpdateManyWithWhereWithoutUserInput");
const UsersInConversationsUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/UsersInConversationsUpdateWithWhereUniqueWithoutUserInput");
const UsersInConversationsUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/UsersInConversationsUpsertWithWhereUniqueWithoutUserInput");
const UsersInConversationsWhereUniqueInput_1 = require("../inputs/UsersInConversationsWhereUniqueInput");
let UsersInConversationsUpdateManyWithoutUserInput = class UsersInConversationsUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsCreateWithoutUserInput_1.UsersInConversationsCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsCreateOrConnectWithoutUserInput_1.UsersInConversationsCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsUpsertWithWhereUniqueWithoutUserInput_1.UsersInConversationsUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UsersInConversationsCreateManyUserInputEnvelope_1.UsersInConversationsCreateManyUserInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput_1.UsersInConversationsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput_1.UsersInConversationsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput_1.UsersInConversationsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsWhereUniqueInput_1.UsersInConversationsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsUpdateWithWhereUniqueWithoutUserInput_1.UsersInConversationsUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsUpdateManyWithWhereWithoutUserInput_1.UsersInConversationsUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UsersInConversationsScalarWhereInput_1.UsersInConversationsScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UsersInConversationsUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
UsersInConversationsUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UsersInConversationsUpdateManyWithoutUserInput);
exports.UsersInConversationsUpdateManyWithoutUserInput = UsersInConversationsUpdateManyWithoutUserInput;
//# sourceMappingURL=UsersInConversationsUpdateManyWithoutUserInput.js.map