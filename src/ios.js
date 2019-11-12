import React from 'react'
import Button from './component/button'



class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            param1 :'',
            param2 :'',
            result:'',
            operator:''
        }
        this.click = this.click.bind(this)
        this.setOperator = this.setOperator.bind(this)
        this.calculate=this.calculate.bind(this)
        this.reset = this.reset.bind(this)
        this.changeint=this.changeint.bind(this)
    }
    reset(){
        this.setState({
            result:'',
            operator:'',
            param1:'',
            param2:'',
            calc: '='
        })
    }

    calculate(e){
        
        this.setState({calc: '='})
        if(this.state.param2!==''){
        switch(this.state.operator){
            case '/':
            this.setState({param1:(parseFloat(this.state.param1) / parseFloat(this.state.param2)),
            operator:'',
            param2:'',
            calc:''}) 
            
                break 
            case '*':
            this.setState({param1:(parseFloat(this.state.param1) * parseFloat(this.state.param2)),
                operator:'',
                param2:'',
                calc:''}) 
                break
            case '+':
                this.setState({param1:(parseFloat(this.state.param1) + parseFloat(this.state.param2)),
                    operator:'',
                    param2:'',
                    calc:''}) 
                break
            case '-':
                    this.setState({param1:(parseFloat(this.state.param1) - parseFloat(this.state.param2)),
                        operator:'',
                        param2:'',
                        calc:''}) 
                break 
            case '%':
                    this.setState({param1:(parseFloat(this.state.param1) % parseFloat(this.state.param2)),
                        operator:'',
                        param2:'',
                        calc:''}) 
                break  
            default:
                alert('error')
            }


        }
    }

    setOperator(e){
        const target = e.target
        const name = target.name
        if(this.state.operator!==''){
            this.calculate()
        }else{
            this.setState({operator:name}) 
        }
        
        
    }


    click(e){
       
       const target = e.target
       const name = target.name
       if(this.state.operator !== '' && this.state.param1 !== ''){
        this.setState({param2: this.state.param2+name}) 
       }else if(this.state.calc!==''){
            this.setState({param1: this.state.param1+name})  
       }else{
        this.reset()
       }
    }

    changeint(){
         if(this.state.operator !== ''){
        this.setState({param2: -1*parseFloat(this.state.param2)}) 
       }else{
            this.setState({param1: -1*parseFloat(this.state.param1)})  
       }
    }
    
    render(){
       
        return (
            <div className=''>
                <div className='display'>
                    
                    <div className='display-content'>{(this.state.param1==='')?0:(this.state.param2!=='' && this.state.operator!=='')?this.state.param2:this.state.param1}</div>
                    
                </div>
                <div className=''>
                    <div className='page'>
                    <Button onClick={this.reset}  name='Ac' type='button'/> 
                    
                    <Button onClick={this.changeint}  name='+/-' type='button'/>
                    <Button onClick={this.setOperator}  name='%' type='button'/>
                    <Button onClick={this.setOperator} value='/' name='/' type='button'/>
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='7' type='button'/>
                    <Button onClick={this.click}  name='8' type='button'/>
                    <Button onClick={this.click}  name='9' type='button'/>
                    <Button onClick={this.setOperator} value='*' name='*' type='button'/>
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='6' type='button'/>
                    <Button onClick={this.click}  name='5' type='button'/>
                    <Button onClick={this.click}  name='4' type='button'/>
                    <Button onClick={this.setOperator}  name='-' type='button'/>
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='3' type='button'/>
                    <Button onClick={this.click}  name='2' type='button'/>
                    <Button onClick={this.click}  name='1' type='button'/>
                    <Button onClick={this.setOperator} value='+' name='+' type='button'/>
                    </div>
                    <div className='page'>
                    <Button onClick={this.click} className=' zero'  name='0' type='button'/>
                    <Button onClick={this.click}  name='.' type='button'/>
                    <Button onClick={this.calculate}  name='=' type='button'/>
                   
                    </div>
                </div>

            </div>
        )
    }
}

export default Calculator