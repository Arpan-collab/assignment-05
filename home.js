
function handleDonationNew(inputFieldId, balanceFieldId, addBalanceFieldId, historyFieldId, cause) {
    let inputIdNew = parseFloat(document.getElementById(inputFieldId).value); 
    let addBalanceNew = parseFloat(document.getElementById(addBalanceFieldId).innerText); 
    let balanceNew = parseFloat(document.getElementById(balanceFieldId).innerText); 

    let historyOneNew = document.getElementById(historyFieldId); 
    if (!isNaN(inputIdNew) && inputIdNew > 0 && inputIdNew <= balanceNew) {
        let totalNew = balanceNew - inputIdNew;
        let newBalanceNew = addBalanceNew + inputIdNew;

        document.getElementById(addBalanceFieldId).innerText = newBalanceNew.toFixed(2); 
        document.getElementById(balanceFieldId).innerText = totalNew.toFixed(2); 
        historyOneNew.innerHTML += `
        <p class="text-xs text-gray-500">${inputIdNew} Taka is donated for ${cause}.
        <p class="text-xs text-gray-500">Date: ${new Date().toLocaleString()}</p>`;

        document.getElementById(inputFieldId).value = "";
        alert("Donation successful!");
    } else {
        
        alert("Invalid donation amount. Please check your balance and input.");
    }
}
// Donation for Noakhali
document.getElementById('donate-btn-new1').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonationNew('donation-input-new1', 'balance-total-new', 'project-balance-new1', 'history-item-new1', 'Flood at Noakhali');
});

// Donation for Feni
document.getElementById('donate-btn-new2').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonationNew('donation-input-new2', 'balance-total-new', 'project-balance-new2', 'history-item-new2', 'Flood at Feni');
});

// Donation for Quota Protest Relief
document.getElementById('donate-btn-new3').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonationNew('donation-input-new3', 'balance-total-new', 'project-balance-new3', 'history-item-new3', 'Quota Protest Relief');
});

// Blog button click event
let BtnBlogNew = document.getElementById('btn-blog-new');
BtnBlogNew.addEventListener('click', function () {
    window.location.href = "/faq.html"; // Redirect to the FAQ page
});

// Donation and History button toggle event
let DonationBtnNew = document.getElementById('donate-toggle-new');
let HistoryBtnNew = document.getElementById('history-toggle-new');

// Show Donation section and hide History section when "Donation" is clicked
DonationBtnNew.addEventListener('click', function () {
    DonationBtnNew.classList.add("bg-lime-300");
    HistoryBtnNew.classList.remove("bg-lime-300");

    let cardSectionNew = document.getElementById('donate-section-new');
    cardSectionNew.classList.remove("hidden");

    let historySectionNew = document.getElementById('history-section-new');
    historySectionNew.classList.add("hidden");
});

// Show History section and hide Donation section when "History" is clicked
HistoryBtnNew.addEventListener('click', function () {
    HistoryBtnNew.classList.add("bg-lime-300");
    DonationBtnNew.classList.remove("bg-lime-300");

    let cardSectionNew = document.getElementById('donate-section-new');
    cardSectionNew.classList.add("hidden");

    let historySectionNew = document.getElementById('history-section-new');
    historySectionNew.classList.remove("hidden");
});

// Common function to handle donations


// Event listeners for all three donation buttons

