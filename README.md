# Ravidu Peiris - Portfolio Website

A modern, responsive, and fully-featured portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent preference
- 📱 **Fully Responsive**: Optimized for all screen sizes
- ⚡ **Fast Performance**: Built with Vite for optimal loading speed
- 🎭 **Smooth Animations**: Framer Motion for elegant transitions
- 📧 **Contact Form**: EmailJS integration for direct messaging
- 🎯 **SEO Optimized**: Proper meta tags and semantic HTML

## 📂 Project Structure

```
my_portfolio/
├── public/
│   └── assets/           # Static assets (CV, images)
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── SectionTitle.jsx
│   ├── context/         # React Context
│   │   └── ThemeContext.jsx
│   ├── data/            # Data files
│   │   ├── education.js
│   │   ├── certifications.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── socialMedia.js
│   │   └── testScores.js
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── TestScores.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup (Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Create an `.env` file in the project root (see `.env.example`) and add:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Restart the dev server after changing environment variables.

### Customization

#### Update Personal Information

1. **Data Files** - Update the following files in `src/data/`:
   - `education.js` - Add your education details
   - `certifications.js` - Add your certifications
   - `projects.js` - Add your projects
   - `skills.js` - Update your skills
   - `socialMedia.js` - Update your social media links
   - `testScores.js` - Add test scores (optional)

2. **CV/Resume** - Place your CV file at `public/assets/Ravidu_Peiris.pdf`

3. **Profile Image** - Update the image URL in `src/pages/About.jsx`

4. **Contact Information** - Update contact details in `src/pages/Contact.jsx`

#### Customize Theme Colors

Edit `tailwind.config.js` to change the primary color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Routing
- **EmailJS** - Contact form
- **React Icons** - Icons
- **React Toastify** - Notifications

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ravidu Peiris**

- GitHub: [@ravidu001](https://github.com/ravidu001)
- Email: your.email@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
