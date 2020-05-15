import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Ingredient {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  standardPrice?: number;

  @Field({ nullable: true })
  description?: string;
}
