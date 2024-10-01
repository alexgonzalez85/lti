import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACTIVITY_TITLE_FIELD } from "./ActivityTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const ActivityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="assignedDate" source="assignedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="teacher" source="teacher.id" reference="Teacher">
          <TextField source={TEACHER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="templateId" source="templateId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Score"
          target="activityId"
          label="Scores"
        >
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
