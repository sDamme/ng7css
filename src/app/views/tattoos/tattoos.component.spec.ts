import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosComponent } from './tattoos.component';

describe('TattoosComponent', () => {
  let component: TattoosComponent;
  let fixture: ComponentFixture<TattoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TattoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
