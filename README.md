# 📊 Data Binding in React Pivot Table Component

[![License](https://img.shields.io/badge/license-SEE%20LICENSE-blue.svg)](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf)
[![React](https://img.shields.io/badge/React-18.0-61DAFB.svg)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Syncfusion EJ2](https://img.shields.io/badge/Syncfusion%20EJ2-Latest-0078D4.svg)](https://www.syncfusion.com/)

> **Quick-start React project demonstrating local and remote data binding to Syncfusion's powerful PivotTable component with TypeScript support** — includes practical JSON binding examples, remote data source integration patterns, and production-ready component configuration.

## 🔍 Overview

This repository provides a comprehensive, production-ready example for implementing **data binding in React Pivot Table components** using Syncfusion's EJ2 library. Whether you're building business intelligence dashboards, financial reporting tools, or data analytics applications, this project demonstrates modern React best practices for dynamic data visualization.

### ✨ Key Features

- ✅ **Local Data Binding**: Bind JSON data directly to pivot table components
- ✅ **Remote Data Binding**: Connect to external API data sources with dynamic loading
- ✅ **Syncfusion EJ2 Library**: Leverages feature-rich React components from Syncfusion
- ✅ **TypeScript Support**: Full type-safe development with modern React patterns
- ✅ **Responsive Design**: Optimized for desktop and tablet viewports
- ✅ **Production Ready**: Configured with best practices and clean code structure
- ✅ **Quick Start Setup**: Easy-to-follow configuration with zero-config execution

## 📋 Prerequisites

- **Node.js**: LTS v18 or higher — [Download](https://nodejs.org/)
- **npm**: v9 or higher (included with Node.js)
- **React**: v18 or higher
- **TypeScript**: v5 or higher
- **Visual Studio Code**: Latest stable version (recommended)

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/SyncfusionExamples/data-binding-in-react-pivot-table-component.git
cd data-binding-in-react-pivot-table-component
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm start
```

The application will automatically open at `http://localhost:3000`.

## 🎯 Quick Start Examples

### Local Data Binding

Bind JSON data directly to your pivot table:

```typescript
import { PivotViewComponent, Inject, PivotFieldList } from '@syncfusion/ej2-react-pivotview';

const data = [
  { ProductID: 1, ProductName: 'Laptop', Amount: 5000, Region: 'North' },
  { ProductID: 2, ProductName: 'Desktop', Amount: 3500, Region: 'South' }
];

export function LocalDataBinding() {
  return (
    <PivotViewComponent dataSource={data} height="400">
      <Inject services={[PivotFieldList]} />
    </PivotViewComponent>
  );
}
```

### Remote Data Binding

Connect to external data sources:

```typescript
const dataSource = {
  url: 'https://api.example.com/data',
  adaptor: new JsonAdaptor()
};

<PivotViewComponent dataSource={dataSource} height="400">
  <Inject services={[PivotFieldList]} />
</PivotViewComponent>
```

## 🗂️ Project Structure

```
data-binding-in-react-pivot-table-component/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── App.test.tsx            # Component tests
│   ├── index.tsx               # React entry point
│   ├── index.css               # Global styles
│   ├── csvdata.ts              # Sample CSV data
│   ├── data.js                 # Sample JSON data
│   └── reportWebVitals.ts      # Performance metrics
├── public/
│   ├── index.html              # HTML template
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots file
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 💡 Usage & Examples

### Running Data Binding Examples

The project includes comprehensive examples for both local and remote data binding patterns. Explore the component implementations to understand:

- How to structure pivot table configurations
- Binding data from JSON sources
- Connecting to REST APIs
- Handling dynamic data updates
- Configuring rows, columns, and values

### Sample Data Files

- **csvdata.ts**: Pre-configured CSV data for pivot table examples
- **data.js**: JSON formatted sample data for local binding demonstrations

## ⚙️ Configuration

### Available Scripts

- `npm start` — Start the development server
- `npm test` — Run test suite
- `npm run build` — Build production bundle
- `npm run eject` — Eject Create React App (not reversible)

### Environment Configuration

Configure data sources and API endpoints in your component files:

```typescript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const DATA_SOURCE_URL = `${API_BASE_URL}/api/data`;
```

## 🔧 Troubleshooting

**Port already in use?**
```bash
npm start -- --port 3001
```

**Syncfusion license key issues?**
Check Syncfusion documentation for registration: https://www.syncfusion.com/products/react

**Data not displaying?**
Verify data structure matches expected schema and check browser console for errors.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

## 📄 License

This project is licensed under the **Syncfusion Community License**. See [Syncfusion License](https://www.syncfusion.com/content/downloads/syncfusion_license.pdf) for details.

## 📚 Resources

- [Syncfusion React Documentation](https://www.syncfusion.com/react-components)
- [React Official Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Pivot Table Component Guide](https://ej2.syncfusion.com/react/documentation/pivotview/getting-started)

## 🆘 Support

For issues, questions, or suggestions:
- 📧 Open an issue on GitHub
- 💬 Check existing documentation
- 🌐 Visit Syncfusion support forums

---
