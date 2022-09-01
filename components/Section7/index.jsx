import { Box, Button, Grid } from '@mui/material';
import { blogs } from '../../utils/blog-data';
import { useRouter } from 'next/router';
import MyCard from './MyCard';

const Section7 = ({ curveTop = false }) => {
  const router = useRouter();
  return (
    <Box sx={{ width: 'calc(100% + 20px)' }}>
      <Grid
        container
        spacing={1.5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          px: { xs: 1, sm: 4, md: 6 },
        }}
      >
        {blogs.map((b, i) => (
          <Grid
            key={i}
            item
            xs={6}
            md={i === 3 ? 12 : 4}
            lg={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <MyCard curveTop={curveTop} data={b} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          m: 2,
          mt: 2.5,
        }}
      >
        <Button
          variant="contained"
          sx={{
            height: '42px',
            borderRadius: '21px',
            px: '40px',
            color: 'white',
            my: 2,
          }}
          onClick={() => router.push('/blog')}
        >
          مقالات بیشتر
        </Button>
      </Box>
    </Box>
  );
};

export default Section7;
