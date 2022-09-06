// @mui
import PropTypes from 'prop-types';
import { alpha, Palette, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// components
// import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

type AppWidgetSummary = {
  color: string,
  icon: string,
  title: string,
  total: any,
//   sx: object,
};

export default function AppWidgetSummary(props: AppWidgetSummary) {
  return (
    <Card
      sx={{
        py: 2,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[props.color].dark,
        bgcolor: (theme) => theme.palette[props.color].lighter,
        // ...props.sx,
      }}
    //   {...other}
    >
      <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[props.color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(theme.palette[props.color].dark, 0)} 0%, ${alpha(
              theme.palette[props.color].dark,
              0.24
            )} 100%)`,
        }}
      >
        {/* <Iconify icon={icon} width={24} height={24} /> */}
      </IconWrapperStyle>

      <Typography variant="h3">{props.total}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {props.title}
      </Typography>
    </Card>
  );
}