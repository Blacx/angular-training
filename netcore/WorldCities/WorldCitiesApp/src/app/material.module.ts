import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";


@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }