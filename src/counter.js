import React from 'react'
import {
    Button,
    Grid,
    Header
} from 'semantic-ui-react'
import { connect } from 'react-redux'
class Counter extends React.Component {

    state = { count : 0 }

    increment = () => {
        this.props.dispatch({ type : "INCREMENT" })
    }

    decrement = () =>{
        this.props.dispatch({type: "DECREMENT"})
    }

    render() {
        return (
            <div class="ui container middle aligned">
                <Grid coloumns={3} >
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row verticalAlign = "middle" >
                    <Grid.Column width={3}>
                    </Grid.Column>
                    <Grid.Column width={10} verticalAlign="middle">
                    <Header as='h1' textAlign="center" >{this.props.count}</Header>
                        <Button.Group fluid>
                            <Button onClick={this.decrement}>-</Button>
                            <Button.Or />
                            <Button onClick={this.increment}>+</Button>
                        </Button.Group>
                    </Grid.Column>
                </Grid.Row>

                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(Counter)