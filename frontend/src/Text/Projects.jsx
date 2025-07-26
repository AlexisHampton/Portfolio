export function GetSimulationProjectDetails() {
    return {
        name: "NPC Simulation Game",
        summary: `A simulation game where NPCs do tasks based on their needs and jobs. 
        
        •  Implemented a scalable task system that supports and maintains hundreds of different tasks
        •  Learned how to fit new systems into existing solutions to ensure proper OOP principles
        •  Utilized virtual methods to craft dozens of different tasks
`,
        techStack: "C#, Godot",
        challenges: [
            "One of the biggest challenges was figuring out if Inventories should hold ItemRs or Items. An ItemR is the name and sprite data of an Item. An Item is the physical object that would exist in the game world. If Inventories held ItemRs, Items could be instantiated at runtime, but it would be very difficult to “pick up” Items since referencing an ItemR whilst an ItemR referenced that Item would create a circular dependency. On the other hand, if they held Items, gathering would be easy, but it would be difficult to instantiate Items. I tried the first approach of using Items, which made it easy to gather Items, but made interacting with crafting systems difficult, since they relied on ItemRs. In the end, I went with holding both of them. That way, I could have the Items that were already in the world and thus didn’t need to be instantiated, while also having the data of the ItemR for quick comparison in crafting and cooking systems.",
            "Talking between NPCs was hard to implement as a task since a Task could only support one NPC at a time. But by handling the multiple NPCs in the NPC class instead of the PartnerTask or TalkTask class, I was able to have more than one NPC on a task.",
            "Optimizing finding tasks was difficult because there are so many variables that determine which Task gets picked. In the beginning, I tried to sense them with only collision, and would have to filter out tasks that were not usable. Then, I tried to find tasks that were attached to Places, but this meant that a task outside of a Place, like a SitTask on a bench, could not be found, or would have to rely on the old way. I eventually decided to find tasks using ITaskHolder, which would hold all of the tasks for an object and allow them to be found. And a more detailed GetTaskScore() function that considered a Task's needs, personality, and completeness meant that there wasn't much filtering needed when the tasks were found."
        ],
        screenshots: [
            "/Simulation/Screenshot1.png",
            "/Simulation/Screenshot2.png",
            "/Simulation/Screenshot3.png",
            "/Simulation/chopping wood screenshot.png",
            "/Simulation/crafting screenshot.png",
            "/Simulation/gardening screenshot.png"
        ],
        screenshotAlts: [
            "An NPC feeding her kid",
            "Two NPCs talking",
            "An NPC cooking at a restaurant",
            "Player chopping trees",
            "Player crafting via a UI",
            "Player after planting a seed"
        ],
        github: "https://github.com/AlexisHampton/NPC-AI-Simulation-Game",
        date: "Novemeber 2024 - present",
        deployed: "https://severedstars.itch.io/npc-ai-simulation"

    }
}

export function GetWritingBlogProjectDetails() {
    return {
        name: "NPC Simulation Game",
        summary: `A simulation game where NPCs do tasks based on their needs and jobs. 
        
        •  Implemented a scalable task system that supports and maintains hundreds of different tasks
        •  Learned how to fit new systems into existing solutions to ensure proper OOP principles
        •  Utilized virtual methods to craft dozens of different tasks
`,
        techStack: "C#, Godot",
        challenges: [
            "One of the biggest challenges was figuring out if Inventories should hold ItemRs or Items. An ItemR is the name and sprite data of an Item. An Item is the physical object that would exist in the game world. If Inventories held ItemRs, Items could be instantiated at runtime, but it would be very difficult to “pick up” Items since referencing an ItemR whilst an ItemR referenced that Item would create a circular dependency. On the other hand, if they held Items, gathering would be easy, but it would be difficult to instantiate Items. I tried the first approach of using Items, which made it easy to gather Items, but made interacting with crafting systems difficult, since they relied on ItemRs. In the end, I went with holding both of them. That way, I could have the Items that were already in the world and thus didn’t need to be instantiated, while also having the data of the ItemR for quick comparison in crafting and cooking systems.",
            "Talking between NPCs was hard to implement as a task since a Task could only support one NPC at a time. But by handling the multiple NPCs in the NPC class instead of the PartnerTask or TalkTask class, I was able to have more than one NPC on a task.",
            "Optimizing finding tasks was difficult because there are so many variables that determine which Task gets picked. In the beginning, I tried to sense them with only collision, and would have to filter out tasks that were not usable. Then, I tried to find tasks that were attached to Places, but this meant that a task outside of a Place, like a SitTask on a bench, could not be found, or would have to rely on the old way. I eventually decided to find tasks using ITaskHolder, which would hold all of the tasks for an object and allow them to be found. And a more detailed GetTaskScore() function that considered a Task's needs, personality, and completeness meant that there wasn't much filtering needed when the tasks were found."
        ],
        screenshots: [
            "/Simulation/Screenshot1.png",
            "/Simulation/Screenshot2.png",
            "/Simulation/Screenshot3.png",
            "/Simulation/chopping wood screenshot.png",
            "/Simulation/crafting screenshot.png",
            "/Simulation/gardening screenshot.png"
        ],
        screenshotAlts: [
            "An NPC feeding her kid",
            "Two NPCs talking",
            "An NPC cooking at a restaurant",
            "Player chopping trees",
            "Player crafting via a UI",
            "Player after planting a seed"
        ],
        github: "https://github.com/AlexisHampton/NPC-AI-Simulation-Game",
        date: "Novemeber 2024 - present",
        deployed: "https://severedstars.itch.io/npc-ai-simulation"

    }
}

export function GetGameThoughtsProjectDetails() {
    return {
        name: "NPC Simulation Game",
        summary: `A simulation game where NPCs do tasks based on their needs and jobs. 
        
        •  Implemented a scalable task system that supports and maintains hundreds of different tasks
        •  Learned how to fit new systems into existing solutions to ensure proper OOP principles
        •  Utilized virtual methods to craft dozens of different tasks
`,
        techStack: "C#, Godot",
        challenges: [
            "One of the biggest challenges was figuring out if Inventories should hold ItemRs or Items. An ItemR is the name and sprite data of an Item. An Item is the physical object that would exist in the game world. If Inventories held ItemRs, Items could be instantiated at runtime, but it would be very difficult to “pick up” Items since referencing an ItemR whilst an ItemR referenced that Item would create a circular dependency. On the other hand, if they held Items, gathering would be easy, but it would be difficult to instantiate Items. I tried the first approach of using Items, which made it easy to gather Items, but made interacting with crafting systems difficult, since they relied on ItemRs. In the end, I went with holding both of them. That way, I could have the Items that were already in the world and thus didn’t need to be instantiated, while also having the data of the ItemR for quick comparison in crafting and cooking systems.",
            "Talking between NPCs was hard to implement as a task since a Task could only support one NPC at a time. But by handling the multiple NPCs in the NPC class instead of the PartnerTask or TalkTask class, I was able to have more than one NPC on a task.",
            "Optimizing finding tasks was difficult because there are so many variables that determine which Task gets picked. In the beginning, I tried to sense them with only collision, and would have to filter out tasks that were not usable. Then, I tried to find tasks that were attached to Places, but this meant that a task outside of a Place, like a SitTask on a bench, could not be found, or would have to rely on the old way. I eventually decided to find tasks using ITaskHolder, which would hold all of the tasks for an object and allow them to be found. And a more detailed GetTaskScore() function that considered a Task's needs, personality, and completeness meant that there wasn't much filtering needed when the tasks were found."
        ],
        screenshots: [
            "/Simulation/Screenshot1.png",
            "/Simulation/Screenshot2.png",
            "/Simulation/Screenshot3.png",
            "/Simulation/chopping wood screenshot.png",
            "/Simulation/crafting screenshot.png",
            "/Simulation/gardening screenshot.png"
        ],
        screenshotAlts: [
            "An NPC feeding her kid",
            "Two NPCs talking",
            "An NPC cooking at a restaurant",
            "Player chopping trees",
            "Player crafting via a UI",
            "Player after planting a seed"
        ],
        github: "https://github.com/AlexisHampton/NPC-AI-Simulation-Game",
        date: "Novemeber 2024 - present",
        deployed: "https://severedstars.itch.io/npc-ai-simulation"

    }
}