// Start Plans That Grow with You
document
    .getElementById("billingToggle")
    .addEventListener("change", function () {
        let isYearly = this.checked;

        document.querySelectorAll(".price").forEach((price) => {
            price.textContent = isYearly ? "55" : "29";
        });
        document.querySelectorAll(".month").forEach((label) => {
            label.textContent = isYearly ? "/Year" : "/Month";
        });
    });

// End Plans That Grow with You

// Start Toggle Password Visibility
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".input_border .btn").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.previousElementSibling;
            let icon = this.querySelector("i");

            if (input.type === "password") {
                input.type = "text";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            } else {
                input.type = "password";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            }
        });
    });
});

// End Toggle Password Visibility