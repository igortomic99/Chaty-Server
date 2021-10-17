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
exports.UpvoteUpdateManyWithoutPostInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UpvoteCreateManyPostInputEnvelope_1 = require("../inputs/UpvoteCreateManyPostInputEnvelope");
const UpvoteCreateOrConnectWithoutPostInput_1 = require("../inputs/UpvoteCreateOrConnectWithoutPostInput");
const UpvoteCreateWithoutPostInput_1 = require("../inputs/UpvoteCreateWithoutPostInput");
const UpvoteScalarWhereInput_1 = require("../inputs/UpvoteScalarWhereInput");
const UpvoteUpdateManyWithWhereWithoutPostInput_1 = require("../inputs/UpvoteUpdateManyWithWhereWithoutPostInput");
const UpvoteUpdateWithWhereUniqueWithoutPostInput_1 = require("../inputs/UpvoteUpdateWithWhereUniqueWithoutPostInput");
const UpvoteUpsertWithWhereUniqueWithoutPostInput_1 = require("../inputs/UpvoteUpsertWithWhereUniqueWithoutPostInput");
const UpvoteWhereUniqueInput_1 = require("../inputs/UpvoteWhereUniqueInput");
let UpvoteUpdateManyWithoutPostInput = class UpvoteUpdateManyWithoutPostInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UpvoteCreateWithoutPostInput_1.UpvoteCreateWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteCreateOrConnectWithoutPostInput_1.UpvoteCreateOrConnectWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteUpsertWithWhereUniqueWithoutPostInput_1.UpvoteUpsertWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteCreateManyPostInputEnvelope_1.UpvoteCreateManyPostInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput_1.UpvoteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput_1.UpvoteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput_1.UpvoteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereUniqueInput_1.UpvoteWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteUpdateWithWhereUniqueWithoutPostInput_1.UpvoteUpdateWithWhereUniqueWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteUpdateManyWithWhereWithoutPostInput_1.UpvoteUpdateManyWithWhereWithoutPostInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteScalarWhereInput_1.UpvoteScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteUpdateManyWithoutPostInput.prototype, "deleteMany", void 0);
UpvoteUpdateManyWithoutPostInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UpvoteUpdateManyWithoutPostInput);
exports.UpvoteUpdateManyWithoutPostInput = UpvoteUpdateManyWithoutPostInput;
//# sourceMappingURL=UpvoteUpdateManyWithoutPostInput.js.map