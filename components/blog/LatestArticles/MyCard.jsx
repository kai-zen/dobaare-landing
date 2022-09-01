/* eslint-disable @next/next/no-img-element */
import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { CalendarIcon, ViewIcon } from '../../../utils/icons';
import { useRouter } from 'next/router';

const MyCard = ({ data }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row-reverse' },
        p: 2,
        borderRadius: '15px',
        cursor: 'pointer',
      }}
      elevation={5}
      onClick={() => router.push(`/blog/${data?.id}`)}
    >
      <CardMedia
        component="img"
        sx={{
          maxWidth: { xs: '100%', md: '30%' },
          height: 'auto',
          borderRadius: '12px',
          objectFit: 'cover',
        }}
        image={data?.image[0]}
        alt="Live from space album cover"
      />
      <CardContent sx={{ flex: '1 0 auto', width: { xs: '100%', md: '70%' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00C185',
              fontSize: '12px',
              p: '3px 10px',
              fontWeight: 'bold',
              boxShadow: 'none',
              cursor: 'auto',
              '&:hover': {
                backgroundColor: '#00C185',
                boxShadow: 'none',
              },
              color: 'white',
            }}
          >
            {data?.category}
          </Button>
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: '15px' }}>
              <Typography
                variant="p"
                sx={{
                  fontFamily: 'IRANSansfa',
                  fontSize: '12px',
                  direction: 'rtl',
                  mr: '6px',
                }}
              >
                بازدید {data?.views}
              </Typography>
              <Image src={ViewIcon} alt="view icon" height="16px" />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="p"
                sx={{ fontFamily: 'IRANSansfa', fontSize: '12px', mr: '6px' }}
              >
                {data?.date[1]}
              </Typography>
              <Image src={CalendarIcon} alt="calendar icon" height="16px" />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{ color: '#014351', fontWeight: 'bold', textAlign: 'right' }}
          >
            {data?.mainTitle}
          </Typography>
          <Typography
            sx={{ color: '#014351', textAlign: 'right', fontSize: '14px' }}
          >
            {data?.body[0]}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyCard;
