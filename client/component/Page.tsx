import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
import Head from 'next/head';

// ----------------------------------------------------------------------

const Page = (props:Page) => {
    return (
        <>
          <Head>
            <title>{`${props.title} | Minimal-UI`}</title>
            {props.meta}
          </Head>
      
          <Box >
            {props.children}
          </Box>
        </>
      )
}

type Page = {
  children: React.ReactNode,
  title: string,
  meta: React.ReactNode,
};

export default Page;