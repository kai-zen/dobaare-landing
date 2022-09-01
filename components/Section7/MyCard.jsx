import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import Image from 'next/image';
import { CalendarIcon, ViewIcon } from '../../utils/icons';
import { useRouter } from 'next/router';

const MyCard = ({ curveTop, data }) => {
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: `${curveTop ? '20px' : '0 0 20px 20px'}`,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.15)',
        },
      }}
      onClick={() => router.push(`/blog/${data?.id}`)}
    >
      <Box sx={{ position: 'relative' }}>
        <div
          style={{
            width: '100%',
            height: '180px',
            backgroundImage: `url(${data.image[0]})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <span
          style={{
            position: 'absolute',
            right: '15px',
            borderRadius: '4px',
            fontSize: '12px',
            bottom: '10px',
            padding: '5px 15px',
            backgroundColor: '#014351',
            color: 'white',
            fontFamily: 'IRANSansFa',
          }}
        >
          {data?.category}
        </span>
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
          direction: 'rtl',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', color: '#014351' }} variant="h6">
          {data?.mainTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            my: 1,
            lineHeight: '22px',
            maxHeight: '110px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {data?.body[0]}
        </Typography>
      </CardContent>
      <Divider sx={{ width: '90%', ml: '5%' }} />
      <CardActions
        disableSpacing
        sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="p"
            sx={{ fontFamily: 'IRANSansfa', fontSize: '12px' }}
          >
            {data?.date[1]}
          </Typography>
          &nbsp;&nbsp;
          <Image src={CalendarIcon} alt="calendar icon" height="16px" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="p"
            sx={{
              fontFamily: 'IRANSansfa',
              fontSize: '12px',
              direction: 'rtl',
            }}
          >
            بازدید {data?.views}
          </Typography>
          &nbsp;&nbsp;
          <Image src={ViewIcon} alt="view icon" height="16px" />
        </Box>
      </CardActions>
    </Card>
  );
};

export default MyCard;
