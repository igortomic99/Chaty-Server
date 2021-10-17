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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateConversationArgs_1 = require("./args/AggregateConversationArgs");
const CreateConversationArgs_1 = require("./args/CreateConversationArgs");
const CreateManyConversationArgs_1 = require("./args/CreateManyConversationArgs");
const DeleteConversationArgs_1 = require("./args/DeleteConversationArgs");
const DeleteManyConversationArgs_1 = require("./args/DeleteManyConversationArgs");
const FindFirstConversationArgs_1 = require("./args/FindFirstConversationArgs");
const FindManyConversationArgs_1 = require("./args/FindManyConversationArgs");
const FindUniqueConversationArgs_1 = require("./args/FindUniqueConversationArgs");
const GroupByConversationArgs_1 = require("./args/GroupByConversationArgs");
const UpdateConversationArgs_1 = require("./args/UpdateConversationArgs");
const UpdateManyConversationArgs_1 = require("./args/UpdateManyConversationArgs");
const UpsertConversationArgs_1 = require("./args/UpsertConversationArgs");
const helpers_1 = require("../../../helpers");
const Conversation_1 = require("../../../models/Conversation");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateConversation_1 = require("../../outputs/AggregateConversation");
const ConversationGroupBy_1 = require("../../outputs/ConversationGroupBy");
let ConversationCrudResolver = class ConversationCrudResolver {
    conversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    conversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createManyConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateManyConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    aggregateConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
        });
    }
    groupByConversation(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).conversation.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueConversationArgs_1.FindUniqueConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "conversation", null);
__decorate([
    TypeGraphQL.Query(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstConversationArgs_1.FindFirstConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "findFirstConversation", null);
__decorate([
    TypeGraphQL.Query(_returns => [Conversation_1.Conversation], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyConversationArgs_1.FindManyConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "conversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateConversationArgs_1.CreateConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "createConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyConversationArgs_1.CreateManyConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "createManyConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteConversationArgs_1.DeleteConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "deleteConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateConversationArgs_1.UpdateConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "updateConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyConversationArgs_1.DeleteManyConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "deleteManyConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyConversationArgs_1.UpdateManyConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "updateManyConversation", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Conversation_1.Conversation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertConversationArgs_1.UpsertConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "upsertConversation", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateConversation_1.AggregateConversation, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateConversationArgs_1.AggregateConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "aggregateConversation", null);
__decorate([
    TypeGraphQL.Query(_returns => [ConversationGroupBy_1.ConversationGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByConversationArgs_1.GroupByConversationArgs]),
    __metadata("design:returntype", Promise)
], ConversationCrudResolver.prototype, "groupByConversation", null);
ConversationCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Conversation_1.Conversation)
], ConversationCrudResolver);
exports.ConversationCrudResolver = ConversationCrudResolver;
//# sourceMappingURL=ConversationCrudResolver.js.map