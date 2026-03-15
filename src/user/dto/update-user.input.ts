import { CreateUserAddressInput, CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends OmitType(PartialType(CreateUserInput), ['password','email']) {
 
}

@InputType()
export class UpdateUserAddressInput extends PartialType(CreateUserAddressInput){
  @Field()
  id: string;
}