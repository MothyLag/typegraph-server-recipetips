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
import { RecipeUpdateName } from './inputs/recipeUpdateName.input';
import { RecipeUpdatePreparation } from './inputs/recipeUpdatePreparation.input';

@Resolver()
class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => [Recipe])
  @UseMiddleware(getId)
  getRecipesUser(@Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.recipeService.getUserRecipes(userId);
  }

  @Mutation(() => Recipe)
  @UseMiddleware(getId)
  createRecipe(@Arg('recipe') newRecipe: CreateRecipeInput, @Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.recipeService.createRecipe(newRecipe, userId);
  }

  @Mutation(() => Recipe)
  @UseMiddleware(getId)
  updateRecipeName(
    @Arg('recipe') recipeData: RecipeUpdateName,
    @Ctx() ctx: any
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.recipeService.updateRecipeName(recipeData, userId);
  }

  @Mutation(() => Recipe)
  @UseMiddleware(getId)
  updateRecipePreparation(
    @Arg('recipe') recipeData: RecipeUpdatePreparation,
    @Ctx() ctx: any
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.recipeService.updateRecipePreparation(recipeData, userId);
  }
}
