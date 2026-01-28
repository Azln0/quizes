
export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  questions: QuizQuestion[];
  totalPoints: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface User {
  id: string;
  username: string;
  email: string;
  coins: number;
  name?: string;
  score?: number;
  completedQuizzes?: string[] | number;
  completedChallenges?: string[] | number;
  categoryScores?: Record<string, number>;
  equippedCosmetics?: Record<string, string>;
  cosmetics?: Cosmetic[];
}

export interface Cosmetic {
  id: string;
  name: string;
  description: string;
  type: "badge" | "avatar" | "banner" | "background";
  preview: React.ReactNode;
  price: number;
  rarity: "common" | "rare" | "epic" | "legendary";
  equipped?: boolean;
  purchasedAt?: string;
}

export type ShopItem = Cosmetic;

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
  icon: string;
}

const initialUsers: User[] = [
  {
    id: "user1",
    username: "GamingPro",
    email: "user@example.com",
    coins: 1000,
    name: "John Doe",
    score: 1250,
    completedQuizzes: ["lol_easy", "val_medium"],
    completedChallenges: ["c1", "c5"],
    categoryScores: {
      "League of Legends": 450,
      "Valorant": 350,
      "General Gaming": 450
    }
  }
];

const initialQuizzes: Quiz[] = [
  // League of Legends Quizzes
  {
    id: "lol_easy",
    title: "League of Legends - Beginner",
    description: "Test your basic knowledge of League of Legends champions and abilities.",
    category: "League of Legends",
    difficulty: "easy",
    questions: [
      {
        id: "lol_easy_1",
        question: "Which champion is known as 'The Lady of Luminosity'?",
        options: ["Lux", "Ahri", "Diana", "Leona"],
        correctAnswer: "Lux",
        points: 10,
      },
      {
        id: "lol_easy_2",
        question: "How many lanes are there in the main game mode of League of Legends?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "3",
        points: 10,
      },
      {
        id: "lol_easy_3",
        question: "Which of these is NOT a role in League of Legends?",
        options: ["Top", "Jungle", "Sniper", "Support"],
        correctAnswer: "Sniper",
        points: 10,
      },
      {
        id: "lol_easy_4",
        question: "What is the name of the river monster that gives teams buffs when defeated?",
        options: ["Baron Nashor", "Dragon", "Herald", "Scuttle Crab"],
        correctAnswer: "Dragon",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "lol_medium",
    title: "League of Legends - Intermediate",
    description: "Test your knowledge of League of Legends items and strategies.",
    category: "League of Legends",
    difficulty: "medium",
    questions: [
      {
        id: "lol_medium_1",
        question: "Which item grants the 'Immolate' passive?",
        options: ["Sunfire Aegis", "Thornmail", "Randuin's Omen", "Dead Man's Plate"],
        correctAnswer: "Sunfire Aegis",
        points: 15,
      },
      {
        id: "lol_medium_2",
        question: "What is the cooldown of Flash?",
        options: ["3 minutes", "4 minutes", "5 minutes", "6 minutes"],
        correctAnswer: "5 minutes",
        points: 15,
      },
      {
        id: "lol_medium_3",
        question: "Which of these champions is NOT from Demacia?",
        options: ["Garen", "Lux", "Darius", "Jarvan IV"],
        correctAnswer: "Darius",
        points: 15,
      },
      {
        id: "lol_medium_4",
        question: "What is the name of Jinx's sister?",
        options: ["Caitlyn", "Vi", "Katarina", "Lux"],
        correctAnswer: "Vi",
        points: 15,
      },
      {
        id: "lol_medium_5",
        question: "How much gold does a standard ward cost?",
        options: ["50", "75", "100", "150"],
        correctAnswer: "75",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "lol_hard",
    title: "League of Legends - Expert",
    description: "Test your advanced knowledge of League of Legends lore and mechanics.",
    category: "League of Legends",
    difficulty: "hard",
    questions: [
      {
        id: "lol_hard_1",
        question: "What was the name of the first League of Legends World Championship?",
        options: ["World Championship", "Season One Championship", "Summoner's Cup", "Riot Games Championship"],
        correctAnswer: "Season One Championship",
        points: 20,
      },
      {
        id: "lol_hard_2",
        question: "In the lore, who killed Jarvan I?",
        options: ["Sion", "Urgot", "Swain", "LeBlanc"],
        correctAnswer: "Sion",
        points: 20,
      },
      {
        id: "lol_hard_3",
        question: "Which champion has the quote: 'The circle of life and death continues. We will live, they will die.'?",
        options: ["Karthus", "Yorick", "Nasus", "Mordekaiser"],
        correctAnswer: "Nasus",
        points: 20,
      },
      {
        id: "lol_hard_4",
        question: "What year was League of Legends officially released?",
        options: ["2008", "2009", "2010", "2011"],
        correctAnswer: "2009",
        points: 20,
      },
      {
        id: "lol_hard_5",
        question: "What is the maximum amount of Ability Haste you can have?",
        options: ["No limit", "100", "200", "500"],
        correctAnswer: "No limit",
        points: 20,
      },
      {
        id: "lol_hard_6",
        question: "Which of these is NOT one of the original 40 champions in League of Legends?",
        options: ["Singed", "Ashe", "Katarina", "Riven"],
        correctAnswer: "Riven",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // Valorant Quizzes
  {
    id: "val_easy",
    title: "Valorant - Beginner",
    description: "Test your basic knowledge of Valorant agents and abilities.",
    category: "Valorant",
    difficulty: "easy",
    questions: [
      {
        id: "val_easy_1",
        question: "Which agent says: You want to play? Let's play!",
        options: ["Kay/o", "Raze", "Chamber", "Breach"],
        correctAnswer: "Chamber",
        points: 10,
      },
      {
        id: "val_easy_2",
        question: "Which of these agents is a duelist?",
        options: ["Brimstone", "Astra", "Cypher", "Iso"],
        correctAnswer: "Iso",
        points: 10,
      },
      {
        id: "val_easy_3",
        question: "Which agent can heal teammates with an ability?",
        options: ["Phoenix", "Sage", "Reyna", "Jett"],
        correctAnswer: "Sage",
        points: 10,
      },
      {
        id: "val_easy_4",
        question: "How many rounds do you need to win to win a standard competitive match in Valorant?",
        options: ["10", "12", "13", "16"],
        correctAnswer: "13",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "val_medium",
    title: "Valorant - Intermediate",
    description: "Test your knowledge of Valorant strategies and gameplay mechanics.",
    category: "Valorant",
    difficulty: "medium",
    questions: [
      {
        id: "val_medium_1",
        question: "Killjoy’s turret fires how many shots per burst?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        points: 15,
      },
      {
        id: "val_medium_2",
        question: "On which map would you find the place called 'C long'?",
        options: ["Lotus", "Sunset", "Breeze", "Haven"],
        correctAnswer: "Haven",
        points: 15,
      },
      {
        id: "val_medium_3",
        question: "How much does the Operator cost?",
        options: ["4600", "4700", "4800", "4900"],
        correctAnswer: "4700",
        points: 15,
      },
      {
        id: "val_medium_4",
        question: "On which map is the site called: 'A Tree' located near?",
        options: ["Ascent", "Lotus", "Haven", "Split"],
        correctAnswer: "Ascent",
        points: 15,
      },
      {
        id: "val_medium_5",
        question: "What is the credit bonus for winning a round?",
        options: ["2000", "2500", "3000", "3500"],
        correctAnswer: "3000",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "val_hard",
    title: "Valorant - Expert",
    description: "Test your advanced knowledge of Valorant agents, maps, and mechanics.",
    category: "Valorant",
    difficulty: "hard",
    questions: [
      {
        id: "val_hard_1",
        question: "During the 2024 Valorant Champions Grand Finals, which team executed a flawless 13-0 victory on the map Lotus against their opponents?",
        options: ["Sentinels", "Fnatic", "DRX", "G2"],
        correctAnswer: "Fnatic",
        points: 20,
      },
      {
        id: "val_hard_2",
        question: "What is the exact radius (in meters) of Killjoy’s Lockdown ultimate when it fully deploys",
        options: ["8 meters", "10 meters", "12 meters", "14 meters"],
        correctAnswer: "12 meters",
        points: 20,
      },
      {
        id: "val_hard_3",
        question: "Which weapon has the highest fire rate in the game?",
        options: ["Frenzy", "Spectre", "Odin", "Ares"],
        correctAnswer: "Frenzy",
        points: 20,
      },
      {
        id: "val_hard_4",
        question: "In Valorant lore, which country is Cypher from?",
        options: ["Egypt", "Morocco", "Algeria", "Turkey"],
        correctAnswer: "Morocco",
        points: 20,
      },
      {
        id: "val_hard_5",
        question: "What is the movement speed reduction when hit by Sage's Slow Orb?",
        options: ["50%", "55%", "60%", "65%"],
        correctAnswer: "65%",
        points: 20,
      },
      {
        id: "val_hard_6",
        question: "On the map Haven, there’s a hidden environmental detail: a small graffiti tag. Where is it located, and what does it depict?",
        options: ["C Long - A snake", "A Short - A crown", "B Site - A skull", "Garage - A bird"],
        correctAnswer: "Garage - A bird",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // CS:GO Quizzes
  {
    id: "csgo_easy",
    title: "CS:GO - Beginner",
    description: "Test your basic knowledge of CS:GO weapons and maps.",
    category: "CS:GO",
    difficulty: "easy",
    questions: [
      {
        id: "csgo_easy_1",
        question: "Which weapon is known as the 'One-Shot-Kill' sniper rifle?",
        options: ["AWP", "Scout", "AUG", "SG 553"],
        correctAnswer: "AWP",
        points: 10,
      },
      {
        id: "csgo_easy_2",
        question: "What is the most expensive pistol in CS:GO?",
        options: ["Desert Eagle", "Five-SeveN", "CZ75-Auto", "Dual Berettas"],
        correctAnswer: "Desert Eagle",
        points: 10,
      },
      {
        id: "csgo_easy_3",
        question: "Which map features a bombsite in a kitchen area?",
        options: ["Dust 2", "Mirage", "Inferno", "Cache"],
        correctAnswer: "Mirage",
        points: 10,
      },
      {
        id: "csgo_easy_4",
        question: "How many players are there on each team in a standard competitive match?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "csgo_medium",
    title: "CS:GO - Intermediate",
    description: "Test your knowledge of CS:GO strategies and economy.",
    category: "CS:GO",
    difficulty: "medium",
    questions: [
      {
        id: "csgo_medium_1",
        question: "What is the kill reward for eliminating an enemy with the M4A4?",
        options: ["$100", "$300", "$600", "$900"],
        correctAnswer: "$300",
        points: 15,
      },
      {
        id: "csgo_medium_2",
        question: "Which grenade causes damage through walls?",
        options: ["Flashbang", "Smoke Grenade", "Molotov", "HE Grenade"],
        correctAnswer: "Molotov",
        points: 15,
      },
      {
        id: "csgo_medium_3",
        question: "What's the maximum amount of money a player can have in CS:GO?",
        options: ["$10,000", "$12,000", "$16,000", "$20,000"],
        correctAnswer: "$16,000",
        points: 15,
      },
      {
        id: "csgo_medium_4",
        question: "On which map is 'Palace' an area?",
        options: ["Dust 2", "Mirage", "Nuke", "Inferno"],
        correctAnswer: "Mirage",
        points: 15,
      },
      {
        id: "csgo_medium_5",
        question: "How much does an AWP cost?",
        options: ["$4,300", "$4,500", "$4,750", "$5,000"],
        correctAnswer: "$4,750",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "csgo_hard",
    title: "CS:GO - Expert",
    description: "Test your advanced knowledge of CS:GO mechanics, history and professional scene.",
    category: "CS:GO",
    difficulty: "hard",
    questions: [
      {
        id: "csgo_hard_1",
        question: "Which team won the first CS:GO Major Championship?",
        options: ["Ninjas in Pyjamas", "Fnatic", "Virtus.Pro", "Astralis"],
        correctAnswer: "Fnatic",
        points: 20,
      },
      {
        id: "csgo_hard_2",
        question: "What was the original name of the map 'Cache'?",
        options: ["de_cpl_fire", "de_cpl_mill", "de_cpl_strike", "de_russka"],
        correctAnswer: "de_cpl_fire",
        points: 20,
      },
      {
        id: "csgo_hard_3",
        question: "What is the exact duration of a smoke grenade's effect?",
        options: ["15 seconds", "17.5 seconds", "18 seconds", "20 seconds"],
        correctAnswer: "18 seconds",
        points: 20,
      },
      {
        id: "csgo_hard_4",
        question: "What is the running speed with a knife equipped?",
        options: ["230 units/s", "240 units/s", "250 units/s", "260 units/s"],
        correctAnswer: "250 units/s",
        points: 20,
      },
      {
        id: "csgo_hard_5",
        question: "Which case introduced the Butterfly Knife?",
        options: ["Operation Breakout Case", "Chroma Case", "Falchion Case", "Shadow Case"],
        correctAnswer: "Operation Breakout Case",
        points: 20,
      },
      {
        id: "csgo_hard_6",
        question: "How many shots does it take for an AK-47 to break a window on Office?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // Minecraft Quizzes
  {
    id: "mc_easy",
    title: "Minecraft - Beginner",
    description: "Test your basic knowledge of Minecraft blocks and mobs.",
    category: "Minecraft",
    difficulty: "easy",
    questions: [
      {
        id: "mc_easy_1",
        question: "What block do you need to mine to get diamonds?",
        options: ["Diamond Block", "Diamond Ore", "Blue Stone", "Bedrock"],
        correctAnswer: "Diamond Ore",
        points: 10,
      },
      {
        id: "mc_easy_2",
        question: "Which of these mobs explodes?",
        options: ["Zombie", "Spider", "Creeper", "Skeleton"],
        correctAnswer: "Creeper",
        points: 10,
      },
      {
        id: "mc_easy_3",
        question: "How many pieces of iron ingot do you need to make a complete set of iron armor?",
        options: ["20", "24", "30", "36"],
        correctAnswer: "24",
        points: 10,
      },
      {
        id: "mc_easy_4",
        question: "What material do you need to craft a crafting table?",
        options: ["Stone", "Wood", "Iron", "Diamond"],
        correctAnswer: "Wood",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "mc_medium",
    title: "Minecraft - Intermediate",
    description: "Test your knowledge of Minecraft mechanics and recipes.",
    category: "Minecraft",
    difficulty: "medium",
    questions: [
      {
        id: "mc_medium_1",
        question: "How many bookshelves are needed to get level 30 enchantments?",
        options: ["10", "12", "15", "20"],
        correctAnswer: "15",
        points: 15,
      },
      {
        id: "mc_medium_2",
        question: "What block is immune to the Wither's destruction?",
        options: ["Obsidian", "Bedrock", "End Stone", "Ancient Debris"],
        correctAnswer: "Bedrock",
        points: 15,
      },
      {
        id: "mc_medium_3",
        question: "How many Eye of Enders are needed to activate the End Portal?",
        options: ["10", "12", "15", "20"],
        correctAnswer: "12",
        points: 15,
      },
      {
        id: "mc_medium_4",
        question: "What effect does a potion of Slow Falling provide?",
        options: [
          "Reduces fall damage", 
          "Slows descent speed", 
          "Both reduced damage and slower descent", 
          "Temporary hover ability"
        ],
        correctAnswer: "Both reduced damage and slower descent",
        points: 15,
      },
      {
        id: "mc_medium_5",
        question: "Which material can you use to tame and breed foxes?",
        options: ["Wheat", "Carrots", "Sweet Berries", "Rabbit"],
        correctAnswer: "Sweet Berries",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "mc_hard",
    title: "Minecraft - Expert",
    description: "Test your advanced knowledge of Minecraft mechanics and history.",
    category: "Minecraft",
    difficulty: "hard",
    questions: [
      {
        id: "mc_hard_1",
        question: "In what year was Minecraft first released (alpha version)?",
        options: ["2009", "2010", "2011", "2012"],
        correctAnswer: "2009",
        points: 20,
      },
      {
        id: "mc_hard_2",
        question: "What is the exact chance of a Pink Sheep spawning naturally?",
        options: ["0.08%", "0.16%", "0.24%", "0.32%"],
        correctAnswer: "0.16%",
        points: 20,
      },
      {
        id: "mc_hard_3",
        question: "What is the name of the unused mob that was shown during Minecraft Live 2020?",
        options: ["Copper Golem", "Iceologer", "Moobloom", "Glare"],
        correctAnswer: "Moobloom",
        points: 20,
      },
      {
        id: "mc_hard_4",
        question: "What was the original price of Minecraft during its initial release?",
        options: ["€5", "€10", "€15", "€20"],
        correctAnswer: "€10",
        points: 20,
      },
      {
        id: "mc_hard_5",
        question: "Which block has the highest blast resistance in the game?",
        options: ["Obsidian", "Ancient Debris", "Netherite Block", "Bedrock"],
        correctAnswer: "Bedrock",
        points: 20,
      },
      {
        id: "mc_hard_6",
        question: "What was the original name of Minecraft before it was officially named 'Minecraft'?",
        options: ["Cave Game", "Block World", "Mine Blocks", "Infiniminer 2"],
        correctAnswer: "Cave Game",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // General Gaming Quizzes
  {
    id: "gen_easy",
    title: "General Gaming - Casual Gamer",
    description: "Test your basic knowledge across various popular games.",
    category: "General Gaming",
    difficulty: "easy",
    questions: [
      {
        id: "gen_easy_1",
        question: "Which company makes the Call of Duty series?",
        options: ["EA", "Ubisoft", "Activision", "Bethesda"],
        correctAnswer: "Activision",
        points: 10,
      },
      {
        id: "gen_easy_2",
        question: "Which character is the mascot of Nintendo?",
        options: ["Sonic", "Mario", "Link", "Donkey Kong"],
        correctAnswer: "Mario",
        points: 10,
      },
      {
        id: "gen_easy_3",
        question: "Which game features a character named Master Chief?",
        options: ["Call of Duty", "Gears of War", "Doom", "Halo"],
        correctAnswer: "Halo",
        points: 10,
      },
      {
        id: "gen_easy_4",
        question: "Which of these consoles is made by Sony?",
        options: ["Xbox", "Switch", "PlayStation", "GameCube"],
        correctAnswer: "PlayStation",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "gen_medium",
    title: "General Gaming - Enthusiast",
    description: "Test your gaming knowledge across multiple franchises and publishers.",
    category: "General Gaming",
    difficulty: "medium",
    questions: [
      {
        id: "gen_medium_1",
        question: "Which game series features the fictional city of Rapture?",
        options: ["Fallout", "BioShock", "Half-Life", "Dead Space"],
        correctAnswer: "BioShock",
        points: 15,
      },
      {
        id: "gen_medium_2",
        question: "In what year was the first PlayStation released?",
        options: ["1993", "1994", "1995", "1996"],
        correctAnswer: "1994",
        points: 15,
      },
      {
        id: "gen_medium_3",
        question: "Which game studio created the Uncharted series?",
        options: ["Insomniac Games", "Naughty Dog", "Sucker Punch", "Santa Monica Studio"],
        correctAnswer: "Naughty Dog",
        points: 15,
      },
      {
        id: "gen_medium_4",
        question: "Which of these games was NOT developed by Blizzard Entertainment?",
        options: ["Diablo", "Overwatch", "World of Warcraft", "Guild Wars"],
        correctAnswer: "Guild Wars",
        points: 15,
      },
      {
        id: "gen_medium_5",
        question: "Which company developed the game engine Unity?",
        options: ["Epic Games", "Unity Technologies", "Valve", "Electronic Arts"],
        correctAnswer: "Unity Technologies",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "gen_hard",
    title: "General Gaming - Hardcore",
    description: "Test your deep gaming knowledge across gaming history and obscure facts.",
    category: "General Gaming",
    difficulty: "hard",
    questions: [
      {
        id: "gen_hard_1",
        question: "What was the first commercially successful video game?",
        options: ["Pong", "Space Invaders", "Pac-Man", "Spacewar!"],
        correctAnswer: "Pong",
        points: 20,
      },
      {
        id: "gen_hard_2",
        question: "Which game designer created the Metal Gear series?",
        options: ["Shigeru Miyamoto", "Hideo Kojima", "Sid Meier", "Gabe Newell"],
        correctAnswer: "Hideo Kojima",
        points: 20,
      },
      {
        id: "gen_hard_3",
        question: "In what year was the gaming crash of North America?",
        options: ["1977", "1983", "1985", "1989"],
        correctAnswer: "1983",
        points: 20,
      },
      {
        id: "gen_hard_4",
        question: "What was the first game to feature a fully 3D polygon environment?",
        options: ["Wolfenstein 3D", "Star Fox", "Virtua Racing", "I, Robot"],
        correctAnswer: "I, Robot",
        points: 20,
      },
      {
        id: "gen_hard_5",
        question: "Which company developed the first graphics processing unit (GPU)?",
        options: ["AMD", "Intel", "NVIDIA", "3dfx"],
        correctAnswer: "NVIDIA",
        points: 20,
      },
      {
        id: "gen_hard_6",
        question: "What was the development codename for the Nintendo GameCube?",
        options: ["Revolution", "Dolphin", "Project Reality", "Ultra 64"],
        correctAnswer: "Dolphin",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // New General Gaming Medium Quiz - Games Knowledge
  {
    id: "gen_medium_extra1",
    title: "General Gaming - Games Across Generations",
    description: "Test your knowledge about popular games across different gaming generations.",
    category: "General Gaming",
    difficulty: "medium",
    questions: [
      {
        id: "gen_medium_extra1_1",
        question: "Which game popularized the Battle Royale genre?",
        options: [
          "Fortnite",
          "PUBG",
          "Apex Legends",
          "H1Z1"
        ],
        correctAnswer: "PUBG",
        points: 15,
      },
      {
        id: "gen_medium_extra1_2",
        question: "Which of these games was developed by FromSoftware?",
        options: [
          "Monster Hunter",
          "Devil May Cry",
          "Dark Souls",
          "Bayonetta"
        ],
        correctAnswer: "Dark Souls",
        points: 15,
      },
      {
        id: "gen_medium_extra1_3",
        question: "Which game series features a protagonist named Kratos?",
        options: [
          "Assassin's Creed",
          "God of War",
          "Gears of War",
          "Prince of Persia"
        ],
        correctAnswer: "God of War",
        points: 15,
      },
      {
        id: "gen_medium_extra1_4",
        question: "What year was the first PlayStation console released?",
        options: [
          "1991",
          "1994",
          "1997",
          "2000"
        ],
        correctAnswer: "1994",
        points: 15,
      },
      {
        id: "gen_medium_extra1_5",
        question: "Which of these is NOT a game developed by Blizzard Entertainment?",
        options: [
          "Overwatch",
          "Diablo",
          "Final Fantasy",
          "StarCraft"
        ],
        correctAnswer: "Final Fantasy",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  
  // New General Gaming Medium Quiz - Game Characters Knowledge
  {
    id: "gen_medium_extra2",
    title: "General Gaming - Iconic Characters",
    description: "How well do you know the most iconic video game characters?",
    category: "General Gaming",
    difficulty: "medium",
    questions: [
      {
        id: "gen_medium_extra2_1",
        question: "Who is the protagonist of the Witcher game series?",
        options: [
          "Ezio Auditore",
          "Geralt of Rivia",
          "Ciri",
          "Dandelion"
        ],
        correctAnswer: "Geralt of Rivia",
        points: 15,
      },
      {
        id: "gen_medium_extra2_2",
        question: "Which character is known for the catchphrase 'It's-a me!'?",
        options: [
          "Sonic the Hedgehog",
          "Luigi",
          "Mario",
          "Wario"
        ],
        correctAnswer: "Mario",
        points: 15,
      },
      {
        id: "gen_medium_extra2_3",
        question: "Which of these is NOT a playable character in Super Smash Bros. Ultimate?",
        options: [
          "Solid Snake",
          "Cloud Strife",
          "Master Chief",
          "Joker (Persona 5)"
        ],
        correctAnswer: "Master Chief",
        points: 15,
      },
      {
        id: "gen_medium_extra2_4",
        question: "Who is the main antagonist in the Legend of Zelda series?",
        options: [
          "Ganon/Ganondorf",
          "Bowser",
          "Majora",
          "Midna"
        ],
        correctAnswer: "Ganon/Ganondorf",
        points: 15,
      },
      {
        id: "gen_medium_extra2_5",
        question: "Which character has the ability to absorb powers from defeated enemies?",
        options: [
          "Mega Man",
          "Kirby",
          "Samus Aran",
          "Donkey Kong"
        ],
        correctAnswer: "Kirby",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  
  // New General Gaming Hard Quiz - Games Lore
  {
    id: "gen_hard_extra1",
    title: "General Gaming - Deep Lore Masters",
    description: "Test your knowledge of complex video game lore and backstories.",
    category: "General Gaming",
    difficulty: "hard",
    questions: [
      {
        id: "gen_hard_extra1_1",
        question: "In the Elder Scrolls universe, which race was native to Morrowind?",
        options: [
          "Nords",
          "Imperials",
          "Dunmer",
          "Altmer"
        ],
        correctAnswer: "Dunmer",
        points: 20,
      },
      {
        id: "gen_hard_extra1_2",
        question: "In Bioshock, what was the original name of the underwater city Rapture's founder?",
        options: [
          "Andrew Ryan",
          "Frank Fontaine",
          "Andrei Rianofski",
          "Jack Wynand"
        ],
        correctAnswer: "Andrei Rianofski",
        points: 20,
      },
      {
        id: "gen_hard_extra1_3",
        question: "In Dark Souls lore, who is known as the 'Father of the Abyss'?",
        options: [
          "Gwyn, Lord of Cinder",
          "Artorias the Abysswalker",
          "Manus",
          "Gravelord Nito"
        ],
        correctAnswer: "Manus",
        points: 20,
      },
      {
        id: "gen_hard_extra1_4",
        question: "In Mass Effect, what is the name given to the cycle of extinction perpetrated by the Reapers?",
        options: [
          "The Great Cleansing",
          "The Convergence",
          "The Harvest",
          "The Rapture"
        ],
        correctAnswer: "The Harvest",
        points: 20,
      },
      {
        id: "gen_hard_extra1_5",
        question: "In Halo lore, who created the Halo rings?",
        options: [
          "The UNSC",
          "The Covenant",
          "The Forerunners",
          "The Flood"
        ],
        correctAnswer: "The Forerunners",
        points: 20,
      },
      {
        id: "gen_hard_extra1_6",
        question: "In Metal Gear Solid, who was the original Snake (codename)?",
        options: [
          "Solid Snake",
          "Liquid Snake",
          "Naked Snake",
          "Venom Snake"
        ],
        correctAnswer: "Naked Snake",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // New General Gaming Hard Quiz - Game Characters Deep Dive
  {
    id: "gen_hard_extra2",
    title: "General Gaming - Character Masterclass",
    description: "Test your in-depth knowledge of video game characters' backgrounds and storylines.",
    category: "General Gaming",
    difficulty: "hard",
    questions: [
      {
        id: "gen_hard_extra2_1",
        question: "In the God of War series, who was Kratos before he became the Ghost of Sparta?",
        options: [
          "A Spartan General",
          "A Greek God",
          "A Roman Centurion",
          "An Athenian Scholar"
        ],
        correctAnswer: "A Spartan General",
        points: 20,
      },
      {
        id: "gen_hard_extra2_2",
        question: "In Final Fantasy VII, what is the name of Cloud Strife's childhood friend from Nibelheim?",
        options: [
          "Zack Fair",
          "Tifa Lockhart",
          "Aerith Gainsborough",
          "Sephiroth"
        ],
        correctAnswer: "Tifa Lockhart",
        points: 20,
      },
      {
        id: "gen_hard_extra2_3",
        question: "In the Resident Evil series, which character is known as 'The Human Tyrant'?",
        options: [
          "Albert Wesker",
          "Chris Redfield",
          "Ada Wong",
          "Leon Kennedy"
        ],
        correctAnswer: "Albert Wesker",
        points: 20,
      },
      {
        id: "gen_hard_extra2_4",
        question: "In the Zelda timeline, who is the very first Link chronologically?",
        options: [
          "The Hero of Time",
          "The Hero of the Sky",
          "The Hero of Winds",
          "The Hero of Twilight"
        ],
        correctAnswer: "The Hero of the Sky",
        points: 20,
      },
      {
        id: "gen_hard_extra2_5",
        question: "Who is the villain character that was once friends with Nathan Drake in the Uncharted series?",
        options: [
          "Rafe Adler",
          "Harry Flynn",
          "Zoran Lazarević",
          "Roman"
        ],
        correctAnswer: "Harry Flynn",
        points: 20,
      },
      {
        id: "gen_hard_extra2_6",
        question: "In the Fallout series, who founded the Brotherhood of Steel?",
        options: [
          "Elder Maxson",
          "Captain Roger Maxson",
          "Elder Lyons",
          "The Vault Dweller"
        ],
        correctAnswer: "Captain Roger Maxson",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // Elden Ring Quizzes
  {
    id: "elden_easy",
    title: "Elden Ring - Tarnished Beginnings",
    description: "Test your basic knowledge of FromSoftware's Elden Ring.",
    category: "Elden Ring",
    difficulty: "easy",
    questions: [
      {
        id: "elden_easy_1",
        question: "Who is the final boss of Elden Ring?",
        options: [
          "Starscourge Radahn",
          "Malenia, Blade of Miquella",
          "Elden Beast",
          "Godfrey, First Elden Lord"
        ],
        correctAnswer: "Elden Beast",
        points: 10,
      },
      {
        id: "elden_easy_2",
        question: "What is the name of the starting area in Elden Ring?",
        options: [
          "Limgrave",
          "Liurnia",
          "Caelid",
          "Leyndell"
        ],
        correctAnswer: "Limgrave",
        points: 10,
      },
      {
        id: "elden_easy_3",
        question: "What is the name of your trusty spectral steed?",
        options: [
          "Torrent",
          "Shadow",
          "Epona",
          "Roach"
        ],
        correctAnswer: "Torrent",
        points: 10,
      },
      {
        id: "elden_easy_4",
        question: "What currency is used to level up in Elden Ring?",
        options: [
          "Souls",
          "Blood Echoes",
          "Runes",
          "Grace"
        ],
        correctAnswer: "Runes",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "elden_medium",
    title: "Elden Ring - Demigod Hunter",
    description: "Test your knowledge about the Lands Between and its fearsome bosses.",
    category: "Elden Ring",
    difficulty: "medium",
    questions: [
      {
        id: "elden_medium_1",
        question: "Which demigod is known as the 'Lord of Blasphemy'?",
        options: [
          "Rykard",
          "Radahn",
          "Rennala",
          "Mohg"
        ],
        correctAnswer: "Rykard",
        points: 15,
      },
      {
        id: "elden_medium_2",
        question: "What is the name of the academy in Liurnia?",
        options: [
          "Academy of Raya Lucaria",
          "Morne Academy",
          "Caria Manor",
          "Sellia Academy"
        ],
        correctAnswer: "Academy of Raya Lucaria",
        points: 15,
      },
      {
        id: "elden_medium_3",
        question: "Which NPC gives you the Roundtable Hold invitation?",
        options: [
          "Melina",
          "White-Faced Varré",
          "Gideon Ofnir",
          "Blaidd"
        ],
        correctAnswer: "Melina",
        points: 15,
      },
      {
        id: "elden_medium_4",
        question: "What is the name of the fallen dragon in Caelid?",
        options: [
          "Lansseax",
          "Fortissax",
          "Greyoll",
          "Agheel"
        ],
        correctAnswer: "Greyoll",
        points: 15,
      },
      {
        id: "elden_medium_5",
        question: "Which of these is NOT an Elden Ring starting class?",
        options: [
          "Astrologer",
          "Samurai",
          "Hunter",
          "Prisoner"
        ],
        correctAnswer: "Hunter",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "elden_hard",
    title: "Elden Ring - Elden Lord Aspirant",
    description: "Test your deep knowledge of Elden Ring's lore, secrets, and mechanics.",
    category: "Elden Ring",
    difficulty: "hard",
    questions: [
      {
        id: "elden_hard_1",
        question: "Who shattered the Elden Ring?",
        options: [
          "Marika",
          "Radagon",
          "Godfrey",
          "Ranni"
        ],
        correctAnswer: "Marika",
        points: 20,
      },
      {
        id: "elden_hard_2",
        question: "Which of these characters is NOT a child of Queen Marika?",
        options: [
          "Miquella",
          "Malenia",
          "Rykard",
          "Ranni"
        ],
        correctAnswer: "Ranni",
        points: 20,
      },
      {
        id: "elden_hard_3",
        question: "What is the name of Ranni's two-headed mentor?",
        options: [
          "Seluvis",
          "Blaidd",
          "Iji",
          "Preceptor Miriam"
        ],
        correctAnswer: "Iji",
        points: 20,
      },
      {
        id: "elden_hard_4",
        question: "What is the name of the outer god associated with the Frenzied Flame?",
        options: [
          "The Greater Will",
          "The Formless Mother",
          "The Three Fingers",
          "It has no name"
        ],
        correctAnswer: "It has no name",
        points: 20,
      },
      {
        id: "elden_hard_5",
        question: "Which Elden Ring boss has the most health points in the game?",
        options: [
          "Malenia",
          "Starscourge Radahn",
          "Fire Giant",
          "Dragonlord Placidusax"
        ],
        correctAnswer: "Fire Giant",
        points: 20,
      },
      {
        id: "elden_hard_6",
        question: "What item is required to see the Three Fingers?",
        options: [
          "Celestial Dew",
          "Unalloyed Gold Needle",
          "Fingerprint Grape",
          "Academy Glintstone Key"
        ],
        correctAnswer: "Fingerprint Grape",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // Red Dead Redemption 2 Quizzes
  {
    id: "rdr2_easy",
    title: "Red Dead Redemption 2 - Wild West Beginner",
    description: "Test your basic knowledge about Red Dead Redemption 2.",
    category: "Red Dead Redemption 2",
    difficulty: "easy",
    questions: [
      {
        id: "rdr2_easy_1",
        question: "Who is the main protagonist of Red Dead Redemption 2?",
        options: [
          "John Marston",
          "Arthur Morgan",
          "Dutch van der Linde",
          "Sadie Adler"
        ],
        correctAnswer: "Arthur Morgan",
        points: 10,
      },
      {
        id: "rdr2_easy_2",
        question: "What is the name of Arthur's horse at the beginning of the game?",
        options: [
          "Shadow",
          "Baylock",
          "Boadicea",
          "Silver Dollar"
        ],
        correctAnswer: "Boadicea",
        points: 10,
      },
      {
        id: "rdr2_easy_3",
        question: "What is the name of the gang Arthur belongs to?",
        options: [
          "O'Driscoll Boys",
          "Van der Linde Gang",
          "Lemoyne Raiders",
          "Del Lobo Gang"
        ],
        correctAnswer: "Van der Linde Gang",
        points: 10,
      },
      {
        id: "rdr2_easy_4",
        question: "Where does the game's introduction take place?",
        options: [
          "Saint Denis",
          "Blackwater",
          "Valentine",
          "The Grizzlies"
        ],
        correctAnswer: "The Grizzlies",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "rdr2_medium",
    title: "Red Dead Redemption 2 - Outlaw's Journey",
    description: "Test your knowledge of Red Dead Redemption 2's story and characters.",
    category: "Red Dead Redemption 2",
    difficulty: "medium",
    questions: [
      {
        id: "rdr2_medium_1",
        question: "What disease does Arthur Morgan eventually develop?",
        options: [
          "Cholera",
          "Tuberculosis",
          "Smallpox",
          "Typhoid Fever"
        ],
        correctAnswer: "Tuberculosis",
        points: 15,
      },
      {
        id: "rdr2_medium_2",
        question: "What is the name of the plantation where the gang hideout is located in Chapter 3?",
        options: [
          "Braithwaite Manor",
          "Shady Belle",
          "Caliga Hall",
          "Clemens Point"
        ],
        correctAnswer: "Clemens Point",
        points: 15,
      },
      {
        id: "rdr2_medium_3",
        question: "Who betrays the gang and is working with the Pinkertons?",
        options: [
          "Bill Williamson",
          "Javier Escuella",
          "Micah Bell",
          "Charles Smith"
        ],
        correctAnswer: "Micah Bell",
        points: 15,
      },
      {
        id: "rdr2_medium_4",
        question: "What is the name of the big city in Lemoyne?",
        options: [
          "Blackwater",
          "Annesburg",
          "Rhodes",
          "Saint Denis"
        ],
        correctAnswer: "Saint Denis",
        points: 15,
      },
      {
        id: "rdr2_medium_5",
        question: "Which character is known for his photography hobby?",
        options: [
          "Albert Mason",
          "Josiah Trelawny",
          "Eagle Flies",
          "Leopold Strauss"
        ],
        correctAnswer: "Albert Mason",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "rdr2_hard",
    title: "Red Dead Redemption 2 - Legendary Gunslinger",
    description: "Test your expertise in the deepest secrets and details of Red Dead Redemption 2.",
    category: "Red Dead Redemption 2",
    difficulty: "hard",
    questions: [
      {
        id: "rdr2_hard_1",
        question: "What is the real name of the Night Folk leader?",
        options: [
          "Sonny",
          "They have no named leader",
          "Agnes Dowd",
          "The Aberdeen Siblings"
        ],
        correctAnswer: "They have no named leader",
        points: 20,
      },
      {
        id: "rdr2_hard_2",
        question: "What is the name of Arthur's former love interest mentioned in his journal?",
        options: [
          "Abigail",
          "Sadie",
          "Mary",
          "Charlotte"
        ],
        correctAnswer: "Mary",
        points: 20,
      },
      {
        id: "rdr2_hard_3",
        question: "How many total gang members are there in the Van der Linde gang at the start of the game?",
        options: [
          "21",
          "23",
          "24",
          "26"
        ],
        correctAnswer: "23",
        points: 20,
      },
      {
        id: "rdr2_hard_4",
        question: "What is the name of the ghost that can be encountered in Bluewater Marsh?",
        options: [
          "Agnes Dowd",
          "Catherine Braithwaite",
          "Gertrude Braithwaite",
          "Bonnie MacFarlane"
        ],
        correctAnswer: "Agnes Dowd",
        points: 20,
      },
      {
        id: "rdr2_hard_5",
        question: "What happened to the inhabitants of Armadillo?",
        options: [
          "They were massacred by bandits",
          "They fled due to cholera outbreaks",
          "They were forced out by the government",
          "They died in a fire"
        ],
        correctAnswer: "They fled due to cholera outbreaks",
        points: 20,
      },
      {
        id: "rdr2_hard_6",
        question: "Which mission features the song 'That's The Way It Is'?",
        options: [
          "A Short Walk in a Pretty Town",
          "Red Dead Redemption",
          "Our Best Selves",
          "American Venom"
        ],
        correctAnswer: "Red Dead Redemption",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
  
  // GTA V Quizzes
  {
    id: "gtav_easy",
    title: "GTA V - Los Santos Novice",
    description: "Test your basic knowledge about Grand Theft Auto V.",
    category: "GTA V",
    difficulty: "easy",
    questions: [
      {
        id: "gtav_easy_1",
        question: "How many playable protagonists are there in GTA V's story mode?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctAnswer: "3",
        points: 10,
      },
      {
        id: "gtav_easy_2",
        question: "What is the name of the fictional city in GTA V?",
        options: [
          "Liberty City",
          "Vice City",
          "Los Santos",
          "San Fierro"
        ],
        correctAnswer: "Los Santos",
        points: 10,
      },
      {
        id: "gtav_easy_3",
        question: "What is the name of Michael's wife?",
        options: [
          "Amanda",
          "Patricia",
          "Tracey",
          "Denise"
        ],
        correctAnswer: "Amanda",
        points: 10,
      },
      {
        id: "gtav_easy_4",
        question: "Which character is a former bank robber who faked his death and entered witness protection?",
        options: [
          "Trevor Philips",
          "Franklin Clinton",
          "Michael De Santa",
          "Lamar Davis"
        ],
        correctAnswer: "Michael De Santa",
        points: 10,
      },
    ],
    totalPoints: 40,
  },
  {
    id: "gtav_medium",
    title: "GTA V - Heist Planner",
    description: "Test your knowledge about GTA V's missions, characters, and locations.",
    category: "GTA V",
    difficulty: "medium",
    questions: [
      {
        id: "gtav_medium_1",
        question: "What is the name of Trevor's business?",
        options: [
          "Trevor Philips Enterprises",
          "TP Industries",
          "Sandy Shores Cargo",
          "Blaine County Shipping"
        ],
        correctAnswer: "Trevor Philips Enterprises",
        points: 15,
      },
      {
        id: "gtav_medium_2",
        question: "Which character does Franklin work for at the beginning of the game?",
        options: [
          "Lamar Davis",
          "Simeon Yetarian",
          "Stretch",
          "Lester Crest"
        ],
        correctAnswer: "Simeon Yetarian",
        points: 15,
      },
      {
        id: "gtav_medium_3",
        question: "What is the name of the first major heist in GTA V?",
        options: [
          "The Jewel Store Job",
          "The Merryweather Heist",
          "The Paleto Score",
          "The Bureau Raid"
        ],
        correctAnswer: "The Jewel Store Job",
        points: 15,
      },
      {
        id: "gtav_medium_4",
        question: "What is the name of Michael's therapist?",
        options: [
          "Dr. Isiah Friedlander",
          "Dr. Ray De Angelo Harris",
          "Dr. Madd Dogg",
          "Dr. Steve Haines"
        ],
        correctAnswer: "Dr. Isiah Friedlander",
        points: 15,
      },
      {
        id: "gtav_medium_5",
        question: "Which of these is NOT one of the three endings available in GTA V?",
        options: [
          "Kill Trevor",
          "Kill Michael",
          "Kill Franklin",
          "Save All Three"
        ],
        correctAnswer: "Kill Franklin",
        points: 15,
      },
    ],
    totalPoints: 75,
  },
  {
    id: "gtav_hard",
    title: "GTA V - Criminal Mastermind",
    description: "Test your advanced knowledge about GTA V's secrets, easter eggs, and hidden details.",
    category: "GTA V",
    difficulty: "hard",
    questions: [
      {
        id: "gtav_hard_1",
        question: "What is the name of the sunken UFO that can be found underwater?",
        options: [
          "North Yankton UFO",
          "Mount Chiliad UFO",
          "Sandy Shores UFO",
          "Pacific Ocean UFO"
        ],
        correctAnswer: "Pacific Ocean UFO",
        points: 20,
      },
      {
        id: "gtav_hard_2",
        question: "What is written on the Mount Chiliad mural?",
        options: [
          "Come back when your journey is complete",
          "Come back when your story is complete",
          "Come back when the time is right",
          "Come back when the truth is revealed"
        ],
        correctAnswer: "Come back when your story is complete",
        points: 20,
      },
      {
        id: "gtav_hard_3",
        question: "Which famous actor voices Michael De Santa?",
        options: [
          "Ray Liotta",
          "Steven Ogg",
          "Ned Luke",
          "Robert De Niro"
        ],
        correctAnswer: "Ned Luke",
        points: 20,
      },
      {
        id: "gtav_hard_4",
        question: "Which mysterious character sends Franklin to collect spaceship parts?",
        options: [
          "Epsilon Program Leader",
          "Omega",
          "Lester",
          "The Truth"
        ],
        correctAnswer: "Omega",
        points: 20,
      },
      {
        id: "gtav_hard_5",
        question: "What is the maximum amount of money a player can potentially earn after completing the final heist (The Big Score)?",
        options: [
          "Around $25 million per character",
          "Around $41 million per character",
          "Around $65 million per character",
          "Around $201 million per character"
        ],
        correctAnswer: "Around $41 million per character",
        points: 20,
      },
      {
        id: "gtav_hard_6",
        question: "What is the name of the secret area under Fort Zancudo?",
        options: [
          "The Bunker",
          "IAA Facility",
          "The Elevator Shaft",
          "There is no accessible secret area"
        ],
        correctAnswer: "The Elevator Shaft",
        points: 20,
      },
    ],
    totalPoints: 120,
  },
];

export const getQuizzes = (): Quiz[] => {
  const storedQuizzes = localStorage.getItem("quizzes");
  return storedQuizzes ? JSON.parse(storedQuizzes) : initialQuizzes;
};

export const saveQuizzes = (quizzes: Quiz[]) => {
  localStorage.setItem("quizzes", JSON.stringify(quizzes));
};

export const getUsers = (): User[] => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : initialUsers;
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getCurrentUser = (): User => {
  return getUsers()[0];
};

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  progress: number;
  timeLimit: string;
  rewardPoints: number;
}

export const getChallenges = (): Challenge[] => {
  return [
    {
      id: "c1",
      title: "League Mastermind",
      description: "Complete 5 League of Legends quizzes with at least 90% accuracy",
      difficulty: "easy",
      progress: 20,
      timeLimit: "7 days",
      rewardPoints: 500
    },
    {
      id: "c2",
      title: "FPS Expert",
      description: "Ace all Valorant and CS:GO quizzes within 24 hours",
      difficulty: "medium",
      progress: 0,
      timeLimit: "24 hours",
      rewardPoints: 1000
    },
    {
      id: "c3",
      title: "Gaming Historian",
      description: "Complete all General Gaming quizzes without any mistakes",
      difficulty: "hard",
      progress: 0,
      timeLimit: "No time limit",
      rewardPoints: 2000
    },
    {
      id: "c4",
      title: "Quiz Marathon",
      description: "Complete 10 quizzes across any categories in a single session",
      difficulty: "medium",
      progress: 30,
      timeLimit: "12 hours",
      rewardPoints: 800
    },
    {
      id: "c5",
      title: "Speed Demon",
      description: "Finish any 3 quizzes in under 5 minutes each",
      difficulty: "easy",
      progress: 66,
      timeLimit: "1 day",
      rewardPoints: 600
    }
  ];
};

export const saveUserCosmetics = (cosmetic: Cosmetic) => {
  const user = getCurrentUser();
  
  if (!user.cosmetics) {
    user.cosmetics = [];
  }
  
  user.cosmetics.push({
    ...cosmetic,
    equipped: false,
    purchasedAt: new Date().toISOString()
  });
  
  const users = getUsers();
  const updatedUsers = users.map(u => u.id === user.id ? user : u);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};

export const getQuizById = (quizId: string): Quiz | undefined => {
  const quizzes = getQuizzes();
  return quizzes.find(quiz => quiz.id === quizId);
};

export const saveUserProgress = (quizId: string | undefined, userId?: string, score?: number) => {
  if (!quizId || !score) return;
  
  const user = userId ? getUsers().find(u => u.id === userId) : getCurrentUser();
  if (!user) return;

  if (!user.completedQuizzes) user.completedQuizzes = [];

  if (typeof user.completedQuizzes === 'number') {
    user.completedQuizzes = Array(user.completedQuizzes + 1).fill('Quiz');
  } else {
    user.completedQuizzes.push(quizId);
  }
  
  if (!user.score) user.score = 0;
  user.score += score;
  
  const quiz = getQuizById(quizId);
  if (quiz && quiz.category) {
    if (!user.categoryScores) user.categoryScores = {};
    if (!user.categoryScores[quiz.category]) user.categoryScores[quiz.category] = 0;
    user.categoryScores[quiz.category] += score;
  }
  
  const users = getUsers();
  const updatedUsers = users.map(u => u.id === user.id ? user : u);
  saveUsers(updatedUsers);
};

export const getUserCosmetics = (): Cosmetic[] => {
  const user = getCurrentUser();
  return user.cosmetics || [];
};

export const getAchievements = (): Achievement[] => {
  return [
    {
      id: "a1",
      title: "Quiz Novice",
      description: "Complete your first quiz",
      unlocked: true,
      unlockedAt: "2023-09-15T14:30:00Z",
      icon: "award"
    },
    {
      id: "a2",
      title: "Knowledge Seeker",
      description: "Complete 5 quizzes",
      unlocked: true,
      unlockedAt: "2023-10-05T18:45:00Z",
      icon: "brain"
    },
    {
      id: "a3",
      title: "Quiz Master",
      description: "Complete 10 quizzes",
      unlocked: false,
      icon: "trophy"
    },
    {
      id: "a4",
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      unlocked: true,
      unlockedAt: "2023-11-11T09:20:00Z",
      icon: "star"
    },
    {
      id: "a5",
      title: "Challenge Accepted",
      description: "Complete your first challenge",
      unlocked: true,
      unlockedAt: "2023-11-20T16:30:00Z",
      icon: "flag"
    }
  ];
};

export const equipCosmetic = (cosmeticId: string): void => {
  const user = getCurrentUser();
  const cosmetic = user.cosmetics?.find(c => c.id === cosmeticId);
  
  if (!cosmetic) return;
  
  if (!user.equippedCosmetics) {
    user.equippedCosmetics = {};
  }
  
  if (user.equippedCosmetics[cosmetic.type]) {
    const currentEquipped = user.cosmetics?.find(c => c.id === user.equippedCosmetics![cosmetic.type]);
    if (currentEquipped) {
      currentEquipped.equipped = false;
    }
  }
  
  cosmetic.equipped = true;
  user.equippedCosmetics[cosmetic.type] = cosmeticId;
  
  const users = getUsers();
  const updatedUsers = users.map(u => u.id === user.id ? user : u);
  saveUsers(updatedUsers);
};

export const unequipCosmetic = (cosmeticType: string): void => {
  const user = getCurrentUser();
  
  if (!user.equippedCosmetics || !user.equippedCosmetics[cosmeticType]) return;
  
  const cosmeticId = user.equippedCosmetics[cosmeticType];
  const cosmetic = user.cosmetics?.find(c => c.id === cosmeticId);
  
  if (cosmetic) {
    cosmetic.equipped = false;
  }
  
  delete user.equippedCosmetics[cosmeticType];
  
  const users = getUsers();
  const updatedUsers = users.map(u => u.id === user.id ? user : u);
  saveUsers(updatedUsers);
};

export const getLeaderboard = (): User[] => {
  const users = getUsers();
  return [...users].sort((a, b) => (b.score || 0) - (a.score || 0));
};

export const getCategories = (): string[] => {
  const quizzes = getQuizzes();
  const categories = new Set<string>();
  
  quizzes.forEach(quiz => {
    if (quiz.category) {
      categories.add(quiz.category);
    }
  });
  
  return Array.from(categories);
};
