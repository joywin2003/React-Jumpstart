import React, { useState,useEffect } from "react";
import styles from "./AddressForm.module.css";

const AddressForm = ({ count, onSubmit }) => {

  const adname = {
    address1: "wwwe",
    address2: "eeddss",
    address3: "wwsddc",
    address4: "wwddfer",
    address5: "eedfcred",
  };

  const [addresses, setAddresses] = useState(Object.values(adname).slice(0, count));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      adname[`address${i+1}`] = addresses[i];
    }

    setAddresses(Object.values(adname).slice(0, count));
  }, [count]);


  const handleAddressChange = (index, value) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses[index] = value;
      console.log(updatedAddresses);
      return updatedAddresses;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {addresses.map((address, index) => (
        <div className={styles.address} key={index}>
          <label className={styles.label} htmlFor="address">
            Address{index+1}:
          </label>
          <input
            type="text"
            id={`address ${index + 1}`}
            name={`address ${index + 1}`}
            placeholder={`Enter address ${index + 1}`}
            value={address}
            onChange={(e) => handleAddressChange(index, e.target.value)}
            required
          />
        </div>
      ))}
    </form>
  );
};

export default AddressForm;
