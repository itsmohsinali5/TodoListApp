import React from "react";
import ITask from "./interfaces";

interface Props {
    task: ITask;
    completeTask(tasknameToDelete: string): void;
}

const ToDoTask = ({ task, completeTask }: Props) => {
    return(
        <div className="App"> 

        <table className="table" style={{ width: '20%', marginLeft: '40%', marginTop: '20px', whiteSpace: 'nowrap'}}>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Task</th>
                <th scope="col">Deadline</th>
                {/* <th scope="col">Edit</th> */}
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{task.taskname}</td>
                <td>{task.deadline}</td>
                {/* <td>
                  <button className="btn btn-primary">Edit</button>
                </td> */}
                <td>
                  <button onClick={() => {
                    completeTask(task.taskname)
                  }} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

      </div>
    )
}

export default ToDoTask;

