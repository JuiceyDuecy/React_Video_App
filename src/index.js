import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'Lodash'; //like observables!


const API_KEY = 'AIzaSyCFb7Me9Waf52UzHFTE8UVTm1MGt0nXFvg';


//downwards data flow: Only the parent component should be responsible
//for fetching data-->Thats why we fetch the data here

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
         };

        this.videoSearch('bitcoin');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: 'bitcoin'},(videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });//or ({videos}), when key
            //and value pair are the same
        })
    }
    render(){
const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
console.log(videoSearch);

    return (<div>
<SearchBar onSearchTermChange={videoSearch} />
<VideoDetail video={this.state.selectedVideo}/>
<VideoList
onVideoSelect={selectedVideo => this.setState({selectedVideo})}
 videos = {this.state.videos}/>
    </div>
)};
}
//Take this compenent's generate HTML and put it on the page
//(in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
