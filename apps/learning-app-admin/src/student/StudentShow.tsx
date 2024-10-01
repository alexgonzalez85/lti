import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Score" target="studentId" label="Scores">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="activity"
              source="activity.id"
              reference="Activity"
            >
              <TextField source={ACTIVITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateRecorded" source="dateRecorded" />
            <TextField label="ID" source="id" />
            <TextField label="score" source="score" />
            <ReferenceField
              label="student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
