import React from 'react';

const ProfileItem = ()=> {
  return (
    <div class='mt-4 border bg-gray-300 p-4 flex justify-between items-center'>
      <div class='flex items-center'> 
        <img class='rounded-full' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'>
        <div class='mx-4'>
          <h3 class='text-2xl border'>John Doe</h3>
          <p class='my-2 font-thin'>Developer at Microsoft</p>
          <p class='my-2 font-thin'>Seattle, WA</p>
          <a href='profile.html' class='py-2 px-4 bg-blue-600 text-white hover:opacity-75'>View Profile</a>
        </div>
      </div>
      <ul>
        <li class='m-2 text-blue-500'><i class='fas fa-check'></i> HTML</li> 
        <li class='m-2 text-blue-500'><i class='fas fa-check'></i> CSS</li> 
        <li class='m-2 text-blue-500'><i class='fas fa-check'></i> JavaScript</li> 
        <li class='m-2 text-blue-500'><i class='fas fa-check'></i> Python</li> 
        <li class='m-2 text-blue-500'><i class='fas fa-check'></i> C#</li> 
      </ul>
    </div>     
  );
};

export default ProfileItem;
