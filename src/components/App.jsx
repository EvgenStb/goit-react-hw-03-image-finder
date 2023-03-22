import React, { Component } from 'react';
import Notiflix from 'notiflix';
import SearchBar from './Searchbar/Searchbar';
import { FetchData } from '../API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchReq: '',
    page: 1,
    images: [],
    isLoading: false,
    totalImg: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { searchReq, page } = this.state;

    
    if (prevState.searchReq !== searchReq || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        await FetchData(searchReq, page)
          .then(data => {
            if (data.totalHits === 0) {
              Notiflix.Notify.failure('No images matching your request');
              this.setState({ isLoading: false });
              return;
            }
            this.setState(prevState => ({
              images:[...prevState.images, ...data.hits],
              totalImg:
                page === 1
                  ? data.totalHits - data.hits.length
                  : data.totalHits - [...prevState.images, ...data.hits].length,
            }));
          });
      } 
      catch (error) {console.log(error)}
      finally {this.setState({ isLoading: false });}
    }
  }

  handledSearchBar = searchReq => {
    this.setState({ searchReq, page: 1, images: [] });
  };

  changePage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  render() {
    return (
      <>
        <SearchBar onSubmit={this.handledSearchBar} />
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.isLoading && <Loader />}
        {!!this.state.totalImg && <Button onClick={this.changePage} />}
      </>
    );
  }
}
