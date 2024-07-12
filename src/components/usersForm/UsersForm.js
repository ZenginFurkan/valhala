import React from "react";
import PersonalInformation from "./PersonalInformation";
import BillingInformation from "./BillingInformation";
import CarsInformation from "./CarsInformation";

export default function UsersForm() {
  return (
    <div className="users-form">
      <div className="personal-information">
        <PersonalInformation />
      </div>
      <div className="billings-cars-information">
        <div className="billing-information">
          <BillingInformation />
        </div>
        <div className="cars-information">
          <CarsInformation />
        </div>
      </div>
    </div>
  );
}
