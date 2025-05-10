import './styles.scss'

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: Props) => {
  return <button className="btn" onClick={onClick}>{children}</button>
}