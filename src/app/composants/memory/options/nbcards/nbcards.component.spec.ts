import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbcardsComponent } from './nbcards.component';

describe('NbcardsComponent', () => {
  let component: NbcardsComponent;
  let fixture: ComponentFixture<NbcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
