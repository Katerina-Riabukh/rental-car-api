import { useEffect, useState } from "react";
// import Selection from "./Select";
import Select from "react-select";
import {
  INPUT1,
  INPUT2,
  SPAN,
  LABEL,
  BUTTON,
  FORM,
  LabelSpan,
  LabelInput,
  SpanLabel,
} from "./Filter.styled";
import { selectCars } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredCars } from "../../redux/filterSlice";

const Filter = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [brands, setBrands] = useState([]);
  // const [filteredcars, setfilteredCars]= useState([])

  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

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

    const filteredCarsByBrand =
      brand !== "" ? cars.filter((car) => car.make === brand) : cars;

    const filteredcarsByPrice =
      price !== ""
        ? filteredCarsByBrand.filter((car) => car.rentalPrice === price)
        : filteredCarsByBrand;

    const filteredCarsByMileageFrom =
      from !== ""
        ? filteredcarsByPrice.filter((car) => car.mileage >= from)
        : filteredcarsByPrice;

    const filteredCarsByMileageTo =
      to !== ""
        ? filteredCarsByMileageFrom.filter((car) => car.mileage <= to)
        : filteredcarsByPrice;

    dispatch(getFilteredCars(filteredCarsByMileageTo));
  };

  return (
    <FORM onSubmit={formSubmit}>
      <LabelInput>
        <SpanLabel>Car brand</SpanLabel>
        <Select
          styles={{ padding: "14px", borderRadius: "14px" }}
          placeholder="Enter the text"
          defaultValue={brand}
          onChange={onChangeSelectBrand}
          options={brands}
        />
      </LabelInput>
      <LabelInput>
        <SpanLabel>Price/ 1 hour</SpanLabel>
        <Select
          placeholder="To $"
          defaultValue={price}
          onChange={onChangeSelectPrice}
          options={priceList}
        />
      </LabelInput>
      <LabelInput>
        <LabelSpan>Сar mileage / km</LabelSpan>
        <LABEL>
          <INPUT1 type="number" name="from" onChange={onChangeInput} />
          <SPAN>From:</SPAN>
        </LABEL>
        <LABEL>
          <INPUT2 type="number" name="to" onChange={onChangeInput} />
          <SPAN>To:</SPAN>
        </LABEL>
      </LabelInput>
      <BUTTON type="submit">Search</BUTTON>
    </FORM>
  );
};

export default Filter;
