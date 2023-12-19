export function CssIcon ({ w, h, color, ...props }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={w} height={h} viewBox='0 0 24 24' {...props}><path fill={color} d='m5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81l-5.48 1.81l-4.75-1.81l.33-1.64H2.85l-.79 4l7.85 3l9.05-3l1.2-6.03l.24-1.21L21.94 3z' /></svg>
  )
}
