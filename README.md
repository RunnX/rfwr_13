# rfwr_13

Reducing Friction with RunnX - EE13

Clone this repo to start, my favorite way is to execute the following in powershell:
git clone https://github.com/RunnX/rfwr_e13.git

You have two options

1. Use the main branch and go through the steps by yourself.
1. Use the complete branch and just execute the complete code yourself.

## Option 1

Open rfwr_e13 folder in VS Code and open a new terminal window within VS Code.

### Execute the following in the terminal to initalize npm

```
npm init -y
```

### Add the app.js file to the rfwr_13 folder and type the following in the app.js file to populate main code

```
main tab
```

### Execute the following in the terminal to execute the code to show current running state

```
node app.js
```

### Execute the following in the terminal to install the npm package xml2js

```
npm install xml2js
```

### Go to the top of the app.js file and type the following to import the library to the app

```
rxml2js tab
```

### Go to the bottom of the file and type the following to add the Convert() function to the app

```
convert tab
```

### Uncomment the call to the Convert() function in the main() function (should be line 18)

```
Convert()
```

### Finally execute the following in the terminal to execute the code to show the final running state

```
node app.js
```

## Option 2

### The easier option is to switch to the complete code branch and just execute the code to show the final running state

```
git switch complete

node app.js
```
