import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Scores"} perPage={50} pagination={<Pagination />}>
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
        <ReferenceField label="student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
