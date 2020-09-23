import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getRepos } from '../../actions/profile';

const ProfileGithub = ({ getRepos, repos, userName })=> {

  useEffect(()=>{
    getRepos(userName); 
  }, []);

  if (repos.length === 0) return <Fragment></Fragment>

  return (
    <section className='mt-4'>
      <h3 className='text-2xl my-2'>
        <i className='fab fa-github'></i> Gihub Repos
      </h3>
      {
        repos.map( ( repo, index ) => 
          <div key={index} className='p-4 flex justify-between border'>
            <div className='w-2/3'>
              <a href={repo.html_url} target='_blank' className='text-xl font-thin text-blue-500'>{repo.name}</a>
              <p className='text-xl font-thin'>{repo.description}</p>
            </div>
            <div className='flex flex-col'>
              <div className='text-xs mb-2 py-1 px-2 bg-blue-500 text-white'>
                Stars: {repo.stargazers_count} 
              </div>
              <div className='text-xs mb-2 py-1 px-2 bg-black text-white'>
                watchers: {repo.watchers_count}
              </div>
              <div className='text-xs mb-2 py-1 px-2 bg-gray-200'>
                Forks: {repo.forks_count}
              </div>
            </div>
          </div>
      )
    }
    </section>
  )
}

export default connect(
  state => ({
    repos: state.profile.repos
  }),
  { getRepos }
)(ProfileGithub);
