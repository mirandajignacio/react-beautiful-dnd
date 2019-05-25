import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid #dc3030; */
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
  background: #FCE8E8;
  color: ${props => (props.type === "BUG" ? "#dc3030" : "#3183C8")};
  background: ${props => (props.type === "BUG" ? "#FCE8E8" : "#EFF8FF")};
  font-weight: bold;
  /* background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "white"
      : "white"}; */
  box-shadow: ${props =>
    props.isDragging
      ? "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      : "none"};
  transition: box-shadow 0.2s ease;
  display: flex;
`;
const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;
export default class Task extends React.Component {
  render() {
    let isDragDisabled = this.props.task.id === "!task-1";
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            isDragDisabled={isDragDisabled}
            aria-roledescription="Press space bar to lift the task"
            type={this.props.task.type}
          >
            {/* <Handle {...provided.dragHandleProps} /> */}
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
