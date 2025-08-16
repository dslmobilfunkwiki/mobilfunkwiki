# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2025-01-16

### Added
- **@astrojs/cloudflare**: v12.6.4 - Added missing Cloudflare adapter dependency that was referenced in astro.config.mjs but not declared in package.json

### Updated Dependencies

#### Major Updates
None in this release - all updates were minor or patch versions.

#### Minor Updates
- **@astrojs/mdx**: 4.3.2 → 4.3.4 - Bug fixes and improvements for MDX integration
- **@astrojs/node**: 9.3.2 → 9.4.2 - Enhanced Node.js adapter with performance improvements
- **astro**: 5.12.7 → 5.13.2 - Latest Astro framework with bug fixes and new features
- **starlight-heading-badges**: 0.5.0 → 0.6.0 - Enhanced heading badges plugin functionality

#### Patch Updates
- **@tailwindcss/vite**: 4.1.11 → 4.1.12 - Bug fixes for Tailwind CSS Vite integration
- **@yeskunall/astro-umami**: 0.0.5 → 0.0.6 - Updates to Umami analytics integration
- **tailwindcss**: 4.1.11 → 4.1.12 - Patch release with bug fixes

### Changed
- Fixed build issues by adding missing `@astrojs/cloudflare` dependency
- All dependencies updated to their latest stable versions
- Enhanced project stability and security through dependency updates

### Technical Details
- **Total dependencies updated**: 8 packages
- **New dependencies added**: 1 package (@astrojs/cloudflare)
- **Build system**: ✅ All builds passing after updates
- **Compatibility**: All updates maintain backward compatibility

### Testing
- ✅ Project builds successfully with `pnpm run build`
- ✅ No breaking changes detected
- ✅ All existing functionality preserved
- ✅ Static site generation working correctly
- ✅ Cloudflare adapter properly configured

### Highlights
This dependency update brings the project up to date with the latest stable versions of all major dependencies, improving security, performance, and stability. The addition of the previously missing @astrojs/cloudflare dependency resolves build issues and ensures proper deployment capability to Cloudflare Pages.

---

*This changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.*