import { BryntumSchedulerPro } from '@bryntum/schedulerpro-react';
import { schedulerproConfig } from './SchedulerProConfig';
import './App.scss';

function App() {
    return (
        <BryntumSchedulerPro {...schedulerproConfig} />
    );
}

// If you plan to use stateful React collections for data binding please check this guide
// https://bryntum.com/products/schedulerpro/docs/guide/SchedulerPro/integration/react/data-binding

export default App;
