import { Box, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { LocationOnIcon, PhoneIcon } from '../utils/icons';
import Email from '@mui/icons-material/Email';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MyFooter = () => {
  const router = useRouter();
  const content = [
    {
      title: 'خدمات ',
      options: [
        {
          title: 'اپ',
          click: () => {
            router.push('https://app.dobaare.com/');
          },
        },
        { title: '3633', click: null },
        { title: 'سراوان کارت', click: null },
        { title: 'خودروی ملودی', click: null },
        { title: 'کیوسک', click: null },
      ],
    },
    {
      title: 'طرح‌ها ',
      options: [
        {
          title: 'خانه سبز',
          click: () => {
            router.push('/#green-home');
          },
        },
        {
          title: 'دکان سبز',
          click: () => {
            router.push('/#green-shop');
          },
        },
        {
          title: 'اداره سبز',
          click: () => {
            router.push('/#green-office');
          },
        },
        {
          title: 'کارخانه سبز',
          click: () => {
            router.push('/#green-factory');
          },
        },
      ],
    },
    {
      title: 'دوباره',
      options: [
        {
          title: 'دغدغه دوباره',
          click: () => {
            router.push('/#priority');
          },
        },
        { title: 'فرصت‌های شغلی', click: null },
        {
          title: 'مجله دوباره',
          click: () => {
            router.push('/blog');
          },
        },
        { title: 'شرایط استفاده', click: null },
        { title: 'حریم خصوصی', click: null },
      ],
    },
  ];
  return (
    <Box sx={{ pt: 5, width: 'calc(100% + 20px)' }}>
      <Grid
        container
        sx={{ px: '5%', display: 'flex', flexDirection: 'row-reverse' }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{
            display: 'flex',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', py: '35px' }}>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                gap: 4,
                flexDirection: 'row-reverse',
              }}
            >
              <Image
                src="/logo512.png"
                alt="dobaare icon"
                width="70px"
                height="70px"
                style={{
                  borderRadius: '15px',
                }}
              />
              <Typography sx={{ color: '#014351' }}>013 - 3633</Typography>
              <Image src={PhoneIcon} alt="location icon" />
            </Box>
            <Typography
              sx={{
                direction: 'rtl',
                pl: '10%',
                mt: 2,
                fontSize: '14px',
                color: '#014351',
              }}
            >
              ما در استارت‌آپ دوباره، تلاش می‌کنیم تا با تفکیک زباله خشک ارزشمند
              از مبدأ سهم کوچکی در کاهش حجم کوه زباله‌های سراوان داشته باشیم.
              شما می‏توانید از طریق اپلیکیشن یا سایت دوباره، طبق برنامه پسماند
              خشک خودتان رو در محل دلخواه به دوباره تحویل بدید و حامی ما در این
              راه باشید.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              direction: 'rtl',
              py: '35px',
            }}
          >
            {content.map((c) => (
              <Box
                key={c}
                sx={{
                  width: '33.333%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, color: '#014351' }}>
                  {c.title}
                </Typography>
                {c.options.map((i) => (
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#014351',
                      cursor: `${i.click !== null ? 'pointer' : 'auto'}`,
                      transition: '0.5s',
                      '&:hover': {
                        letterSpacing: `${i.click !== null && '3px'}`,
                        color: `${i.click !== null && '#00C185'}`,
                      },
                    }}
                    key={i}
                    onClick={i.click}
                  >
                    {i.title}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 3,
              flexDirection: 'column',
              direction: 'rtl',
            }}
          >
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: '35px',
                color: '#014351',
              }}
            >
              <Image src={LocationOnIcon} alt="location icon" />
              &nbsp;&nbsp;شهر رشت - میدان صابرین
            </Typography>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: '#014351',
                fontWeight: '500',
              }}
            >
              <Email color="primary" />
              &nbsp;&nbsp; info@dobaare.com
            </Typography>
            <Typography sx={{ color: '#014351' }}>
              دانلود
              <a
                href="/app-dobaare.apk"
                style={{ color: '#00C185', fontWeight: 'bold' }}
              >
                &nbsp;رایگان&nbsp;
              </a>
              نسخه اندروید اپلیکیشن دوباره&nbsp;
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
              <Link href="#app-bar">
                <a
                  style={{
                    color: '#00C185',
                    textDecoration: 'underline',
                    fontWeight: '500',
                    cursor: 'pointer',
                    fontFamily: 'IRANSansFA',
                  }}
                >
                  برو به بالای صفحه
                </a>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Divider sx={{ width: '100%' }} />
        <Grid item xs={12}>
          <Typography
            sx={{
              direction: 'rtl',
              textAlign: 'center',
              py: 3,
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#014351',
            }}
          >
            &copy;&nbsp;&nbsp;استفاده از مطالب سایت و صفحات مربوط به دوباره با
            ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نرم افزاری
            &nbsp;
            <span
              style={{
                color: '#f6cf32',
              }}
            >
              کندو
            </span>
            &nbsp; میباشد.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyFooter;
