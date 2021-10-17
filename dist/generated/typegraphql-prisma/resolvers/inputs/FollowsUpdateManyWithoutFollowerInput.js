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
exports.FollowsUpdateManyWithoutFollowerInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FollowsCreateManyFollowerInputEnvelope_1 = require("../inputs/FollowsCreateManyFollowerInputEnvelope");
const FollowsCreateOrConnectWithoutFollowerInput_1 = require("../inputs/FollowsCreateOrConnectWithoutFollowerInput");
const FollowsCreateWithoutFollowerInput_1 = require("../inputs/FollowsCreateWithoutFollowerInput");
const FollowsScalarWhereInput_1 = require("../inputs/FollowsScalarWhereInput");
const FollowsUpdateManyWithWhereWithoutFollowerInput_1 = require("../inputs/FollowsUpdateManyWithWhereWithoutFollowerInput");
const FollowsUpdateWithWhereUniqueWithoutFollowerInput_1 = require("../inputs/FollowsUpdateWithWhereUniqueWithoutFollowerInput");
const FollowsUpsertWithWhereUniqueWithoutFollowerInput_1 = require("../inputs/FollowsUpsertWithWhereUniqueWithoutFollowerInput");
const FollowsWhereUniqueInput_1 = require("../inputs/FollowsWhereUniqueInput");
let FollowsUpdateManyWithoutFollowerInput = class FollowsUpdateManyWithoutFollowerInput {
};
__decorate([
    TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowerInput_1.FollowsCreateWithoutFollowerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowerInput_1.FollowsCreateOrConnectWithoutFollowerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpsertWithWhereUniqueWithoutFollowerInput_1.FollowsUpsertWithWhereUniqueWithoutFollowerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => FollowsCreateManyFollowerInputEnvelope_1.FollowsCreateManyFollowerInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpdateWithWhereUniqueWithoutFollowerInput_1.FollowsUpdateWithWhereUniqueWithoutFollowerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpdateManyWithWhereWithoutFollowerInput_1.FollowsUpdateManyWithWhereWithoutFollowerInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsScalarWhereInput_1.FollowsScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowerInput.prototype, "deleteMany", void 0);
FollowsUpdateManyWithoutFollowerInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], FollowsUpdateManyWithoutFollowerInput);
exports.FollowsUpdateManyWithoutFollowerInput = FollowsUpdateManyWithoutFollowerInput;
//# sourceMappingURL=FollowsUpdateManyWithoutFollowerInput.js.map