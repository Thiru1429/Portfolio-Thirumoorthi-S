# Modern Portfolio Website

A stunning, responsive, and interactive portfolio website built with modern HTML, CSS, and JavaScript. Perfect for developers, designers, and creative professionals to showcase their work and skills.

![Resume Template Preview](assets/preview.png)

## Features

- 🎨 **Modern Design**: Beautiful gradient hero section with floating animations
- 📱 **Fully Responsive**: Optimized for all devices with mobile-first approach
- 🚀 **Interactive**: Smooth scrolling, hover effects, typing animations, and parallax
- 🎯 **Project Filtering**: Dynamic filtering system for showcasing different project types
- 📊 **Skill Bars**: Animated progress bars that trigger on scroll
- 💌 **Contact Form**: Working contact form with validation and notifications
- ⚡ **Performance**: Optimized loading with intersection observer animations
- 🎪 **Navigation**: Sticky navigation with active section highlighting
- 📦 **Zero Dependencies**: Pure HTML, CSS, and JavaScript with CDN resources

## Quick Start

1. **Download or clone** this template
2. **Open `index.html`** in your browser to preview
3. **Edit the content** to match your information
4. **Customize colors and styling** in `styles.css` (optional)
5. **Deploy** to your preferred hosting platform

## Customization Guide

### Basic Information

Edit the personal information in `index.html`:

```html
<h1 class="name">Your Full Name</h1>
<h2 class="title">Professional Title</h2>

<!-- Contact Information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>City, State</span>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
```

### Profile Image

Replace the placeholder image:

1. Add your photo to the `assets/` folder
2. Update the image source in `index.html`:
   ```html
   <img src="assets/your-photo.jpg" alt="Profile Picture" id="profileImg">
   ```

### Professional Summary

Update the summary section with your own content:

```html
<p class="summary-text">
    Your compelling professional summary here...
</p>
```

### Work Experience

Add or modify experience entries:

```html
<div class="experience-item">
    <div class="experience-header">
        <div class="job-info">
            <h4 class="job-title">Your Job Title</h4>
            <p class="company">Company Name</p>
        </div>
        <div class="job-duration">
            <span class="duration">Start Date - End Date</span>
            <span class="location">Location</span>
        </div>
    </div>
    <ul class="job-achievements">
        <li>Achievement or responsibility</li>
        <li>Another achievement with metrics</li>
        <li>Third bullet point</li>
    </ul>
</div>
```

### Education

Modify the education section:

```html
<div class="education-item">
    <div class="education-header">
        <div class="degree-info">
            <h4 class="degree">Your Degree</h4>
            <p class="school">University Name</p>
        </div>
        <div class="education-duration">
            <span class="duration">Year Range</span>
            <span class="location">Location</span>
        </div>
    </div>
    <p class="education-details">Relevant coursework or details</p>
</div>
```

### Skills

Update skill categories and tags:

```html
<div class="skill-category">
    <h4>Category Name</h4>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
        <span class="skill-tag">Skill 3</span>
    </div>
</div>
```

### Projects

Add your projects:

```html
<div class="project-item">
    <h4 class="project-title">
        <a href="project-url" target="_blank">Project Name</a>
    </h4>
    <p class="project-description">
        Description of your project and its impact.
    </p>
    <div class="project-tech">
        <span class="tech-tag">Technology 1</span>
        <span class="tech-tag">Technology 2</span>
    </div>
</div>
```

## Color Customization

The template uses CSS custom properties for easy color customization. Edit these variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;        /* Main blue color */
    --secondary-color: #64748b;      /* Gray accents */
    --text-primary: #1e293b;         /* Dark text */
    --text-secondary: #64748b;       /* Light text */
    --background: #ffffff;           /* Page background */
    --surface: #f8fafc;              /* Card backgrounds */
    --border: #e2e8f0;              /* Borders */
}
```

### Popular Color Schemes

**Professional Blue** (default):
```css
--primary-color: #2563eb;
--secondary-color: #64748b;
```

**Corporate Green**:
```css
--primary-color: #059669;
--secondary-color: #6b7280;
```

**Creative Purple**:
```css
--primary-color: #7c3aed;
--secondary-color: #6b7280;
```

**Modern Orange**:
```css
--primary-color: #ea580c;
--secondary-color: #6b7280;
```

## Interactive Features

### JavaScript Utilities

The template includes a JavaScript API for dynamic updates:

```javascript
// Update profile information
ResumeTemplate.updateProfile({
    name: "New Name",
    title: "New Title",
    email: "new@email.com"
});

// Add skills programmatically
ResumeTemplate.addSkills("Languages", ["Python", "JavaScript"]);

// Trigger print function
ResumeTemplate.print();
```

### Keyboard Shortcuts

- `Ctrl/Cmd + P`: Print or save as PDF

## Print & PDF Export

The template is optimized for printing:

1. **Browser Print**: Use `Ctrl/Cmd + P` or the print button
2. **PDF Export**: Use browser's "Save as PDF" option
3. **Print Settings**: 
   - Margins: Default or minimum
   - Scale: 100%
   - Include background graphics: Yes

## Deployment Options

### GitHub Pages
1. Create a new repository
2. Upload your files
3. Enable GitHub Pages in repository settings

### Netlify
1. Drag and drop your folder to [Netlify Deploy](https://app.netlify.com/drop)
2. Get instant deployment with custom domain options

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts for deployment

### Traditional Web Hosting
Upload all files to your web hosting provider's public folder.

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## File Structure

```
portfolio-website/
├── index.html          # Main portfolio HTML
├── styles.css          # Modern CSS with animations
├── script.js           # Interactive JavaScript features
├── README.md           # Documentation
├── WARP.md             # Development guidelines
└── assets/
    ├── profile-placeholder.svg    # Profile image placeholder
    └── project-placeholder.svg    # Project image placeholder
```

## Customization Tips

### Adding Sections

To add a new section, follow this pattern:

```html
<section class="section your-section">
    <h3 class="section-title">
        <i class="fas fa-icon-name"></i>
        Section Title
    </h3>
    <!-- Your content here -->
</section>
```

### Removing Sections

Simply delete or comment out sections you don't need:

```html
<!-- Remove this entire block if not needed -->
<!--
<section class="section certifications-section">
    ...
</section>
-->
```

### Font Changes

To use a different Google Font:

1. Update the link in `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. Update the CSS font-family:
   ```css
   body {
       font-family: 'Roboto', sans-serif;
   }
   ```

## Accessibility

This template follows accessibility best practices:

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ High contrast ratios
- ✅ Responsive design

## Performance

- ✅ Lightweight (< 50KB total)
- ✅ Fast loading with CDN resources
- ✅ Optimized images
- ✅ Minimal JavaScript
- ✅ Clean, efficient CSS

## Contributing

Feel free to submit issues and enhancement requests!

## License

This template is free to use for personal and commercial projects. No attribution required, but appreciated!

## Support

If you encounter any issues or have questions:
1. Check this README for common solutions
2. Review the browser console for errors
3. Ensure all files are properly linked
4. Test in multiple browsers

---

**Made with ❤️ for job seekers everywhere**

*Good luck with your job search!*