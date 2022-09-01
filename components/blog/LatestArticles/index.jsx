import { Box } from '@mui/material';
import { blogs } from '../../../utils/blog-data';
import MyCard from './MyCard';

const LatestArticles = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          fontFamily: 'IRANSansFa',
          fontWeight: '500',
          textAlign: 'right',
          fontSize: '18px',
          position: 'relative',
          zIndex: '10',
        }}
      >
        آخرین مقالات منتشر شده
      </Box>
      {blogs.map((b, i) => (
        <MyCard data={b} key={i} />
      ))}
    </Box>
  );
};

export default LatestArticles;
