import React, {useState} from 'react'
import {Box, Button, Paper, TextField, Typography} from "@material-ui/core";
import InputMask from 'react-input-mask';
import moment from "moment";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {connect} from "react-redux";
import {LogoForCard} from "../LogoForCard/LogoForCard";
import {LogoChipCode} from "../LogoChipCode/LogoChipCode";
import {card} from "../../actions";


export const ProfileForm = ({card}) => {
  const [cardNumber, setCardNumber] = useState('')
  const [selectedDate, handleDateChange] = useState(new Date());
  const token = localStorage.token;

  const onSubmitProfile = (e) => {
    e.preventDefault()
    const {name, cardNumber, cvc} = e.target
    const date = moment(selectedDate).format('MM/YYYY')
    card(name.value, cardNumber.value, date, cvc.value, token)
  }
  return (
    <form onSubmit={onSubmitProfile}>
      <Box display='flex' justifyItems='row' padding="40px 0">
        <Box marginRight='100px'>
          <TextField
            id="name"
            data-testid='name'
            label='Имя владельца'
            type="text"
            name="name"
            margin="normal"
            fullWidth
            color="primary"
            required
          />
          <InputMask mask="9999 9999 9999 9999" value={cardNumber}
                     onChange={e => setCardNumber(e.target.value)} id="cardNumber"
                     name="cardNumber"
                     data-testid='cardNumber'
                     label='Номер карты'>
            {(inputProps) => <TextField {...inputProps} type="tel"/>}
          </InputMask>

          <Box display='flex'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                data-testid='date'
                label='MM/YY'
                format="MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <TextField
              id="cvc"
              data-testid='cvc'
              label='CVC'
              type="text"
              name="cvc"
              margin="normal"
              fullWidth
              color="primary"
              required
            />
          </Box>
        </Box>
        <Paper elevation={5} variant="outlined" square={false}
               style={{
                 borderRadius: '10px', width: "347px",
                 height: "215px",
                 padding: "18px 28px",
                 boxSizing: "border-box",
                 display: 'flex',
                 flexDirection: "column",
                 justifyContent: 'space-between'
               }}>
          <Box display='flex' justifyItems='row' justifyContent='space-between'>
            <LogoForCard/>
            <Typography variant='body1'>{moment(selectedDate).format('MM/YY')}</Typography>
          </Box>
          <Typography variant='body1' style={{
            fontSize: "22px",
            lineHeight: "1.2"
          }}>{cardNumber}</Typography>
          <Box display='flex' justifyItems='row' justifyContent='space-between'>
            <LogoChipCode/>
            <img width="45px"
                 src='https://raw.githubusercontent.com/satansdeer/loft-taxi-mui-theme/3f2f1ed65d5c650afc969e0f4b03516969aa44a6/src/MCIcon/mc_symbol.svg'
                 alt="mastercard"/>
          </Box>
        </Paper>
      </Box>
      <div style={{
        display: "flex",
        justifyContent: "center"
      }}>
        <Button type='submit' data-testid='submitButton' variant='contained' color='primary'
                style={{
                  borderRadius: "40px",
                  fontSize: "1.3rem",
                  width: "350px",
                }}
        >Сохранить</Button>
      </div>
    </form>
  )
}

export const ProfileFormWithAuth = connect(
  null,
  {card}
)(ProfileForm)
