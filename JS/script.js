/* =========================================
   1. TELEMETRY & UI CONTROLS
   ========================================= */

// Connection Alert 
alert("F1_EVO Telemetry: Systems Online");

function toggleDarkMode() {
    // Toggles the light-mode class on the body
    document.body.classList.toggle("light-mode");
    console.log("Interface theme altered via telemetry control.");
}

function goBack() {
    // Navigates back one step in the browser history
    window.history.back();
}

/* =========================================
   2. LAUNCHPAD & EVOLUTION LOGIC
   ========================================= */

function engageSystem() {
    let status = document.getElementById("systemStatus"); 
    let launchSequence = "IGNITION CONFIRMED: 350kW POWER ONLINE"; 
    
    alert("Warning: Initializing 2026 Power Unit Startup...");
    
    status.innerHTML = `<span style="color:var(--secondary-accent); font-weight:bold;">${launchSequence}</span>`;
    status.style.borderLeftColor = "var(--secondary-accent)";
    
    // Redirects to evolution page
    setTimeout(function() {
        window.location.href = "evolution.html";
    }, 2000);
}

function highlightRow(row) {
    row.style.backgroundColor = "var(--shadow-color)";
    row.style.transform = "scale(1.02)";
    row.style.transition = "all 0.3s ease";
}

function resetRow(row) {
    row.style.backgroundColor = "transparent";
    row.style.transform = "scale(1)";
}

/* =========================================
   3. PADDOCK & STRATEGY LOGIC
   ========================================= */

function processProfile(event) {
    event.preventDefault(); 
    let alias = document.getElementById("driverAlias").value;
    let output = document.getElementById("profileOutput");

    if (alias === "") {
        alert("Telemetry Error: Driver Alias required for Grid Access.");
        output.innerHTML = "ACCESS DENIED: IDENTITY UNKNOWN";
        output.style.color = "var(--primary-accent)";
    } else {
        alert("Syncing 2026 Driver Profile: " + alias);
        output.innerHTML = "WELCOME TO THE GRID, " + alias.toUpperCase();
        output.style.color = "var(--secondary-accent)";
    }
}

function runStrategySim(event) {
    event.preventDefault(); 
    let tireChoice = document.getElementById("tireType").value;
    let fuelLoad = parseInt(document.getElementById("fuelKg").value); 
    let result = document.getElementById("simResult");

    if (tireChoice === "Soft" && fuelLoad > 50) {
        result.innerHTML = "STATUS: <span style='color:var(--primary-accent)'>FAILURE</span>. High fuel load shredded the soft tires.";
    } else {
        result.innerHTML = "STATUS: <span style='color:var(--secondary-accent)'>SUCCESS</span>. Strategy optimized for E-Boost era.";
    }
}

function nextPhase() {
    alert("Simulation complete. Telemetry data saved. Proceeding to Track Day...");
    window.location.href = "index.html"; // Returns user to start
}