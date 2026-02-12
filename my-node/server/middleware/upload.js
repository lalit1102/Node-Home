import multer from "multer";

const storage = multer.diskStorage({
  destination:(req,file,cb)=>{ //req — Express request object file — file વિશેની માહિતી cb — callback function
    cb(null,"uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);   // ahi file name ape che date.now()==1670000000000  - file.nu name
  },
})

const upload = multer({storage})

export default upload