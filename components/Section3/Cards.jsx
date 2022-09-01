import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Image from 'next/image';
import {
  IVRPhone,
  Kiosk,
  MapIcon,
  MelodyIcon,
  SraravanCard,
} from '../../utils/icons';

const Cards = () => {
  const content = [
    {
      icon: <Image src={MapIcon} alt="map icon" width="70px" height="70px" />,
      title: 'تکلیف پسماندهات رو روشن کن',
      content: 'امکان درخواست آنلاین فروش پسماند خشک ارزشمند شما از مبدأ',
    },
    {
      icon: (
        <Image src={IVRPhone} alt="phone icon" width="70px" height="70px" />
      ),
      title: 'زنگ بزن، آدرس بده، پسماندت رو بفروش',
      content:
        'با تماس با سامانه تلفن گویای ۳۶۳۳؛ پسماندت رو به گردآوران ما تحویل بده ',
    },
    {
      icon: (
        <Image src={MelodyIcon} alt="melody icon" width="70px" height="70px" />
      ),
      title: 'این ملودی، صدای زمینه؛ ردش رو بگیر',
      content:
        'طرح ملودی؛ موقعیت ماشین‌های تفکیک زباله رو در نزدیکی تو، نشون می‌ده',
    },
    {
      icon: <Image src={Kiosk} alt="kiosk icon" width="70px" height="70px" />,
      title: ' می‌تونی پسماندت رو اینجا تحویل بدی',
      content: 'پسماندهای خشک ارزشمندت رو به کیوسک‌های ما گرون‌تر بفروش',
    },
    {
      icon: (
        <Image src={SraravanCard} alt="card icon" width="70px" height="70px" />
      ),
      title: 'یک قدم بزرگ برای کمک به سراوان',
      content: 'با سراوان کارت، بدون شعار حامی سراوان باشیم.',
    },
  ];
  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: 'center', alignItems: 'center' }}
    >
      {content.map((c) => (
        <Grid
          item
          xs={12}
          sm={9}
          md={6}
          key={c.title}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Card
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 25px',
              borderRadius: '30px',
              maxWidth: '500px',
              backgroundColor: '#00C185',
              minWidth: 'calc(90% - 50px)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(100% - 70px)',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  direction: 'rtl',
                  gap: 1,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: '500', color: '#FFF' }}
                >
                  {c.title}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: '#FFF',
                    fontFamily: 'IRANSansFA',
                    fontSize: '14px',
                  }}
                >
                  {c.content}
                </Typography>
              </CardContent>
            </Box>
            {c.icon}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
