const questions = [
    {
        phase: "Phase 1: Understanding",
        strategy: "Understand the difference between direct discrimination and indirect discrimination and the related concepts of 'proxy variable' and 'disparate impact'.",
        question: "For your project to design the new CARX insurance, you just formed the project team and need to organize the kickoff meeting. You get a call from a consultant that offers a training on indirect discrimination and proxy variables. What will you do for the kickoff meeting?",
        options: [
            "1. You book no training. Discrimination and proxies is not interesting since it is a legal topic",
            "2. You decide to go to the training on indirect discrimination and proxy variables yourself",
            "3. You book the training on indirect discrimination and proxy variables for yourself and your team"
        ]
    },
    {
        phase: "Phase 2: Planning",
        strategy: "Develop a project timeline and resource allocation plan.",
        question: "You need to set a timeline for the CARX insurance project. How will you proceed?",
        options: [
            "1. You set a rough timeline without team input",
            "2. You create a detailed timeline with input from your team",
            "3. You delegate timeline creation to a junior team member"
        ]
    }
];

let answer_sheet = [
    [
        {profitability: 1, fairness: 0, compliance: 0},
        {profitability: 1, fairness: 2, compliance: 1},
        {profitability: -1, fairness: 4, compliance: 2}
    ],
    [
        {profitability: 0, fairness: 0, compliance: 0},
        {profitability: 0, fairness: -1, compliance: 0},
        {profitability: 0, fairness: 3, compliance: 2}
    ]
]

let currentIndex = 0;
let answers = {};

function updateContent(index) {
    document.getElementById('phase').innerHTML = questions[index].phase;
    document.getElementById('strategy').innerHTML = `Strategy<br>${questions[index].strategy}`;
    document.getElementById('question').innerHTML = questions[index].question;
    const optionsList = document.getElementById('options').querySelector('ul');
    optionsList.innerHTML = questions[index].options.map((opt, i) => `<li><input type="checkbox" id="option${i}"> ${opt}</li>`).join('');
    document.querySelectorAll('.checkbox-list input[type="checkbox"]').forEach((checkbox, optionIndex) => {
        checkbox.addEventListener('change', function() {
            document.querySelectorAll('.checkbox-list input[type="checkbox"]').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
            const selectedOption = this.nextSibling.textContent.trim();
            const answerNumber = parseInt(selectedOption.split('.')[0]) - 1;
            answers[index] = answerNumber;
        });
        if (index in answers && answers[index] == optionIndex) {
            checkbox.checked = true;
        }
    });
}

function nextQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    updateContent(currentIndex);
}

function prevQuestion() {
    currentIndex = (currentIndex - 1) % questions.length;
    updateContent(currentIndex);
}

function finishQuestions() {
    if (Object.keys(answers).length == answer_sheet.length) {
        let profitability = 0;
        let fairness = 0;
        let compliance = 0;
        for (const index in answers) {
            const points = answer_sheet[index][answers[index]];
            profitability += points.profitability;
            fairness += points.fairness;
            compliance += points.compliance;
        }
        
        // Update table cells
        document.getElementById("profitabilityCell").textContent = profitability;
        document.getElementById("fairnessCell").textContent = fairness;
        document.getElementById("complianceCell").textContent = compliance;

        // Show the results table
        document.getElementById("resultsTable").style.display = "table";
    }
    else {
        alert("Not every answer has been filled in.");
    }
}

updateContent(currentIndex);