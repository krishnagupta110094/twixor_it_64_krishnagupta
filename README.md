## 📂 Project Structure

The project follows a modular component-based architecture to ensure scalability and ease of maintenance.

```text
src/
├── assets/                 # Brand logos and static UI assets
│   └── images/
│
├── components/             # Reusable UI building blocks
│   ├── Navbar/             # Main navigation with search and profile
│   ├── CategoryNav/        # Sub-navigation for product categories
│   ├── Hero/               # Promotional banners with Framer Motion
│   ├── Features/           # Trust markers (Free Delivery, Cash on Delivery)
│   ├── TopCategories/      # Visual category grid
│   │
│   ├── MainProductPage/    # Compound Component for Product Listing
│   │   ├── MainProductPage.jsx   # Layout wrapper (Flexbox/Grid)
│   │   ├── Sidebar.jsx           # Dynamic filters with toggle logic
│   │   └── ProductGrid.jsx      # Product listing display
│   │
│   └── Footer/             # SEO-friendly footer links
│
├── pages/                  # Route-level components
│   └── Home.jsx            # Orchestrates all sections
│
├── data/                   # Decoupled Data Layer
│   ├── category.js         # Data for CategoryNav
│   ├── filter.js           # Configuration for Sidebar filters
│   ├── product.js          # Mock product dataset
│   └── topCategories.js    # Data for the TopCategories section
│
├── styles/
│   └── global.css          # CSS variables and global resets
│
├── App.jsx                 # Application entry point & Routing
└── main.jsx                # React DOM rendering
