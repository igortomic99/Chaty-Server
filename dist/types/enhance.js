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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Conversation: crudResolvers.ConversationCrudResolver,
    Message: crudResolvers.MessageCrudResolver,
    Profile: crudResolvers.ProfileCrudResolver,
    Post: crudResolvers.PostCrudResolver
};
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Conversation: relationResolvers.ConversationRelationsResolver,
    Message: relationResolvers.MessageRelationsResolver,
    Profile: relationResolvers.ProfileRelationsResolver,
    Post: relationResolvers.PostRelationsResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    },
    Conversation: {
        conversation: actionResolvers.FindUniqueConversationResolver,
        findFirstConversation: actionResolvers.FindFirstConversationResolver,
        conversations: actionResolvers.FindManyConversationResolver,
        createConversation: actionResolvers.CreateConversationResolver,
        createManyConversation: actionResolvers.CreateManyConversationResolver,
        deleteConversation: actionResolvers.DeleteConversationResolver,
        updateConversation: actionResolvers.UpdateConversationResolver,
        deleteManyConversation: actionResolvers.DeleteManyConversationResolver,
        updateManyConversation: actionResolvers.UpdateManyConversationResolver,
        upsertConversation: actionResolvers.UpsertConversationResolver,
        aggregateConversation: actionResolvers.AggregateConversationResolver,
        groupByConversation: actionResolvers.GroupByConversationResolver
    },
    Message: {
        message: actionResolvers.FindUniqueMessageResolver,
        findFirstMessage: actionResolvers.FindFirstMessageResolver,
        messages: actionResolvers.FindManyMessageResolver,
        createMessage: actionResolvers.CreateMessageResolver,
        createManyMessage: actionResolvers.CreateManyMessageResolver,
        deleteMessage: actionResolvers.DeleteMessageResolver,
        updateMessage: actionResolvers.UpdateMessageResolver,
        deleteManyMessage: actionResolvers.DeleteManyMessageResolver,
        updateManyMessage: actionResolvers.UpdateManyMessageResolver,
        upsertMessage: actionResolvers.UpsertMessageResolver,
        aggregateMessage: actionResolvers.AggregateMessageResolver,
        groupByMessage: actionResolvers.GroupByMessageResolver
    },
    Profile: {
        profile: actionResolvers.FindUniqueProfileResolver,
        findFirstProfile: actionResolvers.FindFirstProfileResolver,
        profiles: actionResolvers.FindManyProfileResolver,
        createProfile: actionResolvers.CreateProfileResolver,
        createManyProfile: actionResolvers.CreateManyProfileResolver,
        deleteProfile: actionResolvers.DeleteProfileResolver,
        updateProfile: actionResolvers.UpdateProfileResolver,
        deleteManyProfile: actionResolvers.DeleteManyProfileResolver,
        updateManyProfile: actionResolvers.UpdateManyProfileResolver,
        upsertProfile: actionResolvers.UpsertProfileResolver,
        aggregateProfile: actionResolvers.AggregateProfileResolver,
        groupByProfile: actionResolvers.GroupByProfileResolver
    },
    Post: {
        post: actionResolvers.FindUniquePostResolver,
        findFirstPost: actionResolvers.FindFirstPostResolver,
        posts: actionResolvers.FindManyPostResolver,
        createPost: actionResolvers.CreatePostResolver,
        createManyPost: actionResolvers.CreateManyPostResolver,
        deletePost: actionResolvers.DeletePostResolver,
        updatePost: actionResolvers.UpdatePostResolver,
        deleteManyPost: actionResolvers.DeleteManyPostResolver,
        updateManyPost: actionResolvers.UpdateManyPostResolver,
        upsertPost: actionResolvers.UpsertPostResolver,
        aggregatePost: actionResolvers.AggregatePostResolver,
        groupByPost: actionResolvers.GroupByPostResolver
    }
};
const resolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
    Conversation: ["conversation", "findFirstConversation", "conversations", "createConversation", "createManyConversation", "deleteConversation", "updateConversation", "deleteManyConversation", "updateManyConversation", "upsertConversation", "aggregateConversation", "groupByConversation"],
    Message: ["message", "findFirstMessage", "messages", "createMessage", "createManyMessage", "deleteMessage", "updateMessage", "deleteManyMessage", "updateManyMessage", "upsertMessage", "aggregateMessage", "groupByMessage"],
    Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
    Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"]
};
const relationResolversInfo = {
    User: ["profile", "conversations", "Message", "posts", "friends", "friendsRelation"],
    Conversation: ["participants", "messages"],
    Message: ["author", "conversation"],
    Profile: ["user"],
    Post: ["author"]
};
const modelsInfo = {
    User: ["id", "email", "username", "role"],
    Conversation: ["id", "createdAt", "updatedAt"],
    Message: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    Profile: ["id", "bio", "userId"],
    Post: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"]
};
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserOrderByWithRelationInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserWhereUniqueInput: ["id", "email", "username"],
    UserOrderByWithAggregationInput: ["id", "email", "username", "role", "_count", "_max", "_min"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "role"],
    ConversationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "participants", "messages"],
    ConversationOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "participants", "messages"],
    ConversationWhereUniqueInput: ["id"],
    ConversationOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "_count", "_max", "_min"],
    ConversationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
    MessageWhereInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "updatedAt", "author", "conversation", "userId", "conversationId"],
    MessageOrderByWithRelationInput: ["id", "text", "createdAt", "updatedAt", "author", "conversation", "userId", "conversationId"],
    MessageWhereUniqueInput: ["id"],
    MessageOrderByWithAggregationInput: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId", "_count", "_avg", "_max", "_min", "_sum"],
    MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
    ProfileOrderByWithRelationInput: ["id", "bio", "user", "userId"],
    ProfileWhereUniqueInput: ["id"],
    ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_max", "_min"],
    ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
    PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "author", "userId"],
    PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "author", "userId"],
    PostWhereUniqueInput: ["id"],
    PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    UserCreateInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserUpdateInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserCreateManyInput: ["id", "email", "username", "role"],
    UserUpdateManyMutationInput: ["id", "email", "username", "role"],
    ConversationCreateInput: ["id", "createdAt", "updatedAt", "participants", "messages"],
    ConversationUpdateInput: ["id", "createdAt", "updatedAt", "participants", "messages"],
    ConversationCreateManyInput: ["id", "createdAt", "updatedAt"],
    ConversationUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
    MessageCreateInput: ["text", "createdAt", "updatedAt", "author", "conversation"],
    MessageUpdateInput: ["text", "createdAt", "updatedAt", "author", "conversation"],
    MessageCreateManyInput: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    MessageUpdateManyMutationInput: ["text", "createdAt", "updatedAt"],
    ProfileCreateInput: ["id", "bio", "user"],
    ProfileUpdateInput: ["id", "bio", "user"],
    ProfileCreateManyInput: ["id", "bio", "userId"],
    ProfileUpdateManyMutationInput: ["id", "bio"],
    PostCreateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostUpdateInput: ["createdAt", "updatedAt", "title", "content", "published", "author"],
    PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    PostUpdateManyMutationInput: ["createdAt", "updatedAt", "title", "content", "published"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumRoleFilter: ["equals", "in", "notIn", "not"],
    ProfileRelationFilter: ["is", "isNot"],
    ConversationListRelationFilter: ["every", "some", "none"],
    MessageListRelationFilter: ["every", "some", "none"],
    PostListRelationFilter: ["every", "some", "none"],
    UserListRelationFilter: ["every", "some", "none"],
    ConversationOrderByRelationAggregateInput: ["_count"],
    MessageOrderByRelationAggregateInput: ["_count"],
    PostOrderByRelationAggregateInput: ["_count"],
    UserOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "email", "username", "role"],
    UserMaxOrderByAggregateInput: ["id", "email", "username", "role"],
    UserMinOrderByAggregateInput: ["id", "email", "username", "role"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    ConversationCountOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
    ConversationMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
    ConversationMinOrderByAggregateInput: ["id", "createdAt", "updatedAt"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserRelationFilter: ["is", "isNot"],
    ConversationRelationFilter: ["is", "isNot"],
    MessageCountOrderByAggregateInput: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    MessageAvgOrderByAggregateInput: ["id"],
    MessageMaxOrderByAggregateInput: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    MessageMinOrderByAggregateInput: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    MessageSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
    ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    PostAvgOrderByAggregateInput: ["id"],
    PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    PostSumOrderByAggregateInput: ["id"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    ConversationCreateNestedManyWithoutParticipantsInput: ["create", "connectOrCreate", "connect"],
    MessageCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
    UserCreateNestedManyWithoutFriendsRelationInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedManyWithoutFriendsInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    EnumRoleFieldUpdateOperationsInput: ["set"],
    ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
    ConversationUpdateManyWithoutParticipantsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    MessageUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserUpdateManyWithoutFriendsRelationInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserUpdateManyWithoutFriendsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedManyWithoutConversationsInput: ["create", "connectOrCreate", "connect"],
    MessageCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    UserUpdateManyWithoutConversationsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    MessageUpdateManyWithoutConversationInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
    UserCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
    ConversationCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutMessageInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    ConversationUpdateOneRequiredWithoutMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
    UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    ProfileCreateWithoutUserInput: ["id", "bio"],
    ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
    ConversationCreateWithoutParticipantsInput: ["id", "createdAt", "updatedAt", "messages"],
    ConversationCreateOrConnectWithoutParticipantsInput: ["where", "create"],
    MessageCreateWithoutAuthorInput: ["text", "createdAt", "updatedAt", "conversation"],
    MessageCreateOrConnectWithoutAuthorInput: ["where", "create"],
    MessageCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    PostCreateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
    PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
    PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
    UserCreateWithoutFriendsRelationInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends"],
    UserCreateOrConnectWithoutFriendsRelationInput: ["where", "create"],
    UserCreateWithoutFriendsInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friendsRelation"],
    UserCreateOrConnectWithoutFriendsInput: ["where", "create"],
    ProfileUpsertWithoutUserInput: ["update", "create"],
    ProfileUpdateWithoutUserInput: ["id", "bio"],
    ConversationUpsertWithWhereUniqueWithoutParticipantsInput: ["where", "update", "create"],
    ConversationUpdateWithWhereUniqueWithoutParticipantsInput: ["where", "data"],
    ConversationUpdateManyWithWhereWithoutParticipantsInput: ["where", "data"],
    ConversationScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt"],
    MessageUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    MessageUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    MessageUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
    PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
    PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
    PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    UserUpsertWithWhereUniqueWithoutFriendsRelationInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutFriendsRelationInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutFriendsRelationInput: ["where", "data"],
    UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "role"],
    UserUpsertWithWhereUniqueWithoutFriendsInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutFriendsInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutFriendsInput: ["where", "data"],
    UserCreateWithoutConversationsInput: ["id", "email", "username", "role", "profile", "Message", "posts", "friends", "friendsRelation"],
    UserCreateOrConnectWithoutConversationsInput: ["where", "create"],
    MessageCreateWithoutConversationInput: ["text", "createdAt", "updatedAt", "author"],
    MessageCreateOrConnectWithoutConversationInput: ["where", "create"],
    MessageCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithWhereUniqueWithoutConversationsInput: ["where", "update", "create"],
    UserUpdateWithWhereUniqueWithoutConversationsInput: ["where", "data"],
    UserUpdateManyWithWhereWithoutConversationsInput: ["where", "data"],
    MessageUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
    MessageUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
    MessageUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
    UserCreateWithoutMessageInput: ["id", "email", "username", "role", "profile", "conversations", "posts", "friends", "friendsRelation"],
    UserCreateOrConnectWithoutMessageInput: ["where", "create"],
    ConversationCreateWithoutMessagesInput: ["id", "createdAt", "updatedAt", "participants"],
    ConversationCreateOrConnectWithoutMessagesInput: ["where", "create"],
    UserUpsertWithoutMessageInput: ["update", "create"],
    UserUpdateWithoutMessageInput: ["id", "email", "username", "role", "profile", "conversations", "posts", "friends", "friendsRelation"],
    ConversationUpsertWithoutMessagesInput: ["update", "create"],
    ConversationUpdateWithoutMessagesInput: ["id", "createdAt", "updatedAt", "participants"],
    UserCreateWithoutProfileInput: ["id", "email", "username", "role", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserCreateOrConnectWithoutProfileInput: ["where", "create"],
    UserUpsertWithoutProfileInput: ["update", "create"],
    UserUpdateWithoutProfileInput: ["id", "email", "username", "role", "conversations", "Message", "posts", "friends", "friendsRelation"],
    UserCreateWithoutPostsInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "friends", "friendsRelation"],
    UserCreateOrConnectWithoutPostsInput: ["where", "create"],
    UserUpsertWithoutPostsInput: ["update", "create"],
    UserUpdateWithoutPostsInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "friends", "friendsRelation"],
    MessageCreateManyAuthorInput: ["id", "text", "createdAt", "updatedAt", "conversationId"],
    PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "published"],
    ConversationUpdateWithoutParticipantsInput: ["id", "createdAt", "updatedAt", "messages"],
    MessageUpdateWithoutAuthorInput: ["text", "createdAt", "updatedAt", "conversation"],
    PostUpdateWithoutAuthorInput: ["createdAt", "updatedAt", "title", "content", "published"],
    UserUpdateWithoutFriendsRelationInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friends"],
    UserUpdateWithoutFriendsInput: ["id", "email", "username", "role", "profile", "conversations", "Message", "posts", "friendsRelation"],
    MessageCreateManyConversationInput: ["id", "text", "createdAt", "updatedAt", "userId"],
    UserUpdateWithoutConversationsInput: ["id", "email", "username", "role", "profile", "Message", "posts", "friends", "friendsRelation"],
    MessageUpdateWithoutConversationInput: ["text", "createdAt", "updatedAt", "author"]
};
const outputsInfo = {
    AggregateUser: ["_count", "_min", "_max"],
    UserGroupBy: ["id", "email", "username", "role", "_count", "_min", "_max"],
    AggregateConversation: ["_count", "_min", "_max"],
    ConversationGroupBy: ["id", "createdAt", "updatedAt", "_count", "_min", "_max"],
    AggregateMessage: ["_count", "_avg", "_sum", "_min", "_max"],
    MessageGroupBy: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateProfile: ["_count", "_min", "_max"],
    ProfileGroupBy: ["id", "bio", "userId", "_count", "_min", "_max"],
    AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
    PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["conversations", "Message", "posts", "friends", "friendsRelation"],
    UserCountAggregate: ["id", "email", "username", "role", "_all"],
    UserMinAggregate: ["id", "email", "username", "role"],
    UserMaxAggregate: ["id", "email", "username", "role"],
    ConversationCount: ["participants", "messages"],
    ConversationCountAggregate: ["id", "createdAt", "updatedAt", "_all"],
    ConversationMinAggregate: ["id", "createdAt", "updatedAt"],
    ConversationMaxAggregate: ["id", "createdAt", "updatedAt"],
    MessageCountAggregate: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId", "_all"],
    MessageAvgAggregate: ["id"],
    MessageSumAggregate: ["id"],
    MessageMinAggregate: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    MessageMaxAggregate: ["id", "text", "createdAt", "updatedAt", "userId", "conversationId"],
    ProfileCountAggregate: ["id", "bio", "userId", "_all"],
    ProfileMinAggregate: ["id", "bio", "userId"],
    ProfileMaxAggregate: ["id", "bio", "userId"],
    PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId", "_all"],
    PostAvgAggregate: ["id"],
    PostSumAggregate: ["id"],
    PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"],
    PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "published", "userId"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueConversationArgs: ["where"],
    FindFirstConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyConversationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateConversationArgs: ["data"],
    CreateManyConversationArgs: ["data", "skipDuplicates"],
    DeleteConversationArgs: ["where"],
    UpdateConversationArgs: ["data", "where"],
    DeleteManyConversationArgs: ["where"],
    UpdateManyConversationArgs: ["data", "where"],
    UpsertConversationArgs: ["where", "create", "update"],
    AggregateConversationArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByConversationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueMessageArgs: ["where"],
    FindFirstMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyMessageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateMessageArgs: ["data"],
    CreateManyMessageArgs: ["data", "skipDuplicates"],
    DeleteMessageArgs: ["where"],
    UpdateMessageArgs: ["data", "where"],
    DeleteManyMessageArgs: ["where"],
    UpdateManyMessageArgs: ["data", "where"],
    UpsertMessageArgs: ["where", "create", "update"],
    AggregateMessageArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByMessageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniqueProfileArgs: ["where"],
    FindFirstProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyProfileArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateProfileArgs: ["data"],
    CreateManyProfileArgs: ["data", "skipDuplicates"],
    DeleteProfileArgs: ["where"],
    UpdateProfileArgs: ["data", "where"],
    DeleteManyProfileArgs: ["where"],
    UpdateManyProfileArgs: ["data", "where"],
    UpsertProfileArgs: ["where", "create", "update"],
    AggregateProfileArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByProfileArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    FindUniquePostArgs: ["where"],
    FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreatePostArgs: ["data"],
    CreateManyPostArgs: ["data", "skipDuplicates"],
    DeletePostArgs: ["where"],
    UpdatePostArgs: ["data", "where"],
    DeleteManyPostArgs: ["where"],
    UpdateManyPostArgs: ["data", "where"],
    UpsertPostArgs: ["where", "create", "update"],
    AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = resolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
                }
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            for (const decorator of decorators) {
                decorator(relationResolverTarget, relationResolverActionName, Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName));
            }
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
//# sourceMappingURL=enhance.js.map