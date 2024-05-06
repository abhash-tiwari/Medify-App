import React, { useState, useEffect } from "react";
import styles from "./booking.module.css";
import Image from "../../assets/card_service.png";
import Image1 from "../../assets/card_service (1).png";
import Image2 from "../../assets/card_service (2).png";
import Image3 from "../../assets/card_service (3).png";
import Image4 from "../../assets/card_service (4).png";
import { TextField, Button, MenuItem } from '@mui/material';
import axios from "axios";

export default function Booking() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get("https://meddata-backend.onrender.com/states");
        const data = response.data;
        console.log("Fetched States:", data);
        setStates(data);
      } catch (error) {
        console.log("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      try {
        const response = await axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        const data = response.data;
        console.log("Fetched Cities:", data); // Log fetched cities
        setCities(data);
      } catch (error) {
        console.log("Error fetching cities:", error);
      }
    };
  
    if (selectedState) {
      fetchCities();
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className={styles.booking}>
      <div className={styles.container}>
        <div className={styles.card}>
        <TextField
  id="outlined-state"
  value={selectedState}
  onChange={handleStateChange}
//   id="outlined-select-currency"
  select
  label="Select State"
  defaultValue="Select State"
  helperText="Please select State"
>

  <MenuItem value="States">
    <em>Select State</em>
  </MenuItem>
  {states.map((state) => (
    <MenuItem key={state} value={state}>
      {state}
    </MenuItem>
  ))}
</TextField>
        </div>
        <div className={styles.card}>
        <TextField
          id="outlined-city"
          value={selectedCity}
          onChange={handleCityChange} // Add this line
          variant="outlined"
          select
          label="Select City"
          helperText="Please select City"
          fullWidth
        >
          <MenuItem value="">
            <em>Select City</em>
          </MenuItem>
          {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </TextField>
        </div>
        <div className={styles.card}>
          <Button variant="contained" color="primary" href="/">
            Search
          </Button>
        </div>
      </div>
      <div className={styles.para}>You May Be Looking For</div>
      <div className={styles.grid}>
        <img src={Image} alt="" />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
    </div>
  );
}
