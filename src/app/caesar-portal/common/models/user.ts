import { Role } from './role';
import { Location } from './location';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;
    nickName: string;
    image: any;
    location: Location;
}
