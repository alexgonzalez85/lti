import { ScoreUpdateManyWithoutStudentsInput } from "./ScoreUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  name?: string | null;
  scores?: ScoreUpdateManyWithoutStudentsInput;
};
