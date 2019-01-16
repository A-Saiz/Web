import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        )
    }
}

// const Form = (props) => {
//     return (
//         <form onSubmit={props.loadWeather}>
//             <input type="text" name="city" placeholder="City..."/>
//             <input type="text" name="country" placeholder="Country..."/>
//             <button>Get Weather</button>
//         </form>
//     )
// }
export default Form;