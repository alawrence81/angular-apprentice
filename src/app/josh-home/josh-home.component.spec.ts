import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoshHomeComponent } from './josh-home.component';

describe('JoshHomeComponent', () => {
  let component: JoshHomeComponent;
  let fixture: ComponentFixture<JoshHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoshHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoshHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
