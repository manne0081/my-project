import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorDataComponent } from './debitor-data.component';

describe('DebitorDataComponent', () => {
  let component: DebitorDataComponent;
  let fixture: ComponentFixture<DebitorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
