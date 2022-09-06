// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../component/Page';
// import Iconify from '../components/Iconify';
// sections
import AppWidgetSummary from '../sections/AppWidgetSummary';
import TableComponent from '../component/TableComponent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const [date, setDate] = useState<Date>();
  const columns =[
    {
      Header: 'Danh sách chi tiêu',
      accessor: 'expendType',
    },
    {
      Header: 'Ngày chi tiêu',
      accessor: 'expendDate',
    },
    {
      Header: 'Số tiền sử dụng',
      accessor: 'usingMoney',
    },
    {
      Header: 'Thao tác',
      accessor:'action',
      Cell: () => {
        return(
          <>
        <Stack direction="row" style={{display: 'flex', justifyContent:'center'}} spacing={1}>
        <IconButton>
          <BorderColorOutlinedIcon/>
        </IconButton>
        <IconButton>
          <DeleteOutlinedIcon/>
        </IconButton>
        </Stack>
        </>
        )
        
      }
    }

  ]
  const dataFake = [
    {
      expendType: 'Phương tiện đi lại',
      expendDate: '30/08/2022',
      usingMoney:50000,
    },
    {
      expendType: 'Phương tiện đi lại',
      expendDate: '30/08/2022',
      usingMoney:50000,
    },
    {
      expendType: 'Phương tiện đi lại',
      expendDate: '30/08/2022',
      usingMoney:50000,
    },{
      expendType: 'Phương tiện đi lại',
      expendDate: '30/08/2022',
      usingMoney:50000,
    }
  ]
  useEffect(() => {
    const dateComming = new Date('Jul 1 2022');
    setDate(dateComming);

  }, [])
  return (
    <Page title="Dashboard" meta={undefined}>
      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Ngày vào công ty" total={date?.toLocaleDateString()} icon={'ant-design:android-filled'} color={'primary'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Đếm ngược ngày lương" total={1352831} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Tổng chi tiêu" total={1723315} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title= "Còn lại sau chi" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
       
        </Grid>
        <br/>
        <div>
       <TableComponent columns={columns} data = {dataFake}/>
        </div>
      </Container>
    </Page>
  );
}