import { Box } from '@mui/material';

const RightPart = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          md: '50%',
        },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '450px',
          height: '360px',
          my: '30px',
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/images/saravan1.jpg")',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '80%',
            height: '320px',
            position: 'absolute',
            top: '0',
            left: '10%',
            borderRadius: '8px',
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: 'url("/images/saravan3.jpg")',
            objectFit: 'cover',
            backgroundSize: '100%',
            width: '33%',
            height: '100px',
            position: 'absolute',
            bottom: '0',
            left: '0',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px #FFF',
          }}
        ></Box>
        <Box
          sx={{
            backgroundImage: 'url("/images/saravan2.jpg")',
            objectFit: 'cover',
            backgroundSize: '100%',
            width: '45%',
            height: '140px',
            position: 'absolute',
            bottom: '0',
            right: '0',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px #FFF',
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default RightPart;
