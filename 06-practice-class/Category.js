// change this Component to a class!
class Category extends React.Component {

    // get data from props and use map to build an array of <li>
    // ... code goes here
    
    render() {
        let categories = this.props.data.map((result, index) => {
            return(
                <li key={index} className="cat-link left valign-wrapper">
                    <i className="material-icons">{result.icon}</i>
                    {result.title}
                </li>
            )
        })

        return(
            <div id="row">
                <ul className="cat-nav center-align">
                    {categories}
                </ul>
            </div>
        )
    }
}

