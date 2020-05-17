import {
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx,
  Query,
} from 'type-graphql';
import { DespensaService } from './despensa.service';
import { Despensa } from './despensa.type';
import { CreateDespensaInput } from './inputs/createDespensa.input';
import { getId } from '../../middlewares/session.middlewares';
import { AddIngredientInput } from './inputs/addIngredient.input';
import { RemoveItemInput } from './inputs/removeItem.input';
import { UpdateDespensaNameInput } from './inputs/updateDespensa.input';

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

  @Query(() => [Despensa])
  @UseMiddleware(getId)
  getUserDespensas(@Ctx() ctx: any) {
    const userId: string = ctx.res.locals.userId;
    return this.despensaService.getDespensas(userId);
  }

  @Query(() => Despensa)
  @UseMiddleware(getId)
  getUserDespensa(@Ctx() ctx: any, @Arg('despensaID') despensaID: string) {
    const userId: string = ctx.res.locals.userId;
    return this.despensaService.getDespensa(userId, despensaID);
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

  @Mutation(() => Despensa)
  @UseMiddleware(getId)
  removeItemDespensa(
    @Arg('removeInput') data: RemoveItemInput,
    @Ctx() ctx: any
  ) {
    const userID: string = ctx.res.locals.userId;
    return this.despensaService.removeItem(data, userID);
  }

  @Mutation(() => Despensa)
  @UseMiddleware(getId)
  updateItem(@Ctx() ctx: any, @Arg('item') data: AddIngredientInput) {
    const userId = ctx.res.locals.userId;
    return this.despensaService.updateItem(data, userId);
  }

  @Mutation(() => Despensa)
  @UseMiddleware(getId)
  updateDespensaName(
    @Ctx() ctx: any,
    @Arg('despensaID') despensaID: UpdateDespensaNameInput
  ) {
    const userId = ctx.res.locals.userId;
    return this.despensaService.updateDespensaName(despensaID, userId);
  }

  @Mutation(() => Boolean)
  @UseMiddleware(getId)
  dropDespensa(@Ctx() ctx: any, @Arg('despensaID') despensaID: string) {
    const userId = ctx.res.locals.userId;
    return this.despensaService.dropDespensa(despensaID, userId);
  }
}
