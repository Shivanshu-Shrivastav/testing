import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import data from './../../data/titles.json'
import Header from './Header'
import img from './../../assets/images/logo.png'
import img2 from './../../Img/team-4.jpg'
import { Link } from 'react-router-dom'
import Error from './Error'

const Main = () => {
    const [data_movies, setdata_movies] = useState([])
    const [data_show, setdata_show] = useState([])
    const [movie, setmovie] = useState([])
    const [suearch, setsuearch] = useState('')

    const location = useLocation()
    // const {namew} = useParams()
    function search(movie, name = location.state.name) {
        const searchdata_for_movie = movie.movies.filter(val => {
            if (name == '') {
                return val
            } else if (val.title.toLowerCase().includes(name.toLowerCase())) {
                return val
            }
        })
        const searchdata_for_show = movie.shows.filter(val => {
            if (name == '') {
                return val
            } else if (val.title.toLowerCase().includes(name.toLowerCase())) {
                return val
            }
        })
        setdata_movies(searchdata_for_movie)
        setdata_show(searchdata_for_show)

    }
    useEffect(() => {
        setmovie(data)
        if (movie.length != 0) {
            search(movie)
        }
    }, [movie])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-light" href="#">
                    <img src={img} width="100" height="30" className="d-inline-block align-top mx-1 " alt="" loading="lazy" />

                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
                        <li className='mx-auto'>
                                <article className='d-flex justify-center ' >
                                    <input style={{width:400+'px'}} type="text" onChange={e => setsuearch(e.target.value)} class="form-control mr-3  " placeholder='Search Movie...' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <Link to={{
                                        pathname: "/main",
                                        state: { name: suearch }
                                    }} className='btn btn-light '>Search</Link>

                                </article>

                        </li>
                        <li class="nav-item dropdown">
                            <a class="avatar nav-link dropdown-toggle avatar-sm rounded-circle mr-3">
                                <img style={{ width: 40 + 'px', borderRadius: 50 + '%' }} alt="Image placeholder" src={img2} />
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Login</a>
                                <a class="dropdown-item" href="#">Logout</a>

                            </div>
                        </li>


                    </ul>

                </div>
            </nav>
            <div className='search_image p-5'>
                <h5 className='text-light'>Here are some movies</h5>
                <div className='d-flex flex-wrap justify-content-between '>
                    {data_movies.length>0?data_movies.map(num =>
                        <div className="card my-3" style={{ width: 18 + 'rem' }}>
                            <img width='150' height='250' src={num.img} className="card-img-top" alt="..." />
                            <div className="card-body ">
                                <p className="card-text text-justify text-light">{num.description}</p>
                                <Link to={`/search/${num.title}`} className='btn mr-3 btn-light w-25 '>Play</Link>

                            </div>
                            
                        </div>

                    ):<Error id={location.state.name} />}

                </div>
                <h5 className='text-light'>Here are some shows</h5>
                <div className='d-flex flex-wrap justify-content-between '>
                    { data_show.length>0?data_show.map(num =>
                        <div className="card my-3" style={{ width: 18 + 'rem' }}>
                            <img width='150' height='250' src={num.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text text-justify text-light">{num.description}</p>
                                <Link to={`/search/${num.title}`} className='btn mr-3 btn-light w-25 '>Play</Link>


                            </div>
                            
                        </div>

                    ):<Error id={location.state.name}  />}

                </div>
            </div>

        </div>
    )
}

export default Main