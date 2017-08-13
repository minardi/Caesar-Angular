import { Entity } from "./entity";
import { RoleCategory } from './role-category'

export class Role extends Entity {
  name: string;
  roleCategory: RoleCategory
}

