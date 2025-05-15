import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxComponent } from './sandbox.component';
import { Socket } from 'ngx-socket-io';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NEVER } from 'rxjs';

describe('SandboxComponent', () => {
  let component: SandboxComponent;
  let fixture: ComponentFixture<SandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandboxComponent, HttpClientTestingModule],
      // @todo stub properly and test
      providers: [{ provide: Socket, useValue: { fromEvent: () => NEVER } }],
    }).compileComponents();

    fixture = TestBed.createComponent(SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
