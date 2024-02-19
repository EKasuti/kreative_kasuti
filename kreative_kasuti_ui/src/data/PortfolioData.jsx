// Art Work
import SilentKingdom from "../assets/images/art_work/silent_kingdom.png";
import MelodicCanvas from "../assets/images/art_work/melodic_canvas.png";
import Furaha from "../assets/images/art_work/furaha.jpg";
import MightyChess from "../assets/images/art_work/mighty_chess.png";

// Web Dev
import Melovibe from "../assets/images/web_dev/melovibe.png";

// Maya Projects
import shot1 from "../assets/images/3d_modeling/shot1.png";
import shot2 from "../assets/images/3d_modeling/shot2.png";

export const portfolioData = {
  portfolioCategory: [
    {
      id: 1,
      category: "All",
    },
    {
      id: 2,
      category: "Art",
    },
    {
      id: 3,
      category: "Web",
    },
    {
      id: 4,
      category: "Software",
    },
    {
      id: 5,
      category: "3d",
    },
  ],

  detailedPortfolioData: [
    {
      // ART WORK
      id: 1,
      category: "Art",
      artWorkData: [
        {
          id: 1,
          title: "Silent Kingdom",
          label: "Charcoal",
          author: "Kasuti",
          imageUrl: SilentKingdom,
          altText: "silent_kingdom",
          frameType: "Landscape",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 2,
          title: "Melodic Canvas",
          label: "Charcoal",
          author: "Kasuti",
          imageUrl: MelodicCanvas,
          altText: "melodic canvas",
          frameType: "Landscape",
          description:
            "Melodic Canvas merges music sheets and painted brushstrokes, reflecting the artist's emotional response to music. Each stroke captures the mood, creating a vibrant tapestry of color and melody",
        },
        {
          id: 3,
          title: "Furaha",
          label: "Painting",
          author: "Kasuti",
          imageUrl: Furaha,
          altText: "Furaha",
          frameType: "Portrait",
        },
        {
          id: 4,
          title: "Mighty Chess",
          label: "Charcoal",
          author: "Kasuti",
          imageUrl: MightyChess,
          altText: "mighty chess",
          frameType: "Landscape",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
          id: 5,
          title: "Silent Kingdom",
          label: "Charcoal",
          author: "Kasuti",
          imageUrl: SilentKingdom,
          altText: "silent_kingdom",
          frameType: "Landscape",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
      ],
    },
    {
      // WEB DEV DATA
      id: 2,
      category: "Web",
      webDevData: [
        {
          id: 1,
          title: "MeloVibe",
          label: "Music App",
          imageUrl: Melovibe,
          altText: "melo vibe",
          briefDescription:"MeloVibe crafts personalized playlists based on your mood. Its intuitive interface and vibrant design enhance the music discovery experience." },
      ],
    },

    {
      // SOFTWARE DEV DATA
      id: 3,
      category: "Software",
      softwareDevData: [
        {
          id: 1,
          title: "Pong Game",
          label: "python",
          imageUrl: Melovibe,
          altText: "pongGame",
        },
      ],
    },
    {
      // 3D MODELS DATA
      id: 4,
      category: "3d",
      mayaModelsData: [
        {
          id: 1,
          title: "Custom Room",
          label: "Shot1",
          imageUrl: shot1,
          altText: "shot 1",
          briefDescription: "Enter a realm where elegance meets intrigue. Explore a meticulously designed room with a pool table, a mysterious briefcase, and the allure of fine wine and cigars. Click for a glimpse into professional craftsmanship and creative prowess",
        },
        {
          id: 2,
          title: "Custom Room",
          label: "Shot2",
          imageUrl: shot2,
          altText: "shot 2",
        },
        
      ],
    },
  ],
};
