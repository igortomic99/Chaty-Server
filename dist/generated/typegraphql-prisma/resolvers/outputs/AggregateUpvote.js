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
exports.AggregateUpvote = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UpvoteAvgAggregate_1 = require("../outputs/UpvoteAvgAggregate");
const UpvoteCountAggregate_1 = require("../outputs/UpvoteCountAggregate");
const UpvoteMaxAggregate_1 = require("../outputs/UpvoteMaxAggregate");
const UpvoteMinAggregate_1 = require("../outputs/UpvoteMinAggregate");
const UpvoteSumAggregate_1 = require("../outputs/UpvoteSumAggregate");
let AggregateUpvote = class AggregateUpvote {
};
__decorate([
    TypeGraphQL.Field(_type => UpvoteCountAggregate_1.UpvoteCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateUpvote.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteAvgAggregate_1.UpvoteAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateUpvote.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteSumAggregate_1.UpvoteSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateUpvote.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteMinAggregate_1.UpvoteMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateUpvote.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteMaxAggregate_1.UpvoteMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], AggregateUpvote.prototype, "_max", void 0);
AggregateUpvote = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateUpvote);
exports.AggregateUpvote = AggregateUpvote;
//# sourceMappingURL=AggregateUpvote.js.map