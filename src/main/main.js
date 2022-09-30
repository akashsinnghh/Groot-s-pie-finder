import React from 'react';
import "./main.css"

export class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array : [8, 4, 3, 2, 6, 5,4,3,6,9,1,3],
            desiredSweetness: 6,
            no : []
        }}

    getDesiredSweetness(){
        let desiredSweetness = this.state.desiredSweetness;
        let array = this.state.array;
        let sum = 0
        let finalArray = []
        let secandaryArray = []
        for(let i = 0; i < array.length; i++){
            if(array[i] == desiredSweetness){
                secandaryArray.push(i)
                finalArray.push(secandaryArray)
                secandaryArray = []
            }
            if(array[i] < desiredSweetness){  
                //console.log("i------->",i)
                for(let j = i+1; j<array.length; j++){
                    sum = array[i]+array[j]
                   if(sum == desiredSweetness){
                    sum = 0
                    secandaryArray.push(i)
                    secandaryArray.push(j)
                    finalArray.push(secandaryArray)
                    secandaryArray = []
                    i++
                   }
                   if(sum > desiredSweetness){
                        sum-=array[j]
                    }
                }
            }
            sum = 0
            
        }
        this.state.no=finalArray
        console.log("Sweetness->",this.state.no)
    }

    componentDidMount(){
        this.getDesiredSweetness()
    }
    
    render()
    {
        return(
            <div className="header">
                This is the desired sweetness. Please, check console
            </div>
        )
    }
}