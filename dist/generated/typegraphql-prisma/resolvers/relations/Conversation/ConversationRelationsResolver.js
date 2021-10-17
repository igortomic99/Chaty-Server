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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Conversation_1 = require("../../../models/Conversation");
const Message_1 = require("../../../models/Message");
const UsersInConversations_1 = require("../../../models/UsersInConversations");
const ConversationMessagesArgs_1 = require("./args/ConversationMessagesArgs");
const ConversationParticipantsArgs_1 = require("./args/ConversationParticipantsArgs");
const helpers_1 = require("../../../helpers");
let ConversationRelationsResolver = class ConversationRelationsResolver {
    participants(conversation, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
                where: {
                    id: conversation.id,
                },
            }).participants(args);
        });
    }
    messages(conversation, ctx, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique({
                where: {
                    id: conversation.id,
                },
            }).messages(args);
        });
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [UsersInConversations_1.UsersInConversations], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conversation_1.Conversation, Object, ConversationParticipantsArgs_1.ConversationParticipantsArgs]),
    __metadata("design:returntype", Promise)
], ConversationRelationsResolver.prototype, "participants", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Message_1.Message], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Conversation_1.Conversation, Object, ConversationMessagesArgs_1.ConversationMessagesArgs]),
    __metadata("design:returntype", Promise)
], ConversationRelationsResolver.prototype, "messages", null);
ConversationRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], ConversationRelationsResolver);
exports.ConversationRelationsResolver = ConversationRelationsResolver;
//# sourceMappingURL=ConversationRelationsResolver.js.map