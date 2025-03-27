import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantPipesComponent } from './important-pipes.component';

describe('ImportantPipesComponent', () => {
  let component: ImportantPipesComponent;
  let fixture: ComponentFixture<ImportantPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportantPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
