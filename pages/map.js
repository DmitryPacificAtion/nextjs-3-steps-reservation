import 'date-fns';
import Link from 'next/link';
import { Button } from '@material-ui/core';

export default function Map() {
  return (
    <Link href="/">
      <Button variant="contained" color="primary">
        Prev
      </Button>
    </Link>
  );
}
