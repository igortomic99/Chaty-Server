import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUsersInConversationsArgs } from "./args/AggregateUsersInConversationsArgs";
import { CreateManyUsersInConversationsArgs } from "./args/CreateManyUsersInConversationsArgs";
import { CreateUsersInConversationsArgs } from "./args/CreateUsersInConversationsArgs";
import { DeleteManyUsersInConversationsArgs } from "./args/DeleteManyUsersInConversationsArgs";
import { DeleteUsersInConversationsArgs } from "./args/DeleteUsersInConversationsArgs";
import { FindFirstUsersInConversationsArgs } from "./args/FindFirstUsersInConversationsArgs";
import { FindManyUsersInConversationsArgs } from "./args/FindManyUsersInConversationsArgs";
import { FindUniqueUsersInConversationsArgs } from "./args/FindUniqueUsersInConversationsArgs";
import { GroupByUsersInConversationsArgs } from "./args/GroupByUsersInConversationsArgs";
import { UpdateManyUsersInConversationsArgs } from "./args/UpdateManyUsersInConversationsArgs";
import { UpdateUsersInConversationsArgs } from "./args/UpdateUsersInConversationsArgs";
import { UpsertUsersInConversationsArgs } from "./args/UpsertUsersInConversationsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { UsersInConversations } from "../../../models/UsersInConversations";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUsersInConversations } from "../../outputs/AggregateUsersInConversations";
import { UsersInConversationsGroupBy } from "../../outputs/UsersInConversationsGroupBy";

@TypeGraphQL.Resolver(_of => UsersInConversations)
export class UsersInConversationsCrudResolver {
  @TypeGraphQL.Query(_returns => UsersInConversations, {
    nullable: true
  })
  async findUniqueUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueUsersInConversationsArgs): Promise<UsersInConversations | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => UsersInConversations, {
    nullable: true
  })
  async findFirstUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstUsersInConversationsArgs): Promise<UsersInConversations | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [UsersInConversations], {
    nullable: false
  })
  async findManyUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyUsersInConversationsArgs): Promise<UsersInConversations[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersInConversations, {
    nullable: false
  })
  async createUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateUsersInConversationsArgs): Promise<UsersInConversations> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyUsersInConversationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersInConversations, {
    nullable: true
  })
  async deleteUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteUsersInConversationsArgs): Promise<UsersInConversations | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersInConversations, {
    nullable: true
  })
  async updateUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateUsersInConversationsArgs): Promise<UsersInConversations | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyUsersInConversationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyUsersInConversationsArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => UsersInConversations, {
    nullable: false
  })
  async upsertUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertUsersInConversationsArgs): Promise<UsersInConversations> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => AggregateUsersInConversations, {
    nullable: false
  })
  async aggregateUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUsersInConversationsArgs): Promise<AggregateUsersInConversations> {
    return getPrismaFromContext(ctx).usersInConversations.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query(_returns => [UsersInConversationsGroupBy], {
    nullable: false
  })
  async groupByUsersInConversations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByUsersInConversationsArgs): Promise<UsersInConversationsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).usersInConversations.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
