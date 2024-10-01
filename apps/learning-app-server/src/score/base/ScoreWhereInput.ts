/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActivityWhereUniqueInput } from "../../activity/base/ActivityWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@InputType()
class ScoreWhereInput {
  @ApiProperty({
    required: false,
    type: () => ActivityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ActivityWhereUniqueInput)
  @IsOptional()
  @Field(() => ActivityWhereUniqueInput, {
    nullable: true,
  })
  activity?: ActivityWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateRecorded?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  score?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => StudentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentWhereUniqueInput)
  @IsOptional()
  @Field(() => StudentWhereUniqueInput, {
    nullable: true,
  })
  student?: StudentWhereUniqueInput;
}

export { ScoreWhereInput as ScoreWhereInput };
