import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Dashboard {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
}
