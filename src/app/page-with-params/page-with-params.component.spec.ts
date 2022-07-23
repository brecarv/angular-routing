import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWithParamsComponent } from './page-with-params.component';

describe('PageWithParamsComponent', () => {
  let component: PageWithParamsComponent;
  let fixture: ComponentFixture<PageWithParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWithParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
