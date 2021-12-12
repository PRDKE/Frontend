import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowboxComponent } from './user-followbox.component';

describe('UserFollowboxComponent', () => {
  let component: UserFollowboxComponent;
  let fixture: ComponentFixture<UserFollowboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFollowboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
