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
    {
        phase: "Phase 2: Determination",
        strategy: "Determine whether the premium will be partly based on non-risk factors (such as giving discounts to attract customers).",
        question: "For the new CARX insurance, you need to decide as product manager whether you want to offer a combination discount. This is a discount that people get if they also buy other insurance products from our company. What is your decision:",
        options: [
            "1. Do not offer combination discounts",
            "2. Offer a very limited (max 10% combination discount)",
            "3. Offer a strong combination discount (15%-30% combination discount)"
        ]
    },
    {
        phase: "Phase 2: Determination",
        strategy: "Determine the sensitivity of a variable and the extent to which it is justified to use it given the ethical and legal criteria in Table X.",
        question: "For the new CARX insurance, you need to decide as product manager whether you want to use gender, age,  car type and zip code as variable for premium calculation. You can first ask internal experts which variable can be used but this will take a few weeks. Do you want to do this?",
        options: [
            "1. No, do not wait for the experts but use all variables",
            "2. Yes, first get input from legal and ethical experts to determine if these variables are allowed",
            "3. No, do not do an ethics and legal check but instead use data science to check whether variables are relevant"
        ]
    },
    {
        phase: "Phase 2: Determination",
        strategy: "Determine whether the fairness measure uses protected variables directly to measure fairness or whether the measure uses an estimate of a protected variable based on proxies",
        question: "A few colleagues are interested in understanding whether our insurance products might discriminate against people with a migration background. They suggest that we should ask any new customer about the migration history of them or their parents. Do you think these questions should be asked when asking an insurance quote?",
        options: [
            "1. Yes, we can just ask these as mandatory questions like all other questions for information",
            "2. Yes, but we do this in a separate section where it is clearly explained that this is for avoiding discrimination. Filling in these questions is optional",
            "3. No, we should not ask people for their migration background. Instead we can estimate it based on zipcode and nr. of migrants per zipcode"
        ]
    },
    {
        phase: "Phase 3: Adjustment",
        strategy: "Adjust dataset by removing sensitive variables and any variables or interactions of variables that correlate, correcting any correlation around a sensitive variable or adding synthetic data points that level out the sensitive relationships.",
        question: "Before using a dataset to train a pricing model, you decide to ajust the dataset to make the pricing model better. What adjustment would you prefer?",
        options: [
            "1. I remove sensitive variables such as age, gender and zipcode to make sure the model will not use these",
            "2. I change the dataset so that there are no correlations between variables like car model and age and gender.",
            "3. I will add enough made-up datapoints so that there are no correlations between car model and age and gender.",
            "4. I do not make any changes to the dataset"
        ]
    },
    {
        phase: "Phase 3: Adjustment",
        strategy: "Adjusting the algorithm to make it explainable.",
        question: "Your data scientist explains that there are multiple modelling techniques: generalized linear models that provide reasonable risk estimates that are explainable, and neural networks that give better estimates but are hard to explain. What technique do you prefer?",
        options: [
            "1. You choose the generalized linear models since you think the explanations will be important later on",
            "2. You choose the neural networks since you think that have accurate risk estimates is important",
            "3. You ask the data scientist to go for a hybrid or combined approach"
        ]
    },
    {
        phase: "Phase 4: Evaluation",
        strategy: "Evaluate the model repeatedly in practice (after launch) for fairness through audits, statistics, experiments or observational studies",
        question: "Your product is launched and you are given two options: remain project manager and move on to a new project, or become the 'product owner' for this product and evaluate this product through audits and experiments and make adjustments.",
        options: [
            "1. Since the product is successfully launched you decide to move on to a new product",
            "2. You decide to become product owner since you want to evaluate the fairness in practice of your new product",
            "3. You stay on for a bit longer in order to plan audits and experiments for the fairness of the product"
        ]
    },
    {
        phase: "Phase 5: Communication",
        strategy: "Enabling customers, competitors and regulators to challenge the model by setting up procedures for doing so.",
        question: "You are considering to promote transparency in the industry by publishing training data and the model on data science platform Kaggle.",
        options: [
            "1. You publish the data but not the model on Kaggle to help other researchers. You remove client names but otherwise publish data as is",
            "2. You publish the data and the model on Kaggle. You carefully rescale the data, remove unqiue values and adjust locations to make it fully anonymous",
            "3. You publish the data and the model on Kaggle and even create a challenge with actual prize money.",
            "4. No way"
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
    ],
    [
        {profitability: 1, fairness: 1, compliance: 0},
        {profitability: 2, fairness: 0, compliance: 0},
        {profitability: 4, fairness: 0, compliance: -7}
    ],
    [
        {profitability: 4, fairness: -1, compliance: -8},
        {profitability: 1, fairness: 2, compliance: 1},
        {profitability: 2, fairness: 0, compliance: -4}
    ],
    [
        {profitability: -2, fairness: 4, compliance: -1},
        {profitability: -1, fairness: 1, compliance: 0},
        {profitability: 2, fairness: -2, compliance: 0}
    ],
    [
        {profitability: -5, fairness: 2, compliance: 1},
        {profitability: 1, fairness: 2, compliance: 1},
        {profitability: 1, fairness: 2, compliance: -5},
        {profitability: 3, fairness: -2, compliance: 1}
    ],
    [
        {profitability: 2, fairness: 5, compliance: 2},
        {profitability: 4, fairness: 2, compliance: -1},
        {profitability: 1, fairness: 1, compliance: -2}
    ],
    [
        {profitability: 3, fairness: -2, compliance: 0},
        {profitability: 2, fairness: 4, compliance: 0},
        {profitability: 1, fairness: 2, compliance: 0}
    ],
    [
        {profitability: 1, fairness: 0, compliance: -5},
        {profitability: 1, fairness: 1, compliance: 0},
        {profitability: -1, fairness: 5, compliance: 0},
        {profitability: 0, fairness: 0, compliance: 0}
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
    ],
    [
        "Not using discounts will make the product less attractive",
        "Good choice! A small discount is allowed and will lead to more sales",
        "It is legally required that insurance pricing is mostly based on actual risk. A strong combination discount leads to fines"
    ],
    [
        "You cannot skip a legal and ethics check. Gender cannot be used for legal reasons!",
        "Good choice! You learn that gender cannot be used but other variables should be considered",
        "You should not skip a legal and ethics check. Even when variables are relevant, they can still be illegal to use (e.g. gender)"
    ],
    [
        "Many potential customers do not want to answer these questions",
        "Yes, this helps with understanding and avoiding bias",
        "The fairness analysis will not be very precise since it is based on assumptions"
    ],
    [
        "Removing variables can improve fairness but makes the model less accurate",
        "Changing the dataset ot remove correlations can help increase fairness",
        "Adding synthetic datapoints makes it harder for the compliance department to verify that the risks are estimated correctly",
        "Not making any changes is best for accuracy"
    ],
    [
        "Your explanations are very much appreciated by your colleagues but the new product is not as profitable as expected",
        "Your final product is very profitable, but the lack of explanations leads to additional complaints",
        "The hybrid approach is not more accurate and even hard to explain than  generalized linear models or neural networks"
    ],
    [
        "You move on. The product is never fully tested and optimized and contains some biases",
        "In the next months you improve profitability and fairness by finding and removing biases in pricing",
        "The company finds a suitable product owner. They appreciate your planning efforts and do some audits"
    ],
    [
        "You get notified that the data can be tracked to individual people and that you have caused a data breach. You get fined for mishandling personal data",
        "You learn from responses on Kaggle that your model has some slight biases. Your improve fairness by correcting the biases",
        "The competition on kaggle is very popular and you learn a lot from all responses. This improves the fairness of the model",
        "No feedback"
    ]
]

const feedbackThresholds = [
    { score: 20, message: "Perfect score!" },
    { score: 15, message: "Your product is a success. You are promoted and get an award" },
    { score: 10, message: "Your product is working and but not unique. You keep your current position" },
    { score: 1,  message: "Your product is launched but is a failure. You reconsider your career" },
    { score: 0,  message: "Your product is rejected :-(" }
];

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

function getFeedback(score) {
    for (const item of feedbackThresholds) {
        if (score >= item.score) {
        return item.message;
        }
    }
    return "No feedback available";
}

function nextQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    updateContent(currentIndex);
}

function prevQuestion() {
    currentIndex = (currentIndex - 1 + questions.length) % questions.length;
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

        // update final scores
        let score1 = (fairness > 0 && compliance > 0) ? profitability : 0;

        document.getElementById("score1").textContent = score1;
        document.getElementById("feedback1").textContent = getFeedback(score1);

        let score2 = (compliance <= 0) ? 0 : Math.round((profitability+fairness) / 2)

        document.getElementById("score2").textContent = score2;
        document.getElementById("feedback2").textContent = getFeedback(score2);

        // Show the tables and hide the original questions
        document.getElementById("resultsTable").style.display = "table";
        document.getElementById("feedbackTable").style.display = "table";
        document.getElementById("scoreResults").style.display = "block"
        document.getElementById("base").style.display = "none";
    }
    else {
        alert("Not every answer has been filled in.");
    }
}

updateContent(currentIndex);