import React from 'react'
// import * as React from 'react'
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

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor='photo-upload' className='custom-file-upload fas'>
    <div className='img-wrap img-upload'>
      <img for='photo-upload' src={src} />
    </div>
    <input id='photo-upload' type='file' onChange={onChange} />
  </label>
)
const Managersettingpage = () => {
  const [state, setState] = React.useState({
    file: '',
    imagePreviewUrl:
      'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true',
    name: '',
    password: '',
    active: 'edit'
  })
  return (
    <>
      <DialogContent dividers sx={{ backgroundColo: '5d4', border: 'none' }}>
        <div className='d-flex align-center sign-form'>
          <div className='sign-logo'>
            <img src='/images/GFA_logo.svg' alt='' />
            {/* <ImgUpload src={imagePreviewUrl} /> */}
          </div>
          <Box sx={{ marginLeft: '50px' }}>
            <Typography variant='h4' gutterBottom>
              Change details
            </Typography>
            <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-email'
                type='text'
                placeholder='Change User name'
                startAdornment={
                  <InputAdornment position='start'>
                    <EmailOutlinedIcon />
                  </InputAdornment>
                }
                //                 onChange={handleEmail}
                //                 value={email}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} fullWidth variant='outlined'>
              <OutlinedInput
                id='outlined-adornment-password'
                type='password'
                placeholder='Change Password'
                //                 onChange={handlePassword}
                //                 value={password}
                startAdornment={
                  <InputAdornment position='start'>
                    <HttpsOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      //                       onClick={handleClickShowPassword}
                      //                       onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
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
              {/* <Link
                to='/forget-password'
                //                 onClick={() => {
                //                   setForget(true)
                //                   console.log('cle')
                // //                   dispatch(openSignModal(false))
                //                 }}
              >
                Forgot password?
              </Link> */}
            </Stack>
            <button
              //               onClick={handleLogin}
              className='pull-btn text-center text-dark'
              style={{ width: '100%', marginTop: '20px' }}
            >
              submit
            </button>
          </Box>
        </div>
      </DialogContent>
    </>
  )
}

export default Managersettingpage
