/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Chip, Divider, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import MyAppBar from '../../components/MyAppBar';
import styles from '../../styles/home.module.css';
import ShadowCard from '../../components/blog/ShadowCard';
import { useEffect, useRef } from 'react';
import PopularPosts from '../../components/blog/PopularPosts';
import SimiliarPostCard from '../../components/blog-post/SimiliarPosts';
import MyFooter from '../../components/MyFooter';
import { blogs } from '../../utils/blog-data';

const BlogPost = ({ data }) => {
  const router = useRouter();

  const progressBar = useRef();
  const container = useRef();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const userDeviceHeight = window.screen.height;
      const totalHeight = document.documentElement.scrollHeight;
      const scrolledHeight = document.documentElement.scrollTop;
      const scrolledPercentage =
        (scrolledHeight / (totalHeight - userDeviceHeight)) * 100;
      if (progressBar && progressBar.current) {
        progressBar.current.style.width = `${scrolledPercentage}%`;
        if (scrolledHeight > userDeviceHeight * 0.6) {
          progressBar.current.style.backgroundColor = '#00C185';
        } else {
          progressBar.current.style.backgroundColor = '#014351';
        }
      }
    });
  });

  return (
    <div ref={container} style={{ position: 'relative' }}>
      <Head>
        <title>{data?.mainTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        ref={progressBar}
        style={{
          height: '6px',
          backgroundColor: '#014351',
          position: 'fixed',
          zIndex: '10',
        }}
      ></div>
      <div className={styles.polygon}></div>
      <MyAppBar />
      <Divider
        sx={{
          width: 'calc(100% + 20px)',
          zIndex: '5',
          position: 'relative',
          mt: 2,
        }}
      />
      <Box
        sx={{
          px: '6%',
          pt: 2,
          position: 'relative',
          zIndex: '5',
          width: 'calc(100% + 20px)',
        }}
      >
        <ShadowCard data={data} height={500} fontSize={28} fontWeight="bold" />
        <Grid container>
          <Grid item xs={12} md={4} sx={{ py: 2 }}>
            <PopularPosts imgs={data?.image} />
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              mt: 5,
              pt: 2,
              px: 2,
            }}
          >
            <Typography
              sx={{ color: '#014351', direction: 'rtl', fontSize: '14px' }}
            >
              {data?.body[0]}
            </Typography>
            <Typography
              sx={{
                color: '#014351',
                direction: 'rtl',
                my: 3,
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              {data?.subTitles[0]}
            </Typography>
            <Typography
              sx={{ color: '#014351', direction: 'rtl', fontSize: '14px' }}
            >
              {data?.body[1]}
            </Typography>
            <Typography
              sx={{
                color: '#014351',
                direction: 'rtl',
                fontSize: '14px',
                my: 3,
              }}
            >
              {data?.body[2]}
            </Typography>
            <img
              src={data?.image[1]}
              alt="post image"
              style={{
                width: '100%',
                height: '450px',
                objectFit: 'cover',
                filter: 'brightness(0.9)',
                borderRadius: '15px',
              }}
            />
            <Typography
              sx={{
                color: '#014351',
                direction: 'rtl',
                my: 3,
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              {data?.subTitles[1]}
            </Typography>
            <Typography
              sx={{ color: '#014351', direction: 'rtl', fontSize: '14px' }}
            >
              {data?.body[3]}
            </Typography>
            <Typography
              sx={{
                color: '#014351',
                direction: 'rtl',
                fontSize: '14px',
                my: 3,
              }}
            >
              {data?.body[4]}
            </Typography>
            <Typography
              sx={{
                color: '#014351',
                direction: 'rtl',
                fontSize: '14px',
                my: 3,
              }}
            >
              {data?.body[5]}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, direction: 'rtl', my: 5 }}>
              <Avatar sx={{ width: 56, height: 56, fontFamily: 'IRANSansFa' }}>
                {data?.writer[0]}
              </Avatar>
              <Box>
                <Typography
                  sx={{
                    color: '#014351',
                    fontSize: '18px',
                    mb: 1,
                    fontWeight: 'bold',
                  }}
                >
                  {data?.writer}
                </Typography>
                <Typography sx={{ color: '#014351', fontSize: '14px' }}>
                  منتشر شده در: {data?.date[1]}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ direction: 'rtl', display: 'flex', gap: 1 }}>
              {data?.tags.map((t, i) => (
                <Chip
                  key={i}
                  label={t}
                  sx={{ borderRadius: '5px', fontFamily: 'IRANSansFa' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          direction: 'rtl',
          color: '#014351',
          my: 5,
          fontWeight: 'bold',
          fontSize: '18px',
          pr: 4,
        }}
      >
        مقالات مشابه منتشر شده در وب سایت
      </Typography>
      <SimiliarPostCard />
      <Divider sx={{ width: 'calc(100% + 20px)' }} />
      <MyFooter />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: '0' } },
      { params: { postId: '1' } },
      { params: { postId: '2' } },
      { params: { postId: '3' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const data = blogs[postId];

  return {
    props: {
      data,
    },
  };
}

export default BlogPost;
