/*==========================================================
CONTACT PAGE HANDLERS
==========================================================*/

function initContactPage() {
    // 1. FAQ Accordion Handling
    document.querySelectorAll(".faq-question").forEach(button => {
        button.onclick = () => {
            const item = button.parentElement;
            item.classList.toggle("active");
        };
    });

    // 2. Contact Form AJAX Submit
    const contactForm = document.getElementById("entity-inquiry-form");
    const formContainer = document.getElementById("form-container");

    if (contactForm && formContainer) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById("submit-btn");
            const originalBtnHtml = submitBtn.innerHTML;

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Sending...</span>`;

            // Prepare Form Data
            const formData = new FormData(contactForm);
            const accessKey = formData.get("access_key");

            // Success state UI builder
            const showSuccessState = (name, email) => {
                formContainer.innerHTML = `
                    <div class="submission-success-card">
                        <div class="success-icon-circle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h2 class="success-title">Inquiry Sent!</h2>
                        <p class="success-message">Thank you, <strong>${name}</strong>. Your project details have been sent. Our team will contact you at <strong>${email}</strong> shortly.</p>
                        <button class="btn-success-reset" onclick="window.location.reload()">Send Another Inquiry</button>
                    </div>
                `;
            };

            const clientName = formData.get("name") || "there";
            const clientEmail = formData.get("email") || "your email";

            // If it is the default placeholder, mock successful submission in local environment
            if (accessKey === "YOUR_ACCESS_KEY_HERE" || !accessKey) {
                console.warn("Web3Forms access key is not set. Simulating form submission.");
                setTimeout(() => {
                    showSuccessState(clientName, clientEmail);
                }, 1000);
                return;
            }

            // Real submission via Web3Forms API
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    showSuccessState(clientName, clientEmail);
                } else {
                    console.error(json);
                    alert("Submission failed: " + (json.message || "Unknown error"));
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHtml;
                }
            })
            .catch((error) => {
                console.error(error);
                alert("An error occurred during submission. Please try again.");
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
            });
        });
    }
}

// Robust execution
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactPage);
} else {
    initContactPage();
}
