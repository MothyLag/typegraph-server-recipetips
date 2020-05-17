import {
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
  Query,
} from 'type-graphql';
import { Recipe } from './recipe.type';
import { RecipeService } from './recipe.service';
import { CreateRecipeInput } from './inputs/createRecipe.input';
import { getId } from '../../middlewares/session.middlewares';

@Resolver()
class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Mutation(() => Recipe)
  @UseMiddleware(getId)
  createRecipe(@Arg('recipe') newRecipe: CreateRecipeInput, @Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.recipeService.createRecipe(newRecipe, userId);
  }
}
