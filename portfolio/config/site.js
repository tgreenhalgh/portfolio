module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Thomas Greenhalgh Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Thomas Greenhalgh Portfolio site', // Alternative Site title for SEO
  siteTitleShort: 'tgreenhalgh', // short_name for manifest
  siteHeadline: 'Full Stack Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'http://thomasgreenhalghnow.sh', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo.png', // Used for SEO and manifest
  siteDescription: 'Portfolio with cards & detailed project views',
  author: 'tgreenhalgh', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@likothecat', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // og:language
  googleAnalyticsID: 'UA-47519312-4',

  // Manifest and Progress color
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Your information
  avatar: '/logos/lekoarts.png',
  name: 'Thomas Greenhalgh',
  location: 'Santa Monica, CA',
  socialMedia: [
    {
      url: 'https://www.github.com/tgreenhalgh',
      name: 'Github',
    },
    {
      url: 'https://linkedin.com/in/tgreenhalgh',
      name: 'LinkedIn',
    },
  ],
};
