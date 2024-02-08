'use client';

import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(var(--foreground-rgb), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalPaper = styled.div`
  background: rgb(var(--background-rgb));
  padding: 2rem;
  border-radius: var(--border-radius);
  max-height: 100vh;
  overflow-y: scroll;
`;

interface ModalProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Modal(props: Readonly<ModalProps>) {
  return (
    <ModalContainer onClick={props.onClick}>
      <ModalPaper>{props.children}</ModalPaper>
    </ModalContainer>
  );
}
