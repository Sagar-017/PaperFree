# Images Directory

This directory contains image assets for the PaperFree application.

## Required Images

### App Icons
- `icon.png` - Main app icon (1024x1024)
- `adaptive-icon.png` - Android adaptive icon (1024x1024)
- `favicon.png` - Web favicon (32x32)

### Splash Screen
- `splash.png` - App splash screen image

### Logo Assets
- `fazlani-logo.png` - Fazlani brand logo
- `ajas-logo.png` - AJAS Services logo
- `background-collaboration.jpg` - Background image of three women collaborating

## Image Specifications

### App Icons
- **Format**: PNG with transparency
- **Size**: 1024x1024 pixels
- **Background**: Transparent or solid color matching brand
- **Style**: Clean, modern, recognizable at small sizes

### Splash Screen
- **Format**: PNG
- **Size**: 1242x2436 pixels (iPhone X resolution)
- **Content**: App logo centered with brand colors
- **Background**: Solid color matching theme

### Logo Assets
- **Format**: PNG with transparency
- **Size**: High resolution (at least 512x512)
- **Style**: Vector-based for scalability

### Background Image
- **Format**: JPG or PNG
- **Size**: High resolution for tablet displays
- **Content**: Three women collaborating on laptop
- **Style**: Professional, warm-toned, blurred for overlay

## Setup Instructions

1. Create or obtain the required image assets
2. Place them in this directory with the exact filenames
3. Ensure images meet the specified format and size requirements
4. Update `app.json` if different filenames are used

## Usage

Images are referenced in various parts of the application:

```javascript
// App icons in app.json
"icon": "./src/assets/images/icon.png",
"adaptiveIcon": {
  "foregroundImage": "./src/assets/images/adaptive-icon.png",
}

// In components
import logoImage from '../assets/images/fazlani-logo.png';
```

## Notes

- All images should be optimized for web/mobile use
- Consider using WebP format for better compression
- Ensure images are accessible and meet brand guidelines
- Test images on different screen sizes and orientations
