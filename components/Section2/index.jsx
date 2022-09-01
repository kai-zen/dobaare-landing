import { Box } from '@mui/material';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Section2 = () => {
  return (
    <Box
      id="priority"
      sx={{
        width: 'calc(100% + 20px)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        mt: { xs: 1, md: 5 },
      }}
    >
      <LeftPart />
      <RightPart />
    </Box>
  );
};

export default Section2;
