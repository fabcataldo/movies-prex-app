import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeUserAvatarPage } from './change-user-avatar.page';

describe('ChangeUserAvatarPage', () => {
  let component: ChangeUserAvatarPage;
  let fixture: ComponentFixture<ChangeUserAvatarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChangeUserAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
