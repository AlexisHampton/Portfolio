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
        name: "Writeblr",
        summary: `A website where users write and store stories

            •  Designed and developed RESTful APIs with proper HTTP methods to ensure effective communication between front-end and back-end
            •  Designed easy-to-use user interfaces to ensure a great user experience
`,
        techStack: "React, JavaScript, Express, Node.js, MongoDB",
        challenges: [
            "The CSS of this website was very challenging. Especially when it came to the user dashboard. Getting the side panel to stick to the side and share 1/5 of the screen width was not trivial for me. I had a lot of issues with it scrolling when I went down the page, or it taking up more space than it should have. But after scouring the internet, looking at other people's solutions, and browsing the TailwindCSS documentation, I managed to get it to look the way I envisioned."
        ],
        screenshots: [
            "/WritingBlog/AllStories.png",
            "/WritingBlog/EditStoryDetails.png",
            "/WritingBlog/WriteStory.png",
        ],
        screenshotAlts: [
            "A user dashboard containing all their stories",
            "A user editing the details of a story, such as the summary and title",
            "A user writing a story"
        ],
        github: "https://github.com/AlexisHampton/WritingBlog/tree/main",
        date: "June 2025",
        deployed: "https://writingblog.onrender.com/"

    }
}

export function GetGameThoughtsProjectDetails() {
    return {
        name: "Game Thoughts",
        summary: `A website where people can share their thoughts on games. 
        
        •  Designed an easy to navigate user-interface
        •  Developed a RESTful API to implement CRUD operations and ensure division of responsibilities
`,
        techStack: "React, JavaScript, Express, Node.js, MongoDB ",
        challenges: [
            "The frontend was very difficult. Getting the flex box to work perfectly every time was hard, but worth it. I struggled a lot due to lack of experience. But once I had a page or too done, adding extra CSS features wasn't very hard."
        ],
        screenshots: [
            "/GameThoughts/MainMenu.png",
            "/GameThoughts/CreateMenu.png"
        ],
        screenshotAlts: [
            "A bunch of banners with game recommendation information",
            "A create menu with fields for name, description, and wouldReccommend"
        ],
        github: "https://github.com/AlexisHampton/GameThoughts",
        date: "June 2025",
        deployed: "https://gamethoughts.onrender.com/"

    }
}

export function GetStoreInventoryProjectDetails() {
    return {
        name: "Store Inventory",
        summary: `A website detailing the inventories of a bakery. The main focus was learning .NET and setting up SQLite 

        •  Implemented model-view-control pattern for clear separation of responsibilites
        •  Utilized EntityFramework for data persistence and data retrival from SQLite
        `,
        techStack: ".Net Core, .NET MVC, C#, EntityFramework,Bootstrap, SQLite, Razor Pages ",
        challenges: [
            "The .NET framework took a while to get used to. While I've experience in C#, the .NET framework worked in ways I didn't expect. At times it seemed more imposing and more convoluted, especially compared to the simpler MERN stack. But I powered through and learned from many different resources to put this project together.",
            "Getting the items to exist in a grid was hard. They would stretch too big, or not enough items would be in a row. Part of the issue was my inexperience with Bootstrap, but I relied on what I learned using Tailwind and the Boostrap documentation and made it better."
        ],
        screenshots: [
            "/StoreInventory/MainMenu.png",
            "/StoreInventory/CreateMenu.png"
        ],
        screenshotAlts: [
            "A bunch of boxes with item information in them",
            "A create menu with fields for name, description, item type, etc"
        ],
        github: "https://github.com/AlexisHampton/StoreInventory",
        date: "July 2025",
    }
}