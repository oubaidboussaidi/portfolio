# 🏋️ GymApp - Complete Fitness Management System

A comprehensive, role-based fitness management platform built with Next.js, TypeScript, and MongoDB. This application provides a complete ecosystem for gyms to manage clients, coaches, workout programs, nutrition tracking, and personal fitness analytics.

![Landing Page](./screenshots/1st%20page%20(dark%20mode).png)

## 📋 Table of Contents

- [Features Overview](#features-overview)
- [Technology Stack](#technology-stack)
- [User Roles & Capabilities](#user-roles--capabilities)
  - [Client Role](#1-client-role)
  - [Coach Role](#2-coach-role)
  - [Admin Role](#3-admin-role)
- [Detailed Page Breakdown](#detailed-page-breakdown)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Authentication & Security](#authentication--security)

---

## 🎯 Features Overview

GymApp is a comprehensive fitness management system that provides:

- **Role-Based Access Control**: Three distinct user roles (Client, Coach, Admin) with specific permissions
- **Personalized Workout Programs**: Custom program creation and assignment by coaches
- **Nutrition Tracking**: Complete calorie and macro tracking for clients
- **Progress Analytics**: Visual charts and statistics to monitor fitness progress
- **Client-Coach Management**: Coaches can manage multiple clients and assign programs
- **Administrative Tools**: User management, program oversight, and system analytics
- **Dark Mode Support**: Full dark/light theme toggle across all interfaces
- **Responsive Design**: Mobile-friendly interface for on-the-go access

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **Recharts** for data visualization
- **NextAuth.js** for authentication

### Backend
- **MongoDB** with Mongoose ODM
- **Next.js API Routes** for serverless functions
- **bcryptjs** for password hashing
- **JSON Web Tokens (JWT)** for session management

### Development Tools
- **ESLint** for code quality
- **TypeScript** for static typing
- **Git** for version control

---

## 👥 User Roles & Capabilities

### 1. Client Role

The **Client** role is designed for gym members who want to track their fitness journey, follow workout programs, and monitor their nutrition and progress.

#### **Client Dashboard (Aperçu)**
The main overview page displaying key fitness metrics and quick actions.

![Client Dashboard](./screenshots/appercu%20page%20(client).png)

**Features:**
- **Pinned Personal Stats**: Display up to 3 custom stats (weight, body fat %, muscle mass, etc.)
- **Active Programs Summary**: View currently enrolled workout programs
- **Quick Actions**: Fast navigation to workouts, nutrition, and progress tracking
- **Personal Records**: Track and celebrate fitness milestones
- **Recent Activity**: Overview of recent workouts and logged nutrition

**Stats Management Modal:**

![Client Stats Modal](./screenshots/appercu%20page%20mes%20stats%20popup%20(client).png)

Clients can create, edit, and delete custom stats with historical data tracking. The system enforces a maximum of 3 pinned stats for dashboard display.

---

#### **Browse Programs Page**
Explore and enroll in available workout programs created by coaches.

![Browse Programs](./screenshots/see%20programs%20page%20(client).png)

**Features:**
- View all available programs with detailed descriptions
- Filter programs by type (strength, cardio, flexibility, etc.)
- See program difficulty levels and duration
- One-click enrollment in programs
- View assigned coach information
- Program preview with exercise list

---

#### **Personal Tracker - Workouts**
Track active workout programs and log exercise sessions.

![Personal Tracker](./screenshots/personal%20tracker%20page%20(client).png)

**Features:**
- View all enrolled workout programs
- Access customizable personal workout routines
- Start workout sessions with live tracking
- Log sets, reps, and weights for each exercise
- Track workout duration and completion status
- Historical workout data for progress comparison

**Workout Program Details:**

![Workout Program](./screenshots/workout%20programs%20page%20personal%20customizable%20(client).png)

Each program displays:
- Exercise list with sets/reps/rest periods
- Progression tracking
- Personal notes and modifications
- Coach instructions and tips

---

#### **Nutrition Tracker**
Comprehensive nutrition and calorie tracking system.

![Nutrition Tracker](./screenshots/nutritions%20tracker%20(client).png)

**Features:**
- Daily calorie goal tracking
- Macronutrient breakdown (proteins, carbs, fats)
- Meal logging with timestamp
- Visual representation of daily intake vs. goals
- Historical nutrition data
- Weekly/monthly nutrition trends

**Add Nutrition Log:**

![Add Nutrition Log](./screenshots/nutrition%20page%20add%20log%20(client).png)

Easy meal logging with:
- Food name and portion size
- Calorie input
- Macro breakdown entry
- Meal type categorization (breakfast, lunch, dinner, snack)
- Quick save and duplicate previous meals

---

#### **Progress Analysis**
Visual analytics and progress tracking over time.

![Progress Analysis](./screenshots/progress%20analysis%20(client).png)

**Features:**
- Interactive charts for weight, body measurements, and strength
- Time-range selection (weekly, monthly, yearly)
- Before/after comparison tools
- Goal setting and achievement tracking
- Performance trends and insights
- Export progress reports

---

### 2. Coach Role

The **Coach** role is for fitness trainers who create programs, manage clients, and monitor their progress.

#### **Coach Dashboard (Aperçu)**
Overview of coaching activities and client management.

![Coach Dashboard](./screenshots/appercu%20page%20%20(coach).png)

**Features:**
- **Total Clients Count**: See how many clients you're coaching
- **Active Programs**: View all created programs and enrollment status
- **Client Activity Feed**: Monitor client workouts and progress
- **Quick Actions**: Fast access to create programs or manage clients
- **Recent Client Updates**: See latest client achievements and milestones
- **Program Performance**: Analytics on program completion rates

---

#### **My Programs Page**
Manage all created workout programs.

![My Programs](./screenshots/my%20programs%20page%20(coach).png)

**Features:**
- View all created programs with enrollment counts
- Edit existing programs (exercises, sets, reps, descriptions)
- Delete programs (with safeguards if clients are enrolled)
- Clone/duplicate successful programs for quick creation
- Program templates for common workout types
- Version history and changelog

---

#### **Create Program**
Intuitive program builder for coaches.

![Create Program](./screenshots/create%20program%20(coach).png)

**Features:**
- **Program Details**: Name, description, difficulty level, duration
- **Exercise Builder**: Add exercises with specific sets, reps, rest periods
- **Exercise Library**: Search from comprehensive exercise database
- **Custom Instructions**: Add coaching notes and tips for each exercise
- **Preview Mode**: See how clients will view the program
- **Save as Template**: Reuse program structures
- **Publish/Draft**: Save programs for later or publish immediately

---

#### **Manage My Clients**
Client management and program assignment.

![Manage Clients](./screenshots/manage%20my%20clients%20(coach).png)

**Features:**
- View all assigned clients with contact information
- See client activity status (active/inactive)
- Assign specific programs to individual clients
- Monitor client progress and workout completion
- Send messages and coaching tips to clients
- Remove client assignments
- Bulk program assignment to multiple clients
- Filter and search clients

---

### 3. Admin Role

The **Admin** role has full system access for managing users, programs, and viewing platform-wide analytics.

#### **Admin Dashboard (Aperçu)**
System-wide overview and quick access to management tools.

![Admin Dashboard](./screenshots/appercu%20page%20(admin).png)

**Features:**
- **Total Users**: Count of all registered users by role
- **Active Programs**: Total programs created across the platform
- **System Health**: Platform status and performance metrics
- **Recent Activity**: Latest user registrations and activities
- **Quick Actions**: Access to user management, analytics, and programs
- **Platform Statistics**: Engagement metrics and growth trends

---

#### **User Management**
Complete user administration tools.

![User Management](./screenshots/user%20management%20(admin).png)

**Features:**
- View all users (clients, coaches, admins) in a comprehensive table
- Create new users with role assignment
- Edit user details (name, email, role, status)
- Delete users with confirmation safeguards
- Promote clients to coaches or admins
- Suspend/activate user accounts
- Search and filter users by role, status, registration date
- Export user data for reports
- **Create Coach**: Dedicated form for adding new coaches

---

#### **Program Management**
Oversight of all workout programs on the platform.

![Program Management](./screenshots/prog%20management%20(admin).png)

**Features:**
- View all programs created by all coaches
- See program enrollment statistics
- Edit any program if needed
- Delete inactive or problematic programs
- Monitor program quality and content
- Feature popular programs
- Generate program performance reports

---

#### **System Analytics**
Comprehensive platform analytics and insights.

![System Analytics](./screenshots/system%20analytics%20(admin).png)

**Features:**
- **User Growth**: Registration trends over time
- **Program Engagement**: Most popular programs and enrollment rates
- **Active Users**: Daily/weekly/monthly active users
- **Retention Metrics**: User retention and churn analysis
- **Revenue Analytics**: (If premium features exist)
- **Platform Performance**: System health and usage statistics
- **Export Reports**: Generate PDF/Excel reports for stakeholders
- **Visual Dashboards**: Interactive charts using Recharts

---

## 📄 Detailed Page Breakdown

### Common Pages (All Roles)

#### **Landing Page**
The first page users see when visiting the application.

![Landing Page Dark Mode](./screenshots/1st%20page%20(dark%20mode).png)

**Features:**
- Modern, responsive design
- Dark mode support
- Clear call-to-action for registration/login
- Feature highlights and benefits
- Testimonials and social proof
- Platform overview

#### **Profile Settings**
Account management page available to all users.

![Profile Settings 1](./screenshots/profile%20settings.png)
![Profile Settings 2](./screenshots/profile%20settings%20(2).png)

**Features:**
- Update personal information (name, email, phone)
- Change password with validation
- Upload profile picture
- Set fitness goals and preferences
- Notification preferences
- Account deletion (with confirmation)
- Theme preference (dark/light mode)
- Privacy settings

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- MongoDB database (local or Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/GymApp-Nextjs.git
   cd GymApp-Nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables) section below)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### First-Time Setup

1. The application will automatically create a default admin account on first run
2. Login with the admin credentials
3. Create coaches and clients through the admin panel
4. Start creating workout programs and assigning them to clients

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/gymapp
# or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gymapp

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Additional Configuration (optional)
NODE_ENV=development
```

### Generating NEXTAUTH_SECRET

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

---

## 📁 Project Structure

```
GymApp-Nextjs/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/         # Authentication endpoints
│   │   │   └── users/        # User management endpoints
│   │   ├── dashboard/        # Protected dashboard routes
│   │   │   ├── admin/        # Admin-specific pages
│   │   │   │   ├── analytics/
│   │   │   │   ├── programs/
│   │   │   │   └── users/
│   │   │   ├── client/       # Client-specific pages
│   │   │   │   ├── browse/
│   │   │   │   └── tracker/
│   │   │   │       ├── nutrition/
│   │   │   │       ├── progress/
│   │   │   │       └── workouts/
│   │   │   ├── coach/        # Coach-specific pages
│   │   │   │   ├── programs/
│   │   │   │   └── students/
│   │   │   └── profile/      # Shared profile page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   ├── components/           # Reusable components
│   │   ├── auth/
│   │   ├── charts/
│   │   ├── dashboard/
│   │   ├── tracker/
│   │   └── ui/               # Shadcn components
│   ├── lib/                  # Utilities and helpers
│   │   ├── db.ts             # Database connection
│   │   └── auth.ts           # Auth configuration
│   ├── models/               # MongoDB schemas
│   │   ├── User.ts
│   │   ├── Program.ts
│   │   └── Workout.ts
│   ├── actions/              # Server actions
│   ├── types/                # TypeScript types
│   └── providers/            # Context providers
├── public/                   # Static assets
├── .env                      # Environment variables
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔒 Authentication & Security

### Role-Based Access Control (RBAC)

The application implements strict RBAC:

- **Clients** can only access their own data, browse programs, and track personal fitness
- **Coaches** can manage their assigned clients and create/edit their own programs
- **Admins** have full platform access for user and system management

### Security Features

- **Password Hashing**: bcryptjs with salt rounds for secure password storage
- **JWT Sessions**: NextAuth.js handles secure session management
- **Protected Routes**: Middleware ensures only authenticated users access dashboard
- **Role Validation**: API routes validate user roles before operations
- **CSRF Protection**: Built-in Next.js CSRF token handling
- **Input Sanitization**: MongoDB injection prevention
- **Secure Headers**: Next.js security headers configured

### Middleware Protection

All `/dashboard/*` routes are protected by NextAuth middleware, automatically redirecting unauthenticated users to the login page.

---

## 📊 Database Schema

### User Model
```typescript
{
  name: string
  email: string (unique)
  password: string (hashed)
  role: 'client' | 'coach' | 'admin'
  phoneNumber?: string
  profilePicture?: string
  createdAt: Date
  updatedAt: Date
}
```

### Program Model
```typescript
{
  name: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number (weeks)
  createdBy: ObjectId (Coach)
  exercises: [
    {
      name: string
      sets: number
      reps: number
      rest: number (seconds)
      instructions: string
    }
  ]
  enrolledClients: [ObjectId]
  createdAt: Date
  updatedAt: Date
}
```

### Workout Model
```typescript
{
  clientId: ObjectId
  programId: ObjectId
  date: Date
  exercises: [
    {
      exerciseId: ObjectId
      setsCompleted: number
      repsCompleted: [number]
      weightUsed: [number]
    }
  ]
  duration: number (minutes)
  notes: string
}
```

---

## 🎨 Theme & Design

- **Design System**: Consistent color palette and typography
- **Dark Mode**: Full dark theme support with system preference detection
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 AA compliant
- **Component Library**: Shadcn/ui for consistent, customizable components

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📧 Contact

For questions or support, please contact:
- **Email**: support@gymapp.com
- **GitHub Issues**: [Create an issue](https://github.com/yourusername/GymApp-Nextjs/issues)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Authentication via [NextAuth.js](https://next-auth.js.org/)

---

**Made with ❤️ for fitness enthusiasts and gym management**
