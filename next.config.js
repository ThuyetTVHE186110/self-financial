/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com", // GitHub avatar images
            "lh3.googleusercontent.com",    // Google profile images
        ],
    },
}

module.exports = nextConfig 