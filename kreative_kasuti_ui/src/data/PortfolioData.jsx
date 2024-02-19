// Art Work
import SilentKingdom from "../assets/images/art_work/silent_kingdom.png";
import MelodicCanvas from "../assets/images/art_work/melodic_canvas.png";
import Furaha from "../assets/images/art_work/furaha.jpg";
import MightyChess from "../assets/images/art_work/mighty_chess.png"; 
import Horizon from "../assets/images/oil_painting.jpg";


// Web Dev
import Melovibe from "../assets/images/web_dev/melovibe.png";

export const portfolioData = {
  portfolioCategory: [
    {
      id: 1,
      category: "All",
    },
    {
      id: 2,
      category: "Art Work",
    },
    {
      id: 3,
      category: "Web Dev",
    },
    {
      id: 4,
      category: "Software Dev",
    },
    {
      id: 5,
      category: "3d models",
    },
  ],

  detailedPortfolioData: [
    {
      id: 1,
      category: "Art Work",
      // Artwork
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
      id: 2,
      category: "Web Dev",
      webDevData: [
        {
          id: 1,
          title: "MeloVibe",
          imageUrl: Melovibe,
          altText: "melo vibe",
          description:
            "MeloVibe is your personalized mood-based music companion. Seamlessly matching your vibe, MeloVibe crafts curated playlists tailored to your current mood,whether you're feeling upbeat, chill, energetic, or relaxed. Simply drag the gclef to your mood, and let MeloVibe set the perfect musical backdrop for your moment. With MeloVibe, discover the power of music to enhance every mood",
        },
      ],
    },
  ],
};
