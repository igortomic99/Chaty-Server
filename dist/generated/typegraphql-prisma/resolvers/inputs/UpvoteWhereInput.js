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
var UpvoteWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpvoteWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const PostRelationFilter_1 = require("../inputs/PostRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let UpvoteWhereInput = UpvoteWhereInput_1 = class UpvoteWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UpvoteWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "postId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "user", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostRelationFilter_1.PostRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", Object)
], UpvoteWhereInput.prototype, "post", void 0);
UpvoteWhereInput = UpvoteWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UpvoteWhereInput);
exports.UpvoteWhereInput = UpvoteWhereInput;
//# sourceMappingURL=UpvoteWhereInput.js.map