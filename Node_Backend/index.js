const express = require('express');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());

app.get('/appointments', (req, res) => {
  try {
    const workbook = XLSX.readFile(path.join(__dirname, '../Appointments_Data.xlsx'));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    // Convert date and time fields
    const formattedData = jsonData.map((row) => {
      const date = new Date((row.Date - (25567 + 1)) * 86400 * 1000);
      const time = new Date((row.Time - (25567 + 1)) * 86400 * 1000);
      return {
        ...row,
        Date: date.toLocaleDateString(),
        Time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    });

    res.json(formattedData);
  } catch (error) {
    console.error('Error reading the Excel file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/malignant-cases-by-age', (req, res) => {
  try {
    const workbook = XLSX.readFile(path.join(__dirname, '../Updated_Data_1.xlsx'));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Filter for malignant cases and group by age categories
    const totalCount = jsonData.filter(row => row.Status === 'Cancer').length;
    const ageGroups = {
      '20-40': 0,
      '40-50': 0,
      '50-60': 0,
      '60-70': 0,
      '70+': 0
    };

    jsonData.forEach(row => {
      if (row.Status === 'Cancer') {
        const age = row.age;
        if (age >= 20 && age < 40) {
          ageGroups['20-40']++;
        } else if (age >= 40 && age < 50) {
          ageGroups['40-50']++;
        } else if (age >= 50 && age < 60) {
          ageGroups['50-60']++;
        } else if (age >= 60 && age < 70) {
          ageGroups['60-70']++;
        } else if (age >= 70) {
          ageGroups['70+']++;
        }
      }
    });

    const formattedData = Object.keys(ageGroups).map(key => ({
      id: key,
      label: `Age ${key}`,
      value: ageGroups[key],
      percentage: ((ageGroups[key] / totalCount) * 100).toFixed(2)
    }));

    res.json(formattedData);
  } catch (error) {
    console.error('Error reading the Excel file:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Function to read and process Excel data for stream graph
const readExcelForStreamGraph = () => {
  const workbook = XLSX.readFile(path.join(__dirname, '../Updated_Data_1.xlsx'));
  const sheetName = workbook.SheetNames[0];
  const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Process the data
  const weekData = {};

  worksheet.forEach((row) => {
    const weekNumber = row.Week_Number;
    const status = row.Status;

    if (!weekData[weekNumber]) {
      weekData[weekNumber] = { week: weekNumber.toString(), benign: 0, normal: 0, cancer: 0 };
    }

    if (status === 'Normal') {
      weekData[weekNumber].normal += 1;
    } else if (status === 'Cancer') {
      weekData[weekNumber].cancer += 1;
    } else if (status === 'benign') {
      weekData[weekNumber].benign += 1;
    }

    // Ensure total is the sum of normal and cancer
    weekData[weekNumber].total = weekData[weekNumber].normal + weekData[weekNumber].cancer;
  });

  // Convert weekData object to array and sort by week number
  const sortedData = Object.values(weekData).sort((a, b) => {
    const weekA = parseInt(a.week, 10);
    const weekB = parseInt(b.week, 10);
    return weekA - weekB;
  });

  // Get the last fifteen weeks
  return sortedData.slice(-15);
};

app.get('/stream-graph-data', (req, res) => {
  try {
    const data = readExcelForStreamGraph();
    res.json(data);
  } catch (error) {
    console.error('Error reading the Excel file:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});
