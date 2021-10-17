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
exports.FollowsUpdateManyWithoutFollowingInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FollowsCreateManyFollowingInputEnvelope_1 = require("../inputs/FollowsCreateManyFollowingInputEnvelope");
const FollowsCreateOrConnectWithoutFollowingInput_1 = require("../inputs/FollowsCreateOrConnectWithoutFollowingInput");
const FollowsCreateWithoutFollowingInput_1 = require("../inputs/FollowsCreateWithoutFollowingInput");
const FollowsScalarWhereInput_1 = require("../inputs/FollowsScalarWhereInput");
const FollowsUpdateManyWithWhereWithoutFollowingInput_1 = require("../inputs/FollowsUpdateManyWithWhereWithoutFollowingInput");
const FollowsUpdateWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/FollowsUpdateWithWhereUniqueWithoutFollowingInput");
const FollowsUpsertWithWhereUniqueWithoutFollowingInput_1 = require("../inputs/FollowsUpsertWithWhereUniqueWithoutFollowingInput");
const FollowsWhereUniqueInput_1 = require("../inputs/FollowsWhereUniqueInput");
let FollowsUpdateManyWithoutFollowingInput = class FollowsUpdateManyWithoutFollowingInput {
};
__decorate([
    TypeGraphQL.Field(_type => [FollowsCreateWithoutFollowingInput_1.FollowsCreateWithoutFollowingInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsCreateOrConnectWithoutFollowingInput_1.FollowsCreateOrConnectWithoutFollowingInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpsertWithWhereUniqueWithoutFollowingInput_1.FollowsUpsertWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => FollowsCreateManyFollowingInputEnvelope_1.FollowsCreateManyFollowingInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsWhereUniqueInput_1.FollowsWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpdateWithWhereUniqueWithoutFollowingInput_1.FollowsUpdateWithWhereUniqueWithoutFollowingInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsUpdateManyWithWhereWithoutFollowingInput_1.FollowsUpdateManyWithWhereWithoutFollowingInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [FollowsScalarWhereInput_1.FollowsScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FollowsUpdateManyWithoutFollowingInput.prototype, "deleteMany", void 0);
FollowsUpdateManyWithoutFollowingInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], FollowsUpdateManyWithoutFollowingInput);
exports.FollowsUpdateManyWithoutFollowingInput = FollowsUpdateManyWithoutFollowingInput;
//# sourceMappingURL=FollowsUpdateManyWithoutFollowingInput.js.map