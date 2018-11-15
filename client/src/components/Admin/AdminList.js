import React from 'react'
import withContext from '../../AppContext';
import AdminForm from './AdminForm';

const AdminList = props => {
    const admin = props.admin.map(admin =>{
        return (
            <AdminForm
                key={key._id}
                getitem={getItem}
            />
        )
    })
}


