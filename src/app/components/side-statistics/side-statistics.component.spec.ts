import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideStatisticsComponent } from './side-statistics.component';

describe('SideStatisticsComponent', () => {
  let component: SideStatisticsComponent;
  let fixture: ComponentFixture<SideStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
