import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerBackground}>
      <footer className={styles.footer}>
        <nav>
          <ul>
            <li>Resources</li>
            <li>Find a Store</li>
            <li>Membership</li>
            <li>Site Feedback</li>
          </ul>
          <ul>
            <li>Help</li>
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Returns</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
