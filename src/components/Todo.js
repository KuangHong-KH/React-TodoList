import React,{Component} from 'react'

// 引入自定义模块
import storage from '../model/storage.js'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listData:[
                // {
                //     title:'kh',
                //     checked:true
                // }//仅供格式参照
            ]
         };
    }
    addData=()=>{
        let title1 = this.refs.title.value;
        let getList = this.state.listData
        getList.push({
            title:title1,
            checked:false
        })
        this.setState({
            listData:getList
        })
        this.refs.title.value = ''
        storage.set('todolist',getList)
        // localStorage.setItem('todolist',JSON.stringify(getList))
    }
    addData1=(e)=>{
        if(e.keyCode == 13){
            let title1 = this.refs.title.value;
            let getList = this.state.listData
            getList.push({
                title:title1,
                checked:false
            })
            this.setState({
                listData:getList
            })
            this.refs.title.value = ''
            storage.set('todolist',getList)
            // localStorage.setItem('todolist',JSON.stringify(getList))
        }
    }
    checkboxChange=(index)=>{
        let tempList = this.state.listData;
        tempList[index].checked = !tempList[index].checked
        this.setState({
            listData:tempList
        })
        storage.set('todolist',tempList)
        // localStorage.setItem('todolist',JSON.stringify(tempList))
    }
    deleteData=(index)=>{
        let tempList1 = this.state.listData;
        tempList1.splice(index,1);
        this.setState({
            listData:tempList1
        })
        storage.set('todolist',tempList1)
        // localStorage.setItem('todolist',JSON.stringify(tempList1))
    }
    // 生命周期函数
    componentDidMount(){
        // let todolist = JSON.parse(localStorage.getItem('todolist'));
        let todolist = storage.get('todolist');
        if(todolist){
            this.setState({
                listData:todolist
            })
        }
    }
    render() {
        return (
            <div>
                <h2>React Todo案例</h2>
                <input ref="title" onKeyUp={this.addData1}/><button onClick={this.addData}>增加+</button>
                <hr/>
                <h2>待办事项</h2>
                {this.state.listData.map((val,index)=>{
                    if(!val.checked){
                        return (
                            <li key={index}>
                                <input type="checkbox" onChange={this.checkboxChange.bind(this,index)} checked={val.checked}/>
                                {val.title}

                                ---<button onClick={this.deleteData.bind(this,index)}>删除</button>
                            </li>
                            
                        )
                    }
                })}
                <h2>已完成事项</h2>
                {this.state.listData.map((val,index)=>{
                    if(val.checked){
                        return (
                            <li key={index}>
                                <input type="checkbox" checked={val.checked} onChange={this.checkboxChange.bind(this,index)}/>
                
                                {val.title}

                                ---<button onClick={this.deleteData.bind(this,index)}>删除</button>
                            </li>
                            
                        )
                    }
                })}
            </div>
        );
    }
}

export default Todo;