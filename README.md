# Dealer Dashboard

A comprehensive React-based dealer management dashboard with advanced reporting and user interface features.

## Project Overview

The Dealer Dashboard is a modern, responsive web application built using React, TypeScript, and Material-UI. It provides dealers with tools to manage sellers, track earnings, and generate reports.

## Tech Stack

- React 18.2.0
- TypeScript
- Material-UI (MUI) 5.15.10
- React Router 6.22.1
- @mui/x-date-pickers
- date-fns

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd dealer-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Development Approach

### Architecture

The project follows a component-based architecture with the following structure:

```
src/
├── components/
│   ├── common/         # Reusable components
│   └── layout/         # Layout components (Header, Sidebar)
├── pages/              # Page components
├── theme/              # MUI theme configuration
└── utils/              # Utility functions
```

### Key Features

1. **Dashboard Overview**
   - Total sellers count
   - Total earnings
   - Dealer code display
   - Quick access to dealer agreement

2. **Seller Management**
   - Seller listing with search
   - Detailed seller information
   - Seller status tracking

3. **Report Generation**
   - Monthly reports
   - Yearly reports
   - Custom date range reports
   - Multiple download formats

4. **Multilingual Support**
   - English and Hindi language options
   - Native language display
   - Language switcher in header

## Validations

### Form Validations
1. **Seller Information**
   - Required field validation
   - Email format validation
   - Phone number format validation
   - Unique seller ID validation

2. **Report Generation**
   - Date range validation
   - Required field validation
   - File format validation

3. **Search Functionality**
   - Minimum character length
   - Special character handling
   - Case-insensitive search

## Responsive Design

### Breakpoints

The application uses Material-UI's default breakpoints with custom configurations:

```typescript
xs: 0,     // Mobile phones (portrait)
sm: 600,   // Mobile phones (landscape) / Tablets
md: 900,   // Tablets (landscape) / Small desktops
lg: 1200,  // Desktops
xl: 1536   // Large desktops
```

### Responsive Components

1. **Dashboard Cards**
   - xs: 1 card per row
   - sm: 2 cards per row
   - md: 4 cards per row

2. **Sellers Table**
   - Horizontal scroll on small screens
   - Responsive column hiding
   - Adaptive pagination controls

3. **Report Download Modal**
   - Full screen on mobile
   - Centered dialog on larger screens
   - Responsive grid for month/year selection

4. **Navigation**
   - Collapsible sidebar on mobile
   - Persistent sidebar on desktop
   - Responsive header with adaptive menu

## Best Practices

1. **Performance Optimization**
   - Lazy loading of components
   - Memoization of expensive computations
   - Optimized re-renders using React.memo

2. **Code Quality**
   - TypeScript for type safety
   - ESLint for code quality
   - Prettier for code formatting

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast compliance

4. **State Management**
   - React hooks for local state
   - Context API for global state
   - TypeScript interfaces for type safety

## Future Enhancements

1. Backend API integration
2. Advanced authentication system
3. Real-time notifications
4. Enhanced reporting features
5. Performance monitoring
6. Unit and integration tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
