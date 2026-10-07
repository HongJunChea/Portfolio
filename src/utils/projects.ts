export enum ProjectCategory {
  GAMES = "games",
  WEB = "web",
  GRAPHICS = "graphics",
  MOBILE = "mobile",
  AI = "ai",
  SYSTEMS = "systems",
  VR = "vr"
}

export enum CodeLinkIcon {
  FRONTEND = "🎨",
  BACKEND = "⚙️",
  CLI = "💻",
  FULLSTACK = "🌐",
  TOOLS = "🛠️"
}

export interface CodeLink {
  label: string;
  url: string;
  icon: CodeLinkIcon;
}

export interface ModelResult {
  model: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
}

export interface ProjectPresentation {
  event: string;
  role: string;
  dates: string;
  venue: string;
  certificateUrl: string;
}

export interface ProjectEvaluation {
  contribution: string;
  methodology: string[];
  testSamples: number;
  boundarySamples: number;
  results: ModelResult[];
  boundaryResults: ModelResult[];
  findings: string;
  limitations: string[];
}

export interface project {
  id: string;
  title: string;
  cover: string;
  screenshots?: { src: string; label: string }[];
  tags: string[];
  code_links?: CodeLink[];
  deploy_link: string;
  video_link?: string;
  desc: string;
  longDesc?: string;
  categories?: ProjectCategory[];
  features?: string[];
  techDetails?: string[];
  evaluation?: ProjectEvaluation;
  presentation?: ProjectPresentation;
}

export const projects: project[] = [
  {
    id: "parallel-qoi",
    title: "Parallel QOI",
    cover: `${import.meta.env.BASE_URL}assets/projects/parallel-qoi-convert.png`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/parallel-qoi-convert.png`, label: "Convert: source and decoded-pixel validation" },
      { src: `${import.meta.env.BASE_URL}assets/projects/parallel-qoi-compare.png`, label: "Compare: backend configuration and performance metrics" }
    ],
    tags: ["c++", "cuda", "openmp", "mpi", "electron", "react", "pdc"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/parallel-qoi", icon: CodeLinkIcon.CLI }],
    deploy_link: "#",
    desc: "A two-pass, lossless QOI encoder comparing OpenMP, CUDA, and MPI against a Serial baseline, with an Electron dashboard.",
    longDesc: "A Parallel and Distributed Computing group project that tackles QOI's sequential state dependencies with a two-pass method. Segments first summarize state changes; ordered propagation then prepares their entry states for concurrent encoding and ordered output assembly. The result is a standards-compliant .qoi file. A React and Electron dashboard supports image conversion, decoded previews, and backend comparisons. The project report validates all 2,848 images per evaluated backend and separates Pass 2 performance from complete pipeline costs, including state propagation, transfers, and communication.",
    categories: [ProjectCategory.SYSTEMS],
    features: ["Standards-compliant lossless RGB/RGBA QOI encoding", "Serial baseline and OpenMP, CUDA, and MPI backends", "Two-pass state summaries, entry-state propagation, and parallel encoding", "Convert interface with source and decoded-image pixel validation", "Compare interface with runtime, throughput, and phase breakdown charts", "Reproducible tuning and full-suite evaluation on 2,848 images per backend"],
    techDetails: ["C++ native backends built with CMake", "OpenMP shared-memory parallelism and MPI process communication", "CUDA device-side state propagation, CUB prefix scan, and payload compaction", "Ordered variable-length output assembly and official-decoder pixel validation", "Electron main process runs native executables; React presents JSON results", "Benchmark timing excludes dashboard rendering and distinguishes Pass 2 from the core pipeline"]
  },
  {
    id: "cgt-assignment",
    title: "Personality-Modulated NPC Emotion Dynamics for Game Dialogue",
    presentation: {
      event: "International Joint Student Research Symposium 2026",
      role: "Presenter",
      dates: "21–25 September 2026",
      venue: "BINUS University, Indonesia",
      certificateUrl: `${import.meta.env.BASE_URL}assets/certificates/ijsrs-2026-presenter.pdf`
    },
    cover: `${import.meta.env.BASE_URL}assets/projects/npc-emotion-dialogue.png`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/npc-emotion-dialogue.png`, label: "Positive dialogue and real-time NPC emotional feedback" },
      { src: `${import.meta.env.BASE_URL}assets/projects/npc-emotion-response.png`, label: "Negative dialogue with current emotion and long-term mood" },
      { src: `${import.meta.env.BASE_URL}assets/projects/npc-emotion-settings.png`, label: "Emotion memory, decay settings, and input validation" }
    ],
    tags: ["unity", "c#", "ai", "vad", "big five", "sentis", "navmesh"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/CGT-Assignment", icon: CodeLinkIcon.TOOLS }],
    deploy_link: "#",
    desc: "A Unity dialogue prototype where Big Five personality, conversational context, and emotional memory shape NPC reactions.",
    longDesc: "A Unity-based group research prototype for personality-modulated NPC emotions in natural-language game dialogue. Player utterances are encoded into Valence-Arousal-Dominance (VAD) values, smoothed against recent dialogue, and modulated by the NPC's Big Five (OCEAN) personality. Timestamped emotional memory and configurable decay combine immediate reactions with a persistent mood. Centroid-based classification maps the continuous state to emotion labels for animation and visual feedback. The study reports identical outputs across three trials for each of 20 profile-input conditions, while different personalities produce distinct response intensities. Longer sessions revealed memory growth, making memory management and larger multi-NPC evaluations areas for future work.",
    categories: [ProjectCategory.GAMES, ProjectCategory.AI],
    features: ["Natural-language player dialogue converted into continuous VAD values", "Big Five personality profiles modulate emotional sensitivity", "Dialogue-context smoothing reduces abrupt emotional changes", "Time-decayed emotional memory and configurable long-term mood", "Real-time emotion rankings, VAD indicators, and personality radar", "Configurable emotion categories, animation feedback, and input validation"],
    techDetails: ["Unity URP and C# gameplay components", "Sentiment-based TwitterSentimentVAD pipeline with Unity inference", "Exponential moving average for dialogue-context smoothing", "OCEAN-to-VAD sensitivity mapping and timestamped emotion memory", "Centroid-distance emotion classification with softmax normalization", "NavMesh character movement and Animator / emoji presentation"]
  },
  {
    id: "vr-assignment",
    title: "The Climb3",
    cover: `${import.meta.env.BASE_URL}assets/projects/vr-menu.png`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/vr-menu.png`, label: "Main menu — 00:22" },
      { src: `${import.meta.env.BASE_URL}assets/projects/vr-climbing.png`, label: "Castle level traversal — 10:52" },
      { src: `${import.meta.env.BASE_URL}assets/projects/vr-grabbing.png`, label: "VR hand grabbing — 10:30" },
      { src: `${import.meta.env.BASE_URL}assets/projects/vr-results.png`, label: "Stage leaderboard — 13:30" }
    ],
    tags: ["unity", "c#", "vr", "openxr", "xr interaction toolkit"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/VR-Assignment", icon: CodeLinkIcon.TOOLS }],
    deploy_link: "#",
    video_link: "https://youtu.be/MqeesJxqzsM",
    desc: "An interactive VR experience combining climbing, stamina management, object interaction, and painting.",
    longDesc: "A Unity virtual reality assignment with climbing mechanics, checkpoints, hand stamina feedback, and timed progression. Interaction systems include grabbable objects and painting tools with a color palette and eraser. Built with XR Interaction Toolkit and OpenXR support.",
    categories: [ProjectCategory.GAMES, ProjectCategory.VR],
    features: ["VR climbing with stamina feedback and checkpoints", "Climb timer, data logging, and leaderboard UI", "Grabbable objects and interactive consumables", "Painting tools with color selection and VR eraser", "Tutorial flow, narration, and audio feedback"],
    techDetails: ["Unity URP and C# gameplay scripts", "XR Interaction Toolkit and OpenXR", "Oculus XR and Meta XR audio packages", "Custom climbing, painting, and stamina components"]
  },
  {
    id: "cgp-assignment",
    title: "Fly Me 2 The Earth",
    cover: `${import.meta.env.BASE_URL}assets/projects/fly-me-menu.png`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/fly-me-menu.png`, label: "Main menu" },
      { src: `${import.meta.env.BASE_URL}assets/projects/fly-me-gameplay.png`, label: "Spaceflight gameplay with asteroids and linked portals" },
      { src: `${import.meta.env.BASE_URL}assets/projects/fly-me-pause.png`, label: "Pause menu with resume and restart controls" }
    ],
    tags: ["c++", "directx 9", "physics", "fmod", "directinput"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/CGP_Assignment", icon: CodeLinkIcon.TOOLS }],
    deploy_link: "#",
    desc: "A C++ game showcasing my reusable components built on DirectX 9: sprite rendering, animation, UI, input, physics, and scene management.",
    longDesc: "My focus in this project was implementing reusable C++ game components directly on DirectX 9 and Win32. I built a GameObject abstraction for texture loading, sprite-sheet animation, transforms, and rendering; interactive Button, Label, and UI components; and supporting systems for DirectInput, physics, scene transitions, timing, and FMOD audio. Fly Me 2 The Earth brings these components together in a playable spaceflight game, demonstrating how the rendering and gameplay systems work together through asteroid navigation, linked portals, a countdown, and pause / restart controls.",
    categories: [ProjectCategory.GAMES, ProjectCategory.GRAPHICS],
    features: ["Reusable GameObject component for textures, transforms, and sprite-sheet animation", "Custom Button, Label, and UI components with hit testing and click callbacks", "Scene manager for initialization, transitions, pause, resume, and restart", "DirectInput wrapper for keyboard and mouse interaction", "PhysicsBody component for forces, velocity, acceleration, and collision response", "Frame timing, gameplay countdown, and FMOD sound management", "Playable spaceflight game integrating the custom components"],
    techDetails: ["Direct3D 9 device setup and Win32 window / message handling", "D3DX sprite rendering with position, pivot, scale, rotation, and texture regions", "Sprite-sheet frame selection and explicit texture resource cleanup", "GameObject and PhysicsBody composition for gameplay entities", "Game scene lifecycle and shared SceneContext for rendering, input, audio, and UI", "DirectInput device acquisition and per-frame keyboard / mouse state polling", "Fixed timestep updates and FMOD background / positional audio"]
  },
  {
    id: "accounting-mobile-app",
    title: "Accounting Mobile App",
    cover: `${import.meta.env.BASE_URL}assets/projects/accounting-mobile-app.jpg`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/accounting-mobile-app.jpg`, label: "Home" },
      { src: `${import.meta.env.BASE_URL}assets/projects/accounting-trending.jpeg`, label: "Trending" },
      { src: `${import.meta.env.BASE_URL}assets/projects/accounting-insights.jpg`, label: "Insights" }
    ],
    tags: ["flutter", "dart", "sqlite", "supabase", "provider"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/Accounting-Mobile-App", icon: CodeLinkIcon.FULLSTACK }],
    deploy_link: "#",
    desc: "An offline-first personal finance app for expenses, budgets, savings, and spending insights with cloud sync.",
    longDesc: "A Flutter accounting application with local SQLite storage and optional Supabase cloud synchronization. Users manage income and expenses, categories, assets, savings goals, budgets, and recurring subscriptions. Charts and trend views help explain spending, while biometric authentication, shared transactions, and PDF export support everyday use.",
    categories: [ProjectCategory.MOBILE],
    features: ["Income and expense tracking with flexible categories", "Budgets, savings goals, assets, and subscriptions", "Interactive spending charts and trend analysis", "Offline storage with bidirectional cloud synchronization", "Biometric authentication, shared transactions, and PDF export"],
    techDetails: ["Flutter and Dart with Provider / ChangeNotifier", "SQLite through sqflite and Supabase backend", "Repository-based data layer and Freezed models", "fl_chart, go_router, and local_auth"]
  },
  {
    id: "ai-assignment",
    title: "Adult Face Detection Studio",
    cover: `${import.meta.env.BASE_URL}assets/projects/age-detection-cnn.png`,
    screenshots: [
      { src: `${import.meta.env.BASE_URL}assets/projects/age-detection-studio.png`, label: "Python desktop interface and model selection" },
      { src: `${import.meta.env.BASE_URL}assets/projects/age-detection-cnn.png`, label: "CNN image analysis and prediction result" },
      { src: `${import.meta.env.BASE_URL}assets/projects/age-detection-hog_svm.png`, label: "HOG + SVM image analysis and prediction result" },
      { src: `${import.meta.env.BASE_URL}assets/projects/age-detection-vit.png`, label: "Vision Transformer image analysis and prediction result" }
    ],
    tags: ["python", "tensorflow", "pytorch", "opencv", "scikit-learn"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/AI_Assignment", icon: CodeLinkIcon.TOOLS }],
    deploy_link: "#",
    desc: "A three-model face-classification study and Python desktop app. My focus: Vision Transformer training and evaluation.",
    longDesc: "A Python desktop application and notebook training pipeline for experimental adult/minor face classification. The run.py entry point brings a TensorFlow / Keras CNN, HOG features with a scikit-learn SVM, and a PyTorch Vision Transformer into one CustomTkinter interface. Users load a trained model and upload an image or capture webcam samples. OpenCV selects the largest detected face, and the app displays an annotated preview, predicted class, model score, and decision confidence. The screenshots show actual runs of the three original trained models on the same project test image; their predictions can differ.",
    categories: [ProjectCategory.AI],
    features: ["Compare HOG + SVM, MobileNetV2 CNN, and Vision Transformer", "Project-defined Adult class uses age 21 and above", "Single-image upload and webcam sample capture", "OpenCV face detection with annotated prediction previews", "Overall and 18–24 age-boundary evaluation", "Separate training and test notebooks with saved metrics", "CustomTkinter desktop interface and Windows packaging"],
    techDetails: ["PyTorch ViT-B/16 with ImageNet transfer learning", "Two-stage ViT training: adapt the head, then fine-tune the last four backbone blocks", "AdamW, mixed precision, and validation-tuned decision threshold", "TensorFlow / Keras MobileNetV2 CNN", "scikit-image HOG features with scikit-learn SVM", "OpenCV Haar cascade face detection", "CustomTkinter GUI and PyInstaller packaging"],
    evaluation: {
      contribution: "I was responsible for the Vision Transformer (ViT) module in a three-person team, covering its model training and evaluation pipeline. The team compared ViT with the CNN and HOG + SVM approaches.",
      methodology: [
        "Facial images derived from MegaAge and UTKFace, with Asian and non-Asian groups.",
        "Binary classification with a project-defined age cutoff of 21; a separate analysis examines ages 18–24.",
        "ViT-B/16 uses 224 × 224 inputs and ImageNet-pretrained weights. Initial training freezes the backbone; fine-tuning unfreezes its last four blocks.",
        "ViT configuration: AdamW, 10 epochs per stage, learning rates of 0.001 and 0.00001, mixed precision, and a saved decision threshold of 0.457286."
      ],
      testSamples: 3945,
      boundarySamples: 690,
      results: [
        { model: "HOG + SVM", accuracy: 63.78, precision: 76.53, recall: 42.60, f1: 54.74 },
        { model: "CNN", accuracy: 73.97, precision: 93.18, recall: 53.25, f1: 67.78 },
        { model: "ViT", accuracy: 84.21, precision: 92.60, recall: 75.30, f1: 83.06 }
      ],
      boundaryResults: [
        { model: "HOG + SVM", accuracy: 44.93, precision: 76.96, recall: 32.04, f1: 45.24 },
        { model: "CNN", accuracy: 48.41, precision: 85.64, recall: 32.86, f1: 47.49 },
        { model: "ViT", accuracy: 57.83, precision: 81.19, recall: 52.86, f1: 64.03 }
      ],
      findings: "ViT achieved the highest overall accuracy (84.21%) and F1 (83.06%), while CNN had the highest precision (93.18%). All three models performed worse on ages 18–24; ViT accuracy fell to 57.83%, showing the difficulty of classifying faces near the chosen age cutoff. Values were checked against the original saved test metrics, rather than individual desktop demo predictions.",
      limitations: [
        "Age-group imbalance, label noise, lighting, pose, and image quality affect generalization.",
        "These results describe the project's test set; facial appearance alone does not establish a person's age.",
        "Future work: improve boundary-age data quality, evaluate on additional datasets, and benchmark inference speed and model compression."
      ]
    }
  },
  {
    id: "graphic-programming-assignment",
    title: "3D Robot Simulation",
    cover: `${import.meta.env.BASE_URL}assets/projects/graphic-programming.png`,
    tags: ["c++", "opengl", "graphics", "3d", "directinput"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/GraphicProgrammingAssignment", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Hierarchical 3D robot simulation in C++ and OpenGL with custom animation and camera modes.",
    longDesc: "A graphics programming assignment focused on building a hierarchical 3D robot from scratch in C++ and OpenGL. The project implements articulated body parts, a state-driven animation system, and a custom input manager. Multiple camera projections and lighting features showcase a raw rendering pipeline.",
    categories: [ProjectCategory.GRAPHICS],
    features: [
      "Hierarchical modeling with parent-child body parts",
      "State-based animation for locomotion and combat moves",
      "Custom input layer integrating DirectInput and Windows input",
      "Perspective, orthographic, and frustum camera modes",
      "Lighting and texture mapping with OpenGL primitives",
      "Fine-grained articulation for hands, fingers, and wings"
    ],
    techDetails: [
      "C++ with a raw OpenGL rendering pipeline",
      "Scene graph style transforms for articulated animation",
      "GL_LIGHT0 lighting setup and texture mapping",
      "Multi-mode camera system with projection toggles",
      "Configurable input bindings for movement and articulation"
    ]
  },
  {
    id: "sport-stacking-website",
    title: "Sport Stacking Website",
    cover: `${import.meta.env.BASE_URL}assets/projects/sport-stacking.png`,
    tags: ["react", "typescript", "firebase", "tailwindcss", "vite"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/Sport-Stacking-Website", icon: CodeLinkIcon.FULLSTACK }
    ],
    deploy_link: "#",
    desc: "Full-stack tournament management platform for sport stacking events, scoring, and athlete profiles.",
    longDesc: "A comprehensive web application for managing sport stacking tournaments, brackets, and results. It supports registration, preliminary and finals scoring, and detailed athlete profiles with role-based access for organizers and admins. Built to streamline event-day operations with exports and responsive UI.",
    categories: [ProjectCategory.WEB],
    features: [
      "Tournament creation with events, brackets, and classifications",
      "Preliminary and finals scoring with automatic rankings",
      "Athlete profiles, global IDs, and performance history",
      "Online registration with team and multi-event support",
      "PDF export of results, brackets, and classifications",
      "Admin dashboard with role-based access and site settings"
    ],
    techDetails: [
      "React 18, Vite, and TypeScript for the frontend",
      "Arco Design components, Tailwind CSS, and SCSS styling",
      "React Router v6 and Jotai state management",
      "Firebase Auth, Firestore, Functions, Hosting, and Storage",
      "React Hook Form with Zod validation",
      "jsPDF and AutoTable for report generation"
    ]
  },
  {
    id: "chichis-bizarre-adventure",
    title: "Chichi's Bizarre Adventure",
    cover: `${import.meta.env.BASE_URL}assets/projects/3D-Game.png`,
    tags: ["unity", "c#", "3d", "urp", "cinemachine"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/3D-Game-Development", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Unity URP 3D adventure and puzzle game with parkour traversal and island exploration.",
    longDesc: "A third-person Unity URP game where players explore an island, solve puzzles, and gather resources to repair a broken bridge. The experience blends parkour traversal, environment interaction, and story-driven objectives as Chichi searches for a missing friend.",
    categories: [ProjectCategory.GAMES],
    features: [
      "Third-person movement with walk, run, and jump controls",
      "Parkour obstacles and platforming traversal",
      "Puzzle exploration and environment interaction",
      "Resource collection and bridge repair objectives",
      "Camera control and combat-ready input bindings",
      "Integrated menus for settings and gameplay flow"
    ],
    techDetails: [
      "Built with Unity URP and C# scripting",
      "Starter Assets ThirdPerson controller with Cinemachine",
      "Unity new Input System for character controls",
      "Asset packs for characters and environment visuals",
      "Particle effects from Unity Asset Store packages"
    ]
  },
  {
    id: "desmos-lifeline",
    title: "Desmos Lifeline",
    cover: `${import.meta.env.BASE_URL}assets/projects/2D-game.png`,
    tags: ["unity", "c#", "2d", "equations", "linerenderer"],
    code_links: [
      { label: "GitHub", url: "https://github.com/KJiShou/Desmos-Lifeline", icon: CodeLinkIcon.TOOLS }
    ],
    deploy_link: "#",
    desc: "Unity 2D math game where players build equations to guide a spaceship through portals.",
    longDesc: "A Unity 2D game centered on creating and tuning equations to shape the player's path. Linear, quadratic, and trigonometric curves are rendered in real time, with portals placed along each line to move the ship between points. The game includes stage selection, difficulty settings, score tracking, and multiple UI flows for win, loss, and pause states.",
    categories: [ProjectCategory.GAMES],
    features: [
      "Equation selection with drag-and-drop slot inputs",
      "Real-time linear, quadratic, and trigonometric curve rendering",
      "Portal system that moves the ship along generated lines",
      "Stage-based progression with score tracking",
      "Difficulty settings and spaceship customization",
      "Menus for stage select, pause, victory, and loss states"
    ],
    techDetails: [
      "Unity 2D project written in C#",
      "LineRenderer-driven equation visualization",
      "TMP text and slider inputs for equation parameters",
      "Persistent GameManager for stage scores and settings",
      "Audio and UI settings for player feedback"
    ]
  }
];
