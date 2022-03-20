import { $ } from './util';
import './components/dropdown';

if (document.querySelector('[data-date-picker]')) {
    import('./components/datePicker');
}