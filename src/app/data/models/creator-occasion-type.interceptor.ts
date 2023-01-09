import {OccasionType} from "./occasion-type";

export interface CreatorOccasionType {
  id: number;
  creator_id: number;
  occasion_type_id: number;
  occasionType: OccasionType;
  price: number
}
