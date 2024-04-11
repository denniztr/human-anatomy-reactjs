import styles from './layout.module.scss'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className={styles.layout}>
      {children}
    </section>
  )
}