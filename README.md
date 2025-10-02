A simple Node.js script that uses Puppeteer to scrape job listings from MyJobMag Kenya.

Features
Launches a Chromium browser using Puppeteer.
Navigates to the MyJobMag Kenya Jobs page.
Extracts job description text from the first listed job.
Logs the result in the console.
Can be extended to scrape multiple jobs and save them into a file or database.

Requirements
Node.js (v14 or higher recommended)
npm
Puppeteer

How to setup and run the project

Clone the repository:

git clone https://github.com/Cal-Mutinda/job-alert-254.git
cd job-alert-254


Install dependencies:

npm install puppeteer


Run the script:

node index.js

Project Structure

job-alert-254/
│── index.js        # Main Puppeteer script
│── jobs.json       # (Optional) File to store scraped jobs
│── package.json    # Project metadata & dependencies
│── README.md       # Documentation

Example Output

By running the script, you’ll see something like:

Software Engineer at Company XYZ - Nairobi, Kenya

Future Improvement features
Scrape all jobs from more job listing websites.
Save results into jobs.json.
Add scheduling to run the script daily and notify via a Telegram bot and SMS later on.

License
This project is for educational purposes only.
