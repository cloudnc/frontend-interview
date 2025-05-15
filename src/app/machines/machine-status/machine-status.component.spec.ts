import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachineStatusComponent } from './machine-status.component';

describe('MachineStatusComponent', () => {
  let component: MachineStatusComponent;
  let fixture: ComponentFixture<MachineStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
