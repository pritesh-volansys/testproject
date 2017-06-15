import { Component } from '@angular/core';


@Component({
    selector: 'app-warning-alert',
    template: `
<div class="container">
    <div class="row">
        <div class="col-xs-12">
            <p>This is a warning message</p>
        </div>
    </div>
</div>
`,
    styles: [`
p{
    padding:20px;
    background-color: mistyrose;
    border: 1px solid red;
}`]
})


export class WarningAlertComponent {

}