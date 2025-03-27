import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarenToCelciusComponent } from './faren-to-celcius.component';

describe('FarenToCelciusComponent', () => {
  let component: FarenToCelciusComponent;
  let fixture: ComponentFixture<FarenToCelciusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarenToCelciusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarenToCelciusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
