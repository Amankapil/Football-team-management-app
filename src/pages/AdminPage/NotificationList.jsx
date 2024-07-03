import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'

const notifications = [
  'New message received lorem12jfdsjf;aksjdf;lask j;lksadjf;laksjdf;l as flkdsjhfjkads laskjhsdflkjasdhfl kasflkajsdhf lkasdjf ',
  'Server downtime scheduled hfljdhalj jlkjs hfla  hlkjahsdfl ja hlkj fdhsl lkjdsh f',
  'Update your profile information kjdslfja n hlkjads f hlkj dhfljash',
  'New friend request',
  'Your password will expire soon'
]

const NotificationList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Box
        sx={{
          //           bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
          minWidth: 300
        }}
      >
        <Typography variant='h6' gutterBottom>
          Notifications
        </Typography>
        <List>
          {notifications.map((notification, index) => (
            <ListItem className='text-[20px]' key={index}>
              <ListItemIcon>
                <NotificationsIcon color='primary' />
              </ListItemIcon>
              <ListItemText className='!text-[20px]' primary={notification} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default NotificationList
