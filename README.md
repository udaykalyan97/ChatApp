# **Chat App**

This chat application is a modern, scalable, and responsive messaging platform designed to facilitate real-time communication between users. Built with React, it leverages key features like WebSocket for live messaging, React Router for seamless navigation, and a modular project structure that ensures maintainability and scalability.

The application offers functionalities such as user authentication, one-on-one and group chat rooms, real-time notifications, and comprehensive user profile management. The clean and intuitive UI is enhanced by reusable components, custom hooks, and global state management, making it easy to extend and customize.

## **Key Features**
- Real-Time Messaging: Powered by WebSocket, enabling instant communication and live updates.
- Authentication: Secure login, registration, and logout functionality using React Context and custom hooks.
- Chat Rooms: Both one-on-one and group chat capabilities, ensuring smooth conversation flow.
- Notifications: Displays real-time alerts and updates to users.
- Profile Management: Allows users to view, edit, and manage their profile settings.
- Modular Structure: Organized into features like Authentication, Chat, Notifications, and Profile, making it easy to scale and maintain.
- Reusable Components: UI components built using React for consistent and modular development.
- Custom Hooks: Provides hooks like useAuth, useSocket, and useNotifications for managing app-wide logic.

## **Technologies Used**
- React: For building the user interface and handling state.
- WebSocket: For real-time communication between users.
- React Router: For efficient routing and navigation.
- Tailwind CSS: For responsive and modern UI styling.
- Axios: For making API calls to the backend services.

## **Project Structure**
```
src/
├── assets/
│   ├── icons
├── components/
│   ├── ChatWindow
│   ├── Sidebar
├── features/
├── App.jsx
```

## **Benefits of this Structure**
1. **Separation of Concerns**: Each feature has its own folder for better organization.
2. **Scalability**: Easy to add or remove features without affecting the entire app.
3. **Reusability**: Components, hooks, and utilities can be reused across features.
4. **Maintainability**: Clear folder structure makes debugging and collaboration easier.
