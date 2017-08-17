import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { User } from '../common/models/user';


describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(async(() => {
        const profileServiceStub = {
            currentUser: {
                id: 3,
                firstName: 'Lucas',
                lastName: 'Lukichich',
                role:
                {
                    id: 4,
                    name: 'coordinator',
                    roleCategory:
                    {
                        id: 2,
                        name: 'itacademy'
                    }
                },
                nickName: 'LukasLukichich',
                image: null,
                location:
                {
                    id: 2,
                    name: 'Sofia'
                }
            }
        };

        TestBed.configureTestingModule({
            declarations: [ ProfileComponent ],
            imports: [ HttpModule ],
            providers: [ { provide: ProfileService, useValue: profileServiceStub } ]
        })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should be created', () => {
        expect(component).toBeTruthy();
    });
  });
