import React from 'react';
import { Fragment } from 'react-router-dom'; 

const ProfileItem = ()=> {
  return (
    <Fragment>
      <section class='text-white'>
        <a href='profiles.html' class='font-thin hover:opacity-75 text-black bg-gray-300 py-2 px-4'>Back To Profiles</a>
        <div class='mt-4 shadow bg-blue-600 p-4 flex flex-col justify-center items-center'>
          <img class='rounded-full' src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'>
          <h3 class='text-4xl my-2'>John Doe</h3>
          <p class='my-2 text-xl font-thin'>Developer at Microsoft</p>
          <p class='my-2 font-thin'>Seattle, WA</p>
          <ul class='flex justify-center'>
            <li class='m-2 text-white'><a href='#' class='hover:text-black'><i class='fas fa-globe fa-2x'></i></a></li> 
            <li class='m-2 text-white'><a href='#' class='hover:text-black'><i class='fab fa-twitter fa-2x'></i></a></li> 
            <li class='m-2 text-white'><a href='#' class='hover:text-black'><i class='fab fa-facebook fa-2x'></i></a></li> 
            <li class='m-2 text-white'><a href='#' class='hover:text-black'><i class='fab fa-youtube fa-2x'></i></a></li> 
            <li class='m-2 text-white'><a href='#' class='hover:text-black'><i class='fab fa-instagram fa-2x'></i></a></li> 
          </ul>
        </div>
      </section>

      <section class='my-4 border text-center'>
        <div class='m-4 p-4 border-b'> 
          <h2 class='text-2xl text-blue-600'>John's Bio</h2> 
          <p class='text-xl font-thin'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloremque nesciunt, repellendus nostrum deleniti recusandae nobis neque modi perspiciatis similique?</p>
        </div>
        <div class='m-4 p-4 bg-gray-100'>
          <h2 class='text-2xl text-blue-600'>Skill Set</h2> 
          <ul class='flex justify-center my-4'>
            <li class='font-thin mx-4'><i class='fas fa-check'></i> HTML</li>
            <li class='font-thin mx-4'><i class='fas fa-check'></i> CSS</li>
            <li class='font-thin mx-4'><i class='fas fa-check'></i> JavaScript</li>
            <li class='font-thin mx-4'><i class='fas fa-check'></i> Python</li>
            <li class='font-thin mx-4'><i class='fas fa-check'></i> C#</li>
          </ul>
        </div>
      </section>

      <section class='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <div class='p-4 border'>
          <div class='border-b'> 
            <h2 class='text-2xl text-blue-600'>Experience</h2> 
            <p class='my-2 text-xl'>Microsoft</p>
            <p class='my-2 text-xl font-thin'>Oct 2011 - Current</p>
            <p class='my-2 text-xl font-thin'><strong>Position:</strong> Senior Developer</p>
            <p class='mb-8 text-xl font-thin'><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius velit amet aspernatur asperiores modi quidem expedita fugit.</p>
          </div>
          <div> 
            <p class='my-2 text-xl'>Sun Microsystems</p>
            <p class='my-2 text-xl font-thin'>Nov 2004 - Nov 2011</p>
            <p class='my-2 text-xl font-thin'><strong>Position:</strong> Systems Admin</p>
            <p class='mb-8 text-xl font-thin'><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius velit amet aspernatur asperiores modi quidem expedita fugit.</p>
          </div>
        </div> 
        <div class='p-4 border'>
          <h2 class='text-2xl text-blue-600'>Education</h2> 
          <p class='my-2 text-xl'>University Of Washington</p>
          <p class='my-2 text-xl font-thin'>Sep 1993 - June 1999</p>
          <p class='my-2 text-xl font-thin'><strong>Degree:</strong> Masters</p>
          <p class='my-2 text-xl font-thin'><strong>Field Of Study:</strong> Masters</p>
          <p class='mb-8 text-xl font-thin'><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente suscipit dicta eius velit amet aspernatur asperiores modi quidem expedita fugit.</p>
        </div> 
      </section>

      <section class='mt-4'>
        <h3 class='text-2xl my-2'>
          <i class='fab fa-github'></i> Gihub Repos
        </h3>
        <div class='p-4 flex justify-between border'>
          <div class='w-2/3'>
            <h3 class='text-xl font-thin text-blue-500'>Repo One</h3>
            <p class='text-xl font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, laborum!</p>
          </div>
          <div class='flex flex-col'>
            <div class='text-xs mb-2 py-1 px-2 bg-blue-500 text-white'>
              Stars: 44 
            </div>
            <div class='text-xs mb-2 py-1 px-2 bg-black text-white'>
              watchers: 21
            </div>
            <div class='text-xs mb-2 py-1 px-2 bg-gray-200'>
              Forks: 25
            </div>
          </div>
        </div>
        <div class='mt-4 p-4 flex justify-between border'>
          <div class='w-2/3'>
            <h3 class='text-xl font-thin text-blue-500'>Repo One</h3>
            <p class='text-xl font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, laborum!</p>
          </div>
          <div class='flex flex-col'>
            <div class='text-xs mb-2 py-1 px-2 bg-blue-500 text-white'>
              Stars: 44 
            </div>
            <div class='text-xs mb-2 py-1 px-2 bg-black text-white'>
              watchers: 21
            </div>
            <div class='text-xs mb-2 py-1 px-2 bg-gray-200'>
              Forks: 25
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProfileItem;
