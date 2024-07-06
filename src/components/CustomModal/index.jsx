import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import CloseIcon from '@mui/icons-material/Close'
import { openSignModal } from '../../redux/actions'
import { setAuth } from '../../redux/actions/auth'
import ForgotPassword from './ForgotPassword'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))

export default function CustomizedDialogs () {
  const stateOpen = useSelector(state => state.signModal.open)
  const stateOpen2 = useSelector(state => state.signModal.open)
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [forget, setForget] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(() => {
    setOpen(stateOpen)
  }, [stateOpen])
  React.useEffect(() => {
    setOpen2(!open2)
  }, [stateOpen])

  const navigate = useNavigate()

  const handleClose = () => dispatch(openSignModal(false))
  const handleClose2 = () => {
    setOpen2(!open2)
  }
  // const handleClose1 = () => dispatch(openSignModal(false))
  const handlePassword = e => setPassword(e.target.value)
  const handleEmail = e => setEmail(e.target.value)

  const handleLogin = () => {
    if (!email) {
      alert('enter email first')
      return
    }
    dispatch(setAuth({ email }))
    if (email == 'admin') navigate('/addteam')
    else if (email == 'manager') navigate('/squad')
    // navigate('/addteam')
    dispatch(openSignModal(false))
  }
  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  return (
    <React.Fragment>
      <div className='fixed h-screen bg-slate-50'>
        {forget ? (
          <>
            <BootstrapDialog
              // onClose={handleClose1}
              aria-labelledby='customized-dialog-title'
              open={open2}
              sx={{
                '& .MuiDialog-paper': {
                  backgroundColor: 'transparent',
                  backgroundImage: 'none'
                }
              }}
            >
              <IconButton
                aria-label='close'
                onClick={handleClose2}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: theme => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent
                dividers
                sx={{ backgroundColor: '#001835d4', border: 'none' }}
              >
                <div className='d-flex align-center sign-form'>
                  <div className='sign-logo'>
                    <img src='/images/GFA_logo.svg' alt='' />
                  </div>
                  <Box sx={{ marginLeft: '50px' }}>
                    <Typography variant='h4' gutterBottom>
                      pass reset
                    </Typography>
                    <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
                      <OutlinedInput
                        id='outlined-adornment-email'
                        type='text'
                        placeholder='Enter Email to get password reset link'
                        startAdornment={
                          <InputAdornment position='start'>
                            <EmailOutlinedIcon />
                          </InputAdornment>
                        }
                        onChange={handleEmail}
                        value={email}
                      />
                    </FormControl>

                    <Stack
                      direction={'row'}
                      alignItems={'center'}
                      justifyContent={'space-between'}
                    >
                      <FormControlLabel
                        control={<Checkbox />}
                        label='Remember me'
                      />
                      {/* <Link
                        to='/forget-password'
                        onClick={() => {
                          setForget(true)
                          // console.log('cle')
                          dispatch(openSignModal(false))
                        }}
                      >
                        Forgot password?
                      </Link> */}
                    </Stack>
                    <button
                      onClick={handleLogin}
                      className='pull-btn text-center text-dark'
                      style={{ width: '100%', marginTop: '20px' }}
                    >
                      Submit
                    </button>
                  </Box>
                </div>
              </DialogContent>
            </BootstrapDialog>
          </>
        ) : (
          <>
            <h1>j</h1>
          </>
        )}
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'transparent',
            backgroundImage: 'none'
          }
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
          sx={{ backgroundColor: '#001835d4', border: 'none' }}
        >
          <div className='d-flex align-center sign-form'>
            <div className='sign-logo'>
              <img src='/images/GFA_logo.svg' alt='' />
            </div>
            <Box sx={{ marginLeft: '50px' }}>
              <Typography variant='h4' gutterBottom>
                Sign In
              </Typography>
              <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
                <OutlinedInput
                  id='outlined-adornment-email'
                  type='text'
                  placeholder='User name'
                  startAdornment={
                    <InputAdornment position='start'>
                      <EmailOutlinedIcon />
                    </InputAdornment>
                  }
                  onChange={handleEmail}
                  value={email}
                />
              </FormControl>
              <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type='password'
                  placeholder='Password'
                  onChange={handlePassword}
                  value={password}
                  startAdornment={
                    <InputAdornment position='start'>
                      <HttpsOutlinedIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <FormControlLabel control={<Checkbox />} label='Remember me' />
                <div
                  // to='/forget-password'
                  onClick={() => {
                    setForget(true)
                    console.log('cle')
                    dispatch(openSignModal(false))
                  }}
                >
                  Forgot password?
                </div>
              </Stack>
              <button
                onClick={handleLogin}
                className='pull-btn text-center text-dark'
                style={{ width: '100%', marginTop: '20px' }}
              >
                Sign In
              </button>
            </Box>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  )
}
