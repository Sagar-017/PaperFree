# Fonts Directory

This directory contains custom fonts for the PaperFree application.

## Required Fonts

### Inter Font Family
- `Inter-Regular.ttf` - Regular weight for body text
- `Inter-Medium.ttf` - Medium weight for labels and emphasis
- `Inter-Bold.ttf` - Bold weight for headings
- `Inter-Light.ttf` - Light weight for subtle text

### Dancing Script Font Family
- `DancingScript-Regular.ttf` - Regular weight for Fazlani logo
- `DancingScript-Bold.ttf` - Bold weight for Fazlani logo emphasis

## Font Sources

### Inter Font
- **Source**: Google Fonts
- **License**: Open Font License
- **Download**: https://fonts.google.com/specimen/Inter

### Dancing Script Font
- **Source**: Google Fonts
- **License**: Open Font License
- **Download**: https://fonts.google.com/specimen/Dancing+Script

## Setup Instructions

1. Download the font files from Google Fonts
2. Place the `.ttf` files in this directory
3. Ensure the filenames match exactly with the imports in `App.js`
4. The fonts will be automatically loaded when the app starts

## Usage

Fonts are loaded in `App.js` and referenced in `src/theme.js`:

```javascript
// In theme.js
fonts: {
  script: 'Dancing Script',
  regular: 'Inter',
  medium: 'Inter-Medium',
  bold: 'Inter-Bold',
  light: 'Inter-Light',
}
```

## Notes

- Fonts are loaded asynchronously using `expo-font`
- The app shows a loading screen until fonts are loaded
- Font fallbacks are handled gracefully if loading fails
