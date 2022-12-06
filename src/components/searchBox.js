import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { setSearchText } from '../state/action-creator/list';
const SearchBox = ({ setSearchText}) => {


const [formData, setFormData] = useState({
    searchText:"",
    searchField:"shopName",
})

const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
   


}

   useEffect(() => {
    setSearchText(formData)
   }, [formData])
   
   
  return (
    <>
        <div className="navbar__item">

        <input  type="search" placeholder="search" name='searchText' onChange={handleChange} />
        <label htmlFor="sort">filter by:</label>
        <select onChange={handleChange}  name="searchField" >
            <option value='shopName' selected disabled hiddenss >default</option>
            <option value='area' >area</option>
            <option value='category'>category</option>
            
          </select>
        </div>
        <div className="navbar__item">
        </div>
        {/* <div className="navbar__item">
        <input type="radio" id="age2" name="age" value="60" />
        <label for="age2">sort by area</label>

        </div> */}
    </>
    /* <div className="container ">
       
    </div> */
 
 
  )
}

const mapStateToProps = state =>({
    searchText: state.list.searchText
})

export default connect(mapStateToProps, { setSearchText}) (SearchBox)