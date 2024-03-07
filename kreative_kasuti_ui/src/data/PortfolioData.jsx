// Art Work
import SilentKingdom from "../assets/images/art_work/silent_kingdom.png";
import MelodicCanvas from "../assets/images/art_work/melodic_canvas.png";
import Furaha from "../assets/images/art_work/furaha.jpg";
import MightyChess from "../assets/images/art_work/mighty_chess.png";
import Horizon1 from "../assets/images/architecture/infiniteHorizon/infinite_1.png";
import Horizon2 from "../assets/images/architecture/infiniteHorizon/infinite_2.png";
import Horizon3 from "../assets/images/architecture/infiniteHorizon/infinite_3.png";

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
    {
      id: 6,
      category: "Architecture",
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
          skills:
            "Frontend Development, Version control [GitHub], UI design with Tailwind CSS",
          software: "React, Tailwind CSS, Github",
          externalSite: "Website",
          externalLink: "https://melovibe.vercel.app/",
          briefDescription:
            "MeloVibe crafts personalized playlists based on your mood. Its intuitive interface and vibrant design enhance the music discovery experience.",
          fullDescription:
            "MeloVibe is an innovative mood-based music recommendation app that tailors playlists to users' emotional states. The intuitive drag-and-drop interface and visually appealing color scheme received positive feedback, but the integration with Spotify was a feature I couldn't implement as initially planned. \n\nDespite this setback, I take pride in mastering React states throughout the development process, even though using React states can be annoying at times. Initially, I underestimated the project's complexity, assuming it would take only three days to complete. This experience has taught me not to underestimate the intricacies of software development and the importance of thorough planning and execution",
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
            "My journey began with a vision to design a room that exuded luxury and intrigue, a space where every element would captivate the imagination. As I began modeling the room, I quickly realized that lighting was crucial for setting the right mood. To achieve this, I imagined large windows gracing the walls, letting in the soft glow of a sunset, which would cast a captivating aura over the scene. \n\nHowever, mastering Maya wasn't a walk in the park. I had only started learning it six weeks prior to this project. Despite the challenges, I embraced the learning process with determination and enthusiasm. Through countless hours of trial and error, I refined my skills and learned techniques that allowed me to bring my vision to life. Now, I'm thrilled to share the fruits of my labor and showcase the final result of my journey.",
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
          briefDescription:
            "Enter a realm where elegance meets intrigue. Explore a meticulously designed room with a pool table, a mysterious briefcase, and the allure of fine wine and cigars. Click for a glimpse into professional craftsmanship and creative prowess",
          fullDescription:
            "My journey began with a vision to design a room that exuded luxury and intrigue, a space where every element would captivate the imagination. As I began modeling the room, I quickly realized that lighting was crucial for setting the right mood. To achieve this, I imagined large windows gracing the walls, letting in the soft glow of a sunset, which would cast a captivating aura over the scene. \n\nHowever, mastering Maya wasn't a walk in the park. I had only started learning it six weeks prior to this project. Despite the challenges, I embraced the learning process with determination and enthusiasm. Through countless hours of trial and error, I refined my skills and learned techniques that allowed me to bring my vision to life. Now, I'm thrilled to share the fruits of my labor and showcase the final result of my journey.",
        },
      ],
    },

    {
      // ARCHITECTURE
      id: 5,
      category: "Architecture",
      architectureData: [
        {
          id: 1,
          title: "INFINITE HORIZON",
          label: "infinite",
          imageUrl1: Horizon1,
          altText1: "infinitehorizon1",
          imageUrl2: Horizon2,
          altText2: "infinitehorizon2",
          imageUrl3: Horizon3,
          altText3: "infinite_horizon3",
          skills: "Design, Texture and Material application",
          software: "Rhino, Illustrator, Photoshop",
          briefDescription:
            "“Infinite Horizon” is an architectural installation designed to encapsulate 360-degree views, enabling a profound connection with the environment. Centered around a reflective pavilion, this structure offers visitors a unique opportunity to observe the horizon and surrounding cityscape from every conceivable angle",
          fullDescription:
            "“Infinite Horizon” is a visionary architectural masterpiece inspired by the intricate Makuti roof designs in Kenya. Embodying the cultural essence of this rich tradition, the pavilion captures the spirit of innovation and reverence for heritage. Here, the traditional cone-shaped roofs are reimagined, flipped and suspended by strong supports, creating a striking juxtaposition of old and new. \n\nThe base of the pavilion features the distinctive Makuti pattern, paying homage to the craftsmanship and artistry of the original design where coconut palm leaves were sun-dried and laid down to overlap at a distance of 4 inches to create the Makuti roof structures. However, unlike the traditional palm trees, this pavilion utilizes a reflective surface that not only offers unparalleled 360-degree views but also serves as a focal point, directing attention towards the surrounding environment in a mesmerizing display. \n\n”Infinite Horizon” is more than just an architectural marvel; it’s a dynamic space for human interaction and cultural exchange. From sitting to congregating to lounging and dancing, the pavilion offers endless opportunities for people to engage with it, becoming not only a symbol of cultural identity but also a vibrant hub of community life.",
        },
      ],
    },
  ],
};
