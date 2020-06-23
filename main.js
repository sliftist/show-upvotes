function clickIt(voteCount) {
    if(!voteCount) return;
    if(voteCount.childElementCount > 0) return;
    console.log("Clickity clack, I'm clicking your buttons");
    voteCount.click();
    return true;
}

function clickityClack() {
    let windowHeight = window.innerHeight;
    let voteCounts = document.querySelectorAll(".js-vote-count");
    for(let i = 0; i < voteCounts.length; i++) {
        let element = voteCounts[i];
        let rect = element.getBoundingClientRect();
        
        // Stop if they haven't scrolled far enough
        if(rect.y > windowHeight) return;

        if(clickIt(voteCounts[i])) return;
    }
}

setTimeout(() => {
    clickityClack();
    setInterval(() => {
        clickityClack();
    // "You may only fetch vote counts once every second"
    }, 2000);
}, 500);