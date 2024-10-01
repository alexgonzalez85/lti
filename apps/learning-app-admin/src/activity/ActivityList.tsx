import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const ActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Activities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="assignedDate" source="assignedDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="teacher" source="teacher.id" reference="Teacher">
          <TextField source={TEACHER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="templateId" source="templateId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
