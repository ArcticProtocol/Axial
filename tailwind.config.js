module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing": "url('/public/bg-landing.jpg')",
        "bg-project-banner": "url('/public/project-bg-banner.jpg')",
        "green-spirals": "url('/public/green-spirals.jpg')",
      },
    },
  },
  plugins: [],
};
