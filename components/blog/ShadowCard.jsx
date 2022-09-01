/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const ShadowCard = ({
  data,
  height = 256,
  fontSize = 20,
  fontWeight = 500,
}) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: '10px',
        width: '100%',
        position: 'relative',
        height: `${height}px`,
        cursor: 'pointer',
      }}
      onClick={() => router.push(`/blog/${data?.id}`)}
    >
      <img
        src={data?.image[0]}
        alt="article image"
        style={{
          objectFit: 'cover',
          filter: 'brightness(0.85)',
          width: '100%',
          height: `${height}px`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          height: `${height - 56}px`,
          width: '100%',
          borderRadius: '10px',
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 2) 0%, rgba(0, 0, 0, 0) 100%)',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          pl: '123px',
          pr: '25px',
          right: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            textAlign: 'right',
            color: '#00C185',
            mb: '8px',
            fontWeight: 'bold',
          }}
        >
          {data?.category}
        </Typography>
        <Typography
          sx={{
            fontWeight: `${fontWeight}`,
            fontSize: `${fontSize}px`,
            textAlign: 'right',
            color: '#fff',
            mb: '15px',
            maxWidth: '600px',
          }}
        >
          {data?.mainTitle}
        </Typography>
        <Typography sx={{ color: 'white', fontSize: '14px', direction: 'rtl' }}>
          {data?.date[0]} &nbsp;|&nbsp; میانگین زمان مطالعه{' '}
          {data?.reading_length} دقیقه
        </Typography>
      </Box>
    </Box>
  );
};

export default ShadowCard;
