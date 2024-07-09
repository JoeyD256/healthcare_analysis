document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});

        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var sheetData = XLSX.utils.sheet_to_json(firstSheet, {header: 1});

        var ages = sheetData.slice(1).map(row => row[1]);

        var ageBins = {
            '0-19': 0,
            '20-29': 0,
            '30-39': 0,
            '40-49': 0,
            '50-59': 0,
            '60-69': 0,
            '70-79': 0,
            '80-89': 0,
            '90-99': 0
        };

        ages.forEach(age => {
            if (age >= 0 && age <= 19) ageBins['0-19']++;
            else if (age >= 20 && age <= 29) ageBins['20-29']++;
            else if (age >= 30 && age <= 39) ageBins['30-39']++;
            else if (age >= 40 && age <= 49) ageBins['40-49']++;
            else if (age >= 50 && age <= 59) ageBins['50-59']++;
            else if (age >= 60 && age <= 69) ageBins['60-69']++;
            else if (age >= 70 && age <= 79) ageBins['70-79']++;
            else if (age >= 80 && age <= 89) ageBins['80-89']++;
            else if (age >= 90 && age <= 99) ageBins['90-99']++;
        });

        var labels = Object.keys(ageBins);
        var data = Object.values(ageBins);

        var ctx = document.getElementById('ageChart').getContext('2d')
        var ageChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Age Ranges',
                    data, data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2',
                    borderColor: 'rgba(75, 192, 192, 1',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    reader.readAsArrayBuffer(file);
});