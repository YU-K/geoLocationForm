import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { useContext } from "react";
import StateContext from "../context";
import Container from "@material-ui/core/Container";
import _ from "lodash";

const SearchAddress = () => {
  const { updateProcess, setAddress, updateUserAddress } = useContext(
    StateContext
  );

  const userAddressObject = {
    state: "",
    country: "",
    city: "",
    postcode: "",
    street: "",
    housenumber: "",
  };

  const getUserAddressObject = (obj1, obj2) => {
    const keys = Object.keys(obj1);
    _.forEach(keys, (key) => {
      if (!_.has(obj2, key)) {
        return;
      }
      obj2[key] = obj1[key];
    });
  };

  const onSelect = (value) => {
    if (!value) {
      return;
    }

    const addressObj = value.properties;
    getUserAddressObject(addressObj, userAddressObject);

    setAddress({ ...addressObj });
    updateProcess("selected");

    updateUserAddress({ ...userAddressObject });
  };

  return (
    <Container maxWidth="sm">
      <GeoapifyContext apiKey="06be80713b9640aea83b4571ec123be3">
        <GeoapifyGeocoderAutocomplete placeSelect={onSelect} />
      </GeoapifyContext>
    </Container>
  );
};

export default SearchAddress;
