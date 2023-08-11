import React, { useState, useEffect } from 'react'
import img from './../../assets/images/logo.png'
import img2 from './../../Img/team-4.jpg'
import Hero from './Hero'
import { useParams } from 'react-router'
import data from './../../data/titles.json'
import { Link } from 'react-router-dom'

const Header = () => {
    const { id } = useParams()
    const [suearch, setsuearch] = useState('')
    console.log(id)
    const [search_data, setSearch_data] = useState([])
    const fetchmovie = () => {
        var data_for_movie = data.movies.find(num2 => num2.title == id)
        var data_for_show = data.shows.find(num2 => num2.title == id)
        console.log(data_for_movie, data_for_show, 'data')
        if (data_for_movie != undefined) {
            return data_for_movie
        }
        return data_for_show

    }
    useEffect(() => {
        const getUsers = async () => {
            const movie = await fetchmovie();
            setSearch_data(movie);
        };

        getUsers();


    }, [])
    console.log(search_data)


    return (
        <>
            {/* Nabvar section */}
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
            {/* hero Section */}
            {search_data != undefined ? <Hero data={search_data} /> : <Hero />}


        </>
    )
}

export default Header