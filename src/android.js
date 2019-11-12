import React from 'react'
import Button from './component/button'



class ACalculator extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            result:'',
            operator:'',
            calc:''
        }
        this.click = this.click.bind(this)
        this.setOperator = this.setOperator.bind(this)
        this.calculate=this.calculate.bind(this)
        this.reset = this.reset.bind(this)
        
        this.backspace=this.backspace.bind(this)
    }
    reset(){
        this.setState({
            result:'',
            calc:'',
            disabled:false
           
        })
    }

    calculate(e){
        
        this.setState({calc: '=',disabled:true})
        if (this.state.result.includes('--')){
            this.setState({result: this.state.result.replace('--','+'),
        calc:''})
        }else if(this.state.result.includes('++')){
            this.setState({result:this.state.result.replace('++','-'),
            calc:''})
        }else if(this.state.result===""){
            this.reset()
        }else{
            this.setState({result: eval(this.state.result),
                calc:''})
        }
        console.log(this.state.result)
    }

    setOperator(e){
        const target = e.target
        const name = target.name
        this.setState({operator:name,disabled:false}) 
        if(this.state.calc!=='='){
            this.setState({result: this.state.result+name})
           }else{
            this.reset()
           }
        
        
    }


    click(e){
       
       const target = e.target
       const name = target.name
       
       if(this.state.calc ===''){
        this.setState({result: this.state.result+name})
       }
    }

   
    backspace(){
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    }
    
    render(){
       
        return (
            <div className='container-fluid'>
                <div className='display'>
                    
                    <div className='display-content'>{(this.state.result==='')?0:this.state.result}</div>
                    
                </div>
                <div className=''>
                    <div className='page'>
                    <Button onClick={this.reset}  name='Ac' type='button' /> 
                    <Button onClick={this.backspace}  name='Del' type='button' />
                  
                    <Button onClick={this.setOperator}  name='%' type='button' />
                    <Button onClick={this.setOperator} value='/' name='/' type='button' />
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='7' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='8' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='9' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.setOperator} value='*' name='*' type='button' />
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='6' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='5' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='4' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.setOperator}  name='-' type='button' />
                    </div>
                    <div className='page'>
                    <Button onClick={this.click}  name='3' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='2' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='1' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.setOperator} value='+' name='+' type='button' />
                    </div>
                    <div className='page'>
                    <Button onClick={this.click} className=' zero'  name='0' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.click}  name='.' type='button' disabled={this.state.disabled}/>
                    <Button onClick={this.calculate}  name='=' type='button' />
                    
                   
                    </div>
                </div>

            </div>
        )
    }
}

export default ACalculator