import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { ScoreTitle } from "../score/ScoreTitle";
import { TeacherTitle } from "../teacher/TeacherTitle";

export const ActivityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="assignedDate" source="assignedDate" />
        <ReferenceArrayInput source="scores" reference="Score">
          <SelectArrayInput
            optionText={ScoreTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="teacher.id" reference="Teacher" label="teacher">
          <SelectInput optionText={TeacherTitle} />
        </ReferenceInput>
        <TextInput label="templateId" source="templateId" />
      </SimpleForm>
    </Create>
  );
};
