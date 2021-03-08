// change this Component to a class!
class Category extends React.Component {

    // get data from props and use map to build an array of <li>
    // ... code goes here
    
    render() {
        let categories = this.props.data.map((result, index) => {
            return(
                <li key={index}>
                    <i className="material-icons">{result.icon}</i>
                    {result.title}
                </li>
            )
        })

        return(
            <ul id="ul" className="cat-nav center-align">
                {categories}
            </ul>
        )
    }
}

