// Resume Template Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for any internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Print functionality with optimizations
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            // Add print-ready class before printing
            document.body.classList.add('print-ready');
            
            // Trigger print
            window.print();
            
            // Remove print-ready class after printing
            setTimeout(() => {
                document.body.classList.remove('print-ready');
            }, 1000);
        });
    }

    // Handle print events
    window.addEventListener('beforeprint', function() {
        // Optimize content for printing
        optimizeForPrint();
    });

    window.addEventListener('afterprint', function() {
        // Restore normal view
        restoreFromPrint();
    });

    // Profile image error handling
    const profileImg = document.getElementById('profileImg');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-placeholder';
            placeholder.innerHTML = '<i class="fas fa-user"></i>';
            placeholder.style.cssText = `
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 3rem;
                color: rgba(255, 255, 255, 0.7);
                border: 4px solid rgba(255, 255, 255, 0.2);
            `;
            this.parentNode.appendChild(placeholder);
        });
    }

    // Dynamic skill tags animation (subtle hover effects)
    const skillTags = document.querySelectorAll('.skill-tag, .tech-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add fade-in animation to sections on scroll
    const observeElements = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    observeElements.forEach(element => {
        observer.observe(element);
    });

    // Add CSS for animations dynamically
    const animationStyles = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .skill-tag, .tech-tag {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .section {
                opacity: 1;
                transform: none;
                transition: none;
            }
            
            .skill-tag, .tech-tag {
                transition: none;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = animationStyles;
    document.head.appendChild(styleSheet);

    // Initialize animations for elements already in view
    setTimeout(() => {
        observeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('animate-in');
            }
        });
    }, 100);

    // Contact link click tracking (for analytics if needed)
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkType = this.href.includes('mailto') ? 'email' : 
                           this.href.includes('linkedin') ? 'linkedin' : 
                           this.href.includes('github') ? 'github' : 'other';
            
            // Log interaction (can be extended for analytics)
            console.log(`Contact link clicked: ${linkType}`);
        });
    });

    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Print shortcut (Ctrl/Cmd + P)
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            if (printBtn) {
                printBtn.click();
            }
        }
    });

    // Functions for print optimization
    function optimizeForPrint() {
        // Hide interactive elements
        const interactiveElements = document.querySelectorAll('.print-btn');
        interactiveElements.forEach(el => el.style.display = 'none');
        
        // Ensure all content is visible
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'none';
        });
    }

    function restoreFromPrint() {
        // Restore interactive elements
        const interactiveElements = document.querySelectorAll('.print-btn');
        interactiveElements.forEach(el => el.style.display = '');
    }

    // Add loading state management
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add loaded styles
        const loadedStyles = `
            body.loaded .section {
                transition-delay: 0.1s;
            }
            
            body.loaded .section:nth-child(2) {
                transition-delay: 0.2s;
            }
            
            body.loaded .section:nth-child(3) {
                transition-delay: 0.3s;
            }
            
            body.loaded .section:nth-child(4) {
                transition-delay: 0.4s;
            }
        `;
        
        const loadedStyleSheet = document.createElement('style');
        loadedStyleSheet.textContent = loadedStyles;
        document.head.appendChild(loadedStyleSheet);
    });

    // Theme preference detection (for future dark mode support)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Listen for theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        });
    }

    console.log('Resume template initialized successfully');
});

// Utility functions for customization
window.ResumeTemplate = {
    // Function to update profile information programmatically
    updateProfile: function(data) {
        if (data.name) {
            const nameElement = document.querySelector('.name');
            if (nameElement) nameElement.textContent = data.name;
            
            // Update document title
            document.title = `${data.name} - Resume`;
        }
        
        if (data.title) {
            const titleElement = document.querySelector('.title');
            if (titleElement) titleElement.textContent = data.title;
        }
        
        if (data.email) {
            const emailElement = document.querySelector('.contact-item span');
            if (emailElement && emailElement.textContent.includes('@')) {
                emailElement.textContent = data.email;
            }
        }
    },
    
    // Function to add new skill tags
    addSkills: function(category, skills) {
        const categories = document.querySelectorAll('.skill-category');
        categories.forEach(cat => {
            const heading = cat.querySelector('h4');
            if (heading && heading.textContent.toLowerCase().includes(category.toLowerCase())) {
                const skillTags = cat.querySelector('.skill-tags');
                skills.forEach(skill => {
                    const tag = document.createElement('span');
                    tag.className = 'skill-tag';
                    tag.textContent = skill;
                    skillTags.appendChild(tag);
                });
            }
        });
    },
    
    // Function to trigger print
    print: function() {
        const printBtn = document.querySelector('.print-btn');
        if (printBtn) {
            printBtn.click();
        } else {
            window.print();
        }
    }
};