(function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactFormStatus");
    const replyTo = document.getElementById("replyTo");

    if (!form || !status || !replyTo) {
        return;
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const submitButton = form.querySelector("button[type=submit]");
        const formData = new FormData(form);
        replyTo.value = formData.get("email") || "";

        submitButton.disabled = true;
        status.className = "contact-form-status is-sending";
        status.textContent = "Envoi en cours...";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            form.reset();
            status.className = "contact-form-status is-success";
            status.textContent = "Merci, ton message a bien été envoyé.";
        } catch (error) {
            status.className = "contact-form-status is-error";
            status.textContent = "L'envoi a échoué. Vérifie la configuration Formspree ou réessaie dans un instant.";
        } finally {
            submitButton.disabled = false;
        }
    });
})();