import React from 'react';
import {Button, Card, CardActionArea, CardMedia, Container, Grid, MenuItem, Paper, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {getRoute, newOrderTaxi} from "../../actions";
import * as Yup from "yup";
import {Form, Formik, Field} from "formik";
import {TextField,} from 'formik-material-ui';
import standart from './cars/standart.4f77edda.jpg'
import biznes from './cars/biznes.3d4d1c49.jpg'
import premium from './cars/premium.db10d13e.png'

export const TaxiOrderForm = ({addressList, isLoading, getRoute, isOrderSuccess, newOrderTaxi}) => {

    const onSubmit = (values, {setSubmitting, resetForm}) => {
      getRoute(values.address1, values.address2)
      resetForm()
      newOrderTaxi()
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
                  style={{padding: "0 20px"}}
                >
                  <Field
                    type="text"
                    name="address1"
                    label="Откуда"
                    select
                    margin="normal"
                    component={TextField}
                    fullWidth
                    value={values.address1}
                    style={{marginTop: 0}}
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
                    value={values.address2}
                    style={{marginTop: 0}}
                  >
                    {addressList.map(option => (
                      values.address1 === option
                        ? option
                        : <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                  </Field>
                  <Paper elevation={5} style={{
                    top: "164px",
                    left: "24px",
                    padding: "32px 46px",
                    maxWidth: "500px",
                    widht: "486px",
                    boxSizing: "border-box",
                    borderRadius: "10px",
                    pointerEvents: "all"
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                      <Card elevation={4} style={{marginRight: '20px'}}>
                        <CardActionArea>
                          <Typography variant='body1'>Стандарт</Typography>
                          <Typography variant='caption'>Стоимость</Typography>
                          <Typography variant='h6'>150P</Typography>
                          <CardMedia style={{
                            width: "95px",
                            height: "72px",
                            marginTop: "12px"
                          }} image={standart} title="Standard car"
                          />
                        </CardActionArea>
                      </Card>
                      <Card elevation={4} style={{marginRight: '20px'}}>
                        <CardActionArea>
                          <Typography variant='body1'>Бизнес</Typography>
                          <Typography variant='caption'>Стоимость</Typography>
                          <Typography variant='h6'>250P</Typography>
                          <CardMedia title="Business car"
                            image={biznes}
                            style={{
                              width: "95px",
                              height: "72px",
                              marginTop: "12px"
                            }}/>
                        </CardActionArea>
                      </Card>
                      <Card elevation={4} style={{marginRight: '20px'}}>
                        <CardActionArea>
                          <Typography variant='body1'>Премиум</Typography>
                          <Typography variant='caption'>Стоимость</Typography>
                          <Typography variant='h6'>350P</Typography>
                          <CardMedia title="Premium car" image={premium} style={{
                            width: "95px",
                            height: "72px",
                            marginTop: "12px"
                          }}/>
                        </CardActionArea>
                      </Card>
                    </div>
                  </Paper>
                  <Button type='submit' data-testid='button' variant='contained'
                          color='primary' style={{
                    marginTop: "30px",
                    paddingLeft: "24px",
                    paddingRight: "24px", fontSize: "1.3rem",
                    fontWeight: "400",
                    borderRadius: "40px"
                  }}
                          fullWidth={true}
                  >Вызвать такси</Button>
                </Grid>
              </Form>
            )}
            </Formik>
          )
          : <Grid>
            <Container style={{
              padding: "0 24px",
              textAlign: "left"
            }}>
              <Typography variant='h4' data-testid='order' style={{
                fontWeight: "700",
                marginBottom: "16px"
              }}>
                Заказ размещён
              </Typography>
              <Typography variant={"body1"} data-testid='info'>
                Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
              </Typography>
              <Button data-testid='buttonNewOrder' variant='contained' color='primary'
                      onClick={newOrderTaxi}
                      fullWidth={true}
                      style={{
                        marginTop: "30px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        fontSize: "1.3rem",
                        fontWeight: "400",
                        borderRadius: "40px",
                        letterSpacing: 0,
                      }}
              >Сделать новый заказ</Button>
            </Container>
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
    getRoute, newOrderTaxi
  }
)(TaxiOrderForm)
