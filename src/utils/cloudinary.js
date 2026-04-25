import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary =
    async (localFilePath) => {
        try {
            if(!localFilePath) {
                return null
                //upload the file to cloudinary, you can also specify the folder where you want to upload the video by adding the folder name in the options object like this: {folder: "videos"}
                const response = await cloudinary.uploader.upload(localFilePath, {
                    resource_type: "auto"
                })
                //file has been uploaded to cloudinary, you can now delete the local file from your server to save space, you can use the fs module to delete the file like this: fs.unlinkSync(localFilePath)
                console.log("File uploaded to Cloudinary successfully", response.url);
                return response;
            }
         } 
        catch (error) {
           fs.unlinkSync(localFilePath) //delete the local file if there was an error during the upload process to avoid leaving unnecessary files on the server
           return null; 
        }
}

export { uploadToCloudinary };






// cloudinary.v2.uploader
// .upload("dog.mp4", {
//   resource_type: "video", 
//   public_id: "my_dog",
//   overwrite: true, 
//   notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));