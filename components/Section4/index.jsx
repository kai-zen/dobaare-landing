import { Box } from '@mui/material';
import Description from './Description';

const Section4 = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        py: { xs: '30px', md: '70px' },
        flexDirection: 'column',
        alignItems: 'center',
        width: 'calc(100% + 20px)',
      }}
      id="plans"
    >
      {/* first row */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: '450px',
            pt: '25px',
          }}
        >
          <Box
            sx={{
              width: '70%',
              height: '400px',
              backgroundSize: 'cover',
              backgroundImage: 'url("/images/ghome.jpg")',
              mx: 'auto',
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Description iteration={0} />
        </Box>
      </Box>
      {/* second row */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          mt: 5,
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: '450px',
            pt: '25px',
          }}
        >
          <Box
            sx={{
              width: '70%',
              height: '400px',
              backgroundSize: 'cover',
              backgroundImage: 'url("/images/gshop.jpg")',
              backgroundColor: '#00C185',
              mx: 'auto',
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
          }}
        >
          <Description iteration={1} />
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
