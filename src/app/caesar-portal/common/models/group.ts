import { GroupStatus } from './group-status';
import { User }     from './user';
import { Location } from './location';

export class Group {
  constructor(public groupId: number = 0, 
              public name: string = '', 
              public startDate: string = null, 
              public finishDate: string = null, 
              public experts: string[] = null,
              public _links: string[] = null) { }

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

