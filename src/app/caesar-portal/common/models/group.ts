import { GroupStatus } from '../models/group-status';
import { Link } from '../models/link';

export class Group {
  constructor(
    public groupId: number,
    public name: string,
    public startDate: string,
    public finishDate: string,
    public experts: string[],
    public links: Link[]
  ) { }

  get status(): GroupStatus {
    let currentDate = new Date(),
      startDate = new Date(this.startDate),
      finishDate = new Date(this.finishDate),
      result;

    if (currentDate < startDate) {
      return GroupStatus.Finished;
    } else if (startDate < currentDate && currentDate < finishDate) {
      return GroupStatus.Current;
    } else {
      return GroupStatus.Future;
    }
  }
}

