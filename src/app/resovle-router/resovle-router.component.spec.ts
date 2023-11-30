import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResovleRouterComponent } from './resovle-router.component';

describe('ResovleRouterComponent', () => {
  let component: ResovleRouterComponent;
  let fixture: ComponentFixture<ResovleRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResovleRouterComponent]
    });
    fixture = TestBed.createComponent(ResovleRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
