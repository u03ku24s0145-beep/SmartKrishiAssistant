
function showCrops() {
    const results = document.getElementById("cropResults");

    results.innerHTML = `
        <div class="card">
            <h3>🌾 Ragi</h3>
            <p>A millet crop that grows well in suitable, well-drained soil.</p>
        </div>

        <div class="card">
            <h3>🌱 Paddy</h3>
            <p>Rice crop that generally needs plenty of water.</p>
        </div>

        <div class="card">
            <h3>🍅 Tomato</h3>
            <p>Needs sunlight, suitable soil, and regular watering.</p>
        </div>
    `;
}


function viewTips() {
    const results = document.getElementById("tipsResults");
    const lang = document.getElementById("language").value;

    if (lang === "kn") {
        results.innerHTML = `
            <h3>🌿 ಕೃಷಿ ಸಲಹೆಗಳು</h3>
            <ul>
                <li>ನೀರು ಹಾಕುವ ಮೊದಲು ಮಣ್ಣಿನ ತೇವಾಂಶ ಪರಿಶೀಲಿಸಿ.</li>
                <li>ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೀಜಗಳನ್ನು ಬಳಸಿ.</li>
                <li>ಬೆಳೆಗಳಲ್ಲಿ ಕೀಟಗಳಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.</li>
                <li>ಅತಿಯಾದ ರಸಗೊಬ್ಬರ ಬಳಕೆಯನ್ನು ತಪ್ಪಿಸಿ.</li>
            </ul>
        `;
    } else {
        results.innerHTML = `
            <h3>🌿 Farming Tips</h3>
            <ul>
                <li>Check soil moisture before watering.</li>
                <li>Use good-quality seeds.</li>
                <li>Inspect crops regularly for pests.</li>
                <li>Avoid excessive fertilizer use.</li>
            </ul>
        `;
    }
}

function searchCrops() {
    const search = document.getElementById("cropSearch")
        .value.trim().toLowerCase();

    const results = document.getElementById("searchResults");

    const crops = {
        ragi: "Ragi is a millet crop. It grows well in suitable, well-drained soil.",
        paddy: "Paddy is a rice crop that generally needs plenty of water.",
        tomato: "Tomato needs sunlight, suitable soil, and regular watering."
    };

    if (crops[search]) {
        results.innerHTML = `
            <div class="card">
                <h3>${search.charAt(0).toUpperCase() + search.slice(1)}</h3>
                <p>${crops[search]}</p>
            </div>
        `;
    } else {
        results.textContent =
            "Crop not found. Try Ragi, Paddy, or Tomato.";
    }
}

function changeLanguage() {
    const lang = document.getElementById("language").value;
    const kannada = lang === "kn";

    document.querySelector("header h1").textContent =
        kannada ? "🌱 ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಸಹಾಯಕ" : "🌱 Smart Krishi Assistant";

    document.querySelector("header p").textContent =
        kannada ? "ಉತ್ತಮ ಕೃಷಿಗಾಗಿ ನಿಮ್ಮ ಸ್ಮಾರ್ಟ್ ಸಹಾಯಕ" :
        "Your smart companion for better farming";

    const nav = document.querySelectorAll("nav a");
    nav[0].textContent = kannada ? "ಮುಖಪುಟ" : "Home";
    nav[1].textContent = kannada ? "ಬೆಳೆಗಳು" : "Crops";
    nav[2].textContent = kannada ? "ಕೃಷಿ ಸಲಹೆಗಳು" : "Farming Tips";

    document.querySelector("#home .card h2").textContent =
        kannada ? "ಸ್ವಾಗತ, ರೈತರೇ!" : "Welcome, Farmer!";

    document.querySelector("#crops h2").textContent =
        kannada ? "🌾 ಬೆಳೆ ಮಾಹಿತಿ" : "🌾 Crop Information";

    document.querySelector("#tips h2").textContent =
        kannada ? "🌿 ಕೃಷಿ ಸಲಹೆಗಳು" : "🌿 Farming Tips";

    document.querySelector("#tips button").textContent =
        kannada ? "ಸಲಹೆಗಳನ್ನು ನೋಡಿ" : "View Tips";
}

function askFarmingQuestion() {
    const question = document
        .getElementById("farmerQuestion")
        .value.trim().toLowerCase();

    const answer = document.getElementById("farmerAnswer");

    if (question === "") {
        answer.textContent = "Please enter a farming question.";
        return;
    }

    let guidance;

    if (question.includes("yellow") || question.includes("yellowing")) {
        guidance = "Yellow leaves may be caused by watering problems, nutrient deficiencies, or pests. Check soil moisture and inspect the plant carefully.";
    } else if (question.includes("pest") || question.includes("insect")) {
        guidance = "Inspect the leaves and stems for insects or damage. Identify the pest before choosing a treatment.";
    } else if (question.includes("water") || question.includes("watering")) {
        guidance = "Check soil moisture before watering. Avoid both waterlogging and letting the crop dry out excessively.";
    } else if (question.includes("tomato")) {
        guidance = "Tomatoes need suitable sunlight, well-drained soil, and consistent watering. Check the plant for signs of pests or disease.";
    } else if (question.includes("ragi")) {
        guidance = "Ragi grows best in suitable, well-drained soil. Consider local rainfall, soil conditions, and the crop's growth stage.";
    } else if (question.includes("paddy") || question.includes("rice")) {
        guidance = "Paddy water requirements depend on the growth stage, soil, and local conditions. Follow locally recommended water management practices.";
    } else {
        guidance = "Please describe the crop and its symptoms, such as yellow leaves, spots, pests, or wilting, to get more relevant basic guidance.";
    }

    answer.textContent = "🌱 Suggested guidance: " + guidance;
}
