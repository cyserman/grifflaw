# Implementation Guide

How to apply the gray & blue color scheme to your Griffiths Law website.

---

## Quick Start

### Step 1: Add the Stylesheet
Link `styles.css` in your HTML files:

```html
<link rel="stylesheet" href="styles.css">
```

### Step 2: Use the Color Classes
The stylesheet includes utility classes for quick styling:

```html
<!-- Backgrounds -->
<div class="bg-navy">Navy blue background</div>
<div class="bg-light-gray">Light gray background</div>

<!-- Text Colors -->
<h1 class="text-navy">Navy blue heading</h1>
<p class="text-gray">Gray secondary text</p>

<!-- Borders -->
<div class="border-blue">Blue border</div>
```

---

## Component Examples

### Blog Post Header

```html
<div class="blog-post-header">
  <h1 class="blog-post-title">Your Blog Title</h1>
  <p class="blog-post-meta">By Steve Griffiths | Date</p>
</div>
```

**Result:** Gradient navy/dark blue background with white text

---

### Callout Box

```html
<div class="featured-content">
  <strong>Key Takeaway:</strong>
  <p>Your important message here...</p>
</div>
```

**Result:** Light gray background with off-blue left border

---

### Button

```html
<a href="/contact" class="btn btn-primary">Contact Us</a>
<a href="/blog" class="btn btn-secondary">Read More</a>
```

**Result:** Navy blue (primary) or off-blue (secondary) buttons with hover effects

---

### Card

```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>
```

**Result:** White card with gray border, hover effect adds shadow

---

### Sidebar

```html
<aside class="sidebar">
  <h3>Related Articles</h3>
  <p>Sidebar content...</p>
</aside>
```

**Result:** Light gray background with blue left border

---

## CSS Variables

You can also use CSS variables directly:

```css
.custom-element {
  background-color: var(--navy-blue);
  color: var(--off-white);
  border-left: 4px solid var(--off-blue);
}
```

### Available Variables:
- `--navy-blue` - Primary brand color
- `--dark-blue` - Secondary brand color
- `--off-blue` - Accent color
- `--steel-blue` - Link color
- `--charcoal-gray` - Body text
- `--medium-gray` - Secondary text
- `--light-gray` - Background
- `--slate-gray` - Borders
- `--off-white` - Main background

---

## Page Layout Template

### Basic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Griffiths Law</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navy blue header -->
    <header>
        <h1>Griffiths Law</h1>
        <p>Criminal Defense Attorney</p>
    </header>
    
    <!-- Navy blue navigation -->
    <nav>
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
    </nav>
    
    <!-- Off-white background content area -->
    <main>
        <article>
            <!-- Your content here -->
        </article>
    </main>
    
    <!-- Dark blue footer -->
    <footer>
        <p>© 2025 Griffiths Law</p>
    </footer>
</body>
</html>
```

---

## Responsive Design

The stylesheet includes responsive breakpoints for mobile devices:

- **Desktop:** Full layout with all styles
- **Tablet/Mobile (< 768px):** Adjusted padding, font sizes, and margins

No additional configuration needed - it's automatic!

---

## Accessibility

All color combinations meet **WCAG AA contrast standards**:
- ✓ Dark text on light backgrounds
- ✓ Light text on dark backgrounds
- ✓ Link colors are distinguishable
- ✓ Hover states are clearly visible

---

## Need Help?

See also:
- `STYLE_GUIDE.md` - Complete design specifications
- `COLOR_SWATCHES.md` - Quick color reference
- `blog_posts/example-blog-template.html` - Full working example

---

**Last Updated:** December 30, 2025

