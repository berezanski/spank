import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaterPage } from './bater.page';

describe('BaterPage', () => {
  let component: BaterPage;
  let fixture: ComponentFixture<BaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
