import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsistasListComponent } from './bolsistas-list.component';

describe('BolsistasListComponent', () => {
  let component: BolsistasListComponent;
  let fixture: ComponentFixture<BolsistasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BolsistasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BolsistasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
