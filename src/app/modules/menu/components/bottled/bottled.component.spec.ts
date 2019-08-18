import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottledComponent } from './bottled.component';

describe('BottledComponent', () => {
  let component: BottledComponent;
  let fixture: ComponentFixture<BottledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});