import React from 'react';
import {Button, Container, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export const FillPaymentDetailsForm = () => {
  return (
    <Grid>
      <Container style={{
        padding: "0 24px",
        textAlign: "left"
      }}>
      <Typography variant='h4' data-testid='fillData' style={{
        fontWeight: "700",
        marginBottom: "16px"
      }}>
        Заполните платежные данные
      </Typography>
      <Typography variant={"body1"} data-testid='info'>
        Укажите информацию о банковской карте, чтобы сделать заказ
      </Typography>
      <Button data-testid='button' variant='contained' color='primary'
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
      >
        <Link data-testid='link' to='/profile'>
          Перейти в профиль
        </Link>
      </Button>
      </Container>
    </Grid>
  );
};
