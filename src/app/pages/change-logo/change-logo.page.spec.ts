import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeLogoPage } from './change-logo.page';

describe('ChangeLogoPage', () => {
  let component: ChangeLogoPage;
  let fixture: ComponentFixture<ChangeLogoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeLogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
