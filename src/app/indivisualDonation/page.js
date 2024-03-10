"use client";
import React, { useState } from "react";
import styles from "./indivisualDonation.module.css";
import axios from "axios";
import Indicator from "../components/indicator";

export default function IndivisualDonor() {
  const [isUploading, setIsUploading] = useState(false);
  const [donor, setDonor] = useState({
    DonorDetails: "",
    items: "",
    address: "",
  });

  const handleInputChange = (event) => {
    setDonor({
      ...donor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUploading(true);
    const response = await fetch(
      "https://foodflow.onrender.com/api/v1/donor/donate",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      }
    );
    setIsUploading(false);
    // const data = await response.json();
  };

  return (
    <div className={styles.outer_div}>
      <div className={styles.div1}>
        <p>Donate Indivisually</p>
        <p>
          Restaurants: Restaurants can be significant donors in the fight
          against food waste. They often have surplus food due to varying
          customer demand, seasonal changes, or menu adjustments. Donating
          excess food helps them reduce waste and contribute to their community.
          Food Retailers and Supermarkets: These establishments deal with
          perishable items that have strict sell-by dates. Donating unsold but
          still edible food prevents it from ending up in landfills. Individuals
          and Households: People can also be donors. If you have extra food at
          home or an event (like a party) with leftovers, consider donating it
          to those in need. Receivers: Food Banks: Food banks play a crucial
          role in food distribution. They collect surplus food from donors and
          distribute it to various organizations, including shelters, community
          centers, and schools. Food banks ensure that edible food reaches those
          who need it most.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.div2}>
          <p>Donor Details</p>
          <textarea
            name="DonorDetails"
            value={donor.DonorDetails}
            onChange={handleInputChange}
            className={styles.donor}
            placeholder="donor details ex.. anoopchaudhary"
          ></textarea>
          <p>Items</p>
          <textarea
            name="items"
            onChange={handleInputChange}
            value={donor.items}
            className={styles.items}
            placeholder="item details ex.. rice 200kg"
          ></textarea>
          <p>Address</p>
          <textarea
            name="address"
            onChange={handleInputChange}
            value={donor.address}
            className={styles.address}
            placeholder="Address details ex.. vit university"
          ></textarea>
          <button className={styles.btn} type="submit">
            {isUploading ? <Indicator /> : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
