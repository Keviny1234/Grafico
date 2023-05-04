(async function () {
    new Chart(
        document.getElementById("grafico1"),
        {

            type: 'bar',
            data: {
                labels: ["Português", "Matemática",
                    "Biologia", "Programaçâo",
                    "Redes TI", "Prog. Mobile"],
                datasets: [
                    {
                        label: "Média de Notas",
                        data: [7, 5, 10, 9.5, 8, 6]

                    }
                ]
            }
        }
    )
})();