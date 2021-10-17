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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const client_1 = require("@prisma/client");
const isAuth_1 = require("../middleware/isAuth");
const Post_1 = require("../types/Post");
const type_graphql_1 = require("type-graphql");
const prisma = new client_1.PrismaClient();
let PostInput = class PostInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostInput.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], PostInput.prototype, "text", void 0);
PostInput = __decorate([
    (0, type_graphql_1.InputType)()
], PostInput);
let PaginatedPosts = class PaginatedPosts {
};
__decorate([
    (0, type_graphql_1.Field)(() => [Post_1.Post]),
    __metadata("design:type", Array)
], PaginatedPosts.prototype, "posts", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], PaginatedPosts.prototype, "hasMore", void 0);
PaginatedPosts = __decorate([
    (0, type_graphql_1.ObjectType)()
], PaginatedPosts);
let PostResolver = class PostResolver {
    voteStatus(post, { upvoteLoader, req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                return null;
            }
            const upvote = yield upvoteLoader.load({
                postId: post.id,
                userId: req.session.userId,
            });
            return upvote ? upvote.value : 0;
        });
    }
    createPost(input, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                throw new Error("not logged in");
            }
            const post = yield prisma.post.create({
                data: {
                    title: input.title,
                    content: input.text,
                    createdAt: new Date(),
                    userId: req.session.userId,
                },
            });
            if (!post) {
                throw new Error("Error creating post");
            }
            return post;
        });
    }
    updatePost(id, newTitle, newContent) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield prisma.post.update({
                where: {
                    id,
                },
                data: {
                    title: newTitle,
                    content: newContent,
                },
            });
            if (!post) {
                throw new Error("Post does not exist");
            }
            return post;
        });
    }
    vote(postId, value, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            if (!userId) {
                throw new Error("Not authenticated");
            }
            const isUpvote = value !== -1;
            const realValue = isUpvote ? 1 : -1;
            const upvote = yield prisma.upvote.findUnique({
                where: {
                    userId_postId: {
                        postId,
                        userId,
                    },
                },
            });
            if (upvote && upvote.value !== realValue) {
                yield prisma.upvote.update({
                    where: {
                        userId_postId: {
                            postId,
                            userId,
                        },
                    },
                    data: {
                        value: realValue,
                    },
                });
                yield prisma.$queryRawUnsafe(`update "Post"
    set points = points + $1
    where id = $2`, 2 * realValue, postId);
            }
            else if (!upvote) {
                yield prisma.upvote.create({
                    data: {
                        value: realValue,
                        postId,
                        userId,
                    },
                });
                yield prisma.$queryRawUnsafe(`update "Post"
      set points = points + $1
      where id = $2`, realValue, postId);
            }
            return true;
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield prisma.post.delete({
                where: {
                    id,
                },
            });
            if (!result) {
                throw new Error("Error with deleting post");
            }
            return true;
        });
    }
    post(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield prisma.post.findUnique({
                where: {
                    id,
                },
                include: {
                    author: true,
                },
            });
            if (!post) {
                throw new Error("Cannot find post");
            }
            return post;
        });
    }
    posts() {
        return __awaiter(this, void 0, void 0, function* () {
            const firstQueryResults = yield prisma.post.findMany({
                take: 10,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    author: true,
                },
            });
            const limit = 20;
            return {
                posts: firstQueryResults,
                hasMore: firstQueryResults.length === limit,
            };
        });
    }
    argumentedPost(numberPosts) {
        return __awaiter(this, void 0, void 0, function* () {
            const firstQueryResults = yield prisma.post.findMany({
                take: numberPosts,
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    author: true,
                },
            });
            const limit = 20;
            return {
                posts: firstQueryResults,
                hasMore: firstQueryResults.length === limit,
            };
        });
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(() => type_graphql_1.Int, { nullable: true }),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Post_1.Post, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "voteStatus", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Post_1.Post),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostInput, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Post_1.Post),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __param(1, (0, type_graphql_1.Arg)("newTitle")),
    __param(2, (0, type_graphql_1.Arg)("newContent")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("postId", () => String)),
    __param(1, (0, type_graphql_1.Arg)("value", () => type_graphql_1.Int)),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "vote", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
__decorate([
    (0, type_graphql_1.Query)(() => Post_1.Post, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "post", null);
__decorate([
    (0, type_graphql_1.Query)(() => PaginatedPosts),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
__decorate([
    (0, type_graphql_1.Query)(() => PaginatedPosts),
    __param(0, (0, type_graphql_1.Arg)("numberPosts")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "argumentedPost", null);
PostResolver = __decorate([
    (0, type_graphql_1.Resolver)(Post_1.Post)
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.js.map