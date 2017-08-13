import { Entity } from "./entity";
import { Teacher } from './teacher';
import { Location } from './location';
import { GroupStatus } from './group-status';
import { Specialization } from './specialization';

export class Group extends Entity {
  name: string;
  teachers : Teacher[];
  location : Location[];
  startDate: string;
  finishDate: string;
  status: GroupStatus;
  specialization : Specialization;
  experts : string[];
  budgetOwner : string;
}
