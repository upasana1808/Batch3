import {Component, ViewChild, OnInit} from '@angular/core';
declare var $;

@Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {
	@ViewChild('dataTable') table;
  dataTable: any;
  dtOptions: any;
constructor(){
  }

  ngOnInit(): void {
     this.dtOptions = {"columnDefs": [{ 
		"targets": [ 0 ],
		"visible": false,
		"searchable": false
		},{
		"targets": [ 1],
		"visible": false
		}]
	};    
     this.dataTable = $(this.table.nativeElement);
     this.dataTable.DataTable(this.dtOptions);
  }
}

    /* this.dtOption = {
        "paging":   true,
        "ordering": true,
        "info":     true
    };
    $(()=>{  
	$('table.display').DataTable(this.dtOption);
	});
  } /*


    /*this.dataTable = $(this.table.nativeElement);
    //this.dataTable.DataTable(this.dtOption);*/
  


