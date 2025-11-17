import styles from './Display.module.css';

export default function Display({ children }) {
  return (
    <div classsName={styles.display}>
        {children}
    </div>
  )
}
