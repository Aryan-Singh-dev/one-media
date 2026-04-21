import mongoose, { Schema } from "mongoose";
import mongooseaggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudnary url
            required: true
        },
        thumbnail: {
            type: String, //cloudnary url
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },

        duration: {
            type: Number, //duration in seconds, cloudnary provides this information when you upload a video, you can also calculate it on the client side before uploading the video. read more: https://cloudinary.com/documentation/video_upload_api_reference#uploading_videos
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },

    {
        timestamps: true
    }
)


export const Video = mongoose.model("Video", videoSchema)
