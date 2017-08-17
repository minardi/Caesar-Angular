import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CaesarHomeComponent } from './caesar-home.component';
import { GroupAreaModule } from '../group-area/group-area.module';
import { GroupListModule } from '../group-list/group-list.module';
import { ProfileModule } from '../profile/profile.module';

describe('CaesarHomeComponent', () => {
  let component: CaesarHomeComponent;
  let fixture: ComponentFixture<CaesarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaesarHomeComponent ],
      imports: [
        GroupListModule,
        GroupAreaModule,
        ProfileModule,
        HttpModule
  ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaesarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
