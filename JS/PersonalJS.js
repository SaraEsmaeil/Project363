document.addEventListener("DOMContentLoaded", function () {
    // Existing modal handling code
    var editModal = document.getElementById("myModal");
    var verifyModal = document.getElementById("verifyModal");
    var invalidCodeModal = document.getElementById("invalidCodeModal");
    var closeEditModal = document.getElementById("closeEditModal");
    var closeVerifyModal = document.getElementById("closeVerifyModal");
    var closeInvalidCodeModal = document.getElementById("closeInvalidCodeModal");
    var settingsButton = document.getElementById("settingsButton");

    // Open Edit Profile modal
    settingsButton.onclick = function () {
        editModal.style.display = "block";
    }

    // Close Edit Profile modal
    closeEditModal.onclick = function () {
        editModal.style.display = "none";
    }

    // Close Verification modal
    closeVerifyModal.onclick = function () {
        verifyModal.style.display = "none";
    }

    // Close Invalid Code modal
    closeInvalidCodeModal.onclick = function () {
        invalidCodeModal.style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == editModal) {
            editModal.style.display = "none";
        } else if (event.target == verifyModal) {
            verifyModal.style.display = "none";
        } else if (event.target == invalidCodeModal) {
            invalidCodeModal.style.display = "none";
        }
    }

    // Handle form submission for Edit Profile
    document.getElementById("editForm").onsubmit = function (event) {
        event.preventDefault();
        editModal.style.display = "none";
        verifyModal.style.display = "block";
        startTimer(); // Start the timer when opening the verification modal
    }

    // Handle form submission for Verification
    document.getElementById("verifyForm").onsubmit = function (event) {
        event.preventDefault();
        var phoneNumber = document.getElementById("verificationPhone").value;
        alert("Verifying phone number: " + phoneNumber);
        verifyModal.style.display = "none";
    }

    // Function for Call Back button
    window.callBack = function () {
        verifyModal.style.display = "none";
        editModal.style.display = "block";
    }

    // Timer functionality
    function startTimer() {
        var timerDisplay = document.getElementById("timer");
        var timeLeft = 60;
        var timer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerDisplay.innerHTML = "Time's up!";
                invalidCodeModal.style.display = "block";
                verifyModal.style.display = "none";
            } else {
                var minutes = Math.floor(timeLeft / 60);
                var seconds = timeLeft % 60;
                timerDisplay.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
                timeLeft--;
            }
        }, 1000);
    }

    // Handle "Try Again" button
    document.getElementById("tryAgainButton").onclick = function () {
        invalidCodeModal.style.display = "none";
        verifyModal.style.display = "block";
        startTimer();
    }

    // Handle "Resend Code" button
    document.getElementById("resendCodeButton").onclick = function () {
        alert("Verification code has been resent.");
    }

    // Handle "Back to Edit Profile" button
    document.getElementById("backToEditProfileButton").onclick = function () {
        invalidCodeModal.style.display = "none";
        editModal.style.display = "block";
    }

    

    
});
