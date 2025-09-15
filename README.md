# Angkita Paul - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with React, Vite, and Tailwind CSS. Features dark mode, smooth animations, and a contact form with EmailJS integration.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: EmailJS integration for contact form submissions
- **Project Showcase**: Detailed project case studies
- **Modern UI**: Clean, professional design with glowing components
- **Photo Gallery**: Interactive image gallery component
- **Tech Stack Display**: Animated technology stack showcase

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Icons**: Heroicons, React Icons
- **Loading**: React Top Loading Bar

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/AS-PBDeveloper/your-portfolio-repo
cd your-portfolio-repo
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── Components/
│   ├── Contexts/
│   │   └── DarkModeContext.jsx      # Dark mode context provider
│   ├── Images/                      # All project images
│   ├── Large Components/
│   │   └── Homepage.jsx             # Main homepage component
│   ├── Small Components/
│   │   ├── AceternityUsable/
│   │   │   └── PhotoGalleryComponent.jsx
│   │   ├── Buttons/                 # Reusable button components
│   │   ├── ContactForm.jsx          # Contact form with EmailJS
│   │   ├── Header.jsx               # Site header
│   │   ├── Navbar.jsx               # Navigation component
│   │   ├── Project Case Study/      # Project detail pages
│   │   ├── ProjectsWorks.jsx        # Projects showcase
│   │   ├── Router/
│   │   │   └── ScrollToTop.jsx      # Router scroll behavior
│   │   └── TechStack.jsx            # Technology stack display
│   └── ui/                          # UI components
├── Assets/
│   └── data.js                      # Project data and configuration
├── lib/
│   └── utils.js                     # Utility functions
├── App.jsx                          # Main app component with routing
├── index.css                        # Global styles
└── main.jsx                         # App entry point
```

## ⚙️ Configuration

### Customizing Your Portfolio

1. **Update Personal Information**
   - Edit `src/Assets/data.js` for project data, links, and tech stack
   - Replace images in `src/Components/Images/`
   - Update content in `src/Components/Large Components/Homepage.jsx`

2. **Styling**
   - Modify `src/index.css` for global styles
   - Update `tailwind.config.js` for custom design tokens
   - Adjust dark mode in `src/Components/Contexts/DarkModeContext.jsx`

3. **Routing**
   - Update routes in `src/App.jsx`
   - For GitHub Pages: keep `/og-portfolio` prefix
   - For custom domain: change to root paths (`/`)

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## 🚀 Deployment

### GitHub Pages
1. Update `homepage` in `package.json` to your GitHub Pages URL
2. Routes are configured for root paths (already updated)
3. Run `npm run deploy`

### Netlify/Vercel
1. Remove or update `homepage` in `package.json`
2. Change routes to root paths (`/` instead of `/og-portfolio`)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Add environment variables in dashboard

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run predeploy` - Build before deployment
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization Guide

### Adding New Projects
1. Add project data to `src/Assets/data.js`
2. Create project images in `src/Components/Images/`
3. Add project case study component in `src/Components/Small Components/Project Case Study/`
4. Update routing in `src/App.jsx`

### Modifying Contact Form
- Edit `src/Components/Small Components/ContactForm.jsx`
- Ensure form field names match EmailJS template variables
- Customize validation and styling as needed

### Changing Theme Colors
- Update Tailwind config in `tailwind.config.js`
- Modify CSS variables in `src/index.css`
- Adjust dark mode colors in `DarkModeContext.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 About Me

I'm Angkita Paul, a Full Stack Developer with a B.Tech in Electronics and Communication Engineering. I specialize in React, React Native, Node.js, and modern web technologies. Currently practicing as a freelancer and always learning new technologies.

## 📞 Contact

- **Email**: paulankita614@gmail.com
- **GitHub**: [AS-PBDeveloper](https://github.com/AS-PBDeveloper)
- **LinkedIn**: [angkita-paul](https://www.linkedin.com/in/angkita-paul)

---

**Happy coding!** 🎉
