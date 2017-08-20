import { GroupStatus } from '../models/group-status'

export class Group {
  constructor(public groupId: number, public name: string,
    public startDate: string,
    public finishDate: string,
    public experts: string[]) { }

  get status(): GroupStatus {
    let currentDate = new Date(),
      startDate = new Date(this.startDate),
      finishDate = new Date(this.finishDate),
      result;

    if (currentDate < startDate) {
      result = GroupStatus['Finished'];
    }
    else if (startDate < currentDate && currentDate < finishDate) {
      result = GroupStatus['Current'];
    }
    else {
      result = GroupStatus['Future'];
    }

    return result;
  }
}
