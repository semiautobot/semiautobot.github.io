// Electronics Projects for 8th Graders
const electronicsProjects = [
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
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = electronicsProjects;
} 