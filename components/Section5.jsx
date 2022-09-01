import { Alert, Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import Close from '@mui/icons-material/Close';
import axios from 'axios';

const Section5 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

  const submitHandler = () => {
    const number = phoneNumber.replace(/\D/g, '').slice(-10);
    const data = {
      phone_number: parseInt(`98${number}`),
      full_name: `${name} ${lastName}`,
    };
    axios
      .post('https://api.dobaare.com/invitation/agenthiring/', data)
      .then((res) => {
        console.log(res);
        setError(false);
        setError1(false);
        setSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err, data);
        setError(true);
      });
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        backgroundColor: '#00C185',
        py: '25px',
        width: 'calc(100% + 20px)',
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', color: '#FFF', direction: 'rtl' }}
      >
        در کمتر از 10 دقیقه ثبت نام کنید و به ناوگان دوباره بپیوندین.
      </Typography>
      <Typography
        variant="p"
        sx={{ textAlign: 'center', color: '#FFF', fontFamily: 'IRANSansFA' }}
      >
        بدون مراجعه حضوری ثبت نام کنین
      </Typography>
      <Button
        variant="contained"
        sx={{
          height: '36px',
          borderRadius: '18px',
          px: '30px',
          mt: 2,
          backgroundColor: '#F4B23E',
          color: '#FFF',
          boxShadow: 'none',
        }}
        onClick={() => setIsOpen(true)}
      >
        ثبت نام گرداوران
      </Button>
      {isOpen && (
        <Box
          sx={{
            top: '0',
            left: '0',
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,.5)',
            zIndex: '1001',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              top: '0',
              left: '0',
              width: 'clamp(300px, 40%, 600px)',
              minHeight: '180px',
              borderRadius: '15px',
              backgroundColor: '#FFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              py: '50px',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Typography
              variant="p"
              color="#000"
              sx={{
                fontSize: '20px',
                position: 'absolute',
                top: '10px',
                right: '20px',
                cursor: 'pointer',
                '&:hover': {
                  color: 'red',
                },
              }}
              onClick={() => setIsOpen(false)}
            >
              <Close />
            </Typography>
            <Typography
              sx={{
                color: '#014351',
                mb: 3,
              }}
              variant="h6"
            >
              فرم ثبت نام راننده
            </Typography>
            <input
              type="text"
              name="input"
              id="input"
              onChange={(e) => setName(e.target.value)}
              placeholder="نام خود را وارد کنید..."
              style={{
                direction: 'rtl',
                height: '35px',
                minWidth: '230px',
                width: '40%',
                maxWidth: '400px',
                border: '0',
                borderRadius: '5px',
                paddingRight: '12px',
              }}
            />
            <input
              type="text"
              name="input"
              id="input"
              placeholder="نام خانوادگی خود را وارد کنید..."
              style={{
                direction: 'rtl',
                height: '35px',
                minWidth: '230px',
                width: '40%',
                maxWidth: '400px',
                border: '0',
                borderRadius: '5px',
                paddingRight: '12px',
              }}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              name="input"
              id="input"
              placeholder="شماره تماس خود را وارد کنید..."
              style={{
                height: '35px',
                minWidth: '230px',
                width: '40%',
                maxWidth: '400px',
                border: '0',
                borderRadius: '5px',
                paddingRight: '12px',
                direction: 'rtl',
              }}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ color: '#FFF', px: '50px' }}
              size="large"
              onClick={() => {
                setError1(false);
                if (name && lastName && phoneNumber.length === 11) {
                  submitHandler();
                } else {
                  setError1(true);
                }
              }}
            >
              ارسال
            </Button>
            {error && (
              <Alert severity="error" sx={{ textAlign: 'center' }}>
                مجددا تلاش کنید
              </Alert>
            )}
            {error1 && (
              <Alert severity="error" sx={{ textAlign: 'center' }}>
                اطلاعات ورودی خود را بررسی کنید
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ textAlign: 'center' }}>
                منتظر تماس از سمت دوباره باشید
              </Alert>
            )}
            <Alert severity="info" sx={{ textAlign: 'center' }}>
              پس از ثبت اطلاعات اولیه پشتیبان های ما با شما تماس میگیرند
            </Alert>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Section5;
