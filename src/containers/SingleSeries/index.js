// import React from 'react'
// import { useParams } from 'react-router-dom'

// const SingleSeries = () => {
//     let params = useParams();
//     console.log(params);
//     return (
//         <div>
//             <p>Single Series - the show ID will be {params.id} </p>
//         </div>
//     )
// }

// export default SingleSeries

import React, { Component } from 'react';
import Loader from '../../components/Loader'

class SingleSeries extends Component {
    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props;

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {
        const { show } = this.state;
        console.log(show);

        return (
            <div>
                { show === null && <Loader /> }
                {
                    show !== null
                    &&
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered - {show.premiered}</p>
                        <p>Rating - {show.rating.average}</p>
                        <p>Episodes - {show._embedded.episodes.length}</p>
                        <p>Languages - {show.language}</p>
                        <p>Genres: {show.genres.map(item => (
                            <li key={item}>{item}</li>
                        ))}</p>
                        <p>
                            <img alt="Show" src={show.image.medium} />
                        </p>
                    </div>
                }
                <p>Single Series - the show ID will be {this.props.id}</p>
            </div>
        );
    }
}

export default SingleSeries;
