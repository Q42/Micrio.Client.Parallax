# Micrio Client

If you are looking for HOWTOs, tutorials, or general Micrio help, please check out our
searchable Knowledge Base at:

[https://doc.micr.io/](https://doc.micr.io/)

## Installation

```bash
npm i @micrio-parallax/client
```

## Usage

Since the Micrio Client is a passive binding for all HTML `<micr-io>` elements, all you need to do to include Micrio in your project or page is:

```js
import "@micrio-parallax/client";
```

## Core build

If you only need tiled-image viewing (including IIIF) and none of the extended
viewer types, a smaller `micrio.core.min.js` is available alongside the full
build. It excludes the book, grid, audio, embed, media, markers, and tour
modules, as well as the toolbar, controls, gallery (and its controller),
omni (3D object), logo, article, details, menu, dial, popover, and button UI,
along with the translation bundles and icon graphics. The CSS for auto-hiding
the UI chrome is likewise excluded (the minimap's own visibility logic is kept),
as is WebGL postprocessing and MDP/.bin archive loading.

```js
import "@micrio-parallax/client/micrio.core.min.js";
```

Imagery whose data relies on an excluded feature will simply not render that
feature rather than erroring out.

## Parallax build (this fork's default)

This fork (Micrio.Client.Parallax) adds a third variant, `micrio.parallax.min.js`,
for consumers that need markers and image embeds (e.g. the parallax layers this
fork exists for) but none of the other extended viewer types. It is the same as
the core build above except markers, marker clustering, and waypoints are kept
real rather than stubbed out. This is the default entrypoint for this fork —
`import 'micrio-parallax'` resolves here. The full and core builds remain
available as named subpaths:

```js
import "micrio-parallax"; // this build (markers + embeds, no tour/gallery/book/grid/audio/UI chrome)
import "micrio-parallax/full"; // the complete upstream build
import "micrio-parallax/core"; // upstream's tiled-image-only build (no markers)
```

## Typed

To get typed access to a Micrio HTML element, you can use the `HTMLMicrioElement` as exported by this package:

```ts
import type { HTMLMicrioElement } from "@micrio-parallax/client";

// This will be a fully typed element
const micrioElement = document.querySelector("micr-io") as HTMLMicrioElement;
```

## Upgrading to the latest version (v7)

If you are using Micrio inside your project, and have custom CSS and/or using the JS API, check out this document which has all changes from earlier versions:

https://doc.micr.io/client/v7/changes.html
