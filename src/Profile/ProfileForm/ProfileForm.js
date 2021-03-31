import React, {useState} from 'react'
import {Box, Button, Paper, Typography} from "@material-ui/core";
import InputMask from 'react-input-mask';
import moment from "moment";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {connect} from "react-redux";
import {LogoForCard} from "../LogoForCard/LogoForCard";
import {LogoChipCode} from "../LogoChipCode/LogoChipCode";
import {card} from "../../actions";
import {Form, Formik, Field} from "formik";
import * as Yup from "yup";
import {TextInput} from "../../helpers/Input";

export const ProfileForm = ({card, profile}) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const {cardName, cardNumber, cvc, expiryDate} = profile;
  const token = localStorage.token;

  const onSubmitProfile = (values, {setSubmitting}) => {
    const date = moment(values.date).format('MM/YYYY')

    card(values.cardNumber.replace(/\s/g, ''), date, values.name, values.cvc, token)
    setSubmitting(false)
  }
  const dataPicker = ({field, ...props}) => {
    return (
      <KeyboardDatePicker
        {...field} {...props}
        name={field.name}
        margin="normal"
        id="date"
        views={["year", "month"]}
        format="MM/yy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />)
  }
  return (
    <Formik
      initialValues={{
        name: cardNumber || "",
        cardNumber: cardName || "",
        date: "",
        cvc: cvc || "",
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        date: Yup.string(),
        cardNumber: Yup.string()
          .min(16, "Not less than 16")
          .required('Required'),
        cvc: Yup.number()
          .required('Required'),
      })}
      onSubmit={onSubmitProfile}
    >
      {props => {
        const {
          values,
          handleChange,
        } = props;

        return (
          <Form>
            <Typography variant="body1" data-testid='add-data'>Введите платежные данные</Typography>
            <Box display='flex' justifyItems='row' padding="40px 0">
              <Box marginRight='100px'>
                <TextInput
                  label='Имя владельца'
                  name="name"
                  type="text"
                  placeholder='Имя владельца'
                />
                <InputMask
                  mask="9999 9999 9999 9999"
                  onChange={handleChange}
                  name="cardNumber"
                  label="Номер карты"
                  type="text"
                >

                  {(inputProps) =>
                    <TextInput {...inputProps}/>}

                </InputMask>

                <Box display='flex'>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Field component={dataPicker} name="date" label="Date"/>
                  </MuiPickersUtilsProvider>

                  <TextInput
                    label='CVC'
                    name="cvc"
                    type="text"
                    placeholder='CVC'
                  />
                </Box>
              </Box>
              <Paper elevation={5} variant="outlined" square={false}
                     style={{
                       borderRadius: '10px', width: "347px",
                       height: "182px",
                       padding: "18px 28px",
                       boxSizing: "border-box",
                       display: 'flex',
                       flexDirection: "column",
                       justifyContent: 'space-between'
                     }}>
                <Box display='flex' justifyItems='row' justifyContent='space-between'>
                  <LogoForCard/>
                  <Typography variant='body1'>{moment(values.date).format('MM/YY')}</Typography>
                </Box>
                <Typography variant='body1' style={{
                  fontSize: "22px",
                  lineHeight: "1.2"
                }}>{expiryDate ? expiryDate : values.cardNumber}</Typography>
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
          </Form>
        )
      }}
    </Formik>
  )
}

export const ProfileFormWithAuth = connect(
  (state) => ({profile: state.profile.profile}),
  {card}
)(ProfileForm)
