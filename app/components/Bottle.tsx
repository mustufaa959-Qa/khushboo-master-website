/**
 * Original perfume-bottle illustration (inline SVG). The same illustration
 * is used for every product, recoloured by hue; it is not a photo of any
 * real product and makes no claim about a product's appearance.
 */
export default function Bottle({
  hue,
  title,
  variant = 0,
}: {
  hue: number;
  title: string;
  variant?: number;
}) {
  const body = `hsl(${hue} 45% 72%)`;
  const bodyDark = `hsl(${hue} 40% 52%)`;
  const glass = `hsl(${hue} 35% 86%)`;
  const bg = variant === 1 ? "#efe6d2" : variant === 2 ? "#e8ddd0" : "#f3ecdd";
  return (
    <svg
      viewBox="0 0 200 240"
      role="img"
      aria-label={`Illustration of a perfume bottle for ${title}`}
      className="bottle-svg"
      style={{ background: bg }}
    >
      <ellipse cx="100" cy="216" rx="62" ry="10" fill="#00000018" />
      {/* cap */}
      <rect x="78" y="18" width="44" height="34" rx="6" fill="#c9a227" />
      <rect x="78" y="18" width="44" height="34" rx="6" fill="none" stroke="#8a6d1c" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={86 + i * 7} y1="22" x2={86 + i * 7} y2="48" stroke="#8a6d1c" strokeWidth="1" opacity="0.55" />
      ))}
      {/* neck */}
      <rect x="88" y="52" width="24" height="16" fill="#6b2233" />
      {/* shoulders + body */}
      <path
        d="M60 96 Q60 68 88 68 L112 68 Q140 68 140 96 L140 196 Q140 210 126 210 L74 210 Q60 210 60 196 Z"
        fill={glass}
        stroke={bodyDark}
        strokeWidth="2"
      />
      <path
        d="M72 96 Q72 80 92 80 L92 198 L74 198 Q72 196 72 182 Z"
        fill={body}
        opacity="0.55"
      />
      {/* label */}
      <rect x="76" y="118" width="48" height="58" rx="3" fill="#fdfaf3" stroke="#c9a227" strokeWidth="1.4" />
      <text x="100" y="142" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="24" fill="#6b2233">
        K
      </text>
      <text x="100" y="158" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.5" letterSpacing="1.5" fill="#5b1f2e">
        KHUSHBOO
      </text>
      <text x="100" y="168" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" letterSpacing="2" fill="#8a6d1c">
        MASTER
      </text>
    </svg>
  );
}
