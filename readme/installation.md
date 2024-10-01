# Installation

## CycoServe Installation Guide

Welcome to the CycoServe installation guide! This page will walk you through setting up and running CycoServe locally on your machine using **npm** and **GitHub**. We'll keep it simple for now, focusing on Firebase configuration.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Node.js** (v14.x or above)
* **npm** (v6.x or above)
* **Git** (for cloning the repository)

To check if you have them installed, run the following commands:

```bash
node -v
npm -v
git --version
```

If any of these tools are not installed, follow the [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installation guides.

### Step 1: Clone the Repository

Start by cloning the CycoServe repository from GitHub to your local machine:

```bash
git clone https://github.com/cycoserve/CycoServe.git
cd CycoServe
```

### Step 2: Install Dependencies

Once inside the project folder, install the required dependencies using **npm**:

```bash
npm install
```

This command will download and install all necessary packages listed in the `package.json` file.

### Step 3: Set Up a Firebase Project

CycoServe uses Firebase for authentication and storage. You will need to set up a Firebase project on your Firebase account before proceeding.

1. **Go to Firebase Console**: [Firebase Console](https://console.firebase.google.com/).
2. **Create a new Firebase project**: Follow the steps to create a new project.
3. **Enable Firebase services**: You will need to enable Authentication, Firestore, and Storage from the Firebase console.
4. **Obtain Firebase configuration**: Once the project is created, go to the project settings and locate your Firebase configuration keys (API key, project ID, etc.).

### Step 4: Configure Environment Variables

Next, you'll need to set up your Firebase environment variables.

1. In the root directory of your project, create a `.env.local` file.
2. Add the following environment variables with the Firebase keys from your project:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API Key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<Your Firebase App ID>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<Your Firebase Measurement ID>
```

Replace the placeholder values (`<Your Firebase API Key>`, etc.) with the actual values from your Firebase project.

### Step 5: Start the Development Server

With everything set up, you're ready to start the development server.

Run the following command:

```bash
npm run dev
```

This will start the server, and you can view the app by navigating to:

```
http://localhost:3000
```

### Step 6: Build the Project for Production (Optional)

If you'd like to prepare the app for production, run:

```bash
npm run build
```

This will create an optimized production build of the app.

### Step 7: Start the Production Server (Optional)

After building, you can serve the app in production mode with:

```bash
npm run start
```

***

That's it! You've successfully installed and set up CycoServe locally. Make sure you have your Firebase project configured properly. If you encounter any issues, check our \[Support] page or reach out to the CycoServe community for help.

Stay tuned for future updates and additional deployment methods!
