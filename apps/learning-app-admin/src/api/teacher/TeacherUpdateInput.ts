import { ActivityUpdateManyWithoutTeachersInput } from "./ActivityUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  activities?: ActivityUpdateManyWithoutTeachersInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
};
