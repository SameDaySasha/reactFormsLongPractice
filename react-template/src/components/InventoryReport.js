import React from 'react';
import { useInventoryContext } from '../contexts/InventoryProvider';

const InventoryReport = () => {
    const { qValues } = useInventoryContext();

    return (
        <div><h2>Inventory Report</h2>
        <ul>
            {qValues.map((val, index) => <li key={index}>{val}</li>)}
        </ul>
        </div>
    );
};


export default InventoryReport;
