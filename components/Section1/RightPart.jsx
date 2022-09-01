import { Alert, Button, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';
import { MobileIcon } from '../../utils/icons';
import axios from 'axios';

const RightPart = () => {
  const [success, setSuccess] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const isMd = useMediaQuery('(min-width:600px)');

  const submitHandler = () => {
    axios
      .post('https://api.dobaare.com/invitation/sendlink/', {
        phone_number: parseInt(
          `98${phoneNumber.replace(/\D/g, '').slice(-10)}`
        ),
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        mt: { xs: 0, md: 3 },
        padding: '20px 50px',
        direction: 'rtl',
        width: { xs: '100%', md: '45%' },
        mr: { xs: 0, md: '5%' },
      }}
    >
      <Button
        disableRipple
        variant="contained"
        sx={{
          backgroundColor: 'rgba(256,256,256,.2)',
          color: '#FFF',
          cursor: 'auto',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: 'rgba(256,256,256,.3)',
            color: '#FFF',
            boxShadow: 'none',
          },
        }}
      >
        برای نجات آینده، دوباره مصرف کنیم
      </Button>
      <Typography
        variant="h3"
        sx={{
          mb: 1,
          color: '#FFF',
          fontSize: { xs: '2rem', md: '2.5rem' },
          textAlign: { xs: 'center', md: 'right' },
          fontWeight: 500,
        }}
      >
        دوباره، سامانه جمع آوری پسماند خشک شهر رشت
      </Typography>
      <Typography
        variant="p"
        sx={{
          fontFamily: 'IRANSansfa',
          lineHeight: '24px',
          fontSize: '14px',
          color: '#FFF',
          textAlign: { xs: 'center', md: 'right' },
        }}
      >
        شما از طریق اپلیکیشن یا سایت دوباره می‌توانید طبق برنامه، پسماند خشک
        ارزشمندتون رو در محل مد نظر به گردآوران ما تحویل بدین و نقش مهمی در سبز
        شدن شهر رشت داشته باشید.
        <br />
        امیدواریم با همکاری یکدیگر قدم های تاثیر گذاری در راستای نجات سراوان و
        زمین برداریم و از آسیب های محیط زیستی بکاهیم.
      </Typography>
      <Box>
        {!success ? (
          <>
            <Button
              sx={{
                color: { xs: '#014351', md: '#FFF' },
                fontSize: '14px',
                mb: 1,
                cursor: 'auto',
              }}
              disableRipple
            >
              <Image src={MobileIcon} alt="mobile icon" />
              &nbsp;&nbsp;&nbsp;ارسال لینک دانلود
            </Button>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                height: '35px',
                position: 'relative',
              }}
            >
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
                }}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{
                  height: '35px',
                  color: '#FFF',
                  backgroundColor: '#014351',
                  fontSize: '12px',
                }}
                onClick={() => {
                  if (phoneNumber.length === 11) {
                    submitHandler();
                  }
                }}
              >
                {`${isMd ? 'ارسال لینک' : 'ارسال'}`}
              </Button>
            </Box>
          </>
        ) : (
          <Alert severity="success" sx={{ textAlign: 'center', mt: 1 }}>
            &nbsp;منتظر پیامک از سمت دوباره باشید&nbsp;
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default RightPart;
