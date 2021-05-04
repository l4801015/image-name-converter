const { readdirSync, rename } = require('fs');

const { resolve } = require('path');

// Get path to image directory

const imageDirPath = resolve(__dirname, './images');

// Get an array of the files inside the folder

const files = readdirSync(imageDirPath);

for (i = 0; i < files.length; i++) {

  const before = files[i]

  const temp = before.split(".")

  const after = temp[1] + "." + temp[0] + ".png"

  rename(

    imageDirPath + "/" + files[i],

    imageDirPath + "/" + after,

    err => console.log(err)

  )

}
