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
exports.MessageGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MessageAvgAggregate_1 = require("../outputs/MessageAvgAggregate");
const MessageCountAggregate_1 = require("../outputs/MessageCountAggregate");
const MessageMaxAggregate_1 = require("../outputs/MessageMaxAggregate");
const MessageMinAggregate_1 = require("../outputs/MessageMinAggregate");
const MessageSumAggregate_1 = require("../outputs/MessageSumAggregate");
let MessageGroupBy = class MessageGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], MessageGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "text", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MessageGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MessageGroupBy.prototype, "conversationId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], MessageGroupBy.prototype, "read", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageCountAggregate_1.MessageCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageAvgAggregate_1.MessageAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageSumAggregate_1.MessageSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageMinAggregate_1.MessageMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => MessageMaxAggregate_1.MessageMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", Object)
], MessageGroupBy.prototype, "_max", void 0);
MessageGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], MessageGroupBy);
exports.MessageGroupBy = MessageGroupBy;
//# sourceMappingURL=MessageGroupBy.js.map