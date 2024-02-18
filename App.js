import React,{useState} from 'react';

export const App=()=>{

    const arr=[
        {
            firstname:"Nagendra",
            lastname:"Kallem",
            age:21
        },
        {
            firstname:"Bala",
            lastname:"palagarla",
            age:20
        },
        {
            firstname:"sai",
            lastname:"mahankali",
            age:22
        }

    ];


    const [name,setname]=useState(arr);

    function DeleteData(data){
        const FilteringData=name.filter((child,index)=>{
            return index!==data;
        })
        setname(FilteringData);
    }

     
    
    return <>{
        name.map((child,index)=>{
      return <li key={index}>
            <h3>Firstname is {child.firstname}</h3>
            <h3>latName is {child.lastname}</h3>
            <h3>age is {child.age}</h3>
            <button onClick={()=>DeleteData(index)}>DeleteInfo</button>
        </li>
    })
}

    </>
}