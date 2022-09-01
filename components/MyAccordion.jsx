import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Divider } from '@mui/material';

const MyAccordion = () => {
  const questions = [
    {
      question: '۱.دوباره در چه مناطقی فعالیت داره ؟ ',
      answer:
        'در تمامی مناطق پنج‌گانه شهر رشت، و امیدواره به‌زودی به کمک شهر های دیگه هم بیاد. ',
    },
    {
      question: '۲. دوباره چه پسماندهایی رو تحویل می‌گیره ؟ ',
      answer:
        'انواع پسماند خشک ارزشمند مثل نان خشک، کارتن، کاغذ، مقوا، پلاستیک، آهن، فلز، شیشه و غیره. شما میتونید پسماند خودتون رو تفکیک شده یا مخلوط تحویل ما بدین و ادامه مسیر دوباره مصرف کردن رو به ما بسپرین.',
    },
    {
      question: '۳.حداقل پسماندی که دوباره تحویل می‌گیره چقدره ؟ ',
      answer:
        'در حال حاضر پنج کیلوگرم؛ اما اگر با معرفی سرویس دوباره به اطرافیان‌تون به فراگیری سریع‌تر دوباره کمک کنید ما میتونیم با تقویت ناوگان‌مون این عدد رو کاهش بدیم.',
    },
    {
      question: '۴. چطور می‌تونم سفارشم رو لغو کنم؟',
      answer:
        'اگر از طریق اپلیکیشن اندروید دوباره یا وب اپلیکیشن دوباره ثبت سفارش کردین، با مراجعه به قسمت سفارشات از منو و سپس قسمت سفارشات جاری از صفحه سفارشات میتونین وارد جزییات سفارش مد نظرتون بشین و اون رو لغو کنین یا اگه با ۳۶۳۳ تماس گرفتین با تماس مجدد می‌تونین سفارشتون رو لغو کنین. ',
    },
    {
      question: '۵. کجا می‌تونم امتیازات خودم رو ببینم؟ ',
      answer:
        'هربار که سفارش‌تون رو به دوباره تحویل می‌دین، وزن و نوع پسماند تحویلی شما پردازش و کیف پول‌تون شارژ میشه. شما میتونین از قسمت منوی بالای سامانه دوباره، وضعیت کیف پول‌تون رو چک کنین.',
    },
  ];
  return (
    <Box
      sx={{
        width: { xs: '90%', md: '80%', lg: '70%' },
        mx: 'auto',
        backgroundColor: '#F4F6F9',
        p: 3,
        pb: 5,
        mb: 5,
      }}
      id="ask-us"
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          m: 3,
          mb: 6,
          fontWeight: 'bold',
          color: 'black',
        }}
      >
        از دوباره بپرس
      </Typography>
      <Divider />
      {questions.map((q) => (
        <Accordion
          key={q.question}
          sx={{ backgroundColor: 'transparent' }}
          elevation={0}
        >
          <AccordionSummary
            sx={{ direction: 'rtl', py: 1 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                width: '100%',
                direction: 'rtl',
                mr: { xs: 1, md: 3 },
                color: 'black',
              }}
            >
              {q.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'black', direction: 'rtl', mr: 3 }}>
              {q.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Divider />
    </Box>
  );
};

export default MyAccordion;
