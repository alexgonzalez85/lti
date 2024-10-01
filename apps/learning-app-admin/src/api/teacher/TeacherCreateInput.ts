import { ActivityCreateNestedManyWithoutTeachersInput } from "./ActivityCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  activities?: ActivityCreateNestedManyWithoutTeachersInput;
  email?: string | null;
  name?: string | null;
  password?: string | null;
};
