import React, {Component} from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
`

const LeftLine = styled.td`
    width: 32px;
    border: 2px solid #92278f;
    border-right: 0 none;
    border-radius: 10px 0 0 10px;
    @media (max-width: 750px){
        width: 16px;
        border: 1px solid #92278f;
        border-right: 0 none;
        border-radius: 5px 0 0 5px;
    }
`
const RightLine = styled.td`
    width: 32px;
    border: 2px solid #92278f;
    border-left: 0 none;
    border-radius: 0 10px 10px 0;
    @media (max-width: 750px){
        width: 16px;
        border: 1px solid #92278f;
        border-left: 0 none;
        border-radius: 0 5px 5px 0;
    }
`

class BorderTable extends Component {
    render(){
        return (
            <Table>
                <tbody>
                    <tr>
                        <LeftLine/>
                        <td>
                            {this.props.children}
                        </td>
                        <RightLine/>
                    </tr>
                </tbody>
            </Table>
        );
    }
}

export default BorderTable;