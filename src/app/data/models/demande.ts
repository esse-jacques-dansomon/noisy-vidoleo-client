import {DemandeOption} from "./demande-option";
import {Comment} from "./comment";
import {CreatorOccasionType} from "./creator-occasion-type.interceptor";
import {Client} from "./client";
import { DemandeMedia } from "./demand-media";

export interface Demande {
  sender: any;
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
  payment: Payment,
  demand_media : DemandeMedia
}

export interface Payment {
  id: number;
  type: string;
  link: string;
  ref : string;

}
