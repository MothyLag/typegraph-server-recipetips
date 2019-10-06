import {
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
  Query
} from 'type-graphql';
import { DespensaService } from './despensa.service';
import { Despensa } from './despensa.type';
import { CreateDespensaInput } from './inputs/createDespensa.input';
import { getId } from '../../middlewares/session.middlewares';
import { AddIngredientInput } from './inputs/addIngredient.input';

@Resolver()
export class DespensaResolver {
  constructor(private readonly despensaService: DespensaService) {}

  @Mutation(() => Despensa)
  @UseMiddleware(getId)
  createDespensa(
    @Arg('despensa') newDespensa: CreateDespensaInput,
    @Ctx() ctx: any
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.despensaService.createDespensa(newDespensa, userId);
  }

  @Query(() => Despensa)
  @UseMiddleware(getId)
  getUserDespensa(@Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.despensaService.getDespensa(userId);
  }

  @Mutation(() => Despensa)
  @UseMiddleware(getId)
  addItemDespensa(
    @Arg('ingredient') newIngredient: AddIngredientInput,
    @Ctx() ctx: any
  ) {
    const userId: string = ctx.res.locals.userId;
    return this.despensaService.addIngredient(newIngredient, userId);
  }
}
