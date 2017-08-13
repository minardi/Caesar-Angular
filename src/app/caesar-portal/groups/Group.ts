export class Group {
    name: string;
    startDate: string;
    endDate: string;
    location: string;
    direction: string;

    constructor(name: string, startDate: string, endDate: string, direction: string, location: string) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.direction = direction;
        this.location = location;
    }
}