import React from 'react';
import './styles.css';
import { CheckCircleIcon, PlusCircleIcon, MapIcon,ChevronDoubleDownIcon, ChevronDoubleUpIcon,XMarkIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import OSmap from '../../../../components/Map/OSmap';
import { useState } from 'react';

function CreateRoute() {
  const heads = ['Thứ tự', 'ID', 'Thao tác']
  const [mcps, setMCPs] = useState([
    {
      'ID': "02"
    },
    {
      'ID': "03"
    },
    {
      'ID': "04"
    },
    null,
    null
  ]);

  const handleDelete = (index) => {
    let temp = mcps.map((ele) => {return ele});
    temp.splice(index,1)
    temp.push(null)
    setMCPs(temp);
  }

  const handleMoveUp = (index) => {
    if(index == 0) return;
    let temp = mcps.map((ele) => {return ele});
    [temp[index-1], temp[index]] = [temp[index], temp[index-1]]
    setMCPs(temp);
  }

  const handleMoveDown = (index) => {
    if(index == mcps.length-1 || mcps[index+1] == null) return;
    let temp = mcps.map((ele) => {return ele});
    [temp[index+1], temp[index]] = [temp[index], temp[index+1]]
    setMCPs(temp);
  }

  return (
    <div style={{display: 'inline-block', position: 'absolute', paddingTop: '80px', width: '85vw', marginLeft:'20px', height: '170vh'}} id='info_size'>
      <div className='create-flexbox-main'>
        <div className='create-flexbox-topbutton'>
            <Link to='../' className='create-top-button' onClick={ () => {}}>
                <CheckCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></CheckCircleIcon>
                Xác nhận
            </Link>            
            <Link className='create-top-button' onClick={ () => {}}>
                <MapIcon style={{height: '70%', width: '40px', color: 'white'}}></MapIcon>
                Tạo Đường
            </Link>
            <Link to='./add' className='create-top-button'>
                <PlusCircleIcon style={{height: '70%', width: '40px', color: 'white'}}></PlusCircleIcon>
                 Thêm MCP
            </Link>
        </div>
      <table className='create-table-mcp'>
        <thead>
          <tr className='create-head-title'>
            {heads.map((head, headID) => <th key={headID} >{head}</th>)}
          </tr>
        </thead>
        <tbody style={{backgroundColor: '#f6f6f6'}}>
          {mcps.map((data, index) =>
            <tr className='' key={index}>
              <th style={{width: '15%'}}>{(data === null ? null : index+1)}</th>
              <th style={{width: '15%'}}>{(data === null ? null : data.ID)}</th>
              <th style={{width: '70%'}} >
                { data === null ? null :
                <div className='create-table-operation-flexbox'>
                    <div className='create-justify-button' style={{backgroundColor: '#ffff4d'}}>Thông tin</div>
                    <div className='create-justify-button' onClick={() => handleMoveUp(index)}>
                        <ChevronDoubleUpIcon style={{height: '70%', width: '40px', color: 'black'}}></ChevronDoubleUpIcon>
                    </div>
                    <div className='create-justify-button' onClick={() => handleMoveDown(index)}>
                        <ChevronDoubleDownIcon style={{height: '70%', width: '40px', color: 'black'}} ></ChevronDoubleDownIcon>
                    </div>
                    <div
                      className='create-justify-button'
                      style={{background: '#eb4034'}}
                      onClick={() => handleDelete(index)}>
                        <XMarkIcon style={{height: '70%', width: '40px', color: 'black'}}></XMarkIcon>
                    </div>
                </div>
                }
              </th>
            </tr>
          )}
        </tbody>
      </table>
      <div className='create-map-flexbox'>
        <OSmap/>
      </div>

      </div>
      
    </div>
  );
}

export default CreateRoute;