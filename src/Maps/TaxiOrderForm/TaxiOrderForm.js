import React, {useState} from 'react';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {getRoute} from "../../actions";

export const TaxiOrderForm = ({addressList, isLoading, getRoute}) => {
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [orderSuccess, setOrderSuccess] = useState(true)

    const onSubmit = (e) => {
      e.preventDefault()
      getRoute(addressOne, addressTwo)
      setAddressOne('')
      setAddressTwo('')
      setOrderSuccess(false)
    }

    if (isLoading) {
      return <div> Адреса загружаются</div>
    }
    return (
      <>
        {orderSuccess
          ? (<form onSubmit={onSubmit}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <FormControl style={{minWidth: "200px"}}>
                <InputLabel id="address1" data-testid='address1'>Откуда</InputLabel>
                <Select
                  labelId="address1"
                  id="address1"
                  defaultValue=""
                  value={addressOne}
                  onChange={e => setAddressOne(e.target.value)}
                >
                  {addressList.map(address => (
                    addressTwo === address
                      ? address
                      : <MenuItem key={address} value={address}>{address}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl style={{minWidth: "200px"}}>
                <InputLabel id="address2" data-testid='address2'>Куда</InputLabel>
                <Select
                  labelId="address2"
                  id="address2"
                  defaultValue=""
                  value={addressTwo}
                  onChange={e => setAddressTwo(e.target.value)}
                >
                  {addressList.map(address => (
                    addressOne === address
                      ? address
                      : <MenuItem key={address} value={address}>{address}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button type='submit' data-testid='button' disabled={!addressOne && !addressTwo} variant='contained'
                      color='primary' style={{marginTop: '35px', minWidth: "200px"}}
              >Вызвать такси</Button>
            </Grid>
          </form>)
          : <Grid>
            <Typography variant='h4' data-testid='order'>
              Заказ размещён
            </Typography>
            <Typography variant={"body1"} data-testid='info'>
              Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
            <Button data-testid='buttonNewOrder' variant='contained' color='primary' onClick={() => setOrderSuccess(true)}
                    style={{
                      width: '100%',
                      display: 'inherit',
                      alignItems: 'inherit',
                      justifyContent: 'inherit',
                    }}
            >Сделать новый заказ</Button>
          </Grid>
        }
      </>
    )
  }
;

export const TaxiOrderFormWithAuth = connect(
  (state) => (
    {
      addressList: state.addressList.addressList,
      isLoading: state.addressList.isLoading
    }
  ),
  {
    getRoute
  }
)(TaxiOrderForm)
