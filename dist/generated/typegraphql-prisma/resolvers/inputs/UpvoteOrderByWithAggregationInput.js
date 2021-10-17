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
exports.UpvoteOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const UpvoteAvgOrderByAggregateInput_1 = require("../inputs/UpvoteAvgOrderByAggregateInput");
const UpvoteCountOrderByAggregateInput_1 = require("../inputs/UpvoteCountOrderByAggregateInput");
const UpvoteMaxOrderByAggregateInput_1 = require("../inputs/UpvoteMaxOrderByAggregateInput");
const UpvoteMinOrderByAggregateInput_1 = require("../inputs/UpvoteMinOrderByAggregateInput");
const UpvoteSumOrderByAggregateInput_1 = require("../inputs/UpvoteSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UpvoteOrderByWithAggregationInput = class UpvoteOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "postId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteCountOrderByAggregateInput_1.UpvoteCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteAvgOrderByAggregateInput_1.UpvoteAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteMaxOrderByAggregateInput_1.UpvoteMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteMinOrderByAggregateInput_1.UpvoteMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UpvoteSumOrderByAggregateInput_1.UpvoteSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteOrderByWithAggregationInput.prototype, "_sum", void 0);
UpvoteOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UpvoteOrderByWithAggregationInput);
exports.UpvoteOrderByWithAggregationInput = UpvoteOrderByWithAggregationInput;
//# sourceMappingURL=UpvoteOrderByWithAggregationInput.js.map