Prerequisites:    
npm 2 or 3, node version >= 4.4.5    
git clone https://github.com/achieven/questionAnswers.git    
cd questionAnswers    

To run app:

Type the following to comand line:    
npm i --production    
npm start    

Open browser at http://localhost:3000 (or if you have PORT environment variable then http://localhost:PORT)    

To run tests:    
npm i (if you already installed production mode you can just write npm i --only=dev)    

unit tests:

Type the following to command line:    
npm run unitTests    

browser tests:    
Prerequisites:    
geckodriver, firefox 47+ (included in PATH)    

Type the following to command line:    
npm i selenium-webdriver@3.0.0-beta-2    
npm start    
npm run browserTests (on different window)    


