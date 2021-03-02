import React from 'react'
import {Box, Button, Paper, TextField, Typography} from "@material-ui/core";
import {LogoForCard} from "./LogoForCard/LogoForCard";
import {LogoChipCode} from "./LogoChipCode/LogoChipCode";
import PropTypes from "prop-types";

export const Profile = ({navigateTo}) => {
  return (
    <Box display='flex' justifyContent='center' alignItems="center" paddingTop='10rem'>
      <Paper elevation={2} variant="outlined" square={false} style={{
        borderRadius: '10px', padding: "60px 44px"
      }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'>
          <Typography
            variant="h4">Профиль</Typography>
          <Typography variant="body1">Введите платежные данные</Typography>
          <Box padding='40px 0'>
            <form>
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

                  <TextField
                    id="numberCard"
                    data-testid='numberCard'
                    label='Номер карты'
                    type="text"
                    name="numberCard"
                    margin="normal"
                    fullWidth
                    color="primary"
                    required
                  />
                  <Box display='flex'>
                    <TextField
                      id="date"
                      data-testid='date'
                      label='MM/YY'
                      type="date"
                      name="date"
                      margin="normal"
                      fullWidth
                      color="primary"
                      required
                      style={{paddingRight: "35px"}}
                    />
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
                    <Typography variant='body1'>Date</Typography>
                  </Box>
                  <Typography variant='body1' style={{
                    fontSize: "22px",
                    lineHeight: "1.2"
                  }}>0000 0000 0000 0000</Typography>
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
                        onClick={() => navigateTo('maps')}>Сохранить</Button>
              </div>

            </form>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

Profile.propTypes = {
  navigateTo: PropTypes.func.isRequired
}
