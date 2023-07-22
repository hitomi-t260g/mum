

type InnerProps = {
  className?: string
  children: React.ReactNode
  id?: string
}

const Inner = ({ className = ``, children,id =`` }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left`, variant: `texts.bigger`  }} className={className} id={id}>
    {children}
  </div>
)

export default Inner
