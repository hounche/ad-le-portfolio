(function () {
    const chartInstances = {};

    const chartDefaults = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: "rgba(255,255,255,0.65)", font: { size: 11 } }
            },
            tooltip: {
                backgroundColor: "#111820",
                titleColor: "#fff",
                bodyColor: "rgba(255,255,255,0.72)"
            }
        },
        scales: {
            x: {
                ticks: { color: "rgba(255,255,255,0.55)", font: { size: 10 } },
                grid: { display: false }
            },
            y: {
                ticks: { color: "rgba(255,255,255,0.45)", font: { size: 10 } },
                grid: { color: "rgba(255,255,255,0.06)" }
            }
        }
    };

    function cloneOptions(options) {
        return JSON.parse(JSON.stringify(options));
    }

    function renderChart(id, config) {
        const canvas = document.getElementById(id);
        if (!canvas || typeof Chart === "undefined") return;
        if (chartInstances[id]) chartInstances[id].destroy();
        chartInstances[id] = new Chart(canvas, config);
    }

    function renderPipelineCharts() {
        renderChart("pipelineStageChart", {
            type: "bar",
            data: {
                labels: ["Import", "Nettoyage", "SQL", "Power BI"],
                datasets: [{
                    label: "Éléments traités",
                    data: [128450, 124340, 8, 24],
                    backgroundColor: ["rgba(65,93,230,.8)", "rgba(18,194,233,.8)", "rgba(230,65,87,.8)", "rgba(255,183,77,.8)"],
                    borderRadius: 6
                }]
            },
            options: Object.assign(cloneOptions(chartDefaults), { scales: Object.assign(cloneOptions(chartDefaults.scales), { y: { ticks: { color: "rgba(255,255,255,.45)", font: { size: 10 }, callback: value => value.toLocaleString("fr-FR") }, grid: { color: "rgba(255,255,255,.06)" } } }) })
        });
        renderChart("pipelineQualityChart", {
            type: "doughnut",
            data: { labels: ["Conformes", "Corrigées", "À contrôler"], datasets: [{ data: [96.8, 2.1, 1.1], backgroundColor: ["#12c2e9", "#415de6", "#e64157"], borderWidth: 0 }] },
            options: Object.assign(cloneOptions(chartDefaults), { cutout: "68%", scales: {} })
        });
    }

    function renderAccountingCharts() {
        renderChart("accountingPerformanceChart", {
            type: "bar",
            data: {
                labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
                datasets: [
                    { label: "Recettes", data: [5.4, 6.2, 7.1, 7.8, 8.2, 8.1], backgroundColor: "rgba(18,194,233,.8)", borderRadius: 5 },
                    { label: "Charges", data: [3.1, 3.5, 3.9, 4.2, 4.5, 4.7], backgroundColor: "rgba(230,65,87,.72)", borderRadius: 5 },
                    { label: "Résultat", data: [2.3, 2.7, 3.2, 3.6, 3.7, 3.4], backgroundColor: "rgba(65,93,230,.8)", borderRadius: 5 }
                ]
            },
            options: Object.assign(cloneOptions(chartDefaults), { scales: Object.assign(cloneOptions(chartDefaults.scales), { y: { ticks: { color: "rgba(255,255,255,.45)", font: { size: 10 }, callback: value => value + " k€" }, grid: { color: "rgba(255,255,255,.06)" } } }) })
        });
        renderChart("accountingExpenseChart", {
            type: "doughnut",
            data: { labels: ["Fonctionnement", "Sous-traitance", "Outils", "Charges sociales"], datasets: [{ data: [31, 27, 18, 24], backgroundColor: ["#415de6", "#12c2e9", "#e64157", "#ffb74d"], borderWidth: 0 }] },
            options: Object.assign(cloneOptions(chartDefaults), { cutout: "68%", scales: {} })
        });
    }

    document.addEventListener("shown.bs.modal", event => {
        if (event.target.id === "pipelineDashboardModal") renderPipelineCharts();
        if (event.target.id === "accountingDashboardModal") renderAccountingCharts();
    });
})();
