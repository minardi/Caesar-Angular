import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { DeleteDialogComponent } from './delete-dialog.component';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { GroupService } from '../../common/services/group.service';
import { HttpModule } from '@angular/http';
import { Group } from '../../common/models/group';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;
  let groupsService: GroupService;
  let groupName: string;
  let groupId: number;
  let element: any;
  let deleteSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDialogComponent],
      providers: [
        GroupService,
        BsModalRef
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    groupsService = TestBed.get(GroupService);


    deleteSpy = spyOn(groupsService, 'delete').and.returnValue(Observable.of(Response));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render group name', () => {
    component.groupName = 'DP-112';
    fixture.detectChanges();
    const groupNameElement = <HTMLElement>element.querySelector('.group-name');
    expect(groupNameElement.innerHTML).toContain(component.groupName);
  });

  it('should call delete method by group id', () => {
    component.groupId = 10;
    fixture.detectChanges();
    component.deleteGroup();

    expect(deleteSpy).toHaveBeenCalled();
    expect(deleteSpy).toHaveBeenCalledWith(component.groupId);
  });

  it('should emit delete event', fakeAsync((): void => {
    const deleteEvent = spyOn(component.onGroupDeleted, 'emit');
    component.groupId = 10;
    fixture.detectChanges();
    const button = element.querySelector('.btn-primary');
    button.click();

    expect(deleteEvent).toHaveBeenCalled();
    expect(deleteEvent).toHaveBeenCalledWith(component.groupId);
  }));
});
