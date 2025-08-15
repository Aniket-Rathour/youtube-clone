import { timeStamp } from "console"
import { VideoCard } from "./VideoCard"

const Videos =[{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},{
    title:"Fir aa gayi dilrubaa ",
    author:"aniket rathour",
    thumbnail:"photo.jpg",
    logo:"logo.jpg",
    views:"1.2M views",
    timeStamp:"1 year ago"
},]

export const VideoGrid =()=>{
    return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Videos.map(video =>
            <div>
                <VideoCard
                    title={video.title}
                    author={video.author}
                    thumbnail={video.thumbnail}
                    logo={video.logo}
                    views={video.views}
                    timestamp={video.timeStamp}
                ></VideoCard>
            </div>
        )}
    </div>
}