import { useState } from "react";
// import Selection from "./Select";
import Select from "react-select";

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const price = [
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
    { value: "90", label: "90" },
    { value: "100", label: "100" },
    { value: "110", label: "110" },
    { value: "120", label: "120" },
    { value: "130", label: "130" },
    { value: "140", label: "140" },
    { value: "150", label: "150" },
  ];

  const brand = [
    { value: "Buick", label: "Buick" },
    { value: "Volvo", label: "Volvo" },
    { value: "Hummer", label: "Hummer" },
    { value: "Subaru", label: "Subaru" },
    { value: "Mitsubishi", label: "Mitsubishi" },
    { value: "Nissan", label: "Nissan" },
    { value: "Lincoln", label: "Lincoln" },
    { value: "GMC", label: "GMC" },
    { value: "Hyundai", label: "Hyundai" },
  ];

  return (
    <form>
      <label>
        Car brand
        <Select
          placeholder="Enter the text"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={brand}
        />
      </label>
      <label>
        Price/ 1 hour
        <Select
          placeholder="To $"
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={price}
        />
      </label>
      <label>
        Сar mileage / km
        <input placeholder="From" />
        <input placeholder="To" />
      </label>
      <button type="submit"></button>
    </form>
  );
};

export default Filter;
