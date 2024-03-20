import logo from './logo.svg';
import './App.css';
import { Component } from "react"
import data from "./Data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: data,
      priorities: [{ id: 1, priority: "Low" }, { id: 2, priority: "Normal" }, { id: 3, priority: "High" }],
      taskStatus: "active",
      activeStatus: true,
      deactiveStatus: false

    }
  }
  addTask = (event) => {
    console.log(this.title.value);
    let title = this.title.value;
    // console.log(task)
    let pid = this.priority.value;
    let date = new Date();
    date = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    let status = "active";
    let id = Date.now()
    console.log(id + " iddddddddd");
    let newTask = { id, title, date, pid, status }
    this.setState({
      taskList: [...this.state.taskList, newTask]
    })
  }
  statusStatus = (status) => {
    alert("vfkjjv")
    console.log(status);
    this.setState({
      taskStatus: status,
      activeStatus: !this.state.activeStatus,
      deactiveStatus: !this.state.deactiveStatus

    });
  }
  changeTask = (status, taskId) => {
    let task = this.state.taskList.find((tr) => tr.id == taskId);
    console.log(task.id)
    task.status = status;
    this.setState({});
  }
  render() {
    return <>
      <div className='contaainer-fluid bg-danger'>
        <h6 className='text-center text-white p-3'>ToDoApp</h6>
      </div>

      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <input ref={(taskInput) => this.title = taskInput} type='text' placeholder='Enter Task' className='form-control' />
          </div>
          <div className='col-md-6'>
            <select ref={(pr) => this.priority = pr} className='form-control'>
              {this.state.priorities.map((pri, index) => <option value={pri.id}>{pri.priority}</option>)}
            </select>
          </div>
          <div className='col-2 mt-2'>
            <button onClick={this.addTask} className='btn btn-success'>Add Task</button>
          </div>
        </div>
        <div className='row mt-4 mb-4'>
          <div className='col-md-4' >
            <button disabled={this.state.activeStatus} onClick={() => this.statusStatus("active")} className='btn btn-success'>Active: ({this.state.taskList.filter((tr) => tr.status == "active").length})</button>
            <button disabled={this.state.deactiveStatus} onClick={() => this.statusStatus("deactive")} className='btn btn-danger ml-2'>Deactive: ({this.state.taskList.filter((tr) => tr.status == "deactive").length})</button>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Priority</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.taskList.sort((ts1, ts2) => {
                  return ts2.pid - ts1.pid
                }).filter((task) => task.status == this.state.taskStatus).map((task, index) => <tr style={{backgroundColor: task.pid == 3 ? '#f08080' : task.pid==2? '#04aa6d':'orange'}}>

                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.date}</td>
                  <td>{this.state.priorities.find((obj) => task.pid == obj.id).priority}</td>
                  <td>
                    {task.status == "active" ? <button onClick={() => { this.changeTask('deactive', task.id) }} className='btn btn-danger'> Deactive</button> : <button onClick={() => { this.changeTask('active', task.id) }} className='btn btn-success'>Active</button>}
                  </td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  }
}

export default App;
