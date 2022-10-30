import React, { Component } from 'react';
import axios from 'axios';
// import css from './styles.module.css'
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30026905-3ea175f3d607ccbd72fb69757';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.searchText !== this.state.searchText) {
        this.setState({ loading: true });
        const response = await axios.get(
          `?q=${this.state.searchText}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const images = response.data.hits;
        if (response.data.total === 0) {
          Notify.failure(
            'НІЧОГІСІНЬКО НЕ ЗНАЙДЕНО. СПРОБУЙТЕ ПОШУКАТИ ЩОСЬ ІНШЕ)))'
          );
        this.setState({  loading: false });
          // return;
        } else
        this.setState({ images, loading: false });
      }
    } catch (error) {}
  }

  handleSearchSubmit = searchText => {
    console.log(searchText);
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {this.state.loading && <Loader />}
        {this.state.images && (
          <ImageGallery>
            <ImageGalleryItem
              value={this.state.images}
              imgText={this.state.searchText}
            />
          </ImageGallery>
        )}
      </div>
    );
  }
}
