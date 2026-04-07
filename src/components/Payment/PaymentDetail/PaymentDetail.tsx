'use client';

import { useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@/styles/theme';
import { Payment } from '@/app/pay/page';
import { useToast } from '@/hooks/useToast';

interface PaymentDetailProps {
  payment: Payment;
  onClose: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease-out;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

const ModalContent = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl} 0 0;
  padding: ${theme.spacing.xl};
  width: 100%;
  max-width: 480px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: ${theme.shadows.xl};
  animation: ${slideUp} 0.3s ease-out;
  
  @media (min-width: ${theme.breakpoints.tablet}) {
    border-radius: ${theme.borderRadius.xl};
    max-height: 600px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const ModalTitle = styled.h2`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[400]};
  cursor: pointer;
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.sm};
  transition: ${theme.effects.transition};
  
  &:hover {
    background: ${theme.colors.gray[100]};
    color: ${theme.colors.gray[600]};
  }
`;

const DetailSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.gray[100]};
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const DetailValue = styled.span`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.gray[900]};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-align: right;
`;

const AmountDisplay = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl} 0;
  margin-bottom: ${theme.spacing.lg};
  background: ${theme.colors.gray[50]};
  border-radius: ${theme.borderRadius.lg};
`;

const MainAmount = styled.div`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.black};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing.xs};
  font-variant-numeric: tabular-nums;
`;

const AmountLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const CategoryBadge = styled.span<{ category: string }>`
  background-color: ${({ category }) => {
    const colors = {
      '카페': '#fff3e0',
      '식당': '#ffebee', 
      '쇼핑': '#f3e5f5',
      '온라인쇼핑': '#e3f2fd',
      '교통': '#e8f5e8',
      '의료': '#fce4ec',
      '문화': '#fff8e1',
    };
    return colors[category as keyof typeof colors] || theme.colors.gray[100];
  }};
  color: ${({ category }) => {
    const colors = {
      '카페': '#ff9500',
      '식당': '#ff6b6b', 
      '쇼핑': '#8b5cf6',
      '온라인쇼핑': '#3182f6',
      '교통': '#00c896',
      '의료': '#f472b6',
      '문화': '#fbbf24',
    };
    return colors[category as keyof typeof colors] || theme.colors.gray[600];
  }};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
  border: 1px solid ${({ category }) => {
    const colors = {
      '카페': '#ff9500',
      '식당': '#ff6b6b', 
      '쇼핑': '#8b5cf6',
      '온라인쇼핑': '#3182f6',
      '교통': '#00c896',
      '의료': '#f472b6',
      '문화': '#fbbf24',
    };
    return colors[category as keyof typeof colors] || theme.colors.gray[300];
  }}20;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xl};
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: ${theme.spacing.md};
  border: ${({ variant }) => 
    variant === 'primary' ? 'none' : `1px solid ${theme.colors.gray[300]}`};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ variant }) => 
    variant === 'primary' ? theme.colors.toss.blue : theme.colors.white};
  color: ${({ variant }) => 
    variant === 'primary' ? theme.colors.white : theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: ${theme.effects.transition};
  
  &:hover {
    background: ${({ variant }) => 
      variant === 'primary' ? theme.colors.primary[700] : theme.colors.gray[100]};
  }
`;

export const PaymentDetail: React.FC<PaymentDetailProps> = ({ payment, onClose }) => {
  const { showToast } = useToast();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(amount);
  };

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  const handleCopyTransactionId = async () => {
    try {
      await navigator.clipboard.writeText(payment.id);
      showToast('거래 ID가 복사되었습니다');
    } catch (err) {
      showToast('복사에 실패했습니다');
    }
  };

  const handleReportIssue = () => {
    showToast('신고가 접수되었습니다');
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>결제 상세</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <AmountDisplay>
          <MainAmount>-{formatAmount(payment.amount)}</MainAmount>
          <AmountLabel>결제 금액</AmountLabel>
        </AmountDisplay>

        <DetailSection>
          <DetailRow>
            <DetailLabel>가맹점</DetailLabel>
            <DetailValue>{payment.merchant}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>카테고리</DetailLabel>
            <DetailValue>
              <CategoryBadge category={payment.category}>
                {payment.category}
              </CategoryBadge>
            </DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>결제 수단</DetailLabel>
            <DetailValue>{payment.paymentMethod}</DetailValue>
          </DetailRow>
          {payment.installment && payment.installment > 0 && (
            <DetailRow>
              <DetailLabel>할부</DetailLabel>
              <DetailValue>{payment.installment}개월</DetailValue>
            </DetailRow>
          )}
          <DetailRow>
            <DetailLabel>결제 일시</DetailLabel>
            <DetailValue>{formatDateTime(payment.date)}</DetailValue>
          </DetailRow>
          {payment.location && (
            <DetailRow>
              <DetailLabel>결제 위치</DetailLabel>
              <DetailValue>{payment.location}</DetailValue>
            </DetailRow>
          )}
          <DetailRow>
            <DetailLabel>거래 ID</DetailLabel>
            <DetailValue 
              style={{ cursor: 'pointer', color: theme.colors.toss.blue }}
              onClick={handleCopyTransactionId}
            >
              {payment.id} 📋
            </DetailValue>
          </DetailRow>
        </DetailSection>

        <ActionButtons>
          <ActionButton variant="secondary" onClick={handleReportIssue}>
            신고하기
          </ActionButton>
          <ActionButton variant="primary" onClick={onClose}>
            확인
          </ActionButton>
        </ActionButtons>
      </ModalContent>
    </ModalOverlay>
  );
};