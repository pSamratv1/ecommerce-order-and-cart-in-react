import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { setSearchData, filterSearchData } from '../redux-app/slices/SearchSlice';

const Search = () => {  

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {isCompleted} = useSelector((state) => state.search)

  const [query,setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)


  };

  const handleSumbit = (e) =>{
    e.preventDefault()
    dispatch(setSearchData(query))
    dispatch(filterSearchData())
    

  }
useEffect(() => {
  isCompleted && navigate("/item")

}, [isCompleted])


  return (
    <div>
    <input className="search" id="Search" value={query} name='search' placeholder='Search for item' onChange={(e) => handleChange(e)}/>
     <button className='search-button' onClick={(e) => handleSumbit(e)}>Search</button>
    </div>
  )
}

export default Search
