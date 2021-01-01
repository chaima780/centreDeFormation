import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFormationComponent } from './find-formation.component';

describe('FindFormationComponent', () => {
  let component: FindFormationComponent;
  let fixture: ComponentFixture<FindFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
