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
        phase: "Phase 1: Understanding",
        strategy: "Understand that there is not a single threshhold value for what is an acceptable amount of bias, or acceptable amount of disparate impact.",
        question: "You are updating the project plan and want to add additional metrics that will me measured during and after the project. You know that fairness is important for the project, and anything that is important should be measured. How should fairness be measured?",
        options: [
            "1. You ask your lead analyst to pick the best available fairness metric from the literature",
            "2. You ask your lead analyst to not only pick a metric but also set a maximum value of unfairness",
            "3. You ask the lead analyst to design a detailed fairness scorecard with room for multiple metrics"
        ]
    },
    {
        phase: "Phase 1: Understanding",
        strategy: "Understand the importance of information asymmetry, especially how unequal knowledge about customers’ risk profiles can lead to adverse selection.",
        question: "Your marketing team suggested that simplied, one-size-fits all pricing would make the marketing and sales process for the new insurance a lot easier.",
        options: [
            "1. You agree and go for 49 euros per month for all cars. ",
            "2. You mostly agree but with two levels: 39 euros per month for small, inexpensive cars and 59 euros per month for other cars. ",
            "3. You respectfully disagree and deside to stick with traditional, individual pricing"
        ]
    },
];

let answer_sheet = [
    [
        {profitability: 1, fairness: 0, compliance: 0},
        {profitability: 2, fairness: 2, compliance: 1},
        {profitability: 1, fairness: 4, compliance: 2}
    ],
    [
        {profitability: 1, fairness: 0, compliance: 0},
        {profitability: 1, fairness: -1, compliance: 0},
        {profitability: 1, fairness: 2, compliance: 2}
    ],
    [
        {profitability: -10, fairness: 1, compliance: 1},
        {profitability: -5, fairness: 1, compliance: 1},
        {profitability: 4, fairness: 1, compliance: 1}
    ]
]

let feedback_sheet = [
    [
        "Risky choice to skip training! You might run into fairness and compliance issues later on!",
        "The training is actually interesting and helps you to avoid indirect discrimination against gender via car types",
        "Your team learns a lot from the training, but it did cost a lot of time from the team"
    ],
    [
        "There is no single good fairness metric that covers all risks. Focusing on a signle metrix leads to risk to being unfair for many groups",
        "There is no single good fairness metric that covers all risks and there is also not a single clear threshold.",
        "The detailed fairness scorecard is very useful to detect biases during the project"
    ],
    [
        "You get many new customers, but all of these are high risk customers who were charged high premiums at other insurers. Their expensive cars need expensive repairs.",
        "You get many new customers, but most of these are high risk customers who were charged high premiums at other insurers. Their expensive cars need expensive repairs.",
        "You do not get many more customers, but you also do not have higher costs"
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
    currentIndex = (currentIndex - 1 + questions.length) % questions.length;
    console.log(currentIndex)
    updateContent(currentIndex);
}

function toggleStrategy() {
    const strategyDiv = document.getElementById("strategy");
    const button = document.getElementById("toggleButton");

    if (strategyDiv.style.display === "none" || strategyDiv.style.display === "") {
      strategyDiv.style.display = "block";
      button.textContent = "Hide Strategy";
    } else {
      strategyDiv.style.display = "none";
      button.textContent = "Show Strategy";
    }
}

function finishQuestions() {
    if (Object.keys(answers).length == answer_sheet.length) {

        // update values for result table
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

        // update feedbacktable values
        const table = document.getElementById("feedbackTable");
        const tbody = table.querySelector("tbody");

        Object.entries(answers).forEach(([questionIndex, answerIndex]) => {
            const row = document.createElement("tr");

            const questionCell = document.createElement("td");
            questionCell.textContent = questions[questionIndex].question;

            const answerCell = document.createElement("td");
            answerCell.textContent = questions[questionIndex].options[answerIndex];

            const feedbackCell = document.createElement("td");
            feedbackCell.textContent = feedback_sheet[questionIndex][answerIndex];

            row.appendChild(questionCell);
            row.appendChild(answerCell);
            row.appendChild(feedbackCell);

            tbody.appendChild(row);
        });

        // Show the tables and hide the original questions
        document.getElementById("resultsTable").style.display = "table";
        document.getElementById("feedbackTable").style.display = "table";
        document.getElementById("base").style.display = "none";
    }
    else {
        alert("Not every answer has been filled in.");
    }
}

updateContent(currentIndex);