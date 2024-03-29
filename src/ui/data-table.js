import { BaseElement } from './base-element.js';
export class DataTable extends BaseElement {
    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    getElementString() {
        let thTags = '';
        for (let h of this.headers) {
            if (h == 'airTimeHours') h = 'Airtime Hours';
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>`;
        }

        let trTags = '';
        for (let row of this.data) {
            trTags += `<tr>`;
            for (let property of this.headers) {
                let thisProperty = property.toLowerCase();
                if (thisProperty == 'airtimehours') thisProperty = 'airTimeHours';
                let field = row[thisProperty];

                trTags += `<td class="mdl-data-table__cell--non-numeric">${field}</td>`
            }
            trTags += '</tr>'
        }

        return `
        <table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp">
        <thead>
            ${thTags}
        </thead>
        <tbody>  
            ${trTags}
          </tr>
        </tbody>
      </table>
      `
    }
}



