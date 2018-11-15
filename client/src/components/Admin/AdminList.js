import React from "react";
import { withContext } from "../../AppContext";
import AdminForm from "./AdminForm";
import Items from "./Items";

const AdminList = props => {
  return (
    
      <AdminForm
        getItem={props.getItem}
        postItem={props.postItem}
        deleteItem={props.deleteItem}
        editItem={props.editItem}
      />
    
  );
};
export default withContext(AdminList);
