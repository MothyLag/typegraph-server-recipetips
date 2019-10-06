import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Despensa {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  userId: string;

  @Field(() => [String], { nullable: true })
  ingredients?: string[];

  @Field(() => [String], { nullable: true })
  containers?: string[];

  @Field()
  license: string;
}
