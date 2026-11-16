export enum ProjectCategory {
  GAMES = "games",
  DESKTOP = "desktop",
  GRAPHICS = "graphics",
  MOBILE = "mobile",
  AI = "ai",
  VR = "vr",
}

export enum CodeLinkIcon {
  SOURCE = "source",
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
  featured?: boolean;
  collaboration?: string;
  contribution?: string;
}

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/projects/${path}`;

export const projects: project[] = [
  {
    id: "chichis-bizarre-adventure",
    title: "Chichi’s Bizarre Adventure",
    cover: asset("3D-Game.png"),
    screenshots: [{ src: asset("3D-Game.png"), label: "Third-person island adventure and puzzle exploration" }],
    tags: ["Unity", "C#", "URP", "Cinemachine", "Input System"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/3D-Game-Development", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    desc: "A multi-level third-person adventure combining parkour, combat, puzzles, collectibles, and persistent progression.",
    longDesc: "A three-person Unity project built around island exploration and a search for a missing friend. I contributed across gameplay and presentation systems, including knockback, portals, pressure plates, moving platforms, lifts, gates, keypad interactions, UI, audio, narrator and tutorial triggers, cutscenes, and win/lose scenes.",
    categories: [ProjectCategory.GAMES],
    featured: true,
    collaboration: "Three-person team",
    contribution: "Gameplay systems, level interactions, UI & audio",
    features: [
      "Third-person exploration, parkour traversal, combat, and resource collection",
      "Multi-level progression with checkpoints, cutscenes, puzzles, and persistent state",
      "Environmental interactions including portals, pressure plates, platforms, lifts, gates, and keypads",
      "Narration, tutorial triggers, sound effects, and win/lose flows",
    ],
    techDetails: [
      "Unity URP project written in C#",
      "Cinemachine and Unity Input System for third-person control",
      "Timeline-driven cutscenes and scene management",
      "PlayerPrefs-backed progression and UI state",
      "77 GitHub contributions under HongJunChea in the shared repository",
    ],
  },
  {
    id: "initial-cpp",
    title: "Initial C++",
    cover: asset("initial-cpp-gameplay.png"),
    screenshots: [
      { src: asset("initial-cpp-gameplay.png"), label: "Arcade racing gameplay with collectibles and obstacles" },
      { src: asset("initial-cpp-menu.png"), label: "Main menu and scene flow" },
    ],
    tags: ["C++", "DirectX 9", "CMake", "Collision", "Audio"],
    code_links: [{ label: "GitHub", url: "https://github.com/zwzenre/CGPassignment", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    desc: "A fast-paced 2D arcade racing game with car controls, obstacles, collectibles, timing, scenes, music, and sound effects.",
    longDesc: "A three-person C++ and DirectX 9 project about delivering tofu quickly while avoiding obstacles and collecting coins. My commits cover the main-menu scene, early car and physics work, scene sizing and button hit areas, Sound Manager integration, background music transitions, car and goal sounds, and level fixes.",
    categories: [ProjectCategory.GAMES, ProjectCategory.GRAPHICS],
    featured: true,
    collaboration: "Three-person team",
    contribution: "Main menu, car/physics foundations & audio integration",
    features: [
      "Arcade car controls with obstacles, collectibles, and timer-based scoring",
      "Multiple scenes for menu, gameplay, stage selection, and results",
      "Background music and contextual car, goal, and UI sound effects",
      "Modular managers for input, physics, scenes, sound, and timing",
    ],
    techDetails: [
      "C++ game loop and DirectX 9 rendering",
      "CMake-based project organization",
      "Custom collision detection and physics components",
      "Sound Manager with scene-aware music and effects",
      "25 GitHub contributions under HongJunChea in the shared repository",
    ],
  },
  {
    id: "travel-planner",
    title: "Travel Planner Assistant",
    cover: asset("travel-planner-main.png"),
    screenshots: [
      { src: asset("travel-planner-main.png"), label: "Main menu" },
      { src: asset("travel-planner-itinerary.png"), label: "Itinerary builder" },
      { src: asset("travel-planner-packing.png"), label: "Packing-list generator and progress tracking" },
    ],
    tags: ["Python", "Tkinter", "JSON", "MVC"],
    code_links: [{ label: "GitHub", url: "https://github.com/HongJunChea/TravelPlannerAssistant", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    desc: "A desktop trip-planning suite for itineraries, packing lists, and budget estimates with JSON persistence.",
    longDesc: "A cross-platform Python desktop application co-developed in a four-person team. I redesigned and refined the GUI, implemented packing-list generation, refactored JSON storage, and fixed persistence issues affecting saved checklist progress and trip names.",
    categories: [ProjectCategory.DESKTOP],
    featured: true,
    collaboration: "Four-person team",
    contribution: "GUI redesign, packing-list generation & persistence fixes",
    features: [
      "Daily itinerary creation with destinations, activities, dates, and times",
      "Automatic packing-list generation with categorized items and progress tracking",
      "Budget allocation and expense estimation across travel categories",
      "Saved itineraries and budgets using local JSON files",
    ],
    techDetails: [
      "Python 3.11 and Tkinter desktop UI",
      "MVC-style separation across models, controllers, GUI, and utilities",
      "JSON-based local persistence",
      "23 GitHub contributions under HongJunChea",
    ],
  },
  {
    id: "cgt-assignment",
    title: "Personality-Modulated NPC Emotion Dynamics",
    cover: asset("npc-emotion-dialogue.png"),
    screenshots: [
      { src: asset("npc-emotion-dialogue.png"), label: "Dialogue input and real-time emotion feedback" },
      { src: asset("npc-emotion-response.png"), label: "Current emotion and long-term mood display" },
      { src: asset("npc-emotion-settings.png"), label: "Emotion memory and configuration panel" },
    ],
    tags: ["Unity", "C#", "RoBERTa", "VAD", "Big Five"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/CGT-Assignment", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    desc: "An AI game prototype where dialogue sentiment, personality, context, and emotional memory shape NPC reactions.",
    longDesc: "A collaborative Unity research prototype combining NavMesh character behaviour with emotion-driven animations and visual feedback. My work included integrating a RoBERTa sentiment model through Unity Inference Engine, mapping dialogue into Valence-Arousal-Dominance values, modelling Big Five personality and emotion decay, and implementing the emoji particle feedback system.",
    categories: [ProjectCategory.GAMES, ProjectCategory.AI],
    collaboration: "Three-person research team",
    contribution: "Sentiment/VAD pipeline, personality-memory model & emotion particles",
    features: [
      "Natural-language dialogue mapped to continuous VAD emotion values",
      "Big Five traits modulate each NPC’s emotional response",
      "Short- and long-term emotional memory with configurable decay",
      "NavMesh movement, emotion-driven animation, and emoji particle feedback",
    ],
    techDetails: [
      "Unity, C#, AI Navigation, and Unity Inference Engine",
      "RoBERTa sentiment inference and VAD emotion modelling",
      "Big Five personality parameters and configurable emotion states",
      "13 GitHub contributions under HongJunChea in the shared repository",
    ],
  },
  {
    id: "vr-assignment",
    title: "The Climb3",
    cover: asset("vr-menu.png"),
    screenshots: [
      { src: asset("vr-menu.png"), label: "VR main menu" },
      { src: asset("vr-climbing.png"), label: "Castle climbing and checkpoint progression" },
      { src: asset("vr-grabbing.png"), label: "Hand grabbing and food interaction" },
      { src: asset("vr-results.png"), label: "Win scene and stage results" },
    ],
    tags: ["Unity", "C#", "OpenXR", "XR Toolkit", "VR"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/VR-Assignment", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    video_link: "https://youtu.be/MqeesJxqzsM",
    desc: "A VR climbing experience with stamina, checkpoints, grabbable objects, food interactions, painting, and timed stages.",
    longDesc: "A collaborative Unity VR assignment built with OpenXR and XR Interaction Toolkit. My contributions focused on Stage 1 level design, checkpoint placement, food assets and eating interactions, environmental audio, flag feedback, and the win scene.",
    categories: [ProjectCategory.GAMES, ProjectCategory.VR],
    collaboration: "Three-person team",
    contribution: "Stage design, checkpoints, food interaction, audio & win flow",
    features: [
      "VR climbing with hand stamina and checkpoint progression",
      "Grabbable props, consumable food interactions, and tactile feedback",
      "Timed stages with narration, audio cues, flags, and result screens",
      "Painting tools with color selection and erasing",
    ],
    techDetails: [
      "Unity URP, C#, XR Interaction Toolkit, and OpenXR",
      "Oculus/Meta XR packages and spatial audio",
      "Custom checkpoint, climbing, eating, and win-flow components",
      "31 GitHub contributions under HongJunChea in the shared repository",
    ],
  },
  {
    id: "accounting-mobile-app",
    title: "Accounting Mobile App",
    cover: asset("accounting-mobile-app.jpg"),
    screenshots: [
      { src: asset("accounting-mobile-app.jpg"), label: "Finance dashboard" },
      { src: asset("accounting-trending.jpeg"), label: "Expense trends" },
      { src: asset("accounting-insights.jpg"), label: "Asset and spending insights" },
    ],
    tags: ["Flutter", "Dart", "SQLite", "Supabase", "Provider"],
    deploy_link: "#",
    desc: "An offline-first personal-finance app for expenses, budgets, savings, assets, and spending insights.",
    longDesc: "A collaborative Flutter mobile application with local SQLite storage and optional Supabase synchronization. The team implemented income and expense tracking, categories, budgets, savings goals, assets, recurring subscriptions, trend charts, authentication, sharing, and PDF export.",
    categories: [ProjectCategory.MOBILE],
    collaboration: "Team project",
    contribution: "Flutter application development",
    features: [
      "Income and expense tracking with flexible categories",
      "Budgets, savings goals, assets, and recurring subscriptions",
      "Spending charts, trend analysis, and personal-finance insights",
      "Offline-first SQLite storage with optional Supabase synchronization",
    ],
    techDetails: [
      "Flutter and Dart with Provider/ChangeNotifier",
      "SQLite through sqflite and Supabase backend services",
      "Repository-based data layer with local and remote persistence",
    ],
  },
  {
    id: "ai-assignment",
    title: "Adult Face Detection Studio",
    cover: asset("age-detection-hog_svm.png"),
    screenshots: [
      { src: asset("age-detection-studio.png"), label: "Desktop interface and model selection" },
      { src: asset("age-detection-hog_svm.png"), label: "HOG + SVM prediction" },
      { src: asset("age-detection-cnn.png"), label: "CNN prediction" },
      { src: asset("age-detection-vit.png"), label: "Vision Transformer prediction" },
    ],
    tags: ["Python", "HOG", "SVM", "OpenCV", "scikit-learn"],
    code_links: [{ label: "GitHub", url: "https://github.com/KJiShou/AI_Assignment", icon: CodeLinkIcon.SOURCE }],
    deploy_link: "#",
    desc: "A three-model adult/minor face-classification study and desktop app; my focus was the HOG + SVM pipeline.",
    longDesc: "A three-person machine-learning project comparing HOG + SVM, a MobileNetV2 CNN, and a Vision Transformer. I owned the HOG + SVM training notebook and evaluation pipeline, including HOG feature extraction, SVM training, saved model artifacts, metrics, and test reporting. The team integrated all three models into a CustomTkinter application with OpenCV face detection.",
    categories: [ProjectCategory.AI, ProjectCategory.DESKTOP],
    collaboration: "Three-person team",
    contribution: "HOG + SVM training, feature extraction & evaluation",
    features: [
      "Side-by-side comparison of HOG + SVM, CNN, and Vision Transformer models",
      "Single-image upload and webcam face capture",
      "OpenCV face detection with annotated prediction previews",
      "Overall and age-boundary evaluation with saved metrics",
    ],
    techDetails: [
      "scikit-image HOG feature extraction and scikit-learn SVM",
      "OpenCV Haar Cascade face detection",
      "CustomTkinter desktop interface and PyInstaller packaging",
      "TensorFlow/Keras CNN and PyTorch ViT modules contributed by teammates",
    ],
    evaluation: {
      contribution: "I was responsible for the HOG + SVM model: feature extraction, training, saved artifacts, metrics, and evaluation. The team compared it with independently developed CNN and ViT pipelines.",
      methodology: [
        "Facial images derived from MegaAge and UTKFace, covering Asian and non-Asian groups.",
        "Binary adult/minor classification with a project-defined age cutoff of 21.",
        "HOG descriptors capture local edge and gradient structure before SVM classification.",
        "A separate age-boundary analysis evaluates the especially difficult 18-24 range.",
      ],
      testSamples: 3945,
      boundarySamples: 690,
      results: [
        { model: "HOG + SVM", accuracy: 63.78, precision: 76.53, recall: 42.60, f1: 54.74 },
        { model: "CNN", accuracy: 73.97, precision: 93.18, recall: 53.25, f1: 67.78 },
        { model: "ViT", accuracy: 84.21, precision: 92.60, recall: 75.30, f1: 83.06 },
      ],
      boundaryResults: [
        { model: "HOG + SVM", accuracy: 44.93, precision: 76.96, recall: 32.04, f1: 45.24 },
        { model: "CNN", accuracy: 48.41, precision: 85.64, recall: 32.86, f1: 47.49 },
        { model: "ViT", accuracy: 57.83, precision: 81.19, recall: 52.86, f1: 64.03 },
      ],
      findings: "The classical HOG + SVM baseline reached 63.78% overall accuracy. Every model performed worse near the age boundary, showing how difficult apparent-age classification becomes around the selected cutoff.",
      limitations: [
        "Facial appearance alone does not establish a person’s age.",
        "Class imbalance, label noise, pose, lighting, and image quality affect generalization.",
        "Results describe the project test set and should not be used for high-stakes decisions.",
      ],
    },
  },
];

