import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { StudentTitle } from "../student/StudentTitle";

export const ScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
