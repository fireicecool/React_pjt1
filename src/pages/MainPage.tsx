import { useState, useEffect } from 'react';

/**
 * 메인 페이지 컴포넌트
 * 다른 컴포넌트들을 포함하는 기본 레이아웃
 */
const MainPage = () => {
  const [activeTab, setActiveTab] = useState('service');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_selectedRows, setSelectedRows] = useState<number[]>([]);
  const [allSelected, setAllSelected] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState('2024. 12. 12');
  const [endDate, setEndDate] = useState('2024. 12. 12');
  
  // 원본 HTML과 일치시키기 위해 빈 배열로 설정
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_tableData, setTableData] = useState<string[]>([]);

  // 검색어나 날짜가 변경될 때 데이터 필터링
  useEffect(() => {
    // 원본 HTML과 일치시키기 위해 빈 배열 유지
    setTableData(['CONF', 'NCON']); // Status 값을 기반으로 설정
    // 전체 선택 상태 업데이트
    setAllSelected(false);
    // 선택된 행 초기화
    setSelectedRows([]);
  }, [searchTerm, startDate, endDate]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // 모든 행 선택/선택해제 핸들러
  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows([1, 2]); // 더미 데이터 ID
    }
    setAllSelected(!allSelected);
  };

  // 검색어 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // 날짜 변경 핸들러
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="dashboard">
      {/* Header 영역 */}
      <div className="header">
        <div className="div">
          <img className="icon-heart" src="https://c.animaapp.com/tZAM44r5/img/---icon--heart-@2x.png" alt="Icon Heart" />
          
          {/* 검색 바 */}
          <div className="global-search-bar">
            <div className="wrapper">
              <img className="magnifying-glass" src="https://c.animaapp.com/tZAM44r5/img/magnifying-glass.svg" alt="Search" />
              <div className="text-wrapper">Search resources...</div>
            </div>
          </div>
          
          {/* 헤더 메뉴 박스 */}
          <div className="header-menu-box">
            <div className="button-typea-s">
              <div className="left-box">
                <img className="img" src="https://c.animaapp.com/tZAM44r5/img/frame-2608566.svg" alt="Notifications" />
              </div>
            </div>
            <div className="badge"></div>
            <div className="button-typea-s">
              <div className="avatar-wrapper">
                <img className="img" src="https://c.animaapp.com/tZAM44r5/img/avatar.svg" alt="Avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper-2">
        {/* 사이드바 영역 */}
        <div className="lnb">
          <div className="main">
            <div className="avatar">
              <div className="group">
                <div className="user-large"><div className="group-2"></div></div>
              </div>
            </div>
            <img className="line" src="https://c.animaapp.com/tZAM44r5/img/line-1.svg" alt="Line" />
            <div className="frame">
              <div className="LNB-button"><img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/icon.svg" alt="Icon" /></div>
              <div className="frame-wrapper">
                <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/frame-2608575.svg" alt="Frame" />
              </div>
            </div>
            <img className="line" src="https://c.animaapp.com/tZAM44r5/img/line-1.svg" alt="Line" />
            <div className="frame">
              <div className="LNB-button-dropdown">
                <div className="container-storage-wrapper">
                  <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/container-storage.svg" alt="Container Storage" />
                </div>
              </div>
              <div className="LNB-button-dropdown">
                <div className="img-wrapper">
                  <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/frame-2608569.svg" alt="Frame" />
                </div>
              </div>
              <div className="LNB-button-dropdown">
                <div className="img-wrapper"><img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/port.svg" alt="Port" /></div>
              </div>
              <div className="LNB-button-dropdown">
                <div className="img-wrapper">
                  <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/services.svg" alt="Services" />
                </div>
              </div>
              <div className="LNB-button-dropdown">
                <div className="img-wrapper">
                  <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/stowages.svg" alt="Stowages" />
                </div>
              </div>
              <div className="LNB-button-2">
                <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/frame-2608573.svg" alt="Frame" />
              </div>
              <div className="LNB-button-2"><img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/icon-1.svg" alt="Icon" /></div>
            </div>
          </div>
          <div className="button">
            <div className="group-wrapper"><div className="group-3"></div></div>
          </div>
        </div>
        
        {/* 본문 영역 */}
        <div className="body">
          <div className="inner-box">
            {/* 탭 바 */}
            <div className="tab-bar">
              <div className={`tab ${activeTab === 'service' ? 'active' : ''}`} onClick={() => handleTabChange('service')}>
                <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/table.svg" alt="Table" />
                <div className="service-allocation-wrapper"><div className="service-allocation">T/S Management</div></div>
                <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/xmark.svg" alt="Close" />
              </div>
              <div className={`tab-2 ${activeTab === 'network' ? 'active' : ''}`} onClick={() => handleTabChange('network')}>
                <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-progress.svg" alt="Progress" />
                <div className="text-wrapper-2">Service Allocation</div>
                <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/xmark-1.svg" alt="Close" />
              </div>
            </div>
            
            {/* 메인 콘텐츠 */}
            <div className="main-2">
              <img className="vector" src="https://c.animaapp.com/tZAM44r5/img/vector-1.svg" alt="Vector" />
              
              {/* 타이틀 박스 */}
              <div className="title-box">
                <div className="vessel-name">
                  <img className="vessel" src="https://c.animaapp.com/tZAM44r5/img/vessel.svg" alt="Vessel" />
                  <div className="text-wrapper-3">T/S PORT</div>
                  <div className="button-typed-XS">
                    <div className="left-box-wrapper">
                      <div className="text-box-wrapper">
                        <div className="text-box"><div className="text">KRPUS ABC</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner-box-wrapper">
                  <div className="left-box-wrapper">
                    <div className="text-box-wrapper">
                      <div className="text-box"><div className="text-2">KRPUS DEF</div></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <img className="vector-2" src="https://c.animaapp.com/tZAM44r5/img/vector-2.svg" alt="Vector" />
              
              {/* 검색 및 필터 컴포넌트 */}
              <div className="component">
                <div className="overlap-group">
                  <div className="component-wrapper">
                    <div className="form-typea-wrapper">
                      <div className="form-typea">
                        <div className="input-box">
                          <div className="input-m">
                            {/* 숨겨진 입력 필드 */}
                            <input 
                              type="text" 
                              value={searchTerm}
                              onChange={handleSearchChange}
                              style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'text', zIndex: 1 }}
                              aria-label="Search"
                            />
                            {/* 원본 HTML 구조를 그대로 유지 */}
                            <div className="placeholder">{searchTerm || 'Search'}</div>
                            <img className="img-2" src="https://c.animaapp.com/tZAM44r5/img/magnifying-glass-1.svg" alt="Search" />
                          </div>
                          <img className="line-2" src="https://c.animaapp.com/tZAM44r5/img/line-393.svg" alt="Line" />
                          <div className="div-2">
                            <div className="text-wrapper-4">ETA</div>
                            <div className="search">
                              <img className="calendar" src="https://c.animaapp.com/tZAM44r5/img/calendar.svg" alt="Calendar" />
                              <div className="placeholder-2">
                                {/* 숨겨진 시작 날짜 입력 필드 */}
                                <input 
                                  type="text" 
                                  value={startDate} 
                                  onChange={handleStartDateChange}
                                  style={{ position: 'absolute', opacity: 0, width: '32%', height: '100%', cursor: 'text', left: 0, zIndex: 1 }}
                                  aria-label="Start date"
                                />
                                {/* 원본 HTML 구조를 그대로 유지 */}
                                <div className="text-wrapper-4">{startDate}</div>
                                <div className="text-wrapper-4">~</div>
                                {/* 숨겨진 종료 날짜 입력 필드 */}
                                <input 
                                  type="text" 
                                  value={endDate} 
                                  onChange={handleEndDateChange}
                                  style={{ position: 'absolute', opacity: 0, width: '32%', height: '100%', cursor: 'text', right: 0, zIndex: 1 }}
                                  aria-label="End date"
                                />
                                {/* 원본 HTML 구조를 그대로 유지 */}
                                <div className="text-wrapper-4">{endDate}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="div-3"></div>
                      </div>
                    </div>
                  </div>
                  <div className="div-wrapper">
                    <div className="frame-2">
                      <div className="frame-3">
                        <img className="div-3" src="https://c.animaapp.com/tZAM44r5/img/frame-2609136.svg" alt="Frame" />
                      </div>
                      <div className="frame-3"><div className="group-4"></div></div>
                      <div className="frame-4">
                        <div className="group-5"></div>
                        <div className="group-6">
                          <div className="frame-5">
                            <div className="frame-6">
                              <div className="text-box-2"><div className="text-wrapper-5">LDPL</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-4">
                        <div className="group-7"></div>
                        <div className="group-6">
                          <div className="frame-5">
                            <div className="frame-6">
                              <div className="text-box-2"><div className="text-wrapper-6">Confirm</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-4">
                        <div className="group-8"></div>
                        <div className="group-6">
                          <div className="frame-5">
                            <div className="frame-6">
                              <div className="text-box-2"><div className="text-wrapper-5">S/O</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-4">
                        <div className="group-9"></div>
                        <div className="group-6">
                          <div className="frame-5">
                            <div className="frame-6">
                              <div className="text-box-2"><div className="text-wrapper-7">Loaded</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-7">
                        <div className="left-box-2">
                          <div className="frame-8">
                            <div className="text-box-2"><div className="text-3">Assign</div></div>
                          </div>
                        </div>
                      </div>
                      <div className="left-box-3">
                        <div className="group-6">
                          <div className="frame-5">
                            <div className="frame-6">
                              <div className="text-box-2"><div className="text-wrapper-5">BKRQ</div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 테이블 영역 */}
              <div className="total">
                <div className="title"><div className="text-4">Total : 2,500</div></div>
              </div>
              
              {/* 테이블 - 원본 HTML과 완벽히 일치하도록 수정 */}
              <div className="frame-9">
                <div className="table-wrapper">
                  <div className="inner-box-2">
                    {/* 테이블 헤더 - 원본 HTML과 동일한 열 구조 */}
                    <div className="row">
                      {/* 체크박스 열 */}
                      <div className="column">
                        <div className="idrowcell-default-wrapper">
                          <div className="idrowcell-default" onClick={handleSelectAll}>
                            <div className="div-2">
                              <div className="check-box" style={{ backgroundColor: allSelected ? '#4A90E2' : 'transparent' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Status 열 */}
                      <div className="cell-m-wrapper">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Status</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Container Number 열 */}
                      <div className="column-2">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Container Number</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-1.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* VOL 열 */}
                      <div className="column-3">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">VOL</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-2.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* POD 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">POD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-3.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* TOD 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">TOD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-4.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* VOD 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">VOD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-5.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Size Type 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Size Type</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-6.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* WGT(t) 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">WGT(t)</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-7.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Full/Empty 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Full/Empty</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-8.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Cargo Type 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Cargo Type</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-9.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OG Type 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OG Type</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-10.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OGH 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OGH</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-11.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OGF 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OGF</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-12.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OGA 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OGA</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-13.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OGP 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OGP</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-14.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* OGS 열 */}
                      <div className="column-4">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">OGS</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-15.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Previous POD 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Previous POD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-16.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Previous TOD 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Previous TOD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-17.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Previous VOD 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Previous VOD</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-18.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Previous Slot Position 열 */}
                      <div className="column-6">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Previous Slot Position</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-19.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Handling Instruction 열 */}
                      <div className="column-6">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Handling Instruction</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-20.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Booking No. 열 */}
                      <div className="column-5">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-5">Booking No.</div></div>
                            </div>
                            <div className="right-box">
                              <img className="img-3" src="https://c.animaapp.com/tZAM44r5/img/arrow-down-21.svg" alt="Arrow" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 첫 번째 데이터 행 - 원본 HTML과 동일 */}
                    <div className="row-2">
                      <div className="wrapper-wrapper">
                        <div className="wrapper-3">
                          <div className="checkbox-m-wrapper">
                            <div className="div-2"><div className="check-box"></div></div>
                          </div>
                        </div>
                      </div>
                      <div className="cell-innerbox-wrapper">
                        <div className="cell-innerbox">
                          <div className="left-box-4">
                            <div className="text-box-3"><div className="text-wrapper-4">Assign</div></div>
                          </div>
                          <div className="div-3"></div>
                        </div>
                      </div>
                      <div className="column-7">
                        <div className="cell-m-2">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">AMFU1421688</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-8">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">OLBFBS1MA</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-9">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">USORF</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-9">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">MAT</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-8">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">OLBFCE1MA</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-9">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">22P0</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-9">
                        <div className="cell-m-2">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">20.13</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-9">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">F</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-8">
                        <div className="cell-m">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">GP</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      {/* 남은 열들도 동일하게 구현 */}
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className={`column-${i % 2 === 0 ? 9 : 10}`}>
                          <div className="cell-m">
                            <div className="cell-innerbox">
                              <div className="left-box-4">
                                <div className="text-box-3"><div className="text-wrapper-4">-</div></div>
                              </div>
                              <div className="div-3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 두 번째 데이터 행 - 원본 HTML과 동일 */}
                    <div className="row-2">
                      <div className="wrapper-wrapper">
                        <div className="idrowcell-default-wrapper">
                          <div className="checkbox-m-wrapper">
                            <div className="div-2"><div className="check-box"></div></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-11">
                        <div className="cell-m-2">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">Assign</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      <div className="column-7">
                        <div className="cell-m-2">
                          <div className="cell-innerbox">
                            <div className="left-box-4">
                              <div className="text-box-3"><div className="text-wrapper-4">CONT5423975</div></div>
                            </div>
                            <div className="div-3"></div>
                          </div>
                        </div>
                      </div>
                      {/* 남은 열들도 동일하게 구현 */}
                      {[...Array(19)].map((_, i) => (
                        <div key={i} className={`column-${8 + (i % 3)}`}>
                          <div className="cell-m">
                            <div className="cell-innerbox">
                              <div className="left-box-4">
                                <div className="text-box-3"><div className="text-wrapper-4">{i === 0 ? 'OLBFBS2MA' : i === 1 ? 'USNYC' : '-'}</div></div>
                              </div>
                              <div className="div-3"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage; 