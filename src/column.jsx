import { Draggable, Droppable } from "react-beautiful-dnd";

import React from "react";
import Task from "./task";
import styled from "styled-components";

const Container = styled.div`
  margin: 8px;
  /* border: 1px solid lightgrey; */
  /* border-top: 6px solid #40a4f4; */
  /* border-top: ${props =>
    props.id == "column-1"
      ? "6px solid #40a4f4"
      : props.id == "column-2"
      ? "6px solid #FF7B00"
      : "6px solid #39B765"}; */
  /* #39B765 #FF7B00*/
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 4px;
  width: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 8px;
  /* box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.12), 0 4px 12px 0 rgba(0, 0, 0, 0.2); */
`;

const Button = styled.button`
  color: white;
  background: #3183c8;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
`;
const TaskList = styled.div`
  /* padding: 8px; */
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "#f2f2f2" : "white")};
  flex-grow: 1;
  min-height: 100px;
  border-radius: 6px;
`;

class InnerList extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }

  render() {
return this.props.tasks.map((task, index) => (
  <Task key={task.id} task={task} index={index} />
));
  }
}

export default class Column extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {provided => (
          <Container
            id={this.props.column.id}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>
              {this.props.column.title}
            </Title>
            <Droppable
              droppableId={this.props.column.id}
              isDropDisabled={this.props.isDropDisabled}
              type="task"
            >
              {(provided, snapshoot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshoot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
            {/* {this.props.column.id === "column-1" && <Button>+</Button>} */}
          </Container>
        )}
      </Draggable>
    );
  }
}
