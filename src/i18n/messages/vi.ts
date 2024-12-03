const messages = {
    common: {
        appName: "FinIQ",
        darkMode: "Chế độ tối",
        lightMode: "Chế độ sáng",
        language: "Ngôn ngữ",
        loading: "Đang tải...",
        error: "Lỗi",
        retry: "Thử lại",
    },
    nav: {
        dashboard: "Bảng điều khiển",
        assistant: "Trợ lý AI",
        learning: "Học tập",
        goals: "Mục tiêu",
        profile: "Hồ sơ",
    },
    footer: {
        description:
            "Trao quyền cho hành trình tài chính của bạn với những hiểu biết và giáo dục từ AI.",
        features: "Tính Năng",
        resources: "Tài Nguyên",
        blog: "Blog",
        support: "Hỗ Trợ",
        legal: "Pháp Lý",
        privacy: "Chính Sách Bảo Mật",
        terms: "Điều Khoản Dịch Vụ",
        rights: "Đã đăng ký bản quyền",
    },
    auth: {
        signIn: "Đăng nhập",
        signUp: "Đăng ký",
        signOut: "Đăng xuất",
        email: "Email",
        password: "Mật khẩu",
        name: "Họ và tên",
        forgotPassword: "Quên mật khẩu?",
        noAccount: "Chưa có tài khoản?",
        hasAccount: "Đã có tài khoản?",
        signInDescription: "Chào mừng trở lại! Vui lòng đăng nhập để tiếp tục.",
        signUpDescription:
            "Tạo tài khoản để bắt đầu hành trình tài chính của bạn.",
        errors: {
            signIn: "Email hoặc mật khẩu không hợp lệ. Vui lòng thử lại.",
            signUp: "Không thể tạo tài khoản. Vui lòng thử lại.",
            emailExists: "Email này đã được sử dụng.",
            invalidEmail: "Vui lòng nhập địa chỉ email hợp lệ.",
            passwordLength: "Mật khẩu phải có ít nhất 8 ký tự.",
            required: "Trường này là bắt buộc.",
        },
        success: {
            signUp: "Tạo tài khoản thành công! Vui lòng đăng nhập.",
        },
        passwordRequirements: "Mật khẩu phải có ít nhất 8 ký tự",
        termsAgree:
            "Bằng cách đăng ký, bạn đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của chúng tôi",
    },
    home: {
        hero: {
            title: "Làm Chủ Trí Tuệ Tài Chính",
            subtitle:
                "Học cách xây dựng tài sản như người giàu với hướng dẫn từ AI dựa trên nguyên tắc của Rich Dad Poor Dad",
            startTrial: "Dùng thử miễn phí",
            viewDemo: "Xem thử",
        },
        features: {
            title: "Tính Năng Nổi Bật",
            financialEducation: {
                title: "Giáo Dục Tài Chính",
                description:
                    "Học các khái niệm tài chính cốt lõi thông qua các bài học tương tác dựa trên nguyên tắc Rich Dad Poor Dad",
            },
            aiAssistant: {
                title: "Trợ Lý AI",
                description:
                    "Nhận tư vấn tài chính cá nhân hóa và câu trả lời cho câu hỏi của bạn 24/7",
            },
            assetManagement: {
                title: "Quản Lý Tài Sản",
                description:
                    "Theo dõi tài sản và nợ, hiểu rõ mô hình dòng tiền của bạn",
            },
            goalSetting: {
                title: "Thiết Lập Mục Tiêu",
                description:
                    "Đặt và theo dõi các mục tiêu tài chính với các bước và cột mốc cụ thể",
            },
        },
        howItWorks: {
            title: "Cách Thức Hoạt Động",
            steps: [
                {
                    title: "Tạo Tài Khoản",
                    description: "Đăng ký và hoàn thành đánh giá tài chính",
                },
                {
                    title: "Đặt Mục Tiêu",
                    description: "Xác định mục tiêu và thời gian thực hiện",
                },
                {
                    title: "Học và Thực Hành",
                    description: "Tiếp cận các bài học và thực hiện chiến lược",
                },
                {
                    title: "Theo Dõi Tiến Độ",
                    description: "Giám sát tiến trình và điều chỉnh chiến lược",
                },
            ],
        },
        testimonials: {
            title: "Câu Chuyện Thành Công",
            stories: [
                {
                    quote: "Nền tảng này giúp tôi hiểu rõ sự khác biệt giữa tài sản và nợ.",
                    author: "Sarah J.",
                    role: "Chủ Doanh Nghiệp Nhỏ",
                },
                {
                    quote: "Trợ lý AI cung cấp lời khuyên thiết thực và dễ hiểu.",
                    author: "Michael R.",
                    role: "Nhà Đầu Tư Bất Động Sản",
                },
            ],
        },
        cta: {
            title: "Sẵn Sàng Bắt Đầu Hành Trình?",
            subtitle:
                "Tham gia cùng hàng nghìn người khác xây dựng con đường tự do tài chính",
            button: "Bắt Đầu Ngay",
        },
    },
    assistant: {
        title: "Trợ Lý Tài Chính AI",
        welcome:
            "Xin chào! Tôi là trợ lý trí tuệ tài chính của bạn. Tôi có thể giúp gì cho bạn hôm nay?",
        placeholder: "Tôi hiểu câu hỏi của bạn. Để tôi giúp bạn...",
        inputPlaceholder: "Nhập tin nhắn của bạn...",
        sending: "Đang gửi...",
        error: "Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.",
    },
} as const

export default messages
