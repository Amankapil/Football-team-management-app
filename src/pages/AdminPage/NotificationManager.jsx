import React, { useState } from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button
} from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AddIcon from '@mui/icons-material/Add'

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([
    'New message received',
    'Server downtime scheduled',
    'Update your profile information',
    'New friend request',
    'Your password will expire soon'
  ])
  const [open, setOpen] = useState(false)
  const [newNotification, setNewNotification] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setNewNotification('')
  }

  const handleAddNotification = () => {
    // Simulate API call
    setNotifications([...notifications, newNotification])
    handleClose()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
        //         bgcolor: '#f5f5f5'
      }}
    >
      <Box
        sx={{
          //           bgcolor: 'white',
          boxShadow: 3,
          borderRadius: 2,
          p: 3,
          minWidth: 300,
          textAlign: 'center'
        }}
      >
        <Typography variant='h4' gutterBottom>
          Current update to users{' '}
        </Typography>
        <List>
          <IconButton
            color='primary'
            aria-label='add notification'
            onClick={handleOpen}
          >
            <AddIcon />
          </IconButton>
          {notifications.map((notification, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <NotificationsIcon color='primary' />
              </ListItemIcon>
              <ListItemText primary={notification} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Notification</DialogTitle>
        <DialogContent className='!w-[500px]'>
          <TextField
            autoFocus
            margin='dense'
            id='newNotification'
            label='New Notification'
            type='text'
            fullWidth
            variant='standard'
            value={newNotification}
            onChange={e => setNewNotification(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNotification}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default NotificationManager
