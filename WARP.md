# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a modern, interactive portfolio website built with HTML, CSS, and JavaScript. It features a beautiful hero section, project filtering, animated skill bars, contact form, and responsive design. Perfect for developers, designers, and creative professionals to showcase their work.

## Architecture & Structure

### Core Components
- **index.html**: Multi-section portfolio with navigation, hero, about, projects, skills, experience, and contact sections
- **styles.css**: Modern CSS with animations, gradients, responsive grid layouts, and interactive hover effects
- **script.js**: Interactive features including navigation, project filtering, skill bar animations, contact form handling, and scroll effects
- **assets/**: Static assets directory containing profile images, project screenshots, and SVG placeholders

### Design System
The template uses a CSS custom properties system for consistent theming:
- Color scheme controlled via CSS variables in `:root` selector
- Responsive design with mobile-first approach
- Print-optimized styles with separate print media queries
- Font system using Inter font family from Google Fonts

### JavaScript Architecture
- Event-driven architecture with modern DOM manipulation
- Global `Portfolio` API for section navigation and project filtering
- Intersection Observer for performance-optimized scroll animations
- Contact form validation and submission handling
- Mobile navigation with hamburger menu animations
- Skill bar animations triggered on scroll
- Notification system for user feedback

## Development Commands

### Preview & Testing
```powershell
# Open in default browser (Windows)
Start-Process index.html

# Open in specific browser
Start-Process chrome index.html
Start-Process firefox index.html
```

### File Operations
```powershell
# View file structure
Get-ChildItem -Recurse -Name

# Search for specific content
Select-String -Path "*.html","*.css","*.js" -Pattern "your-search-term"

# Validate HTML structure (if you have HTML validator)
# No built-in validation - use online tools or browser dev tools
```

### Asset Management
```powershell
# Add new profile image
Copy-Item "path\to\your\photo.jpg" -Destination "assets\profile.jpg"

# List current assets
Get-ChildItem assets
```

## Customization Patterns

### Content Updates
- Hero section: Update name, title, and description in hero section
- About section: Modify personal introduction and statistics
- Projects: Add projects using `.project-card` structure with data-category attributes
- Skills: Update skill bars with `.skill-item` and data-width attributes for percentages
- Experience: Add timeline items using `.timeline-item` structure
- Contact: Update contact information and form handling

### Styling Changes
- Theme colors: Modify CSS custom properties in `:root` selector in `styles.css`
- Typography: Update font imports in HTML head and font-family in CSS
- Layout: Adjust grid systems in `.contact-info`, `.skills-grid`, and `.two-column-section`

### Interactive Features
The JavaScript provides a `Portfolio` global API:
- `Portfolio.scrollToSection(sectionId)`: Smooth scroll to any section
- `Portfolio.filterProjects(category)`: Filter projects by category (web, mobile, design)
- `Portfolio.showNotification(message, type)`: Display success/error notifications
- `Portfolio.getContactFormData()`: Retrieve contact form data
- `Portfolio.track(event, data)`: Track user interactions for analytics

## Deployment Strategies

### Static Hosting
This template works with any static hosting service:
- **GitHub Pages**: Commit files to repository, enable Pages in settings
- **Netlify**: Drag-and-drop deployment or Git integration
- **Vercel**: Zero-config deployment for static files
- **Traditional hosting**: Upload all files to web server public directory

### PDF Generation
- Use browser print function (`Ctrl/Cmd + P`)
- Print-optimized CSS automatically applies during print preview
- Save as PDF option available in print dialog

## Code Quality & Standards

### HTML Structure
- Semantic HTML5 elements for accessibility
- Proper heading hierarchy (h1 → h4)
- ARIA labels for interactive elements
- Meta tags for responsive design

### CSS Organization
- Mobile-first responsive design approach
- CSS custom properties for maintainable theming
- Consistent spacing and typography scale
- Print-specific media queries

### JavaScript Best Practices  
- Event delegation and proper event handling
- Intersection Observer for performance-optimized animations
- Graceful degradation for accessibility preferences
- Error handling for missing assets (profile image fallback)

## File Modification Guidelines

### Adding New Sections
Follow the existing section pattern:
```html
<section class="section your-section">
    <h3 class="section-title">
        <i class="fas fa-icon-name"></i>
        Section Title
    </h3>
    <!-- Section content -->
</section>
```

### Color Scheme Updates
Modify these CSS custom properties for consistent theming:
- `--primary-color`: Main brand color used for headings and accents
- `--secondary-color`: Secondary text and borders
- `--text-primary` and `--text-secondary`: Main text colors
- `--surface` and `--background`: Background colors

### Responsive Breakpoints
- Mobile-first approach with `min-width` media queries
- Key breakpoints: 768px (tablets), 1024px (desktop)
- Grid layouts automatically adjust using CSS Grid and Flexbox

## Browser Compatibility

Supports modern browsers with:
- CSS Grid and Flexbox
- CSS Custom Properties  
- ES6+ JavaScript features
- Intersection Observer API
- Print media queries

Minimum versions: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+