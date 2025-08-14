// Database of 150+ technology projects for 8th graders
const projects = [
    // Original 8 projects
    {
        title: "LED Circuit Greeting Card",
        description: "Create a beautiful greeting card with LED lights that light up when opened!",
        icon: "fas fa-lightbulb",
        materials: [
            "Construction paper or cardstock",
            "LED lights (2-3)",
            "Copper tape or aluminum foil",
            "Coin cell battery (3V)",
            "Scissors",
            "Glue or tape",
            "Pencil for drawing"
        ],
        steps: [
            "Fold a piece of cardstock in half to create your card",
            "Draw your design on the front of the card",
            "Cut small holes where you want the LEDs to show",
            "Create a simple circuit using copper tape to connect the battery to the LEDs",
            "Test your circuit before gluing everything in place",
            "Decorate your card with markers, stickers, or other materials"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge and skills",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships and common themes"
        ],
        objectives: [
            "Understand basic electrical circuits",
            "Learn about conductors and insulators",
            "Practice following design plans",
            "Develop problem-solving skills"
        ]
    },
    {
        title: "Paper Airplane Launcher",
        description: "Build a simple launcher that can send paper airplanes flying across the room!",
        icon: "fas fa-paper-plane",
        materials: [
            "Rubber bands (2-3)",
            "Wooden craft sticks or popsicle sticks",
            "Cardboard or thick paper",
            "Hot glue gun (with adult supervision)",
            "Scissors",
            "Paper for airplanes",
            "Ruler"
        ],
        steps: [
            "Create a base using cardboard or multiple craft sticks glued together",
            "Attach a craft stick vertically to the base as a support",
            "Create a launching mechanism using rubber bands and a trigger",
            "Test different paper airplane designs",
            "Measure and record the distance each plane flies",
            "Experiment with different launch angles and rubber band tensions"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand basic physics concepts (force, motion, energy)",
            "Learn about aerodynamics",
            "Practice measurement and data collection",
            "Develop engineering design skills"
        ]
    },
    {
        title: "Solar Oven",
        description: "Harness the power of the sun to cook delicious treats in your own solar oven!",
        icon: "fas fa-sun",
        materials: [
            "Cardboard box with lid",
            "Aluminum foil",
            "Black construction paper",
            "Clear plastic wrap or glass",
            "Tape or glue",
            "Scissors",
            "Ruler",
            "Thermometer (optional)"
        ],
        steps: [
            "Line the inside of the box with aluminum foil (shiny side out)",
            "Cover the bottom with black paper to absorb heat",
            "Create a clear window using plastic wrap or glass",
            "Make a reflector flap using foil-covered cardboard",
            "Test your oven by placing it in direct sunlight",
            "Try cooking simple foods like s'mores or heating water"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand solar energy and heat transfer",
            "Learn about renewable energy sources",
            "Practice scientific method and experimentation",
            "Develop environmental awareness"
        ]
    },
    {
        title: "Wind-Powered Car",
        description: "Design and build a car that moves using only the power of the wind!",
        icon: "fas fa-wind",
        materials: [
            "Plastic bottle or milk carton",
            "Cardboard or foam board",
            "Plastic straws",
            "Bottle caps or CDs for wheels",
            "Scissors",
            "Tape or glue",
            "Paper or fabric for sails",
            "Fan or hairdryer for testing"
        ],
        steps: [
            "Create the car body using a plastic bottle or milk carton",
            "Attach wheels using straws and bottle caps",
            "Design and attach a sail to catch the wind",
            "Test your car with a fan or hairdryer",
            "Experiment with different sail shapes and sizes",
            "Race your car against others!"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand wind energy and aerodynamics",
            "Learn about force and motion",
            "Practice engineering design process",
            "Develop creativity and innovation skills"
        ]
    },
    {
        title: "Water Filtration System",
        description: "Create a simple water filter to clean dirty water using natural materials!",
        icon: "fas fa-tint",
        materials: [
            "Plastic bottle (2-liter)",
            "Coffee filters or paper towels",
            "Sand (fine and coarse)",
            "Gravel or small rocks",
            "Cotton balls",
            "Scissors",
            "Dirty water (muddy water works well)",
            "Clear container for filtered water"
        ],
        steps: [
            "Cut the bottom off a plastic bottle",
            "Turn the bottle upside down and layer materials: cotton, fine sand, coarse sand, gravel",
            "Secure a coffee filter at the top with a rubber band",
            "Pour dirty water through your filter",
            "Observe how the water becomes cleaner",
            "Experiment with different filter materials and arrangements"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand water purification processes",
            "Learn about environmental science",
            "Practice scientific observation and recording",
            "Develop critical thinking skills"
        ]
    },
    {
        title: "Simple Robot Arm",
        description: "Build a mechanical robot arm using everyday materials that can pick up objects!",
        icon: "fas fa-robot",
        materials: [
            "Cardboard or foam board",
            "Plastic straws",
            "String or yarn",
            "Paper clips",
            "Scissors",
            "Tape or glue",
            "Small objects to pick up",
            "Ruler"
        ],
        steps: [
            "Create the base and arm segments using cardboard",
            "Attach segments using straws as joints",
            "Thread string through the arm to create movement",
            "Add a gripper at the end using paper clips",
            "Test your robot arm with different objects",
            "Experiment with different arm lengths and designs"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand simple machines and mechanical advantage",
            "Learn about robotics and automation",
            "Practice engineering design process",
            "Develop problem-solving and troubleshooting skills"
        ]
    },
    {
        title: "Sound Amplifier",
        description: "Create a simple amplifier that makes sounds louder using household materials!",
        icon: "fas fa-volume-up",
        materials: [
            "Paper cups or plastic cups",
            "Cardboard tube (paper towel roll)",
            "Aluminum foil",
            "Rubber bands",
            "Scissors",
            "Tape",
            "Smartphone or small speaker",
            "Different sized containers to test"
        ],
        steps: [
            "Cut a hole in the bottom of a cup to fit your sound source",
            "Create a cone shape using aluminum foil",
            "Attach the cone to the cup opening",
            "Test with different sized cups and materials",
            "Experiment with different shapes and sizes",
            "Compare the volume with and without your amplifier"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand sound waves and amplification",
            "Learn about acoustics and resonance",
            "Practice scientific experimentation",
            "Develop analytical thinking skills"
        ]
    },
    {
        title: "Magnetic Field Viewer",
        description: "Create a device to visualize magnetic fields using iron filings and magnets!",
        icon: "fas fa-magnet",
        materials: [
            "Clear plastic sheet or transparency",
            "Iron filings (available at hardware stores)",
            "Various magnets (different shapes and strengths)",
            "White paper",
            "Tape",
            "Small container for iron filings",
            "Safety goggles",
            "Paper towels for cleanup"
        ],
        steps: [
            "Place a magnet under a piece of white paper",
            "Sprinkle iron filings on top of the paper",
            "Gently tap the paper to see the magnetic field patterns",
            "Try different magnet shapes and arrangements",
            "Record your observations with drawings",
            "Experiment with multiple magnets"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand magnetic fields and forces",
            "Learn about invisible forces in nature",
            "Practice scientific observation and documentation",
            "Develop curiosity about physical phenomena"
        ]
    },
    // Electronics Projects
    {
        title: "Battery-Powered Fan",
        description: "Build a simple electric fan using a motor and battery!",
        icon: "fas fa-fan",
        materials: [
            "DC motor (from old toys or electronics)",
            "AA battery and holder",
            "Plastic bottle cap or cardboard",
            "Wire",
            "Switch (optional)",
            "Tape",
            "Scissors"
        ],
        steps: [
            "Attach a plastic bottle cap to the motor shaft as a fan blade",
            "Connect the motor to the battery using wire",
            "Test the fan by connecting the wires to the battery",
            "Add a switch to control the fan on/off",
            "Experiment with different blade designs",
            "Measure the airflow created by your fan"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand electrical circuits and motors",
            "Learn about energy conversion (electrical to mechanical)",
            "Practice circuit building and troubleshooting",
            "Develop engineering design skills"
        ]
    },
    {
        title: "LED Traffic Light",
        description: "Create a working traffic light using LEDs and a simple timer!",
        icon: "fas fa-traffic-light",
        materials: [
            "3 LEDs (red, yellow, green)",
            "Resistors (220 ohm)",
            "Battery (9V)",
            "Battery connector",
            "Cardboard or foam board",
            "Wire",
            "Timer circuit or Arduino (optional)",
            "Tape or glue"
        ],
        steps: [
            "Create a traffic light housing using cardboard",
            "Mount the LEDs in the correct positions (red, yellow, green)",
            "Connect resistors to each LED",
            "Wire the LEDs to the battery",
            "Add a simple timer circuit or manually control the lights",
            "Test your traffic light sequence"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand LED circuits and resistors",
            "Learn about traffic control systems",
            "Practice sequential logic and timing",
            "Develop systems thinking skills"
        ]
    },
    {
        title: "Simple Alarm System",
        description: "Build a basic alarm that sounds when a circuit is broken!",
        icon: "fas fa-bell",
        materials: [
            "Buzzer or speaker",
            "Battery (9V)",
            "Wire",
            "Aluminum foil",
            "Cardboard",
            "Tape",
            "Scissors",
            "Paper clip (for switch)"
        ],
        steps: [
            "Create a simple switch using aluminum foil and a paper clip",
            "Connect the buzzer to the battery through the switch",
            "Test the alarm by opening and closing the switch",
            "Create a door or window sensor using the foil",
            "Experiment with different trigger mechanisms",
            "Add a reset button to your alarm"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand alarm circuits and switches",
            "Learn about security systems",
            "Practice circuit design and testing",
            "Develop problem-solving skills"
        ]
    },
    {
        title: "Conductivity Tester",
        description: "Test which materials conduct electricity with your own conductivity tester!",
        icon: "fas fa-bolt",
        materials: [
            "LED",
            "Battery (3V)",
            "Wire",
            "Alligator clips",
            "Various materials to test (metal, plastic, wood, etc.)",
            "Cardboard for housing",
            "Tape",
            "Resistor (220 ohm)"
        ],
        steps: [
            "Connect the LED to the battery through a resistor",
            "Add alligator clips to test different materials",
            "Create a housing for your tester using cardboard",
            "Test various materials around your home",
            "Record which materials conduct electricity",
            "Create a chart of conductors vs. insulators"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand electrical conductivity",
            "Learn about conductors and insulators",
            "Practice scientific testing and recording",
            "Develop classification and analysis skills"
        ]
    },
    {
        title: "Solar-Powered LED Light",
        description: "Harness solar energy to power an LED light!",
        icon: "fas fa-solar-panel",
        materials: [
            "Small solar panel",
            "LED",
            "Rechargeable battery (optional)",
            "Wire",
            "Cardboard or plastic container",
            "Tape or glue",
            "Switch (optional)",
            "Resistor (if needed)"
        ],
        steps: [
            "Connect the solar panel to the LED using wire",
            "Test the connection in direct sunlight",
            "Create a housing for your solar light",
            "Add a switch to control the light",
            "Experiment with different solar panel positions",
            "Test how long the light stays on after charging"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand solar energy and photovoltaic cells",
            "Learn about renewable energy systems",
            "Practice energy conversion concepts",
            "Develop environmental awareness"
        ]
    },
    // Mechanical Engineering Projects
    {
        title: "Rubber Band Car",
        description: "Build a car powered by rubber band energy!",
        icon: "fas fa-car",
        materials: [
            "Cardboard or foam board",
            "Plastic straws",
            "Bottle caps or CDs for wheels",
            "Rubber bands",
            "Scissors",
            "Tape or glue",
            "Ruler",
            "Pencil"
        ],
        steps: [
            "Create the car body using cardboard",
            "Attach wheels using straws and bottle caps",
            "Design a rubber band mechanism for propulsion",
            "Test different rubber band arrangements",
            "Measure how far your car travels",
            "Experiment with different wheel sizes and materials"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand potential and kinetic energy",
            "Learn about mechanical energy storage",
            "Practice measurement and data collection",
            "Develop engineering design skills"
        ]
    },
    {
        title: "Pulley System",
        description: "Create a simple pulley system to lift objects!",
        icon: "fas fa-dolly",
        materials: [
            "String or yarn",
            "Plastic spools or wooden dowels",
            "Cardboard or wood for frame",
            "Small weights or objects to lift",
            "Scissors",
            "Tape or glue",
            "Ruler",
            "Pencil"
        ],
        steps: [
            "Create a frame to hold your pulley system",
            "Attach pulleys to the frame using spools or dowels",
            "Thread string through the pulleys",
            "Attach weights to test your system",
            "Experiment with different pulley arrangements",
            "Measure the force needed to lift different weights"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand simple machines and mechanical advantage",
            "Learn about force and work",
            "Practice scientific measurement",
            "Develop problem-solving skills"
        ]
    },
    {
        title: "Balloon-Powered Boat",
        description: "Design a boat that moves using balloon power!",
        icon: "fas fa-ship",
        materials: [
            "Plastic bottle or milk carton",
            "Balloon",
            "Plastic straw",
            "Rubber band",
            "Scissors",
            "Tape",
            "Large container of water",
            "Paper or cardboard for sails"
        ],
        steps: [
            "Create the boat body using a plastic bottle",
            "Attach a straw to the balloon for propulsion",
            "Secure the balloon to the boat with rubber bands",
            "Test your boat in water",
            "Experiment with different balloon sizes",
            "Add sails or other features to improve performance"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand air pressure and propulsion",
            "Learn about buoyancy and floating",
            "Practice engineering design process",
            "Develop creativity and innovation skills"
        ]
    },
    {
        title: "Marble Run",
        description: "Build an exciting marble run with ramps, loops, and obstacles!",
        icon: "fas fa-circle",
        materials: [
            "Cardboard tubes (paper towel, toilet paper)",
            "Cardboard or foam board",
            "Marbles",
            "Tape or glue",
            "Scissors",
            "Ruler",
            "Pencil",
            "Various obstacles (cups, ramps, etc.)"
        ],
        steps: [
            "Design your marble run layout on paper",
            "Create ramps using cardboard tubes",
            "Build supports and obstacles",
            "Test the marble's path through your run",
            "Add loops, jumps, and other features",
            "Time how long it takes for marbles to complete the run"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand gravity and motion",
            "Learn about energy conservation",
            "Practice engineering design process",
            "Develop spatial reasoning skills"
        ]
    },
    {
        title: "Windmill Generator",
        description: "Create a windmill that generates electricity!",
        icon: "fas fa-wind",
        materials: [
            "DC motor",
            "Plastic bottle or cardboard",
            "Wire",
            "LED",
            "Cardboard or foam board",
            "Scissors",
            "Tape or glue",
            "Fan for testing"
        ],
        steps: [
            "Create windmill blades using plastic bottle or cardboard",
            "Attach blades to the motor shaft",
            "Connect the motor to an LED",
            "Test your windmill with a fan",
            "Experiment with different blade designs",
            "Measure the voltage generated"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 5: Engineering Design - Students will apply technological knowledge",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships"
        ],
        objectives: [
            "Understand wind energy and electricity generation",
            "Learn about renewable energy systems",
            "Practice electrical circuit building",
            "Develop environmental awareness"
        ]
    },
    // Environmental Science Projects
    {
        title: "Mini Greenhouse",
        description: "Build a small greenhouse to grow plants and learn about the greenhouse effect!",
        icon: "fas fa-seedling",
        materials: [
            "Clear plastic container or bottle",
            "Soil or potting mix",
            "Seeds (beans, herbs, or flowers)",
            "Water",
            "Thermometer",
            "Tape or glue",
            "Scissors",
            "Paper towels"
        ],
        steps: [
            "Clean and prepare your plastic container",
            "Add soil to the bottom of the container",
            "Plant your seeds according to package instructions",
            "Water the soil lightly",
            "Seal the container to create a greenhouse effect",
            "Place in sunlight and observe daily growth"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand the greenhouse effect",
            "Learn about plant growth and photosynthesis",
            "Practice scientific observation and recording",
            "Develop environmental awareness"
        ]
    },
    {
        title: "Rain Gauge",
        description: "Create a simple rain gauge to measure rainfall!",
        icon: "fas fa-cloud-rain",
        materials: [
            "Clear plastic bottle (2-liter)",
            "Ruler or measuring tape",
            "Permanent marker",
            "Scissors",
            "Tape",
            "Small rocks or gravel",
            "Waterproof container",
            "Paper for recording data"
        ],
        steps: [
            "Cut the top off a clear plastic bottle",
            "Invert the top and place it in the bottom",
            "Add small rocks to the bottom for stability",
            "Mark measurement lines on the bottle",
            "Place your rain gauge outside in an open area",
            "Record daily rainfall measurements"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand weather and precipitation",
            "Learn about measurement and data collection",
            "Practice scientific observation and recording",
            "Develop analytical thinking skills"
        ]
    },
    {
        title: "Compost Bin",
        description: "Build a simple compost bin to recycle organic waste!",
        icon: "fas fa-recycle",
        materials: [
            "Plastic container with lid",
            "Drill or sharp object for holes",
            "Soil or garden dirt",
            "Kitchen scraps (fruit, vegetables)",
            "Leaves or grass clippings",
            "Water",
            "Thermometer (optional)",
            "Paper for recording observations"
        ],
        steps: [
            "Drill small holes in the container for air circulation",
            "Add a layer of soil to the bottom",
            "Add kitchen scraps and yard waste",
            "Mix the materials and add water",
            "Place in a warm location",
            "Monitor decomposition over several weeks"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Students will understand and apply scientific concepts",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand decomposition and nutrient cycling",
            "Learn about waste reduction and recycling",
            "Practice environmental stewardship",
            "Develop sustainability awareness"
        ]
    },
    {
        title: "Wind Speed Anemometer",
        description: "Build a simple anemometer to measure wind speed!",
        icon: "fas fa-wind",
        materials: [
            "4 small paper cups",
            "2 plastic straws",
            "Pencil with eraser",
            "Thumbtack or pushpin",
            "Scissors",
            "Tape",
            "Stopwatch",
            "Paper for recording data"
        ],
        steps: [
            "Attach 4 cups to the ends of 2 crossed straws",
            "Push a thumbtack through the center of the straws",
            "Attach the thumbtack to the pencil eraser",
            "Test your anemometer with a fan",
            "Count rotations per minute",
            "Record wind speed data over time"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Motion and forces",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand wind and weather patterns",
            "Learn about measurement and data collection",
            "Practice scientific observation and recording",
            "Develop analytical thinking skills"
        ]
    },
    {
        title: "Solar Still",
        description: "Create a solar still to purify water using solar energy!",
        icon: "fas fa-tint",
        materials: [
            "Large bowl or container",
            "Small cup or glass",
            "Clear plastic wrap",
            "Small rock or weight",
            "Salt water or dirty water",
            "Sunny location",
            "Tape",
            "Paper for recording observations"
        ],
        steps: [
            "Fill the large bowl with salt water or dirty water",
            "Place a small cup in the center of the bowl",
            "Cover the bowl with clear plastic wrap",
            "Place a small rock on top to create a dip",
            "Place in direct sunlight",
            "Observe water collection in the small cup"
        ],
        standards: [
            "NYS MST Standard 4: Physical Setting - Energy exists in many forms",
            "NYS MST Standard 6: Interconnectedness - Students will understand the relationships",
            "NYS MST Standard 7: Interdisciplinary Problem Solving - Students will apply the knowledge"
        ],
        objectives: [
            "Understand evaporation and condensation",
            "Learn about water purification methods",
            "Practice scientific observation and recording",
            "Develop environmental awareness"
        ]
    }
];

// DOM elements
const projectCard = document.getElementById('projectCard');
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const projectDetails = document.getElementById('projectDetails');
const materialsList = document.getElementById('materialsList');
const stepsList = document.getElementById('stepsList');
const standardsList = document.getElementById('standardsList');
const objectivesList = document.getElementById('objectivesList');
const generateBtn = document.getElementById('generateBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const projectIcon = document.querySelector('.project-icon i');

// Current project
let currentProject = null;

// Generate random project
function generateRandomProject() {
    const randomIndex = Math.floor(Math.random() * projects.length);
    currentProject = projects[randomIndex];
    displayProject(currentProject);
}

// Display project
function displayProject(project) {
    // Update icon
    projectIcon.className = project.icon;
    
    // Update title and description
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    
    // Show project details
    projectDetails.style.display = 'block';
    
    // Update materials
    materialsList.innerHTML = '';
    project.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });
    
    // Update steps
    stepsList.innerHTML = '';
    project.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
    
    // Update standards
    standardsList.innerHTML = '';
    project.standards.forEach(standard => {
        const tag = document.createElement('div');
        tag.className = 'standard-tag';
        tag.textContent = standard;
        standardsList.appendChild(tag);
    });
    
    // Update objectives
    objectivesList.innerHTML = '';
    project.objectives.forEach(objective => {
        const li = document.createElement('li');
        li.textContent = objective;
        objectivesList.appendChild(li);
    });
    
    // Show favorite button
    favoriteBtn.style.display = 'flex';
    
    // Add animation
    projectCard.style.animation = 'none';
    projectCard.offsetHeight; // Trigger reflow
    projectCard.style.animation = 'fadeIn 0.5s ease-in-out';
}

// Save project to favorites
function saveProject() {
    if (currentProject) {
        const favorites = JSON.parse(localStorage.getItem('techProjectFavorites') || '[]');
        const projectExists = favorites.some(fav => fav.title === currentProject.title);
        
        if (!projectExists) {
            favorites.push(currentProject);
            localStorage.setItem('techProjectFavorites', JSON.stringify(favorites));
            favoriteBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
            setTimeout(() => {
                favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Save Project';
            }, 2000);
        } else {
            favoriteBtn.innerHTML = '<i class="fas fa-info-circle"></i> Already Saved';
            setTimeout(() => {
                favoriteBtn.innerHTML = '<i class="fas fa-heart"></i> Save Project';
            }, 2000);
        }
    }
}

// Event listeners
generateBtn.addEventListener('click', generateRandomProject);
favoriteBtn.addEventListener('click', saveProject);

// Generate initial project on page load
document.addEventListener('DOMContentLoaded', () => {
    generateRandomProject();
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 