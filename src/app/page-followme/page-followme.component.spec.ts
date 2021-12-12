import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFollowmeComponent } from './page-followme.component';

describe('PageFollowmeComponent', () => {
  let component: PageFollowmeComponent;
  let fixture: ComponentFixture<PageFollowmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFollowmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFollowmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
