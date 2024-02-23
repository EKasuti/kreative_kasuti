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
          title: "MELOVIBE",
          label: "Music App",
          imageUrl: Melovibe,
          altText: "melo vibe",
          skills: "Frontend Development, Version control [GitHub], UI design with Tailwind CSS",
          software: "React, Tailwind CSS, Github",
          externalSite: "Website",
          externalLink: "https://melovibe.vercel.app/",
          briefDescription:
            "MeloVibe crafts personalized playlists based on your mood. Its intuitive interface and vibrant design enhance the music discovery experience.",
          fullDescription:
            "MeloVibe is an innovative mood-based music recommendation app that tailors playlists to users' emotional states. The intuitive drag-and-drop interface and visually appealing color scheme received positive feedback, but the integration with Spotify was a feature I couldn't implement as initially planned. Despite this setback, I take pride in mastering React states throughout the development process, even though using React states can be annoying at times. Initially, I underestimated the project's complexity, assuming it would take only three days to complete. This experience has taught me not to underestimate the intricacies of software development and the importance of thorough planning and execution",
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
          title: "PONG GAME",
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
          title: "CUSTOM ROOM",
          label: "Shot1",
          imageUrl: shot1,
          altText: "shot 1",
          skills:
            "3d Modelling, Texture Mapping, Material application, Lighting",
          software: "Autodesk Maya, Arnold Renderer",
          briefDescription:
            "Enter a realm where elegance meets intrigue. Explore a meticulously designed room with a pool table, a mysterious briefcase, and the allure of fine wine and cigars. Click for a glimpse into professional craftsmanship and creative prowess",
          fullDescription:
            "My journey began with a vision to design a room that exuded luxury and intrigue, a space where every element would captivate the imagination. As I began modeling the room, I quickly realized that lighting was crucial for setting the right mood. To achieve this, I imagined large windows gracing the walls, letting in the soft glow of a sunset, which would cast a captivating aura over the scene. However, mastering Maya wasn't a walk in the park. I had only started learning it six weeks prior to this project. Despite the challenges, I embraced the learning process with determination and enthusiasm. Through countless hours of trial and error, I refined my skills and learned techniques that allowed me to bring my vision to life. Now, I'm thrilled to share the fruits of my labor and showcase the final result of my journey.",
        },
        {
          id: 2,
          title: "Custom Room",
          label: "Shot2",
          imageUrl: shot2,
          altText: "shot 2",
          skills:
            "3d Modelling, Texture Mapping, Material application, Lighting",
          software: "Autodesk Maya, Arnold Renderer",
        },
      ],
    },
  ],
};
