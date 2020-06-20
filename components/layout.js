import styles from './layout.module.css'
import { Form } from 'formik';

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout() {
  return (
    <div className={styles.container}>
      <Form>
        <label for='checkin'>Checkin</label>
        <input type='date' name='checkin' />
        <label for='checkout'>Checkout</label>
        <input type='date' name='checkout' />
      </Form>
    </div>
  )
}