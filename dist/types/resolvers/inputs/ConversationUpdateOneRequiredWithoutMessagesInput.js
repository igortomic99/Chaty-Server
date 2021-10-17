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
exports.ConversationUpdateOneRequiredWithoutMessagesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ConversationCreateOrConnectWithoutMessagesInput_1 = require("../inputs/ConversationCreateOrConnectWithoutMessagesInput");
const ConversationCreateWithoutMessagesInput_1 = require("../inputs/ConversationCreateWithoutMessagesInput");
const ConversationUpdateWithoutMessagesInput_1 = require("../inputs/ConversationUpdateWithoutMessagesInput");
const ConversationUpsertWithoutMessagesInput_1 = require("../inputs/ConversationUpsertWithoutMessagesInput");
const ConversationWhereUniqueInput_1 = require("../inputs/ConversationWhereUniqueInput");
let ConversationUpdateOneRequiredWithoutMessagesInput = class ConversationUpdateOneRequiredWithoutMessagesInput {
};
__decorate([
    TypeGraphQL.Field(_type => ConversationCreateWithoutMessagesInput_1.ConversationCreateWithoutMessagesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ConversationUpdateOneRequiredWithoutMessagesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationCreateOrConnectWithoutMessagesInput_1.ConversationCreateOrConnectWithoutMessagesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ConversationUpdateOneRequiredWithoutMessagesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationUpsertWithoutMessagesInput_1.ConversationUpsertWithoutMessagesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ConversationUpdateOneRequiredWithoutMessagesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationWhereUniqueInput_1.ConversationWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ConversationUpdateOneRequiredWithoutMessagesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ConversationUpdateWithoutMessagesInput_1.ConversationUpdateWithoutMessagesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], ConversationUpdateOneRequiredWithoutMessagesInput.prototype, "update", void 0);
ConversationUpdateOneRequiredWithoutMessagesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ConversationUpdateOneRequiredWithoutMessagesInput);
exports.ConversationUpdateOneRequiredWithoutMessagesInput = ConversationUpdateOneRequiredWithoutMessagesInput;
//# sourceMappingURL=ConversationUpdateOneRequiredWithoutMessagesInput.js.map