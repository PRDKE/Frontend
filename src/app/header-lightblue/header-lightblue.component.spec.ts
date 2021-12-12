import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLightblueComponent } from './header-lightblue.component';

describe('HeaderLightblueComponent', () => {
  let component: HeaderLightblueComponent;
  let fixture: ComponentFixture<HeaderLightblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLightblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLightblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
