import React from 'react'

const SearchForm = () => {
  const handleSubmit = (event)=>{
    event.preventDefault()
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
       <form className='search-form'onSubmit={handleSubmit}>
        <input type="text"
        className='form-input search-input'
        name='search'
        placeholder='cat'
        
        />
        <button type='submit' className='btn'>search</button>
       </form>
    
    </section>
  )
}

export default SearchForm