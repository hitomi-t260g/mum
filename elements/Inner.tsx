type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div className={className}>
    {children}
  </div>
)

export default Inner
