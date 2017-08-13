import { Entity } from "./entity";
import { Role } from "./role";
import { Location } from "./location";

export class Teacher extends Entity {
    firstName : string;
    lastName : string;
    role : Role[];
    nickName: string;
    image : string;
    location : Location;
}
