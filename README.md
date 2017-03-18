# electron-vue-file-manage


![w10 sample](https://github.com/Yunmel-Product/dms/blob/master/app/src/assets/183224.png)

## Install
``` bash
# Clone the repository once
$ git clone https://github.com/Yunmel-Product/dms.git

# Go into the repository (rename it as you wish)
$ cd dms

# Install the 7 only dependencies once
$ npm install
```

## Usage
Run this two commands in two different prompts to start developing with hot reloading.
``` bash
# Webpack builds once and watches to apply only the changes
$ npm run dev

# Start you electron app
$ npm start
```


## Template structure
```
├── dms/                                # Your project's name

    ├── app/

        ├── build/                      # Webpack will bundle your css/js/img here

        ├── src/

            ├── assets/                 # Images go here
                ├── electron.png
                ├── vue.png
                ├── webpack.png

            ├── components/             # Webcomponents go here
                ├── Hello.vue

            ├── App.vue                 # Vue app. Your global css can go here
            ├── entry.js                # App entry. Your global js can go here

        ├── index.html                  # Single Page Application HTML, it only uses build's files

    ├── main.js                         # Electron app init
    ├── package.json
    ├── webpack.config.js               # Minimal webpack setup
```

## thks
- [electron-vue-webpack](https://github.com/pastahito/electron-vue-webpack) 
