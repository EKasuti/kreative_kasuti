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
import shot3 from "../assets/images/3d_modeling/shot3.png";
import shot4 from "../assets/images/3d_modeling/shot4.png";
import shot5 from "../assets/images/3d_modeling/shot5.png";

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
          description:
            "MeloVibe is your personalized mood-based music companion. Seamlessly matching your vibe, MeloVibe crafts curated playlists tailored to your current mood,whether you're feeling upbeat, chill, energetic, or relaxed. Simply drag the gclef to your mood, and let MeloVibe set the perfect musical backdrop for your moment. With MeloVibe, discover the power of music to enhance every mood",
        },
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
        },
        {
          id: 2,
          title: "Custom Room",
          label: "Shot2",
          imageUrl: shot2,
          altText: "shot 2",
        },
        {
          id: 3,
          title: "Custom Room",
          label: "Shot3",
          imageUrl: shot3,
          altText: "shot 3",
        },
        {
          id: 4,
          title: "Custom Room",
          label: "Shot4",
          imageUrl: shot4,
          altText: "shot 4",
        },
        {
          id: 5,
          title: "Custom Room",
          label: "Shot5",
          imageUrl: shot5,
          altText: "shot 5",
        },
      ],
    },
  ],
};
