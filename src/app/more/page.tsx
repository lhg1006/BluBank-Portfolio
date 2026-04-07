'use client';

import styled from '@emotion/styled';
import { theme } from '@/styles/theme';
import { Layout, Header, Navigation } from '@/components';
import {
  ArrowRightLeft,
  CreditCard,
  TrendingUp,
  Bell,
  Settings,
  HelpCircle,
  Shield,
  FileText,
  Gift,
  Star,
  Users,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing.xl};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.toss.card};
  margin-bottom: ${theme.spacing.xl};
`;

const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${theme.colors.toss.blue} 0%, ${theme.colors.toss.purple} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
  margin-bottom: 2px;
`;

const ProfileEmail = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

const MenuGroup = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.toss.card};
  margin-bottom: ${theme.spacing.lg};
  overflow: hidden;
`;

const MenuGroupTitle = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.gray[400]};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px ${theme.spacing.md};
  background: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background: ${theme.colors.gray[50]};
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.gray[100]};
  }
`;

const MenuIcon = styled.div<{ color?: string }>`
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.sm};
  background: ${p => p.color || theme.colors.gray[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: white;
  flex-shrink: 0;
`;

const MenuLabel = styled.span`
  flex: 1;
  text-align: left;
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[800]};
`;

const MenuArrow = styled.div`
  color: ${theme.colors.gray[300]};
  display: flex;
  align-items: center;
`;

const VersionText = styled.div`
  text-align: center;
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[400]};
  padding: ${theme.spacing.xl} 0;
  padding-bottom: 100px;
`;

export default function MorePage() {
  return (
    <>
      <Header title="전체" showBackButton onBack={() => (window.location.href = '/')} />
      <Layout>
        <PageTitle>전체</PageTitle>

        <ProfileSection>
          <Avatar>B</Avatar>
          <ProfileInfo>
            <ProfileName>BluBank 사용자</ProfileName>
            <ProfileEmail>demo@blubank.app</ProfileEmail>
          </ProfileInfo>
          <MenuArrow><ChevronRight size={20} /></MenuArrow>
        </ProfileSection>

        <MenuGroup>
          <MenuGroupTitle>금융</MenuGroupTitle>
          <MenuItem onClick={() => (window.location.href = '/transfer')}>
            <MenuIcon color={theme.colors.toss.blue}><ArrowRightLeft size={18} /></MenuIcon>
            <MenuLabel>송금</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem onClick={() => (window.location.href = '/pay')}>
            <MenuIcon color={theme.colors.toss.purple}><CreditCard size={18} /></MenuIcon>
            <MenuLabel>결제</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem onClick={() => (window.location.href = '/invest')}>
            <MenuIcon color={theme.colors.toss.green}><TrendingUp size={18} /></MenuIcon>
            <MenuLabel>투자</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
        </MenuGroup>

        <MenuGroup>
          <MenuGroupTitle>혜택</MenuGroupTitle>
          <MenuItem>
            <MenuIcon color={theme.colors.toss.orange}><Gift size={18} /></MenuIcon>
            <MenuLabel>이벤트</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.toss.yellow}><Star size={18} /></MenuIcon>
            <MenuLabel>포인트</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.toss.blue}><Users size={18} /></MenuIcon>
            <MenuLabel>친구 초대</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
        </MenuGroup>

        <MenuGroup>
          <MenuGroupTitle>설정</MenuGroupTitle>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[500]}><Bell size={18} /></MenuIcon>
            <MenuLabel>알림 설정</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[500]}><Shield size={18} /></MenuIcon>
            <MenuLabel>보안 설정</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[500]}><Smartphone size={18} /></MenuIcon>
            <MenuLabel>기기 관리</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[500]}><Settings size={18} /></MenuIcon>
            <MenuLabel>앱 설정</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
        </MenuGroup>

        <MenuGroup>
          <MenuGroupTitle>지원</MenuGroupTitle>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[400]}><HelpCircle size={18} /></MenuIcon>
            <MenuLabel>고객센터</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
          <MenuItem>
            <MenuIcon color={theme.colors.gray[400]}><FileText size={18} /></MenuIcon>
            <MenuLabel>이용약관</MenuLabel>
            <MenuArrow><ChevronRight size={18} /></MenuArrow>
          </MenuItem>
        </MenuGroup>

        <VersionText>BluBank Portfolio Demo v1.0.0</VersionText>
      </Layout>
      <Navigation activeTab="more" />
    </>
  );
}
