import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const MyCard = ({ content }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        flexDirection: 'column',
        alignItems: 'center',
        mb: 4,
        py: 3,
        borderRadius: '15px',
        border: '2px solid transparent',
        transition: '.5s',
        cursor: `${content?.click ? 'pointer' : 'auto'}`,
        '&:hover': {
          boxShadow: `${content?.click && '0px 0px 40px rgba(0, 0, 0, 0.15)'}`,
        },
      }}
      onClick={content?.click ? content?.click : null}
    >
      <Image src={content?.image} alt="" width="160px" height="160px" />
      <Typography
        sx={{
          mt: 2,
          fontFamily: 'IRANSansfa',
          lineHeight: '22px',
          width: 'clamp(160px, 20%, 200px)',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        {content?.text}
      </Typography>
    </Box>
  );
};

export default MyCard;
