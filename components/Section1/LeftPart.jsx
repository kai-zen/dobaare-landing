import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LeftPart = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        gap: 1,
        width: { xs: '100%', md: '50%' },
      }}
    >
      <Image
        width="290.7px"
        height="549.1px"
        alt="mobile mockup"
        src="/images/mobile.png"
      />
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <Button
          component="a"
          href="/app-dobaare.apk"
          variant="contained"
          sx={{
            color: '#FFF',
            boxShadow: 'none',
            backgroundColor: 'rgba(0,0,0,.35)',
          }}
        >
          دانلود مستقیم
        </Button>
        <Button
          variant="contained"
          sx={{
            color: '#FFF',
            boxShadow: 'none',
            backgroundColor: 'rgba(0,0,0,.35)',
            px: 2,
          }}
        >
          از کافه بازار
        </Button>
        <Button
          variant="contained"
          sx={{
            color: '#FFF',
            boxShadow: 'none',
            backgroundColor: 'rgba(0,0,0,.35)',
          }}
          onClick={() => {
            router.push(
              'https://play.google.com/store/apps/details?id=com.dobare'
            );
          }}
        >
          از گوگل پلی
        </Button>
      </Box>
    </Box>
  );
};

export default LeftPart;
