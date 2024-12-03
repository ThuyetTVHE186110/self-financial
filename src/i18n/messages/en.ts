const messages = {
    common: {
        appName: "FinIQ",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        language: "Language",
        loading: "Loading...",
        error: "Error",
        retry: "Retry",
    },
    nav: {
        dashboard: "Dashboard",
        assistant: "AI Assistant",
        learning: "Learning",
        goals: "Goals",
        profile: "Profile",
    },
    footer: {
        description:
            "Empowering your financial journey with AI-driven insights and education.",
        features: "Features",
        resources: "Resources",
        blog: "Blog",
        support: "Support",
        legal: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved",
    },
    auth: {
        signIn: "Sign In",
        signUp: "Sign Up",
        signOut: "Sign Out",
        email: "Email",
        password: "Password",
        name: "Full Name",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an account?",
        hasAccount: "Already have an account?",
        signInDescription: "Welcome back! Please sign in to continue.",
        signUpDescription: "Create an account to start your financial journey.",
        errors: {
            signIn: "Invalid email or password. Please try again.",
            signUp: "Failed to create account. Please try again.",
            emailExists: "An account with this email already exists.",
            invalidEmail: "Please enter a valid email address.",
            passwordLength: "Password must be at least 8 characters long.",
            required: "This field is required.",
        },
        success: {
            signUp: "Account created successfully! Please sign in.",
        },
        passwordRequirements: "Password must be at least 8 characters long",
        termsAgree:
            "By signing up, you agree to our Terms of Service and Privacy Policy",
    },
    home: {
        hero: {
            title: "Master Your Financial Intelligence",
            subtitle:
                "Learn to build wealth like the rich with AI-powered guidance based on Rich Dad Poor Dad principles",
            startTrial: "Start Free Trial",
            viewDemo: "View Demo",
        },
        features: {
            title: "Key Features",
            financialEducation: {
                title: "Financial Education",
                description:
                    "Learn core financial concepts through interactive lessons based on Rich Dad Poor Dad principles",
            },
            aiAssistant: {
                title: "AI Assistant",
                description:
                    "Get personalized financial advice and answers to your questions 24/7",
            },
            assetManagement: {
                title: "Asset Management",
                description:
                    "Track your assets and liabilities, understand your cash flow patterns",
            },
            goalSetting: {
                title: "Goal Setting",
                description:
                    "Set and track financial goals with actionable steps and milestones",
            },
        },
        howItWorks: {
            title: "How It Works",
            steps: [
                {
                    title: "Create Your Account",
                    description:
                        "Sign up and complete your financial assessment",
                },
                {
                    title: "Set Your Goals",
                    description:
                        "Define your financial objectives and timeline",
                },
                {
                    title: "Learn & Implement",
                    description:
                        "Access curated lessons and implement strategies",
                },
                {
                    title: "Track Progress",
                    description: "Monitor your progress and adjust strategies",
                },
            ],
        },
        testimonials: {
            title: "Success Stories",
            stories: [
                {
                    quote: "This platform helped me understand the difference between assets and liabilities.",
                    author: "Sarah J.",
                    role: "Small Business Owner",
                },
                {
                    quote: "The AI assistant provides practical advice that's easy to understand.",
                    author: "Michael R.",
                    role: "Real Estate Investor",
                },
            ],
        },
        cta: {
            title: "Ready to Start Your Journey?",
            subtitle:
                "Join thousands of others building their path to financial freedom",
            button: "Get Started Now",
        },
    },
    assistant: {
        title: "AI Financial Assistant",
        welcome:
            "Hello! I'm your financial intelligence assistant. How can I help you today?",
        placeholder: "I understand your question. Let me help you with that...",
        inputPlaceholder: "Type your message...",
        sending: "Sending...",
        error: "Sorry, there was an error processing your request. Please try again.",
    },
} as const

export default messages
