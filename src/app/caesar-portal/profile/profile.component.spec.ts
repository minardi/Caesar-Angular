import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';


describe('ProfileComponent', () => {
    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(() => {
        // stub ProfileService for test purposes
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
            },
            getCurrentUser: () => {
                return this.currentUser;
            }
        };

        TestBed.configureTestingModule({
             declarations: [ ProfileComponent ],
             providers: [ {provide: ProfileService, useValue: profileServiceStub } ]
        });

        fixture = TestBed.createComponent(ProfileComponent);
        component = fixture.componentInstance;
            // UserService from the root injector
            const profileService = TestBed.get(ProfileService);
        });

        it('should be created', () => {
            expect(component).toBeTruthy();
        });
  });
