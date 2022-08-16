// import { data } from 'autoprefixer';
import React, {useState } from 'react'

function Form() {
    const [data, setData] = useState({
        firstName: "",
        middleName : "",
        lastName: "",
        gender: "",
        DateOfBith: "",
        phoneNumber: "",
        email: "",
    
        });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({...data, [name]: value});
    };

    console.log(data);

  return (
   
    <div className="flex justify-center items-center  h-screen bg-gradient-to-br from-blue-900 to-green-800 ">
        <div className="rounded-xl p-10 max-w-2xl w-full bg-white">
            <form>
                <div className=" flex flex-col space-y-3 md:flex-row md:space-y-0 md: gap-x-2">

                <div>
                    <label htmlFor="firstName" className="form-label"> First Name</label>
                    <input
                     type="text" 
                     name="firstName" 
                     id='firstName'  
                     className='form-input'
                     value = {data.firstName}
                     onChange={(e)=> setData({...data, firstName: e.target.value})}
                     />
                     
                </div>

                <div>
                    <label htmlFor="middleName" className="form-label">Middle Name</label>
                    <input 
                    type="text" 
                    name="middleName" 
                    id='middleName'  
                    className='form-input'
                    value = {data.middleName}
                    onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                    type="text" 
                    name="lastName" 
                    id='lastName'  
                    className='form-input'
                    value = {data.lastName}
                    onChange={handleChange} 
                    />
                </div>
                </div>

                <div>
                    <label htmlFor="male">
                            <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            id="male"
                            onChange={handleChange}
                            /> {" "}

                            Male
                    </label>
                </div>

                <div>
                    <label htmlFor="female">
                            <input 
                            type="radio" 
                        
                            name="gender" 
                            id="female" 
                            value="female"
                            onChange={handleChange}
                            /> {" "}
                            
                            Female
                    </label>
                </div>

                <div>
                    <label htmlFor="DateOfBirth" className="form-label">Date Of Birth</label>
                    <input 
                    type="date" 
                    name="dateOfBith"
                    className='form-input'
                    value={data.DateOfBith}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                    type="telphone" 
                    placeholder="xxx-xxx-xxxx" 
                    name='phoneNumber'
                    className='form-input'
                    value={data.phoneNumber}
                    onChange={handleChange}
                    />
                </div>

                <label htmlFor="email" className="form-label">Email</label>
                <input 
                type="email" 
                name="email" 
                id="email"  
                value={data.email}
                onChange={handleChange} 
                />

                <div>
                    <button type="button"> Register </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Form