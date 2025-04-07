# Geoportal React

Project live: https://geoportal-kk.netlify.app/

A modern web-based geoportal application built with React and Vite that allows visualization and interaction with geospatial data.

## Technologies Used

- React 
- TypeScript
- Vite
- OpenLayers (for map visualisation)
- Three.js (for 3D visualization)
- Potree (for point cloud rendering)
- LASzip/LAZ-perf (for LiDAR data handling)
- GeoPackage
- Proj4js (for coordinate transformations)

Map data hosted on Firebase

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone the repository:
```sh
git clone https://github.com/kornelkwak/geoportal-react.git
cd geoportal-react
```

2. Install dependencies:
```sh
npm install
```

## Development

To start the development server:

```sh
npm run dev
```

This will start the Vite development server with hot module replacement (HMR).

## Building for Production

To create a production build:

```sh
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
geoportal-react/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── constants/       # Application constants
│   ├── utils/          # Utility functions
│   ├── view/           # View components
│   └── main.tsx        # Application entry point
├── .babelrc            # Babel configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Features

- 3D visualization of geospatial data
- Point cloud rendering
- Vector data support
- Coordinate system transformations
- Layer management
- Interactive map controls

## Configuration

The application can be configured through various configuration files:

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript compiler options
- `babel.config.ts` - Babel transpilation settings

## License

Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License

All rights reserved. You may not copy, modify, or use the content of this project for commercial purposes without the author's consent. The project may only be used for non-commercial purposes.
