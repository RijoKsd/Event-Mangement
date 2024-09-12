# EventSphere

[![GitHub repo](https://img.shields.io/badge/github-RijoKsd/Event--Management-blue?style=flat-square&logo=github)](https://github.com/RijoKsd/Event-Mangement)

EventSphere is a comprehensive event management platform built with modern web technologies. It allows users to create, delete, and view events, while providing administrators with user management capabilities.

![EventSphere Dashboard](https://github.com/RijoKsd/Event-Mangement/blob/main/images/home.png)

## Features

- User authentication and authorization
- Event creation, deletion, and viewing
- Image upload for events using Cloudinary
- Admin dashboard with user management
- Responsive design for various screen sizes

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - Daisy UI
  - React Hook Form for validation
- Backend:
  - Node.js
  - Express.js
- Database:
  - MongoDB (or your chosen database)
- Image Upload:
  - Cloudinary

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RijoKsd/Event-Mangement.git
   cd Event-Mangement
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the development server:
   ```bash
   # Start backend server
   npm run server

   # In a new terminal, start frontend
   cd client
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### User Features

1. **Sign Up / Log In**: Create a new account or log in to an existing one.
   ![User Authentication](https://github.com/RijoKsd/Event-Mangement/blob/main/images/login.png)

2. **Create Event**: Fill in event details and upload an image.
   ![Create Event](https://github.com/RijoKsd/Event-Mangement/blob/main/images/create-event.png)

3. **All Events**: Browse through your events and events created by others.
   ![Event List](https://github.com/RijoKsd/Event-Mangement/blob/main/images/events.png)

4. **My Event**:  Logged user Events.
   ![My Event](https://github.com/RijoKsd/Event-Mangement/blob/main/images/my-events.png)

### Admin Features

1. **User Management**: View all users, suspend, remove, or activate user accounts.
   ![Admin Dashboard](https://github.com/RijoKsd/Event-Mangement/blob/main/images/user-management.png)

2. **Analytics**: View graphs and statistics about events and users.
   ![Admin Analytics](https://github.com/RijoKsd/Event-Mangement/blob/main/images/dashboard.png)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Contact

Rijo Sebastian - [GitHub](https://github.com/RijoKsd)

Project Link: [https://github.com/RijoKsd/Event-Mangement](https://github.com/RijoKsd/Event-Mangement)
