'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { FloatingActionButton } from '@/app/_components/ui/base';

import {
  IoPerson,
  IoNotifications,
  IoChatbubblesSharp,
  IoHeartCircle,
  IoAdd,
} from 'react-icons/io5';
import { FaQuestion } from 'react-icons/fa6';
import Link from 'next/link';

const Container = styled.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
  width: 150px;
  height: calc(100vh - 10rem);
  display: grid;
  grid-template-rows: 100px repeat(3, 80px) auto repeat(2, 80px);
  justify-items: center;
  align-items: center;
  & > a:first-child {
    align-self: start;
  }
`;

export default function Sidebar() {
  return (
    <Container>
      <Link href="/dashboard">
        <Image
          src="/pinterest.svg"
          alt="Pinterest icon"
          width={60}
          height={60}
          priority
        />
      </Link>
      <FloatingActionButton
        href="/dashboard/profile"
        $variant="outlined"
        $rounded
        $withBlurShadow
      >
        <IoPerson />
      </FloatingActionButton>
      <FloatingActionButton
        href="/dashboard/notifications"
        $variant="outlined"
        $rounded
        $withBlurShadow
      >
        <IoNotifications />
      </FloatingActionButton>
      <FloatingActionButton
        href="/dashboard/messages"
        $variant="outlined"
        $rounded
        $withBlurShadow
      >
        <IoChatbubblesSharp />
      </FloatingActionButton>
      <FloatingActionButton href="/dashboard/favorites" $rounded>
        <IoHeartCircle />
      </FloatingActionButton>
      <FloatingActionButton
        href="/dashboard/faq"
        $variant="outlined"
        $rounded
        $withShadow
      >
        <FaQuestion />
      </FloatingActionButton>
      <FloatingActionButton
        href="/dashboard/uploads"
        $variant="outlined"
        $rounded
        $withShadow
      >
        <IoAdd />
      </FloatingActionButton>
    </Container>
  );
}
