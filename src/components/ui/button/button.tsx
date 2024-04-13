import styles from './button.module.scss'


interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'submit'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>{children}</button>
  )
}

export default Button;