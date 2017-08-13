import { Entity } from "./entity";
import { StatusCategory  } from "./status-category";

export class GroupStatus extends Entity {
    name : string;
    statusCategory : StatusCategory;
}
