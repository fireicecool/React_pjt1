import React from 'react';
import styled from 'styled-components';
import { useDashboardContext } from '../../context/dashboard/DashboardContext';

/**
 * 테이블 뷰 컴포넌트
 * 장비 데이터를 테이블 형식으로 표시
 */
function TableView() {
  const { selectedItems, addSelectedItem, removeSelectedItem } = useDashboardContext();

  // 테이블 헤더 정의
  const headers = [
    { id: 'select', label: '', width: '40px' },
    { id: 'status', label: 'Status', width: '80px' },
    { id: 'containerNumber', label: 'Container Number', width: '150px' },
    { id: 'vol', label: 'VOL', width: '100px' },
    { id: 'pod', label: 'POD', width: '80px' },
    { id: 'tod', label: 'TOD', width: '80px' },
    { id: 'vod', label: 'VOD', width: '80px' },
    { id: 'sizeType', label: 'Size Type', width: '100px' },
    { id: 'wgt', label: 'WGT(t)', width: '80px' },
    { id: 'fullEmpty', label: 'Full/Empty', width: '100px' },
    { id: 'cargoType', label: 'Cargo Type', width: '100px' },
    { id: 'ogType', label: 'OG Type', width: '80px' },
    { id: 'ogh', label: 'OGH', width: '60px' },
    { id: 'ogf', label: 'OGF', width: '60px' },
    { id: 'oga', label: 'OGA', width: '60px' },
    { id: 'ogp', label: 'OGP', width: '60px' },
    { id: 'ogs', label: 'OGS', width: '60px' },
    { id: 'prevPod', label: 'Previous POD', width: '120px' },
    { id: 'prevTod', label: 'Previous TOD', width: '120px' },
    { id: 'prevVod', label: 'Previous VOD', width: '120px' },
    { id: 'prevSlotPos', label: 'Previous Slot Position', width: '160px' },
    { id: 'handlingInst', label: 'Handling Instruction', width: '160px' },
    { id: 'bookingNo', label: 'Booking No.', width: '120px' },
  ];

  // 샘플 데이터 - 원본 HTML 구조에 맞게 조정
  const rows = [
    {
      id: 'AMFU1421688',
      status: 'Assign',
      containerNumber: 'AMFU1421688',
      vol: 'OLBFBS1MA',
      pod: 'USORF',
      tod: 'MAT',
      vod: 'OLBFCE1MA',
      sizeType: '22P0',
      wgt: '20.13',
      fullEmpty: 'F',
      cargoType: 'GP',
      ogType: '-',
      ogh: '0',
      ogf: '0',
      oga: '0',
      ogp: '0',
      ogs: '0',
      prevPod: '-',
      prevTod: '-',
      prevVod: '-',
      prevSlotPos: '-',
      handlingInst: '-',
      bookingNo: '-',
    }
  ];

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      removeSelectedItem(itemId);
    } else {
      addSelectedItem(itemId);
    }
  };

  // 모든 항목 선택/해제 핸들러
  const handleSelectAll = () => {
    if (selectedItems.length === rows.length) {
      // 모두 선택된 상태면 모두 해제
      rows.forEach(row => removeSelectedItem(row.id));
    } else {
      // 그렇지 않으면 모두 선택
      rows.forEach(row => {
        if (!selectedItems.includes(row.id)) {
          addSelectedItem(row.id);
        }
      });
    }
  };

  return (
    <TableContainer>
      <TableHeader>
        <HeaderRow>
          <HeaderCell style={{ width: '40px' }}>
            <Checkbox 
              type="checkbox" 
              checked={selectedItems.length === rows.length} 
              onChange={handleSelectAll}
            />
          </HeaderCell>
          {headers.slice(1).map((header) => (
            <HeaderCell key={header.id} style={{ width: header.width }}>
              <HeaderText>{header.label}</HeaderText>
              <SortIcon>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5H7z" fill="#6c757d"/>
                </svg>
              </SortIcon>
            </HeaderCell>
          ))}
        </HeaderRow>
      </TableHeader>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell style={{ width: '40px' }}>
              <Checkbox 
                type="checkbox" 
                checked={selectedItems.includes(row.id)} 
                onChange={() => handleCheckboxChange(row.id)} 
              />
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.status}</CellText>
            </TableCell>
            <TableCell style={{ width: '150px' }}>
              <CellText>{row.containerNumber}</CellText>
            </TableCell>
            <TableCell style={{ width: '100px' }}>
              <CellText>{row.vol}</CellText>
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.pod}</CellText>
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.tod}</CellText>
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.vod}</CellText>
            </TableCell>
            <TableCell style={{ width: '100px' }}>
              <CellText>{row.sizeType}</CellText>
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.wgt}</CellText>
            </TableCell>
            <TableCell style={{ width: '100px' }}>
              <CellText>{row.fullEmpty}</CellText>
            </TableCell>
            <TableCell style={{ width: '100px' }}>
              <CellText>{row.cargoType}</CellText>
            </TableCell>
            <TableCell style={{ width: '80px' }}>
              <CellText>{row.ogType}</CellText>
            </TableCell>
            <TableCell style={{ width: '60px' }}>
              <CellText>{row.ogh}</CellText>
            </TableCell>
            <TableCell style={{ width: '60px' }}>
              <CellText>{row.ogf}</CellText>
            </TableCell>
            <TableCell style={{ width: '60px' }}>
              <CellText>{row.oga}</CellText>
            </TableCell>
            <TableCell style={{ width: '60px' }}>
              <CellText>{row.ogp}</CellText>
            </TableCell>
            <TableCell style={{ width: '60px' }}>
              <CellText>{row.ogs}</CellText>
            </TableCell>
            <TableCell style={{ width: '120px' }}>
              <CellText>{row.prevPod}</CellText>
            </TableCell>
            <TableCell style={{ width: '120px' }}>
              <CellText>{row.prevTod}</CellText>
            </TableCell>
            <TableCell style={{ width: '120px' }}>
              <CellText>{row.prevVod}</CellText>
            </TableCell>
            <TableCell style={{ width: '160px' }}>
              <CellText>{row.prevSlotPos}</CellText>
            </TableCell>
            <TableCell style={{ width: '160px' }}>
              <CellText>{row.handlingInst}</CellText>
            </TableCell>
            <TableCell style={{ width: '120px' }}>
              <CellText>{row.bookingNo}</CellText>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}

// 스타일 컴포넌트들
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  background-color: #ffffff;
  border: 1px solid #e9ecef;
  border-radius: 4px;
`;

const TableHeader = styled.div`
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const HeaderRow = styled.div`
  display: flex;
  width: max-content;
`;

const HeaderCell = styled.div`
  display: flex;
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #495057;
  border-right: 1px solid #e9ecef;
  
  &:last-child {
    border-right: none;
  }
`;

const HeaderText = styled.div`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
`;

const SortIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`;

const TableRow = styled.div`
  display: flex;
  width: max-content;
  border-bottom: 1px solid #e9ecef;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  display: flex;
  padding: 12px 8px;
  align-items: center;
  border-right: 1px solid #e9ecef;
  
  &:last-child {
    border-right: none;
  }
`;

const CellText = styled.div`
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #495057;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export default TableView; 