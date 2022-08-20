import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpertiseComponent } from './new-expertise.component';

describe('NewExpertiseComponent', () => {
  let component: NewExpertiseComponent;
  let fixture: ComponentFixture<NewExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
