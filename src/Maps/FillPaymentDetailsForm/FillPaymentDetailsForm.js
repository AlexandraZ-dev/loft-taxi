import React from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export const FillPaymentDetailsForm = () => {
  return (
    <Grid>
      <Typography variant='h4' data-testid='fillData'>
        Заполните платежные данные
      </Typography>
      <Typography variant={"body1"} data-testid='info'>
        Укажите информацию о банковской карте, чтобы сделать заказ
      </Typography>
      <Button data-testid='button' variant='contained' color='primary'
              style={{
                width: '100%',
                display: 'inherit',
                alignItems: 'inherit',
                justifyContent: 'inherit',
              }}
      >
        <Link data-testid='link' to='/profile'>
          Перейти в профиль
        </Link>
      </Button>
    </Grid>
  );
};
