import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { ITaskList, ITasks } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public tasklists: ITaskList[]= [];
  public tasks: ITasks[] = [];
  public name: any = '';
  constructor(private provider:ProviderService) { }


  ngOnInit() {
    this.provider.getTaskList().then(res=>{
      console.log(res);

      this.tasklists = res;
    });

  }


  getTasks(tasklist: ITaskList){
    this.provider.getTasks(tasklist).then(res => {
      console.log(res);

      this.tasks = res;
    })  
  }

  updateTaskList(t:ITaskList){
    this.provider.updateTaskList(t).then(res => {
      console.log(t.name + 'updated');
    })
  }

  deleteTaskList(t:ITaskList){
    this.provider.deleteTaskList(t.id).then(res =>{
      console.log(t.name + 'deleted');
      this.provider.getTaskList().then(r =>{
        this.tasklists = r;
      });
    });
  }

  createTaskList(){
    if(this.name != ''){
      this.provider.createTaskList(this.name).then(res =>{
        this.name = '';
        this.tasklists.push(res);
      });
    }
  }

  
}
