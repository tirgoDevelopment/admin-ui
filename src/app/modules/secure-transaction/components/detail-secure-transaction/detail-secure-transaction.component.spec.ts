import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSecureTransactionComponent } from './detail-secure-transaction.component';

describe('DetailSecureTransactionComponent', () => {
  let component: DetailSecureTransactionComponent;
  let fixture: ComponentFixture<DetailSecureTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSecureTransactionComponent]
    });
    fixture = TestBed.createComponent(DetailSecureTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
