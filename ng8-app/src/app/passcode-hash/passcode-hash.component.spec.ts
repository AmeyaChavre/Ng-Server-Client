import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscodeHashComponent } from './passcode-hash.component';

describe('PasscodeHashComponent', () => {
  let component: PasscodeHashComponent;
  let fixture: ComponentFixture<PasscodeHashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscodeHashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscodeHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
