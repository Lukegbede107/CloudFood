import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupageComponent } from './menupage.component';

describe('MenupageComponent', () => {
  let component: MenupageComponent;
  let fixture: ComponentFixture<MenupageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenupageComponent]
    });
    fixture = TestBed.createComponent(MenupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
