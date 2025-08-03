import React from 'react'

const Sign = () => {
    const uderData=[
        {
  userId: "user123456",
  name: "Kalai Prakash",
  email: "kalaiprakash@email.com",
  phone: "+91 9876543210",
  gender: "Male",
  dob: "1998-06-15",
  profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
  preferences: {
    genres: ["Action", "Thriller", "Comedy"],
    language: ["Tamil", "English"],
    subtitles: true,
    notifications: {
      email: true,
      sms: false,
    }
  }
}
    ];

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='bg-white p-6 rounded-lg shadow-md w-96'>
        <img src={uderData[0].profilePic} alt="Profile" className='w-24 h-24 rounded-full mx-auto mb-4' />
        <h2 className='text-xl font-semibold text-center mb-2'>{uderData[0].name}</h2>
        <p className='text-gray-600 text-center mb-1'>Email: {uderData[0].email}</p>
        <p className='text-gray-600 text-center mb-1'>Phone: {uderData[0].phone}</p>
        </div>
</div>        
        )
}
export default Sign;