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
exports.MessageUpdateManyWithoutConversationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MessageCreateManyConversationInputEnvelope_1 = require("../inputs/MessageCreateManyConversationInputEnvelope");
const MessageCreateOrConnectWithoutConversationInput_1 = require("../inputs/MessageCreateOrConnectWithoutConversationInput");
const MessageCreateWithoutConversationInput_1 = require("../inputs/MessageCreateWithoutConversationInput");
const MessageScalarWhereInput_1 = require("../inputs/MessageScalarWhereInput");
const MessageUpdateManyWithWhereWithoutConversationInput_1 = require("../inputs/MessageUpdateManyWithWhereWithoutConversationInput");
const MessageUpdateWithWhereUniqueWithoutConversationInput_1 = require("../inputs/MessageUpdateWithWhereUniqueWithoutConversationInput");
const MessageUpsertWithWhereUniqueWithoutConversationInput_1 = require("../inputs/MessageUpsertWithWhereUniqueWithoutConversationInput");
const MessageWhereUniqueInput_1 = require("../inputs/MessageWhereUniqueInput");
let MessageUpdateManyWithoutConversationInput = class MessageUpdateManyWithoutConversationInput {
};
__decorate([
    TypeGraphQL.Field(_type => [MessageCreateWithoutConversationInput_1.MessageCreateWithoutConversationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutConversationInput_1.MessageCreateOrConnectWithoutConversationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutConversationInput_1.MessageUpsertWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCreateManyConversationInputEnvelope_1.MessageCreateManyConversationInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageWhereUniqueInput_1.MessageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutConversationInput_1.MessageUpdateWithWhereUniqueWithoutConversationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutConversationInput_1.MessageUpdateManyWithWhereWithoutConversationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MessageScalarWhereInput_1.MessageScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageUpdateManyWithoutConversationInput.prototype, "deleteMany", void 0);
MessageUpdateManyWithoutConversationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], MessageUpdateManyWithoutConversationInput);
exports.MessageUpdateManyWithoutConversationInput = MessageUpdateManyWithoutConversationInput;
//# sourceMappingURL=MessageUpdateManyWithoutConversationInput.js.map