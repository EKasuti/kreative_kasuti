import Furaha from "../assets/images/furaha.jpg";
import Horizon from "../assets/images/oil_painting.jpg";
import SilentKingdom from "../assets/images/silent_kingdom.png";
import Melovibe from "../assets/images/melovibe.png";

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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          id: 2,
          title: "The horizon",
          label: "Oil Painting",
          author: "Kasuti",
          imageUrl: Horizon,
          altText: "Oil painting",
          frameType: "Landscape",
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
          title: "The horizon",
          label: "Oil Painting",
          author: "Kasuti",
          imageUrl: Horizon,
          altText: "Oil painting",
          frameType: "Landscape",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          description:
            "MeloVibe is your personalized mood-based music companion. \
            Seamlessly matching your vibe, MeloVibe crafts curated playlists tailored to your current mood, \
            whether you're feeling upbeat, chill, energetic, or relaxed. Simply drag the gclef to your mood, \
            and let MeloVibe set the perfect musical backdrop for your moment. With MeloVibe, \
            discover the power of music to enhance every mood",
        },
      ],
    },
  ],
};
