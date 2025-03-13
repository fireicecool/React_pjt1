import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// 대시보드 데이터 타입 정의
interface Equipment {
  id: string;
  type: string;
  status: string;
  destination: string;
  container: string;
  departureDate: string;
  arrivalDate: string;
}

interface DashboardData {
  totalCount: number;
  equipments: Equipment[];
}

/**
 * 대시보드 데이터를 가져오는 커스텀 훅
 * React Query를 사용하여 데이터 캐싱 및 관리
 */
function useDashboardData(
  filters: { status?: string; searchTerm?: string; dateRange?: [Date | null, Date | null] } = {}
) {
  // 목업 데이터 생성
  const generateMockData = (): DashboardData => {
    const statusOptions = ['Available', 'In Transit', 'Maintenance', 'Reserved'];
    const destinationOptions = ['Busan', 'Seoul', 'Incheon', 'Daegu', 'Jeju'];
    const containerOptions = ['20ft', '40ft', '45ft', 'Special'];
    
    const equipments = Array.from({ length: 50 }, (_, index) => {
      const id = `EQ-${String(index + 1).padStart(4, '0')}`;
      const type = index % 3 === 0 ? 'Container' : index % 3 === 1 ? 'Vessel' : 'Truck';
      const status = statusOptions[Math.floor(Math.random() * statusOptions.length)];
      const destination = destinationOptions[Math.floor(Math.random() * destinationOptions.length)];
      const container = containerOptions[Math.floor(Math.random() * containerOptions.length)];
      
      // 날짜 생성
      const today = new Date();
      const departureDate = new Date(today);
      departureDate.setDate(today.getDate() + Math.floor(Math.random() * 7));
      
      const arrivalDate = new Date(departureDate);
      arrivalDate.setDate(departureDate.getDate() + 3 + Math.floor(Math.random() * 7));
      
      return {
        id,
        type,
        status,
        destination,
        container,
        departureDate: departureDate.toISOString().split('T')[0],
        arrivalDate: arrivalDate.toISOString().split('T')[0],
      };
    });
    
    return {
      totalCount: 123823, // 임의의 총 갯수
      equipments,
    };
  };

  // API 호출을 시뮬레이션하는 함수
  const fetchDashboardData = async (): Promise<DashboardData> => {
    // 실제 API 호출 대신 지연 시간을 추가한 목업 데이터 반환
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockData = generateMockData();
        resolve(mockData);
      }, 800); // 800ms 지연
    });
  };

  // React Query를 사용한 데이터 가져오기
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['dashboardData', filters],
    queryFn: fetchDashboardData,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 30, // 30분
  });

  // 필터링된 데이터 상태
  const [filteredData, setFilteredData] = useState<DashboardData | undefined>(undefined);

  // 필터에 따라 데이터 필터링
  useEffect(() => {
    if (!data) return;

    // 필터링 로직
    let filtered = [...data.equipments];
    
    if (filters.status) {
      filtered = filtered.filter(item => item.status === filters.status);
    }
    
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.id.toLowerCase().includes(searchLower) ||
        item.type.toLowerCase().includes(searchLower) ||
        item.destination.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.dateRange && filters.dateRange[0] && filters.dateRange[1]) {
      const startDate = filters.dateRange[0];
      const endDate = filters.dateRange[1];
      
      filtered = filtered.filter(item => {
        const arrivalDate = new Date(item.arrivalDate);
        return arrivalDate >= startDate && arrivalDate <= endDate;
      });
    }
    
    setFilteredData({
      totalCount: data.totalCount,
      equipments: filtered,
    });
  }, [data, filters.status, filters.searchTerm, filters.dateRange?.[0], filters.dateRange?.[1]]);

  return {
    data: filteredData || data,
    loading: isLoading,
    error,
    refetch,
  };
}

export { useDashboardData }; 