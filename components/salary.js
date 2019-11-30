import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './salary.css';

class Salary extends Component{
    
    render(){
        let previousLoan=this.props.loan;
        let basicSalary=this.props.basicSalary;
        let bonusSalary=this.props.bonus;
        let overtime=this.props.overtime;

        let houseRentAllowance=3000;
        let medicalAllowance= 2500;
        let tranportAllowance=2000;

        let grossSalary = (basicSalary+bonusSalary+(overtime*75)+houseRentAllowance+medicalAllowance+tranportAllowance);
        
        let incomeTax=0;
        incomeTax= grossSalary>=250000? (grossSalary/100)*5:0;

        let netSalary = (grossSalary-previousLoan-incomeTax);
        
        return(
            <div className='container salary'>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Card No</td>
                                <td>{this.props.cardNo}</td>
                            </tr>
                            <tr>
                                <td>Employe Name</td>
                                <td>{this.props.name}</td>
                            </tr>
                            <tr>
                                <td>Basic Salary</td>
                                <td>{basicSalary}</td>
                            </tr>
                            <tr>
                                <td>Bonus</td>
                                <td>{bonusSalary}</td>
                            </tr>
                            <tr>
                                <td>House Rent Allowance</td>
                                <td>{houseRentAllowance}</td>
                            </tr>
                            <tr>
                                <td>Transport Allowance</td>
                                <td>{tranportAllowance}</td>
                            </tr>
                            <tr>
                                <td>Medical Allowance</td>
                                <td>{medicalAllowance}</td>
                            </tr>
                            <tr>
                                <td>Loan</td>
                                <td>{previousLoan}</td>
                            </tr>
                            <tr>
                                <td>Overtime</td>
                                <td>{overtime} hours</td>
                            </tr>
                            <tr>
                                <td>Overtime Amount</td>
                                <td>{overtime*75}</td>
                            </tr>
                            <tr>
                                <td>Income Tax</td>
                                <td>{incomeTax}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div>

                    <table>
                        <tbody>
                            <tr>
                                <td>Gross Salary</td>
                                <td>{grossSalary}</td>
                            </tr>
                            <tr>
                                <td>Net Salary</td>
                                <td>{netSalary}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

class SalarySheet extends Component{
    render(){
        return(
            <Salary name='Sohaib' cardNo='9557' loan={2000} basicSalary={25000} bonus={2000} overtime={4}/>
        )
    }
}

export default SalarySheet;