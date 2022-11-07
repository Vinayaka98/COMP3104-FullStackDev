import React from "react"

class Info extends React.Component{

    render(){
        return(
            <>
                <h3>{this.props.studentId}</h3>
                <h4>{this.props.name}</h4>
            </>
        )
    }
}

Info.defaultProps = {
    studentId: "Your Student ID",
    name: "Your Name",
}

export default Info