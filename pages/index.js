import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import { Button, Box } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    paddingTop: '50px',
    justifyContent: 'center',
    alignContent: 'center',
  },
  checkin: {
    marginRight: '25px',
    marginBottom: '20px',
  },
  checkout: {
    marginLeft: '25px',
    marginBottom: '20px',
  },
  next: {
    width: '120px',
  },
});

function Home() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const styles = useStyles()
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box className={styles.root}>
        <Grid container justify="center">
          <KeyboardDateTimePicker
            variant="inline"
            ampm={false}
            className={styles.checkin}
            margin="normal"
            id="checkin-date-time"
            label="Checkin"
            value={selectedDate}
            onChange={handleDateChange}
            onError={console.log}
            disablePast
            format="MM/dd/yyyy HH:mm"
          />
          <KeyboardDateTimePicker
            variant="inline"
            ampm={false}
            className={styles.checkout}
            margin="normal"
            id="checkout-date-time"
            label="Checkout"
            value={selectedDate}
            onChange={handleDateChange}
            onError={console.log}
            disablePast
            format="MM/dd/yyyy HH:mm"
          />
        </Grid>
        <Link href="/pages/map">
          <Button variant="contained" color="primary" type="button" className={styles.next}>
            Next
          </Button>
        </Link>
      </Box>
    </MuiPickersUtilsProvider>
  );
}

export default Home;
