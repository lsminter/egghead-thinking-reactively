import {Observable, merge} from 'rxjs';
import {mapTo, scan} from "rxjs/operators";

/*
How do we count?
  Start form zero
  When an async task starts, increase the count by 1
  When a task ends, decrease the count by 1
*/

const taskStart = new Observable();
const taskCompletions = new Observable();
const showSpinner = new Observable();

const loadUp = taskStart.pipe(mapTo(1));
const loadDown = taskCompletions.pipe(mapTo(-1));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const loadVariations = merge(loadUp, loadDown);

const currentLoadCount = loadVariations.pipe(
  scan((totalCurrentLoads, changeInLoads) => {
    return totalCurrentLoads + changeInLoads;
  }, 0)
)

export default {};
