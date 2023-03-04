import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherssComponent } from './voucherss.component';

describe('VoucherssComponent', () => {
  let component: VoucherssComponent;
  let fixture: ComponentFixture<VoucherssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoucherssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
