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
exports.PostUpdateOneRequiredWithoutUpvotesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const PostCreateOrConnectWithoutUpvotesInput_1 = require("../inputs/PostCreateOrConnectWithoutUpvotesInput");
const PostCreateWithoutUpvotesInput_1 = require("../inputs/PostCreateWithoutUpvotesInput");
const PostUpdateWithoutUpvotesInput_1 = require("../inputs/PostUpdateWithoutUpvotesInput");
const PostUpsertWithoutUpvotesInput_1 = require("../inputs/PostUpsertWithoutUpvotesInput");
const PostWhereUniqueInput_1 = require("../inputs/PostWhereUniqueInput");
let PostUpdateOneRequiredWithoutUpvotesInput = class PostUpdateOneRequiredWithoutUpvotesInput {
};
__decorate([
    TypeGraphQL.Field(_type => PostCreateWithoutUpvotesInput_1.PostCreateWithoutUpvotesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutUpvotesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostCreateOrConnectWithoutUpvotesInput_1.PostCreateOrConnectWithoutUpvotesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutUpvotesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpsertWithoutUpvotesInput_1.PostUpsertWithoutUpvotesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutUpvotesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostWhereUniqueInput_1.PostWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutUpvotesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => PostUpdateWithoutUpvotesInput_1.PostUpdateWithoutUpvotesInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], PostUpdateOneRequiredWithoutUpvotesInput.prototype, "update", void 0);
PostUpdateOneRequiredWithoutUpvotesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], PostUpdateOneRequiredWithoutUpvotesInput);
exports.PostUpdateOneRequiredWithoutUpvotesInput = PostUpdateOneRequiredWithoutUpvotesInput;
//# sourceMappingURL=PostUpdateOneRequiredWithoutUpvotesInput.js.map