import './NewsPanel.css';

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

// auth
import Auth from '../Auth/Auth';

// debounce the scroll
import _ from 'lodash';




class NewsPanel extends React.Component {
  constructor() {
    super();
    this.state = {news:null};
  }

  // note: part of life cycle w/ override
  componentDidMount() {
    this.loadMoreNews();
    this.loadMoreNews = _.debounce(this.loadMoreNews, 1000);
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    // browser supports
    let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
      console.log('Loading more news...');
      this.loadMoreNews();
    }
  }

  // front-end test only
  // loadMoreNews() {
  //   // fake data
  //   this.setState({
  //     news:
  //       [{
  //         "source": "The Wall Street Journal",
  //         "title": "Berkshire Hathaway Benefits From US Tax Plan",
  //         "description": "Berkshire Hathaway posted a $29 billion gain in 2017 related to changes in U.S. tax law, a one-time boost that inflated annual profits for the Omaha conglomerate.",
  //         "url": "https://www.wsj.com/articles/berkshire-hathaway-posted-29-billion-gain-in-2017-from-u-s-tax-plan-1519480047",
  //         "urlToImage": "https://si.wsj.net/public/resources/images/BN-XP717_3812B_TOP_20180224064100.jpg",
  //         "publishedAt": "2018-02-24T18:42:00Z",
  //         "digest":"3RjuEomJo26O1syZbU7OHA==\n",
  //         "reason": "Recommend"
  //       },
  //       {
  //         "source": "fortune",
  //         "title": "Here's How Much Bitcoin Elon Musk Owns",
  //         "description": "Tesla CEO Elon Musk isn’t exactly active in cryptocurrency. Musk revealed this week on Twitter how much Bitcoin he owns—and it’s not much.",
  //         "url": "http://fortune.com/2018/02/23/bitcoin-elon-musk-value/",
  //         "urlToImage": "https://fortunedotcom.files.wordpress.com/2018/01/elon-musk-tesla-silicon-valley-sex-party.jpg",
  //         "publishedAt": "2018-02-23T23:26:30Z",
  //         "digest":"3RjuEomJo26OadyZbU7OHA==\n",
  //         "reason": "Recommend"
  //       }]
  //   });
  //
  //   console.log('Actually triggered loading more news');
  //   const news_url = 'http://' + window.location.hostname + ':3000' + '/news';
  //   const request = new Request(news_url, { method: 'GET' });
  //
  //   fetch(request)
  //     .then(res => res.json())
  //     .then(news_list => {
  //       this.setState({
  //         news: this.state.news ? this.state.news.concat(news_list) : news_list,
  //       });
  //     })
  // }

  loadMoreNews() {
    console.log('Actually triggered loading more news');
    const news_url = 'http://' + window.location.hostname + ':3000' + '/news';
    const request = new Request(news_url, {
      method: 'GET',
      headers: {
        'Authorization': 'bearer ' + Auth.getToken(),
      },
    });


    // browser api
    fetch(request)
      // convert response to json(string in trans)
      // asyn so we have anotherthen
      // unexpected token -> API failure
      .then(res => res. json())
      .then(news_list => {
        this.setState({
          // if there is new already concat
          news: this.state.news ? this.state.news.concat(news_list) : news_list,
        });
      })
  }


  // note: part of life cycle
  renderNews() {
    // list of news
    const news_list = this.state.news.map(one_news => {
      return (
        <a className='list-group-item' href='#'>
          {/*news is a prop*/}
          <NewsCard news={one_news} />
        </a>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='list-group'>
          {news_list}
        </div>
      </div>
    );
  }

  // note: part of life cycle
  render() {
    if (!this.state.news) {
      return (
        <div>
          Loading...
        </div>
      );
    } else {
      return (
        <div>
          {this.renderNews()}
        </div>
      );
    }
  }
}

export default NewsPanel;