import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); //we'll understand them later, for now just use the original file name
    cb(null, file.originalname); //takes the actual name which is given by the user. not a good practice because it can cause conflicts if two users upload files with the same name, but for simplicity we'll use it for now. you can also use the uniqueSuffix to generate a unique file name for each uploaded file to avoid conflicts, like this: cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage });

export { upload };

