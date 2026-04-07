'use client';

import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@/styles/theme';
import { LayoutGrid, Columns2 } from 'lucide-react';
import { 
  Layout, 
  Header,
  AccountCard, 
  TransactionList, 
  QuickActions,
  BenefitsSummary,
  Navigation,
  CardSlider
} from '@/components';

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const SkeletonBox = styled.div<{ width?: string; height?: string; radius?: string }>`
  width: ${p => p.width || '100%'};
  height: ${p => p.height || '16px'};
  border-radius: ${p => p.radius || '8px'};
  background: linear-gradient(90deg, ${theme.colors.gray[100]} 25%, ${theme.colors.gray[200]} 50%, ${theme.colors.gray[100]} 75%);
  background-size: 800px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

function PageSkeleton() {
  return (
    <>
      <Header title="BluBank" />
      <Layout>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
          <SkeletonBox width="180px" height="32px" radius="8px" />
          <div style={{ height: '8px' }} />
          <SkeletonBox width="280px" height="16px" radius="6px" />
        </div>

        {/* Cards */}
        <SkeletonSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <SkeletonBox width="80px" height="24px" />
            <SkeletonBox width="100px" height="32px" radius="8px" />
          </div>
          <SkeletonBox height="200px" radius="16px" />
        </SkeletonSection>

        {/* Benefits */}
        <SkeletonSection>
          <SkeletonBox height="180px" radius="16px" />
        </SkeletonSection>

        {/* Quick Actions */}
        <SkeletonSection>
          <SkeletonBox width="80px" height="24px" />
          <div style={{ height: '12px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <SkeletonBox height="80px" radius="12px" />
            <SkeletonBox height="80px" radius="12px" />
            <SkeletonBox height="80px" radius="12px" />
          </div>
        </SkeletonSection>

        {/* Transactions */}
        <SkeletonSection>
          <SkeletonBox width="80px" height="24px" />
          <div style={{ height: '12px' }} />
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <SkeletonBox width="40px" height="40px" radius="50%" />
              <div style={{ flex: 1 }}>
                <SkeletonBox width="60%" height="16px" />
                <div style={{ height: '6px' }} />
                <SkeletonBox width="40%" height="12px" />
              </div>
              <SkeletonBox width="80px" height="16px" />
            </div>
          ))}
        </SkeletonSection>
      </Layout>
      <Navigation activeTab="home" />
    </>
  );
}

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing.sm};
  text-align: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const PortfolioSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.gray[500]};
  text-align: center;
  margin: 0 0 ${theme.spacing.xl} 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing.lg};
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.md};
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[800]};
  margin: 0;
`;

const ViewToggleButton = styled.button`
  background: ${theme.colors.gray[100]};
  border: none;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  
  &:hover {
    background: ${theme.colors.gray[200]};
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

const AccountsGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SliderContainer = styled.div`
  overflow: visible;
  width: 100%;
`;


export default function Home() {
  const [balanceVisibility, setBalanceVisibility] = useState<{ [key: number]: boolean }>({
    0: true,
    1: true,
    2: true,
    3: true
  });
  const [isGridView, setIsGridView] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      type: "income" as const,
      amount: 50000,
      description: "카카오페이 충전",
      date: new Date("2024-07-07T14:30:00"),
      category: "충전",
    },
    {
      id: "2",
      type: "expense" as const,
      amount: 12000,
      description: "스타벅스 아메리카노",
      date: new Date("2024-07-07T09:15:00"),
      category: "카페",
    },
    {
      id: "3",
      type: "expense" as const,
      amount: 8500,
      description: "지하철 교통비",
      date: new Date("2024-07-06T18:45:00"),
      category: "교통",
    },
  ]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // 다음 프레임에서 렌더링 — SSR 스타일과 동기화
    requestAnimationFrame(() => {
      setPageReady(true);
    });
  }, []);
  
  const accounts = [
    {
      id: 0,
      accountName: "BluBank 입출금",
      accountNumber: "100012345678",
      balance: 1250000,
      cardColor: "blue" as const,
    },
    {
      id: 1,
      accountName: "BluBank 적금",
      accountNumber: "200012345678",
      balance: 5000000,
      cardColor: "green" as const,
    },
    {
      id: 2,
      accountName: "BluBank 모임통장",
      accountNumber: "300012345678",
      balance: 850000,
      cardColor: "purple" as const,
    },
    {
      id: 3,
      accountName: "BluBank 외화통장",
      accountNumber: "400012345678",
      balance: 2300000,
      cardColor: "orange" as const,
    },
  ];

  const benefits = [
    {
      id: "1",
      category: "카페",
      icon: "cafe",
      amount: 15000,
      description: "스타벅스 5% 적립",
      color: "#ff9500",
    },
    {
      id: "2",
      category: "교통",
      icon: "transit",
      amount: 8000,
      description: "대중교통 무제한 무료",
      color: "#3182f6",
    },
    {
      id: "3",
      category: "쇼핑",
      icon: "shopping",
      amount: 25000,
      description: "온라인 쇼핑 3% 적립",
      color: "#8b5cf6",
    },
  ];


  const handleTransfer = () => {
    window.location.href = '/transfer';
  };

  const handlePay = () => {
    window.location.href = '/pay';
  };

  const handleInvest = () => {
    window.location.href = '/invest';
  };

  const handleLoadMore = () => {
    if (loading) return;
    
    setLoading(true);
    
    // 더미 데이터 생성
    setTimeout(() => {
      const newTransactions = [
        {
          id: `${transactions.length + 1}`,
          type: "expense" as const,
          amount: Math.floor(Math.random() * 50000) + 5000,
          description: "새로운 거래",
          date: new Date(Date.now() - Math.random() * 86400000 * 7),
          category: "기타",
        },
        {
          id: `${transactions.length + 2}`,
          type: "income" as const,
          amount: Math.floor(Math.random() * 100000) + 10000,
          description: "입금",
          date: new Date(Date.now() - Math.random() * 86400000 * 7),
          category: "입금",
        },
      ];
      
      setTransactions(prev => [...prev, ...newTransactions]);
      setLoading(false);
      
      if (transactions.length > 20) {
        setHasMore(false);
      }
    }, 1000);
  };

  if (!pageReady) {
    return <PageSkeleton />;
  }

  return (
    <>
      <Header title="BluBank" />
      <Layout>
        <PageTitle>BluBank</PageTitle>
        <PortfolioSubtitle>포트폴리오 데모 - 실제 서비스가 아닙니다</PortfolioSubtitle>
        
        <Section>
          <SectionHeader>
            <SectionTitle>내 계좌</SectionTitle>
            <ViewToggleButton onClick={() => setIsGridView(!isGridView)}>
              {isGridView ? <Columns2 size={16} /> : <LayoutGrid size={16} />} {isGridView ? '슬라이드 보기' : '모두 보기'}
            </ViewToggleButton>
          </SectionHeader>
          
          <AccountsGrid style={{ display: isGridView ? undefined : 'none' }}>
            {accounts.map((account) => (
              <AccountCard
                key={account.id}
                {...account}
                isLoading={false}
                balanceVisible={balanceVisibility[account.id]}
                onToggleBalance={() => {
                  setBalanceVisibility(prev => ({
                    ...prev,
                    [account.id]: !prev[account.id]
                  }));
                }}
              />
            ))}
          </AccountsGrid>
          <SliderContainer style={{ display: isGridView ? 'none' : undefined }}>
            <CardSlider>
              {accounts.map((account) => (
                <AccountCard
                  key={account.id}
                  {...account}
                  isLoading={false}
                  balanceVisible={balanceVisibility[account.id]}
                  onToggleBalance={() => {
                    setBalanceVisibility(prev => ({
                      ...prev,
                      [account.id]: !prev[account.id]
                    }));
                  }}
                />
              ))}
            </CardSlider>
          </SliderContainer>
        </Section>

        <Section>
          <BenefitsSummary benefits={benefits} />
        </Section>

        <Section>
          <SectionTitle>빠른 실행</SectionTitle>
          <QuickActions
            onTransfer={handleTransfer}
            onPay={handlePay}
            onInvest={handleInvest}
          />
        </Section>

        <Section>
          <SectionTitle>최근 거래</SectionTitle>
          <TransactionList 
            transactions={transactions}
            onLoadMore={handleLoadMore}
            hasMore={hasMore}
            loading={loading}
          />
        </Section>
      </Layout>
      <Navigation activeTab="home" />
    </>
  );
}
