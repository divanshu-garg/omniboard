# Omniboard

A feature-rich, responsive admin dashboard application built with React and Syncfusion components. This project demonstrates modern React development practices including context API, routing, theming, and complex UI components.

![Dashboard Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Syncfusion](https://img.shields.io/badge/Syncfusion-orange?style=for-the-badge)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 🚀 Features

### Core Functionality
- **Dynamic Theming System** - Multiple color themes with light/dark mode support
- **Persistent Theme Settings** - User preferences saved in localStorage
- **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- **Context API State Management** - Efficient global state management

### Dashboard Components
- **📊 Interactive Charts** - Line, Area, Bar, Pie, Financial, and Pyramid charts
- **📅 Calendar** - Full-featured calendar with event management
- **📋 Kanban Board** - Drag-and-drop task management
- **📈 Data Tables** - Advanced data grids with sorting, filtering, and pagination
- **👥 Employee Management** - Sample employee data with CRUD operations
- **🛍️ E-commerce Features** - Orders, customers, and product management

### UI Components
- **🛒 Shopping Cart** - Interactive cart with item management
- **💬 Chat Interface** - Messaging component with user interactions
- **🔔 Notifications** - Real-time notification center
- **👤 User Profile** - User settings and profile management
- **🎨 Color Picker** - Theme customization tool

## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **React Router DOM** - Client-side routing and navigation
- **Context API** - State management across components
- **Syncfusion React Components** - Premium UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for UI elements

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/divanshu-garg/omniboard.git
cd omniboard
```

2. Install dependencies
```bash
npm install
```
3. add environment variables


4. Start the development server
```bash
npm start
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## 📁 Project Structure

```
react-admin-dashboard/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Cart.jsx
│   │   ├── Chat.jsx
│   │   ├── Notification.jsx
│   │   ├── UserProfile.jsx
│   │   ├── Charts/        # Chart components
│   │   └── ...
│   ├── contexts/          # Context API providers
│   │   └── ContextProvider.js
│   ├── pages/             # Main application pages
│   │   ├── Dashboard.jsx
│   │   ├── Calendar.jsx
│   │   ├── Kanban.jsx
│   │   ├── Employees.jsx
│   │   └── ...
│   ├── data/              # Dummy data and configurations
│   │   └── dummy.js
│   ├── assets/            # Images and static files
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
└── package.json
```

## 🎨 Key Features Demonstrated

### State Management
- Implemented Context API for global state management
- Custom hooks for accessing application state
- Efficient component re-rendering optimization

### Routing
- React Router DOM for navigation
- Protected routes and nested routing
- Dynamic route parameters

### Theme System
- Multiple pre-defined color themes
- Light and dark mode toggle
- Theme persistence using localStorage
- Dynamic style injection

### Component Architecture
- Reusable, modular components
- Props-based configuration
- Composition patterns
- Conditional rendering

## 🖼️ Pages & Components

### Main Pages
- **Dashboard** - Overview with key metrics and charts
- **E-commerce** - Orders, products, and customer management
- **Employees** - Employee directory and management
- **Calendar** - Event scheduling and management
- **Kanban** - Task board with drag-and-drop
- **Editor** - Rich text editor integration
- **Color Picker** - Theme customization tool

### Data Visualizations
- Line Chart
- Area Chart
- Bar Chart
- Pie Chart
- Financial Chart
- Color Mapping
- Pyramid Chart
- Stacked Chart

## 📝 Learning Outcomes

This project demonstrates proficiency in:
- Modern React development (Hooks, Context API)
- Component-based architecture
- State management patterns
- Client-side routing
- Third-party library integration
- Responsive web design
- CSS frameworks (Tailwind)
- Local storage API
- Code organization and structure

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication and authorization
- [ ] Real-time data updates
- [ ] Database connectivity
- [ ] Advanced data filtering and search
- [ ] Export data functionality
- [ ] User role management
- [ ] Email notifications
- [ ] Advanced analytics

## 🤝 Contributing

This is a portfolio project, but suggestions and feedback are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- Email: Divanshugarg49@gmail.com
- GitHub: [@divanshu-garg](https://github.com/divanshu-garg)
- LinkedIn: [Divanshu Garg](https://www.linkedin.com/in/itsdivanshugarg/)

## 🙏 Acknowledgments

- [Syncfusion](https://www.syncfusion.com/) for the comprehensive React UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library

---

⭐ If you found this project helpful, please consider giving it a star!