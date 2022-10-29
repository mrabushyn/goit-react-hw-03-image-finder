import React, {Component} from "react";
import axios from "axios";
// import css from './styles.module.css'
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30026905-3ea175f3d607ccbd72fb69757'
export class App extends Component {
  state = {
    searchText: null,
    page: 1,
    images: null,
    loading: false,
  };

  async componentDidMount(prevProps, prevState) {
    try {
      this.setState({loading:true})
      const response = await axios.get(
        `?q=${this.state.searchText}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const images = response.data.hits;

      if (!this.state.images) {
        this.setState({ images, loading:false });
      }
    } catch (error) {}
  }

  handleSubmit = evt => {
    evt.preventDefault();
    let searchText = evt.target.elements.text.value;
    searchText ? this.setState({ searchText }) : alert('ENTER TEXT');
    evt.target.elements.text.value = '';
  };

  render() {
    return (
      <div >
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.loading && <div >Loading......................</div>}
        {this.state.images && (
          <ImageGallery>
            <ImageGalleryItem value={this.state.images} />
          </ImageGallery>
        )}
      </div>
    );
  }
}
