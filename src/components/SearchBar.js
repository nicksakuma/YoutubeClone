import React from 'react';
import componentDidMount from './App';


class SearchBar extends React.Component{
    state={term: ''};

    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(            

            
            <div style={{marginTop:'10px'}}>
                <a href="https://www.youtube.com/"><i class="huge youtube icon" /> </a> Youtube Clone
            <div className="search-bar ui segment" style={{marginBottom:'20px'}} >    
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field' >
                        <input 
                        type='text' 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                        placeholder="Search"
                        /> 
                    </div>
                    
                </form>
            </div>
            </div>
        )
    }
};

export default SearchBar;