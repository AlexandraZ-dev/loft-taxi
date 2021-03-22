import React, {useEffect} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import {connect} from "react-redux";
import {address} from "../actions";

export const TaxiOrderForm = ({addressList, address}) => {
  console.log(addressList);

  useEffect(() => {
    address();
  }, [address]);
  return (

        <form>
          <FormControl >
            <InputLabel id="address1">Откуда</InputLabel>
            <Select
              labelId="address1"
              id="address1"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl >
            <InputLabel id="address2">Куда</InputLabel>
            <Select
              labelId="address2"
              id="address2"
              // value={age}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button type='submit' data-testid='submitButton' variant='contained' color='primary'
          >Вызвать такси</Button>
        </form>
  );
};

export const TaxiOrderFormWithAuth = connect(
  (state) => ({addressList: state.addressList.addressList}),
  {address}
)(TaxiOrderForm)
