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

document.getElementById('uploadBtn').addEventListener('click', function () {
    document.getElementById('avatarInput').click();
});

document.getElementById('avatarInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('avatarPreview').src = e.target.result;
            document.getElementById('avatarHidden').value = e.target.result; // Base64 код
        };
        reader.readAsDataURL(file);
    }
});
