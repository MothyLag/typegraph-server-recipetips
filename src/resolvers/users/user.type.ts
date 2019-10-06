import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  _id: string;

  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
