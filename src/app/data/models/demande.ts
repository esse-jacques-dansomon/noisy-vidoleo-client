import {OccasionType} from "./occasion-type";
import {Creator} from "./creator";
import {DemandeOption} from "./demande-option";
import {User} from "./user";
import {Comment} from "./comment";

export interface Demande {
  id:               number;
  creator_id:       number;
  occasion_type_id: number;
  price:            number;
  code:             string;
  receiver:         string;
  sender:           string;
  message:          string;
  client_id:        number;
  client:           User;
  creator:          Creator;
  occasion_type:    OccasionType;
  options:          DemandeOption[];
  comment: Comment,
  status:           any;
  created_at:       Date;
  updated_at:       Date;

}
