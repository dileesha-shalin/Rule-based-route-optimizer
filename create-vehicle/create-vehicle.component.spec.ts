import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateVehicleComponent } from "./create-vehicle.component";

describe("VehicleComponent", () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateVehicleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
