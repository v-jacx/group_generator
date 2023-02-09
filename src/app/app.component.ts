import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newName = '';
  errorMessage = '';
  numOfGroups : number | '' = '';
  names : string[] = [];
  groups : string [][] = [];

  onInput =(memberName : string) => this.newName = memberName;
  

  addName =()=>{
    if(!this.newName)this.errorMessage = 'Name can not be empty';
    else{ 
    this.names.push(this.newName);
    this.newName = '';
    this.errorMessage = ''
  }
   
  }

  onNumInput =(numOfGroups : string) => this.numOfGroups = Number(numOfGroups);

  generateGroups = () =>{

    const allNames = [...this.names];

    if(!this.numOfGroups || this.numOfGroups >=0){
      this.errorMessage = '# of groups must be a positive number'
    }

    while(allNames.length){
      for(let i = 0; i < this.numOfGroups ; i++){
        const randomIndex = Math.floor(Math.random() * allNames.length);

        const person = allNames.splice(randomIndex, 1)[0];

        if(!person)break;

        if(this.groups[i]){
          this.groups[i].push(person)
        }else{
          this.groups[i] = [person];
        }
      }
      this.errorMessage = '';
    }

    this.numOfGroups = 0;
  }

}
