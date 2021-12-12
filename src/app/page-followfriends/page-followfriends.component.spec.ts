import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFollowfriendsComponent } from './page-followfriends.component';

describe('PageFollowfriendsComponent', () => {
  let component: PageFollowfriendsComponent;
  let fixture: ComponentFixture<PageFollowfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFollowfriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFollowfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
