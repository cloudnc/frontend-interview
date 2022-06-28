import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineComponent } from './machine.component';

describe('MachineComponent', () => {
  let component: MachineComponent;
  let fixture: ComponentFixture<MachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
