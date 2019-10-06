import { InputType, Field } from 'type-graphql';
import { User } from '../user.type';

@InputType()
export class LoggUserInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  password: string;
}
