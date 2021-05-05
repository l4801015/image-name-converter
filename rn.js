const { readdirSync, rename } = require('fs');

const { resolve } = require('path');

// Get path to image directory

const imageDirPath = resolve(__dirname, './images');

// Get an array of the files inside the folder

const files = readdirSync(imageDirPath);

for (i = 0; i < files.length; i++) {

  const before = "Petrov A.D.jpeg"
  const temp = before.split(".")
  const tempName = temp[0].split(" ")
  const after = temp[1] + "." + tempName[0] + "." + temp[2]

  rename(

    imageDirPath + "/" + files[i],

    imageDirPath + "/" + after,

    err => console.log(err)

  )

}
