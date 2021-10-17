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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upvote = void 0;
const type_graphql_1 = require("type-graphql");
let Upvote = class Upvote {
};
__decorate([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.Int, {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Upvote.prototype, "value", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Upvote.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)((_type) => String, {
        nullable: false,
    }),
    __metadata("design:type", String)
], Upvote.prototype, "postId", void 0);
Upvote = __decorate([
    (0, type_graphql_1.ObjectType)()
], Upvote);
exports.Upvote = Upvote;
//# sourceMappingURL=Upvote.js.map