/**
 * Material Symbols Outlined glyphs used by the KAF-AfCFTA Gateway design.
 * The bundled font is subset to exactly this list — adding a name here also
 * requires re-subsetting src/app/fonts/material-symbols-outlined.woff2.
 */
export const ICONS = [
  "arrow_forward",
  "calendar_today",
  "check_circle",
  "chevron_right",
  "handshake",
  "hub",
  "language",
  "mail",
  "open_in_new",
  "payments",
  "person_search",
  "public",
  "rocket_launch",
  "search",
  "shield",
  "verified",
  "verified_user",
  "video_call",
] as const;

export type IconName = (typeof ICONS)[number];

type IconProps = {
  name: IconName;
  /**
   * The icon node's width/height in the design, in px. Emitted as rem so the
   * glyph scales with the root size like every other length. Defaults to 24.
   */
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const rem = `${size / 16}rem`;

  return (
    <span
      aria-hidden="true"
      className={
        className
          ? `material-symbols-outlined ${className}`
          : "material-symbols-outlined"
      }
      style={{ fontSize: rem, width: rem, height: rem, flexShrink: 0 }}
    >
      {name}
    </span>
  );
}
