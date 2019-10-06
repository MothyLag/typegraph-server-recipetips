import {
  Query,
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  Ctx
} from 'type-graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './inputs/createUser.input';
import { LoggUserInput } from './inputs/loggUser.input';
import { UserWithToken } from '../jwt/token.type';

@Resolver()
class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => String)
  greet() {
    return 'hello world';
  }
  @Query(() => UserWithToken)
  login(@Arg('user') user: LoggUserInput) {
    return this.userService.login(user);
  }

  @Mutation(() => UserWithToken)
  createUser(@Arg('user') newUser: CreateUserInput) {
    return this.userService.create(newUser);
  }
}
