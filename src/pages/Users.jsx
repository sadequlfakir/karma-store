import React, { useEffect, useState } from 'react';
import USerCard from '../components/user/UserCard';
import {BiLoaderAlt} from 'react-icons/bi'

const Users = () => {

    const [users, setUser] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            const user = await fetch("https://dummyjson.com/users?limit=100")
            const jsUser = await user.json();
            setUser(jsUser.users)
            setLoading(false)
        }

        return () => fetchUser();

    },[] )

    return (
        <div className="min-h-[50vh] mb-28 mt-20 mx-[6%]"> 

            {
                loading ? 
                <div className=" h-44 flex justify-center items-center">
                        <BiLoaderAlt className='text-3xl text-orange animate-spin' />  {/* Loading 🔥 👈 */}
                </div>
                : null
            }
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map((user,idx) => {
                        const { image, id, firstName, age, gender, phone, email, height, username, password } = user;
                        return(
                            <USerCard
                                imgUrl={image}
                                id={id}
                                firstname={firstName}
                                age={age}
                                gender={gender}
                                phone={phone}
                                email={email}
                                height={height}
                                username={username}
                                password={password}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Users;