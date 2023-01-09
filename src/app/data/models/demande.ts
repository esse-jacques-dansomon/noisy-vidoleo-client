import {DemandeOption} from "./demande-option";
import {Comment} from "./comment";
import {CreatorOccasionType} from "./creator-occasion-type.interceptor";
import {Client} from "./client";

export interface Demande {
  id:                  number;
  price:               number;
  code:                string;
  receiver:            string;
  message:             string;
  status:              string;
  created_at:          Date;
  updated_at:          Date;
  creatorOccasionType: CreatorOccasionType;
  client:  Client;
  options:          DemandeOption[];
  comment: Comment,

}
