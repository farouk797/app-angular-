import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassierComponent } from './cassier.component';

describe('CassierComponent', () => {
  let component: CassierComponent;
  let fixture: ComponentFixture<CassierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
