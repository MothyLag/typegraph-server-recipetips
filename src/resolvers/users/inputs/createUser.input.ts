import { InputType, Field } from 'type-graphql';
import { User } from '../user.type';

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field()
  userName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
