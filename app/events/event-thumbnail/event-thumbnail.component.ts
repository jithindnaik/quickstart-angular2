import { Component, Input} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/app/events/event-thumbnail/event-thumbnail.component.html',
    styles: [`
      .pad-left {
        padding-left: 30px;
      }
      .thumbnail.well div{
        color: #bbb;
      }
      .thumbnail {
        min-height: 260px;
      }
      .green {
        color: green !important;
      }
      .bold{
        font-weight: bold;
      }
    `]
})

export class EventThumbnailComponent {
    //receive the data from event-list component
    @Input() eventData: any
    //@Output() eventClick = new EventEmitter();

    /*handleClicked() {
      //console.log(this.eventData);
      //console.log("Click event is invoked.");
      this.eventClick.emit(this.eventData);
    }*/

    /* thumnailProperty: any ="Child Component property";

    handleThumbnailClick() {
      console.log("Child Component method");
    } */

    addClass() {
      const isEarlyStart = this.eventData && this.eventData.time === '8:00 am';
      if (isEarlyStart) {
        //return ['green', 'bold']
        //return 'green bold';
        return {green: isEarlyStart, bold: isEarlyStart}
      } else {
        //return []
        //return '';
        return {}
      }
    }
 }