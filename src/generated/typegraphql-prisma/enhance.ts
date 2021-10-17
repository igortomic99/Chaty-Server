import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Profile: crudResolvers.ProfileCrudResolver,
  Follows: crudResolvers.FollowsCrudResolver,
  Conversation: crudResolvers.ConversationCrudResolver,
  UsersInConversations: crudResolvers.UsersInConversationsCrudResolver,
  Message: crudResolvers.MessageCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Upvote: crudResolvers.UpvoteCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Profile: relationResolvers.ProfileRelationsResolver,
  Follows: relationResolvers.FollowsRelationsResolver,
  Conversation: relationResolvers.ConversationRelationsResolver,
  UsersInConversations: relationResolvers.UsersInConversationsRelationsResolver,
  Message: relationResolvers.MessageRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Upvote: relationResolvers.UpvoteRelationsResolver
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
  Follows: {
    findUniqueFollows: actionResolvers.FindUniqueFollowsResolver,
    findFirstFollows: actionResolvers.FindFirstFollowsResolver,
    findManyFollows: actionResolvers.FindManyFollowsResolver,
    createFollows: actionResolvers.CreateFollowsResolver,
    createManyFollows: actionResolvers.CreateManyFollowsResolver,
    deleteFollows: actionResolvers.DeleteFollowsResolver,
    updateFollows: actionResolvers.UpdateFollowsResolver,
    deleteManyFollows: actionResolvers.DeleteManyFollowsResolver,
    updateManyFollows: actionResolvers.UpdateManyFollowsResolver,
    upsertFollows: actionResolvers.UpsertFollowsResolver,
    aggregateFollows: actionResolvers.AggregateFollowsResolver,
    groupByFollows: actionResolvers.GroupByFollowsResolver
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
  UsersInConversations: {
    findUniqueUsersInConversations: actionResolvers.FindUniqueUsersInConversationsResolver,
    findFirstUsersInConversations: actionResolvers.FindFirstUsersInConversationsResolver,
    findManyUsersInConversations: actionResolvers.FindManyUsersInConversationsResolver,
    createUsersInConversations: actionResolvers.CreateUsersInConversationsResolver,
    createManyUsersInConversations: actionResolvers.CreateManyUsersInConversationsResolver,
    deleteUsersInConversations: actionResolvers.DeleteUsersInConversationsResolver,
    updateUsersInConversations: actionResolvers.UpdateUsersInConversationsResolver,
    deleteManyUsersInConversations: actionResolvers.DeleteManyUsersInConversationsResolver,
    updateManyUsersInConversations: actionResolvers.UpdateManyUsersInConversationsResolver,
    upsertUsersInConversations: actionResolvers.UpsertUsersInConversationsResolver,
    aggregateUsersInConversations: actionResolvers.AggregateUsersInConversationsResolver,
    groupByUsersInConversations: actionResolvers.GroupByUsersInConversationsResolver
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
  },
  Upvote: {
    upvote: actionResolvers.FindUniqueUpvoteResolver,
    findFirstUpvote: actionResolvers.FindFirstUpvoteResolver,
    upvotes: actionResolvers.FindManyUpvoteResolver,
    createUpvote: actionResolvers.CreateUpvoteResolver,
    createManyUpvote: actionResolvers.CreateManyUpvoteResolver,
    deleteUpvote: actionResolvers.DeleteUpvoteResolver,
    updateUpvote: actionResolvers.UpdateUpvoteResolver,
    deleteManyUpvote: actionResolvers.DeleteManyUpvoteResolver,
    updateManyUpvote: actionResolvers.UpdateManyUpvoteResolver,
    upsertUpvote: actionResolvers.UpsertUpvoteResolver,
    aggregateUpvote: actionResolvers.AggregateUpvoteResolver,
    groupByUpvote: actionResolvers.GroupByUpvoteResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"],
  Profile: ["profile", "findFirstProfile", "profiles", "createProfile", "createManyProfile", "deleteProfile", "updateProfile", "deleteManyProfile", "updateManyProfile", "upsertProfile", "aggregateProfile", "groupByProfile"],
  Follows: ["findUniqueFollows", "findFirstFollows", "findManyFollows", "createFollows", "createManyFollows", "deleteFollows", "updateFollows", "deleteManyFollows", "updateManyFollows", "upsertFollows", "aggregateFollows", "groupByFollows"],
  Conversation: ["conversation", "findFirstConversation", "conversations", "createConversation", "createManyConversation", "deleteConversation", "updateConversation", "deleteManyConversation", "updateManyConversation", "upsertConversation", "aggregateConversation", "groupByConversation"],
  UsersInConversations: ["findUniqueUsersInConversations", "findFirstUsersInConversations", "findManyUsersInConversations", "createUsersInConversations", "createManyUsersInConversations", "deleteUsersInConversations", "updateUsersInConversations", "deleteManyUsersInConversations", "updateManyUsersInConversations", "upsertUsersInConversations", "aggregateUsersInConversations", "groupByUsersInConversations"],
  Message: ["message", "findFirstMessage", "messages", "createMessage", "createManyMessage", "deleteMessage", "updateMessage", "deleteManyMessage", "updateManyMessage", "upsertMessage", "aggregateMessage", "groupByMessage"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Upvote: ["upvote", "findFirstUpvote", "upvotes", "createUpvote", "createManyUpvote", "deleteUpvote", "updateUpvote", "deleteManyUpvote", "updateManyUpvote", "upsertUpvote", "aggregateUpvote", "groupByUpvote"]
};
const relationResolversInfo = {
  User: ["conversations", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  Profile: ["user"],
  Follows: ["follower", "following"],
  Conversation: ["participants", "messages"],
  UsersInConversations: ["conversation", "user"],
  Message: ["author", "conversation"],
  Post: ["author", "upvotes"],
  Upvote: ["user", "post"]
};
const modelsInfo = {
  User: ["id", "email", "username", "password"],
  Profile: ["id", "bio", "userId"],
  Follows: ["followerId", "followingId"],
  Conversation: ["id", "createdAt"],
  UsersInConversations: ["conversationId", "userId"],
  Message: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  Post: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  Upvote: ["value", "userId", "postId"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserOrderByWithRelationInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "email", "username", "password", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "password"],
  ProfileWhereInput: ["AND", "OR", "NOT", "id", "bio", "user", "userId"],
  ProfileOrderByWithRelationInput: ["id", "bio", "user", "userId"],
  ProfileWhereUniqueInput: ["id", "userId"],
  ProfileOrderByWithAggregationInput: ["id", "bio", "userId", "_count", "_max", "_min"],
  ProfileScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bio", "userId"],
  FollowsWhereInput: ["AND", "OR", "NOT", "follower", "followerId", "following", "followingId"],
  FollowsOrderByWithRelationInput: ["follower", "followerId", "following", "followingId"],
  FollowsWhereUniqueInput: ["followerId_followingId"],
  FollowsOrderByWithAggregationInput: ["followerId", "followingId", "_count", "_max", "_min"],
  FollowsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "followerId", "followingId"],
  ConversationWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "participants", "messages"],
  ConversationOrderByWithRelationInput: ["id", "createdAt", "participants", "messages"],
  ConversationWhereUniqueInput: ["id"],
  ConversationOrderByWithAggregationInput: ["id", "createdAt", "_count", "_max", "_min"],
  ConversationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt"],
  UsersInConversationsWhereInput: ["AND", "OR", "NOT", "conversation", "conversationId", "user", "userId"],
  UsersInConversationsOrderByWithRelationInput: ["conversation", "conversationId", "user", "userId"],
  UsersInConversationsWhereUniqueInput: ["userId_conversationId"],
  UsersInConversationsOrderByWithAggregationInput: ["conversationId", "userId", "_count", "_max", "_min"],
  UsersInConversationsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "conversationId", "userId"],
  MessageWhereInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "author", "conversation", "userId", "conversationId", "read"],
  MessageOrderByWithRelationInput: ["id", "text", "createdAt", "author", "conversation", "userId", "conversationId", "read"],
  MessageWhereUniqueInput: ["id"],
  MessageOrderByWithAggregationInput: ["id", "text", "createdAt", "userId", "conversationId", "read", "_count", "_avg", "_max", "_min", "_sum"],
  MessageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "userId", "conversationId", "read"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "author", "userId", "points", "upvotes"],
  PostOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "title", "content", "author", "userId", "points", "upvotes"],
  PostWhereUniqueInput: ["id"],
  PostOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points", "_count", "_avg", "_max", "_min", "_sum"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  UpvoteWhereInput: ["AND", "OR", "NOT", "value", "userId", "postId", "user", "post"],
  UpvoteOrderByWithRelationInput: ["value", "userId", "postId", "user", "post"],
  UpvoteWhereUniqueInput: ["userId_postId"],
  UpvoteOrderByWithAggregationInput: ["value", "userId", "postId", "_count", "_avg", "_max", "_min", "_sum"],
  UpvoteScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "value", "userId", "postId"],
  UserCreateInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserUpdateInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserCreateManyInput: ["id", "email", "username", "password"],
  UserUpdateManyMutationInput: ["id", "email", "username", "password"],
  ProfileCreateInput: ["id", "bio", "user"],
  ProfileUpdateInput: ["id", "bio", "user"],
  ProfileCreateManyInput: ["id", "bio", "userId"],
  ProfileUpdateManyMutationInput: ["id", "bio"],
  FollowsCreateInput: ["follower", "following"],
  FollowsUpdateInput: ["follower", "following"],
  FollowsCreateManyInput: ["followerId", "followingId"],
  FollowsUpdateManyMutationInput: [],
  ConversationCreateInput: ["id", "createdAt", "participants", "messages"],
  ConversationUpdateInput: ["id", "createdAt", "participants", "messages"],
  ConversationCreateManyInput: ["id", "createdAt"],
  ConversationUpdateManyMutationInput: ["id", "createdAt"],
  UsersInConversationsCreateInput: ["conversation", "user"],
  UsersInConversationsUpdateInput: ["conversation", "user"],
  UsersInConversationsCreateManyInput: ["conversationId", "userId"],
  UsersInConversationsUpdateManyMutationInput: [],
  MessageCreateInput: ["text", "createdAt", "read", "author", "conversation"],
  MessageUpdateInput: ["text", "createdAt", "read", "author", "conversation"],
  MessageCreateManyInput: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  MessageUpdateManyMutationInput: ["text", "createdAt", "read"],
  PostCreateInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "author", "upvotes"],
  PostUpdateInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "author", "upvotes"],
  PostCreateManyInput: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  PostUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "title", "content", "points"],
  UpvoteCreateInput: ["value", "user", "post"],
  UpvoteUpdateInput: ["value", "user", "post"],
  UpvoteCreateManyInput: ["value", "userId", "postId"],
  UpvoteUpdateManyMutationInput: ["value"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  UsersInConversationsListRelationFilter: ["every", "some", "none"],
  MessageListRelationFilter: ["every", "some", "none"],
  PostListRelationFilter: ["every", "some", "none"],
  ProfileRelationFilter: ["is", "isNot"],
  UpvoteListRelationFilter: ["every", "some", "none"],
  FollowsListRelationFilter: ["every", "some", "none"],
  UsersInConversationsOrderByRelationAggregateInput: ["_count"],
  MessageOrderByRelationAggregateInput: ["_count"],
  PostOrderByRelationAggregateInput: ["_count"],
  UpvoteOrderByRelationAggregateInput: ["_count"],
  FollowsOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "username", "password"],
  UserMaxOrderByAggregateInput: ["id", "email", "username", "password"],
  UserMinOrderByAggregateInput: ["id", "email", "username", "password"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  ProfileCountOrderByAggregateInput: ["id", "bio", "userId"],
  ProfileMaxOrderByAggregateInput: ["id", "bio", "userId"],
  ProfileMinOrderByAggregateInput: ["id", "bio", "userId"],
  FollowsFollowerIdFollowingIdCompoundUniqueInput: ["followerId", "followingId"],
  FollowsCountOrderByAggregateInput: ["followerId", "followingId"],
  FollowsMaxOrderByAggregateInput: ["followerId", "followingId"],
  FollowsMinOrderByAggregateInput: ["followerId", "followingId"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ConversationCountOrderByAggregateInput: ["id", "createdAt"],
  ConversationMaxOrderByAggregateInput: ["id", "createdAt"],
  ConversationMinOrderByAggregateInput: ["id", "createdAt"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  ConversationRelationFilter: ["is", "isNot"],
  UsersInConversationsUserIdConversationIdCompoundUniqueInput: ["userId", "conversationId"],
  UsersInConversationsCountOrderByAggregateInput: ["conversationId", "userId"],
  UsersInConversationsMaxOrderByAggregateInput: ["conversationId", "userId"],
  UsersInConversationsMinOrderByAggregateInput: ["conversationId", "userId"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  MessageCountOrderByAggregateInput: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  MessageAvgOrderByAggregateInput: ["id"],
  MessageMaxOrderByAggregateInput: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  MessageMinOrderByAggregateInput: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  MessageSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  PostCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  PostAvgOrderByAggregateInput: ["points"],
  PostMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  PostMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  PostSumOrderByAggregateInput: ["points"],
  PostRelationFilter: ["is", "isNot"],
  UpvoteUserIdPostIdCompoundUniqueInput: ["userId", "postId"],
  UpvoteCountOrderByAggregateInput: ["value", "userId", "postId"],
  UpvoteAvgOrderByAggregateInput: ["value"],
  UpvoteMaxOrderByAggregateInput: ["value", "userId", "postId"],
  UpvoteMinOrderByAggregateInput: ["value", "userId", "postId"],
  UpvoteSumOrderByAggregateInput: ["value"],
  UsersInConversationsCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MessageCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProfileCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
  UpvoteCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FollowsCreateNestedManyWithoutFollowerInput: ["create", "connectOrCreate", "createMany", "connect"],
  FollowsCreateNestedManyWithoutFollowingInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  UsersInConversationsUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MessageUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProfileUpdateOneWithoutUserInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  UpvoteUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  FollowsUpdateManyWithoutFollowerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  FollowsUpdateManyWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProfileInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProfileInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutFollowedByInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFollowingInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutFollowedByInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutFollowingInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UsersInConversationsCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
  MessageCreateNestedManyWithoutConversationInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  UsersInConversationsUpdateManyWithoutConversationInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  MessageUpdateManyWithoutConversationInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ConversationCreateNestedOneWithoutParticipantsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutConversationsInput: ["create", "connectOrCreate", "connect"],
  ConversationUpdateOneRequiredWithoutParticipantsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutConversationsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutMessageInput: ["create", "connectOrCreate", "connect"],
  ConversationCreateNestedOneWithoutMessagesInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutMessageInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ConversationUpdateOneRequiredWithoutMessagesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  UpvoteCreateNestedManyWithoutPostInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UpvoteUpdateManyWithoutPostInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutUpvotesInput: ["create", "connectOrCreate", "connect"],
  PostCreateNestedOneWithoutUpvotesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutUpvotesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PostUpdateOneRequiredWithoutUpvotesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UsersInConversationsCreateWithoutUserInput: ["conversation"],
  UsersInConversationsCreateOrConnectWithoutUserInput: ["where", "create"],
  UsersInConversationsCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MessageCreateWithoutAuthorInput: ["text", "createdAt", "read", "conversation"],
  MessageCreateOrConnectWithoutAuthorInput: ["where", "create"],
  MessageCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "upvotes"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  ProfileCreateWithoutUserInput: ["id", "bio"],
  ProfileCreateOrConnectWithoutUserInput: ["where", "create"],
  UpvoteCreateWithoutUserInput: ["value", "post"],
  UpvoteCreateOrConnectWithoutUserInput: ["where", "create"],
  UpvoteCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  FollowsCreateWithoutFollowerInput: ["following"],
  FollowsCreateOrConnectWithoutFollowerInput: ["where", "create"],
  FollowsCreateManyFollowerInputEnvelope: ["data", "skipDuplicates"],
  FollowsCreateWithoutFollowingInput: ["follower"],
  FollowsCreateOrConnectWithoutFollowingInput: ["where", "create"],
  FollowsCreateManyFollowingInputEnvelope: ["data", "skipDuplicates"],
  UsersInConversationsUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UsersInConversationsUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UsersInConversationsUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UsersInConversationsScalarWhereInput: ["AND", "OR", "NOT", "conversationId", "userId"],
  MessageUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  MessageScalarWhereInput: ["AND", "OR", "NOT", "id", "text", "createdAt", "userId", "conversationId", "read"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  ProfileUpsertWithoutUserInput: ["update", "create"],
  ProfileUpdateWithoutUserInput: ["id", "bio"],
  UpvoteUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UpvoteUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UpvoteUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UpvoteScalarWhereInput: ["AND", "OR", "NOT", "value", "userId", "postId"],
  FollowsUpsertWithWhereUniqueWithoutFollowerInput: ["where", "update", "create"],
  FollowsUpdateWithWhereUniqueWithoutFollowerInput: ["where", "data"],
  FollowsUpdateManyWithWhereWithoutFollowerInput: ["where", "data"],
  FollowsScalarWhereInput: ["AND", "OR", "NOT", "followerId", "followingId"],
  FollowsUpsertWithWhereUniqueWithoutFollowingInput: ["where", "update", "create"],
  FollowsUpdateWithWhereUniqueWithoutFollowingInput: ["where", "data"],
  FollowsUpdateManyWithWhereWithoutFollowingInput: ["where", "data"],
  UserCreateWithoutProfileInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "upvotes", "followedBy", "following"],
  UserCreateOrConnectWithoutProfileInput: ["where", "create"],
  UserUpsertWithoutProfileInput: ["update", "create"],
  UserUpdateWithoutProfileInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "upvotes", "followedBy", "following"],
  UserCreateWithoutFollowedByInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "following"],
  UserCreateOrConnectWithoutFollowedByInput: ["where", "create"],
  UserCreateWithoutFollowingInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy"],
  UserCreateOrConnectWithoutFollowingInput: ["where", "create"],
  UserUpsertWithoutFollowedByInput: ["update", "create"],
  UserUpdateWithoutFollowedByInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "following"],
  UserUpsertWithoutFollowingInput: ["update", "create"],
  UserUpdateWithoutFollowingInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "upvotes", "followedBy"],
  UsersInConversationsCreateWithoutConversationInput: ["user"],
  UsersInConversationsCreateOrConnectWithoutConversationInput: ["where", "create"],
  UsersInConversationsCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
  MessageCreateWithoutConversationInput: ["text", "createdAt", "read", "author"],
  MessageCreateOrConnectWithoutConversationInput: ["where", "create"],
  MessageCreateManyConversationInputEnvelope: ["data", "skipDuplicates"],
  UsersInConversationsUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
  UsersInConversationsUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
  UsersInConversationsUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
  MessageUpsertWithWhereUniqueWithoutConversationInput: ["where", "update", "create"],
  MessageUpdateWithWhereUniqueWithoutConversationInput: ["where", "data"],
  MessageUpdateManyWithWhereWithoutConversationInput: ["where", "data"],
  ConversationCreateWithoutParticipantsInput: ["id", "createdAt", "messages"],
  ConversationCreateOrConnectWithoutParticipantsInput: ["where", "create"],
  UserCreateWithoutConversationsInput: ["id", "email", "username", "password", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserCreateOrConnectWithoutConversationsInput: ["where", "create"],
  ConversationUpsertWithoutParticipantsInput: ["update", "create"],
  ConversationUpdateWithoutParticipantsInput: ["id", "createdAt", "messages"],
  UserUpsertWithoutConversationsInput: ["update", "create"],
  UserUpdateWithoutConversationsInput: ["id", "email", "username", "password", "Message", "posts", "profile", "upvotes", "followedBy", "following"],
  UserCreateWithoutMessageInput: ["id", "email", "username", "password", "conversations", "posts", "profile", "upvotes", "followedBy", "following"],
  UserCreateOrConnectWithoutMessageInput: ["where", "create"],
  ConversationCreateWithoutMessagesInput: ["id", "createdAt", "participants"],
  ConversationCreateOrConnectWithoutMessagesInput: ["where", "create"],
  UserUpsertWithoutMessageInput: ["update", "create"],
  UserUpdateWithoutMessageInput: ["id", "email", "username", "password", "conversations", "posts", "profile", "upvotes", "followedBy", "following"],
  ConversationUpsertWithoutMessagesInput: ["update", "create"],
  ConversationUpdateWithoutMessagesInput: ["id", "createdAt", "participants"],
  UserCreateWithoutPostsInput: ["id", "email", "username", "password", "conversations", "Message", "profile", "upvotes", "followedBy", "following"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UpvoteCreateWithoutPostInput: ["value", "user"],
  UpvoteCreateOrConnectWithoutPostInput: ["where", "create"],
  UpvoteCreateManyPostInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["id", "email", "username", "password", "conversations", "Message", "profile", "upvotes", "followedBy", "following"],
  UpvoteUpsertWithWhereUniqueWithoutPostInput: ["where", "update", "create"],
  UpvoteUpdateWithWhereUniqueWithoutPostInput: ["where", "data"],
  UpvoteUpdateManyWithWhereWithoutPostInput: ["where", "data"],
  UserCreateWithoutUpvotesInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "followedBy", "following"],
  UserCreateOrConnectWithoutUpvotesInput: ["where", "create"],
  PostCreateWithoutUpvotesInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "author"],
  PostCreateOrConnectWithoutUpvotesInput: ["where", "create"],
  UserUpsertWithoutUpvotesInput: ["update", "create"],
  UserUpdateWithoutUpvotesInput: ["id", "email", "username", "password", "conversations", "Message", "posts", "profile", "followedBy", "following"],
  PostUpsertWithoutUpvotesInput: ["update", "create"],
  PostUpdateWithoutUpvotesInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "author"],
  UsersInConversationsCreateManyUserInput: ["conversationId"],
  MessageCreateManyAuthorInput: ["id", "text", "createdAt", "conversationId", "read"],
  PostCreateManyAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "points"],
  UpvoteCreateManyUserInput: ["value", "postId"],
  FollowsCreateManyFollowerInput: ["followingId"],
  FollowsCreateManyFollowingInput: ["followerId"],
  UsersInConversationsUpdateWithoutUserInput: ["conversation"],
  MessageUpdateWithoutAuthorInput: ["text", "createdAt", "read", "conversation"],
  PostUpdateWithoutAuthorInput: ["id", "createdAt", "updatedAt", "title", "content", "points", "upvotes"],
  UpvoteUpdateWithoutUserInput: ["value", "post"],
  FollowsUpdateWithoutFollowerInput: ["following"],
  FollowsUpdateWithoutFollowingInput: ["follower"],
  UsersInConversationsCreateManyConversationInput: ["userId"],
  MessageCreateManyConversationInput: ["id", "text", "createdAt", "userId", "read"],
  UsersInConversationsUpdateWithoutConversationInput: ["user"],
  MessageUpdateWithoutConversationInput: ["text", "createdAt", "read", "author"],
  UpvoteCreateManyPostInput: ["value", "userId"],
  UpvoteUpdateWithoutPostInput: ["value", "user"]
};
const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "username", "password", "_count", "_min", "_max"],
  AggregateProfile: ["_count", "_min", "_max"],
  ProfileGroupBy: ["id", "bio", "userId", "_count", "_min", "_max"],
  AggregateFollows: ["_count", "_min", "_max"],
  FollowsGroupBy: ["followerId", "followingId", "_count", "_min", "_max"],
  AggregateConversation: ["_count", "_min", "_max"],
  ConversationGroupBy: ["id", "createdAt", "_count", "_min", "_max"],
  AggregateUsersInConversations: ["_count", "_min", "_max"],
  UsersInConversationsGroupBy: ["conversationId", "userId", "_count", "_min", "_max"],
  AggregateMessage: ["_count", "_avg", "_sum", "_min", "_max"],
  MessageGroupBy: ["id", "text", "createdAt", "userId", "conversationId", "read", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePost: ["_count", "_avg", "_sum", "_min", "_max"],
  PostGroupBy: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUpvote: ["_count", "_avg", "_sum", "_min", "_max"],
  UpvoteGroupBy: ["value", "userId", "postId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["conversations", "Message", "posts", "upvotes", "followedBy", "following"],
  UserCountAggregate: ["id", "email", "username", "password", "_all"],
  UserMinAggregate: ["id", "email", "username", "password"],
  UserMaxAggregate: ["id", "email", "username", "password"],
  ProfileCountAggregate: ["id", "bio", "userId", "_all"],
  ProfileMinAggregate: ["id", "bio", "userId"],
  ProfileMaxAggregate: ["id", "bio", "userId"],
  FollowsCountAggregate: ["followerId", "followingId", "_all"],
  FollowsMinAggregate: ["followerId", "followingId"],
  FollowsMaxAggregate: ["followerId", "followingId"],
  ConversationCount: ["participants", "messages"],
  ConversationCountAggregate: ["id", "createdAt", "_all"],
  ConversationMinAggregate: ["id", "createdAt"],
  ConversationMaxAggregate: ["id", "createdAt"],
  UsersInConversationsCountAggregate: ["conversationId", "userId", "_all"],
  UsersInConversationsMinAggregate: ["conversationId", "userId"],
  UsersInConversationsMaxAggregate: ["conversationId", "userId"],
  MessageCountAggregate: ["id", "text", "createdAt", "userId", "conversationId", "read", "_all"],
  MessageAvgAggregate: ["id"],
  MessageSumAggregate: ["id"],
  MessageMinAggregate: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  MessageMaxAggregate: ["id", "text", "createdAt", "userId", "conversationId", "read"],
  PostCount: ["upvotes"],
  PostCountAggregate: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points", "_all"],
  PostAvgAggregate: ["points"],
  PostSumAggregate: ["points"],
  PostMinAggregate: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  PostMaxAggregate: ["id", "createdAt", "updatedAt", "title", "content", "userId", "points"],
  UpvoteCountAggregate: ["value", "userId", "postId", "_all"],
  UpvoteAvgAggregate: ["value"],
  UpvoteSumAggregate: ["value"],
  UpvoteMinAggregate: ["value", "userId", "postId"],
  UpvoteMaxAggregate: ["value", "userId", "postId"]
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
  FindUniqueFollowsArgs: ["where"],
  FindFirstFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFollowsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFollowsArgs: ["data"],
  CreateManyFollowsArgs: ["data", "skipDuplicates"],
  DeleteFollowsArgs: ["where"],
  UpdateFollowsArgs: ["data", "where"],
  DeleteManyFollowsArgs: ["where"],
  UpdateManyFollowsArgs: ["data", "where"],
  UpsertFollowsArgs: ["where", "create", "update"],
  AggregateFollowsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFollowsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  FindUniqueUsersInConversationsArgs: ["where"],
  FindFirstUsersInConversationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersInConversationsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsersInConversationsArgs: ["data"],
  CreateManyUsersInConversationsArgs: ["data", "skipDuplicates"],
  DeleteUsersInConversationsArgs: ["where"],
  UpdateUsersInConversationsArgs: ["data", "where"],
  DeleteManyUsersInConversationsArgs: ["where"],
  UpdateManyUsersInConversationsArgs: ["data", "where"],
  UpsertUsersInConversationsArgs: ["where", "create", "update"],
  AggregateUsersInConversationsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsersInConversationsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
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
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUpvoteArgs: ["where"],
  FindFirstUpvoteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUpvoteArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUpvoteArgs: ["data"],
  CreateManyUpvoteArgs: ["data", "skipDuplicates"],
  DeleteUpvoteArgs: ["where"],
  UpdateUpvoteArgs: ["data", "where"],
  DeleteManyUpvoteArgs: ["where"],
  UpdateManyUpvoteArgs: ["data", "where"],
  UpsertUpvoteArgs: ["where", "create", "update"],
  AggregateUpvoteArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUpvoteArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
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
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







