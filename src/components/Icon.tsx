/**
 * Material Symbols Outlined glyphs used by the KAF-AfCFTA Gateway design.
 * The bundled font is subset to exactly this list — adding a name here also
 * requires re-subsetting src/app/fonts/material-symbols-outlined.woff2.
 */
export const ICONS = [
  "arrow_forward",
  "business_center",
  "calendar_today",
  "check",
  "check_circle",
  "chevron_left",
  "chevron_right",
  "grid_view",
  "handshake",
  "hub",
  "keyboard_arrow_down",
  "language",
  "location_on",
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
  "view_list",
] as const;

export type IconName = (typeof ICONS)[number];

type IconProps = {
  name: IconName;
  /**
   * The icon node's width/height in the design, in px. Emitted as rem so the
   * glyph scales with the root size like every other length. Defaults to 24.
   */
  size?: number;
  /** Draws the solid form of the glyph instead of the outline. */
  filled?: boolean;
  className?: string;
};

export default function Icon({
  name,
  size = 24,
  filled = false,
  className,
}: IconProps) {
  const rem = `${size / 16}rem`;

  return (
    <span
      aria-hidden="true"
      className={
        className
          ? `material-symbols-outlined ${className}`
          : "material-symbols-outlined"
      }
      style={{
        fontSize: rem,
        width: rem,
        height: rem,
        flexShrink: 0,
        ...(filled ? { fontVariationSettings: '"FILL" 1' } : null),
      }}
    >
      {name}
    </span>
  );
}
