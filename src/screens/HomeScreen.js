import React from 'react'
import '../Nav.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                islargeRow
            />
            <Row 
                title='Top Rated'
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title='Actions movies'
                fetchUrl={requests.fetchActionsMovies}
            />
            <Row 
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title='Romance ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row 
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
