/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecordWhereUniqueInput } from "./RecordWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RecordUpdateInput } from "./RecordUpdateInput";

@ArgsType()
class UpdateRecordArgs {
  @ApiProperty({
    required: true,
    type: () => RecordWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecordWhereUniqueInput)
  @Field(() => RecordWhereUniqueInput, { nullable: false })
  where!: RecordWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RecordUpdateInput,
  })
  @ValidateNested()
  @Type(() => RecordUpdateInput)
  @Field(() => RecordUpdateInput, { nullable: false })
  data!: RecordUpdateInput;
}

export { UpdateRecordArgs as UpdateRecordArgs };
