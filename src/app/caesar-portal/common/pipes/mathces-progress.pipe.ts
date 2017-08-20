import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../models/group'
import { GroupStatus } from '../models/group-status'

@Pipe({
  name: 'mathcesProgress'
})
export class MathcesProgressPipe implements PipeTransform {
  transform(source: Group[], status: GroupStatus): Group[] {
    if (source) {
      return source.filter((item: Group) => {
        return item.status === status;
      })
    }
  }
}
