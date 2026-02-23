const jobContainer = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const totalTabCount = document.getElementById("totalTabCount");
const filterBtns = document.querySelectorAll(".filterBtn");
const emptyState = document.getElementById("emptyState");


let currentFilter = "all";

// default status
document.querySelectorAll(".jobCard").forEach(card => {
    card.dataset.status = "none";
});

updateCounts();

function updateCounts() {
    const cards = document.querySelectorAll(".jobCard");

    let total = cards.length;
    let interview = 0;
    let rejected = 0;

    cards.forEach(card => {
        if (card.dataset.status === "interview") interview++;
        if (card.dataset.status === "rejected") rejected++;
    });

    totalCount.textContent = total;
    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;

    updateTabView();
}

function updateTabView() {
    const cards = document.querySelectorAll(".jobCard");
    let visibleCount = 0;

    const totalJobs = cards.length; // total remaining jobs

    cards.forEach(card => {
        if (currentFilter === "all") {
            card.style.display = "flex";
            visibleCount++;
        } 
        else if (card.dataset.status === currentFilter) {
            card.style.display = "flex";
            visibleCount++;
        } 
        else {
            card.style.display = "none";
        }
    });

    tabCount.textContent = visibleCount;
    totalTabCount.textContent = totalJobs;

    if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

// FILTER
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        updateTabView();
    });
});

// ACTIONS
jobContainer.addEventListener("click", function (e) {

    const card = e.target.closest(".jobCard");
    if (!card) return;

    const badge = card.querySelector(".statusBadge");

// Interview
    if (e.target.classList.contains("interviewBtn")) {
        card.dataset.status = "interview";
        badge.textContent = "INTERVIEW";
        badge.className = "statusBadge inline-block px-3 py-1 text-xs font-semibold rounded-md bg-green-100 text-green-700 mb-3";
        updateCounts();
    }

// Rejected
    if (e.target.classList.contains("rejectedBtn")) {
        card.dataset.status = "rejected";
        badge.textContent = "REJECTED";
        badge.className = "statusBadge inline-block px-3 py-1 text-xs font-semibold rounded-md bg-red-100 text-red-700 mb-3";
        updateCounts();
    }

// Delete
    if (e.target.closest(".deleteBtn")) {
        card.remove();
        updateCounts();
    }
});