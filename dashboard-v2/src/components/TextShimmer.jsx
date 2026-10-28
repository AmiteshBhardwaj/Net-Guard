import './TextShimmer.css'

export default function TextShimmer({
  children,
  as: Tag = 'span',
  duration = 2.5,
  baseColor = '#5eead4',
  shineColor = '#ffffff',
  className = '',
}) {
  return (
    <Tag
      className={`text-shimmer ${className}`}
      style={{
        '--ts-base': baseColor,
        '--ts-shine': shineColor,
        '--ts-duration': `${duration}s`,
      }}
    >
      {children}
    </Tag>
  )
}
