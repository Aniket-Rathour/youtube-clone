

export function VideoCard(props:any){
    return<div className="pl-3">
        <img src={props.thumbnail}></img>
        <div className="grid grid-cols-20">
            <div className="col-span-2">
                <img className="rounded-full w-15 h-8" src={props.logo}></img>
            </div>
            <div className="col-span-18 pl-3"  >
                <div>
                    {props.title}
                </div>
                <div>
                    <div className="col-span-11 pl-1 text-gray-400 text-base" >
                        <div>{props.author}</div>
                        <div>{props.views} . {props.timestamp}</div>
                        <div>. </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>       
}

function VideoCard2(){

}