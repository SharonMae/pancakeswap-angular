import { Component, OnInit } from '@angular/core';
import { poolsCrypto } from 'src/app/mockup/poolsData';
import { Pools } from 'src/app/models/Pools';

@Component({
  selector: 'app-pools-table',
  templateUrl: './pools-table.component.html',
  styleUrls: ['./pools-table.component.css']
})
export class PoolsTableComponent implements OnInit {
  
  pools:Pools[] = poolsCrypto

  

  ngOnInit(): void {
  }

}
