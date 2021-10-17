"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.ConversationResolver = void 0;
const client_1 = require("@prisma/client");
const Conversation_1 = require("../types/Conversation");
const type_graphql_1 = require("type-graphql");
const typegraphql_prisma_1 = require("../generated/typegraphql-prisma");
const isAuth_1 = require("../middleware/isAuth");
const prisma = new client_1.PrismaClient();
let ConversationResolver = class ConversationResolver {
    createConversation() {
        return __awaiter(this, void 0, void 0, function* () {
            const conversation = yield prisma.conversation.create({
                data: {
                    createdAt: new Date(),
                },
                include: {
                    participants: true,
                },
            });
            if (!conversation) {
                throw new Error("Cannot create conversation");
            }
            return conversation;
        });
    }
    assingConversation({ req }, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            if (!userId) {
                throw new Error("Not authenticated");
            }
            const first = yield prisma.usersInConversations.findMany({
                where: {
                    userId: id,
                },
            });
            let second;
            for (const f of first) {
                second = yield prisma.usersInConversations.findUnique({
                    where: {
                        userId_conversationId: {
                            userId,
                            conversationId: f.conversationId,
                        },
                    },
                });
            }
            if (second === null || second === undefined) {
                const conversation = yield prisma.conversation.create({
                    data: {
                        createdAt: new Date(),
                    },
                });
                const result = yield prisma.usersInConversations.create({
                    data: {
                        conversationId: conversation.id,
                        userId,
                    },
                });
                if (!result) {
                    throw new Error("Cannot be created");
                }
                const resultSecond = yield prisma.usersInConversations.create({
                    data: {
                        conversationId: conversation.id,
                        userId: id,
                    },
                });
                if (!conversation) {
                    throw new Error("Cannot be created");
                }
                return resultSecond;
            }
            if (!first) {
                throw new Error("Cannot create conversation");
            }
            if (!second) {
                throw new Error("Cannot create conversation");
            }
            return second;
        });
    }
    conversationFromId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversation = yield prisma.conversation.findUnique({
                where: {
                    id,
                },
                include: {
                    messages: {
                        include: {
                            author: true,
                        },
                    },
                    participants: true,
                },
            });
            return conversation;
        });
    }
    participantsFromConversationId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let conversations = [];
            let conversation;
            for (const i of id) {
                conversation = yield prisma.conversation.findUnique({
                    where: {
                        id: i,
                    },
                    include: {
                        participants: {
                            select: {
                                user: true,
                            },
                        },
                    },
                });
                conversations.push(conversation);
            }
            return conversations;
        });
    }
    participants(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conversations = yield prisma.conversation.findMany({
                where: {
                    id,
                },
                include: {
                    participants: true,
                },
            });
            return conversations;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Conversation_1.Conversation),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "createConversation", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => typegraphql_prisma_1.UsersInConversations),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "assingConversation", null);
__decorate([
    (0, type_graphql_1.Query)(() => Conversation_1.Conversation),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "conversationFromId", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Conversation_1.Conversation]),
    __param(0, (0, type_graphql_1.Arg)("id", () => [String])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "participantsFromConversationId", null);
__decorate([
    (0, type_graphql_1.Query)(() => Conversation_1.Conversation),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationResolver.prototype, "participants", null);
ConversationResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ConversationResolver);
exports.ConversationResolver = ConversationResolver;
//# sourceMappingURL=conversation.js.map