import React from 'react'
import { connect, Connect } from 'react-redux'
import {delete_shop} from  "../state/action-creator/list"
const List = ({shopList, search:{ searchField,searchText}, delete_shop}) => {
   
    const shopTables = (list) =>  {
        console.log(list);
     return   list.map((shop) =>{
        const {openDate, closeDate}  = shop
        const today = new Date();
        const closed = new Date(today).getTime() < new Date(closeDate).getTime() && new Date(today).getTime() > new Date(openDate).getTime();
        // const closed = today < closeDate;
        console.log(new Date(today).getTime(), new Date(closeDate).getTime() )
        console.log(new Date(today).getTime() < new Date(closeDate).getTime() && new Date(today).getTime() > new Date(openDate).getTime() , shop.shopName)
       return(
      <tr>
        <td>{shop['shopName']} {!closed && <small  style={{color: "red"}}>[closed today]</small>}</td>
        <td>{shop.category}</td>
        <td>{shop.area} <a onClick={() =>delete_shop(shop.id)}>delete</a></td>
      </tr>
       )
        
      })
      }
  return (
    <div className='container'>
    <h2>Shop Lists</h2>
    
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Area</th>
      </tr>

        {searchText === "" ? <>{shopTables(shopList)}</> : 
         shopTables(shopList.filter((el) =>  el[searchField].toLowerCase().includes(searchText.toLowerCase())))
        }
    

    </table>
    </div>
  )
}

const mapStateToProps = state =>({
    shopList : state.list.shopList,
    search: state.list.search
})

export default connect(mapStateToProps, {delete_shop}) (List)