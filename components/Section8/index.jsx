import { Box, Grid, Typography } from '@mui/material';
import MyCard from './MyCard';
import { Contact1, Contact2, Contact3, Contact4 } from '../../utils/icons';
import { useRouter } from 'next/router';

const Section8 = () => {
  const router = useRouter();
  const content = [
    {
      text: 'نصب اپلیکیشن یا وب اپ دوباره',
      image: Contact1,
      click: () => {
        router.push('https://app.dobaare.com');
      },
    },
    {
      text: 'مشاهده وب سایت و وبلاگ دوباره',
      image: Contact2,
      click: () => {
        router.push('/blog');
      },
    },
    {
      text: 'تماس با سامانه ی تلفن گویای 3633',
      image: Contact3,
      click: false,
    },
    {
      text: 'عضویت در صفحه اینستاگرام دوباره و آگاهی از فعالیت های ما',
      image: Contact4,
      click: () => {
        router.push('https://www.instagram.com/ali.razipur/');
      },
    },
  ];
  return (
    <Box sx={{ width: 'calc(100% + 20px)' }}>
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#00C185',
          justifyContent: 'center',
          flexDirection: 'row-reverse',
          px: { xs: 3, sm: 4, md: 6 },
          mt: 5,
          py: 2,
        }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={3}
          sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', pt: 2, textAlign: 'right' }}
          >
            با ما در ارتباط باشید
          </Typography>
        </Grid>
        {content.map((c, i) => (
          <Grid
            key={i}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <MyCard content={c} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section8;
