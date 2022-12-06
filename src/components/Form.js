import React,{useState, useEffect} from 'react'
import { connect, Connect } from 'react-redux';
import  {setList} from '../state/action-creator/list';
import PropTypes from 'prop-types';
const Form = ({setList}) => {




 const [formData, setFormData] = useState({
    shopName:null,
    area:null,
    category:null,
    openDate:null,
    closeDate: null

 })

 
 const [disable,setDisable] = useState(true);
 const [error,setError] = useState(false);



 const {shopName, area, category, openDate, closeDate} = formData;
 console.log(shopName, area, category, openDate, closeDate);


 const handleChange = (e) =>{
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
   


}

 const handleSubmit =(e) =>{
    console.log("it got clicked")
    e.preventDefault();
    console.log(formData);
    setList(formData);
 }

    


    const areas =[
        "Thane",
        "Pune",
        "Mumbai Suburban",
        "Nashik",
        "Nagpur",
        "Ahmednagar",
        "Solapur"
    ]

    const categories =[
        "Grocery",
        "Butcher",
        "Baked",
        "Chemist",
        "Stationery Shop"
    ]

    useEffect(() => {
        if(shopName == null || area==null|| category == null || openDate == null|| closeDate == null){
            console.log("ture")
            setDisable(true);
        }else{
            console.log("false")
            setDisable(false);
       }

    }, [shopName, area, category, openDate, closeDate])
    

    
    useEffect(() => {
        if(openDate !== null && closeDate !== null){
            if(openDate > closeDate){

                console.log("openDate is greater than closedate")
                setError(true);
                setDisable(true);
            }else{
                setError(false);
            }
        }

    }, [openDate, closeDate])
    



  return (
    <div class="container form-div">
        <form onSubmit={handleSubmit}>
           
         
            <div class="form-group">
            
            <label for="shopName">Shop Name</label>
                <input onChange={handleChange} name="shopName" type="text" class="form-control" id='shopName' placeholder="eg. Wellness pharmacy"/>
            </div>
         
           

        <div className="form-group">
            <label for="inputAddress" >Area</label>
          <select onChange={handleChange} class="form-control" name="area" value={area}>
            <option>* Select Area</option>
            {/* <option value="Developer">Developer</option> */}
            {areas.map((area)=>{
                return  <option value={area}>{area}</option>

            })}
          </select>
        </div>

        <div className="form-group">
            <label for="inputAddress" >Shop category</label>
          <select onChange={handleChange} class="form-control" name="category" value={category}>
            <option>* Select Shop category</option>
            {categories.map((category)=>{
                return  <option value={category}>{category}</option>

            })}
          </select>
        </div>



        <div className="form-group">
        <label for="opening">Opening Date :</label>
  <input onChange={handleChange} type="date" id="opening" value={openDate} name="openDate"/>
        </div>
        <div className="form-group">
        <label for="closing">Closing Data :</label>
  <input onChange={handleChange} type="date" id="closing" value={closeDate} name="closeDate"/><br></br>
 {error &&   <small style={{color: "red"}}>closing date should be greater than opening date</small>}
        </div>

        <input type="submit" className="btn btn-primary my-1" disabled={disable} />
         </form>
    </div>
  )
}

Form.propTypes = {
    setList: PropTypes.func.isRequired,
  };
  

const mapStateToProps = state =>({
    list : state.list.shopList
})

export default connect(mapStateToProps, {setList}) (Form)