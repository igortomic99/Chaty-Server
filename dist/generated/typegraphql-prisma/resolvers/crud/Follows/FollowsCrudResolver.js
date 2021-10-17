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
exports.FollowsCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateFollowsArgs_1 = require("./args/AggregateFollowsArgs");
const CreateFollowsArgs_1 = require("./args/CreateFollowsArgs");
const CreateManyFollowsArgs_1 = require("./args/CreateManyFollowsArgs");
const DeleteFollowsArgs_1 = require("./args/DeleteFollowsArgs");
const DeleteManyFollowsArgs_1 = require("./args/DeleteManyFollowsArgs");
const FindFirstFollowsArgs_1 = require("./args/FindFirstFollowsArgs");
const FindManyFollowsArgs_1 = require("./args/FindManyFollowsArgs");
const FindUniqueFollowsArgs_1 = require("./args/FindUniqueFollowsArgs");
const GroupByFollowsArgs_1 = require("./args/GroupByFollowsArgs");
const UpdateFollowsArgs_1 = require("./args/UpdateFollowsArgs");
const UpdateManyFollowsArgs_1 = require("./args/UpdateManyFollowsArgs");
const UpsertFollowsArgs_1 = require("./args/UpsertFollowsArgs");
const helpers_1 = require("../../../helpers");
const Follows_1 = require("../../../models/Follows");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFollows_1 = require("../../outputs/AggregateFollows");
const FollowsGroupBy_1 = require("../../outputs/FollowsGroupBy");
let FollowsCrudResolver = class FollowsCrudResolver {
    findUniqueFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.findUnique(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findFirstFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.findFirst(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    findManyFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.findMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.create(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    createManyFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.createMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.delete(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.update(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    deleteManyFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.deleteMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    updateManyFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.updateMany(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    upsertFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.upsert(Object.assign(Object.assign({}, args), (_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count))));
        });
    }
    aggregateFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.aggregate(Object.assign(Object.assign({}, args), (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info))));
        });
    }
    groupByFollows(ctx, info, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
            return (0, helpers_1.getPrismaFromContext)(ctx).follows.groupBy(Object.assign(Object.assign({}, args), Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null))));
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Follows_1.Follows, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueFollowsArgs_1.FindUniqueFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "findUniqueFollows", null);
__decorate([
    TypeGraphQL.Query(_returns => Follows_1.Follows, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstFollowsArgs_1.FindFirstFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "findFirstFollows", null);
__decorate([
    TypeGraphQL.Query(_returns => [Follows_1.Follows], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyFollowsArgs_1.FindManyFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "findManyFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Follows_1.Follows, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateFollowsArgs_1.CreateFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "createFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyFollowsArgs_1.CreateManyFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "createManyFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Follows_1.Follows, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteFollowsArgs_1.DeleteFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "deleteFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Follows_1.Follows, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateFollowsArgs_1.UpdateFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "updateFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyFollowsArgs_1.DeleteManyFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "deleteManyFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyFollowsArgs_1.UpdateManyFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "updateManyFollows", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Follows_1.Follows, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertFollowsArgs_1.UpsertFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "upsertFollows", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateFollows_1.AggregateFollows, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateFollowsArgs_1.AggregateFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "aggregateFollows", null);
__decorate([
    TypeGraphQL.Query(_returns => [FollowsGroupBy_1.FollowsGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByFollowsArgs_1.GroupByFollowsArgs]),
    __metadata("design:returntype", Promise)
], FollowsCrudResolver.prototype, "groupByFollows", null);
FollowsCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Follows_1.Follows)
], FollowsCrudResolver);
exports.FollowsCrudResolver = FollowsCrudResolver;
//# sourceMappingURL=FollowsCrudResolver.js.map