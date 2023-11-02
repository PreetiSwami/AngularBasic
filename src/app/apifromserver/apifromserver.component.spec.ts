import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApifromserverComponent } from './apifromserver.component';

describe('ApifromserverComponent', () => {
  let component: ApifromserverComponent;
  let fixture: ComponentFixture<ApifromserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApifromserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApifromserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
