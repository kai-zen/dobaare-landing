/* eslint-disable @next/next/no-img-element */
import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { ViewIcon } from '../../utils/icons';
import { useRouter } from 'next/router';
import { blogs } from '../../utils/blog-data';

const PopularPosts = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: 'relative',
        mt: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F6F4F9',
        borderRadius: '10px',
        pb: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '16px', md: '18px' },
          fontWeight: '500',
          textAlign: 'center',
          color: '#014351',
          position: 'relative',
          bottom: '20px',
          backgroundColor: '#00C185',
          display: 'inline-block',
          width: '70%',
          py: '10px',
          borderRadius: '10px',
          border: '2px solid white',
        }}
      >
        پر بازدیدترین مقالات ماه
      </Typography>
      {blogs.map((b, i) => (
        <>
          <Box
            key={i}
            sx={{
              p: 1,
              display: 'flex',
              borderRadius: '10px',
              width: '100%',
              direction: 'rtl',
              cursor: 'pointer',
              transition: '.5s',
              py: 2,
              '&:hover': {
                boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.15)',
              },
            }}
            onClick={() => router.push(`/blog/${b?.id || i}`)}
          >
            <img
              src={b?.image[0]}
              alt="blog post image"
              style={{
                width: '95px',
                height: '95px',
                borderRadius: '7px',
                objectFit: 'cover',
                margin: '0 15px',
              }}
            />
            <Box sx={{ direction: 'rtl', width: 'calc(100% - 100px)' }}>
              <Typography
                variant="contained"
                sx={{
                  fontWeight: '500',
                  fontFamily: 'IRANSansFa',
                  textAlign: 'right',
                }}
              >
                {b?.mainTitle}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#00C185',
                    fontSize: '12px',
                    p: '3px 6px',
                    fontWeight: 'bold',
                    boxShadow: 'none',
                    cursor: 'auto',
                    '&:hover': {
                      backgroundColor: '#00C185',
                      boxShadow: 'none',
                    },
                    color: 'white',
                  }}
                >
                  {b?.category}
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 1,
                  }}
                >
                  <Image src={ViewIcon} alt="view icon" height="16px" />
                  &nbsp;&nbsp;
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'IRANSansfa',
                      fontSize: '12px',
                      direction: 'rtl',
                    }}
                  >
                    بازدید {b?.views}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          {i !== 3 && <Divider sx={{ width: '100%' }} />}
        </>
      ))}
    </Box>
  );
};

export default PopularPosts;
