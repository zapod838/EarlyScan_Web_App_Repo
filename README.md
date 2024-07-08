# EarlyScan: Breast Cancer Analyzer

**Early Detection Saves Lives**

Our innovative application leverages advanced AI technology to analyze mammogram images with high precision, providing early detection and peace of mind from the comfort of your home. Stay proactive about your health with reliable and quick examinations.

## Screenshots

### Homepage
![image](https://github.com/zapod838/EarlyScan/assets/45763055/4760d80a-82d2-4938-bece-da99d0ced7d6)

### Dashboard
(![image](https://github.com/zapod838/EarlyScan/assets/45763055/1984c6af-0776-49d1-abce-515d3973331b))

### Upload Mammograms
(![image](https://github.com/zapod838/EarlyScan/assets/45763055/ab3f4893-ece7-434f-9f40-0910a44d5885))

### Scan Results
(![image](https://github.com/zapod838/EarlyScan/assets/45763055/cec66a51-5bdb-4b44-a503-00546b13aa18))

## Features

- AI-powered mammogram analysis
- Early detection of breast cancer
- User-friendly interface
- Detailed scan results and heatmaps
- Appointment management
- Dashboard for doctors and radiographers

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Django
- **Database:** MongoDB, SQLite
- **Containerization:** Docker
- **Web Server:** NGINX

## Architecture

![Tech Architecture](![image](https://github.com/zapod838/EarlyScan/assets/45763055/a4269465-0213-4813-bb98-99b0facb831a))

## Setup

### Prerequisites

- Docker
- Node.js
- Python

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    cd yourrepository
    ```

2. **Set up the frontend:**
    ```bash
    cd frontend
    npm install
    npm start
    ```

3. **Set up the backend:**

    **Node.js:**
    ```bash
    cd backend/node
    npm install
    npm start
    ```

    **Django:**
    ```bash
    cd backend/django
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver
    ```

4. **Run with Docker:**
    ```bash
    docker-compose up --build
    ```

## Usage

1. **Access the application:**
   - Visit `http://localhost:3000` for the frontend.
   - Backend APIs will be available at `http://localhost:8000`.

2. **Upload Mammograms:**
   - Navigate to the dashboard and use the upload feature to analyze mammogram images.

3. **View Results:**
   - Check the scan results, detailed analysis, and heatmaps in the patient section.

## Contributing

We welcome contributions to improve our project. To contribute, follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email:** support@earlysacan.com
- **GitHub Issues:** [Create an issue](https://github.com/yourusername/yourrepository/issues)

---

Thank you for using EarlyScan! Your health and peace of mind are our top priorities.
