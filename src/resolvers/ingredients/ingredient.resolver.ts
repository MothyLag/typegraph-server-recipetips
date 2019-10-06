import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { IngredientService } from './ingredient.service';
import { CreateIngredientInput } from './inputs/createIngredient.input';
import { Ingredient } from './ingredient.type';

@Resolver()
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) {}

  @Query(() => [Ingredient])
  getAllIngredients() {
    return this.ingredientService.getAllIngredients();
  }
  @Mutation(() => Ingredient)
  createIngredient(@Arg('ingredient') newIngredient: CreateIngredientInput) {
    return this.ingredientService.create(newIngredient);
  }
}
