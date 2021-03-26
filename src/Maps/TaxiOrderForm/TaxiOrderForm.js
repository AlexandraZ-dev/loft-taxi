import React, {useState} from 'react';
import {Button, FormControl, Grid, InputLabel, MenuItem, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {getRoute} from "../../actions";
import * as Yup from "yup";
import {Form, Formik, Field} from "formik";
import {TextField,} from 'formik-material-ui';

export const TaxiOrderForm = ({addressList, isLoading, getRoute, isOrderSuccess}) => {
    const [orderSuccess, setOrderSuccess] = useState(true)

    const onSubmit = (values, {setSubmitting, resetForm}) => {
      getRoute(values.address1, values.address2)
      resetForm ()
      setOrderSuccess(false)
      setSubmitting(false)
    }

    if (isLoading) {
      return <div> Адреса загружаются</div>
    }
    return (
      <>
        {!isOrderSuccess
          ? (
            <Formik
              initialValues={{
                address1: '',
                address2: '',
              }}
              validationSchema={Yup.object({
                address1: Yup.string()
                  .required('Required'),
                address2: Yup.string()
                  .required('Required'),
              })}
              onSubmit={onSubmit}
            >{({values, setFieldValue}) => (
              <Form>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Field
                    type="text"
                    name="address1"
                    label="Откуда"
                    select
                    margin="normal"
                    component={TextField}
                    fullWidth
                    defaultValue={""}
                    value={values.address1}
                  >
                    {addressList.map(option => (
                      values.address2 === option
                        ? option
                        : <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Field>
                  <Field
                    type="text"
                    name="address2"
                    label="Куда"
                    select
                    margin="normal"
                    component={TextField}
                    fullWidth
                    defaultValue={""}
                    value={values.address2}
                  >
                    {addressList.map(option => (
                      values.address1 === option
                        ? option
                        : <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Field>
                  <Button type='submit' data-testid='button' variant='contained'
                          color='primary' style={{marginTop: '35px', minWidth: "200px"}}
                  >Вызвать такси</Button>
                </Grid>
              </Form>
            )}
            </Formik>
          )
          : <Grid>
            <Typography variant='h4' data-testid='order'>
              Заказ размещён
            </Typography>
            <Typography variant={"body1"} data-testid='info'>
              Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
            <Button data-testid='buttonNewOrder' variant='contained' color='primary'
                    onClick={() => setOrderSuccess(true)}
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
      isLoading: state.addressList.isLoading,
      isOrderSuccess: state.route.isOrderSuccess
    }
  ),
  {
    getRoute
  }
)(TaxiOrderForm)
