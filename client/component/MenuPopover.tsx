import PropTypes from 'prop-types';
// material
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
//   [theme.breakpoints.up('sm')]: {
//     top: -7,
//     zIndex: 1,
//     width: 12,
//     right: 20,
//     height: 12,
//     content: "''",
//     position: 'absolute',
//     borderRadius: '0 0 4px 0',
//     transform: 'rotate(-135deg)',
//     background: theme.palette.background.paper,
//     borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
//     borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
//   },
}));

// ----------------------------------------------------------------------

type MenuPopover = {
  children: React.ReactNode,
  sx: object,
  open: boolean;
  anchorEl:boolean
};

export default function MenuPopover(props: MenuPopover) {
    const {children, ...rest} = props;

  return (
    <Popover
        //   anchorOrigin={{ vertical: "top", horizontal: 'right' }}
          transformOrigin={{ vertical: 5000 , horizontal: 'right' }}
        //   PaperProps={{
        //       sx: {
        //           p: 1,
        //           width: 200,
        //           overflow: 'inherit',
        //           ...props?.sx,
        //       },
        //   }}

        open={props?.open} 
          //   {...other}
    >
      <ArrowStyle className="arrow" />

      {props?.children}
    </Popover>
  );
}