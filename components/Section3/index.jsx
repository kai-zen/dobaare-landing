import { Box, Typography } from '@mui/material';
import Cards from './Cards';

const Section3 = () => {
  return (
    <Box sx={{ width: 'calc(100% + 20px)' }}>
      <Box
        sx={{
          mx: { xs: 2, md: 8 },
          mt: { xs: 4, md: 8 },
          borderRadius: '25px',
          backgroundColor: '#F6F4F9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: '50px',
          px: { xs: '20px' },
          gap: 2,
        }}
        id="services"
      >
        <Typography
          variant="p"
          sx={{ fontFamily: 'IRANSansfa', color: '#014351' }}
        >
          با دوباره، دوباره مصرف کنیم
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 3,
            color: '#014351',
            maxWidth: '600px',
            fontWeight: '500',
            direction: 'rtl',
          }}
        >
          هم اکنون در دوباره سرویس‌های زیر ارائه می‌شود:
        </Typography>
        <Cards />
      </Box>
    </Box>
  );
};

export default Section3;
