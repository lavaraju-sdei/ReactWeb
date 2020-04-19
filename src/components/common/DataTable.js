import React from "react";
import { View } from 'react-native';
import { Styles } from "./Styles";
import { CommonStyle } from "../../styles";
import { Table } from 'reactstrap';
import { Gradient, Alert } from '../../components';

const DataTable = props => {
    let { headers, data
    } = props;
    console.log('data:', data)
    return (
        <div>
            <Table id="rewardsmanagement" responsive>
                <>
                    <thead>
                        <tr>
                            {
                                headers.map((user, index) => (<th>{user.name}</th>)

                                )}
                        </tr>
                    </thead>
                </>
                <tbody>
                    {data && data.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            {Object.keys(user).map((data, index) => {
                              return  (data !== 'action') ? 
                                 <td key={index}>{user[data]}</td>:
                                <div style={{ cursor: 'pointer' }}>
                                    <View style={[CommonStyle.flexp2, CommonStyle.paddingT5]}>
                                        <Gradient
                                            style={[
                                                Styles.tabMenu,
                                                CommonStyle.padding5,
                                                CommonStyle.acenter,
                                                CommonStyle.width70,
                                                {borderRadius:3}    
                                            ]}>
                                            <div className="userAction">{user.action}</div>
                                        </Gradient>
                                    </View>
                                </div>
                            })
                            }
                          
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )

}

export default DataTable;