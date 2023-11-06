// import { useState } from "react";
// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";


const BookDetails = () => {
    const data = useLoaderData()
    const {user,loading} = useAuth()
    const axios = useAxios()
    const {email} = user
    console.log(email);
    
    if(loading){
        <p>loading....</p>
    }
    const handleBorrow = (event) => {
        event.preventDefault();
        const borrowDate = event.target.borrowDate.value;
        const returnDate = event.target.returnDate.value;
        const date = {borrowDate,returnDate}
        // You can use the 'dateValue' as per your requirements
        console.log(date);
        axios.post('/user',{
            date,
            email,
            data,
        })
        .then(res => console.log(res.data))

    };
    return (
        <div className="flex gap-10">
            <img src={data.image} alt="" />
            <div>
                <h1>Book Name: {data.bookName}</h1>
                <h2>Category: {data.bookCategory}</h2>
                <p>Author Name: {data.authorName}</p>
                <p>Quantity: {data.bookQuantity}</p>
                <p>Rating: {data.rating}</p>
                <div className="mt-5">
                    <button className="px-4 py-3 bg-[#e41f05] text-white rounded-lg font-medium mr-4">Read More</button>
                    <button className="px-4 py-3 bg-[#e41f05] text-white rounded-lg font-medium" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <form onSubmit={handleBorrow}>
                                <div className="flex flex-col mb-3">
                                    <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Borrow Date</label>
                                    <input className="border px-2 py-2 rounded-lg" type="date" name="borrowDate" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className="text-gray-700 font-medium mb-2 pl-1">Return Date</label>
                                    <input className="border px-2 py-2 rounded-lg" type="date" name="returnDate" />
                                </div>
                                <input method="dialog" className=" px-4 py-3 bg-[#e41f05] text-white rounded-lg font-medium mt-4 w-full" type="submit" value="Submit" onClick={() => document.getElementById('my_modal_5').close()} />
                            </form>                         
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;