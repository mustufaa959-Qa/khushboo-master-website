import type { CSSProperties } from "react";

/**
 * Original ornate "K" monogram for Khushboo Master, drawn as inline SVG.
 * Not copied from the reference site's logo; only the idea of an ornate
 * script initial in gold on a dark roundel follows the reference layout.
 */
export default function Logo({ size = 56 }: { size?: number }) {
  return (
    <span
      className="logo-mark"
      style={{ "--logo-size": `${size}px` } as CSSProperties}
      aria-hidden="true"
    >
      <svg viewBox="0 0 80 80" width={size} height={size} role="presentation">
        <circle cx="40" cy="40" r="38" fill="#2a1218" />
        <circle cx="40" cy="40" r="34.5" fill="none" stroke="#c9a227" strokeWidth="1.4" />
        <circle cx="40" cy="40" r="30" fill="none" stroke="#c9a227" strokeWidth="0.7" opacity="0.6" />
        <text
          x="40"
          y="55"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="44"
          fill="#e8c766"
        >
          K
        </text>
        <path d="M18 62 Q40 70 62 62" fill="none" stroke="#c9a227" strokeWidth="1" opacity="0.7" />
      </svg>
    </span>
  );
}
