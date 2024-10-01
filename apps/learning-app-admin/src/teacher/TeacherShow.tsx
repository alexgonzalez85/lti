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

import { TEACHER_TITLE_FIELD } from "./TeacherTitle";

export const TeacherShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="password" source="password" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Activity"
          target="teacherId"
          label="Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="assignedDate" source="assignedDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="teacher"
              source="teacher.id"
              reference="Teacher"
            >
              <TextField source={TEACHER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="templateId" source="templateId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
