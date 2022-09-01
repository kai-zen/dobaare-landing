import { Box } from '@mui/material';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Section1 = () => {
  return (
    <Box
      sx={{
        zIndex: 1,
        position: 'relative',
        pt: 5,
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        width: 'calc(100% + 20px)',
      }}
    >
      <LeftPart />
      <RightPart />
    </Box>
  );
};

export default Section1;
