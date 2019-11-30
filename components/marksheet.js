import React, { Component } from 'react';
import './marksheet.css';

class Mark extends Component{
    constructor(){
        super()
        this.state={
            summary:false
        }
    }
    render(){
        let remarks = {};
        let grade;
        let maxMarks={math:100,phy:100,eng:75}
        let minMarks={math:33,phy:33,eng:25}
        let obt = {math:this.props.math,phy:this.props.phy,eng:this.props.eng}
        obt.total = (obt.math+obt.phy+obt.eng);

        let totalMarks = maxMarks.math+maxMarks.phy+maxMarks.eng;
        let percentage = ((obt.total/totalMarks)*100).toFixed(2);

        remarks.math=obt.math >= minMarks.math?'Cleared':'Fail';
        remarks.phy=obt.phy >= minMarks.phy?'Cleared':'Fail';
        remarks.eng=obt.eng >= minMarks.eng?'Cleared':'Fail';
 
        grade=(remarks.math==='Cleared' && remarks.phy==='Cleared' && remarks.eng==='Cleared')?
            percentage>=80?'A+':
            percentage>=70?'A':
            percentage>=60?'B':
            percentage>=50?'C':
            percentage>=40?'D':
            percentage>=33?'E':'Fail'
        :'Fail';
        

        return (
            <div className='container marksheet'>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Subjects</th>
                                <th>Maximum Marks</th>
                                <th>Minimum Marks</th>
                                <th>Obtained Marks</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Math</td>
                                <td>{maxMarks.math}</td>
                                <td>{minMarks.math}</td>
                                <td>{obt.math}</td>
                                <td>{remarks.math}</td>
                            </tr>
                            <tr>
                                <td>Physics</td>
                                <td>{maxMarks.phy}</td>
                                <td>{minMarks.phy}</td>
                                <td>{obt.phy}</td>
                                <td>{remarks.phy}</td>
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>{maxMarks.eng}</td>
                                <td>{minMarks.eng}</td>
                                <td>{obt.eng}</td>
                                <td>{remarks.eng}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={()=>this.setState({summary:!this.state.summary})}>{this.state.summary? 'Hide':'Show'} Summary</button>
                </div>

                {this.state.summary ? 
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th >
                                        Summary
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Total Marks : {totalMarks}
                                    </td>
                                    </tr>
                                <tr>
                                    <td>
                                        Obtained Marks : {obt.total}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Percentage : {percentage}%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Grade : {grade}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>:null}
            </div>
        )
    }
}

class MarkSheet extends Component{
    render(){
        return(
            <Mark math={80} eng={55} phy={75} />
        )
    }
}

export default MarkSheet;