import { useEffect, useState } from "react";
// import Selection from "./Select";
import Select from "react-select";
import { INPUT, SPAN, LABEL } from "./Filter.styled";
import { selectCars } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { getCarBrand } from "../../redux/filterSlice";

const Filter = ({ getFilteredCars }) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [brands, setBrands] = useState([]);
  // const [filteredcars, setfilteredCars]= useState([])

  console.log(from);
  console.log(to);

  const cars = useSelector(selectCars);

  useEffect(() => {
    const getbrandsList = cars.map((car) => car.make);
    const uniqeSet = new Set(getbrandsList);
    const array = [...uniqeSet];
    const brandList = array.map((brand) => {
      return { value: `${brand}`, label: `${brand}` };
    });
    setBrands(brandList);
  }, [cars]);

  const priceList = [
    { value: "$30", label: "$30" },
    { value: "$40", label: "$40" },
    { value: "$60", label: "$60" },
    { value: "$70", label: "$70" },
    { value: "$80", label: "$80" },
    { value: "$90", label: "$90" },
    { value: "$100", label: "$100" },
    { value: "$110", label: "$110" },
    { value: "$120", label: "$120" },
    { value: "$130", label: "$130" },
    { value: "$140", label: "$140" },
    { value: "$150", label: "$150" },
  ];

  const onChangeInput = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "from":
        setFrom(value);
        break;
      case "to":
        setTo(value);
        break;
      default:
        break;
    }
  };

  const onChangeSelectBrand = (event) => {
    const { value } = event;
    if (value) {
      setBrand(value);
      getCarBrand(value);
    }
  };
  const onChangeSelectPrice = (event) => {
    const { value } = event;
    if (value) {
      setPrice(value);
    }
  };

  const formSubmit = (event) => {
    event.preventDefault();
    const filteredCars = cars.filter((car) => {
      return car.make === brand;
    });
    // const filteredCars = cars.filter((car) => {
    //   console.log(car.rentalPrice);
    //   return car.rentalPrice === price;
    // });
    getFilteredCars(filteredCars);
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        Car brand
        <Select
          placeholder="Enter the text"
          defaultValue={brand}
          onChange={onChangeSelectBrand}
          options={brands}
        />
      </label>
      <label>
        Price/ 1 hour
        <Select
          placeholder="To $"
          defaultValue={price}
          onChange={onChangeSelectPrice}
          options={priceList}
        />
      </label>
      <label>
        Сar mileage / km
        <LABEL>
          <INPUT type="number" name="from" onChange={onChangeInput} />
          <SPAN>From:</SPAN>
        </LABEL>
        <LABEL>
          <INPUT type="number" name="to" onChange={onChangeInput} />
          <SPAN>To:</SPAN>
        </LABEL>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Filter;
