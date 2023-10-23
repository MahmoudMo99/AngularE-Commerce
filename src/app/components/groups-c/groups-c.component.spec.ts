import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsCComponent } from './groups-c.component';

describe('GroupsCComponent', () => {
  let component: GroupsCComponent;
  let fixture: ComponentFixture<GroupsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsCComponent]
    });
    fixture = TestBed.createComponent(GroupsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
