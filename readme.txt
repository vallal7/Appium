1. Install Node - from https://nodejs.org/en/
2. Install appium - npm install -g appium
3. install appium client - npm install wd
4. Download and Install Appium Mac App from appium.io (OS being Mac OS)
5. Create the helper files - appiumserver.js (with your ip address and port in which the appium server is going to run)
   app.js - contains the path of your .app file
   caps.js - which has the environment setup for iOS
   logging.js : Contains logging config for terminal when running a tests
   setup.js : Contains dependencies config.
6. Create two files - ionic_appium_test.js which contains the Appium test script and package.json - Node package config.
7. In the appium Mac App - provide app path, force device with simulator to launch and platform version
   You can click launch and inspector to get the xpath 
8. Write scripts in your test script to run using these XPaths
9. In the folder containing your test script, type npm install in terminal to install all package dependecies
10. Run your appium script using mocha - mocha ionic_appium_test.js
