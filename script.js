// Load configuration
let config = {};

async function loadConfig() {
    try {
        const response = await fetch('config.json');
        config = await response.json();
        initializeWebsite();
    } catch (error) {
        console.error('Error loading config:', error);
        // Fallback to default values
        config = {
            profile: {
                name: 'Srishti Singh',
                tagline: 'AI Enthusiast & Developer',
                description: 'I\'m currently focused on building AI-powered applications and exploring machine learning research.',
                email: 'your.email@example.com',
                github: 'srishti77singh',
                twitter: 'Srishti77singh',
                linkedin: '',
                calendly: 'your-calendly-link'
            },
            techStack: [
                { name: 'Python', category: 'Languages' },
                { name: 'TypeScript', category: 'Languages' },
                { name: 'PyTorch', category: 'Frameworks' },
                { name: 'TensorFlow', category: 'Frameworks' },
                { name: 'React', category: 'Frameworks' },
                { name: 'Machine Learning', category: 'Skills' },
                { name: 'Deep Learning', category: 'Skills' },
                { name: 'NLP', category: 'Skills' }
            ],
            featuredProjects: [
                {
                    name: 'Project Name 1',
                    description: 'A brief description of your featured project.',
                    githubUrl: 'https://github.com/srishti77singh/project1',
                    liveUrl: '',
                    stars: 0,
                  language: 'Python'
                },
                {
                    name: 'Project Name 2',
                    description: 'Another featured project description.',
                    githubUrl: 'https://github.com/srishti77singh/project2',
                    liveUrl: '',
                    stars: 0,
                    language: 'TypeScript'
                }
            ],
            blogs: [
                {
                    title: 'Coming Soon',
                    description: 'Research on advanced machine learning techniques',
                    type: 'Research Paper',
                  url: ''
                }
            ]
        };
        initializeWebsite();
    }
}

function initializeWebsite() {
    // Update profile information
    document.getElementById('name').textContent = config.profile.name;
    document.getElementById('tagline').textContent = config.profile.tagline;
    document.getElementById('description').textContent = config.profile.description;
    document.getElementById('footer-name').textContent = config.profile.name;
    
    // Update GitHub chart
    document.getElementById('gh-chart').src = `https://ghchart.rshah.org/${config.profile.github}`;
    
    // Update social links
    const socialLinksContainer = document.getElementById('social-links');
    let socialLinksHTML = '';
    
    if (config.profile.github) {
        socialLinksHTML += `
            <a href="https://github.com/${config.profile.github}" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
            </a>
        `;
    }
    
    if (config.profile.twitter) {
        socialLinksHTML += `
            <a href="https://x.com/${config.profile.twitter}" target="_blank" class="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
            </a>
        `;
    }
    
    if (config.profile.email) {
        socialLinksHTML += `
            <a href="mailto:${config.profile.email}" class="social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
            </a>
        `;
    }
    
    socialLinksContainer.innerHTML = socialLinksHTML;
    
    // Update featured projects
    const projectsContainer = document.getElementById('featured-projects');
    projectsContainer.innerHTML = config.featuredProjects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">
                    <a href="${project.githubUrl}" target="_blank" class="project-link">${project.name}</a>
                </h3>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span>⭐ ${project.stars}</span>
                <span>${project.language || 'Unknown'}</span>
            </div>
        </div>
    `).join('');
    
    // Update tech stack
    const techStackContainer = document.getElementById('tech-stack');
    techStackContainer.innerHTML = config.techStack.map(tech => `
        <span class="tech-tag">${tech.name}</span>
    `).join('');
    
    // Update call content
    const callContent = document.getElementById('call-content');
    callContent.innerHTML = `
        <a href="https://calendly.com/${config.profile.calendly}" target="_blank" class="call-btn primary">
            Schedule via Calendly
        </a>
        <a href="mailto:${config.profile.email}" class="call-btn secondary">
            Send an Email
        </a>
        <div class="contact-info">
            <p>Or reach out directly:</p>
            <a href="mailto:${config.profile.email}" class="contact-email">${config.profile.email}</a>
        </div>
    `;
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Slide Panel Management
const navBtns = document.querySelectorAll('.nav-btn');
const slidePanels = document.querySelectorAll('.slide-panel');
const closeBtns = document.querySelectorAll('.close-btn');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
        const panel = document.getElementById(`${section}-panel`);
        
        if (panel) {
            panel.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            if (section === 'proof-of-work') {
                loadProofOfWork();
            } else if (section === 'blogs') {
                loadBlogs();
            }
        }
    });
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const panel = btn.closest('.slide-panel');
        panel.classList.remove('active');
        document.body.style.overflow = '';
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        slidePanels.forEach(panel => {
            panel.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Load Proof of Work content
async function loadProofOfWork() {
    const content = document.getElementById('proof-of-work-content');
    
    try {
        const response = await fetch(`https://api.github.com/users/${config.profile.github}/repos?sort=updated&per_page=10&type=owner`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }
        
        const repos = await response.json();
        
        if (repos.length === 0) {
            content.innerHTML = '<p class="loading">No repositories found</p>';
            return;
        }
        
        content.innerHTML = repos.map(repo => `
            <div class="slide-item">
                <div class="slide-item-type">Project</div>
                <h3>
                    <a href="${repo.html_url}" target="_blank" class="project-link">${repo.name}</a>
                </h3>
                <p>${repo.description || 'No description available'}</p>
                <div class="project-meta" style="margin-top: 0.75rem;">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    <span>${repo.language || 'Unknown'}</span>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        content.innerHTML = `
            <div class="slide-item">
                <p>Unable to load projects from GitHub. Please check your internet connection.</p>
            </div>
        `;
    }
}

// Load Blogs content
function loadBlogs() {
    const content = document.getElementById('blogs-content');
    
    content.innerHTML = config.blogs.map(blog => `
        <div class="slide-item">
            <div class="slide-item-type">${blog.type}</div>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
});
