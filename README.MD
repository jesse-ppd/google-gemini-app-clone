![Google Gemini App](https://imgur.com/RDLHpQT.png)

<br />

# Google Gemini App Clone - React Native (Expo)

Google Gemini App Clone is designed to bring advanced AI capabilities and conversational intelligence to a mobile interface. Built with Expo and leveraging powerful tools like the Gemini 1.5 Flash AI model and Vertex AI API, this clone app aims to replicate the most essential features of the original Google Gemini App, providing users with a seamless and intelligent experience.

## Key Features

**1. AI-Powered Conversations:**

Using the Gemini 1.5 Flash AI model, your app provides highly responsive and context-aware conversational abilities. This model excels in natural language understanding, making it ideal for applications requiring rich, human-like interactions. Users can ask questions, get detailed answers, and engage with the app as if they were speaking to a real person.
Real-Time Data Processing:

By integrating the Vertex AI API, your app can leverage real-time machine learning models for data processing, decision-making, and even predictive analysis. The API allows you to deploy, scale, and manage AI models with ease, enhancing the app’s performance and responsiveness. For example, the app can provide real-time recommendations, analyze trends, or generate creative content on the fly.

**2. Personalized Experience:**

The combination of Gemini 1.5 Flash and Vertex AI allows for a highly personalized experience. The AI model is capable of understanding user preferences and adjusting responses accordingly, creating a more tailored and relevant interaction. Whether it's responding to user queries, providing insights, or offering suggestions, the app adapts to each user's behavior.

**3. Vexter API Integration:**

The app integrates with the Vexter API for advanced data manipulation, making it possible to access vast datasets and analyze them using the AI models. This API enhances the app’s ability to handle complex data operations, such as searching large databases, retrieving specific information, and generating dynamic reports, all in real-time.

**4. Expo for Rapid Development:**

Built with Expo, the app is designed to be cross-platform, allowing you to build, test, and deploy the application on both Android and iOS using a single codebase. Expo’s development tools streamline the process, providing fast iteration and seamless debugging.

## How It Works

The Google Gemini Clone app functions as a smart assistant that users can interact with in multiple ways.

**Users can:**

1. Ask questions in natural language and get intelligent responses powered by the Gemini 1.5 Flash model. Use the app to analyze data from external sources (via the Vexter API) and get real-time insights or recommendations.

2. Access AI-generated content, such as text based on user input.

3. When a user interacts with the app, the app processes their input through the Gemini 1.5 Flash AI model via the Vertex AI API. The AI model uses its deep learning capabilities to understand the context and generate an appropriate response. Whether it’s answering questions, fetching data, or offering intelligent suggestions, the app is powered by advanced AI models hosted on Google’s cloud infrastructure.

## Technological Stack

1. **Gemini 1.5 Flash AI:** For natural language understanding and conversational intelligence.
2. **Vertex AI API:** For training, deploying, and managing machine learning models.
3. **Vexter API:** For data handling, retrieval, and analysis in real-time.
4. **Expo:** For building and managing the mobile app on both iOS and Android.
5. **Firebase:** For creating Google Cloud project and access easly the Vexter AI in web projects.
6. **React Native Skia:** High-performance 2d Graphics for React Native using Skia to be able greate the loading google gemini app component.
7. **React reanimated:** Being able make good animation on the components.
8. **Lucide:** A library to get many icons easly.

# Getting Started

### Prerequisites

We'll need the following to get started:

- Expo Go installed on a physical device or Emulator
- Node.js (LTS version) installed

## **Step 1: Clone the project**

Clone the project repository using the link below:

```bash
https://github.com/HubertRyanOfficial/google-gemini-app-clone.git
```

## **1.1 Install dependencies**

```bash
cd google-gemini-app-clone && npm install
```

---

## **Step2: Setting Up the Firebase & Vexter API**

### **2.1 Configuring Firebase Project**

1. **Go to Firebase Console**:

   - Open your browser and go to [Firebase Console](https://console.firebase.google.com/).
   - Sign in with your Google account if you’re not already signed in.

2. **Select or Create a Project**:

   - If you already have a Firebase project, select it from the project list.
   - If not, click **“Add Project”** and follow the steps to create a new project.
     - Name your project.
     - Accept the terms and click **“Create Project”**.

3. **Add a Web App**:

   - Once you're inside your project dashboard, find the **Project Overview** on the top left.
   - Click on the **“</>” (Web Icon)** to add a new web app.
   - Enter a nickname for your web app (for example, `gemini-clone-app`).
   - You can choose to set up Firebase Hosting by checking the box if you plan to use Firebase Hosting. If not, you can skip this.

4. **Register the App**:

   - Click **“Register App”**.
   - Firebase will generate your **Firebase SDK** config object. This will look like a JavaScript object with your project’s API key and other necessary details.

5. **Add Firebase SDK to Your Web Project**:

   - Copy the Firebase SDK configuration.
   - Add Environment Variables in .env File: In the root of your project, create a .env file (or follow .env.example file if you need). Then, add the Firebase configuration details like this:

   ```js
   EXPO_PUBLIC_API_KEY = "YOUR_API_KEY";
   EXPO_PUBLIC_AUTH_DOMAIN = "YOUR_PROJECT_ID.firebaseapp.com";
   EXPO_PUBLIC_DATABASE_URL = "YOUR_DATABASE_URL";
   EXPO_PUBLIC_PROJECT_ID = "YOUR_PROJECT_ID";
   EXPO_PUBLIC_STORAGE_BUCKET = "YOUR_STORAGE_BUCKET";
   EXPO_PUBLIC_MESSAGING_SENDER_ID = "YOUR_MESSAGING_SENDER_ID";
   EXPO_PUBLIC_APP_ID = "YOUR_APP_ID";
   EXPO_PUBLIC_MEASUREMENT_ID = "YOUR_MEASUREMENT_ID";
   ```

6. **Finish and Continue to Console**:
   - After registering the web app and copying the SDK, click **“Continue to Console”** to complete the process.

---

## **Step 3: Enabling the Vexter API**

- In the Google Cloud panel, select your project with the same Google Account
- Go to APIs & Services
- Click "Enable APIs and Services" and search for the Vexter API.
- Select it and click "Enable."

> Importante: You will need to start a billing account to be able to access the Vexter AI

## **Step 4: Running the project**

Now you're ready to see the project working

```
npx expo start
```

> The app was well tested using iPhone 14 emulator!

---

## **Conclusion**

You now have an Expo project set up with the Vexter API, replicating the Google Gemini App’s style.

Let me know if you need any adjustments or further assistance!
