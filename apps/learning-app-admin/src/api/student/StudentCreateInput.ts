import { ScoreCreateNestedManyWithoutStudentsInput } from "./ScoreCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  name?: string | null;
  scores?: ScoreCreateNestedManyWithoutStudentsInput;
};
