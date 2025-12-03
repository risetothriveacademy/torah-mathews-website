# Torah Mathews Personal Website

A faith-based website providing support, resources, and inspiration for trauma recovery and mental health healing through Christian principles.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Package Manager:** Bun
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[username]/torah-mathews-website.git
cd torah-mathews-website
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
torah-mathews-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── trauma-and-mental-health/
│   │   ├── recovery-methods/
│   │   ├── non-clinicians/
│   │   ├── blogs/             # Blog index
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── site-header.tsx   # Main navigation
│   │   └── ui/               # shadcn/ui components
│   └── lib/                   # Utility functions
├── public/                    # Static assets
└── netlify.toml              # Netlify configuration
```

## Pages & Routes

- `/` - Home page with hero, core values, and testimonials
- `/about` - About Torah Mathews
- `/trauma-and-mental-health` - Understanding trauma and healing
- `/recovery-methods` - Faith-based recovery approaches
- `/non-clinicians` - Resources for supporters
- `/blogs` - Blog posts and articles

## Navigation Structure

The site features a comprehensive navigation with dropdown menus:

- **HOME** - Landing page
- **ABOUT ME** ▾
  - Author
  - Speaker
  - Legacy Member
- **TRAUMA AND MENTAL HEALTH** ▾
  - Mental Health Conditions
- **RECOVERY METHODS** ▾
  - Medication
  - Therapy
- **NON-CLINICIANS** ▾
  - Family Members
  - Church
  - Social Groups
- **BLOGS** - Blog articles

## Deployment

### Deploy to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Connect your repository to Netlify:
   - Log in to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository
   - Netlify will automatically detect Next.js settings

3. Build settings (auto-configured):
   - Build command: `bun run build`
   - Publish directory: `.next`
   - The `netlify.toml` file handles the rest

4. Click "Deploy site"

### Manual Deployment

```bash
# Build the project
bun run build

# The build output will be in .next/
```

## Customization

### Adding Content

Content placeholders are marked with `[Placeholder: ...]` throughout the site. Replace these with actual content as needed.

### Styling

The site uses Tailwind CSS with custom colors matching the Torah Mathews brand:
- Teal: `#209bab`
- Gold: `#b18c57`
- Gray tones for text and backgrounds

### Adding Pages

To add a new page:
1. Create a folder in `src/app/[page-name]`
2. Add `page.tsx` file with your page component
3. Update navigation in `src/components/site-header.tsx` if needed

## Development

```bash
# Run development server
bun dev

# Build for production
bun run build

# Start production server
bun start

# Lint code
bun run lint
```

## Support

For questions or support, contact: admin@torahmathews.com

## License

© 2025 Torah Mathews. All rights reserved.
