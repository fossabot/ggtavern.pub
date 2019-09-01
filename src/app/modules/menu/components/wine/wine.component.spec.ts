import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineComponent } from './wine.component';
import { SharedModule } from '@shared/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('WineComponent', () => {
  let component: WineComponent;
  let fixture: ComponentFixture<WineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WineComponent],
      imports: [SharedModule, BrowserAnimationsModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
