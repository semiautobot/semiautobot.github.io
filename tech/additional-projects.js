// Additional Technology Projects for 8th Graders
const additionalProjects = [
    // Physics Projects
    {
        title: "Pendulum Clock",
        description: "Build a simple pendulum clock to learn about time and motion!",
        icon: "fas fa-clock",
        materials: ["String", "Weight (metal washer or small object)", "Cardboard", "Scissors", "Tape", "Ruler", "Stopwatch"],
        steps: [
            "Cut a piece of string to your desired length",
            "Attach a weight to one end of the string",
            "Create a support structure using cardboard",
            "Hang the pendulum from the support",
            "Time the pendulum's swing period",
            "Experiment with different string lengths and weights"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand pendulum motion and period", "Learn about time measurement", "Practice scientific experimentation", "Develop analytical thinking"]
    },
    {
        title: "Sound Wave Visualizer",
        description: "Create a device to visualize sound waves using a speaker and salt!",
        icon: "fas fa-wave-square",
        materials: ["Speaker", "Plastic wrap", "Salt", "Music source", "Cardboard box", "Scissors", "Tape"],
        steps: [
            "Cover a speaker with plastic wrap",
            "Sprinkle salt on the plastic wrap",
            "Play music through the speaker",
            "Observe how the salt moves with sound waves",
            "Experiment with different frequencies",
            "Record your observations"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Energy exists in many forms", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand sound waves and vibration", "Learn about frequency and amplitude", "Practice scientific observation", "Develop curiosity about physics"]
    },
    {
        title: "Lever and Fulcrum",
        description: "Build a simple lever system to lift heavy objects!",
        icon: "fas fa-balance-scale",
        materials: ["Wooden board", "Small block or fulcrum", "Weights or objects", "Ruler", "Pencil", "Tape"],
        steps: [
            "Place a fulcrum (block) under the center of a board",
            "Balance the board on the fulcrum",
            "Place weights on one end",
            "Add counterweights to balance the lever",
            "Experiment with different fulcrum positions",
            "Calculate mechanical advantage"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand simple machines and levers", "Learn about mechanical advantage", "Practice measurement and calculation", "Develop problem-solving skills"]
    },
    {
        title: "Inclined Plane",
        description: "Create an inclined plane to study how ramps make work easier!",
        icon: "fas fa-arrow-up",
        materials: ["Wooden board or cardboard", "Books or blocks for support", "Small objects to roll", "Ruler", "Stopwatch", "Paper for recording"],
        steps: [
            "Create an inclined plane using a board and supports",
            "Measure the height and length of the ramp",
            "Roll objects down the ramp and time them",
            "Experiment with different angles",
            "Calculate the mechanical advantage",
            "Record your data and observations"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand inclined planes and simple machines", "Learn about work and mechanical advantage", "Practice measurement and data collection", "Develop analytical thinking"]
    },
    {
        title: "Centripetal Force Demonstrator",
        description: "Build a device to demonstrate centripetal force!",
        icon: "fas fa-circle",
        materials: ["String", "Small weight", "Clear plastic tube", "Scissors", "Tape", "Stopwatch"],
        steps: [
            "Attach a weight to a string",
            "Thread the string through a clear tube",
            "Hold the tube and swing the weight in circles",
            "Observe how the weight stays in circular motion",
            "Experiment with different speeds",
            "Measure the period of rotation"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand centripetal force and circular motion", "Learn about Newton's laws", "Practice scientific observation", "Develop physics understanding"]
    },
    // Chemistry Projects
    {
        title: "pH Indicator",
        description: "Create a natural pH indicator using red cabbage!",
        icon: "fas fa-flask",
        materials: ["Red cabbage", "Hot water", "Clear containers", "Various household liquids", "Paper towels", "Dropper", "Paper for recording"],
        steps: [
            "Chop red cabbage and boil in water",
            "Strain the purple liquid",
            "Pour the indicator into clear containers",
            "Test various household liquids",
            "Observe color changes",
            "Record which substances are acidic or basic"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand acids, bases, and pH", "Learn about chemical indicators", "Practice scientific testing", "Develop chemistry knowledge"]
    },
    {
        title: "Crystal Growing",
        description: "Grow beautiful crystals using salt or sugar solutions!",
        icon: "fas fa-gem",
        materials: ["Salt or sugar", "Hot water", "Clear containers", "String or pipe cleaner", "Pencil", "Food coloring (optional)", "Paper for recording"],
        steps: [
            "Dissolve salt or sugar in hot water",
            "Tie a string to a pencil",
            "Suspend the string in the solution",
            "Place in a cool location",
            "Observe crystal growth over days",
            "Record growth patterns and observations"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand crystallization and solubility", "Learn about molecular structure", "Practice patience and observation", "Develop chemistry understanding"]
    },
    {
        title: "Invisible Ink",
        description: "Create invisible ink using lemon juice!",
        icon: "fas fa-pen",
        materials: ["Lemon juice", "Paper", "Cotton swab or paintbrush", "Lamp or heat source", "Paper towels", "Water"],
        steps: [
            "Squeeze lemon juice into a small container",
            "Write a message using lemon juice as ink",
            "Let the paper dry completely",
            "Heat the paper carefully with a lamp",
            "Observe the message appear",
            "Experiment with other acidic substances"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand chemical reactions and oxidation", "Learn about acids and heat reactions", "Practice scientific experimentation", "Develop chemistry knowledge"]
    },
    // Biology Projects
    {
        title: "Plant Growth Chamber",
        description: "Create a controlled environment to study plant growth!",
        icon: "fas fa-leaf",
        materials: ["Clear plastic container", "Soil", "Seeds", "Water", "Thermometer", "Light source", "Paper for recording", "Ruler"],
        steps: [
            "Prepare a clear container with drainage holes",
            "Add soil and plant seeds",
            "Create a controlled environment",
            "Monitor temperature and light",
            "Measure plant growth daily",
            "Record observations and data"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand plant growth and environmental factors", "Learn about controlled experiments", "Practice scientific measurement", "Develop biology knowledge"]
    },
    {
        title: "Microscope from Smartphone",
        description: "Turn your smartphone into a microscope!",
        icon: "fas fa-mobile-alt",
        materials: ["Smartphone", "Clear plastic sheet", "Small objects to observe", "Tape", "Scissors", "Paper for recording"],
        steps: [
            "Create a small drop of water on a clear surface",
            "Place small objects in the water drop",
            "Use your smartphone camera to magnify",
            "Take photos of your observations",
            "Experiment with different objects",
            "Record your findings"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand magnification and optics", "Learn about microscopic observation", "Practice scientific documentation", "Develop observation skills"]
    },
    // Computer Science Projects
    {
        title: "Binary Code Bracelet",
        description: "Create a bracelet that spells your name in binary code!",
        icon: "fas fa-code",
        materials: ["Beads (2 colors)", "String or elastic", "Binary code chart", "Scissors", "Paper for planning"],
        steps: [
            "Choose two colors of beads (one for 0, one for 1)",
            "Write your name and convert to binary",
            "String beads according to binary pattern",
            "Add spacer beads between letters",
            "Tie off your bracelet",
            "Share your binary message with friends"
        ],
        standards: ["NYS MST Standard 5: Engineering Design - Students will apply technological knowledge", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand binary number system", "Learn about computer coding", "Practice pattern recognition", "Develop computational thinking"]
    },
    {
        title: "Paper Computer",
        description: "Build a simple computer using paper and logic gates!",
        icon: "fas fa-laptop",
        materials: ["Paper", "Scissors", "Markers", "Tape", "Pencil", "Logic gate diagrams"],
        steps: [
            "Draw logic gates on paper",
            "Create input and output connections",
            "Build simple circuits using paper",
            "Test different input combinations",
            "Create more complex circuits",
            "Document your computer's functions"
        ],
        standards: ["NYS MST Standard 5: Engineering Design - Students will apply technological knowledge", "NYS MST Standard 6: Interconnectedness", "NYS MST Standard 7: Interdisciplinary Problem Solving"],
        objectives: ["Understand logic gates and circuits", "Learn about computer architecture", "Practice logical thinking", "Develop computational skills"]
    },
    // Robotics Projects
    {
        title: "Vibrating Robot",
        description: "Build a simple robot that moves using vibration!",
        icon: "fas fa-robot",
        materials: ["DC motor", "Battery", "Cardboard", "Scissors", "Tape", "Googly eyes", "Pipe cleaners"],
        steps: [
            "Create a robot body from cardboard",
            "Attach a motor to the body",
            "Connect the motor to a battery",
            "Add decorations and personality",
            "Test your robot's movement",
            "Experiment with different designs"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand vibration and movement", "Learn about robotics basics", "Practice engineering design", "Develop creativity and innovation"]
    },
    {
        title: "Light-Following Robot",
        description: "Create a robot that follows light sources!",
        icon: "fas fa-lightbulb",
        materials: ["2 light sensors", "2 motors", "Battery", "Cardboard", "Wire", "Scissors", "Tape"],
        steps: [
            "Build a robot chassis from cardboard",
            "Attach two motors for movement",
            "Connect light sensors to detect light",
            "Wire the sensors to control the motors",
            "Test your robot's light-following ability",
            "Experiment with different light sources"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Energy exists in many forms", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand sensors and feedback systems", "Learn about autonomous robots", "Practice circuit building", "Develop systems thinking"]
    },
    // Aerospace Projects
    {
        title: "Rocket Launcher",
        description: "Build a simple rocket launcher using air pressure!",
        icon: "fas fa-rocket",
        materials: ["Plastic bottle", "Bicycle pump", "Cardboard", "Scissors", "Tape", "Water", "Safety goggles"],
        steps: [
            "Create a rocket from a plastic bottle",
            "Build a launcher using cardboard",
            "Add fins and nose cone to the rocket",
            "Fill the rocket with water",
            "Pump air to create pressure",
            "Launch and measure distance"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand air pressure and propulsion", "Learn about rocket science", "Practice safety procedures", "Develop engineering skills"]
    },
    {
        title: "Parachute",
        description: "Design and test different parachute designs!",
        icon: "fas fa-parachute-box",
        materials: ["Plastic bags or fabric", "String", "Small weights", "Scissors", "Tape", "Stopwatch", "Ruler"],
        steps: [
            "Cut different sized parachutes from materials",
            "Attach strings to the corners",
            "Add a weight to the center",
            "Test drop from a height",
            "Time the descent",
            "Compare different designs"
        ],
        standards: ["NYS MST Standard 4: Physical Setting - Motion and forces", "NYS MST Standard 5: Engineering Design", "NYS MST Standard 6: Interconnectedness"],
        objectives: ["Understand air resistance and drag", "Learn about terminal velocity", "Practice experimental design", "Develop analytical thinking"]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = additionalProjects;
} 