# Marvin's Portfolio

A modern, responsive full-stack portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **Dark Mode Support**: Automatic dark/light mode switching based on system preferences
- **Interactive Contact Form**: Fully functional contact form with API integration
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel-ready

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd marvins-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
app/
├── api/
│   └── contact/
│       └── route.ts          # Contact form API endpoint
├── globals.css               # Global styles and Tailwind config
├── layout.tsx               # Root layout with metadata
└── page.tsx                 # Main portfolio page
```

## Customization

### Personal Information
Update the following in `app/page.tsx`:
- Name and title in the hero section
- About section content
- Skills and technologies
- Project information
- Contact details

### Styling
The portfolio uses custom CSS with CSS variables for styling. You can customize:
- Colors by modifying CSS variables in `globals.css`
- Typography and spacing in the CSS classes
- Component styles in the respective CSS sections
- Dark mode colors in the media queries

### Contact Form
The contact form is fully functional with:
- Client-side validation
- API endpoint at `/api/contact`
- Success/error messaging
- Form state management

To integrate with email services, update the API route in `app/api/contact/route.ts`.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The portfolio will be available at your Vercel domain.

## License

This project is open source and available under the [MIT License](LICENSE).
# portfolio
