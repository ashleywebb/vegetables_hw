const React = require('react')

class Index extends React.Component {
    render(){
        const vegetables = this.props.vegetables   
        return (
            <div>
                <h1>This is the Index Page of My Beautiful Collection of vegetable</h1>
                <nav>  
                    <a href="/vegetables/new">Go to the new page</a>
                </nav>
                <ul>
                {
                    vegetables.map((vegetable, i) => {
                        return (
                            <li key={`${vegetable._id}`}>
                                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is the color of {vegetable.color}
                            </li>
                            )
                    })
                }
                </ul> 
            </div>
        )
    }
}


module.exports = Index;