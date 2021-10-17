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
exports.MessageUpdateManyWithoutAuthorInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MessageCreateManyAuthorInputEnvelope_1 = require("../inputs/MessageCreateManyAuthorInputEnvelope");
const MessageCreateOrConnectWithoutAuthorInput_1 = require("../inputs/MessageCreateOrConnectWithoutAuthorInput");
const MessageCreateWithoutAuthorInput_1 = require("../inputs/MessageCreateWithoutAuthorInput");
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyWithWhereWithoutAuthorInput_1 = require("../inputs/MessageUpdateManyWithWhereWithoutAuthorInput");
const MessageUpdateWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/MessageUpdateWithWhereUniqueWithoutAuthorInput");
const MessageUpsertWithWhereUniqueWithoutAuthorInput_1 = require("../inputs/MessageUpsertWithWhereUniqueWithoutAuthorInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateManyWithoutAuthorInput = class MessageUpdateManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutAuthorInput_1.MessageCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutAuthorInput_1.MessageCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutAuthorInput_1.MessageUpsertWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCreateManyAuthorInputEnvelope_1.MessageCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutAuthorInput_1.MessageUpdateWithWhereUniqueWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutAuthorInput_1.MessageUpdateManyWithWhereWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageScalarWhereInput_1.MessageScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutAuthorInput.prototype, "deleteMany", void 0);
MessageUpdateManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], MessageUpdateManyWithoutAuthorInput);
exports.MessageUpdateManyWithoutAuthorInput = MessageUpdateManyWithoutAuthorInput;
//# sourceMappingURL=MessageUpdateManyWithoutAuthorInput.js.map