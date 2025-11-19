# 🚀 Quick Start Guide

## Your Portfolio is Ready!

The portfolio website has been successfully built with all the features you requested. Here's what you need to do next:

## ✅ What's Already Done

- ✨ Modern, responsive design with Tailwind CSS
- 🌓 Dark/Light mode toggle with persistence
- 📱 Fully mobile-responsive layout
- 🎭 Smooth animations using Framer Motion
- 📧 Contact form with EmailJS integration (needs configuration)
- 🧭 React Router navigation with 8 pages
- 📊 All data structures created and populated with sample data
- 🎨 Reusable components (Navbar, Footer, Button, Card, etc.)
- 🔄 Theme context for global state management

## 🎯 Next Steps (5-10 minutes)

### 1. Update Your Personal Information

Open these files and replace sample data with yours:

```
src/data/
├── education.js         → Your education history
├── certifications.js    → Your certifications
├── projects.js         → Your projects
├── skills.js           → Your skill levels
├── socialMedia.js      → Your social media links
└── testScores.js       → Your test scores (optional)
```

### 2. Add Your Profile Photo

**File:** `src/pages/About.jsx` (Line ~55)

Replace the image URL with your photo:
```javascript
src="YOUR_IMAGE_URL_OR_PATH"
```

### 3. Add Your CV/Resume

Place your CV PDF file at:
```
public/assets/Ravidu_Peiris.pdf
```

### 4. Configure EmailJS (Contact Form)

**File:** `src/pages/Contact.jsx` (Lines 47-49)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create a service and template
3. Update these values:
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### 5. Update Contact Info

**File:** `src/pages/Contact.jsx` (Lines ~67-85)

Update your email, phone, and location.

## 🎨 Customization (Optional)

### Change Colors
Edit `tailwind.config.js` to change the primary color scheme.

### Change Fonts
Edit the Google Fonts import in `src/index.css` (line 1).

### Add/Remove Pages
- Create new page in `src/pages/`
- Add route in `src/App.jsx`
- Add to navbar in `src/components/Navbar.jsx`

For detailed customization instructions, see **CUSTOMIZATION_GUIDE.md**

## 🧪 Testing

The dev server is running at: **http://localhost:5174**

Test these features:
- [ ] Navigation between pages
- [ ] Dark/light mode toggle
- [ ] Responsive design (resize browser)
- [ ] Contact form (after EmailJS setup)
- [ ] Download CV button
- [ ] All links work

## 📦 Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder at netlify.com

### GitHub Pages
1. Install: `npm i -D gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📚 Documentation

- **README.md** - Full project documentation
- **CUSTOMIZATION_GUIDE.md** - Detailed customization guide
- **This file** - Quick start guide

## 🎓 Project Structure

```
my_portfolio/
├── src/
│   ├── components/     → Reusable UI components
│   ├── pages/         → Page components
│   ├── data/          → All your data (UPDATE THESE!)
│   ├── context/       → Theme context
│   └── App.jsx        → Main app with routing
├── public/
│   └── assets/        → Static files (CV, images)
└── Configuration files (Tailwind, Vite, etc.)
```

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## ✨ Features Included

### Pages
1. **Home** - Hero section with typing animation
2. **About** - Personal introduction with stats
3. **Skills** - Interactive skill showcase with categories
4. **Projects** - Project gallery with filters
5. **Education** - Education timeline
6. **Certifications** - Certification showcase
7. **Test Scores** - Test scores and achievements
8. **Contact** - Contact form with EmailJS

### Components
- Responsive Navbar with mobile menu
- Footer with social links
- Theme toggle (Dark/Light)
- Reusable Button, Card, and SectionTitle components
- Smooth page transitions with Framer Motion

### Technical Features
- React 19 + Vite
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- EmailJS for contact form
- React Icons for icons
- React Toastify for notifications
- Responsive design (mobile-first)
- Dark mode support
- SEO optimized

## 🆘 Troubleshooting

### Port already in use
The dev server will automatically try another port (5174, 5175, etc.)

### Tailwind not working
Make sure you have the PostCSS and Tailwind config files in the root.

### EmailJS not sending
Double-check your Service ID, Template ID, and Public Key.

### Images not loading
- Ensure URLs are correct
- For local images, place in `src/assets/` and import them

## 💡 Pro Tips

1. **Test on mobile** - Use Chrome DevTools responsive mode
2. **Optimize images** - Compress before uploading
3. **Use real data** - Replace all sample data ASAP
4. **Git commits** - Commit changes frequently
5. **Performance** - Run Lighthouse audit before deploying

## 🎉 You're All Set!

Your portfolio website is production-ready. Just update your personal information and deploy!

**Questions?** Check CUSTOMIZATION_GUIDE.md or README.md

Happy coding! 🚀
