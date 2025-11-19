# Portfolio Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 📝 Step-by-Step Customization

### 1. Update Personal Information

#### a. Social Media Links
**File:** `src/data/socialMedia.js`

Update the URLs and usernames:
```javascript
{
  name: "GitHub",
  url: "https://github.com/YOUR_USERNAME",
  username: "@YOUR_USERNAME"
}
```

#### b. Education
**File:** `src/data/education.js`

Replace with your education details:
- Institution name
- Degree
- Duration
- Grade/GPA
- Location
- Highlights/Achievements

#### c. Certifications
**File:** `src/data/certifications.js`

Add your certifications:
- Title
- Issuer
- Date
- Credential ID
- Link to verify
- Skills gained

#### d. Projects
**File:** `src/data/projects.js`

Add your projects:
- Title and description
- Technologies used
- Category (Full Stack, Frontend, Backend, etc.)
- GitHub link
- Live demo link
- Project images (use Unsplash URLs or your own)

#### e. Skills
**File:** `src/data/skills.js`

Update your skills:
- Add/remove skills
- Adjust proficiency levels (0-100)
- Organize by categories
- Update emojis/icons

#### f. Test Scores (Optional)
**File:** `src/data/testScores.js`

Add standardized test scores if applicable:
- IELTS, GRE, SAT, etc.
- LeetCode, HackerRank ratings
- Any other relevant scores

### 2. Update Contact Information

**File:** `src/pages/Contact.jsx`

Update the contact info array (around line 67):
```javascript
const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'YOUR_EMAIL@example.com',
    link: 'mailto:YOUR_EMAIL@example.com'
  },
  // ... update phone and location
]
```

### 3. Add Your CV/Resume

1. Save your CV as a PDF file
2. Rename it to `Ravidu_Peiris.pdf` (or update the filename in the code)
3. Place it in: `public/assets/Ravidu_Peiris.pdf`

### 4. Update Profile Image

**File:** `src/pages/About.jsx`

Replace the image URL (around line 55):
```javascript
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Profile"
  className="w-full h-[500px] object-cover"
/>
```

**Image Options:**
- Use a URL from Unsplash
- Upload to your hosting and use the URL
- Place in `src/assets/` and import it

### 5. Update Name and Title

#### Home Page
**File:** `src/pages/Home.jsx`

Update:
- Your name (line 56)
- Role titles in the typing animation (lines 16-21)
- Description text (line 68)

#### About Page
**File:** `src/pages/About.jsx`

Update:
- Heading text (line 82)
- About paragraphs (lines 85-102)
- Stats values (lines 16-19)
- Interests array (lines 22-29)

### 6. Setup EmailJS for Contact Form

**File:** `src/pages/Contact.jsx`

1. **Sign up at EmailJS:**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create a free account

2. **Create Email Service:**
   - Add an email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template:**
   - Create a new template
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name
   - Note the Template ID

4. **Get Public Key:**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update the code (lines 47-49):**
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### 7. Customize Theme Colors

**File:** `tailwind.config.js`

Change the primary color scheme:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... update all shades
    900: '#0c4a6e',
  },
}
```

**Color Palette Generators:**
- [Tailwind Color Generator](https://uicolors.app/create)
- [Coolors](https://coolors.co/)

### 8. Update Meta Tags and SEO

**File:** `index.html`

Update:
- Page title (line 16)
- Description (line 7)
- Keywords (line 8)
- Open Graph tags (lines 11-13)

### 9. Update Footer

**File:** `src/components/Footer.jsx`

Update:
- Footer description (line 22)
- Footer links if needed (lines 11-27)
- Copyright name (line 71)

### 10. Add Google Analytics (Optional)

**File:** `index.html`

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🎨 Advanced Customization

### Change Fonts

**File:** `src/index.css` (line 1)

Update the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');
```

Then update in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YOUR_FONT', 'sans-serif'],
  heading: ['YOUR_HEADING_FONT', 'sans-serif'],
}
```

### Add New Pages

1. Create a new file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`:
```javascript
<Route path="/your-page" element={<YourPage />} />
```
3. Add to navbar in `src/components/Navbar.jsx`

### Modify Animations

**File:** `tailwind.config.js`

Add custom animations in the `animation` and `keyframes` sections.

## ✅ Testing Checklist

Before deploying, check:

- [ ] All personal information updated
- [ ] All links work correctly
- [ ] CV file is in place and downloadable
- [ ] Contact form works (EmailJS configured)
- [ ] Images load properly
- [ ] Dark/light mode works
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] SEO meta tags updated

## 🚀 Ready to Deploy!

Once you've completed all customizations, you're ready to build and deploy:

```bash
npm run build
```

Then deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 💡 Tips

1. **Test thoroughly** on different devices and browsers
2. **Optimize images** before adding them
3. **Keep backups** of your data files
4. **Version control** - commit changes regularly
5. **Performance** - use Lighthouse to check performance scores

## 🆘 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Ensure all dependencies are installed
3. Clear browser cache
4. Review the documentation in README.md

Good luck with your portfolio! 🎉
