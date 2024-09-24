const donationInput = document.getElementById("donationInput");
const donationAmountDisplay = document.getElementById("donationAmount");
const donateButton = document.getElementById("donateButton");
const causeDonate1 = document.getElementById("causeDonate1");
const causeDonate2 = document.getElementById("causeDonate2");
const causeDonate3 = document.getElementById("causeDonate3");

const donationInput2 = document.getElementById("donationInput2"); 
const donationAmountDisplay2 = document.getElementById(
  "donationAmountDisplay2"
);
const donateButton2 = document.getElementById("donateButton2");
const donateButton3 = document.getElementById("donateButton3");
const donationInput3 = document.getElementById("donationInput3"); 
const donationAmountDisplay3 = document.getElementById(
  "donationAmountDisplay3"
);


const confirmModal = document.getElementById("confirmModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");

// Initial amount
let totalAmount1 = 0;
let totalAmount2 = 0;
let totalAmountHeader = 5500; 
let donationHistory = [];

function showDonation() {
  document.getElementById("donationBtn").classList.add("bg-btn_color");
  document.getElementById("donationBtn").classList.remove("border-2");

  document.getElementById("historyBtn").classList.remove("bg-btn_color");
  document.getElementById("historyBtn").classList.add("border-2");

  document.getElementById("donationSection").classList.remove("hidden");
  document.getElementById("historySection").classList.add("hidden");
}

function showHistory() {
  document.getElementById("historyBtn").classList.add("bg-btn_color");
  document.getElementById("historyBtn").classList.remove("border-2");

  document.getElementById("donationBtn").classList.remove("bg-btn_color");
  document.getElementById("donationBtn").classList.add("border-2");

  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.remove("hidden");
}

// Function to update the donation history display
function updateDonationHistory(causeText, donationValue, donationDate) {
  const historySection = document.getElementById("historyContainer");
  const historyItem = document.createElement("div");
  historyItem.className =
    "border-card_border border-[1px] border-solid p-6 rounded-lg mb-4";
  historyItem.innerHTML = `
        <h1>${donationValue} BDT is ${causeText}</h1>
        <p>Date: ${donationDate}</p>
    `;
  historySection.appendChild(historyItem);
}

function handleDonation(
  donationValue,
  causeText,
  donationDisplay,
  donationInputField,
  totalAmount
) {

 // Check if the donation amount exceeds the available balance
 if (donationValue > totalAmountHeader) {
    alert("Donation amount exceeds the available balance.");
    return; 
  }

  if (!isNaN(donationValue) && donationValue > 0) {
    confirmModal.classList.add("modal-open");

    confirmBtn.onclick = () => {
      // Update the respective total amount
      if (donationDisplay === donationAmountDisplay) {
        totalAmount1 += donationValue;
        donationAmountDisplay.textContent = totalAmount1 + " BDT";
      } else if(donationDisplay === donationAmountDisplay2) {
        const currentAmount =
          parseFloat(donationAmountDisplay2.textContent) || 0;
        const newTotalAmount = currentAmount + donationValue;
        donationAmountDisplay2.textContent = newTotalAmount + " BDT";
      } else if (donationDisplay === donationAmountDisplay3) {
        totalAmount2 += donationValue;
        donationAmountDisplay3.textContent = totalAmount2 + " BDT";
    }
        
        // Decrease the total amount in the header
      totalAmountHeader -= donationValue; // Deduct the donation value
      document.getElementById("totalAmount").textContent = totalAmountHeader + " BDT";

      const donationDate = new Date().toLocaleString();
      donationHistory.push({
        amount: donationValue,
        date: donationDate,
        cause: causeText,
      });

      updateDonationHistory(causeText, donationValue, donationDate);
      confirmModal.classList.remove("modal-open");
      donationInputField.value = ""; // Clear input field
    };

    cancelBtn.onclick = () => {
      confirmModal.classList.remove("modal-open");
    };
  } else {
    alert("Please enter a valid donation amount.");
  }
}

// Event listeners for the donation buttons
donateButton.addEventListener("click", () => {
  const donationValue = parseFloat(donationInput.value);
  handleDonation(
    donationValue,
    causeDonate1.innerText,
    donationAmountDisplay,
    donationInput
  );
});

donateButton2.addEventListener("click", () => {
  const donationValue2 = parseFloat(donationInput2.value);
  handleDonation(
    donationValue2,
    causeDonate2.innerText,
    donationAmountDisplay2,
    donationInput2
  );
});

donateButton3.addEventListener("click", () => {
    const donationValue3 = parseFloat(donationInput3.value);
    handleDonation(
      donationValue3,
      causeDonate3.innerText,
      donationAmountDisplay3,
      donationInput3
    );
  });