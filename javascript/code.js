// Add Event Listener to open and read Excel sheet
document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});

        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var sheetData = XLSX.utils.sheet_to_json(firstSheet, {header: 1});

        // Creating Bar Chart
        // Extract "Age" column for data analysis
        var ages = sheetData.slice(1).map(row => row[1]);

        // Create bins
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

        // Loop through the data in the "Age" Column and sort them into the bins
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

        // Extract the keys and values to prepare the data for Chart.js
        var labels = Object.keys(ageBins);
        var data = Object.values(ageBins);

        // Creating the chart
        var ctx = document.getElementById('ageChart').getContext('2d')
        // Building the Chart
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

        // Creating pie charts
        // Extract the "Obesity" column for data analysis
        var obesity = sheetData.slice(1).map(row => row[10]);

        // Counting the occurrences of each obesity category
        var obesityCounts = {};
        
        obesity.forEach(ob => {
            if (obesityCounts[ob]) {
                obesityCounts[ob]++;
            } else {
                obesityCounts[ob] = 1;
            }
        });

        // Extract the keys and values to prepare the data for the chart
        var obesityLabels = Object.keys(obesityCounts);
        var obesityData = Object.values(obesityCounts);

        // Building the pie chart
        var obesityCtx = document.getElementById('obesityChart').getContext('2d');
        var obesityChart = new Chart(obesityCtx, {
            type: 'pie',
            data: {
                labels: obesityLabels,
                datasets: [{
                    label: 'Obesity',
                    data: obesityData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 100, 80, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 100, 80, 0.2)'
                    ],
                    borderWidth: 1
                }]
            }
        });

        // Extract the "Gender" column for data analysis
        var gender = sheetData.slice(1).map(row => row[2]);
        var genderCounts = {};

        gender.forEach(g => {
            if (genderCounts[g]) {
                genderCounts[g]++;
            } else {
                genderCounts[g] = 1;
            }
        });

        // Extract the keys and values to prepare the data for the chart
        var genderLabels = Object.keys(genderCounts);
        var genderData = Object.values(genderCounts);

        // Building the pie chart
        var genderCtx = document.getElementById('genderChart').getContext('2d');
        var genderChart = new Chart (genderCtx, {
            type: 'pie',
            data: {
                labels: genderLabels,
                datasets: [{
                    label: 'Gender',
                    data: genderData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            }
        });

        // Extract the "Balanced Diet" column for data analysis
        var diet = sheetData.slice(1).map(row => row[9]);
        var dietCounts = {};

        diet.forEach(value => {
            if (dietCounts[value]) {
                dietCounts[value]++;
            } else {
                dietCounts[value] = 1;
            }
        });

        // Extract the keys and values to prepare the data for the chart
        var dietLabels = Object.keys(dietCounts);
        var dietData = Object.values(dietCounts);

        // Building the chart
        var dietCtx = document.getElementById('dietChart').getContext('2d');
        var dietChart = new Chart(dietCtx, {
            type: 'pie',
            data: {
                labels: dietLabels,
                datasets: [{
                    label: 'Dietary Habits',
                    data: dietData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 100, 80, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 100, 80, 0.2)'
                    ],
                    borderWidth: 1
                }]
            }
        });
    };

    reader.readAsArrayBuffer(file);
});
