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
exports.UpvoteCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateUpvoteArgs_1 = require("./args/AggregateUpvoteArgs");
const CreateManyUpvoteArgs_1 = require("./args/CreateManyUpvoteArgs");
const CreateUpvoteArgs_1 = require("./args/CreateUpvoteArgs");
const DeleteManyUpvoteArgs_1 = require("./args/DeleteManyUpvoteArgs");
const DeleteUpvoteArgs_1 = require("./args/DeleteUpvoteArgs");
const FindFirstUpvoteArgs_1 = require("./args/FindFirstUpvoteArgs");
const FindManyUpvoteArgs_1 = require("./args/FindManyUpvoteArgs");
const FindUniqueUpvoteArgs_1 = require("./args/FindUniqueUpvoteArgs");
const GroupByUpvoteArgs_1 = require("./args/GroupByUpvoteArgs");
const UpdateManyUpvoteArgs_1 = require("./args/UpdateManyUpvoteArgs");
const UpdateUpvoteArgs_1 = require("./args/UpdateUpvoteArgs");
const UpsertUpvoteArgs_1 = require("./args/UpsertUpvoteArgs");
const helpers_1 = require("../../../helpers");
const Upvote_1 = require("../../../models/Upvote");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUpvote_1 = require("../../outputs/AggregateUpvote");
const UpvoteGroupBy_1 = require("../../outputs/UpvoteGroupBy");
let UpvoteCrudResolver = class UpvoteCrudResolver {
    upvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upvotes(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createManyUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateManyUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    aggregateUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
        });
    }
    groupByUpvote(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).upvote.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Upvote_1.Upvote, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUpvoteArgs_1.FindUniqueUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "upvote", null);
__decorate([
    TypeGraphQL.Query(_returns => Upvote_1.Upvote, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUpvoteArgs_1.FindFirstUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "findFirstUpvote", null);
__decorate([
    TypeGraphQL.Query(_returns => [Upvote_1.Upvote], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUpvoteArgs_1.FindManyUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "upvotes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upvote_1.Upvote, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateUpvoteArgs_1.CreateUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "createUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUpvoteArgs_1.CreateManyUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "createManyUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upvote_1.Upvote, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteUpvoteArgs_1.DeleteUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "deleteUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upvote_1.Upvote, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateUpvoteArgs_1.UpdateUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "updateUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUpvoteArgs_1.DeleteManyUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "deleteManyUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUpvoteArgs_1.UpdateManyUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "updateManyUpvote", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Upvote_1.Upvote, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertUpvoteArgs_1.UpsertUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "upsertUpvote", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUpvote_1.AggregateUpvote, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUpvoteArgs_1.AggregateUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "aggregateUpvote", null);
__decorate([
    TypeGraphQL.Query(_returns => [UpvoteGroupBy_1.UpvoteGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUpvoteArgs_1.GroupByUpvoteArgs]),
    __metadata("design:returntype", Promise)
], UpvoteCrudResolver.prototype, "groupByUpvote", null);
UpvoteCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Upvote_1.Upvote)
], UpvoteCrudResolver);
exports.UpvoteCrudResolver = UpvoteCrudResolver;
//# sourceMappingURL=UpvoteCrudResolver.js.map