import React from "react";

type MyState = {
    count: number; // like this
};
class TestSD extends React.Component<MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        count: 0,
    };
    render() {
        return (

            
            <div>
                {this.state.count}
            </div>
        );
    }
}
export default TestSD