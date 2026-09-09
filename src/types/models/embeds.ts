export namespace Embeds {
  export interface EmbedOptions {
    /** The embed opacity */
    opacity?: number;
    /** Do not print this embed until this zoom level (% of original) */
    fromScale?: number;
    /** The embed will have a minimal memory footprint, without its own camera */
    asImage?: boolean;
    /** Fit the embed's original size into the specified area. Defaults to 'stretch' */
    fit?: "contain" | "cover" | "stretch";
    /** Parallax factor for panning within a 2D image: 1 (default) moves with the camera 1:1, <1 moves slower (background), >1 moves faster (foreground) */
    parallax?: number;
    /** Exclude this embed from pointer hit-testing (drag/zoom targeting), so it acts as a decorative, non-interactive layer */
    isPassiveSecondary?: boolean;
  }
}
