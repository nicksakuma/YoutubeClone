import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    } 

    if(video.id.kind === 'youtube#channel'){

        return <div>Video channel</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    // console.log(video)
    return(
        
        <div>
            <div className='ui embed'>
                <iframe title="video player" src={videoSrc} />
            </div>
            
                <h3 className='ui header'>
                    {video.snippet.title}
                </h3>
              
            <div className='ui segment'>
                <p>
                    <h4>Snippet Description:</h4>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
    
};


export default VideoDetail