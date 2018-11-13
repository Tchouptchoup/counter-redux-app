import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = dispatch => ({
    onAdd: () => dispatch({ type: "ADD" }),
    onRemove: () => dispatch({ type: "REMOVE" }),
    onAdd10: () => dispatch({ type: "ADD10" }),
    onRemove10: () => dispatch({ type: "REMOVE10" }),
    onReset: () => dispatch({ type: "RESET" })
});

const CounterComponent = ({ count, onAdd, onRemove, onAdd10, onRemove10, onReset }) => (
    <div>
        <p>{count}</p>
        <div>
            <button onClick={onAdd}>+</button>
            <button onClick={onRemove}>-</button>
        </div>
        <div>
            <button onClick={onAdd10}>+ 10</button>
            <button onClick={onRemove10}>- 10</button>
        </div>
        <button onClick={onReset}>reset</button>
    </div>
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);
