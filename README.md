# Portfolio Website

A clean, minimal portfolio website with dark/light mode, GitHub integration, and easy configuration.

## Features

- ✨ Dark/Light mode toggle
- 📊 GitHub contribution graph
- 🚀 Featured projects (configurable)
- 💻 Tech stack (configurable)
- 📝 Blogs & Research section
- 📅 Book a Call functionality
- 🔗 Connected to GitHub (srishti77singh)

## How to Customize

Edit the `config.json` file to customize your portfolio:

### Profile Information
```json
"profile": {
  "name": "Your Name",
  "tagline": "Your Tagline",
  "description": "Your description",
  "email": "your.email@example.com",
  "github": "your-github-username",
  "twitter": "your-twitter-username",
  "linkedin": "your-linkedin-username",
  "calendly": "your-calendly-link"
}
```

### Tech Stack
Add or remove technologies from the `techStack` array:
```json
"techStack": [
  {
    "name": "Python",
    "category": "Languages"
  },
  {
    "name": "React",
    "category": "Frameworks"
  }
]
```

### Featured Projects
Add your highlighted projects:
```json
"featuredProjects": [
  {
    "name": "Project Name",
    "description": "Project description",
    "githubUrl": "https://github.com/username/repo",
    "liveUrl": "https://your-site.com",
    "stars": 0,
    "language": "Python"
  }
]
```

### Blogs & Research
Add your blog posts and research papers:
```json
"blogs": [
  {
    "title": "Blog Title",
    "description": "Blog description",
    "type": "Blog Post",
    "url": "https://your-blog.com"
  }
]
```

## Adding Your Profile Photo

1. Place your photo in the Project folder
2. Name it `profile.jpg` (or .png)
3. The photo will automatically appear in a circular shape
4. If you don't have a photo yet, a placeholder icon will show

**Photo requirements:**
- Recommended size: 300x300 pixels or larger
- Format: JPG or PNG
- The photo will be automatically cropped to a circle

## Local Development

The website is already running at: http://127.0.0.1:58114

To restart the server:
```bash
python -m http.server 8000
```

## Deployment

You can deploy this to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the files and your portfolio will be live!
