import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ACTIVITY_TITLE_FIELD } from "../activity/ActivityTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
