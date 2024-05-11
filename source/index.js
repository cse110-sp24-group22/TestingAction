const journal = document.getElementById("journal");

const existing = localStorage.getItem("journal");
if (existing) {
    journal.value = existing;
}

onInput();

function onInput() {
    const journalWords = journal.value.split(/\s+/g).filter(s => !!s).length;
    document.getElementById("word-count").innerText = journalWords;
    localStorage.setItem("journal", journal.value);
}

journal.addEventListener("input", onInput)
