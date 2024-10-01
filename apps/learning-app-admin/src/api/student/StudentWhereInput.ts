import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  scores?: ScoreListRelationFilter;
};
