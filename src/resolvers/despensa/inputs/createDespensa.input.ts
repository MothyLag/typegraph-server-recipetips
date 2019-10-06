import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateDespensaInput {
  @Field({ defaultValue: 'userId' })
  userId: string;

  @Field(() => [String], { nullable: true })
  ingredients: string[];

  @Field(() => [String], { nullable: true, defaultValue: 'verduras' })
  containers: string[];

  @Field({ nullable: true, defaultValue: 'free' })
  license: string;
}
