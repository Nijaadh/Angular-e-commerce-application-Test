import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedbarndsComponent } from './featuredbarnds.component';

describe('FeaturedbarndsComponent', () => {
  let component: FeaturedbarndsComponent;
  let fixture: ComponentFixture<FeaturedbarndsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedbarndsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedbarndsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
