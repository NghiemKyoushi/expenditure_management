import PropTypes from 'prop-types';
import { useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box, Link,Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import Scrollbar from '../../component/Scrollbar';
// ----------------------------------------------------------------------
import NavSection from '../../component/NavSection';
const DRAWER_WIDTH = 280;

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.grey[500_12],
}));

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
  },
  {
    title: 'user',
    path: '/dashboard/user',
  },
  {
    title: 'product',
    path: '/dashboard/products',
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
  },
];
const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// const AccountStyle = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(2, 2.5),
//   borderRadius: Number(theme.shape.borderRadius) * 1.5,
//   backgroundColor: theme.palette.grey[500_12],
// }));

// ----------------------------------------------------------------------
const renderContent = (
  <Scrollbar
    sx={{
      height: 1,
      '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
    }}
  >

      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
      </Box>
     <Box sx={{ mb: 5, mx: 2.5 }}>
          <AccountStyle>
            <Avatar src={'https://minimal-kit-react.vercel.app/static/mock-images/avatars/avatar_default.jpg'} alt="photoURL" />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {'nghiem'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {'admin'}
              </Typography>
            </Box>
          </AccountStyle>
      </Box>

    <NavSection  />

    <Box sx={{ flexGrow: 1 }} />

    <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
      <Stack alignItems="center" spacing={3} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>

       
      </Stack>
    </Box>
  </Scrollbar>
);

type DashboardSidebar = {
  isOpenSidebar: boolean,
  onCloseSidebar: () => void,
};

export default function DashboardSidebar(props: DashboardSidebar ) {


  return (
    <RootStyle>
         <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
    </RootStyle>
  );
}