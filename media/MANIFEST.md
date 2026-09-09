# Media manifest — RoofingMobileAlabama.com rebuild

Generated via Higgsfield (seedance_2_5 video, nano_banana_2 images) 2026-09-09. Source facts:
`/Users/mike/kawa-ops/sites/roofingmobilealabama-draft/SOURCE-CONTENT.md`. No price-calculator
imagery, no reviewer faces, no logos/text baked into any asset per client rules.

## Status legend
✅ live and wired · ⚠️ reused stand-in (works, not purpose-shot) · ❌ TODO, not generated this pass

## Hero (Hero.astro)
| File | What it is | Wired to | Status |
|---|---|---|---|
| `hero-drone.mp4` | Golden-hour drone glide over a flat commercial roof near Mobile, AL — half recoated bright white, half weathered gray, sharp dividing line, coastal haze horizon. 16:9, 8s, seedance_2_5. **Regenerated once** — the two clips referenced as "already submitted" were not found in Higgsfield job history (checked last 20 completed videos, none matched); a first regen attempt was flagged NSFW by the filter on the word "silicone" in the prompt, reworded to "elastomeric roof coating" and it passed. | `Hero.astro` line 18 | ✅ |
| `hero-poster.jpg` | Poster/first-paint frame pulled from `hero-drone.mp4` at 2s via ffmpeg. | `Hero.astro` line 15 | ✅ |

Not produced this pass: the second "roller close-up" hero clip and `silicone-roller.mp4` (the
inset loop `SiliconeFeature.astro` line 24 wants) — original task scope was one hero video;
`SiliconeFeature.astro` degrades gracefully without it (video tag with no source just shows
nothing in that slot). ❌ TODO if Michael wants the roller clip made.

## Before/after silicone feature (SiliconeFeature.astro)
| File | What it is | Wired to | Status |
|---|---|---|---|
| `before-roof.jpg` | Same flat commercial roof, weathered gray membrane, straight-down angle. | `SiliconeFeature.astro` line 42 | ✅ |
| `after-roof.jpg` | Same roof/framing, fresh white coating. | `SiliconeFeature.astro` line 34 | ✅ |

Source pair also saved uncompressed at `roof-before-weathered.png` / `roof-after-silicone.png`.

## Services grid (site.ts → ServicesGrid.astro)
| File | What it is | Status |
|---|---|---|
| `services/residential.jpg` | = `roof-types/asphalt.jpg` (asphalt-shingle coastal AL home) | ✅ |
| `services/commercial.jpg` | Gulf Coast flat commercial rooftop, hazy Mobile skyline background | ✅ |
| `services/silicone-coating.jpg` | = `after-roof.jpg` (fresh white silicone finish) | ✅ |
| `services/repair.jpg` | = `before-roof.jpg` (weathered/damaged membrane — reused stand-in for repair tile, added at publish pass 2026-09-09) | ⚠️ reused stand-in |
| `services/replacement.jpg` | = `roof-types/metal.jpg` (standing-seam metal, sunset — reused stand-in for replacement tile, added 2026-09-09) | ⚠️ reused stand-in |
| `services/installation.jpg` | = `roof-types/tpo-pvc-epdm.jpg` (flat TPO w/ HVAC — reused stand-in for installation tile, added 2026-09-09) | ⚠️ reused stand-in |

## Roof-type explorer (site.ts → RoofTypeExplorer.astro)
| File | What it is | Status |
|---|---|---|
| `roof-types/asphalt.jpg` | Residential asphalt-shingle roof, coastal AL home, blue sky | ✅ |
| `roof-types/metal.jpg` | Standing-seam metal roof close-up at sunset | ✅ |
| `roof-types/tpo-pvc-epdm.jpg` | Flat TPO roof with HVAC units, overhead angle | ✅ |
| `roof-types/silicone.jpg` | = `after-roof.jpg` (fresh white silicone coating) | ✅ |
| `roof-types/modbit-flat.jpg` | = `services/commercial.jpg` (Gulf Coast flat commercial rooftop — reused stand-in, no direct mod-bit concept shot exists yet, added 2026-09-09) | ⚠️ reused stand-in |

## Source originals (uncompressed PNGs, kept for re-crops/re-exports)
`roof-before-weathered.png`, `roof-after-silicone.png`, `residential-shingle-roof.png`,
`standing-seam-metal-sunset.png`, `tpo-flat-roof-hvac.png`, `gulfcoast-commercial-mobile-skyline.png`

## Social/SEO
| Path | Status |
|---|---|
| `og-image.jpg` | 1200x630 crop of `gulfcoast-commercial-mobile-skyline.png`, added at publish pass 2026-09-09 | ✅ |

## Explicitly NOT needed (client rules)
- No reviewer avatars/photos.
- No price-calculator graphics — no calculator or instant quote anywhere on the site.
- No logo file yet — current build uses a text wordmark.
