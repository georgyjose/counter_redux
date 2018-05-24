import React, { Component } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react'

class Counter extends React.Component {

    state = { count : 0 }

    increment = () => {
        this.setState({ count : this.state.count+1
        });
    }

    decrement = () =>{
        this.setState({ count : this.state.count-1
        });
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
                    <Header as='h1' textAlign="center" >{this.state.count}</Header>
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

export default Counter