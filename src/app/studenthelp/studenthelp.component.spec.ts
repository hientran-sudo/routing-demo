import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenthelpComponent } from './studenthelp.component';

describe('StudenthelpComponent', () => {
  let component: StudenthelpComponent;
  let fixture: ComponentFixture<StudenthelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenthelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudenthelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
