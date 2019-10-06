import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class UserWithToken {
  @Field()
  userName: string;

  @Field()
  token: string;
}
