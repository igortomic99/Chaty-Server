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
exports.UsersInConversationsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUsersInConversationsArgs_1 = require("./args/AggregateUsersInConversationsArgs");
const CreateManyUsersInConversationsArgs_1 = require("./args/CreateManyUsersInConversationsArgs");
const CreateUsersInConversationsArgs_1 = require("./args/CreateUsersInConversationsArgs");
const DeleteManyUsersInConversationsArgs_1 = require("./args/DeleteManyUsersInConversationsArgs");
const DeleteUsersInConversationsArgs_1 = require("./args/DeleteUsersInConversationsArgs");
const FindFirstUsersInConversationsArgs_1 = require("./args/FindFirstUsersInConversationsArgs");
const FindManyUsersInConversationsArgs_1 = require("./args/FindManyUsersInConversationsArgs");
const FindUniqueUsersInConversationsArgs_1 = require("./args/FindUniqueUsersInConversationsArgs");
const GroupByUsersInConversationsArgs_1 = require("./args/GroupByUsersInConversationsArgs");
const UpdateManyUsersInConversationsArgs_1 = require("./args/UpdateManyUsersInConversationsArgs");
const UpdateUsersInConversationsArgs_1 = require("./args/UpdateUsersInConversationsArgs");
const UpsertUsersInConversationsArgs_1 = require("./args/UpsertUsersInConversationsArgs");
const helpers_1 = require("../../../helpers");
const UsersInConversations_1 = require("../../../models/UsersInConversations");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUsersInConversations_1 = require("../../outputs/AggregateUsersInConversations");
const UsersInConversationsGroupBy_1 = require("../../outputs/UsersInConversationsGroupBy");
let UsersInConversationsCrudResolver = class UsersInConversationsCrudResolver {
    findUniqueUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findManyUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createManyUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateManyUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    aggregateUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
        });
    }
    groupByUsersInConversations(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).usersInConversations.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUsersInConversationsArgs_1.FindUniqueUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "findUniqueUsersInConversations", null);
__decorate([
    TypeGraphQL.Query(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUsersInConversationsArgs_1.FindFirstUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "findFirstUsersInConversations", null);
__decorate([
    TypeGraphQL.Query(_returns => [UsersInConversations_1.UsersInConversations], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUsersInConversationsArgs_1.FindManyUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "findManyUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUsersInConversationsArgs_1.CreateUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "createUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUsersInConversationsArgs_1.CreateManyUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "createManyUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUsersInConversationsArgs_1.DeleteUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "deleteUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUsersInConversationsArgs_1.UpdateUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "updateUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUsersInConversationsArgs_1.DeleteManyUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "deleteManyUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUsersInConversationsArgs_1.UpdateManyUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "updateManyUsersInConversations", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UsersInConversations_1.UsersInConversations, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUsersInConversationsArgs_1.UpsertUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "upsertUsersInConversations", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUsersInConversations_1.AggregateUsersInConversations, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUsersInConversationsArgs_1.AggregateUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "aggregateUsersInConversations", null);
__decorate([
    TypeGraphQL.Query(_returns => [UsersInConversationsGroupBy_1.UsersInConversationsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUsersInConversationsArgs_1.GroupByUsersInConversationsArgs]),
    __metadata("design:returntype", Promise)
], UsersInConversationsCrudResolver.prototype, "groupByUsersInConversations", null);
UsersInConversationsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UsersInConversations_1.UsersInConversations)
], UsersInConversationsCrudResolver);
exports.UsersInConversationsCrudResolver = UsersInConversationsCrudResolver;
//# sourceMappingURL=UsersInConversationsCrudResolver.js.map