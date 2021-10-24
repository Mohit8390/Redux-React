import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FormdataTable extends Component {
    state = {}
    handleDelete(index) {
        this.props.delEmp(index);
    }
    handleEdit(index) {
        console.log("Edit:", index);
    }

    adduser(){
        window.location.href="/"
    }
    render() {
        console.log(this.props.empdata);
        return (
            <div className="col-md-6 offset-md-3">
                <h2 style={{ "textAlign": "center", "marginTop": "20px", "marginBottom": "20px" }}>New Employee Details</h2>
              
              
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" className="text-center">#</th>
                            <th scope="col" className="text-center">User Name</th>
                            <th scope="col" className="text-center">Email-Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.empdata.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row" className="text-center">{index + 1}</th>
                                        <td className="text-center">{emp.userName}</td>
                                        <td className="text-center">{emp.email}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <button type="button" class="btn btn-primary float-right mt-4" onClick={this.adduser}>
                    Add New User
                 </button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('stateeee', state);
    return {
        empdata: state
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FormdataTable);