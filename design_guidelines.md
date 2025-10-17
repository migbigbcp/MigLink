# Design Guidelines - Migbig Link Hub

## Design Approach: Reference-Based (User-Provided Interface)
Following the exact layout and aesthetic of the provided reference design - a gaming/content creator aesthetic with vibrant gradients and modern interactive elements.

## Core Design Elements

### A. Color Palette

**Primary Gradient Theme:**
- Base: Deep space black to dark purple (270 50% 10% to 270 40% 20%)
- Accent gradients: Electric magenta to hot pink (320 100% 50% to 340 100% 60%)
- Link button gradient: Red-orange to purple-pink (0 80% 50% → 320 80% 55% → 280 70% 60%)
- Hover states: Brighten gradients by 10-15% lightness

**Supporting Colors:**
- Text primary: Pure white (0 0% 100%)
- Text secondary: Light gray with subtle purple tint (270 10% 85%)
- Icons: White with gradient overlays matching platform brand colors

### B. Typography

**Font Families:**
- Primary: 'Poppins' (Google Fonts) - headings and buttons
- Secondary: 'Inter' (Google Fonts) - body text and counters
- Accent: Bold weights (700-800) for username, Semi-bold (600) for links

**Text Hierarchy:**
- Username: 2.5rem (40px), bold, white with subtle text-shadow
- Tagline: 1.125rem (18px), regular, light gray
- Link labels: 1.25rem (20px), semi-bold, white
- Follower counts: 0.875rem (14px), medium, light gray

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 3, 4, 6, 8, and 12
- Container padding: p-6 to p-8
- Section gaps: space-y-6 to space-y-8
- Button spacing: py-4, px-6
- Card gaps: gap-4

**Layout Structure:**
- Single column, centered design (max-w-md mx-auto)
- Vertical flow with consistent spacing
- Mobile-first responsive (full viewport on mobile, contained on desktop)

### D. Component Library

**Hero Section:**
- Full-width banner image (YouTube banner) with gradient overlay (black to transparent, top to bottom)
- Centered circular profile image (140px diameter) overlapping banner bottom
- White border (4px) on profile with subtle glow shadow
- Username and tagline stacked below profile

**Social Link Buttons:**
- Full-width rounded rectangles (rounded-2xl)
- Multi-color gradient backgrounds (unique per platform)
- Left-aligned icon (40px) with platform colors
- Center-aligned link label (white, bold)
- Right-aligned follower count in pill badge (semi-transparent white bg)
- Height: 72px minimum for touch-friendly interaction
- 8px gap between each button

**Platform-Specific Gradients:**
- YouTube: Red to dark red (0 80% 50% → 0 70% 40%)
- TikTok Principal: Cyan to pink to dark (180 100% 50% → 320 100% 50% → 280 60% 30%)
- TikTok Edit: Purple to blue (270 80% 50% → 240 80% 55%)
- Discord: Blurple to deeper blue (235 85% 65% → 235 75% 55%)

**Interactive States:**
- Hover: Scale(1.02) + brightness increase + subtle lift shadow
- Active: Scale(0.98)
- Transition: all 200ms ease-in-out

### E. Visual Effects

**Gradients:**
- Background: Radial gradient from top (purple glow) fading to near-black
- All buttons use diagonal gradients (45deg or 135deg angle)
- Subtle gradient overlays on hover states

**Shadows & Depth:**
- Profile image: 0 0 40px rgba(255,255,255,0.2)
- Link buttons: 0 4px 20px rgba(0,0,0,0.3)
- Hover elevation: 0 8px 30px rgba(0,0,0,0.4)

**Animations:**
- Entrance: Fade-in with slight slide-up for buttons (staggered 100ms delay)
- Hover: Smooth scale and glow transitions
- NO complex scroll animations - keep it simple and performant

## Images

**Banner Image:**
- Use provided YouTube banner at top (aspect ratio 16:4 approximately)
- Apply gradient overlay: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 100%)
- Position: Cover, centered

**Profile Image:**
- Circular crop of provided profile photo
- Position: Overlapping banner by 50%, centered horizontally
- Border: 4px solid white with drop shadow

**Platform Icons:**
- Use provided platform icons (YouTube, TikTok, Discord logos)
- Size: 40x40px
- Position: Absolute left within each button with 16px left margin
- Apply white filter/overlay for consistent styling

**Large Hero Image:** No - This is a compact, focused link page

## Accessibility & Performance

- All interactive elements minimum 44x44px touch targets
- High contrast white text on dark gradients (WCAG AAA)
- Semantic HTML with proper link labels
- Icons have aria-labels for screen readers
- Reduced motion alternative: Disable scale/transform animations
- Optimized image loading: WebP format with fallbacks, lazy loading for icons

## Responsive Behavior

**Mobile (< 768px):**
- Full width container with 16px side padding
- Banner height: 180px
- Profile: 120px diameter
- Buttons: Full width, 68px height

**Desktop (≥ 768px):**
- Centered container max-width: 448px (max-w-md)
- Banner height: 220px
- Profile: 140px diameter
- Buttons: Full container width, 72px height
- Additional glow effects on hover

## File Structure Note
- config.json contains: follower counts as objects {youtube: "125K", tiktok: "89K", tiktokEdit: "45K", discord: "3.2K"}
- Easy manual editing without touching HTML/CSS