document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.getElementById('closeModalBtn');
    var verifyAgeBtn = document.getElementById('verifyAgeBtn');
    var ageInput = document.getElementById('ageInput');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    verifyAgeBtn.addEventListener('click', function () {
        var age = parseInt(ageInput.value);

        if (isNaN(age) || age < 0) {
            alert('Ongeldige leeftijd');
        } else {
            if (age >= 18) {
                // Redirect naar een website naar keuze
                window.location.href = 'https://www.example.com';
            } else {
                // Toon rode pagina met foutmelding
                document.body.innerHTML = '<div style="color: red; text-align: center; padding: 20px;">Helaas, je bent te jong.</div>';
            }
        }
    });
});
