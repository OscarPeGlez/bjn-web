import axios from 'axios';
import { Observable } from 'rxjs';

const observable$ = Observable.create((observer: any) => {
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      observer.next(response.data);
      observer.complete();
    })
    .catch(error => {
      observer.error(error);
    });
});
const subscription = observable$.subscribe({
  next: (data: any) => console.log('[data] => ', data),
  complete: (data: any) => console.log('[complete]'),
});
