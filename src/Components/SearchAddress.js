import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { useContext } from "react";
import StateContext from "../context";

const SearchAddress = () => {
  const { onSelect } = useContext(StateContext);
  return (
    <GeoapifyContext apiKey="06be80713b9640aea83b4571ec123be3">
      <GeoapifyGeocoderAutocomplete placeSelect={onSelect} />
    </GeoapifyContext>
  );
};

export default SearchAddress;
