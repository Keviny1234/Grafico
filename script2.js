(async function () {
    new Chart(
        document.getElementById("grafico2"),
        {

            type: 'line',
            data: {
                labels: ["Janeiro", "Fevereiro",
                    "Março", "Abril",
                    "Maio", "Junho"],
                datasets: [
                    {
                        label: "Quantidade de Faltas",
                        data: [4, 7, 12, 1, 2, 9]

                    }
                ]
            }
        }
    )
})();