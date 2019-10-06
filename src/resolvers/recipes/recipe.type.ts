import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Recipe {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: string[];

  @Field(() => Int, { nullable: true })
  difficult?: number;

  @Field(() => [Int], { nullable: true })
  rate?: number[];

  @Field(() => String)
  userId: string;
}
