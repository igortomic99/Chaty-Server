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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const client_1 = require("@prisma/client");
const argon2_1 = __importDefault(require("argon2"));
const type_graphql_1 = require("type-graphql");
const uuid_1 = require("uuid");
const isAuth_1 = require("../middleware/isAuth");
const Conversation_1 = require("../types/Conversation");
const Profile_1 = require("../types/Profile");
const User_1 = require("../types/User");
const UsernamePasswordInput_1 = require("../types/UsernamePasswordInput");
const sendEmails_1 = require("../utils/sendEmails");
const prisma = new client_1.PrismaClient();
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Profile_1.Profile, { nullable: true }),
    __metadata("design:type", Profile_1.Profile)
], UserResponse.prototype, "profile", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    register(options, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.username.length <= 2) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Username too short",
                        },
                    ],
                };
            }
            if (options.username.includes("@")) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Cannot include @",
                        },
                    ],
                };
            }
            if (options.email.length <= 2) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Invalid email",
                        },
                    ],
                };
            }
            if (!options.email.includes("@")) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Invalid email",
                        },
                    ],
                };
            }
            if (options.password.length <= 3) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "Password too short",
                        },
                    ],
                };
            }
            const hashedPassword = yield argon2_1.default.hash(options.password);
            let user;
            try {
                user = yield prisma.user.create({
                    data: {
                        email: options.email,
                        username: options.username,
                        password: hashedPassword,
                    },
                });
            }
            catch (err) {
                if (err.code === "23505" || err.message.includes("Unique constraint")) {
                    return {
                        errors: [
                            {
                                field: "username",
                                message: err.message,
                            },
                        ],
                    };
                }
                console.log(err.message);
            }
            req.session.userId = user === null || user === void 0 ? void 0 : user.id;
            return { user };
        });
    }
    login(username, password, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    username: username,
                },
            });
            if (!user) {
                return {
                    errors: [
                        {
                            field: "username",
                            message: "Could not find username",
                        },
                    ],
                };
            }
            const valid = yield argon2_1.default.verify(user.password, password);
            if (!valid) {
                return {
                    errors: [
                        {
                            field: "password",
                            message: "incorrect password",
                        },
                    ],
                };
            }
            req.session.userId = user.id;
            return { user };
        });
    }
    logout({ req, res }) {
        return new Promise((resolve) => {
            req.session.destroy((err) => {
                res.clearCookie("qid");
                if (err) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        });
    }
    forgotPassword(email, { redis }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                return true;
            }
            const token = (0, uuid_1.v4)();
            yield redis.set("forgot-password:" + token, user.id, "ex", 1000 * 60 * 60 * 24 * 3);
            yield (0, sendEmails_1.sendEmail)(email, `<a href="http://localhost:3000/change-password/${token}>reset password</a>"`);
            return true;
        });
    }
    me({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            if (!userId) {
                throw new Error("you are not logged in");
            }
            const user = yield prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });
            return user;
        });
    }
    follow({ req }, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const meId = req.session.userId;
            if (!meId) {
                throw new Error("Not authenticated");
            }
            if (meId === userId) {
                throw new Error("You cant follow yourself");
            }
            const result = yield prisma.follows.create({
                data: {
                    followerId: userId,
                    followingId: meId,
                },
            });
            if (!result) {
                throw new Error("Error with following");
            }
            return true;
        });
    }
    followers({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const followers = yield prisma.follows.findMany({
                where: {
                    followerId: userId,
                },
            });
            let realFollowers = [];
            for (const f of followers) {
                const user = yield prisma.user.findUnique({
                    where: {
                        id: f.followingId,
                    },
                });
                if (!user) {
                    throw new Error("Error with finding followers");
                }
                realFollowers.push(user);
            }
            return realFollowers;
        });
    }
    findUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    username: username,
                },
            });
            if (!user) {
                throw new Error("User does not exist");
            }
            return user;
        });
    }
    createProfile(bio, { req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const profile = yield prisma.profile.create({
                data: {
                    bio,
                    user: {
                        connect: {
                            id: userId,
                        },
                    },
                },
                include: {
                    user: true,
                },
            });
            if (!profile) {
                throw new Error("Cant create profile");
            }
            return profile;
        });
    }
    profile({ req }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: req.session.userId,
                },
                include: {
                    profile: true,
                },
            });
            const profile = yield prisma.profile.findUnique({
                where: {
                    id: (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.id,
                },
                include: {
                    user: {
                        include: {
                            _count: {
                                select: {
                                    posts: true,
                                    followedBy: true,
                                    following: true,
                                },
                            },
                            posts: {
                                include: {
                                    author: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!user) {
                throw new Error("User does not exist");
            }
            return profile;
        });
    }
    profileFromId(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id,
                },
                include: {
                    profile: true,
                },
            });
            if (!user) {
                throw new Error("user does not exits");
            }
            const profile = yield prisma.profile.findUnique({
                where: {
                    id: (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.id,
                },
                include: {
                    user: {
                        include: {
                            _count: {
                                select: {
                                    posts: true,
                                    followedBy: true,
                                    following: true,
                                },
                            },
                            posts: {
                                include: {
                                    author: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!profile) {
                throw new Error("User does not exist");
            }
            return profile;
        });
    }
    activeConversations({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const conversations = yield prisma.conversation.findMany({
                where: {
                    participants: {
                        some: {
                            userId,
                        },
                    },
                },
                include: {
                    participants: {
                        include: {
                            user: true,
                        },
                    },
                },
            });
            return conversations;
        });
    }
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    username,
                },
                include: {
                    profile: true,
                },
            });
            if (!user) {
                throw new Error("user does not exist");
            }
            const profile = yield prisma.profile.findUnique({
                where: {
                    userId: user === null || user === void 0 ? void 0 : user.id,
                },
                include: {
                    user: true,
                },
            });
            if (!profile) {
                throw new Error("Profile not created");
            }
            return profile;
        });
    }
    followings({ req }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.session.userId;
            const followers = yield prisma.follows.findMany({
                where: {
                    followingId: userId,
                },
            });
            let realFollowings = [];
            for (const f of followers) {
                const user = yield prisma.user.findUnique({
                    where: {
                        id: f.followerId,
                    },
                });
                if (!user) {
                    throw new Error("Cant find users");
                }
                realFollowings.push(user);
            }
            return realFollowings;
        });
    }
    editProfile({ req }, bio, email) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma.user.findUnique({
                where: {
                    id: req.session.userId,
                },
                include: {
                    profile: true,
                },
            });
            if (email.length <= 2) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Invalid email",
                        },
                    ],
                };
            }
            if (!email.includes("@")) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Invalid email",
                        },
                    ],
                };
            }
            const profile = yield prisma.profile.update({
                where: {
                    id: (_a = user === null || user === void 0 ? void 0 : user.profile) === null || _a === void 0 ? void 0 : _a.id,
                },
                data: {
                    bio,
                    user: {
                        update: {
                            email,
                        },
                    },
                },
                include: {
                    user: true,
                },
            });
            return { profile };
        });
    }
    unfollow({ req }, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const meId = req.session.userId;
            if (!meId) {
                throw new Error("Not authenticated");
            }
            if (meId === userId) {
                throw new Error("You cant follow yourself");
            }
            const result = yield prisma.follows.delete({
                where: {
                    followerId_followingId: {
                        followerId: userId,
                        followingId: meId,
                    },
                },
            });
            if (!result) {
                throw new Error("Error with following");
            }
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("options", () => UsernamePasswordInput_1.UsernamePasswordInput)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UsernamePasswordInput_1.UsernamePasswordInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("username")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "logout", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "forgotPassword", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "follow", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "followers", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Profile_1.Profile),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("bio")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createProfile", null);
__decorate([
    (0, type_graphql_1.Query)(() => Profile_1.Profile),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profile", null);
__decorate([
    (0, type_graphql_1.Query)(() => Profile_1.Profile),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profileFromId", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Conversation_1.Conversation]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "activeConversations", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Profile_1.Profile),
    __param(0, (0, type_graphql_1.Arg)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "findByUsername", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "followings", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("bio")),
    __param(2, (0, type_graphql_1.Arg)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "editProfile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "unfollow", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)(User_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map