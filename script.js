const jobContainer = document.getElementById("jobContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const filterBtns = document.querySelectorAll(".filterBtn");
const emptyState = document.getElementById("emptyState");

let currentFilter = "all";


// Set default status
document.querySelectorAll(".jobCard").forEach(card => {
    card.dataset.status = "none";
});

updateCounts();

// UPDATE COUNTS

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

// UPDATE TAB VIEW

function updateTabView() {
    const cards = document.querySelectorAll(".jobCard");
    let visibleCount = 0;

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

    // Showing empty statement if no visible Job cards

    if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }
}

// FILTER BUTTON

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        updateTabView();
    });
});

// JOB ACTIONS

jobContainer.addEventListener("click", function (e) {

    const card = e.target.closest(".jobCard");
    if (!card) return;

    // Interview
    if (e.target.classList.contains("interviewBtn")) {
        card.dataset.status = "interview";
        updateCounts();
    }

    // Rejected
    if (e.target.classList.contains("rejectedBtn")) {
        card.dataset.status = "rejected";
        updateCounts();
    }

    // Delete
    if (e.target.closest(".deleteBtn")) {
        card.remove();
        updateCounts();
    }
});
