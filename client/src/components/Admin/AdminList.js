import React from "react";
import { withContext } from "../../AppContext";
import AdminForm from "./AdminForm";

const AdminList = props => {
  return (
    <div>
      {props.user.isAdmin || props.items ? (
        <React.Fragment>
        <AdminForm
        getItem={props.getItem}
        postItem={props.postItem}
        deleteItem={props.deleteItem}
        editItem={props.editItem}
      />
        </React.Fragment>
      ):<React.Fragment>
          <div style={{"marginTop":"200px"}}>
            <h1>PC Load Letter error 401</h1>
          </div>
        </React.Fragment>}
    </div> 
  );
};
export default withContext(AdminList);
    