import React from 'react'
import {Box, Paper, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {ProfileFormWithAuth} from "./ProfileForm/ProfileForm";
import {ProfileSaved} from "./ProfileSaved/ProfileSaved";


export const Profile = ({isSaved}) => {
  console.log(isSaved);
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
            variant="h4" data-testid='profile'>Профиль</Typography>
          <Typography variant="body1" data-testid='add-data'>Введите платежные данные</Typography>
          <Box padding='40px 0'>
            {!isSaved
              ? <ProfileFormWithAuth/>
              : <ProfileSaved/>
            }
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export const ProfileWithAuth = connect(
  (state) => ({isSaved: state.auth.isSaved}),
)(Profile)
