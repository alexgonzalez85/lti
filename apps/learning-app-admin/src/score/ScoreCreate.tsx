import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { StudentTitle } from "../student/StudentTitle";

export const ScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="activity.id"
          reference="Activity"
          label="activity"
        >
          <SelectInput optionText={ActivityTitle} />
        </ReferenceInput>
        <DateTimeInput label="dateRecorded" source="dateRecorded" />
        <NumberInput label="score" source="score" />
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
