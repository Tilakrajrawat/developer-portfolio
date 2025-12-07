// ================================
// FEATURED PROJECTS
// ================================
export const projects = [
    {
      title: 'AI-Based Proctoring System',
      slug: 'ai-proctoring-system',
      short: 'Next.js, Spring Boot, YOLOv8, WebRTC',
      longDesc:
        'A prototype AI-based proctoring system designed to monitor candidates during online assessments. Uses YOLOv8 to detect faces, mobile phones, and basic anomalies from live video frames. Implements real-time video streaming with WebRTC and WebSocket-based alerts, backed by a Spring Boot API for authentication, event logging, and MongoDB persistence.',
      tags: ['AI', 'Computer Vision', 'Realtime', 'Backend'],
      githubUrl: 'https://github.com/Tilakrajrawat/ai-based-proctoring-system',
      demoUrl: '',
    },
    {
      title: 'Cloud-Native MERN Application',
      slug: 'cloud-native-mern',
      short: 'Azure App Service, Docker, Cosmos DB',
      longDesc:
        'A cloud-ready MERN architecture aligned with Azure App Service deployment patterns. Features Dockerized frontend and backend services, serverless background processing using Azure Functions, and Cosmos DB (Mongo API) schema design with logical partitioning. Includes structured logging compatible with Azure Application Insights.',
      tags: ['Azure', 'Cloud', 'DevOps'],
      githubUrl: 'https://github.com/Tilakrajrawat/Cloud-Native-MERN-Azure-Platform',
      demoUrl: '',
    },
    {
      title: 'Real-Time Chat Application',
      slug: 'real-time-chat',
      short: 'MERN Stack, Socket.IO',
      longDesc:
        'A real-time chat application built using the MERN stack and Socket.IO. Supports multiple chat rooms, online presence, and typing indicators. Focuses on WebSocket event design, room-based message routing, and MongoDB schema modeling for users and conversations.',
      tags: ['Realtime', 'WebSockets', 'Full-stack'],
      githubUrl: 'https://github.com/Tilakrajrawat/Real-Time-Chat-App',
      demoUrl: '',
    },
  ];
  
  // ================================
  // ADDITIONAL PROJECTS
  // ================================
  export const moreProjects = [
    {
      title: 'DeepSeek Search Clone',
      slug: 'deepseek-clone',
      short: 'Next.js, DeepSeek API',
      longDesc:
        'A DeepSeek-inspired AI search interface focused on search UX, response streaming, and markdown rendering. Built to explore ranking presentation, client-side caching, and perceived latency improvements.',
      tags: ['Next.js', 'AI', 'UX'],
      githubUrl: 'https://github.com/Tilakrajrawat/DeepSeek-Clone',
      demoUrl: '',
    },
    {
      title: 'AI-Assisted Blog Platform',
      slug: 'ai-blog-platform',
      short: 'MERN, Gemini API',
      longDesc:
        'A full-stack blogging platform with AI-assisted content generation and editing workflows. Includes media optimization, user-managed drafts, and backend APIs for post management.',
      tags: ['MERN', 'AI', 'Content'],
      githubUrl: 'https://github.com/Tilakrajrawat',
      demoUrl: '',
    },
    {
      title: 'Accessibility Audit Tool',
      slug: 'accessibility-analyzer',
      short: 'Puppeteer, Lighthouse',
      longDesc:
        'A developer utility for running automated accessibility audits on web pages. Generates reports using Puppeteer and Lighthouse to help identify common accessibility violations.',
      tags: ['Accessibility', 'Automation', 'Testing'],
      githubUrl: 'https://github.com/Tilakrajrawat/Accessibilty-Analyer',
      demoUrl: '',
    },
    {
      title: 'Financial Data Dashboard',
      slug: 'financial-dashboard',
      short: 'Chart.js, MongoDB',
      longDesc:
        'A financial dashboard designed to visualize transactional data using interactive charts. Built to explore frontend data visualization and backend data modeling patterns.',
      tags: ['Data Visualization', 'Chart.js', 'MongoDB'],
      githubUrl: 'https://github.com/Tilakrajrawat/Personal-Financial-Dashboard',
      demoUrl: '',
    },
  ];
  
  // ================================
  // BLOG POSTS
  // ================================
  export const blogPosts = [
    {
      title: "Designing Cloud-Ready Web Applications",
      slug: "cloud-ready-web-apps",
      excerpt:
        "What I learned while building containerized, serverless-friendly MERN applications on Azure.",
      date: "Jan 2025",
      content: `
  When I initially started building full-stack applications, my primary goal was to make features work correctly in a local environment. If the application ran on my machine and the UI behaved as expected, I considered the work complete.
  
  That mindset changed when I began deploying applications to the cloud.
  
  Designing cloud-ready applications forced me to think beyond code and focus on assumptions I had unconsciously relied on — persistent servers, local storage, and predictable environments. Docker introduced the idea that applications should be portable, self-contained, and environment-agnostic. Configuration had to be explicit, and failures had to be expected.
  
  Working with Azure App Service and Azure Functions highlighted the importance of separating concerns. Not every task belongs in a synchronous API request. Background processing, scheduled jobs, and notification workflows were far better suited for serverless execution patterns.
  
  Cosmos DB (Mongo API) taught me that schema design directly impacts scalability. Partitioning is not an optimization you add later; it influences system behavior from the start. Logging and diagnostics became essential once the application moved beyond local debugging.
  
  The biggest takeaway was simple but impactful: cloud platforms do not fix architectural problems — they expose them. Designing with cloud constraints in mind leads to clearer boundaries, more resilient systems, and applications that are easier to maintain and evolve.
  `,
    },
    {
      title: "Real-Time Systems on the Web",
      slug: "real-time-web-systems",
      excerpt:
        "Lessons from building chat systems and handling state, latency, and WebSocket complexity.",
      date: "Dec 2024",
      content: `
  Real-time systems appear simple on the surface: messages update instantly, users go online and offline, and interfaces feel responsive. Building them revealed a much deeper layer of complexity.
  
  While developing a real-time chat application and later applying similar ideas in an AI-based proctoring prototype, I realized that real-time behavior is less about speed and more about coordination. WebSockets introduce persistent connections, which immediately raise questions around state management, cleanup, and fault handling.
  
  Room-based routing became necessary to control event delivery. Presence tracking required careful handling of disconnects and reconnections. Even features that look trivial — such as typing indicators — introduced challenges around timing, debouncing, and stale state.
  
  Latency was another important lesson. A predictable delay feels faster than an inconsistent one. Users tolerate slight delays if the system behaves reliably. This shifted my focus from chasing instant updates to maintaining consistency across clients.
  
  Real-time features are not just frontend enhancements — they are distributed systems problems. Building them taught me to think carefully about backend data models, event lifecycles, and the trade-offs required to keep systems responsive and stable.
  `,
    },
  ];