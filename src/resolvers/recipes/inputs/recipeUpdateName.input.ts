import { InputType, Field } from 'type-graphql';

@InputType()
export class RecipeUpdateName {
  @Field()
  name: string;

  @Field()
  recipeId: string;
}
