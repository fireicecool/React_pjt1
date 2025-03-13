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
    { id: 'id', label: 'ID', width: '10%' },
    { id: 'type', label: 'Type', width: '10%' },
    { id: 'status', label: 'Status', width: '15%' },
    { id: 'destination', label: 'Destination', width: '15%' },
    { id: 'container', label: 'Container', width: '15%' },
    { id: 'departure', label: 'Departure Date', width: '15%' },
    { id: 'arrival', label: 'Arrival Date', width: '15%' },
  ];

  // 샘플 데이터
  const rows = [
    { id: 'EQ-0001', type: 'Container', status: 'Available', destination: 'Busan', container: '20ft', departureDate: '2024-04-10', arrivalDate: '2024-04-15' },
    { id: 'EQ-0002', type: 'Vessel', status: 'In Transit', destination: 'Seoul', container: '40ft', departureDate: '2024-04-12', arrivalDate: '2024-04-18' },
    { id: 'EQ-0003', type: 'Truck', status: 'Maintenance', destination: 'Incheon', container: '45ft', departureDate: '2024-04-14', arrivalDate: '2024-04-20' },
    { id: 'EQ-0004', type: 'Container', status: 'Reserved', destination: 'Daegu', container: 'Special', departureDate: '2024-04-16', arrivalDate: '2024-04-22' },
    { id: 'EQ-0005', type: 'Vessel', status: 'Available', destination: 'Jeju', container: '20ft', departureDate: '2024-04-18', arrivalDate: '2024-04-24' },
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
      <InnerBox>
        {/* 테이블 헤더 */}
        <TableRow $isHeader>
          {headers.map(header => (
            <TableColumn key={header.id} $width={header.width}>
              {header.id === 'select' ? (
                <CheckboxWrapper>
                  <Checkbox 
                    type="checkbox" 
                    checked={selectedItems.length === rows.length} 
                    onChange={handleSelectAll} 
                  />
                </CheckboxWrapper>
              ) : (
                <CellWrapper>
                  <CellContent>
                    <CellInnerBox>
                      <CellLeft>
                        <CellText>{header.label}</CellText>
                      </CellLeft>
                      {/* 정렬 아이콘 등 추가 가능 */}
                    </CellInnerBox>
                  </CellContent>
                </CellWrapper>
              )}
            </TableColumn>
          ))}
        </TableRow>

        {/* 테이블 데이터 행 */}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableColumn $width="40px">
              <CheckboxWrapper>
                <Checkbox 
                  type="checkbox" 
                  checked={selectedItems.includes(row.id)} 
                  onChange={() => handleCheckboxChange(row.id)} 
                />
              </CheckboxWrapper>
            </TableColumn>
            
            <TableColumn $width="10%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.id}</CellText>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="10%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.type}</CellText>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="15%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <StatusBadge $status={row.status}>{row.status}</StatusBadge>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="15%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.destination}</CellText>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="15%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.container}</CellText>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="15%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.departureDate}</CellText>
                    </CellLeft>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
            
            <TableColumn $width="15%">
              <CellWrapper>
                <CellContent>
                  <CellInnerBox>
                    <CellLeft>
                      <CellText>{row.arrivalDate}</CellText>
                    </CellLeft>
                    <CellRight>
                      <ActionButton>
                        <ActionIcon src="https://c.animaapp.com/tZAM44r5/img/frame-2608566.svg" alt="Action" />
                      </ActionButton>
                    </CellRight>
                  </CellInnerBox>
                </CellContent>
              </CellWrapper>
            </TableColumn>
          </TableRow>
        ))}
      </InnerBox>
    </TableContainer>
  );
}

const TableContainer = styled.div`
  width: 100%;
  overflow: auto;
  border: 1px solid #ececec;
  border-radius: 4px;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
`;

const TableRow = styled.div<{ $isHeader?: boolean }>`
  display: flex;
  min-height: 48px;
  width: 100%;
  background-color: ${props => props.$isHeader ? '#f9f9f9' : '#ffffff'};
  border-bottom: 1px solid #ececec;
  
  &:hover {
    background-color: ${props => props.$isHeader ? '#f9f9f9' : 'rgba(236, 236, 236, 0.2)'};
  }
`;

const TableColumn = styled.div<{ $width: string }>`
  flex: ${props => props.$width ? 'none' : '1'};
  width: ${props => props.$width || 'auto'};
  min-width: ${props => props.$width || 'auto'};
  display: flex;
  align-items: stretch;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

const CellWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
`;

const CellContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const CellInnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const CellLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CellRight = styled.div`
  display: flex;
  align-items: center;
`;

const CellText = styled.div`
  font-family: 'Roboto', Helvetica;
  font-weight: 400;
  font-size: 14px;
  color: #4b5763;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StatusBadge = styled.div<{ $status: string }>`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: 'Roboto', Helvetica;
  font-weight: 600;
  font-size: 12px;
  background-color: ${props => {
    switch (props.$status) {
      case 'Available': return 'rgba(50, 205, 50, 0.1)';
      case 'In Transit': return 'rgba(0, 123, 255, 0.1)';
      case 'Maintenance': return 'rgba(255, 165, 0, 0.1)';
      case 'Reserved': return 'rgba(108, 117, 125, 0.1)';
      default: return 'rgba(236, 236, 236, 0.5)';
    }
  }};
  color: ${props => {
    switch (props.$status) {
      case 'Available': return '#32cd32';
      case 'In Transit': return '#007bff';
      case 'Maintenance': return '#ffa500';
      case 'Reserved': return '#6c757d';
      default: return '#4b5763';
    }
  }};
`;

const ActionButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ActionIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export default TableView; 