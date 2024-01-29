import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsistaFormComponent } from './bolsista-form.component';

describe('BolsistaFormComponent', () => {
  let component: BolsistaFormComponent;
  let fixture: ComponentFixture<BolsistaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsistaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
